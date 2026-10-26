import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export type Category = {
  name: string;
  description: string;
  count: string;
  tone: 'brand' | 'accent' | 'slate';
};

const toneStyles = {
  brand: 'bg-brand-100 text-brand-900',
  accent: 'bg-amber-100 text-amber-900',
  slate: 'bg-slate-100 text-slate-700'
};

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href="/marketplace" className="card block p-5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneStyles[category.tone]}`}>
        {category.count}
      </div>
      <h3 className="mt-4 text-lg font-bold text-slate-900">{category.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
        Explore <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
}
