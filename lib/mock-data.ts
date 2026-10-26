export const categories = [
  { name: 'Wood & Furniture Crafts', description: 'Custom furniture, cabinetry, wood carving and upholstery.', count: '180 listings', tone: 'brand' as const },
  { name: 'Metalwork & Construction', description: 'Welding, metallic fabrication, plumbing, electrical and masonry.', count: '220 listings', tone: 'accent' as const },
  { name: 'Fashion & Textile', description: 'Tailoring, leatherwork, weaving and design services.', count: '140 listings', tone: 'slate' as const },
  { name: 'Repair & Technical', description: 'Generator, electronics, appliance and furniture repair.', count: '160 listings', tone: 'brand' as const }
];

export const stats = [
  { value: '12k+', label: 'verified professionals' },
  { value: '4.9/5', label: 'average user rating' },
  { value: '30 min', label: 'average response time' }
];

export const featuredListings = [
  { id: 1, title: 'Certified electrician for home wiring', type: 'Service', price: '₦25,000', location: 'Lekki, Lagos', badge: 'Verified', imageLabel: 'ELECTRICAL' },
  { id: 2, title: 'Handcrafted wooden dining table', type: 'Product', price: '₦120,000', location: 'Gwarinpa, Abuja', badge: 'Quality assured', imageLabel: 'WOOD' },
  { id: 3, title: 'Furniture restoration & upholstery', type: 'Service', price: '₦48,000', location: 'Port Harcourt', badge: 'Top rated', imageLabel: 'UPHOLSTERY' }
];

export const adminStats = [
  { label: 'Active vendors', value: '1,240' },
  { label: 'Pending checks', value: '68' },
  { label: 'Orders today', value: '312' },
  { label: 'Disputes', value: '11' }
];

export const pendingApprovals = [
  { name: 'Musa Furniture Studio', type: 'Artisan profile', status: 'Awaiting review' },
  { name: 'Nneka Textile Hub', type: 'Seller account', status: 'Awaiting review' },
  { name: 'Adekola Steel Works', type: 'Business listing', status: 'Pending docs' }
];

export const verificationQueue = [
  { name: 'Johnson Welding Co.', location: 'Edo State', score: 88 },
  { name: 'Kampala Toolline', location: 'Niger State', score: 91 },
  { name: 'Desire Fabrics', location: 'Abuja', score: 84 }
];

export const metrics = [
  { label: 'Leads this week', value: '1,430' },
  { label: 'Products sold', value: '280' },
  { label: 'Response rate', value: '96%' },
  { label: 'Avg. revenue', value: '₦1.2M' }
];

export const chatThreads = [
  { name: 'Amina O.', message: 'Interested in your wardrobe repair service', time: '2m ago' },
  { name: 'Clement M.', message: 'Can you deliver the table to Ikeja?', time: '12m ago' },
  { name: 'Mary J.', message: 'Looking for a carpenter for custom cabinets', time: '26m ago' }
];
