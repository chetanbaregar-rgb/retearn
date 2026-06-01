'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('retearn-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('retearn-cookie-consent', 'all')
    setVisible(false)
  }

  function essential() {
    localStorage.setItem('retearn-cookie-consent', 'essential')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-surface-elevated border-t border-border p-4 md:p-6"
    >
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="text-sm text-muted flex-1">
          We use cookies to understand how visitors use this site and to improve your experience.
          See our{' '}
          <Link href="/cookies" className="text-foreground underline hover:text-accent transition-colors">
            cookie policy
          </Link>{' '}
          for details.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={essential}
            className="text-sm text-muted border border-border px-4 py-2 rounded hover:border-foreground hover:text-foreground transition-colors"
          >
            Essential only
          </button>
          <button
            onClick={accept}
            className="text-sm bg-accent text-white font-medium px-4 py-2 rounded hover:bg-accent/90 transition-colors"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}
