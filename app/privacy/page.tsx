import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'Retearn privacy policy — how we collect, use, and protect your personal data under the UK GDPR and Data Protection Act 2018.',
}

export default function PrivacyPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Legal</p>
        <h1 className="text-3xl font-semibold text-foreground mb-2">Privacy policy</h1>
        <p className="text-muted text-sm mb-10">Last updated: 1 June 2026</p>

        <div className="prose prose-sm max-w-none space-y-10 text-muted">

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">1. Who we are</h2>
            <p className="leading-relaxed">
              Retearn Ltd (&ldquo;Retearn&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is registered in England and Wales
              (Company No. [PLACEHOLDER]). Our registered office is at [PLACEHOLDER].
            </p>
            <p className="leading-relaxed mt-3">
              We are the data controller for personal data collected through this website. For data
              protection enquiries, contact us at{' '}
              <a href="mailto:privacy@retearn.uk" className="text-foreground underline hover:text-accent transition-colors">
                privacy@retearn.uk
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">2. What data we collect and why</h2>
            <div className="border border-border rounded-lg overflow-hidden">
              {[
                {
                  data: 'Contact form submissions (name, work email, company, role, message)',
                  purpose: 'To respond to your enquiry',
                  basis: 'Legitimate interests (Article 6(1)(f) UK GDPR) — responding to business enquiries',
                  retention: '2 years from last contact',
                },
                {
                  data: 'Website usage data (pages visited, time on site, referrer)',
                  purpose: 'To understand how the site is used and improve it',
                  basis: 'Consent (Article 6(1)(a) UK GDPR) — only if you accept analytics cookies',
                  retention: '26 months (Google Analytics default)',
                },
                {
                  data: 'Cookie consent preference',
                  purpose: 'To record your cookie consent choice',
                  basis: 'Legal obligation (PECR 2003)',
                  retention: '12 months',
                },
              ].map((r, i) => (
                <div key={r.data} className={`px-5 py-4 border-b border-border last:border-0 ${i % 2 === 0 ? 'bg-surface' : 'bg-background'}`}>
                  <p className="text-foreground text-sm font-medium mb-1">{r.data}</p>
                  <p className="text-xs text-muted mb-1"><span className="font-medium">Purpose:</span> {r.purpose}</p>
                  <p className="text-xs text-muted mb-1"><span className="font-medium">Lawful basis:</span> {r.basis}</p>
                  <p className="text-xs text-muted"><span className="font-medium">Retention:</span> {r.retention}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">3. Cookies</h2>
            <p className="leading-relaxed">
              We use essential cookies required for the website to function and, with your consent,
              analytics cookies to understand usage. You can manage your cookie preferences at any time
              using the banner at the bottom of the page or by visiting our{' '}
              <Link href="/cookies" className="text-foreground underline hover:text-accent transition-colors">
                cookie policy
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">4. Who we share your data with</h2>
            <p className="leading-relaxed mb-3">
              We do not sell or rent personal data. We may share data with the following categories of
              processor, each under a written data processing agreement:
            </p>
            <ul className="space-y-2 text-sm">
              {[
                'Website hosting and infrastructure providers',
                'CRM and email platforms (used to manage enquiry responses)',
                'Analytics providers (only if you have consented to analytics cookies)',
              ].map(i => (
                <li key={i} className="flex gap-2">
                  <span className="text-border mt-1">–</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-3">
              Some of our processors may process data outside the UK. Where this occurs, we ensure
              appropriate safeguards are in place, such as the UK International Data Transfer Agreement
              (IDTA) or equivalent.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">5. Your rights</h2>
            <p className="leading-relaxed mb-3">Under the UK GDPR, you have the right to:</p>
            <ul className="space-y-2 text-sm">
              {[
                'Access the personal data we hold about you',
                'Correct inaccurate personal data',
                'Request erasure of your personal data (where no overriding legitimate purpose applies)',
                'Object to processing based on legitimate interests',
                'Withdraw consent at any time (where processing is consent-based)',
                'Request restriction of processing in certain circumstances',
                'Data portability (where processing is automated and consent or contract-based)',
              ].map(r => (
                <li key={r} className="flex gap-2">
                  <span className="text-accent shrink-0">✓</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:privacy@retearn.uk" className="text-foreground underline hover:text-accent transition-colors">
                privacy@retearn.uk
              </a>. We will respond within one calendar month.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">6. Complaints</h2>
            <p className="leading-relaxed">
              You have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO)
              at{' '}
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-accent transition-colors"
              >
                ico.org.uk
              </a>{' '}
              or by calling 0303 123 1113. We would appreciate the opportunity to address your concerns
              before you contact the ICO — please email us first.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">7. Changes to this policy</h2>
            <p className="leading-relaxed">
              We may update this policy when our data processing activities change. Material changes will
              be notified on this page with an updated &ldquo;last updated&rdquo; date.
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}
