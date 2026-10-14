# OfficeKart — Corporate IT & Office Stationery B2B E-Commerce Platform

A high-performance, responsive React.js + Vite frontend web application engineered for business procurement, corporate buyers, IT fleet managers, and office administrative teams. Inspired by intuitive enterprise procurement workflows and e-commerce shopping standards, tailored with corporate branding, GST tax invoicing, volume pricing tiers, and SKU-level search.

![OfficeKart Preview](https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80)

---

## 🚀 Key Highlights & Business Capabilities

- **Demo Brand Identity**: **OfficeKart** — Corporate IT Equipment & Office Stationery Hub.
- **Search-First Enterprise UX**: Instant search by product name, category, or SKU (e.g., `OK-IT-LAP-001`, `OK-ST-PAP-013`) with live autocomplete suggestions, recent search prompts, and clear button.
- **10 Dedicated Office Categories**: Spanning enterprise computing, networking infrastructure, copiers, and daily desk consumables.
- **20 Realistic Commercial SKUs**: 12 IT equipment products and 8 office stationery products with realistic Indian Rupee (INR ₹) pricing, comprehensive technical specifications, and HSN codes.
- **GST Tax Compliance (18% ITC)**: Automated itemized tax breakdown displaying base taxable price and 18% Input Tax Credit (ITC) for business tax offset.
- **Tiered Volume Rebate Engine**: Automated quantity discounts (5%, 8%, 12%) for departmental and fleet purchasing.
- **Interactive Volume Savings Calculator**: Allows procurement officers to simulate fleet hardware setups or quarterly stationery replenishment economics in real time.
- **Full Frontend Cart & Checkout**:
  - Live quantity adjustment, remove item, save to wishlist.
  - Delivery PIN code transit estimator.
  - Promo coupons (`OFFICE10`, `BULK5`, `FREESHIP`).
  - Net 30 Purchase Order (PO) and corporate card simulation.
  - Downloadable/Printable simulated GST Tax Invoice with authorized digital signatory.
- **LocalStorage Persistence**: Cart items, saved wishlist items, and demo order history are stored locally in the browser across sessions.
- **Deployment Ready**: Configured with `vercel.json` for seamless client-side SPA routing on Vercel and GitHub.

---

## 📂 Product Categories (10 Core Office Categories)

| # | Category Name | Description | Key Peripherals & Consumables |
|---|---|---|---|
| 1 | **Laptops & Computers** | Commercial workstations & mobile laptops | Intel Core i7 Business Laptops, Tower PCs |
| 2 | **Monitors & Displays** | Ergonomic office screens & displays | 27" QHD IPS Eye Care Monitors |
| 3 | **Printers & Scanners** | High-volume office multifunction copiers | Monochrome Laser All-in-Ones (42 PPM) |
| 4 | **Computer Accessories** | Ergonomic input & docking stations | Silent Mechanical Keyboards, Ergonomic Mice, 9-in-1 Docks, Webcams |
| 5 | **Networking Equipment** | Enterprise infrastructure & cabling | AX3000 Wi-Fi 6 Routers, Cat6 RJ45 Patch Cords |
| 6 | **Storage & Data Devices** | Hardware-encrypted backup drives | 1TB Rugged External SSDs, 128GB Alloy USB Drives |
| 7 | **Office Stationery** | Daily desk binding & organizing | Heavy-Duty All-Metal Staplers, 2-Hole Paper Punches |
| 8 | **Paper & Notebooks** | Archival reams & executive notebooks | 75 GSM A4 Copier Paper (500 sheets), A5 Wirebound Spiral Notebooks |
| 9 | **Writing Instruments** | Smudge-free business pens & markers | ProGlide 0.7mm Ballpoint Pens (Pack of 20), Chisel Permanent Markers |
| 10 | **Office Organization & Supplies** | Workstation filing & memo cubes | 4-Tier Metal Mesh Trays, Pastel 3x3" Sticky Notes (1200 sheets) |

---

## 📦 Complete 20 Product Catalog & SKUs

Stored in `src/data/products.js`:

### IT Hardware & Peripherals (12 SKUs)
1. **Business Laptop** — `ThinkPro Elite 15.6" Commercial Business Laptop` (SKU: `OK-IT-LAP-001`, HSN: `84713010`)
2. **Desktop Computer** — `OptiCore Pro Commercial Micro-Tower Desktop PC` (SKU: `OK-IT-DSK-002`, HSN: `84715000`)
3. **LED Monitor** — `UltraView 27" QHD IPS Ergonomic Office Monitor` (SKU: `OK-IT-MON-003`, HSN: `85285200`)
4. **Laser Printer** — `PrintMaster Pro High-Speed Monochrome Laser All-in-One` (SKU: `OK-IT-PRN-004`, HSN: `84433100`)
5. **Wireless Keyboard** — `ErgoType Silent Wireless Mechanical Office Keyboard` (SKU: `OK-IT-KBD-005`, HSN: `84716040`)
6. **Wireless Mouse** — `PrecisionFlow Pro Dual-Mode Ergonomic Wireless Mouse` (SKU: `OK-IT-MOU-006`, HSN: `84716060`)
7. **USB-C Hub** — `HyperConnect 9-in-1 Dual 4K HDMI USB-C Multiport Dock` (SKU: `OK-IT-HUB-007`, HSN: `84718000`)
8. **Webcam** — `ClearVision 1080p FHD Corporate Conference Webcam` (SKU: `OK-IT-CAM-008`, HSN: `85258900`)
9. **Wi-Fi Router** — `NetShield AX3000 Enterprise Wi-Fi 6 Gigabit Router` (SKU: `OK-IT-ROU-009`, HSN: `85176290`)
10. **Ethernet Cable** — `ProLink Cat6 Snagless RJ45 Gigabit Patch Cable (15M)` (SKU: `OK-IT-CAB-010`, HSN: `85444220`)
11. **External SSD** — `SpeedVault Ultra 1TB Rugged Portable External SSD` (SKU: `OK-IT-SSD-011`, HSN: `84717020`)
12. **USB Flash Drive** — `DataMate Pro 128GB Metal Alloy USB 3.2 Flash Drive` (SKU: `OK-IT-USB-012`, HSN: `85235100`)

### Office Stationery & Supplies (8 SKUs)
13. **A4 Copier Paper Ream** — `PrimeCopy 75 GSM High-Brightness A4 Copier Paper (500 Sheets)` (SKU: `OK-ST-PAP-013`, HSN: `48025610`)
14. **Spiral Notebook** — `ExecuWrite Wirebound Executive Spiral Notebook (A5, 160 Pages)` (SKU: `OK-ST-NOT-014`, HSN: `48201090`)
15. **Ballpoint Pen Pack** — `ProGlide Smooth Retractable Ballpoint Pens (Pack of 20, Blue)` (SKU: `OK-ST-PEN-015`, HSN: `96081019`)
16. **Permanent Marker Set** — `MarkMaster Dual-Tip Permanent Office Markers (Pack of 8)` (SKU: `OK-ST-MRK-016`, HSN: `96082000`)
17. **Sticky Notes Pack** — `MemoGrid Pastel Sticky Notes Value Pack (12 Pads x 100 Sheets)` (SKU: `OK-ST-NOT-017`, HSN: `48201090`)
18. **Stapler with Staples** — `HeavyDuty All-Metal Office Desktop Stapler Combo Set` (SKU: `OK-ST-STP-018`, HSN: `82055990`)
19. **Paper Punch Machine** — `PrecisionPunch 2-Hole Heavy-Duty Office Paper Perforator` (SKU: `OK-ST-PUN-019`, HSN: `84729090`)
20. **Desktop File Organizer** — `MeshMaster 4-Tier Metal Desktop Document & File Organizer` (SKU: `OK-ST-ORG-020`, HSN: `83040000`)

---

## 🛠️ Technology Stack

- **Framework**: React.js 19 + Vite 8
- **Language**: JavaScript (ES Modules)
- **Routing**: React Router DOM v7
- **Icons**: Lucide React
- **Delight & Animations**: Canvas Confetti
- **Styling**: Vanilla CSS Design System (`src/index.css` & `src/App.css`) with CSS custom properties, responsive grid systems, and print media rules.

---

## 💻 Project Structure

```text
sumit/
├── index.html                   # HTML entry point with fonts & metadata
├── package.json                 # Project dependencies & scripts
├── vercel.json                  # Vercel SPA client rewrite configuration
├── vite.config.js               # Vite build configuration
├── public/
│   └── favicon.svg              # Corporate OfficeKart SVG favicon
└── src/
    ├── main.jsx                 # React root render
    ├── App.jsx                  # Main routing & layout shell
    ├── index.css                # Global design system tokens, typography, utilities
    ├── App.css                  # Component styling, animations, and print rules
    ├── context/
    │   └── CartContext.jsx      # Cart, wishlist, orders, discounts & GST state
    ├── data/
    │   └── products.js          # 20 products, 10 categories, reviews & tiers
    ├── components/
    │   ├── Navbar.jsx           # Corporate header, SKU search & category drawer
    │   ├── Footer.jsx           # 10-category links, policies & contact details
    │   ├── ProductCard.jsx      # Responsive grid & list product card
    │   ├── BulkQuoteModal.jsx   # Interactive RFQ submission modal
    │   ├── ToastContainer.jsx   # Micro-interaction notifications
    │   └── BusinessProcurementSection.jsx # 5 B2B pillars & volume calculator
    └── pages/
        ├── HomePage.jsx         # Hero, category grid, deals & trust signals
        ├── ProductListPage.jsx  # Search, filters, price tiers, sorting, list/grid
        ├── ProductDetailPage.jsx# Gallery, specs table, GST split, reviews
        ├── CartPage.jsx         # Quantities, bulk tier savings, PIN estimator
        ├── CheckoutPage.jsx     # Corporate billing, GSTIN, PO input, settlement
        ├── OrderSuccessPage.jsx # Celebration, order ID, printable GST invoice
        ├── OrderHistoryPage.jsx # LocalStorage order records & reorder actions
        ├── WishlistPage.jsx     # Saved items with move-to-cart
        └── ProcurementPage.jsx  # Dedicated corporate procurement guide
```

---

## ⚙️ Installation & Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Clone and Install
```bash
# Clone the repository
git clone https://github.com/your-username/officekart.git
cd officekart

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, minified production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment Guide

### Deploying to Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (Build command: `npm run build`, Output directory: `dist`).
5. Click **"Deploy"**.
6. The included `vercel.json` ensures all deep SPA routes (`/products`, `/cart`, `/checkout`, `/order-success/:id`, `/orders`) correctly resolve without 404 errors:
   ```json
   {
     "rewrites": [
       {
         "source": "/(.*)",
         "destination": "/index.html"
       }
     ]
   }
   ```

### Deploying to GitHub Pages
1. In `vite.config.js`, set `base: '/<repository-name>/'`.
2. Run `npm run build`.
3. Deploy the `dist` directory to your `gh-pages` branch.

---

## 🛡️ Prototype Scope & Boundary Notice

This project is a high-fidelity client-facing frontend prototype created for evaluation, business user testing, and demonstration.
- **Simulated Payment**: No real bank credentials, credit cards, or UPI payments are charged.
- **Simulated Invoicing**: Generates formatted, printable GST Tax Invoices with accurate tax calculations and HSN codes saved in the browser's `localStorage`.
- **Backend Integrations**: Real-time warehouse inventory synchronization, external ERP/quotation integrations, and live carrier API tracking are out of current scope.
