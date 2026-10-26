import { categories } from '@/lib/mock-data';
import Link from 'next/link';

export default function NewListingPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl card p-6 sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Create listing</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Sell a product or post a service</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Listing type</label>
            <select className="input">
              <option>Product</option>
              <option>Service</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
            <select className="input">
              {categories.map((category) => (
                <option key={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Title</label>
            <input className="input" placeholder="e.g. Premium handcrafted dining chair" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
            <textarea rows={5} className="input" placeholder="Describe the item or service details, availability, delivery options, and conditions." />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Price</label>
            <input className="input" placeholder="₦20,000" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
            <input className="input" placeholder="Lekki Phase 1, Lagos" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Delivery option</label>
            <select className="input">
              <option>Pickup only</option>
              <option>Delivery available</option>
              <option>Pickup and delivery</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Images</label>
            <input className="input" type="file" multiple />
          </div>
          <div className="md:col-span-2 flex flex-wrap gap-3 pt-3">
            <button className="btn-primary">Publish listing</button>
            <Link href="/marketplace" className="btn-secondary">Cancel</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
