import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Request a pilot',
  description: 'Speak to the Retearn UK team about a pilot. We\'ll assess your sites and model the handling-fee economics before you commit.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Contact</p>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 leading-tight">
              Request a pilot
            </h1>
            <p className="text-muted leading-relaxed text-sm">
              Tell us about your sites. We&apos;ll assess your estate, advise on certification requirements,
              and model the handling-fee economics — before you commit to anything.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-5 gap-12">

            {/* Form */}
            <div className="md:col-span-3">
              <form
                action="#"
                method="POST"
                className="space-y-5"
                aria-label="Pilot request form"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="first-name" className="block text-xs text-muted font-medium uppercase tracking-wide mb-2">
                      First name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      required
                      autoComplete="given-name"
                      className="w-full bg-surface-elevated border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-xs text-muted font-medium uppercase tracking-wide mb-2">
                      Last name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      required
                      autoComplete="family-name"
                      className="w-full bg-surface-elevated border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-muted font-medium uppercase tracking-wide mb-2">
                    Work email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full bg-surface-elevated border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs text-muted font-medium uppercase tracking-wide mb-2">
                    Company <span className="text-accent">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    className="w-full bg-surface-elevated border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-xs text-muted font-medium uppercase tracking-wide mb-2">
                    Your role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    autoComplete="organization-title"
                    placeholder="e.g. Head of Facilities, Procurement Director"
                    className="w-full bg-surface-elevated border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="sites" className="block text-xs text-muted font-medium uppercase tracking-wide mb-2">
                    Number of sites / store format
                  </label>
                  <input
                    id="sites"
                    name="sites"
                    type="text"
                    placeholder="e.g. 12 supermarkets, 40 forecourts"
                    className="w-full bg-surface-elevated border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-muted font-medium uppercase tracking-wide mb-2">
                    Anything else we should know
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Timeline, specific requirements, questions..."
                    className="w-full bg-surface-elevated border border-border rounded px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                {/* GDPR consent */}
                <div className="flex items-start gap-3 pt-1">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 rounded border-border bg-surface-elevated accent-accent"
                  />
                  <label htmlFor="consent" className="text-xs text-muted leading-relaxed">
                    I agree to Retearn processing my personal data to respond to this enquiry.
                    See our{' '}
                    <Link href="/privacy" className="text-foreground underline hover:text-accent transition-colors">
                      privacy policy
                    </Link>{' '}
                    for details of how we handle your data and your rights. <span className="text-accent">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-accent text-white font-medium px-8 py-3 rounded hover:bg-accent/90 transition-colors text-sm"
                >
                  Send request
                </button>

                <p className="text-xs text-muted">
                  We typically respond within one business day.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-surface-elevated rounded-lg p-6 border border-border">
                <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">What to expect</p>
                <ul className="space-y-3">
                  {[
                    'A call with our UK team to understand your estate and timeline',
                    'A site assessment and machine configuration recommendation',
                    'A handling-fee TCO model tailored to your projected container volumes',
                    'Commercial terms — buy, lease, or RVM-as-a-service',
                    'No commitment required until you are ready',
                  ].map(i => (
                    <li key={i} className="flex gap-3 text-sm text-muted">
                      <span className="text-accent mt-0.5 shrink-0">✓</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-surface-elevated rounded-lg p-6 border border-border">
                <p className="text-xs text-muted uppercase tracking-wider font-medium mb-3">Data protection</p>
                <p className="text-xs text-muted leading-relaxed">
                  Information you submit is used only to respond to your enquiry and will not be shared
                  with third parties for marketing. We process data under the UK GDPR, DPA 2018.
                  See our{' '}
                  <Link href="/privacy" className="text-foreground underline hover:text-accent transition-colors">
                    privacy policy
                  </Link>{' '}
                  for your full rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
