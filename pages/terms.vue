<template>
  <div class="max-w-4xl mx-auto space-y-6 py-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-8">Last Updated: December 1, 2025</p>
      
      <div class="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
          <p class="text-gray-700 dark:text-gray-300">
            By accessing and using Market Open Time, you accept and agree to be bound by these Terms of Service. 
            If you do not agree to these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Description of Service</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Market Open Time provides real-time information about NYSE and NASDAQ stock market hours, holiday schedules, 
            and related market news. The service is provided "as is" for informational purposes only.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. No Investment Advice</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Market Open Time does not provide investment, financial, or trading advice. All information is for informational 
            purposes only. You should consult with a licensed financial advisor before making any investment decisions.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">4. Data Accuracy</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            While we strive to provide accurate and up-to-date information:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Market hours data is sourced from official exchange calendars but may be subject to change</li>
            <li>News content is aggregated from third-party RSS feeds and is provided "as is"</li>
            <li>We are not responsible for errors, delays, or inaccuracies in the information provided</li>
            <li>Always verify critical information with official exchange sources or your broker</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">5. API Usage</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            If using our API services:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>You must comply with rate limits and usage restrictions</li>
            <li>API keys are personal and should not be shared</li>
            <li>We reserve the right to revoke API access for misuse</li>
            <li>API service may be modified or discontinued at any time</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">6. Prohibited Uses</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-3">
            You may not:
          </p>
          <ul class="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>Use automated systems to scrape or harvest data excessively</li>
            <li>Attempt to circumvent security measures or rate limits</li>
            <li>Resell or redistribute our data without permission</li>
            <li>Use the service for illegal purposes</li>
            <li>Interfere with the proper functioning of the service</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">7. Intellectual Property</h2>
          <p class="text-gray-700 dark:text-gray-300">
            The Market Open Time website design, logo, and original content are protected by copyright. 
            Market data is sourced from public exchange calendars. News content belongs to respective publishers.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">8. Disclaimer of Warranties</h2>
          <p class="text-gray-700 dark:text-gray-300">
            THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
            WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">9. Limitation of Liability</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Market Open Time and its operators shall not be liable for any direct, indirect, incidental, special, 
            or consequential damages resulting from the use or inability to use the service, including but not limited 
            to trading losses, business interruption, or data loss.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">10. Third-Party Links</h2>
          <p class="text-gray-700 dark:text-gray-300">
            Our service may contain links to third-party websites and news sources. We are not responsible for 
            the content or practices of these external sites.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">11. Modifications to Service</h2>
          <p class="text-gray-700 dark:text-gray-300">
            We reserve the right to modify, suspend, or discontinue the service at any time without notice. 
            We may also update these terms periodically.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">12. Governing Law</h2>
          <p class="text-gray-700 dark:text-gray-300">
            These terms shall be governed by and construed in accordance with applicable laws, without regard to 
            conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">13. Contact</h2>
          <p class="text-gray-700 dark:text-gray-300">
            For questions about these Terms of Service, please contact us through our website.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Terms of Service - Market Open Time',
  meta: [
    { name: 'description', content: 'Terms of Service for Market Open Time. Read our terms and conditions for using our market hours information service.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>


