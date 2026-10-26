import { chatThreads, metrics } from '@/lib/mock-data';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Dashboard</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Your LocalHands workspace</h1>
        </div>
        <Link href="/listings/new" className="btn-primary">Create new listing</Link>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="card p-5">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Recent activity</h2>
          <div className="mt-5 space-y-4">
            {chatThreads.map((thread) => (
              <div key={thread.name} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{thread.name}</p>
                  <p className="text-sm text-slate-600">{thread.message}</p>
                </div>
                <span className="text-xs font-medium text-slate-500">{thread.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Quick actions</h2>
          <div className="mt-5 space-y-3">
            <button className="btn-primary w-full">Respond to enquiries</button>
            <button className="btn-secondary w-full">Update availability</button>
            <button className="btn-secondary w-full">Manage portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
}
