import type { Metadata } from 'next'
import '../src/index.css'
import '../src/styles.css'
import '../src/styles/animations.css'
import '98.css'
import { Footer } from './_components/Footer'

export const metadata: Metadata = {
  title: 'The Yellow Dubmarine',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <main style={{ flex: 1, overflow: 'auto', background: 'white' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
