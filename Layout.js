
import Link from 'next/link'

export default function Layout({ children, active = 'home' }) {
  return (
    <div>
      <nav className="sticky top-0 z-40 bg-[rgba(249,247,244,0.85)] backdrop-blur border-b border-stonegray">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-lg font-semibold">Svelte Collective</div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-muted">
            <Link href="/"><a className={active==='home' ? 'text-charcoal' : 'text-muted'}>Home</a></Link>
            <Link href="/philosophy"><a className={active==='philosophy' ? 'text-charcoal' : 'text-muted'}>Philosophy</a></Link>
            <Link href="/materials"><a className={active==='materials' ? 'text-charcoal' : 'text-muted'}>Materials & Capabilities</a></Link>
            <Link href="/journal"><a className={active==='journal' ? 'text-charcoal' : 'text-muted'}>Journal</a></Link>
            <Link href="/contact"><a className={active==='contact' ? 'text-charcoal' : 'text-muted'}>Contact</a></Link>
          </div>
          <div className="md:hidden">
            <Link href="/contact"><a className="btn btn-primary text-sm">Work with us</a></Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="bg-footer mt-16">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted">
          <div>
            <div className="uppercase text-xs text-muted">About</div>
            <p className="mt-2">Svelte Collective is a design-led export house crafting stone products with care, thought, and disciplined process.</p>
          </div>
          <div>
            <div className="uppercase text-xs text-muted">Links</div>
            <div className="mt-2 space-y-1">
              <a href="#" className="block">Certifications</a>
              <a href="#" className="block">Care & Maintenance</a>
              <a href="#" className="block">Downloads</a>
            </div>
          </div>
          <div>
            <div className="uppercase text-xs text-muted">Contact</div>
            <p className="mt-2">Email: connect@sveltecollective.com<br/>Phone/WhatsApp: +91-XXXXXXXXXX</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
