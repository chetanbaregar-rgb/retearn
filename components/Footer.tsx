import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-3">
              <span className="text-accent">■</span>
              <span className="text-foreground">Retearn</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Certified reverse vending machines for the UK Deposit Return Scheme.
              Uptime-guaranteed. Scheme-ready for 1 October 2027.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Solutions</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/product" className="hover:text-foreground transition-colors">RVM Product</Link></li>
              <li><Link href="/drs" className="hover:text-foreground transition-colors">DRS Guide</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Request a pilot</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Company</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy policy</Link></li>
              <li><Link href="/cookies" className="hover:text-foreground transition-colors">Cookie policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Retearn Ltd. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Registered in England &amp; Wales · Company No. [PLACEHOLDER] · Registered office: [PLACEHOLDER]
          </p>
        </div>
      </div>
    </footer>
  )
}
