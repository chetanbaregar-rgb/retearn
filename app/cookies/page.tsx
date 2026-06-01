import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie policy',
  description: 'Retearn cookie policy — how we use cookies on retearn.uk and how to manage your preferences.',
}

const cookies = [
  {
    category: 'Essential',
    required: true,
    description: 'Required for the website to function. Cannot be disabled. Set under the Privacy and Electronic Communications Regulations (PECR 2003).',
    cookies: [
      { name: 'retearn-cookie-consent', purpose: 'Stores your cookie consent preference', duration: '12 months', type: 'First-party' },
    ],
  },
  {
    category: 'Analytics',
    required: false,
    description: 'Help us understand how visitors use the site so we can improve it. Set only if you accept analytics cookies.',
    cookies: [
      { name: '_ga', purpose: 'Google Analytics — distinguishes users', duration: '2 years', type: 'Third-party (Google)' },
      { name: '_ga_*', purpose: 'Google Analytics — maintains session state', duration: '2 years', type: 'Third-party (Google)' },
    ],
  },
]

export default function CookiesPage() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Legal</p>
        <h1 className="text-3xl font-semibold text-foreground mb-2">Cookie policy</h1>
        <p className="text-muted text-sm mb-10">Last updated: 1 June 2026</p>

        <div className="space-y-10 text-sm text-muted">

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">What are cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files placed on your device when you visit a website. They are
              widely used to make websites work, or work more efficiently, and to provide information
              to website owners.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">How we use cookies</h2>
            <p className="leading-relaxed mb-6">
              We use essential cookies that are necessary for the website to function, and — with your
              consent — analytics cookies to understand how the site is used. We do not use advertising,
              profiling, or social media cookies.
            </p>

            <div className="space-y-6">
              {cookies.map(cat => (
                <div key={cat.category} className="border border-border rounded-lg overflow-hidden">
                  <div className="bg-surface px-5 py-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-foreground font-medium">{cat.category}</h3>
                        {cat.required && (
                          <span className="text-xs text-accent border border-accent/30 px-2 py-0.5 rounded-full">Always on</span>
                        )}
                      </div>
                      <p className="text-xs text-muted">{cat.description}</p>
                    </div>
                  </div>
                  <div className="divide-y divide-border">
                    <div className="grid grid-cols-4 px-5 py-2 bg-surface-elevated">
                      {['Name', 'Purpose', 'Duration', 'Type'].map(h => (
                        <p key={h} className="text-xs text-muted font-medium uppercase tracking-wider">{h}</p>
                      ))}
                    </div>
                    {cat.cookies.map(c => (
                      <div key={c.name} className="grid grid-cols-4 px-5 py-3 bg-background">
                        <p className="text-xs font-mono text-foreground">{c.name}</p>
                        <p className="text-xs text-muted">{c.purpose}</p>
                        <p className="text-xs text-muted">{c.duration}</p>
                        <p className="text-xs text-muted">{c.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">Managing your preferences</h2>
            <p className="leading-relaxed mb-3">
              You can change your cookie preferences at any time by clicking &ldquo;Essential only&rdquo; or
              &ldquo;Accept all&rdquo; in the banner at the bottom of any page. Alternatively, you can
              delete cookies through your browser settings:
            </p>
            <ul className="space-y-1">
              {[
                'Chrome: Settings → Privacy and security → Cookies and other site data',
                'Firefox: Settings → Privacy & Security → Cookies and Site Data',
                'Safari: Preferences → Privacy → Manage Website Data',
                'Edge: Settings → Cookies and site permissions',
              ].map(i => (
                <li key={i} className="flex gap-2">
                  <span className="text-border mt-1 shrink-0">–</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-3">
              Note that blocking all cookies will affect website functionality. Essential cookies cannot
              be disabled without impacting core site features.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">Third-party cookies</h2>
            <p className="leading-relaxed">
              If you accept analytics cookies, Google Analytics will set cookies on your device. Google
              processes this data as a data processor on our behalf, under a data processing agreement.
              For more information, see{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline hover:text-accent transition-colors"
              >
                Google&apos;s privacy policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-base font-semibold mb-3">Questions</h2>
            <p className="leading-relaxed">
              Contact us at{' '}
              <a href="mailto:privacy@retearn.uk" className="text-foreground underline hover:text-accent transition-colors">
                privacy@retearn.uk
              </a>{' '}
              or read our{' '}
              <Link href="/privacy" className="text-foreground underline hover:text-accent transition-colors">
                full privacy policy
              </Link>.
            </p>
          </section>

        </div>
      </div>
    </section>
  )
}
