import Link from 'next/link';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500 text-sm font-black text-white">L</div>
            <div>
              <div className="text-lg font-black text-slate-900">LocalHands</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            Trusted local artisans and quick local deals from Lagos, Abuja, Port Harcourt, Edo, and beyond.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><Link href="/marketplace">Marketplace</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/chat">Chat</Link></li>
            <li><Link href="/auth">Join</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">Support</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>Help center</li>
            <li>Buyer protection</li>
            <li>Seller verification</li>
            <li>Payment support</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container flex flex-col items-center justify-between gap-3 py-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 LocalHands. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Instagram className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <MessageCircle className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
