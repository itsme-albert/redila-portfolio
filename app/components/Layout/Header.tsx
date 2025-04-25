'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion } from 'framer-motion';

export default function Header() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' },
    }),
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-md shadow-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-extrabold tracking-tight text-[var(--accent)]"
          >
            Albert Redila
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <Link
                href={item.href}
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-transform duration-200 hover:scale-105"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* <ThemeToggle /> */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button
              asChild
              className="ml-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-transform duration-200 hover:scale-105"
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-[var(--foreground)]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-[var(--background)]">
              <nav className="flex flex-col gap-6 mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--accent)] transition-transform duration-200 hover:scale-105"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-6 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white transition-transform duration-200 hover:scale-105"
                >
                  <Link href="#contact">Hire Me</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
