import { useEffect, useState } from 'react';
import { Code2, Menu, Moon, Sun, X } from 'lucide-react';

const navItems = [
  { href: '#summary', label: 'Summary' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : true;

    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme);
    window.localStorage.setItem('portfolio-theme', nextTheme ? 'dark' : 'light');
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/95 px-4 py-4 shadow-sm backdrop-blur sm:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
        <a className="flex items-center gap-2 font-extrabold" href="#home" aria-label="Go to home" onClick={closeMenu}>
          <Code2 className="h-6 w-6 text-primary" />
          <span>Nishiv Portfolio</span>
        </a>
          <div className="flex items-center gap-3">
            <nav className="hidden gap-5 text-sm font-bold text-muted-foreground md:flex" aria-label="Primary">
              {navItems.map((item) => (
                <a className="whitespace-nowrap transition hover:text-primary" href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              type="button"
              role="switch"
              aria-checked={isDark}
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
              className="relative h-8 w-16 shrink-0 rounded-full border bg-secondary p-1 text-secondary-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span
                className={`absolute top-1 grid h-6 w-6 place-items-center rounded-full bg-background text-foreground shadow transition-transform ${
                  isDark ? 'translate-x-8' : 'translate-x-0'
                }`}
              >
                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </span>
            </button>
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background text-foreground transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <nav
            className="grid gap-2 rounded-lg border bg-card p-2 text-sm font-bold text-card-foreground shadow-soft md:hidden"
            aria-label="Mobile primary"
          >
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-3 transition hover:bg-secondary hover:text-primary"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
