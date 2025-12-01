<template>
  <div class="max-w-4xl mx-auto space-y-6 py-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-8">Last Updated: December 1, 2025</p>
      
      <div class="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Information We Collect</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            Market Open Time collects minimal information to provide our services:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Usage Data:</strong> We collect anonymous analytics data through Google Analytics to understand how visitors use our site.</li>
            <li><strong>Cookies:</strong> We use cookies for analytics and to remember your timezone preferences.</li>
            <li><strong>IP Addresses:</strong> Server logs may temporarily store IP addresses for security purposes.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. How We Use Your Information</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            We use collected information to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Provide and improve our market hours information service</li>
            <li>Remember your timezone preference for better user experience</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Maintain site security and prevent abuse</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Third-Party Services</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            We use the following third-party services:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li><strong>Google Analytics:</strong> For anonymous usage statistics. View <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 underline">Google's Privacy Policy</a>.</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements. Ads are personalized based on your browsing history.</li>
            <li><strong>RSS Feed Providers:</strong> We aggregate news from Reuters, CNBC, MarketWatch, and Yahoo Finance.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Cookies</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            We use cookies for:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Storing your timezone preference</li>
            <li>Google Analytics tracking</li>
            <li>Google AdSense ad personalization</li>
          </ul>
          <p class="text-gray-700 dark:text-gray-300 mt-3">
            You can control cookies through your browser settings. Disabling cookies may affect site functionality.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. Data Storage and Security</h2>
          <p class="text-gray-700 dark:text-gray-300">
            We do not store personal information on our servers. All timezone preferences are stored locally in your browser. 
            We implement industry-standard security measures to protect our infrastructure.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. Your Rights</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            You have the right to:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Clear your browser cookies and local storage at any time</li>
            <li>Opt-out of personalized ads through Google's <a href="https://adssettings.google.com" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 underline">Ad Settings</a></li>
            <li>Use browser extensions to block analytics tracking</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Children's Privacy</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Our service is not directed to children under 13. We do not knowingly collect information from children.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Changes to This Policy</h2>
          <p class="text-gray-700 dark:text-gray-300">
            We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">9. Contact Us</h2>
          <p class="text-gray-700 dark:text-gray-300">
            If you have questions about this privacy policy, please contact us through our website.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy Policy - Market Open Time',
  meta: [
    { name: 'description', content: 'Privacy Policy for Market Open Time. Learn how we collect, use, and protect your information.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

