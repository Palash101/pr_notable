import type { Metadata } from 'next'
import '../styles/fonts.css'
import '../styles/global.css'
import '../styles/animations.css'
import '../styles/components.css'

export const metadata: Metadata = {
  title: 'PrimumAI | The AI Platform purpose built for healthcare',
  description: 'AI Agents automate workflow across access, revenue cycle, and care operations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
