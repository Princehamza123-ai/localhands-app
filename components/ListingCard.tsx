import { MapPin, ShieldCheck } from 'lucide-react';

export type Listing = {
  id: number;
  title: string;
  type: 'Service' | 'Product';
  price: string;
  location: string;
  badge: string;
  imageLabel: string;
};

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="card overflow-hidden">
      <div className="flex h-44 items-center justify-center bg-gradient-to-br from-brand-100 via-white to-amber-100 text-lg font-bold text-brand-900">
        {listing.imageLabel}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="badge">{listing.type}</span>
          <span className="text-sm font-semibold text-brand-600">{listing.price}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900">{listing.title}</h3>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
          <MapPin className="h-4 w-4 text-brand-600" />
          {listing.location}
        </div>

        <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
          <ShieldCheck className="h-4 w-4 text-brand-600" />
          {listing.badge}
        </div>
      </div>
    </article>
  );
}
