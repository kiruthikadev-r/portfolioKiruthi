// ShopSphere case-study content, in the shared CaseStudyData shape (see
// src/types/caseStudy.ts and src/components/CaseStudyLayout.tsx).
//
// Unlike SVCF, this is a personal project with full local source access -
// every fact below (tech stack, models, the order-status state machine, the
// cart-merge flow, the order-item price snapshot) was read directly out of
// D:\kiruthi\Pro\ShopSphere's own README and source files, not recalled or
// guessed. No fabricated metrics, users, or deployment claims.

import type { CaseStudyData } from "../types/caseStudy";
import shopCatalogShot from "../assets/shopsphere/shop-catalog.png";
import adminDashboardShot from "../assets/shopsphere/admin-dashboard.png";

export const shopSphereCaseStudy: CaseStudyData = {
  meta: {
    title: "ShopSphere - E-commerce Platform",
    tagline: "A full storefront-plus-admin e-commerce system, designed and built solo, end to end.",
    status: "Personal project",
    pills: ["Full-Stack Developer - Solo project", "MERN stack", "Role-gated single React app"],
  },
  blocks: [
    {
      kind: "prose",
      id: "overview",
      eyebrow: "01 - OVERVIEW",
      title: "One app, two very different jobs",
      text: `ShopSphere is a full-stack e-commerce platform: a customer-facing storefront
(browse, cart, checkout, order history) and a complete admin panel (product
and category management, order-lifecycle management, a revenue dashboard,
user moderation) - built as a single role-gated React application rather
than two separate codebases.

The goal was to go past a typical "shopping cart tutorial" and build the
parts that make a store actually operable: an order status that can't be
corrupted by an admin's typo, stock counts that stay correct through
checkout and cancellation, and a cart that survives a shopper logging in
partway through shopping.`,
    },
    {
      kind: "gallery",
      id: "screens",
      eyebrow: "SCREENS",
      title: "The real app, running locally",
      intro:
        "Live screenshots from the actual running app (local dev environment, seeded demo data) - not mockups.",
      images: [
        {
          src: shopCatalogShot,
          alt: "ShopSphere storefront catalog page with category filters, search, and sort",
          caption: "Storefront - catalog with search, category filters, and sort (real seeded product data).",
        },
        {
          src: adminDashboardShot,
          alt: "ShopSphere admin dashboard with revenue stats, low-stock alert, revenue chart, and top products",
          caption: "Admin dashboard - revenue, orders, low-stock alerts, and a 7-day revenue chart over real demo orders.",
        },
      ],
    },
    {
      kind: "bullets",
      id: "role",
      eyebrow: "02 - MY ROLE",
      title: "Sole developer, full stack",
      intro:
        "Designed and built every layer solo: the MongoDB schema, the Express REST API, the React storefront, and the React admin panel, sharing one codebase and one auth system between them.",
      items: [
        "Designed the MongoDB schema (User, Category, Product, Cart, Order) and the relationships between them",
        "Built the Express REST API: auth, catalog, cart, orders, and a full set of admin-only endpoints",
        "Implemented JWT auth with role-gated routes (customer vs admin) inside a single React app",
        "Built the storefront: browsing/search/filter/sort, product pages, cart, mock checkout, order history",
        "Built the admin panel: dashboard (revenue chart, low-stock alerts, top products), product/category CRUD with image upload, order-status management, user moderation",
      ],
    },
    {
      kind: "pillGroups",
      id: "stack",
      eyebrow: "03 - TECHNOLOGY STACK",
      title: "Verified from the project's own dependencies",
      groups: [
        {
          label: "Client",
          items: [
            "React 19",
            "Vite",
            "Tailwind CSS v4",
            "shadcn/ui",
            "React Router v7",
            "react-hook-form + Zod",
            "Axios",
            "Recharts",
            "Sonner",
          ],
        },
        {
          label: "Server",
          items: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt", "Multer"],
        },
      ],
    },
    {
      kind: "cards",
      id: "modules",
      eyebrow: "04 - KEY MODULES",
      title: "What the system actually does",
      items: [
        {
          title: "Storefront",
          description:
            "Browse, search, filter, and sort the catalog; product detail pages; a cart that works for guests and signed-in users; a mocked Cash-on-Delivery-style checkout; order history.",
        },
        {
          title: "Guest + Account Cart",
          description:
            "A shopper can add items before ever registering. The cart lives in localStorage until login, then merges into the account's server-side cart in one call - no items lost, no duplicate logic for two cart types.",
        },
        {
          title: "Admin Dashboard",
          description:
            "Revenue chart, low-stock alerts, recent orders, and top products, built with Recharts over real order/product aggregates - not static numbers.",
        },
        {
          title: "Order Lifecycle",
          description:
            "A real state machine: Pending -> Processing -> Shipped -> Delivered, or Cancelled - enforced server-side, with a timestamped statusHistory audit trail on every order.",
        },
        {
          title: "Product & Category Management",
          description: "Full CRUD for products and categories, including image upload handled via Multer.",
        },
        {
          title: "User Management",
          description: "Admin user list with block/unblock, and role-gated access separating customer and admin capabilities.",
        },
      ],
    },
    {
      kind: "architecture",
      id: "architecture",
      eyebrow: "05 - SYSTEM ARCHITECTURE",
      title: "A single app, gated by role",
      intro: "Conceptual summary of the verified architecture - not a screenshot of the real application.",
      layers: [
        {
          label: "Client",
          items: [
            "One React app, routed by role (customer vs admin) via a ProtectedRoute wrapper",
            "RootLayout / AuthLayout / AccountLayout / AdminLayout per area",
            "AuthContext (session) + CartContext (guest/account cart) as shared app state",
          ],
        },
        {
          label: "API",
          items: [
            "Express REST API under /api: auth, categories, products, cart, orders",
            "Separate admin/{orders,users,dashboard} routes, gated to the admin role",
            "JWT-based auth middleware; Multer for image uploads",
          ],
        },
        {
          label: "Data",
          items: [
            "MongoDB via Mongoose: User, Category, Product, Cart, Order",
            "Orders snapshot each item's name/image/price at purchase time, independent of later catalog edits",
          ],
        },
      ],
    },
    {
      kind: "challenges",
      id: "challenges",
      eyebrow: "06 - TECHNICAL CHALLENGES",
      title: "Real design problems, and how they were solved",
      items: [
        {
          title: "A cart that survives logging in mid-shop",
          problem:
            "A shopper can add items to their cart before registering or logging in. Those items need to end up in their account's cart after login, not get discarded - but the app also needs a normal server-persisted cart for already-logged-in users.",
          solution:
            "Built a single CartContext with two backing stores: localStorage while signed out, the server while signed in. On the first render after auth resolves to a logged-in user with existing guest items, it calls a one-time merge endpoint, clears localStorage, and the rest of the app never has to know which mode it was in.",
        },
        {
          title: "Stopping an order status from being corrupted",
          problem:
            "A plain status string on an order can be set to anything - an admin could accidentally jump Pending straight to Delivered, or un-cancel a cancelled order, silently breaking the audit trail and any logic that assumes a sane progression.",
          solution:
            "Enforced an ALLOWED_TRANSITIONS map server-side on every status update (e.g. Pending can only move to Processing or Cancelled), rejecting anything not in that map with a clear error, and appending every real transition - with a timestamp - to the order's own statusHistory array.",
        },
        {
          title: "Keeping stock counts honest through checkout and cancellation",
          problem:
            "Stock has to decrement when an order is placed and be restored only if that exact order is later cancelled. Trusting client-submitted prices or stale cart data for this is a real overselling risk.",
          solution:
            "Checkout re-validates every cart item against live product data (active + in-stock) before creating the order, decrements stock in the same request, and only allows self-service cancellation while the order is still Pending - restoring the exact quantities on cancel, not a guess.",
        },
        {
          title: "Historical orders shouldn't change when a product is edited later",
          problem:
            "If an order only stored a reference to a Product by ID, editing that product's price or name afterward would silently rewrite what a customer's past order appears to show them.",
          solution:
            "Each order item is written as its own snapshot (name, image, price) at the moment of purchase, directly into the Order document - so an order's history page is correct forever, independent of whatever happens to the catalog afterward.",
        },
      ],
    },
    {
      kind: "bullets",
      id: "workflow",
      eyebrow: "07 - DEVELOPMENT WORKFLOW",
      title: "How it was built",
      items: [
        "Schema and API designed before UI: User/Category/Product/Cart/Order relationships settled first, then the storefront and admin panel built against a stable contract",
        "Seed scripts (admin account, catalog, demo orders) so the entire system can be stood up and demoed from a clean database in minutes",
        "Deliberately scoped checkout to a mocked Cash-on-Delivery flow rather than integrating a real payment gateway, to keep focus on correctness of cart/order/stock logic rather than third-party payment integration",
        "One React codebase serving two audiences (customer, admin) via role-gated routing, instead of forking into two separate apps",
      ],
    },
    {
      kind: "cards",
      id: "learnings",
      eyebrow: "08 - KEY LEARNINGS",
      title: "What this project actually taught me",
      items: [
        {
          title: "Dual-mode state without duplicate logic",
          description:
            "Supporting guest and authenticated users cleanly - one context, two backing stores, one merge point - instead of branching business logic throughout the app.",
        },
        {
          title: "Server-enforced state machines",
          description:
            "Why a real-world lifecycle (an order's status) needs to be enforced server-side as an explicit transition map, not trusted as a free-text field set by whoever's calling the API.",
        },
        {
          title: "Snapshot vs. reference in schema design",
          description:
            "Deciding when a document should copy data at a point in time (Order items) versus just reference it live (Cart items) - and why getting that wrong breaks historical correctness.",
        },
        {
          title: "One codebase, two audiences",
          description: "Serving a customer storefront and an admin panel safely from a single React app via role-gated routing, rather than defaulting to two separate projects.",
        },
      ],
    },
    {
      kind: "note",
      id: "closing-note",
      icon: "sparkles",
      label: "ABOUT THIS PROJECT",
      text: `ShopSphere is a personal project, designed and built solo end-to-end to
practice full e-commerce system design - schema, API, storefront, and the
admin tooling a real store needs. It runs against a local MongoDB instance
and uses a mocked Cash-on-Delivery-style checkout; there is no real payment
gateway integration and no public production deployment.`,
    },
  ],
};
