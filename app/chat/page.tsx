import { chatThreads } from '@/lib/mock-data';
import Link from 'next/link';

export default function ChatPage() {
  return (
    <div className="container py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-600">Messages</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Inbox</h1>
        </div>
        <Link href="/marketplace" className="btn-secondary">Browse listings</Link>
      </div>

      <div className="card overflow-hidden">
        <div className="grid md:grid-cols-[0.4fr_0.6fr]">
          <aside className="border-b border-slate-200 bg-slate-50 p-4 md:border-b-0 md:border-r">
            <div className="space-y-3">
              {chatThreads.map((thread) => (
                <div key={thread.name} className="rounded-2xl border border-slate-200 bg-white p-3">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{thread.name}</p>
                    <span className="text-xs text-slate-500">{thread.time}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{thread.message}</p>
                </div>
              ))}
            </div>
          </aside>

          <div className="p-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-slate-900">Amina O.</p>
                  <p className="text-sm text-slate-500">Interested in your wardrobe repair service</p>
                </div>
                <span className="badge">Active</span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="max-w-[75%] rounded-2xl bg-brand-100 p-3 text-slate-900">Hi, are you available for a repair this weekend?</div>
                <div className="ml-auto max-w-[75%] rounded-2xl bg-brand-600 p-3 text-white">Yes, I am available. I can inspect the item on Saturday.</div>
                <div className="max-w-[75%] rounded-2xl bg-brand-100 p-3 text-slate-900">Great. Please share your quote and location details.</div>
              </div>

              <div className="mt-5 flex gap-3">
                <input className="input" placeholder="Type your message..." />
                <button className="btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
