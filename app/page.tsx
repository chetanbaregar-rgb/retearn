import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '≥95%', label: 'Container acceptance accuracy' },
  { value: '20p', label: 'Per-container deposit, set nationally' },
  { value: '1 Oct 2027', label: 'UK DRS scheme go-live' },
  { value: '~36,750', label: 'RVMs needed across the UK' },
]

const pillars = [
  {
    icon: '✓',
    title: 'DMO-certified hardware',
    body: 'Retearn RVMs conform to the UK DMO RVM specification — meeting the ≥95% combined recognition accuracy and compaction thresholds required to connect to the Article List.',
  },
  {
    icon: '◎',
    title: 'UK service network',
    body: 'Downtime is lost handling-fee revenue. Retearn provides dedicated UK field service, predictive maintenance, and defined uptime SLAs so your return point stays operational.',
  },
  {
    icon: '◈',
    title: 'Flexible commercial terms',
    body: 'Buy outright, lease, or adopt RVM-as-a-service with costs aligned to your handling-fee recovery. We model TCO against your projected container volumes before you commit.',
  },
]

const steps = [
  { n: '01', title: 'Scope your sites', body: 'We assess your estate — store format, throughput projections, floor constraints — and recommend the right machine configuration.' },
  { n: '02', title: 'Commercial terms', body: 'Choose buy, lease, or RVM-as-a-service. We model projected handling-fee recovery against your cost structure.' },
  { n: '03', title: 'Installation & certification', body: 'Machines are installed, connected to the UK DMO Article List, and certified before your return point goes live.' },
  { n: '04', title: 'Ongoing service', body: 'Our UK field team monitors uptime, handles maintenance, and resolves issues to SLA — so you capture every handling fee.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background border-b border-border overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
            {/* Text */}
            <div className="flex-1 max-w-xl">
              <p className="text-sm text-accent font-medium uppercase tracking-widest mb-6">
                UK Deposit Return Scheme · From 1 October 2027
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
                Every container returned.<br />
                Every handling fee<br />
                captured.
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-10">
                Retearn RVMs are built for scheme uptime — DMO-certified, UK-serviced,
                and ready for 1 October 2027. Your return point earns every time it runs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent text-white font-medium px-6 py-3 rounded hover:bg-accent/90 transition-colors text-sm"
                >
                  Request a pilot
                </Link>
                <Link
                  href="/drs"
                  className="inline-flex items-center justify-center border border-accent/40 text-muted font-medium px-6 py-3 rounded hover:border-accent hover:text-foreground transition-colors text-sm"
                >
                  DRS retailer guide →
                </Link>
              </div>
            </div>
            {/* Machine image */}
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Purple glow to blend with machine's circle background */}
                <div className="absolute inset-8 rounded-full bg-accent/10 blur-2xl" />
                <Image
                  src="/images/reklaim-pro.png"
                  alt="Retearn Reklaim Pro reverse vending machine"
                  fill
                  className="object-contain relative"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border">
            {stats.map(s => (
              <div key={s.value} className="md:px-8 first:pl-0 last:pr-0">
                <p className="text-2xl md:text-3xl font-semibold text-accent mb-1">{s.value}</p>
                <p className="text-xs text-muted leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRS context */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl mb-12">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">The scheme</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              How the UK DRS changes retail
            </h2>
            <p className="text-muted leading-relaxed">
              From 1 October 2027, any retailer selling in-scope drinks must charge a 20p deposit per
              container and operate a compliant return point. The DMO pays a handling fee per container
              returned. Your return point&apos;s uptime determines how much of that fee you recover.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'The deposit obligation',
                body: 'Retailers selling PET, steel or aluminium drinks containers between 150 ml and 3 L must collect the 20p deposit at point of sale and provide a compliant return point.',
              },
              {
                title: 'The handling fee',
                body: 'The DMO pays retailers a per-container handling fee to offset the cost of operating the return point — covering purchase, lease, maintenance, and operation of certified infrastructure.',
              },
              {
                title: 'The compliance gate',
                body: 'Only machines that meet the DMO RVM specification and integrate with the DMO IT system can connect to the Article List. Non-certified machines cannot operate in the scheme.',
              },
            ].map(c => (
              <div key={c.title} className="bg-surface rounded-lg p-6 border border-border">
                <h3 className="text-foreground font-medium mb-3">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Retearn */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl mb-12">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Why Retearn</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Certified. Serviced. On your terms.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map(p => (
              <div key={p.title} className="bg-surface-elevated rounded-lg p-6 border border-border">
                <span className="text-accent text-xl mb-4 block">{p.icon}</span>
                <h3 className="text-foreground font-medium mb-3">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl mb-12">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Process</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              From assessment to scheme go-live
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map(s => (
              <div key={s.n}>
                <p className="text-4xl font-semibold text-accent/30 mb-3 font-mono">{s.n}</p>
                <h3 className="text-foreground font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Get started</p>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to be scheme-ready?
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Speak to our UK team about a pilot. We&apos;ll assess your sites and model the handling-fee
            economics before you commit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-accent text-white font-medium px-8 py-3 rounded hover:bg-accent/90 transition-colors text-sm"
          >
            Request a pilot
          </Link>
        </div>
      </section>
    </>
  )
}
