import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'RVM Product',
  description: 'Retearn reverse vending machines — DMO-certified, high-throughput, compact footprint. Built for the UK Deposit Return Scheme.',
}

const specs = [
  { label: 'Accepted materials', value: 'PET plastic · Steel · Aluminium' },
  { label: 'Container range', value: '150 ml – 3 L' },
  { label: 'Recognition method', value: 'Combined: barcode + shape + weight + metal detection' },
  { label: 'Acceptance accuracy', value: '≥95% (meets DMO RVM specification)' },
  { label: 'PET compaction', value: '≥55% volume reduction, non-reusable, kept in one piece' },
  { label: 'Metal compaction', value: '≥75% volume reduction, non-reusable, kept in one piece' },
  { label: 'DMO IT integration', value: 'Article List connected (summer 2026 spec)' },
  { label: 'Remote monitoring', value: 'Machine health, fill level, fault alerting' },
  { label: 'Connectivity', value: 'Ethernet / 4G' },
]

const serviceFeatures = [
  {
    title: 'Predictive maintenance',
    body: 'Remote diagnostics identify component wear before failure. Scheduled maintenance prevents downtime rather than reacting to it.',
  },
  {
    title: 'UK field engineers',
    body: 'Dedicated UK-based engineers respond to call-outs within agreed SLA windows. Spare parts held in-country for rapid resolution.',
  },
  {
    title: 'Uptime SLAs',
    body: 'Contractual uptime commitments tied to your handling-fee recovery model. Downtime is our problem, not yours.',
  },
  {
    title: 'Fill-level alerts',
    body: 'Automated alerts when compaction chambers approach capacity, so collections are scheduled before your return point goes out of service.',
  },
]

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background border-b border-border overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex-1 max-w-xl">
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Product</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Certified for the UK DRS.<br />Built for uptime.
              </h1>
              <p className="text-muted leading-relaxed mb-8">
                Retearn RVMs meet the UK DMO RVM specification — ≥95% combined recognition accuracy,
                required compaction thresholds, Article List integration. Compact footprint,
                high throughput, UK-serviced.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent text-white font-medium px-6 py-3 rounded hover:bg-accent/90 transition-colors text-sm"
              >
                Request a pilot
              </Link>
            </div>
            <div className="flex-shrink-0 flex justify-center gap-6">
              <div className="relative w-44 h-64 md:w-52 md:h-72">
                <Image
                  src="/images/reklaim-pro.png"
                  alt="Retearn Reklaim Pro — full-size reverse vending machine"
                  fill
                  className="object-contain"
                  priority
                />
                <p className="absolute -bottom-6 inset-x-0 text-center text-xs text-muted">Reklaim Pro</p>
              </div>
              <div className="relative w-44 h-64 md:w-52 md:h-72">
                <Image
                  src="/images/reklaim-mini.svg"
                  alt="Retearn Reklaim Mini — compact countertop reverse vending machine"
                  fill
                  className="object-contain"
                />
                <p className="absolute -bottom-6 inset-x-0 text-center text-xs text-muted">Reklaim Mini</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance callout */}
      <section className="bg-accent/10 border-b border-accent/20">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex items-start gap-4">
            <span className="text-accent text-lg mt-0.5">✓</span>
            <div>
              <p className="text-foreground font-medium text-sm mb-1">DMO RVM Specification compliant</p>
              <p className="text-sm text-muted">
                Retearn machines conform to the UK DMO RVM Specification published October 2025 and
                are being integrated with the DMO software/IT system ahead of the summer 2026 specification release.
                Non-compliant machines cannot connect to the Article List and cannot operate in the scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical specs */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl mb-10">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Specifications</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              What the machine does
            </h2>
          </div>
          <div className="border border-border rounded-lg overflow-hidden">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-8 px-6 py-4 ${
                  i % 2 === 0 ? 'bg-surface' : 'bg-background'
                } border-b border-border last:border-b-0`}
              >
                <p className="text-xs text-muted uppercase tracking-wider font-medium w-48 shrink-0">{s.label}</p>
                <p className="text-sm text-foreground">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
            <div className="flex-1">
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Service</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
                The machine is the hardware. Service is the product.
              </h2>
              <p className="text-muted leading-relaxed text-sm mb-8">
                A return point that&apos;s offline is a handling fee you didn&apos;t earn and a compliance exposure
                for your site. Retearn&apos;s UK service model is designed around one objective: keeping your
                machine running.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {serviceFeatures.map(f => (
                  <div key={f.title} className="bg-surface-elevated rounded-lg p-6 border border-border">
                    <h3 className="text-foreground font-medium mb-2">{f.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 flex justify-center md:w-72">
              <div className="relative w-64 h-64 md:w-72 md:h-72">
                <Image
                  src="/images/tech-graphic.svg"
                  alt="Retearn AI recognition and service technology"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial model */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl mb-10">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Commercial model</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Aligned to your handling-fee recovery
            </h2>
            <p className="text-muted leading-relaxed text-sm">
              The DMO&apos;s handling-fee mechanism is designed to offset the cost of operating a return point.
              Our commercial models are built around this — so your RVM investment is benchmarked against
              the revenue it generates.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Outright purchase', body: 'Full ownership. One capital outlay, long-term cost certainty. Best for operators with capital available and longer planning horizons.' },
              { title: 'Lease', body: 'Spread the cost over the machine\'s operational life. Fixed monthly payments, no large upfront commitment, machine returned or renewed at term end.' },
              { title: 'RVM-as-a-service', body: 'Pay per container or per period — costs directly aligned to your handling-fee recovery. Retearn carries the capital; you pay for operational returns.' },
            ].map(m => (
              <div key={m.title} className="bg-surface rounded-lg p-6 border border-border">
                <h3 className="text-foreground font-medium mb-3">{m.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Talk to our UK team</h2>
            <p className="text-sm text-muted">We&apos;ll scope your sites and model the economics before you commit to anything.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center bg-accent text-white font-medium px-6 py-3 rounded hover:bg-accent/90 transition-colors text-sm"
          >
            Request a pilot
          </Link>
        </div>
      </section>
    </>
  )
}
