import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Omar Mohamed — Programming, Electronics & Creativity',
  description: 'Personal portfolio of Omar Mohamed — programming, electronics, robotics, video editing, and technology content.',
  keywords: ['Omar Mohamed', 'programming', 'electronics', 'robotics', 'video editing', 'technology creator'],
  openGraph: { title: 'Omar Mohamed | Personal Portfolio', description: 'Think. Create. Innovate.', type: 'website' },
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
