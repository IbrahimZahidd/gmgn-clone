import { ref, onValue, get, DataSnapshot } from "firebase/database";
import { database } from "@/lib/firebase";
import { Coin } from "@/types/coin";

export class FirebaseService {
  private static instance: FirebaseService;
  private intervalId: NodeJS.Timeout | null = null;

  private constructor() {
    // Private constructor to enforce singleton
  }

  public static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  /**
   * Fetches trending coins data from Firebase
   * @returns Promise<Coin[]>
   */
  public async getTrendingCoins(): Promise<Coin[]> {
    try {
      const coinsRef = ref(database, "trending/coins");
      const snapshot = await get(coinsRef);
      return snapshot.val() || [];
    } catch (error) {
      console.error("Error fetching trending coins:", error);
      return [];
    }
  }

  /**
   * Sets up real-time updates for trending coins
   * @param callback Function to be called when data updates
   */
  public setupRealtimeUpdates(callback: (coins: Coin[]) => void): void {
    const coinsRef = ref(database, "trending/coins");
    onValue(
      coinsRef,
      (snapshot: DataSnapshot) => {
        const data = snapshot.val() || [];
        callback(data);
      },
      (error) => {
        console.error("Error in realtime updates:", error);
      }
    );
  }

  /**
   * Starts polling for trending coins data
   * @param callback Function to be called with updated data
   * @param interval Polling interval in milliseconds (default: 5 minutes)
   */
  public startPolling(
    callback: (coins: Coin[]) => void,
    interval: number = 5 * 60 * 1000
  ): void {
    // Initial fetch
    this.getTrendingCoins().then(callback);

    // Set up polling
    this.intervalId = setInterval(async () => {
      const data = await this.getTrendingCoins();
      callback(data);
    }, interval);
  }

  /**
   * Stops polling for trending coins data
   */
  public stopPolling(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Cleans up Firebase listeners
   */
  public cleanup(): void {
    this.stopPolling();
    const coinsRef = ref(database, "trending/coins");
    onValue(coinsRef, () => {}, { onlyOnce: true }); // Unsubscribe from updates
  }
}
