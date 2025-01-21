import { useState, useEffect } from "react";
import { FirebaseService } from "@/services/firebase";
import { Coin } from "@/types/coin";

export const useTrendingCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const firebaseService = FirebaseService.getInstance();

    const handleCoinsUpdate = (newCoins: Coin[]) => {
      setCoins(newCoins);
      setLoading(false);
    };

    // Start polling for updates
    try {
      firebaseService.startPolling(handleCoinsUpdate);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch trending coins"
      );
      setLoading(false);
    }

    // Cleanup
    return () => {
      firebaseService.cleanup();
    };
  }, []);

  return { coins, loading, error };
};
