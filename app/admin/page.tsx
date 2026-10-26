import { adminStats, pendingApprovals, verificationQueue } from '@/lib/mock-data';

export default function AdminPage() {
  return (
    <div className="container py-12">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Admin dashboard</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-900">Marketplace oversight</h1>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {adminStats.map((item) => (
          <div key={item.label} className="card p-5">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Pending approvals</h2>
          <div className="mt-5 space-y-4">
            {pendingApprovals.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">{item.type}</p>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">{item.status}</span>
                </div>
                <div className="mt-3 flex gap-3">
                  <button className="btn-primary px-4 py-2 text-xs">Approve</button>
                  <button className="btn-secondary px-4 py-2 text-xs">Review</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-900">Verification queue</h2>
          <div className="mt-5 space-y-4">
            {verificationQueue.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">{item.location}</p>
                </div>
                <span className="rounded-full bg-brand-100 px-2 py-1 text-xs font-medium text-brand-700">{item.score}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
