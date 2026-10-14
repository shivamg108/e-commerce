// OfficeKart Product Catalog & Category Definitions
// Demo B2B Office IT Equipment & Corporate Stationery Store

export const CATEGORIES = [
  {
    id: "laptops-computers",
    name: "Laptops & Computers",
    icon: "Laptop",
    description: "Enterprise workstations, ultrabooks & commercial business desktops",
    itemCount: 2,
    badge: "Enterprise Ready",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "monitors-displays",
    name: "Monitors & Displays",
    icon: "Monitor",
    description: "High-resolution IPS screens, ergonomic dual-monitor setups & conference displays",
    itemCount: 1,
    badge: "TUV Eye Care",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "printers-scanners",
    name: "Printers & Scanners",
    icon: "Printer",
    description: "High-speed network laser printers, all-in-one MFP copiers & barcode scanners",
    itemCount: 1,
    badge: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "computer-accessories",
    name: "Computer Accessories",
    icon: "Keyboard",
    description: "Ergonomic keyboards, precision mice, docking stations & HD webcams",
    itemCount: 3,
    badge: "Ergonomic",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "networking-equipment",
    name: "Networking Equipment",
    icon: "Wifi",
    description: "Enterprise Wi-Fi 6 routers, gigabit switches, patch cords & rack accessories",
    itemCount: 2,
    badge: "Gigabit Speed",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "storage-data",
    name: "Storage & Data Devices",
    icon: "HardDrive",
    description: "Encrypted portable SSDs, high-capacity USB flash drives & backup drives",
    itemCount: 2,
    badge: "Hardware Encrypted",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "office-stationery",
    name: "Office Stationery",
    icon: "Briefcase",
    description: "Daily office desk essentials, staplers, perforators & desktop accessories",
    itemCount: 2,
    badge: "Office Daily",
    image: "https://images.unsplash.com/photo-1456735190829-d146182fc589?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "paper-notebooks",
    name: "Paper & Notebooks",
    icon: "BookOpen",
    description: "High-brightness A4 copier paper reams, executive wirebound notebooks & notepads",
    itemCount: 2,
    badge: "Eco-Certified",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "writing-instruments",
    name: "Writing Instruments",
    icon: "PenTool",
    description: "Fluid rollerball & ballpoint pens, whiteboard markers & permanent highlighter sets",
    itemCount: 2,
    badge: "Smudge-Free",
    image: "https://images.unsplash.com/photo-1585336261026-004313f8c857?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "office-organization",
    name: "Office Organization & Supplies",
    icon: "Layers",
    description: "Tiered mesh desk trays, adhesive memo cubes, document binders & file organizers",
    itemCount: 3,
    badge: "Modular",
    image: "https://images.unsplash.com/photo-1507842229451-7723e757a292?auto=format&fit=crop&w=600&q=80"
  }
];

export const PRODUCTS = [
  // 1. Business Laptop
  {
    id: "ok-it-01",
    name: "ThinkPro Elite 15.6\" Commercial Business Laptop",
    category: "Laptops & Computers",
    price: 68990,
    originalPrice: 84990,
    discount: 19,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 142,
    description: "Engineered specifically for enterprise productivity and seamless corporate multitasking. Featuring 13th Gen Intel Core i7 processing, military-grade MIL-STD 810H durability, and hardware TPM 2.0 security. Comes pre-installed with Windows 11 Pro and enterprise fleet provisioning support.",
    specifications: {
      "Processor": "Intel Core i7-1355U (10 Cores, up to 5.0 GHz)",
      "Memory": "16 GB DDR5 5200MHz (Expandable to 64 GB)",
      "Storage": "512 GB M.2 NVMe PCIe 4.0 SSD",
      "Display": "15.6\" FHD (1920x1080) Anti-Glare IPS, 300 nits",
      "Operating System": "Windows 11 Pro 64-bit Commercial",
      "Security": "Match-on-Chip Fingerprint Reader, dTPM 2.0, Webcam Privacy Shutter",
      "Connectivity": "Wi-Fi 6E (802.11ax), Bluetooth 5.3, Gigabit LAN",
      "Ports": "2x Thunderbolt 4, 2x USB-A 3.2 Gen 1, 1x HDMI 2.1, RJ-45",
      "Warranty": "3-Year Comprehensive Onsite Corporate Warranty"
    },
    stock: 38,
    featured: true,
    sku: "OK-IT-LAP-001",
    hsnCode: "84713010",
    brand: "ThinkPro Commercial"
  },

  // 2. Desktop Computer
  {
    id: "ok-it-02",
    name: "OptiCore Pro Commercial Micro-Tower Desktop PC",
    category: "Laptops & Computers",
    price: 52490,
    originalPrice: 62990,
    discount: 17,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 96,
    description: "Workhorse commercial tower designed for accounting, software development, and front-office backbones. Features whisper-quiet thermals, tool-less chassis expansion, and dual monitor display outputs out of the box with business-tier peripherals included.",
    specifications: {
      "Processor": "Intel Core i5-13400 (10 Cores, 16 Threads, up to 4.6 GHz)",
      "Memory": "16 GB DDR4 3200MHz (Dual Channel, up to 128 GB)",
      "Storage": "1 TB NVMe PCIe SSD + 1TB SATA 7200RPM HDD",
      "Graphics": "Intel UHD Graphics 730 (Dual 4K Monitor Support)",
      "Power Supply": "300W 90% Efficient 80 Plus Platinum PSU",
      "Operating System": "Windows 11 Pro Pre-installed",
      "Included Accessories": "Commercial USB Keyboard and Optical Scroll Mouse",
      "Chassis": "Tool-less Micro-Tower with Kensington Lock Slot",
      "Warranty": "3-Year Next Business Day Onsite Support"
    },
    stock: 24,
    featured: false,
    sku: "OK-IT-DSK-002",
    hsnCode: "84715000",
    brand: "OptiCore Enterprise"
  },

  // 3. LED Monitor
  {
    id: "ok-it-03",
    name: "UltraView 27\" QHD IPS Ergonomic Office Monitor",
    category: "Monitors & Displays",
    price: 18990,
    originalPrice: 24990,
    discount: 24,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 215,
    description: "Designed for intensive spreadsheet work, CAD drafting, and all-day office productivity. The 27-inch 2560x1440 QHD IPS panel delivers 77% more screen workspace than standard 1080p, paired with a full 4-axis height, pivot, swivel, and tilt ergonomic stand.",
    specifications: {
      "Panel Size & Type": "27-inch IPS Anti-Glare WLED Backlit",
      "Resolution": "QHD (2560 x 1440) @ 75Hz Refresh Rate",
      "Color Gamut": "99% sRGB, 16.7 Million Colors, Factory Calibrated (Delta E < 2)",
      "Ergonomics": "Height adjust (150mm), Pivot 90°, Swivel ±45°, Tilt -5° to +23°",
      "Eye Care": "TUV Rheinland Certified Flicker-Free & Low Blue Light Filter",
      "Connectivity": "1x USB-C (65W PD + Display + Data), 1x HDMI 2.0, 1x DisplayPort 1.4",
      "USB Hub": "4x Downstream USB 3.2 Gen 1 ports",
      "Audio": "Dual 2W Integrated Stereo Speakers",
      "Warranty": "3-Year Advanced Exchange Guarantee"
    },
    stock: 45,
    featured: true,
    sku: "OK-IT-MON-003",
    hsnCode: "85285200",
    brand: "UltraView Pro"
  },

  // 4. Laser Printer
  {
    id: "ok-it-04",
    name: "PrintMaster Pro High-Speed Monochrome Laser All-in-One",
    category: "Printers & Scanners",
    price: 26490,
    originalPrice: 32990,
    discount: 20,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 88,
    description: "Heavy-duty multifunction office printer built for medium-to-large business teams. Delivers rapid 42 pages per minute, automatic dual-sided duplex printing, high-resolution 50-sheet ADF scanning, and centralized departmental PIN secure print management.",
    specifications: {
      "Functions": "Print, Copy, Scan, Fax (All-in-One Multifunction)",
      "Print Speed": "Up to 42 ppm (Letter/A4 Monochrome)",
      "First Page Out": "As fast as 6.1 seconds",
      "Duty Cycle": "Up to 80,000 pages per month (Recommended: 750 - 4,000 pages)",
      "Paper Trays": "250-sheet Main Tray + 100-sheet Multipurpose Bypass Tray",
      "Duplex Printing": "Automatic Two-Sided Printing & Scanning",
      "Connectivity": "Gigabit Ethernet, Dual-Band Wi-Fi, Wi-Fi Direct, High-Speed USB 2.0",
      "Security": "Departmental PIN Release, Secure Boot, Firmware Integrity Validation",
      "Warranty": "1-Year Onsite Corporate Support with Starter High-Yield Toner"
    },
    stock: 19,
    featured: true,
    sku: "OK-IT-PRN-004",
    hsnCode: "84433100",
    brand: "PrintMaster Office"
  },

  // 5. Wireless Keyboard
  {
    id: "ok-it-05",
    name: "ErgoType Silent Wireless Mechanical Office Keyboard",
    category: "Computer Accessories",
    price: 4990,
    originalPrice: 6990,
    discount: 29,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 312,
    description: "Engineered for quiet open-plan office spaces and executive desks. Custom sound-dampened tactile silent switches ensure comfortable typing without disturbing colleagues. Features seamless 3-device Bluetooth + 2.4GHz USB wireless switching.",
    specifications: {
      "Switch Type": "Low-Profile Silent Tactile Mechanical Switches (50M Keystroke Life)",
      "Layout": "Full Size 104-Key with Dedicated Numeric Keypad & Media Controls",
      "Wireless Connectivity": "Bluetooth 5.2 (2 Channels) + 2.4GHz USB Nano Receiver",
      "Multi-Device Pairing": "Connect up to 3 devices simultaneously with Instant Switch keys",
      "Battery Life": "Up to 5 months on a single USB-C charge (1500mAh Lithium)",
      "Backlighting": "Smart Proximity Sensor White LED with Auto-Dimming",
      "Compatibility": "Windows 10/11, macOS, Linux, ChromeOS",
      "Warranty": "2-Year Commercial Replacement Warranty"
    },
    stock: 82,
    featured: true,
    sku: "OK-IT-KBD-005",
    hsnCode: "84716040",
    brand: "ErgoType Corporate"
  },

  // 6. Wireless Mouse
  {
    id: "ok-it-06",
    name: "PrecisionFlow Pro Dual-Mode Ergonomic Wireless Mouse",
    category: "Computer Accessories",
    price: 2490,
    originalPrice: 3490,
    discount: 29,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 418,
    description: "Anatomically contoured to reduce wrist strain during 8+ hour workdays. Featuring 90% silent micro-switches, frictionless thumb rest, and precision high-DPI optical sensor that tracks accurately on all office surfaces including clear glass desktops.",
    specifications: {
      "Sensor": "Darkfield High-Precision Optical (Adjustable 800 - 4000 DPI)",
      "Buttons": "6 Programmable Buttons (Silent Click Primary Switches)",
      "Scroll Wheel": "Dual-Mode Hyper-Fast Free Spin & Ratchet Click Wheel",
      "Connectivity": "Bluetooth Low Energy + 2.4GHz Wireless USB Dongle",
      "Battery": "Rechargeable 500mAh Li-Po, quick 1-min charge gives 3 hours use",
      "Ergonomic Angle": "57° natural handshake orientation for forearm relief",
      "Weight": "112 grams with balanced center of gravity",
      "Warranty": "2-Year Replacement Warranty"
    },
    stock: 110,
    featured: false,
    sku: "OK-IT-MOU-006",
    hsnCode: "84716060",
    brand: "PrecisionFlow"
  },

  // 7. USB-C Hub
  {
    id: "ok-it-07",
    name: "HyperConnect 9-in-1 Dual 4K HDMI USB-C Multiport Dock",
    category: "Computer Accessories",
    price: 3890,
    originalPrice: 5490,
    discount: 29,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 164,
    description: "Transform modern ultrabooks into a full-fledged enterprise desktop workstation. Features dual 4K @ 60Hz HDMI video outputs, 100W Power Delivery passthrough charging, Gigabit Ethernet, and fast 10Gbps USB 3.2 data ports housed in aerospace anodized aluminum.",
    specifications: {
      "Host Connection": "Reinforced Braided USB-C 3.2 Gen 2 Cable (20cm)",
      "Video Output": "2x HDMI 2.0 (Dual 4K @ 60Hz or Single 4K @ 60Hz HDR)",
      "Power Delivery": "USB-C PD 3.0 up to 100W input (85W clean laptop charging)",
      "Data Ports": "3x USB-A 3.2 Gen 1 (5Gbps), 1x USB-C Data (5Gbps)",
      "Networking": "RJ45 Gigabit Ethernet 10/100/1000 Mbps with Activity LEDs",
      "Card Readers": "UHS-I SD and MicroSD slots (Simultaneous Read/Write)",
      "Build Material": "Space Gray CNC Machined Aluminum for Superior Heat Dissipation",
      "Warranty": "2-Year Manufacturer Replacement Warranty"
    },
    stock: 56,
    featured: false,
    sku: "OK-IT-HUB-007",
    hsnCode: "84718000",
    brand: "HyperConnect"
  },

  // 8. Webcam
  {
    id: "ok-it-08",
    name: "ClearVision 1080p FHD Corporate Conference Webcam",
    category: "Computer Accessories",
    price: 3290,
    originalPrice: 4490,
    discount: 27,
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 178,
    description: "Crystal-clear corporate conferencing solution certified for Microsoft Teams, Zoom, and Google Meet. Features intelligent auto-framing, dual beamforming stereo microphones with AI background noise cancellation, and a physical magnetic privacy shutter.",
    specifications: {
      "Resolution & Framerate": "Full HD 1080p @ 60fps / 720p @ 60fps",
      "Lens & FOV": "Multi-layer Glass Optics with 90° Wide Field of View",
      "Audio": "Dual Omnidirectional Stereo Mics with ENC Noise Suppression",
      "Light Correction": "Auto HDR & Low-Light Gain Enhancement for Dim Offices",
      "Privacy": "Integrated Slide-to-Cover Hardware Privacy Shutter",
      "Mounting": "Universal Adjustable Monitor Clip + Standard 1/4\" Tripod Thread",
      "Cable": "2.0-Meter Braided USB-A / USB-C Plug-and-Play Cable",
      "Warranty": "2-Year Corporate Warranty"
    },
    stock: 67,
    featured: false,
    sku: "OK-IT-CAM-008",
    hsnCode: "85258900",
    brand: "ClearVision"
  },

  // 9. Wi-Fi Router
  {
    id: "ok-it-09",
    name: "NetShield AX3000 Enterprise Wi-Fi 6 Gigabit Router",
    category: "Networking Equipment",
    price: 6490,
    originalPrice: 8990,
    discount: 28,
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 92,
    description: "Enterprise-grade wireless routing built for high-density business floors with up to 100 concurrent devices. Offers ultra-fast AX3000 speeds, OFDMA, MU-MIMO, VLAN guest network isolation, and built-in hardware VPN server support.",
    specifications: {
      "Wireless Standard": "Wi-Fi 6 (802.11ax/ac/n/g/b/a) Dual Band",
      "Speed Rating": "Up to 2402 Mbps on 5GHz + 574 Mbps on 2.4GHz",
      "Ethernet Ports": "1x Gigabit WAN + 4x Gigabit LAN with Link Aggregation",
      "Antennas": "4x High-Gain External 5dBi Beamforming Omnidirectional Antennas",
      "Security Protocols": "WPA3-Enterprise, SPI Firewall, DoS Protection, Guest VLANs",
      "VPN Support": "OpenVPN, WireGuard, IPsec, PPTP Client & Server",
      "Management": "Centralized Cloud Web Dashboard + SNMP Support",
      "Warranty": "3-Year Limited Corporate Warranty"
    },
    stock: 31,
    featured: true,
    sku: "OK-IT-ROU-009",
    hsnCode: "85176290",
    brand: "NetShield Systems"
  },

  // 10. Ethernet Cable
  {
    id: "ok-it-10",
    name: "ProLink Cat6 Snagless RJ45 Gigabit Patch Cable (15M)",
    category: "Networking Equipment",
    price: 499,
    originalPrice: 799,
    discount: 38,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 380,
    description: "Industrial-grade Category 6 UTP Ethernet patch cord designed for server racks, workstation drops, and gigabit office networks. Features 50-micron gold-plated connectors, molded snagless boots, and 100% pure bare copper 24 AWG conductors.",
    specifications: {
      "Standard": "TIA/EIA-568-C.2 Cat6 UTP 550MHz Rated",
      "Bandwidth & Speed": "Supports 10/100/1000 Mbps Gigabit & 10GBASE-T up to 55m",
      "Conductor": "100% Bare Pure Copper 24 AWG Stranded Wire",
      "Connectors": "RJ45 Male to Male with 50-Micron Gold-Plated Pins",
      "Jacket Type": "CM-Rated Flame Retardant PVC, Snagless Molded Strain Relief",
      "Length": "15 Meters (49.2 Feet), Flexible Bend Radius",
      "Color": "Corporate Royal Blue",
      "Warranty": "Lifetime Functional Replacement Guarantee"
    },
    stock: 220,
    featured: false,
    sku: "OK-IT-CAB-010",
    hsnCode: "85444220",
    brand: "ProLink Infrastructure"
  },

  // 11. External SSD
  {
    id: "ok-it-11",
    name: "SpeedVault Ultra 1TB Rugged Portable External SSD",
    category: "Storage & Data Devices",
    price: 8490,
    originalPrice: 11990,
    discount: 29,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 240,
    description: "Compact and ruggedized solid state drive engineered for mobile executives and IT administrators. Delivers blazing fast read speeds up to 1050 MB/s, 2-meter drop resistance, IP55 dust/water resistance, and password-protected 256-bit AES hardware encryption.",
    specifications: {
      "Capacity": "1 TB (1000 GB High-Density 3D TLC NAND)",
      "Interface": "USB 3.2 Gen 2 (10 Gbps) Type-C",
      "Transfer Speeds": "Up to 1050 MB/s Sequential Read, 1000 MB/s Sequential Write",
      "Security": "Hardware-level AES 256-bit Password Encryption",
      "Durability": "IP55 Water/Dust Resistant, Shock-Resistant Silicon Bumper (2M Drop)",
      "Included Cables": "USB Type-C to Type-C + USB Type-C to Type-A Adapter",
      "Dimensions & Weight": "100 x 52 x 9 mm, Ultra-light 48 grams",
      "Warranty": "5-Year Limited Manufacturer Warranty"
    },
    stock: 44,
    featured: true,
    sku: "OK-IT-SSD-011",
    hsnCode: "84717020",
    brand: "SpeedVault"
  },

  // 12. USB Flash Drive
  {
    id: "ok-it-12",
    name: "DataMate Pro 128GB Metal Alloy USB 3.2 Flash Drive",
    category: "Storage & Data Devices",
    price: 1190,
    originalPrice: 1690,
    discount: 30,
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 310,
    description: "Heavy-duty zinc-alloy metal casing designed to survive corporate travel, keychain storage, and heavy daily usage. Features high-speed USB 3.2 Gen 1 architecture that transfers full HD presentations and large spreadsheets in seconds.",
    specifications: {
      "Capacity": "128 GB High-Grade Flash Memory",
      "Interface": "USB 3.2 Gen 1 (Backward compatible with USB 3.0 / 2.0)",
      "Transfer Speed": "Up to 150 MB/s Read Speed",
      "Casing": "One-Piece Unibody Zinc Alloy with Integrated Keyring Hole",
      "Protection": "Waterproof, Dustproof, Temperature-proof, X-Ray proof",
      "Dimensions": "39 x 12.2 x 4.6 mm, 9 grams",
      "Plug & Play": "No drivers required across Windows, macOS, ChromeOS",
      "Warranty": "5-Year Manufacturer Warranty"
    },
    stock: 150,
    featured: false,
    sku: "OK-IT-USB-012",
    hsnCode: "85235100",
    brand: "DataMate"
  },

  // 13. A4 Copier Paper Ream
  {
    id: "ok-st-13",
    name: "PrimeCopy 75 GSM High-Brightness A4 Copier Paper (500 Sheets)",
    category: "Paper & Notebooks",
    price: 349,
    originalPrice: 450,
    discount: 22,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 620,
    description: "Top-choice premium multipurpose office paper engineered for jam-free operation on high-volume laser copiers and inkjet printers. Features 98% CIE whiteness for razor-sharp text and vibrant color corporate reports.",
    specifications: {
      "Paper Size": "A4 (210 x 297 mm)",
      "Grammage": "75 GSM Premium Office Grade",
      "Ream Quantity": "500 Sheets per Sealed Moisture-Proof Moisture Barrier Ream",
      "Whiteness & Brightness": "98% CIE Whiteness, High Opacity for 2-Sided Printing",
      "Technology": "ColorLok Technology for Faster Drying & Smear-Free Text",
      "Environmental Standard": "FSC Certified & Elemental Chlorine Free (ECF)",
      "Compatibility": "Laser Printers, Inkjet, High-Speed Photocopiers & Fax",
      "Bulk Packaging": "Available in cartons of 5 reams (2500 sheets)"
    },
    stock: 350,
    featured: true,
    sku: "OK-ST-PAP-013",
    hsnCode: "48025610",
    brand: "PrimeCopy Commercial"
  },

  // 14. Spiral Notebook
  {
    id: "ok-st-14",
    name: "ExecuWrite Wirebound Executive Spiral Notebook (A5, 160 Pages)",
    category: "Paper & Notebooks",
    price: 249,
    originalPrice: 350,
    discount: 29,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 290,
    description: "Premium corporate conference and meeting notebook. Features thick 90 GSM ink-proof natural white paper, rigid water-resistant polypropylene matte covers, elastic closure band, and micro-perforated sheets for clean detachment.",
    specifications: {
      "Dimensions": "A5 Size (148 x 210 mm)",
      "Page Count": "160 Ruled Pages (80 Sheets) with Date & Subject Headers",
      "Paper Quality": "90 GSM Fountain-Pen-Friendly Bleed-Resistant Cream Paper",
      "Binding": "Twin-Wire Bronze Spiral Binding with Flat 360° Lay-Flat Fold",
      "Cover": "Sturdy Polypropylene Matte Black Waterproof Hard Cover",
      "Extra Features": "Elastic Retention Band, Expandable Back Pocket, Pen Holder Loop",
      "Ruling": "Subtle 7mm Gray Line Spacing with Margin Line",
      "Corporate Branding": "Bulk Custom Embossing Available for Enterprise Accounts"
    },
    stock: 180,
    featured: false,
    sku: "OK-ST-NOT-014",
    hsnCode: "48201090",
    brand: "ExecuWrite"
  },

  // 15. Ballpoint Pen Pack
  {
    id: "ok-st-15",
    name: "ProGlide Smooth Retractable Ballpoint Pens (Pack of 20, Blue)",
    category: "Writing Instruments",
    price: 399,
    originalPrice: 550,
    discount: 27,
    image: "https://images.unsplash.com/photo-1585336261026-004313f8c857?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1585336261026-004313f8c857?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 512,
    description: "Standard corporate writing instrument built for effortless documentation, signatures, and daily notes. Low-viscosity oil-based hybrid ink ensures immediate start, zero skipping, and zero smudge on glossy paper.",
    specifications: {
      "Pack Quantity": "20 Retractable Pens in Sturdy Storage Box",
      "Tip Size": "0.7 mm Swiss Tungsten Carbide Fine Point",
      "Ink Formula": "Low-Viscosity Hybrid Blue Ink (Water-Resistant & Fade-Proof)",
      "Grip": "Contoured Ergonomic Textured Rubberized Comfort Grip",
      "Barrel": "Translucent Smoke Barrel with Visible Ink Reservoir Level",
      "Mechanism": "Heavy-Duty Click Plunger with Sturdy Metal Pocket Clip",
      "Writing Distance": "Estimated 1,200+ meters of continuous writing per pen",
      "Certification": "ISO 12757-2 Certified for Official Document Signing"
    },
    stock: 260,
    featured: true,
    sku: "OK-ST-PEN-015",
    hsnCode: "96081019",
    brand: "ProGlide Writing"
  },

  // 16. Permanent Marker Set
  {
    id: "ok-st-16",
    name: "MarkMaster Dual-Tip Permanent Office Markers (Pack of 8)",
    category: "Writing Instruments",
    price: 449,
    originalPrice: 599,
    discount: 25,
    image: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 184,
    description: "Multi-surface industrial permanent markers ideal for labeling cartons, dispatch parcels, whiteboard frames, glass, plastic, and metal office equipment. Fast-drying, waterproof, and low-odor non-toxic formula.",
    specifications: {
      "Pack Assortment": "8 Markers (4 Black, 2 Deep Blue, 1 Red, 1 Green)",
      "Tip Design": "Versatile Chisel & Fine Bullet Tip (1.5mm to 4.5mm line width)",
      "Ink Type": "Xylene & Toluene-Free, Low Odor, Quick-Drying Waterproof",
      "Surface Adhesion": "Corrugated Cartons, Plastic Crates, Glass, Wood, Steel",
      "Cap": "Vented Safety Cap with Pocket Clip and Color Indicator",
      "Shelf Life": "24-Month Sealed Cap-Off Longevity",
      "Safety": "Non-Toxic, Complies with ASTM D-4236 Corporate Standards"
    },
    stock: 140,
    featured: false,
    sku: "OK-ST-MRK-016",
    hsnCode: "96082000",
    brand: "MarkMaster"
  },

  // 17. Sticky Notes Pack
  {
    id: "ok-st-17",
    name: "MemoGrid Pastel Sticky Notes Value Pack (12 Pads x 100 Sheets)",
    category: "Office Organization & Supplies",
    price: 499,
    originalPrice: 699,
    discount: 29,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.8,
    reviewCount: 430,
    description: "Essential desk organizer memo pads in calm executive pastel shades. Enhanced adhesive strip stays firmly stuck on computer monitors, file folders, and conference whiteboards without curling or leaving sticky residue upon removal.",
    specifications: {
      "Dimensions": "3 x 3 Inches (76 x 76 mm) Square Notes",
      "Total Quantity": "1,200 Sheets (12 Individual Pads x 100 Sheets Each)",
      "Color Palette": "Soft Pastel Assortment: Canary Yellow, Sky Blue, Mint Green, Peach",
      "Paper Thickness": "80 GSM Premium Anti-Bleed Heavyweight Paper",
      "Adhesive Formulation": "Super-Sticky Removable Acrylic Polymer (Leaves No Residue)",
      "Repositionable": "Peel and re-stick multiple times on glass, monitors, paper",
      "Packaging": "Individually shrink-wrapped pads in a desktop dispenser box"
    },
    stock: 195,
    featured: false,
    sku: "OK-ST-NOT-017",
    hsnCode: "48201090",
    brand: "MemoGrid"
  },

  // 18. Stapler with Staples
  {
    id: "ok-st-18",
    name: "HeavyDuty All-Metal Office Desktop Stapler Combo Set",
    category: "Office Stationery",
    price: 549,
    originalPrice: 799,
    discount: 31,
    image: "https://images.unsplash.com/photo-1456735190829-d146182fc589?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1456735190829-d146182fc589?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.7,
    reviewCount: 220,
    description: "Rugged all-metal desktop stapler engineered for daily procurement and legal document binding. Handles up to 30 sheets with minimal effort. Includes 2 boxes of 1000 No. 10 staples and a built-in staple remover.",
    specifications: {
      "Stapling Capacity": "Up to 30 Sheets of 75 GSM Paper (Effort-Reduction Lever)",
      "Staple Compatibility": "Standard No. 10 / 24/6 and 26/6 Steel Staples",
      "Included Accessories": "2,000 High-Tensile Chisel-Point Staples + Integrated Pull Remover",
      "Anvil Design": "Rotatable Dual-Mode Anvil (Permanent Clinch & Temporary Pinning)",
      "Body Construction": "Heavy-Duty Cold-Rolled Steel Frame with Non-Slip Rubber Base",
      "Throat Depth": "65 mm Reach for Versatile Document Placement",
      "Loading Mechanism": "One-Touch Quick-Load Spring Magazine with Jam-Clear Release",
      "Warranty": "3-Year Commercial Mechanism Warranty"
    },
    stock: 125,
    featured: false,
    sku: "OK-ST-STP-018",
    hsnCode: "82055990",
    brand: "HeavyDuty Commercial"
  },

  // 19. Paper Punch Machine
  {
    id: "ok-st-19",
    name: "PrecisionPunch 2-Hole Heavy-Duty Office Paper Perforator",
    category: "Office Stationery",
    price: 649,
    originalPrice: 899,
    discount: 28,
    image: "https://images.unsplash.com/photo-1507842229451-7723e757a292?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507842229451-7723e757a292?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.6,
    reviewCount: 165,
    description: "Precision-drilled two-hole punch with calibrated self-centering paper guide for standardized ring-binder filing. Hardened steel cutter punches smoothly through up to 35 sheets in a single downward press.",
    specifications: {
      "Punch Capacity": "35 Sheets of Standard 75 GSM Office Paper",
      "Hole Specifications": "2 Holes, 5.5 mm Diameter, Standard 80 mm Center Distance",
      "Paper Alignment Guide": "Calibrated Metal Guide Bar for A4, A5, B5, and Letter Sizes",
      "Waste Disposal": "Flip-Open Translucent Bottom Rubber Tray for Easy Confetti Emptying",
      "Handle Mechanism": "Ergonomic Long-Lever Handle with Locking Clip for Compact Drawer Storage",
      "Construction": "All-Steel Internal Cam Mechanism with Powder-Coated Metal Shell",
      "Warranty": "2-Year Manufacturer Guarantee"
    },
    stock: 95,
    featured: false,
    sku: "OK-ST-PUN-019",
    hsnCode: "84729090",
    brand: "PrecisionPunch"
  },

  // 20. Desktop File Organizer
  {
    id: "ok-st-20",
    name: "MeshMaster 4-Tier Metal Desktop Document & File Organizer",
    category: "Office Organization & Supplies",
    price: 1290,
    originalPrice: 1890,
    discount: 32,
    image: "https://images.unsplash.com/photo-1507842229451-7723e757a292?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507842229451-7723e757a292?auto=format&fit=crop&w=800&q=80"
    ],
    rating: 4.9,
    reviewCount: 388,
    description: "Declutter workstations and organize procurement invoices, project folders, and incoming mail. Features 4 pull-out sliding trays made of industrial-gauge woven wire steel mesh with scratch-resistant powder coat and anti-slip rubber pads.",
    specifications: {
      "Configuration": "4 Sliding Pull-Out Trays + Vertical Upright Folder Slot",
      "Dimensions": "35 cm (W) x 29 cm (D) x 32 cm (H)",
      "Material": "Reinforced High-Tensile Steel Wire Mesh with Tubular Steel Frame",
      "Finish": "Anti-Rust Electrostatic Matte Black Powder Coating",
      "Tray Spacing": "6.5 cm Vertical Clearance per Tray (Fits A4 files, binders, reams)",
      "Stability": "4 Heavy-Duty Rubber Feet (Prevents Desk Scratching & Sliding)",
      "Assembly": "Tool-Free Fast Assembly with Locking Screws Included",
      "Warranty": "5-Year Structural Frame Warranty"
    },
    stock: 88,
    featured: true,
    sku: "OK-ST-ORG-020",
    hsnCode: "83040000",
    brand: "MeshMaster"
  }
];

// Sample Corporate Reviews for Detailed Pages
export const SAMPLE_REVIEWS = [
  {
    id: "rev-1",
    author: "Vikram Singhania",
    designation: "Head of IT Infrastructure",
    company: "Zeta Global Tech, Bengaluru",
    rating: 5,
    date: "March 18, 2026",
    comment: "Procured 25 units for our dev sprint pods. Seamless fleet enrollment, crisp build quality, and GST tax credit invoice received within minutes of dispatch. Highly recommended for corporate IT teams.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Ananya Deshmukh",
    designation: "Procurement & Admin Lead",
    company: "Apex Legal Partners, Mumbai",
    rating: 5,
    date: "April 02, 2026",
    comment: "Top-notch quality and bulk pricing was significantly lower than local office supply vendors. Timely pallet delivery straight to our office reception floor.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Rohan Kulkarni",
    designation: "Operations Director",
    company: "Innovate FinServe, Pune",
    rating: 4,
    date: "May 10, 2026",
    comment: "Solid business product with precise specifications. Tested rigorously across 3 branch offices. Good warranty response and standard HSN codes on all invoices.",
    verified: true
  }
];

// Bulk Procurement Discount Tiers
export const BULK_DISCOUNT_TIERS = [
  { minQty: 1, maxQty: 4, discountPercent: 0, label: "Standard Corporate Price" },
  { minQty: 5, maxQty: 9, discountPercent: 5, label: "5% Bulk Tier (5 - 9 units)" },
  { minQty: 10, maxQty: 19, discountPercent: 8, label: "8% Departmental Tier (10 - 19 units)" },
  { minQty: 20, maxQty: 9999, discountPercent: 12, label: "12% Enterprise Fleet Tier (20+ units)" }
];
