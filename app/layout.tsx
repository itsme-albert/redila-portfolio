import { Inter } from 'next/font/google';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { ThemeProvider } from './components/Layout/ThemeProvider';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Albert Redila | Portfolio',
  description: 'Professional e-portfolio showcasing my skills, experience, and projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}