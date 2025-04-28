import Link from 'next/link';
import { Github, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#252525] text-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Albert Redila. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/itsme-albert" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/albert-redila-a79a37350/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link 
            href="https://www.facebook.com/albert.redila.3/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}