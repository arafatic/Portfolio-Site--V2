import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4 sm:px-8">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden sm:inline-block">
              <Image 
                src="/logo-arafatul-dark.png" 
                alt="Arafatul" 
                width={30} 
                height={30} 
                className="w-[30px] h-auto object-contain dark:invert"
                priority
              />
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
        </div>
        
        {/* Mobile Nav (Minimal) */}
        <div className="flex md:hidden flex-1 items-center">
          <Link href="/" className="mr-auto">
            <Image 
              src="/logo-arafatul-dark.png" 
              alt="Arafatul" 
              width={32} 
              height={32} 
              className="w-[32px] h-auto object-contain dark:invert"
              priority
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
