'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  Languages,
  MapPin,
  Menu,
  Music2,
  Share2,
  Sparkles,
  Utensils,
  X,
} from 'lucide-react'

const logoUrl = '/bostonlogo.jpg'
const siteUrl = 'https://boston-bar-italie.vercel.app/'

const copy = {
  en: {
    reserve: 'Reserve your table', book: 'Book an evening at Boston', bookDetail: 'Tables · Cocktails · Good company',
    menu: 'Explore the menu', pours: 'Signature pours & bites', poursDetail: 'A menu designed for lingering',
    follow: 'Follow the atmosphere', followDetail: 'Behind the bar · Torino', find: 'Find your way here',
    location: 'Via Boston, Torino', locationDetail: 'LUN–GIO · 11:00 — 23:00 // VEN · 11:00 — 02:00 // SAB · 16:00 — 03:00 ',
    tagline: 'Bar · Bites · Belonging', title: <>Good nights<br /><em>begin here.</em></>,
    intro: 'An intimate bar in the heart of Torino. Come for one perfect drink, stay for the story.',
    since: 'Torino · Since 2017', footer: 'Make it a Boston night', share: 'Share the feeling', copied: 'Link copied',
    menuLabel: 'The Boston way', menuTitle: <>Stay a little<br /><em>longer.</em></>, menuText: 'A warm welcome, a cold drink, and a bar waiting for your name.', reserveCta: 'Make a reservation', lang: 'Italiano',
  },
  it: {
    reserve: 'Prenota il tuo tavolo', book: 'Vivi una serata al Boston', bookDetail: 'Tavoli · Cocktail · Buona compagnia',
    menu: 'Scopri il menu', pours: 'Cocktail d’autore & assaggi', poursDetail: 'Un menu fatto per restare',
    follow: 'Segui l’atmosfera', followDetail: 'Dietro al bancone · Torino', find: 'Come trovarci',
    location: 'Via Boston, Torino', locationDetail: 'LUN–GIO · 11:00 — 23:00 // VEN · 11:00 — 02:00 // SAB · 16:00 — 03:00',
    tagline: 'Bar · Assaggi · Appartenenza', title: <>Le belle serate<br /><em>iniziano qui.</em></>,
    intro: 'Un bar intimo nel cuore di Torino. Vieni per un drink perfetto, resta per la storia.',
    since: 'Torino · Dal 2017', footer: 'Vivi una serata Boston', share: 'Condividi', copied: 'Link copiato',
    menuLabel: 'Lo stile Boston', menuTitle: <>Resta ancora un po’<br /><em>con noi.</em></>, menuText: 'Un’accoglienza calda, un drink ghiacciato e un bancone che aspetta il tuo nome.', reserveCta: 'Prenota un tavolo', lang: 'English',
  },
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [shared, setShared] = useState(false)
  const [language, setLanguage] = useState<'en' | 'it'>('en')
  const t = copy[language]
  const links = [
    { eyebrow: t.reserve, title: t.book, detail: t.bookDetail, icon: CalendarDays, href: 'https://wa.me/393898546052' },
    { eyebrow: t.menu, title: t.pours, detail: t.poursDetail, icon: Utensils, href: 'https://boston-bar-italie.vercel.app/' },
    { eyebrow: t.follow, title: '@bostonbartorino', detail: t.followDetail, icon: Camera, href: 'https://www.instagram.com/bostonbartorino?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==' },
    { eyebrow: t.find, title: t.location, detail: t.locationDetail, icon: MapPin, href: 'https://www.google.com/maps/place/Boston/data=!4m2!3m1!1s0x0:0x192be07fc7383638?sa=X&ved=1t:2428&ictx=111' },
  ]

  async function handleShare() {
    try { await navigator.share({ title: 'Boston Bar Torino', url: siteUrl }) } catch { await navigator.clipboard?.writeText(siteUrl) }
    setShared(true); window.setTimeout(() => setShared(false), 1800)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="scene" aria-hidden="true" /><div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" /><div className="ambient ambient-two" aria-hidden="true" />
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#top" className="brand-mark" aria-label="Boston Bar home"><span className="brand-dot" /><span>Boston</span></a>
        <div className="flex items-center gap-3">
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:block">{t.since}</span>
          <button className="language-button" type="button" onClick={() => setLanguage(language === 'en' ? 'it' : 'en')} aria-label={`Switch language to ${t.lang}`}><Languages aria-hidden="true" />{t.lang}</button>
          <button className="icon-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
      </header>
      <section id="top" className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 pb-10 pt-7 text-center md:pt-10">
        <div className="logo-frame reveal reveal-one"><div className="logo-ring" /><img src={logoUrl} alt="Boston Bar Torino logo" className="logo-image" /></div>
        <div className="mt-7 flex items-center gap-2 text-[10px] uppercase tracking-[0.36em] text-primary reveal reveal-two"><Sparkles aria-hidden="true" className="size-3" /><span>{t.tagline}</span></div>
        <h1 className="mt-5 max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-balance reveal reveal-three md:text-7xl">{t.title}</h1>
        <p className="mt-5 max-w-md text-sm leading-6 text-muted-foreground reveal reveal-four">{t.intro}</p>
        <div className="mt-9 flex w-full flex-col gap-3 reveal reveal-five">{links.map(({ eyebrow, title, detail, icon: Icon, href }, index) => <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="luxury-link" style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}><span className="link-icon"><Icon aria-hidden="true" /></span><span className="flex min-w-0 flex-1 flex-col items-start gap-1"><span className="link-eyebrow">{eyebrow}</span><span className="link-title">{title}</span><span className="link-detail">{detail}</span></span><ArrowUpRight aria-hidden="true" className="link-arrow" /></a>)}</div>
        <div className="mt-10 flex items-center gap-5 reveal reveal-six"><span className="h-px w-10 bg-border" /><span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{t.footer}</span><span className="h-px w-10 bg-border" /></div>
        <button type="button" onClick={handleShare} className="share-button mt-7" aria-label="Share Boston Bar link"><Share2 aria-hidden="true" />{shared ? t.copied : t.share}</button>
      </section>
      <footer className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 pb-8 pt-5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:px-10"><span>BB · 45°04′N</span><span className="flex items-center gap-2"><Music2 aria-hidden="true" className="size-3" /> Torino, Italy</span></footer>
      {menuOpen && <div className="menu-panel" role="dialog" aria-label="Boston Bar menu"><button className="menu-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X aria-hidden="true" /></button><p className="link-eyebrow">{t.menuLabel}</p><h2 className="mt-4 font-serif text-4xl leading-none">{t.menuTitle}</h2><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">{t.menuText}</p><a href="https://wa.me/393898546052" onClick={() => setMenuOpen(false)} className="menu-cta mt-8">{t.reserveCta} <ArrowUpRight aria-hidden="true" /></a></div>}
    </main>
  )
}
