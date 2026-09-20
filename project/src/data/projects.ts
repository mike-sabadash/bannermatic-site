export interface Project {
  slug: string
  title: string
  category: string
  year: string
  client: string
  sector: string
  duration: string
  intro: string
  brief: string
  outcome: string
  deliverables: string[]
  art: string
  gallery: string[]
  quote: string
  quoteAuthor: string
}

export const projects: Project[] = [
  {
    slug: 'solstice',
    title: 'Solstice',
    category: 'Brand Identity / E-Commerce',
    year: '2026',
    client: 'Solstice Skincare',
    sector: 'Beauty & Wellness',
    duration: '14 weeks',
    intro:
      'A sun-worshipping skincare brand needed an identity as warm and unapologetic as its formulas.',
    brief:
      'Solstice came to us as a two-person operation with a cult following and a visual language that couldn\'t keep up. We rebuilt the brand from the strategy up — a new wordmark that glows, a packaging system that shifts with the seasons, and an e-commerce experience designed around ritual rather than routine. Every interaction, from unboxing to replenishment reminder, was choreographed to feel like golden hour.',
    outcome:
      'The relaunch sold out its first production run in eleven days. Average order value climbed 64%, and the site earned Site of the Day honors within its first week live.',
    deliverables: ['Brand Strategy', 'Visual Identity', 'Packaging', 'E-Commerce Design', 'Creative Development'],
    art: 'radial-gradient(ellipse at 30% 20%, #ffb86b 0%, transparent 55%), radial-gradient(ellipse at 75% 80%, #ff4d6d 0%, transparent 50%), linear-gradient(160deg, #2b0a3d 0%, #12061c 100%)',
    gallery: [
      'radial-gradient(ellipse at 70% 30%, #ffb86b 0%, transparent 50%), radial-gradient(ellipse at 20% 90%, #ff4d6d 0%, transparent 55%), linear-gradient(200deg, #1c0628 0%, #0d0413 100%)',
      'radial-gradient(ellipse at 15% 25%, #ffd89e 0%, transparent 45%), radial-gradient(ellipse at 85% 60%, #c93a5e 0%, transparent 55%), linear-gradient(150deg, #250a33 0%, #100517 100%)',
      'radial-gradient(ellipse at 50% 100%, #ff8e53 0%, transparent 55%), radial-gradient(ellipse at 80% 10%, #6b2a6e 0%, transparent 50%), linear-gradient(180deg, #1e0829 0%, #0e0513 100%)',
    ],
    quote: 'Noir didn\'t give us a logo. They gave us a language — one our customers now speak fluently.',
    quoteAuthor: 'Mara Chen, Co-founder',
  },
  {
    slug: 'meridian-bank',
    title: 'Meridian Bank',
    category: 'Product Design / Fintech',
    year: '2025',
    client: 'Meridian Financial',
    sector: 'Banking / Fintech',
    duration: '9 months',
    intro:
      'Making a 40-year-old private bank feel like it was founded yesterday — without losing the trust it spent decades earning.',
    brief:
      'Meridian\'s clients manage generational wealth, but their digital experience belonged to another generation entirely. We designed a private banking platform where complexity hides behind calm: portfolio intelligence surfaces in plain language, actions take seconds instead of phone calls, and the interface carries the quiet confidence of the institution itself. Security theater was replaced with security that\'s simply felt.',
    outcome:
      'Digital adoption among clients under 45 tripled within two quarters. Support call volume dropped 41%, and the platform became the bank\'s most effective recruitment tool for new advisors.',
    deliverables: ['UX Research', 'Product Strategy', 'UX / UI Design', 'Design System', 'Front-End Development'],
    art: 'radial-gradient(ellipse at 70% 30%, #4f8cff 0%, transparent 55%), radial-gradient(ellipse at 20% 85%, #00e0b8 0%, transparent 45%), linear-gradient(200deg, #06182e 0%, #030a14 100%)',
    gallery: [
      'radial-gradient(ellipse at 25% 20%, #00e0b8 0%, transparent 45%), radial-gradient(ellipse at 80% 75%, #4f8cff 0%, transparent 55%), linear-gradient(160deg, #041224 0%, #02070f 100%)',
      'radial-gradient(ellipse at 75% 15%, #7ab0ff 0%, transparent 50%), radial-gradient(ellipse at 15% 80%, #0a8f78 0%, transparent 50%), linear-gradient(210deg, #071c36 0%, #030b16 100%)',
      'radial-gradient(ellipse at 50% 50%, #2f6fe0 0%, transparent 55%), radial-gradient(ellipse at 90% 90%, #00e0b8 0%, transparent 40%), linear-gradient(180deg, #051528 0%, #020810 100%)',
    ],
    quote: 'They understood something fundamental: our clients don\'t want features. They want certainty.',
    quoteAuthor: 'James Okafor, Head of Digital',
  },
  {
    slug: 'kiosko-records',
    title: 'Kiosko Records',
    category: 'Web Experience / Music',
    year: '2025',
    client: 'Kiosko Records',
    sector: 'Music / Culture',
    duration: '10 weeks',
    intro:
      'A record store that never closes — an immersive web experience for Mexico City\'s most beloved vinyl institution.',
    brief:
      'Kiosko has spent fifteen years curating sounds the algorithm forgot. When foot traffic stalled, they didn\'t want a shop — they wanted the store, translated. We built a browsing experience that mimics crate-digging: records lean, stacks topple, needle drops preview pressings, and every visit surfaces something you weren\'t looking for. Commerce is there, but discovery leads.',
    outcome:
      'Online revenue matched the physical store\'s within six months. Average session length hit nine minutes — an eternity in e-commerce — and the experience collected both a Site of the Day and an FWA.',
    deliverables: ['Creative Direction', 'Web Experience Design', 'WebGL Development', 'Audio Integration', 'E-Commerce'],
    art: 'radial-gradient(ellipse at 50% 10%, #d7ff3f 0%, transparent 45%), radial-gradient(ellipse at 85% 70%, #6b4fff 0%, transparent 55%), linear-gradient(180deg, #101010 0%, #1a1a08 100%)',
    gallery: [
      'radial-gradient(ellipse at 20% 80%, #d7ff3f 0%, transparent 40%), radial-gradient(ellipse at 75% 25%, #8f6bff 0%, transparent 55%), linear-gradient(160deg, #131308 0%, #0a0a05 100%)',
      'radial-gradient(ellipse at 80% 80%, #b8e02e 0%, transparent 45%), radial-gradient(ellipse at 20% 20%, #5533cc 0%, transparent 55%), linear-gradient(200deg, #161610 0%, #0c0c06 100%)',
      'radial-gradient(ellipse at 50% 0%, #e5ff70 0%, transparent 45%), radial-gradient(ellipse at 50% 100%, #7a5cff 0%, transparent 50%), linear-gradient(180deg, #111108 0%, #0a0a12 100%)',
    ],
    quote: 'People write to tell us they got lost on the site for an hour. That\'s the whole point.',
    quoteAuthor: 'Sofía Reyes, Owner',
  },
  {
    slug: 'aether-parfums',
    title: 'Aether Parfums',
    category: 'Art Direction / Campaign',
    year: '2024',
    client: 'Aether Parfums',
    sector: 'Luxury / Fragrance',
    duration: '12 weeks',
    intro:
      'How do you photograph a smell? A global launch campaign for a fragrance house that refuses to shout.',
    brief:
      'Aether\'s scents are built on absence — notes that appear only as they fade. The launch campaign needed the same restraint. We art-directed a system of imagery where the product is rarely the subject: light through a curtain, steam off morning water, the shadow a bottle leaves behind. The campaign ran across film, print, and a digital flagship where each fragrance gets its own weather system.',
    outcome:
      'The launch film was selected at three fashion film festivals. First-year revenue exceeded projections by 180%, and Aether entered two new markets ahead of schedule.',
    deliverables: ['Art Direction', 'Campaign Strategy', 'Film Direction', 'Print Design', 'Digital Flagship'],
    art: 'radial-gradient(ellipse at 25% 75%, #e8d5c4 0%, transparent 50%), radial-gradient(ellipse at 80% 25%, #8a6f56 0%, transparent 55%), linear-gradient(140deg, #1c1410 0%, #0d0a07 100%)',
    gallery: [
      'radial-gradient(ellipse at 70% 60%, #d9c3ac 0%, transparent 45%), radial-gradient(ellipse at 20% 20%, #5c4633 0%, transparent 55%), linear-gradient(170deg, #17110c 0%, #0b0806 100%)',
      'radial-gradient(ellipse at 30% 30%, #f0e2d3 0%, transparent 40%), radial-gradient(ellipse at 85% 85%, #7a5f47 0%, transparent 50%), linear-gradient(150deg, #1a130d 0%, #0d0906 100%)',
      'radial-gradient(ellipse at 60% 90%, #cbb397 0%, transparent 50%), radial-gradient(ellipse at 10% 60%, #4a3828 0%, transparent 55%), linear-gradient(190deg, #15100a 0%, #0a0705 100%)',
    ],
    quote: 'Working with Noir felt like being edited by someone with better taste than us. Humbling, and worth every cent.',
    quoteAuthor: 'Camille Fontaine, Creative Director',
  },
  {
    slug: 'northwind-ai',
    title: 'Northwind AI',
    category: 'Platform / Machine Learning',
    year: '2024',
    client: 'Northwind AI',
    sector: 'Technology / SaaS',
    duration: '6 months',
    intro:
      'An ML infrastructure platform with world-class engineering and a story nobody could understand. We fixed the story.',
    brief:
      'Northwind\'s technology lets enterprises deploy models in hours instead of months — but their site read like a whitepaper\'s appendix. We repositioned the brand around a single idea: "the shortest path from idea to inference." The new platform pairs technical credibility with editorial clarity, interactive architecture diagrams replace walls of text, and the docs experience was redesigned as a product in its own right.',
    outcome:
      'Demo requests quadrupled in the quarter following launch. Time-on-docs doubled, churn in the trial funnel fell by a third, and the rebrand anchored their Series B narrative.',
    deliverables: ['Brand Strategy', 'Messaging', 'Platform Design', 'Interactive Diagrams', 'Docs Experience'],
    art: 'radial-gradient(ellipse at 60% 60%, #9dfffc 0%, transparent 45%), radial-gradient(ellipse at 15% 20%, #4f5bff 0%, transparent 55%), linear-gradient(170deg, #050b1e 0%, #02050e 100%)',
    gallery: [
      'radial-gradient(ellipse at 25% 70%, #6ff2ee 0%, transparent 45%), radial-gradient(ellipse at 80% 20%, #3f4ad9 0%, transparent 55%), linear-gradient(160deg, #040918 0%, #02040c 100%)',
      'radial-gradient(ellipse at 80% 40%, #b8fffb 0%, transparent 40%), radial-gradient(ellipse at 20% 90%, #5a66ff 0%, transparent 50%), linear-gradient(200deg, #060d22 0%, #030612 100%)',
      'radial-gradient(ellipse at 50% 30%, #7ff5f0 0%, transparent 45%), radial-gradient(ellipse at 90% 90%, #3540b8 0%, transparent 55%), linear-gradient(180deg, #050a1c 0%, #02040d 100%)',
    ],
    quote: 'For the first time, our website explains the product better than our best sales engineer.',
    quoteAuthor: 'Priya Nair, CEO',
  },
]
