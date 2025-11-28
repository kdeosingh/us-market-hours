<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
    <Header />
    
    <main class="px-4 py-6">
      <NuxtPage />
    </main>
    
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { loadSavedTimezone } = useTimezone()

onMounted(() => {
  loadSavedTimezone()
})
</script>

<style>
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>

