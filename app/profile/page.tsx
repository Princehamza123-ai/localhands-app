import { BadgeCheck, CalendarClock, MapPin, ShieldCheck, Star } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container py-12">
      <div className="card overflow-hidden">
        <div className="bg-gradient-to-r from-brand-900 to-brand-700 p-8 text-white">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.14em] text-brand-100">Verified artisan</p>
              <h1 className="mt-2 text-3xl font-bold">Musa Furniture Studio</h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/80">
                <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> Verified</span>
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Lekki, Lagos</span>
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4" /> 4.9 rating</span>
              </div>
            </div>
            <button className="btn-primary bg-white text-brand-700 hover:bg-slate-100">Request quote</button>
          </div>
        </div>

        <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-xl font-bold text-slate-900">About</h2>
            <p className="mt-3 text-slate-600">
              We craft custom furniture, repair old pieces, and provide reliable carpentry services for homes and offices across Lagos.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <CalendarClock className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-slate-900">Availability</p>
                <p className="mt-1 text-sm text-slate-600">Mon-Sat, 8am - 6pm</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <ShieldCheck className="h-5 w-5 text-brand-600" />
                <p className="mt-3 font-semibold text-slate-900">Service quality</p>
                <p className="mt-1 text-sm text-slate-600">On-time project delivery and craftsmanship warranty.</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900">Portfolio</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {['Dining set', 'Wardrobe', 'Office desk'].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-slate-900">Service Details</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Custom cabinetry</li>
              <li>Furniture repair</li>
              <li>Upholstery</li>
              <li>Interior woodwork</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white p-4">
              <p className="text-sm text-slate-500">Starting price</p>
              <p className="mt-1 text-3xl font-bold text-slate-900">₦35,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
