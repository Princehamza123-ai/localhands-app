import Link from 'next/link';
import { MapPin, UserRound } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-lg font-black text-white shadow-soft">
            L
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-slate-900">LocalHands</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Local deals</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/chat">Messages</Link>
          <Link href="/profile">Profile</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/marketplace" className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 md:inline-flex">
            <MapPin className="h-4 w-4" /> Lagos
          </Link>
          <Link href="/auth" className="btn-primary flex items-center gap-2">
            <UserRound className="h-4 w-4" /> Join now
          </Link>
        </div>
      </div>
    </header>
  );
}
