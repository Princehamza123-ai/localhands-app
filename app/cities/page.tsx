import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MapPin, ShieldCheck, Truck } from 'lucide-react';

const cities = [
  { name: 'Lagos', count: '4.8k active sellers', accent: 'bg-brand-100 text-brand-900' },
  { name: 'Abuja', count: '2.6k active sellers', accent: 'bg-amber-100 text-amber-900' },
  { name: 'Port Harcourt', count: '1.9k active sellers', accent: 'bg-slate-100 text-slate-700' },
  { name: 'Edo', count: '1.2k active sellers', accent: 'bg-brand-100 text-brand-900' },
  { name: 'Niger State', count: '780 active sellers', accent: 'bg-amber-100 text-amber-900' }
];

export default function CitiesPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Cities</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Service coverage</h1>
        </div>
        <Link href="/marketplace" className="btn-secondary">Browse marketplace</Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cities.map((city) => (
          <div key={city.name} className="card p-6">
            <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${city.accent}`}>
              {city.count}
            </div>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">{city.name}</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-600" /> Nearby artisans available</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-600" /> Verified sellers and artisans</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-brand-600" /> Pickup and delivery support</div>
            </div>
            <Link href="/marketplace" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
              Explore {city.name} <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
