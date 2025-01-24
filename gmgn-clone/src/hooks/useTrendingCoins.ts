import { useState, useEffect, useCallback } from "react";
import { ref, onValue, get, off, Database } from "firebase/database";
import { database } from "@/lib/firebase";
import { Coin } from "@/types/coin";

export const useTrendingCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCoins = useCallback(async () => {
    try {
      const coinsRef = ref(database, "trending/coins");
      const snapshot = await get(coinsRef);
      const data = snapshot.val() || [];
      setCoins(data);
      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch trending coins"
      );
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const coinsRef = ref(database, "trending/coins");

    // Initial fetch
    fetchCoins();

    // Set up real-time listener
    const unsubscribe = onValue(
      coinsRef,
      (snapshot) => {
        const data = snapshot.val() || [];
        setCoins(data);
        setLoading(false);
      },
      (error) => {
        console.error("Error in realtime updates:", error);
        setError(
          error instanceof Error ? error.message : "Error in realtime updates"
        );
        setLoading(false);
      }
    );

    // Cleanup function
    return () => {
      unsubscribe();
      off(coinsRef); // Remove all callbacks
    };
  }, []); // Empty dependency array since we want this to run once

  return { coins, loading, error };
};
