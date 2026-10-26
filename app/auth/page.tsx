import Link from 'next/link';
import { ArrowRight, Building2, MessageSquareText, Search, ShieldCheck } from 'lucide-react';

const roleCards = [
  {
    title: 'Buyer',
    description: 'Find nearby artisans, compare quotes, and buy local goods quickly.',
    link: '/marketplace'
  },
  {
    title: 'Seller',
    description: 'List products, manage stock, and connect with buyers in your location.',
    link: '/listings/new'
  },
  {
    title: 'Artisan',
    description: 'Create a portfolio, receive leads, and manage jobs from your dashboard.',
    link: '/dashboard'
  },
  {
    title: 'Admin',
    description: 'Moderate listings, verify artisans, and monitor marketplace activity.',
    link: '/admin'
  }
];

export default function AuthPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-soft sm:p-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Welcome to LocalHands</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Create your account</h1>
          <p className="mt-3 text-slate-600">Choose how you want to use the platform.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {roleCards.map((role) => (
            <div key={role.title} className="card p-5">
              <div className="mb-4 inline-flex rounded-xl bg-brand-100 p-2 text-brand-600">
                {role.title === 'Buyer' && <Search className="h-5 w-5" />}
                {role.title === 'Seller' && <Building2 className="h-5 w-5" />}
                {role.title === 'Artisan' && <ShieldCheck className="h-5 w-5" />}
                {role.title === 'Admin' && <MessageSquareText className="h-5 w-5" />}
              </div>
              <h2 className="text-xl font-bold text-slate-900">{role.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{role.description}</p>
              <Link href={role.link} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                Continue <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input className="input" placeholder="e.g. Ada Okafor" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input className="input" type="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
            <input className="input" placeholder="0803 000 0000" />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Location</label>
            <input className="input" placeholder="Lekki, Lagos" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input className="input" type="password" placeholder="Create a password" />
          </div>
          <div className="md:col-span-2">
            <button className="btn-primary w-full">Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
