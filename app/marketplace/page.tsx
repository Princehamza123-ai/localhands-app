import Link from 'next/link';
import { ArrowLeft, MapPin, MessageSquareText, PackageCheck, Sparkles } from 'lucide-react';
import { featuredListings } from '@/lib/mock-data';
import ListingCard from '@/components/ListingCard';

export default function MarketplacePage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Marketplace</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Browse services and goods near you</h1>
        </div>
        <Link href="/listings/new" className="btn-primary">Create listing</Link>
      </div>

      <div className="mb-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card p-4">
          <div className="grid gap-3 md:grid-cols-3">
            <input className="input" placeholder="Search artisans or products" />
            <input className="input" placeholder="Location" />
            <select className="input">
              <option>All categories</option>
              <option>Carpentry</option>
              <option>Welding</option>
              <option>Furniture</option>
              <option>Electrical</option>
            </select>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <MapPin className="h-4 w-4 text-brand-600" />
            Service areas: Lagos Mainland, Lekki, Ikeja, Abuja Central, Port Harcourt GRA
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-wrap gap-3 text-sm">
        {['Carpentry', 'Furniture', 'Welding', 'Electrical', 'Plumbing', 'Fashion', 'Repair', 'Farm Produce'].map((tag) => (
          <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="card p-5">
          <PackageCheck className="h-7 w-7 text-brand-600" />
          <h3 className="mt-3 text-lg font-bold">Instant marketplace</h3>
          <p className="mt-2 text-sm text-slate-600">List products or offer services within minutes.</p>
        </div>
        <div className="card p-5">
          <Sparkles className="h-7 w-7 text-brand-600" />
          <h3 className="mt-3 text-lg font-bold">Verified by trust</h3>
          <p className="mt-2 text-sm text-slate-600">Profiles, reviews, and verification reduce risk.</p>
        </div>
        <div className="card p-5">
          <MessageSquareText className="h-7 w-7 text-brand-600" />
          <h3 className="mt-3 text-lg font-bold">Fast communication</h3>
          <p className="mt-2 text-sm text-slate-600">Chat, negotiate, and agree on pickup or delivery in-app.</p>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}
