import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {
  Building2,
  Laptop,
  BookOpen,
  FileText,
  Layers,
  ArrowRight,
  ShieldCheck,
  Percent,
  CheckCircle,
  Sparkles,
  Calculator,
  Truck
} from 'lucide-react';

export const BusinessProcurementSection = () => {
  const { openQuoteModal } = useCart();

  // Interactive Bulk Calculator State
  const [selectedPackage, setSelectedPackage] = useState('it-fleet');
  const [procurementQty, setProcurementQty] = useState(10);

  // Package definitions
  const packages = {
    'it-fleet': {
      title: 'Commercial IT Fleet (Laptops & Displays)',
      baseUnitCost: 65000,
      description: 'Standardized Intel Core i7 enterprise laptops, QHD monitors, and docking hubs for engineering and operations pods.'
    },
    'stationery-restock': {
      title: 'Quarterly Corporate Stationery Restock',
      baseUnitCost: 380,
      description: 'A4 copier paper reams, executive wirebound notebooks, retractable ballpoint pens, and desk organizer sets.'
    },
    'networking-cabling': {
      title: 'Office Network & Infrastructure Rollout',
      baseUnitCost: 3500,
      description: 'Dual-band Wi-Fi 6 enterprise routers, Cat6 high-speed patch cords, and server rack interconnects.'
    }
  };

  const currentPkg = packages[selectedPackage];
  const grossAmount = currentPkg.baseUnitCost * procurementQty;

  // Tiered discount
  let discountRate = 0.05;
  if (procurementQty >= 50) discountRate = 0.15;
  else if (procurementQty >= 25) discountRate = 0.12;
  else if (procurementQty >= 10) discountRate = 0.08;

  const estimatedSavings = Math.round(grossAmount * discountRate);
  const netEstimatedCost = grossAmount - estimatedSavings;
  const gstInputTaxCredit = Math.round(netEstimatedCost * 0.18);

  return (
    <section className="procurement-section-root">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center">
          <div className="section-badge">
            <Building2 size={16} /> Business Procurement Desk
          </div>
          <h2 className="section-title">Engineered for Corporate Buyers & IT Teams</h2>
          <p className="section-sub">
            Consolidate your technology fleet provisioning and everyday office stationery supplies through one centralized, GST-compliant marketplace.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="procurement-pillars-grid">
          {/* Pillar 1 */}
          <div className="pillar-card">
            <div className="pillar-icon-box bg-blue-subtle">
              <Laptop size={24} className="text-blue" />
            </div>
            <h4>Office IT Hardware</h4>
            <p>
              Pre-configured business laptops, commercial towers, ergonomic monitors, and conferencing webcams with onsite enterprise warranty.
            </p>
            <ul className="pillar-features">
              <li>• Intel Core i5/i7 & Windows 11 Pro</li>
              <li>• Multi-monitor docking solutions</li>
              <li>• OEM 3-Year Onsite Cover</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card">
            <div className="pillar-icon-box bg-emerald-subtle">
              <BookOpen size={24} className="text-emerald" />
            </div>
            <h4>Bulk Stationery Purchases</h4>
            <p>
              Keep your administrative floors running smoothly with bulk pallet shipments of 75 GSM A4 copier paper, pens, markers, and file organizers.
            </p>
            <ul className="pillar-features">
              <li>• High-volume carton packaging</li>
              <li>• Moisture-barrier paper wrapping</li>
              <li>• Scheduled recurring restocks</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card">
            <div className="pillar-icon-box bg-indigo-subtle">
              <FileText size={24} className="text-indigo" />
            </div>
            <h4>Accredited Specifications</h4>
            <p>
              Detailed technical datasheets, standardized HSN codes, and automatic 18% Input Tax Credit (ITC) tax invoicing ready for your auditor.
            </p>
            <ul className="pillar-features">
              <li>• Standardized HSN compliance</li>
              <li>• Instant downloadable GST tax invoice</li>
              <li>• Itemized bill of materials</li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card">
            <div className="pillar-icon-box bg-amber-subtle">
              <Layers size={24} className="text-amber" />
            </div>
            <h4>Centralized Catalog</h4>
            <p>
              Replace dozens of fragmented vendors with a unified 10-category catalog spanning computers, networking cables, and desk supplies.
            </p>
            <ul className="pillar-features">
              <li>• Fast SKU-based procurement</li>
              <li>• Transparent tiered pricing</li>
              <li>• Consistent corporate quality</li>
            </ul>
          </div>

          {/* Pillar 5 */}
          <div className="pillar-card">
            <div className="pillar-icon-box bg-cyan-subtle">
              <ShieldCheck size={24} className="text-cyan" />
            </div>
            <h4>Simple Ordering Workflow</h4>
            <p>
              Order via corporate credit card, Net-30 purchase orders (PO), or digital UPI with real-time dispatch tracking and local storage history.
            </p>
            <ul className="pillar-features">
              <li>• Corporate PO reference support</li>
              <li>• Fast pallet & desk deliveries</li>
              <li>• Dedicated B2B key account desk</li>
            </ul>
          </div>
        </div>

        {/* Interactive Bulk Quantity Estimator */}
        <div className="procurement-calculator-card">
          <div className="calc-header-row">
            <div className="calc-header-text">
              <div className="calc-badge">
                <Calculator size={15} /> Demo Volume Savings Calculator
              </div>
              <h3 className="calc-title">Simulate Corporate Procurement Volume Tiers</h3>
              <p className="calc-desc">
                Select your procurement category and adjust target units to estimate tiered volume savings and eligible GST Input Tax Credit.
              </p>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => openQuoteModal()}
            >
              <Sparkles size={16} /> Request Custom Corporate Quotation
            </button>
          </div>

          <div className="calc-body-grid">
            {/* Left: Configuration */}
            <div className="calc-controls">
              <label className="calc-control-label">1. Choose Procurement Package</label>
              <div className="package-selector-tabs">
                {Object.entries(packages).map(([key, pkg]) => (
                  <button
                    key={key}
                    type="button"
                    className={`pkg-tab ${selectedPackage === key ? 'active' : ''}`}
                    onClick={() => setSelectedPackage(key)}
                  >
                    <span className="pkg-tab-title">{pkg.title}</span>
                    <span className="pkg-tab-rate">
                      Est. ₹{pkg.baseUnitCost.toLocaleString('en-IN')} / unit
                    </span>
                  </button>
                ))}
              </div>

              <div className="slider-control-block">
                <div className="flex-between mb-2">
                  <label htmlFor="proc-units-slider" className="calc-control-label">
                    2. Target Procurement Units:
                  </label>
                  <span className="units-count-display">{procurementQty} Units</span>
                </div>
                <input
                  id="proc-units-slider"
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={procurementQty}
                  onChange={(e) => setProcurementQty(parseInt(e.target.value, 10))}
                  className="calc-range-slider"
                />
                <div className="slider-marker-row">
                  <span>5 Units (5%)</span>
                  <span>10 Units (8%)</span>
                  <span>25 Units (12%)</span>
                  <span>50+ Units (15% OFF)</span>
                </div>
              </div>

              <div className="quick-qty-pills">
                <span className="text-xs font-semibold text-subtle">Quick Presets:</span>
                {[5, 10, 20, 50, 100].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    className={`preset-pill ${procurementQty === qty ? 'active' : ''}`}
                    onClick={() => setProcurementQty(qty)}
                  >
                    {qty} units
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Realtime Estimated Economics */}
            <div className="calc-results-card">
              <h4 className="results-card-title">Estimated Procurement Economics</h4>
              
              <div className="economics-row">
                <span className="text-subtle">Standard Catalog Value:</span>
                <span className="font-semibold">₹{grossAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="economics-row highlight-green">
                <span>
                  <Percent size={14} className="inline mr-1" /> Volume Tier Savings ({Math.round(discountRate * 100)}%):
                </span>
                <span className="savings-val">-₹{estimatedSavings.toLocaleString('en-IN')}</span>
              </div>

              <div className="economics-row">
                <span className="text-subtle">Net Taxable Corporate Base:</span>
                <span className="font-semibold">₹{netEstimatedCost.toLocaleString('en-IN')}</span>
              </div>

              <div className="economics-row highlight-blue">
                <span>
                  <ShieldCheck size={14} className="inline mr-1" /> Eligible 18% GST Input Credit:
                </span>
                <span className="text-blue font-bold">+₹{gstInputTaxCredit.toLocaleString('en-IN')}</span>
              </div>

              <div className="divider-line my-3"></div>

              <div className="economics-total-row">
                <div>
                  <span className="block text-xs uppercase text-subtle tracking-wider">Estimated Total</span>
                  <span className="total-inr-price">
                    ₹{(netEstimatedCost + gstInputTaxCredit).toLocaleString('en-IN')}
                  </span>
                </div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => openQuoteModal()}
                >
                  Confirm Estimate <ArrowRight size={14} />
                </button>
              </div>

              <p className="disclaimer-microtext">
                * Simulated B2B procurement tier. Formal rate contract generated upon RFQ validation with your corporate GSTIN.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
