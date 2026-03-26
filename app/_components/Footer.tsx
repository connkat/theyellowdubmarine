'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Footer() {
  const [startOpen, setStartOpen] = useState(false)

  return (
    <footer
      style={{
        background: '#c0c0c0',
        borderTop: '2px solid #fff',
        boxShadow: 'inset 0 1px 0 #dfdfdf',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '2px 4px',
        position: 'relative',
      }}
      onClick={() => setStartOpen(false)}
    >
      {startOpen && (
        <div
          className="window"
          style={{ position: 'absolute', bottom: '100%', left: 0, width: 200, marginBottom: 2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="title-bar"
            style={{
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 28,
              background: '#808080',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: 2,
            }}
          >
            The Yellow Dubmarine
          </div>
          <div className="window-body" style={{ paddingLeft: 36, paddingTop: 4, paddingBottom: 4 }}>
            <Link href="/" onClick={() => setStartOpen(false)}>
              <button style={{ width: '100%', textAlign: 'left', marginBottom: 2 }}>🏠 Home</button>
            </Link>
            <Link href="/pogs" onClick={() => setStartOpen(false)}>
              <button style={{ width: '100%', textAlign: 'left', marginBottom: 2 }}>🪙 Pogs</button>
            </Link>
            <Link href="/photos" onClick={() => setStartOpen(false)}>
              <button style={{ width: '100%', textAlign: 'left', marginBottom: 2 }}>📷 Photos</button>
            </Link>
            <Link href="/site-map" onClick={() => setStartOpen(false)}>
              <button style={{ width: '100%', textAlign: 'left' }}>🗺️ Site Map</button>
            </Link>
          </div>
        </div>
      )}
      <button
        style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 4 }}
        onClick={(e) => {
          e.stopPropagation()
          setStartOpen((o) => !o)
        }}
      >
        <span>🪟</span> Start
      </button>
    </footer>
  )
}
