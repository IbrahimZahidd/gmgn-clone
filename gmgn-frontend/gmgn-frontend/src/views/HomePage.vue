<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Header Navigation -->
    <header class="border-b border-gray-800 px-4 py-3">
      <nav
        class="max-w-[1920px] mx-auto flex items-center justify-between"
        aria-label="Main navigation"
      >
        <!-- Logo and Primary Navigation -->
        <div class="flex items-center space-x-6">
          <a
            href="/"
            class="flex items-center space-x-2"
            aria-label="GMGN Home"
          >
            <img src="/placeholder.png" alt="Placeholder" class="w-8 h-8" />
            <span class="text-xl font-bold">GMGN</span>
          </a>

          <div class="hidden md:flex items-center space-x-6">
            <a href="/meme" class="hover:text-gray-300 transition-colors"
              >Meme</a
            >
            <a href="/new-pair" class="hover:text-gray-300 transition-colors"
              >New pair</a
            >
            <a href="/trending" class="hover:text-gray-300 transition-colors"
              >Trending</a
            >
            <a href="/copy-trade" class="hover:text-gray-300 transition-colors"
              >CopyTrade</a
            >
            <a href="/holding" class="hover:text-gray-300 transition-colors"
              >Holding</a
            >
            <a href="/follow" class="hover:text-gray-300 transition-colors"
              >Follow</a
            >
          </div>
        </div>

        <!-- Search and Actions -->
        <div class="flex items-center space-x-4">
          <div class="relative max-w-md w-full hidden md:block">
            <input
              type="search"
              placeholder="Search token/contract/wallet"
              class="w-full bg-gray-900 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
              aria-label="Search tokens"
            />
            <SearchIcon
              class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
            />
          </div>

          <button
            class="bg-gray-900 px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors"
            aria-label="Select network"
          >
            <img
              src="/placeholder.png?height=24&width=24"
              alt="SOL"
              class="w-6 h-6 rounded-full"
            />
            <span>SOL</span>
            <ChevronDownIcon class="w-4 h-4" />
          </button>

          <button
            class="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            aria-label="Connect wallet"
          >
            Connect
          </button>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="max-w-[1920px] mx-auto px-4 py-6">
      <!-- Time Interval Filters -->
      <div
        class="flex items-center space-x-4 mb-6"
        role="tablist"
        aria-label="Time intervals"
      >
        <button
          v-for="interval in ['1m', '5m', '1h', '6h', '24h']"
          :key="interval"
          class="px-3 py-1 rounded hover:bg-gray-800 transition-colors"
          :class="{ 'bg-gray-800': interval === '1h' }"
          role="tab"
          :aria-selected="interval === '1h'"
        >
          {{ interval }}
        </button>
      </div>

      <!-- Trading Table -->
      <div class="overflow-x-auto">
        <table class="w-full" aria-label="Token trading information">
          <thead>
            <tr class="text-left text-gray-400">
              <th class="p-4 font-medium">Token</th>
              <th class="p-4 font-medium">Age</th>
              <th class="p-4 font-medium">Price</th>
              <th class="p-4 font-medium">Change</th>
              <th class="p-4 font-medium">Volume</th>
              <th class="p-4 font-medium">Market Cap</th>
              <th class="p-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="i in 10"
              :key="i"
              class="border-t border-gray-800 hover:bg-gray-900/50"
            >
              <td class="p-4">
                <div class="flex items-center space-x-3">
                  <img
                    :src="`/placeholder.png?height=32&width=32`"
                    alt=""
                    class="w-8 h-8 rounded-full"
                  />
                  <span class="font-medium">Token {{ i }}</span>
                </div>
              </td>
              <td class="p-4">{{ Math.floor(Math.random() * 24) }}h</td>
              <td class="p-4">${{ (Math.random() * 100).toFixed(2) }}</td>
              <td
                class="p-4"
                :class="Math.random() > 0.5 ? 'text-green-500' : 'text-red-500'"
              >
                {{ (Math.random() * 10).toFixed(2) }}%
              </td>
              <td class="p-4">
                ${{ Math.floor(Math.random() * 1000000).toLocaleString() }}
              </td>
              <td class="p-4">
                ${{ Math.floor(Math.random() * 10000000).toLocaleString() }}
              </td>
              <td class="p-4">
                <button
                  class="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg transition-colors"
                  aria-label="Buy token"
                >
                  Buy
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>

    <!-- Referral Banner -->
    <div
      class="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 p-4"
      aria-label="Referral promotion"
    >
      <div class="max-w-[1920px] mx-auto flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <span class="text-2xl font-bold">$5000</span>
          <span>Rebates</span>
          <div class="text-sm">
            End in: <span class="font-mono">29d 23h 59m 23s</span>
          </div>
        </div>
        <button
          class="bg-white text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          aria-label="Refer friends"
        >
          Refer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchIcon, ChevronDownIcon } from "lucide-vue-next";

export default {
  name: "HomePage",
  components: {
    SearchIcon,
    ChevronDownIcon,
  },
};
</script>

<style>
/* Add custom scrollbar styling */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #444;
}
</style>
