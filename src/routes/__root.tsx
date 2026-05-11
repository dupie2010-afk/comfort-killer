import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  Link,
  useLocation,
} from '@tanstack/react-router'
import * as React from 'react'
import type { QueryClient } from '@tanstack/react-query'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import appCss from '~/styles/app.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      },
      {
        title: 'COMFORT KILLER | Wayne Duplessis',
      },
      {
        name: 'description',
        content: 'Most people aren’t trapped by failure. They’re trapped by comfort.',
      }
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  notFoundComponent: () => <div>Route not found</div>,
  component: RootComponent,
})

function RootComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation()

  // Close menu on route change
  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  return (
    <RootDocument>
      <div className="relative min-h-screen selection:bg-brand-red selection:text-white overflow-x-hidden flex flex-col">
        {/* Background Effects */}
        <div className="fixed inset-0 z-[-1] bg-black-cinematic" />
        <div className="fixed inset-0 z-[-1] bg-noise" />
        <div className="fixed inset-0 z-[-1] cinematic-gradient pointer-events-none" />
        
        {/* Navigation Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
          <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link 
              to="/" 
              className="text-2xl font-black tracking-tighter hover:text-brand-red transition-colors flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="w-4 h-4 bg-white -rotate-45" />
              </div>
              <span className="uppercase">Comfort Killer</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              <NavLink to="/products">The Armory</NavLink>
              <NavLink to="/about">Philosophy</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Link 
                to="/" 
                hash="challenge"
                className="bg-brand-red text-white px-6 py-2 font-black uppercase tracking-widest text-xs hover:bg-brand-red-light transition-all shadow-lg"
              >
                7-Day Protocol
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-brand-red transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </header>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black pt-20 px-6 flex flex-col gap-8">
            <div className="flex flex-col gap-6 mt-10">
              <MobileNavLink to="/products">The Armory</MobileNavLink>
              <MobileNavLink to="/about">Philosophy</MobileNavLink>
              <MobileNavLink to="/contact">Contact</MobileNavLink>
              <Link 
                to="/" 
                hash="challenge"
                className="bg-brand-red text-white px-8 py-5 text-center font-black uppercase tracking-widest text-lg shadow-2xl mt-4"
              >
                Join The Protocol
              </Link>
            </div>
            <div className="mt-auto pb-10 border-t border-white/10 pt-10">
              <p className="text-white/30 text-xs font-black uppercase tracking-[0.3em] mb-4">Follow the Movement</p>
              <div className="flex gap-6">
                <a href="https://tiktok.com" target="_blank" className="text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">TikTok</a>
                <a href="https://youtube.com" target="_blank" className="text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">YouTube</a>
                <a href="https://facebook.com" target="_blank" className="text-white/50 hover:text-white font-bold uppercase tracking-widest text-xs transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        )}
        
        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="bg-neutral-950 border-t border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <Link to="/" className="text-3xl font-black tracking-tighter uppercase mb-6 block">Comfort Killer</Link>
              <p className="text-white/40 max-w-sm font-medium italic">
                "The only thing more dangerous than failure is being satisfied with where you are. Stay uncomfortable."
              </p>
            </div>
            <div>
              <h4 className="text-brand-red font-black uppercase tracking-widest text-xs mb-6">Navigation</h4>
              <ul className="space-y-4 font-bold uppercase tracking-tight text-sm">
                <li><Link to="/products" className="hover:text-brand-red transition-colors">The Armory</Link></li>
                <li><Link to="/about" className="hover:text-brand-red transition-colors">Philosophy</Link></li>
                <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact</Link></li>
                <li><Link to="/terms" className="hover:text-brand-red transition-colors">Terms</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-red font-black uppercase tracking-widest text-xs mb-6">Connect</h4>
              <ul className="space-y-4 font-bold uppercase tracking-tight text-sm">
                <li><a href="https://tiktok.com" className="hover:text-brand-red transition-colors inline-flex items-center gap-2">TikTok <ArrowUpRight size={14} /></a></li>
                <li><a href="https://youtube.com" className="hover:text-brand-red transition-colors inline-flex items-center gap-2">YouTube <ArrowUpRight size={14} /></a></li>
                <li><a href="https://facebook.com" className="hover:text-brand-red transition-colors inline-flex items-center gap-2">Facebook <ArrowUpRight size={14} /></a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-black">
              © {new Date().getFullYear()} COMFORT KILLER. NOBODY IS COMING TO SAVE YOU.
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </RootDocument>
  )
}

function NavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-xs font-black uppercase tracking-[0.3em] hover:text-brand-red transition-all relative group"
      activeProps={{ className: 'text-brand-red' }}
    >
      {children}
      <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-red group-hover:w-full transition-all duration-300" />
    </Link>
  )
}

function MobileNavLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <Link 
      to={to} 
      className="text-4xl font-black uppercase tracking-tighter hover:text-brand-red transition-all"
      activeProps={{ className: 'text-brand-red' }}
    >
      {children}
    </Link>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased bg-black">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
