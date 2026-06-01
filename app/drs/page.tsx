import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DRS Retailer Guide',
  description: 'What the UK Deposit Return Scheme means for retailers — obligations, timeline, exemptions, handling fees, and what you need to do before 1 October 2027.',
}

const timeline = [
  { date: 'Oct 2025', event: 'DMO publishes RVM hardware specification', note: 'Sets the compliance baseline all certified machines must meet' },
  { date: 'Summer 2026', event: 'DMO software/IT integration spec published', note: 'RVM suppliers must integrate to connect to the Article List' },
  { date: 'Q4 2026 – Q2 2027', event: 'Installation and certification window', note: 'Return Point Operators should have certified infrastructure in place' },
  { date: '1 Oct 2027', event: 'UK DRS goes live', note: 'England, Scotland, Northern Ireland, and Wales (under separate scheme)' },
]

const faqs = [
  {
    q: 'Which containers are in scope?',
    a: 'PET plastic, steel, and aluminium drinks containers between 150 ml and 3 L. Glass is excluded from the England/Scotland/Northern Ireland scheme but is included in Wales (with a four-year no-deposit transition period from October 2027).',
  },
  {
    q: 'Does every store need an RVM?',
    a: 'No. Urban stores under 100 m² are automatically exempt — no application required. Other stores can apply for exemption on grounds of proximity to another return point or site constraints. Stores that do host a return point may also accept containers manually (staff at a till) instead of installing an RVM.',
  },
  {
    q: 'What is the handling fee?',
    a: 'The DMO pays retailers a per-container handling fee to compensate for the non-recoverable cost of hosting a return point. The fee calculation accounts for the cost of purchasing, leasing, maintaining, and operating certified collection infrastructure. The exact per-container fee is set by the DMO.',
  },
  {
    q: 'What does "Article List connection" mean?',
    a: 'The UK DMO operates an Article List — a database of in-scope containers. RVMs must integrate with the DMO IT system to verify containers against this list. Machines that are not connected to the Article List cannot function in the scheme.',
  },
  {
    q: 'What happens if my machine is down?',
    a: 'Downtime means you are not capturing handling fees and may be out of compliance with your return point obligations. This is why uptime SLAs and rapid field-service response are critical to the RVM selection decision — not just hardware purchase price.',
  },
  {
    q: 'What is the Wales scheme?',
    a: 'Wales is legislating a separate DRS for the same go-live date (1 October 2027). The Wales scheme includes glass containers (with a four-year no-deposit transition) and has a different scheme administrator. The Wales procurement is later and less locked-up than the England/Scotland/Northern Ireland scheme.',
  },
]

export default function DRSPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">DRS retailer guide</p>
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              What the UK Deposit Return Scheme means for your business
            </h1>
            <p className="text-muted leading-relaxed">
              From 1 October 2027, most retailers selling in-scope drinks will need to operate a compliant
              return point. Here is what you need to know — and what you need to do.
            </p>
          </div>
        </div>
      </section>

      {/* What is the DRS */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Overview</p>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How the scheme works</h2>
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  The UK Deposit Return Scheme requires retailers to charge a 20p deposit on every in-scope
                  drinks container sold. When a consumer returns the empty container to a registered return
                  point, they get their 20p back.
                </p>
                <p>
                  The scheme is administered by the UK Deposit Management Organisation (UK DMO), which operates
                  the Article List, sets handling fees, and manages IT integration with all certified machines.
                </p>
                <p>
                  To operate a return point, you need a certified reverse vending machine (or to accept
                  containers manually). The machine must be connected to the UK DMO Article List — which
                  requires meeting the published hardware specification and IT integration requirements.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Scheme administrator', value: 'UK DMO (Exchange for Change)' },
                { label: 'Go-live date', value: '1 October 2027' },
                { label: 'Deposit amount', value: '20p per container' },
                { label: 'In-scope containers', value: 'PET, steel, aluminium · 150 ml–3 L' },
                { label: 'Glass (England/Scotland/NI)', value: 'Excluded' },
                { label: 'Glass (Wales)', value: 'Included — 4-year no-deposit transition' },
              ].map(r => (
                <div key={r.label} className="flex justify-between gap-4 py-3 border-b border-border last:border-0">
                  <p className="text-xs text-muted font-medium uppercase tracking-wide">{r.label}</p>
                  <p className="text-sm text-foreground text-right">{r.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who must host */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-xl mb-10">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Obligations</p>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Who must host a return point</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Must host',
                accent: 'text-accent',
                items: [
                  'Supermarkets and larger-format grocery stores',
                  'Convenience stores ≥100 m² floor area',
                  'Off-licences and specialist drinks retailers',
                  'Petrol stations and forecourts (if selling in-scope drinks)',
                  'Online retailers (defined cases)',
                ],
              },
              {
                title: 'Automatically exempt',
                accent: 'text-muted',
                items: [
                  'Urban stores under 100 m² — no application needed',
                  'Stores that receive an exemption on grounds of proximity to another return point',
                  'Stores with site constraints preventing installation',
                ],
              },
              {
                title: 'Manual takeback permitted',
                accent: 'text-muted',
                items: [
                  'Qualifying hosts may accept containers manually at a till or service desk',
                  'No RVM required if manual takeback meets the scheme requirements',
                  'Typically used in smaller-format stores where RVM installation is impractical',
                ],
              },
            ].map(g => (
              <div key={g.title} className="bg-surface rounded-lg p-6 border border-border">
                <h3 className={`font-medium mb-4 ${g.accent}`}>{g.title}</h3>
                <ul className="space-y-2">
                  {g.items.map(i => (
                    <li key={i} className="text-sm text-muted flex gap-2">
                      <span className="text-border mt-1">–</span>
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-xl mb-10">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Timeline</p>
            <h2 className="text-2xl font-semibold text-foreground">Key dates for retailers</h2>
          </div>
          <div className="space-y-0 border border-border rounded-lg overflow-hidden">
            {timeline.map((t, i) => (
              <div
                key={t.date}
                className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-8 px-6 py-5 border-b border-border last:border-0 ${
                  i % 2 === 0 ? 'bg-surface' : 'bg-background'
                }`}
              >
                <p className="text-accent font-mono text-sm font-medium w-28 shrink-0">{t.date}</p>
                <div>
                  <p className="text-foreground text-sm font-medium mb-1">{t.event}</p>
                  <p className="text-muted text-xs">{t.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-xl mb-10">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Common questions</p>
            <h2 className="text-2xl font-semibold text-foreground">Retailer FAQs</h2>
          </div>
          <div className="max-w-3xl space-y-6">
            {faqs.map(f => (
              <div key={f.q} className="border-b border-border pb-6 last:border-0">
                <h3 className="text-foreground font-medium mb-2 text-sm">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Ready to scope your return point?</h2>
            <p className="text-sm text-muted">We&apos;ll assess your sites, advise on certification, and model the handling-fee economics.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center bg-accent text-white font-medium px-6 py-3 rounded hover:bg-accent/90 transition-colors text-sm"
          >
            Speak to the team
          </Link>
        </div>
      </section>
    </>
  )
}
