import Link from 'next/link';
import { categories, featuredListings, stats } from '@/lib/mock-data';
import ListingCard from '@/components/ListingCard';
import CategoryCard from '@/components/CategoryCard';
import { ArrowRight, MapPin, Search, ShieldCheck, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-900 via-brand-900 to-slate-800 text-white">
        <div className="container grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
          <div>
            <span className="badge border border-white/20 bg-white/10 text-white">Trusted local marketplace</span>
            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-tight sm:text-5xl">
              Find trusted artisans and local deals near you.
            </h1>
            <p className="mt-5 max-w-xl text-base text-slate-200 sm:text-lg">
              LocalHands connects people with verified artisans, local sellers, and nearby products across Nigeria.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/marketplace" className="btn-primary">
                Explore marketplace
              </Link>
              <Link href="/auth" className="btn-secondary border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                Join as artisan
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Lagos, Abuja, Port Harcourt</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Verified sellers</div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">
            <div className="rounded-2xl bg-white p-4 text-slate-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Quick search</p>
                  <h2 className="mt-1 text-xl font-bold">Need a service or item?</h2>
                </div>
                <div className="rounded-full bg-brand-100 p-2 text-brand-600">
                  <Search className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">I need</p>
                  <p className="mt-1 font-semibold">Plumber for kitchen pipe repair</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="mt-1 font-semibold">Lekki, Lagos</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                  <p className="text-xs text-slate-500">Budget</p>
                  <p className="mt-1 font-semibold">₦25,000 - ₦45,000</p>
                </div>
              </div>

              <button className="btn-primary mt-5 w-full">Find nearby experts</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="card p-6 text-center">
              <div className="text-3xl font-bold text-brand-600">{item.value}</div>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Popular categories</p>
            <h2 className="section-title mt-2">Explore by craft and trade</h2>
          </div>
          <Link href="/marketplace" className="hidden items-center gap-2 text-sm font-semibold text-brand-600 sm:inline-flex">
            View all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Featured listings</p>
            <h2 className="section-title mt-2">Nearby services and products</h2>
          </div>
          <Link href="/marketplace" className="hidden items-center gap-2 text-sm font-semibold text-brand-600 sm:inline-flex">
            Browse all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-6 bg-brand-900 p-8 text-white md:grid-cols-2 md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-100">Why LocalHands</p>
            <h2 className="mt-3 text-3xl font-bold">Built for trust, speed, and local discovery.</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <Users className="h-8 w-8 text-accent" />
              <h3 className="mt-3 font-semibold">Verified artisans</h3>
              <p className="mt-2 text-sm text-slate-200">Review-based and profile-verified service providers.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <MapPin className="h-8 w-8 text-accent" />
              <h3 className="mt-3 font-semibold">Local-first matching</h3>
              <p className="mt-2 text-sm text-slate-200">Find people and products in your city, neighborhood, or exact location.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
