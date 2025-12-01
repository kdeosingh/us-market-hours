<template>
  <header class="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
    <div class="max-w-6xl mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo (always visible) -->
        <NuxtLink to="/" class="flex items-center space-x-3 hover:opacity-90 transition-opacity flex-shrink-0">
          <div class="w-10 h-10 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" fill="none" class="w-full h-full">
              <defs>
                <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:rgb(94, 234, 212);stop-opacity:1" />
                  <stop offset="100%" style="stop-color:rgb(34, 211, 238);stop-opacity:1" />
                </linearGradient>
              </defs>
              
              <!-- Grid pattern -->
              <g fill="url(#grid-gradient)">
                <rect x="65" y="30" width="40" height="35" />
                <rect x="110" y="30" width="40" height="35" />
                <rect x="155" y="30" width="40" height="35" />
                <rect x="200" y="30" width="40" height="35" />
                <rect x="65" y="70" width="40" height="35" />
                <rect x="110" y="70" width="40" height="35" />
                <rect x="155" y="70" width="40" height="35" />
                <rect x="200" y="70" width="40" height="35" />
                <rect x="65" y="110" width="40" height="35" />
                <rect x="110" y="110" width="40" height="35" />
                <rect x="155" y="110" width="40" height="35" />
                <rect x="200" y="110" width="40" height="35" />
                <rect x="65" y="150" width="40" height="35" />
                <rect x="110" y="150" width="40" height="35" />
                <rect x="155" y="150" width="40" height="35" />
                <rect x="200" y="150" width="40" height="35" />
                <rect x="65" y="190" width="40" height="35" />
                <rect x="110" y="190" width="40" height="35" />
                <rect x="155" y="190" width="40" height="35" />
                <rect x="200" y="190" width="40" height="35" />
                <rect x="65" y="230" width="40" height="35" />
                <rect x="110" y="230" width="40" height="35" />
                <rect x="155" y="230" width="40" height="35" />
                <rect x="200" y="230" width="40" height="35" />
              </g>
              
              <!-- Arrow going up -->
              <path d="M 100 200 L 150 80 L 200 120 L 170 120 L 170 200 L 130 200 L 130 120 Z" 
                    fill="#ffffff" opacity="0.95"/>
              
              <!-- Bar chart -->
              <g fill="#ffffff" opacity="0.95">
                <rect x="210" y="180" width="25" height="60" />
                <rect x="240" y="150" width="25" height="90" />
                <rect x="210" y="120" width="25" height="50" />
              </g>
              
              <!-- Flag on top -->
              <path d="M 240 60 L 240 100 L 285 85 Z" fill="url(#grid-gradient)"/>
              <line x1="240" y1="60" x2="240" y2="100" stroke="url(#grid-gradient)" stroke-width="3"/>
            </svg>
          </div>
          
          <!-- Title - Hidden on mobile, visible on larger screens -->
          <div class="hidden lg:block">
            <h1 class="text-lg font-bold text-white tracking-tight">
              Market Open Time
            </h1>
            <p class="text-xs text-blue-100">NYSE & NASDAQ real-time schedule</p>
          </div>
        </NuxtLink>
        
        <!-- Desktop Navigation - Hidden on mobile -->
        <nav class="hidden md:flex items-center space-x-1">
          <NuxtLink 
            to="/" 
            class="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all"
            active-class="bg-white/20 text-white"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/news" 
            class="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all"
            active-class="bg-white/20 text-white"
          >
            News
          </NuxtLink>
          <NuxtLink 
            to="/api-docs" 
            class="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all"
            active-class="bg-white/20 text-white"
          >
            API
          </NuxtLink>
        </nav>

        <!-- Right side controls -->
        <div class="flex items-center space-x-2">
          <TimezoneSelector />
          <ThemeToggle />
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile Navigation Menu -->
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden mt-3 pb-2 border-t border-white/20 pt-3"
      >
        <nav class="flex flex-col space-y-1">
          <NuxtLink 
            to="/" 
            @click="mobileMenuOpen = false"
            class="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all"
            active-class="bg-white/20 text-white"
          >
            Home
          </NuxtLink>
          <NuxtLink 
            to="/news" 
            @click="mobileMenuOpen = false"
            class="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all"
            active-class="bg-white/20 text-white"
          >
            News
          </NuxtLink>
          <NuxtLink 
            to="/api-docs" 
            @click="mobileMenuOpen = false"
            class="px-3 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all"
            active-class="bg-white/20 text-white"
          >
            API
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

// Close mobile menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
