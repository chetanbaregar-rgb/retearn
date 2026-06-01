'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/product', label: 'Product' },
  { href: '/drs', label: 'DRS Guide' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="text-accent text-base">◆</span>
          <span className="text-foreground">Retearn</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href
                  ? 'text-foreground font-medium'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm bg-accent text-white font-medium px-4 py-2 rounded hover:bg-accent/90 transition-colors"
          >
            Request a pilot
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                pathname === l.href ? 'text-foreground font-medium' : 'text-muted hover:text-foreground'
              }`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm bg-accent text-white font-medium px-4 py-2 rounded text-center hover:bg-accent/90 transition-colors"
            onClick={() => setOpen(false)}
          >
            Request a pilot
          </Link>
        </div>
      )}
    </header>
  )
}
