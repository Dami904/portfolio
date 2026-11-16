// All editable site content lives here. Every number below comes from the
// project's own README, live site or GitHub history; update them here when
// they change.

export const profile = {
  name: "Dami",
  handle: "Dami904",
  role: "Backend-first product engineer",
  focus: ["AI agents", "Payments", "Privacy"],
  avatar: "/me.jpg",
  availability: "Available for work",
  intro:
    "I build the backend of AI agents, payment products and private on-chain systems (contracts, services and the logic that moves money), and ship the whole product around it.",
  statement: "Software that acts on its own should be able to prove what it did.",
  statementBody:
    "Agents now hold wallets, pay for data and make decisions in real time. I build the layer that makes them trustworthy: clear spending limits, verifiable track records, and privacy that holds up on a public chain.",
  about: [
    "I'm a backend-first product engineer working where trust matters most: AI agents that handle money, checkout and payment rails, and private markets built on public chains.",
    "My core is the backend: smart contracts, services, zero-knowledge circuits and payment integrations. I also build the product around it, so most of what you see here I shipped end to end. Every product goes live with a test suite behind it and documentation your team can pick up on day one.",
  ],
};

// Only links with a value are shown. Fill in the empty ones.
export const links = {
  github: "https://github.com/Dami904",
  x: "https://x.com/dami904_",
  linkedin: "https://www.linkedin.com/in/joshua-kolawole7725",
  email: "Jimoh7725@gmail.com",
};

export const stats = [
  { value: 40, suffix: "+", label: "Products shipped" },
  { value: 12, suffix: "+", label: "Chains shipped on" },
  { value: 2800, suffix: "+", label: "Tests across featured work" },
  { value: 7, suffix: "", label: "Merged PRs to KeeperHub" },
];

export const marquee = ["AI agents", "Payments", "Privacy", "Proofs", "On-chain"];

export type Tone = "ink" | "orange" | "forest" | "sand";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  proof: { value: string; label: string }[];
  category: string;
  role: string;
  award?: string;
  year: string;
  chain: string;
  stack: string[];
  live?: string;
  repo: string;
  video?: string;
  shot: string;
  tone: Tone;
};

/** The four large showcase cards. */
export const showcase: Project[] = [
  {
    slug: "tender",
    name: "Tender",
    tagline: "Get paid in any coin. Settle on Monad.",
    description:
      "Crypto checkout for merchants. Customers pay with whatever they already hold on 30 chains, and the merchant receives one asset on Monad, with no bridges, no network switching and no gas to manage. Includes a merchant dashboard, webhooks and payouts through NEAR Intents.",
    proof: [
      { value: "30", label: "chains customers can pay from" },
      { value: "1", label: "settlement asset for the merchant, on Monad" },
      { value: "3", label: "API calls to integrate checkout" },
    ],
    category: "Payments · Checkout",
    role: "Lead engineer · team project",
    year: "2026",
    chain: "Monad",
    stack: ["TypeScript", "Next.js", "NEAR Intents", "Webhooks"],
    live: "https://tenderr.xyz/",
    repo: "https://github.com/Jhaycrypt001/Tender",
    shot: "/shots/tender.png",
    tone: "sand",
  },
  {
    slug: "bursar",
    name: "Bursar",
    tagline: "Give AI agents a budget, not your wallet.",
    description:
      "Job-scoped spending limits for teams of AI agents. Helpers get limits carved out of their parent's, every payment is checked against every limit up the tree, large ones go to a human for approval, and the audit log is anchored on-chain.",
    proof: [
      { value: "355", label: "tests passing (307 TS, 48 Solidity)" },
      { value: "12", label: "rules checked on every payment" },
      { value: "x402", label: "gasless nanopayments via Circle Gateway" },
    ],
    category: "AI agents · Money",
    role: "Solo build",
    award: "Winner · Canteen Arc mainnet bounty",
    year: "2026",
    chain: "Arc",
    stack: ["TypeScript", "Solidity", "USDC", "x402"],
    live: "https://bursarhq-mainnet.vercel.app/",
    repo: "https://github.com/Dami904/bursar",
    shot: "/shots/bursar.png",
    tone: "ink",
  },
  {
    slug: "fides",
    name: "Fides",
    tagline: "A credit bureau for machine payments.",
    description:
      "Before an AI agent pays a data source, it checks a shared, signed record of how that source has delivered for every agent before it. Reports are anchored on Sui and stored in Walrus Memory, so each agent builds on what the others learned.",
    proof: [
      { value: "433", label: "tests passing" },
      { value: "20", label: "agents in the reputation simulation" },
      { value: "Mainnet", label: "anchor package live on Sui" },
    ],
    category: "AI agents · Payments",
    role: "Solo build",
    year: "2026",
    chain: "Sui",
    stack: ["TypeScript", "Move", "Walrus", "Gemini"],
    live: "https://fides-credit-bureau.vercel.app",
    repo: "https://github.com/Dami904/Fides",
    shot: "/shots/fides.png",
    tone: "orange",
  },
  {
    slug: "umbra",
    name: "Umbra",
    tagline: "Private trading, verified in the open.",
    description:
      "A dark pool on Flare. Balances, orders and counterparties stay private, while zero-knowledge proofs let anyone verify that every settlement followed the rules. Trades FXRP with live FTSO pricing, and includes a Bitcoin bridge.",
    proof: [
      { value: "3", label: "order details kept private: amount, asset, counterparty" },
      { value: "Noir", label: "zero-knowledge circuits, verified on Flare" },
      { value: "2 of 3", label: "withdrawal reserve on the Bitcoin bridge" },
    ],
    category: "Privacy · Trading",
    role: "Lead engineer · team of 4",
    award: "Winner · Flare Summer Signal",
    year: "2026",
    chain: "Flare",
    stack: ["Solidity", "Noir", "TypeScript", "Next.js"],
    live: "https://umbra-flare.vercel.app",
    repo: "https://github.com/davre001/UMBRA",
    video: "https://youtu.be/vdFu4xjAEos",
    shot: "/shots/umbra.png",
    tone: "forest",
  },
];

/** The two-column grid under the showcase. */
export const grid: Project[] = [
  {
    slug: "nema",
    name: "Nema",
    tagline: "Agree on a price. Reveal nothing.",
    description:
      "Private consensus prices for illiquid loans. Funds encrypt their prices in the browser, an Intel TDX enclave computes the consensus, and lenders pay to read it, with the fee going back to the funds that priced it.",
    proof: [{ value: "280", label: "tests (228 contract, 42 enclave)" }],
    category: "Privacy · Markets",
    role: "Solo build",
    year: "2026",
    chain: "NEAR",
    stack: ["Rust", "TypeScript", "Intel TDX"],
    live: "https://nema-near.vercel.app/",
    repo: "https://github.com/Dami904/nema",
    video: "https://youtu.be/QzmEfXt_7zY",
    shot: "/shots/nema.png",
    tone: "sand",
  },
  {
    slug: "kalyptra",
    name: "Kalyptra",
    tagline: "Trade private shares without showing your hand.",
    description:
      "Sealed-bid auctions for private company shares on Zcash Shielded Assets. Three matcher nodes clear each round at one uniform price anyone can recompute, settled as a single atomic swap.",
    proof: [{ value: "154", label: "tests passing" }],
    category: "Privacy · Markets",
    role: "Solo build",
    year: "2026",
    chain: "Zcash",
    stack: ["Rust", "Threshold crypto", "ZSA"],
    live: "https://kalyptra.vercel.app",
    repo: "https://github.com/Dami904/kalyptra",
    video: "https://youtu.be/tFmisu23AHM",
    shot: "/shots/kalyptra.png",
    tone: "sand",
  },
  {
    slug: "pii",
    name: "Pii",
    tagline: "Private USDC payments and payroll.",
    description:
      "A shielded pool for USDC. Deposit, pay anyone or run a whole payroll from a CSV, while the chain only sees a valid proof.",
    proof: [{ value: "Mainnet", label: "running on Arc with real USDC" }],
    category: "Privacy · Money",
    role: "Solo build",
    award: "Arc Microgrant",
    year: "2026",
    chain: "Arc",
    stack: ["Solidity", "ZK", "USDC"],
    live: "https://pii-pay.vercel.app",
    repo: "https://github.com/Dami904/pii",
    video: "https://youtu.be/msSxzTkpYEI",
    shot: "/shots/pii.png",
    tone: "sand",
  },
  {
    slug: "currant",
    name: "Currant",
    tagline: "Agents that answer from the latest source.",
    description:
      "When documents change, Currant works out which version is current, grounds the agent's answer on it and returns a receipt anyone can replay.",
    proof: [{ value: "1,152", label: "tests passing" }],
    category: "AI agents · Tools",
    role: "Solo build",
    year: "2026",
    chain: "AI",
    stack: ["Python", "TypeScript", "LLMs"],
    live: "https://currant-firewall.vercel.app/",
    repo: "https://github.com/Dami904/currant",
    video: "https://youtu.be/t7eiCNq42vY",
    shot: "/shots/currant.png",
    tone: "sand",
  },
  // Last on purpose: an odd card out spans the full width, so it gets the most striking project.
  {
    slug: "shieldpass",
    name: "ShieldPass",
    tagline: "Private swaps and payments on Stellar.",
    description:
      "A private cross-border payments corridor. Swap crypto for naira paid straight to a bank account, or send funds to another user with the amount, sender and receiver kept private. Proofs are generated on the device and verified by the Soroban contract itself, with passkey wallets, gasless transactions and no seed phrase.",
    proof: [
      { value: "Groth16", label: "proofs verified on-chain in Soroban" },
      { value: "2", label: "live shielded pools: XLM and USDC" },
      { value: "Zero", label: "banking details stored on the server" },
    ],
    category: "Privacy · Payments",
    role: "Lead engineer · team of 4",
    year: "2026",
    chain: "Stellar",
    stack: ["Soroban", "Groth16", "Passkeys", "Next.js"],
    live: "https://shieldpass-zeta.vercel.app",
    repo: "https://github.com/Xyrelix/ShieldPass",
    shot: "/shots/shieldpass.png",
    tone: "ink",
  },
];

/** Open-source work in other teams' codebases. */
export const openSource = {
  name: "KeeperHub",
  url: "https://keeperhub.com",
  prs: "https://github.com/KeeperHub/keeperhub/pulls?q=is%3Apr+author%3ADami904",
  blurb:
    "KeeperHub is a platform for automating on-chain workflows. I contribute to its core: new chain support, the workflow engine and the MCP tools agents use.",
  stats: [
    { value: "7", label: "merged pull requests" },
    { value: "30", label: "commits to the main codebase" },
  ],
  items: [
    { title: "Arc mainnet and testnet support, with USDC", detail: "Added both networks to the wallet end to end." },
    { title: "Nested For Each loops in the workflow engine", detail: "Loops inside loops now resolve their own boundaries correctly." },
    { title: "Circle as the primary Arc mainnet host", detail: "Circle WebSocket first, with Blockdaemon as fallback." },
    { title: "MCP tool documentation", detail: "Documented simulate responses and Tempo memo limits for agent builders." },
  ],
};

/** Awards first, then a few strong ecosystem builds. A short strip, not the headline. */
export const recognition: { title: string; detail: string; project?: string; award?: boolean }[] = [
  { title: "Arc Microgrant", detail: "Awarded by Arc", project: "Pii", award: true },
  { title: "Flare Summer Signal", detail: "Winner · Flare ecosystem", project: "Umbra", award: true },
  { title: "Canteen Arc mainnet bounty", detail: "Winner · Canteen", project: "Bursar", award: true },
  { title: "NEAR", detail: "Privacy & Private AI", project: "Nema" },
  { title: "Walrus × Tatum", detail: "Smart Agents", project: "Fides" },
  { title: "Stellar Hacks: ZK", detail: "Zero-knowledge", project: "ShieldPass" },
];

export type MoreProject = {
  name: string;
  description: string;
  category: string;
  url: string;
  live?: boolean;
  /** Screenshot (or GitHub card) shown when the row is hovered. */
  preview: string;
};

export const moreProjects: MoreProject[] = [
  { name: "Somnix", description: "One-tap prediction game on Somnia, built on DreamDEX Event Contracts (core engineer, team of 4)", category: "Consumer", url: "https://somnix-iota.vercel.app", live: true, preview: "/previews/somnix.png" },
  { name: "Steward", description: "Policy engine for an RWA vault agent that earns higher limits from its on-chain record", category: "AI agents", url: "https://steward-rwa.vercel.app", live: true, preview: "/previews/steward.png" },
  { name: "Provenn", description: "Trading agents with verifiable track records, settled against TxODDS's on-chain oracle", category: "AI agents", url: "https://provenn-app.vercel.app", live: true, preview: "/previews/provenn.png" },
  { name: "DreamKeeper", description: "Safe on-chain execution for AI agents, with a policy layer in front of the wallet", category: "AI agents", url: "https://github.com/Dami904/DreamKeeper", preview: "/previews/dreamkeeper.png" },
  { name: "Coral", description: "Agent payments that check memory first, with a spending contract live on Base mainnet", category: "AI agents", url: "https://github.com/Dami904/coral", preview: "/previews/coral.png" },
  { name: "NoCap", description: "Timestamps every commit on Monad for a verifiable build history", category: "Tools", url: "https://nocap-protocol.vercel.app", live: true, preview: "/previews/nocap.png" },
  { name: "Cadence", description: "On-chain savings circles (Ajo · Esusu · Chama) run by automated workflows", category: "Money", url: "https://cadence-thrift.vercel.app/", live: true, preview: "/previews/cadence.png" },
  { name: "BlindDrop", description: "Token distribution with encrypted allocations on Zama", category: "Privacy", url: "https://blind-drop-lovat.vercel.app", live: true, preview: "/previews/blinddrop.png" },
  { name: "Lethe", description: "Agent memory that knows which fact is the current one", category: "AI agents", url: "https://lethe-hydradb.vercel.app", live: true, preview: "/previews/lethe.png" },
  { name: "SEAL", description: "After-hours strategy for Bitget rTokens with public signals", category: "Markets", url: "https://seal-alpha-factory.vercel.app", live: true, preview: "/previews/seal.png" },
  { name: "Veridex", description: "Four-agent engine that explains how scientific studies compare", category: "AI agents", url: "https://veridex-frontend.vercel.app", live: true, preview: "/previews/veridex.png" },
  { name: "NovaPay Pro", description: "Multi-tenant payroll with approval chains and one-transaction batch payouts on Morph", category: "Money", url: "https://novapay-pro.vercel.app", live: true, preview: "/previews/novapay.png" },
  { name: "CeloMind", description: "Wallet-aware AI assistant for Celo: balances, token insights, swaps", category: "AI agents", url: "https://celomind.vercel.app", live: true, preview: "/previews/celomind.png" },
  { name: "Arc Tic-Whale", description: "Four Gemini trading personas with Circle wallet spending policies", category: "AI agents", url: "https://arc-tic-whale.vercel.app", live: true, preview: "/previews/arctic.png" },
  { name: "Bags MCP", description: "Public MCP server giving Claude live Bags.fm data on Solana", category: "Tools", url: "https://github.com/Dami904/Bags-MCP", preview: "/previews/bagsmcp.png" },
  { name: "Repo → Video", description: "Turns a GitHub repo into a narrated explainer in its own colours", category: "Tools", url: "https://github.com/Dami904/repo-demo-video1", preview: "/previews/repovideo.png" },
  { name: "Akara & Kulikuli", description: "Marketing site for a studio building websites for Nigerian street-food brands", category: "Web", url: "https://akara-and-kulikuli.vercel.app", live: true, preview: "/previews/akara.png" },
];

export const capabilities = [
  {
    title: "Agents",
    body: "AI agents that act on their own and stay within clear bounds: policy engines, spending limits, memory that knows which fact is current, and track records anyone can verify.",
    projects: ["Bursar", "Steward", "Currant", "Provenn", "DreamKeeper"],
  },
  {
    title: "Payments",
    body: "Payment products people can rely on: any-chain checkout, budgets for agents, x402 nanopayments, payroll in one transaction, and approvals for large transfers.",
    projects: ["Tender", "Bursar", "Fides", "Pii", "NovaPay Pro"],
  },
  {
    title: "Privacy",
    body: "Keeping amounts, orders and identities private on public chains, with zero-knowledge proofs, confidential compute and threshold encryption.",
    projects: ["Umbra", "ShieldPass", "Nema", "Kalyptra", "Pii"],
  },
  {
    title: "Proofs",
    body: "Evidence your users and auditors can check themselves: on-chain anchors, replayable receipts, and invariant and differential test suites.",
    projects: ["Fides", "Nema", "Steward", "NoCap"],
  },
];

export const process = [
  { step: "Define the outcome", body: "Agree on what the product must do for its users, and how we'll know it works." },
  { step: "Build the core right", body: "Contracts, services and tests together, so every guarantee is checked from day one." },
  { step: "Ship it live", body: "A real deployment and a demo anyone can open, early and often." },
  { step: "Hand over cleanly", body: "Docs, recordings and a clear path for your team to run and extend it." },
];

export const experience = [
  { period: "Nov 2026", items: "Tender, Currant, Nema, Fides" },
  { period: "Oct 2026", items: "Kalyptra, Pii, Bursar" },
  { period: "Sep 2026", items: "KeeperHub, Steward, Coral, SEAL" },
  { period: "Aug 2026", items: "Umbra, Somnix, Cadence, Lethe" },
  { period: "Jul 2026", items: "ShieldPass, Provenn, BlindDrop, NoCap" },
];

export const skills = [
  "Backend services & APIs (TypeScript, Python, Rust)",
  "Smart contracts (Solidity, Rust, Move)",
  "AI agents & policy engines",
  "Zero-knowledge & confidential compute",
  "Payments: USDC, x402, Circle, checkout",
  "Testing: invariant, differential, property-based",
];

export const stack = [
  "TypeScript",
  "Rust",
  "Solidity",
  "Move",
  "Noir",
  "Python",
  "Next.js",
  "Foundry",
  "Soroban",
  "Postgres",
];
