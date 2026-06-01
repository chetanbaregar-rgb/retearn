import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'Retearn is a UK reverse vending machine supplier backed by the Recykal group, one of India\'s leading circular-economy businesses.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-background border-b border-border overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex-1 max-w-xl">
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">About</p>
              <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                Built for the UK DRS.<br />Backed by circular-economy experience.
              </h1>
              <p className="text-muted leading-relaxed">
                Retearn is a UK reverse vending machine business focused on one objective: helping
                retailers operate compliant, profitable return points from day one of the UK Deposit
                Return Scheme.
              </p>
            </div>
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative w-80 h-64 md:w-96 md:h-80">
                <Image
                  src="/images/about-graphic.svg"
                  alt="Retearn circular economy infrastructure"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our focus */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Our focus</p>
              <h2 className="text-2xl font-semibold text-foreground mb-4">A UK business for a UK scheme</h2>
              <div className="space-y-4 text-sm text-muted leading-relaxed">
                <p>
                  The UK DRS is a specific regulatory environment with a specific compliance gate,
                  a specific IT system, and a specific go-live date. Retearn is built around those
                  constraints — not adapted from a different market.
                </p>
                <p>
                  Our UK team manages certification, service, and commercial relationships locally.
                  We are not a global hardware brand operating at arm&apos;s length. We are accountable
                  for uptime because our commercial model depends on it.
                </p>
                <p>
                  We are newer to the UK market than some competitors. We are honest about that.
                  What we offer instead is agility, a clean-sheet machine designed for the UK&apos;s
                  constrained retail estate, and a commercial model incumbents are slower to provide.
                </p>
              </div>
            </div>
            <div className="bg-surface-elevated rounded-lg p-8 border border-border">
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">Group heritage</p>
              <h3 className="text-foreground font-medium text-lg mb-4">Recykal group</h3>
              <div className="space-y-3 text-sm text-muted leading-relaxed">
                <p>
                  Retearn is part of the Recykal group, one of India&apos;s leading circular-economy
                  and waste-management businesses. Recykal operates digital infrastructure for
                  Extended Producer Responsibility (EPR) compliance and material recovery across
                  India.
                </p>
                <p>
                  The group&apos;s operational experience in regulated waste and recycling systems
                  underpins Retearn&apos;s approach to the UK DRS: compliance first, service
                  accountability, and economics that work for the retailer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / approach */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-xl mb-10">
            <p className="text-xs text-accent uppercase tracking-widest font-medium mb-3">Our approach</p>
            <h2 className="text-2xl font-semibold text-foreground">How we work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Compliance is non-negotiable',
                body: 'We treat the DMO RVM specification and Article List integration as the floor, not a checkbox. Your machine runs in the scheme or it doesn\'t — there is no middle ground.',
              },
              {
                title: 'Uptime is the product',
                body: 'We don\'t sell hardware and disappear. The commercial model, the service contract, and the field-service network are designed around one outcome: your return point stays operational.',
              },
              {
                title: 'Economics must work for you',
                body: 'The handling fee exists to make return-point operation viable. We build our commercial models around your handling-fee recovery — so you know the economics before you sign anything.',
              },
            ].map(v => (
              <div key={v.title} className="bg-surface rounded-lg p-6 border border-border">
                <h3 className="text-foreground font-medium mb-3">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-elevated">
        <div className="mx-auto max-w-6xl px-6 py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Get in touch</h2>
            <p className="text-sm text-muted">Discuss your sites, your timeline, and your options with our UK team.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center bg-accent text-white font-medium px-6 py-3 rounded hover:bg-accent/90 transition-colors text-sm"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
