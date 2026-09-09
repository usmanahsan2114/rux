/**
 * RUX CLEANING & SHINE - E-COMMERCE CORE ENGINE
 * Trademark TM # 768691 | WhatsApp: +92 300 6458707
 */

const RUX_CONFIG = {
  storeName: "RUX Cleaning & Shine",
  trademark: "TM # 768691",
  phone: "03006458707",
  whatsapp: "923006458707",
  email: "rux.chemicals@gmail.com",
  freeShippingThreshold: 0,
  standardShippingFee: 0,
  currency: ""
};

// Master Product Database: 4 Launched Products & 3 Coming Soon Lineup
const RUX_PRODUCTS = [
  {
    id: "rux-multi-surface",
    name: "RUX Multi Surface Cleaner",
    category: "Surface Care",
    status: "active",
    isLaunched: true,
    badge: "Launched & In Stock",
    tagline: "Clean & Shine for a Healthier Happier Home",
    shortDesc: "Advanced antibacterial formula that eliminates 99.9% of germs while restoring sparkling mirror-shine to marble, tile, wood, granite, and kitchen surfaces without sticky residue.",
    images: [
      "assets/images/products/rux-multi-surface-studio.webp",
      "assets/images/products/rux-home-bundle-studio.webp"
    ],
    rating: 4.9,
    reviewCount: 184,
    variants: [
      {
        volume: "1000ml",
        label: "1000ml Value Pack",
        price: 250,
        originalPrice: 290,
        cartonSize: "12 X 1000ml",
        cartonPrice: 2220, // 12 X 185
        cartonRetailTotal: 3000,
        manufacturingPrice: 185
      }
    ],
    features: [
      "Kills 99.9% harmful bacteria & viruses",
      "Infused with long-lasting fresh floral fragrance",
      "Safe on multiple surfaces: marble, ceramic, glass & wood",
      "1000ml high-value economy pack"
    ],
    usage: "Dilute 2 capfuls (approx. 50ml) in half a bucket of clean water (4 liters) for daily floor mopping. For stubborn stains and kitchen grease, apply undiluted onto a damp cloth, wipe surface, and rinse clean.",
    safety: "Keep out of reach of children. Avoid contact with eyes. In case of contact, rinse thoroughly with clean water."
  },
  {
    id: "rux-toilet-cleaner",
    name: "RUX Toilet Bowl Cleaner",
    category: "Bathroom Care",
    status: "active",
    isLaunched: true,
    badge: "Launched & In Stock",
    tagline: "Powerful Cleaning for a Sparkling Toilet!",
    shortDesc: "Thick clinging power formula that dissolves stubborn yellow stains, heavy limescale, and rust rings. Angled nozzle design reaches deep under the rim for 360-degree germ elimination.",
    images: [
      "assets/images/products/rux-toilet-cleaner-studio.webp",
      "assets/images/products/rux-home-bundle-studio.webp"
    ],
    rating: 4.95,
    reviewCount: 228,
    variants: [
      {
        volume: "500ml",
        label: "500ml Power Pack",
        price: 200,
        originalPrice: 240,
        cartonSize: "24 X 500ml",
        cartonPrice: 3600, // 24 X 150
        cartonRetailTotal: 4800,
        manufacturingPrice: 150
      },
      {
        volume: "250ml",
        label: "250ml Compact Pack",
        price: 130,
        originalPrice: 150,
        cartonSize: "36 X 250ml",
        cartonPrice: 3240, // 36 X 90
        cartonRetailTotal: 4680,
        manufacturingPrice: 90
      }
    ],
    features: [
      "Removes tough stubborn yellow water stains and scale",
      "Kills 99.9% germs & eliminates foul bathroom odors",
      "Special directional nozzle for under-the-rim reach",
      "Thick clinging gel formula clings to vertical ceramic"
    ],
    usage: "Press pads on cap sides and twist anti-clockwise. Squeeze liquid evenly under the toilet bowl rim. Allow the thick liquid to coat and work for 15-20 minutes. Brush lightly and flush for sparkling results.",
    safety: "Use only for toilet bowls. Do not mix with bleach or other cleaning chemicals. Wear rubber gloves during application."
  },
  {
    id: "rux-dishwash",
    name: "RUX Dishwash Liquid",
    category: "Kitchen Care",
    status: "active",
    isLaunched: true,
    badge: "Launched & In Stock",
    tagline: "Unbeatable Clean, Every Wash - Cuts Tough Grease",
    shortDesc: "Super concentrated lemon-fresh degreasing liquid that cuts burnt-on oil and food crust in seconds. Gentle on hands while leaving glassware and cutlery sparkling clean with zero white streaks.",
    images: [
      "assets/images/products/rux-dishwash-studio.webp",
      "assets/images/products/rux-home-bundle-studio.webp"
    ],
    rating: 4.88,
    reviewCount: 165,
    variants: [
      {
        volume: "500ml",
        label: "500ml Family Squeeze",
        price: 200,
        originalPrice: 230,
        cartonSize: "24 X 500ml",
        cartonPrice: 3720, // 24 X 155
        cartonRetailTotal: 4800,
        manufacturingPrice: 155
      },
      {
        volume: "300ml",
        label: "300ml Standard Pack",
        price: 140,
        originalPrice: 160,
        cartonSize: "36 X 300ml",
        cartonPrice: 3600, // 36 X 100
        cartonRetailTotal: 5040,
        manufacturingPrice: 100
      }
    ],
    features: [
      "Real lemon citrus grease-dissolving enzymes",
      "Rich thick lather with just a few concentrated drops",
      "Dermatologically tested gentle formula for skin",
      "Leaves zero chemical aroma on utensils"
    ],
    usage: "Mix 1 teaspoon (5ml) of RUX Dishwash in a small bowl of water (approx. 40ml). Dip sponge/scrubber, squeeze to generate rich foam, and scrub dishes. Rinse clean with water.",
    safety: "For dishwashing only. Store in a cool, dry place away from direct sunlight."
  },
  {
    id: "rux-blue",
    name: "RUX Blue Fabric Whitener",
    category: "Laundry Care",
    status: "active",
    isLaunched: true,
    badge: "Launched & In Stock",
    tagline: "Dazzling Brightness & Radiance for White Fabrics",
    shortDesc: "The ultimate liquid whitener (Neela) formulated with optical brightening micro-pigments. Restores bright white brilliance to school uniforms, shirts, shalwar kameez, and cotton linens.",
    images: [
      "assets/images/products/rux-blue-studio.webp",
      "assets/images/products/rux-home-bundle-studio.webp"
    ],
    rating: 4.92,
    reviewCount: 142,
    variants: [
      {
        volume: "150ml",
        label: "150ml Precision Dropper",
        price: 70,
        originalPrice: 85,
        cartonSize: "72 X 150 ml",
        cartonPrice: 3240, // 72 X 45
        cartonRetailTotal: 5040,
        manufacturingPrice: 45
      }
    ],
    features: [
      "Even blue dispersal without patchy blue spots",
      "Protects fabrics from progressive yellowing",
      "Extremely economical: only 4-5 drops per wash bucket",
      "Ideal for cottons, blends, uniforms, and towels"
    ],
    usage: "Add 4 to 5 drops of RUX Blue in half a bucket (5 liters) of water. Stir thoroughly until water is uniform light blue. Dip washed white clothes one by one and dry immediately in shaded sun.",
    safety: "Do not pour directly onto dry fabrics. Dilute in water before submerging clothes."
  },
  {
    id: "rux-bleach",
    name: "RUX Disinfectant Bleach",
    category: "Disinfectants",
    status: "coming-soon",
    isLaunched: false,
    badge: "COMING SOON",
    tagline: "Sticker Design Finalized • Product Formulation in Progress",
    shortDesc: "Final packaging sticker approved. Advanced hospital-grade multi-surface disinfectant and germicidal bleach. Formula undergoing final laboratory certification.",
    images: [
      "assets/images/products/rux-bleach-studio.webp"
    ],
    rating: 0,
    reviewCount: 0,
    variants: [
      {
        volume: "500ml",
        label: "500ml Safety Cap Bottle (Coming Soon)",
        price: 180,
        originalPrice: 210,
        cartonSize: "24 X 500ml",
        cartonPrice: 3900,
        cartonRetailTotal: 4320,
        manufacturingPrice: 125
      }
    ],
    features: [
      "Official approved sticker packaging design",
      "Hospital-grade sanitization kills 99.99% germs and bacteria",
      "Eliminates tough mildew, algae, and grime",
      "Child-resistant security safety cap"
    ],
    usage: "Coming soon to retailers and direct wholesale.",
    safety: "Corrosive. Always wear gloves."
  },
  {
    id: "rux-solar-cleaner",
    name: "RUX Solar Panel Cleaner",
    category: "Solar Care",
    status: "coming-soon",
    isLaunched: false,
    badge: "COMING SOON",
    tagline: "Photovoltaic Efficiency Optimization (In Lab Formulation)",
    shortDesc: "Specialized anti-static solar panel cleaning solution currently in final formulation. Engineered to boost solar power output without degrading anti-reflective coatings.",
    images: [
      "assets/images/products/rux-solar-cleaner.webp"
    ],
    rating: 0,
    reviewCount: 0,
    variants: [
      {
        volume: "750ml",
        label: "750ml Trigger Spray (Coming Soon)",
        price: 450,
        originalPrice: 550,
        cartonSize: "12 X 750ml",
        cartonPrice: 4800,
        cartonRetailTotal: 5400,
        manufacturingPrice: 320
      }
    ],
    features: [
      "Boosts solar PV panel generation efficiency",
      "Anti-static shield repels airborne dust",
      "Non-corrosive to aluminum frames",
      "Streak-free finish with instant shine"
    ],
    usage: "Formulation completing soon.",
    safety: "Store in cool place."
  },
  {
    id: "rux-washing-liquid",
    name: "RUX Washing Liquid",
    category: "Laundry Care",
    status: "coming-soon",
    isLaunched: false,
    badge: "COMING SOON",
    tagline: "Deep Fiber Stain Removal Formulation (In Lab Formulation)",
    shortDesc: "High-potency laundry liquid detergent with active stain lift enzymes. Final laboratory trials in progress for superior fabric care.",
    images: [
      "assets/images/products/rux-washing-liquid.webp"
    ],
    rating: 0,
    reviewCount: 0,
    variants: [
      {
        volume: "2L",
        label: "2L Value Jug (Coming Soon)",
        price: 350,
        originalPrice: 420,
        cartonSize: "6 X 2L",
        cartonPrice: 3700,
        cartonRetailTotal: 4200,
        manufacturingPrice: 240
      }
    ],
    features: [
      "Deep fiber stain-lift enzyme technology",
      "Color-lock protection against fabric fading",
      "Concentrated formula for 50+ wash loads",
      "Gentle on delicate fabrics & skin"
    ],
    usage: "Formulation completing soon.",
    safety: "Keep out of reach of children."
  },
  {
    id: "rux-home-bundle",
    name: "RUX 4-Product Complete Launch Kit",
    category: "Bundles",
    status: "active",
    isLaunched: true,
    badge: "Complete 4-Pack",
    tagline: "All 4 Official Launched Products in One Mega-Value Box",
    shortDesc: "Get the complete official RUX launch lineup: 1x Multi Surface Cleaner (1000ml), 1x Toilet Bowl Cleaner (500ml), 1x Lemon Dishwash (500ml), and 1x Blue Fabric Whitener (150ml) PLUS FREE microfiber cloth!",
    images: [
      "assets/images/products/rux-home-bundle-studio.webp",
      "assets/images/products/rux-multi-surface-studio.webp",
      "assets/images/products/rux-toilet-cleaner-studio.webp",
      "assets/images/products/rux-dishwash-studio.webp",
      "assets/images/products/rux-blue-studio.webp",
      "assets/images/rux-hero-banner.webp"
    ],
    rating: 5.0,
    reviewCount: 310,
    variants: [
      {
        volume: "4-Pack Launch Bundle",
        label: "All 4 Launched Products",
        price: 650,
        originalPrice: 790,
        cartonSize: "Combo Pack Box",
        cartonPrice: 3600,
        cartonRetailTotal: 4500,
        manufacturingPrice: 480
      }
    ],
    features: [
      "Contains all 4 officially launched RUX products",
      "Includes 1000ml Multi Surface + 500ml Toilet + 500ml Dishwash + 150ml Blue",
      "Includes free microfiber cleaning cloth",
      "Direct factory price discount"
    ],
    usage: "Refer to individual bottles inside the kit for specialized usage instructions.",
    safety: "Store each chemical bottle securely upright in a safe cabinet."
  }
];

// ==========================================================================
// CART & LOCAL STORAGE LOGIC
// ==========================================================================
class RuxStore {
  constructor() {
    this.cart = this.loadCart();
    this.appliedCoupon = null;
    this.init();
  }

  loadCart() {
    try {
      const data = localStorage.getItem("rux_cart_v1");
      const items = data ? JSON.parse(data) : [];
      items.forEach(item => {
        const p = RUX_PRODUCTS.find(prod => prod.id === item.productId);
        if (p && p.images && p.images[0]) {
          item.image = p.images[0];
        }
      });
      return items;
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem("rux_cart_v1", JSON.stringify(this.cart));
      this.updateCartUI();
    } catch (e) {
      console.error("Could not save cart", e);
    }
  }

  addToCart(productId, variantIndex = 0, quantity = 1, isCarton = false) {
    const product = RUX_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const variant = product.variants[variantIndex] || product.variants[0];
    const unitPrice = isCarton ? variant.cartonPrice : variant.price;
    const itemTitle = isCarton ? `${product.name} (Wholesale Carton: ${variant.cartonSize})` : `${product.name} (${variant.volume})`;

    const existingIndex = this.cart.findIndex(
      item => item.productId === productId && item.variantIndex === variantIndex && item.isCarton === isCarton
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += quantity;
    } else {
      this.cart.push({
        productId,
        productName: product.name,
        category: product.category,
        image: product.images[0],
        variantIndex,
        variantLabel: isCarton ? `Carton: ${variant.cartonSize}` : variant.volume,
        unitPrice,
        quantity,
        isCarton
      });
    }

    this.saveCart();
    if (typeof window !== "undefined" && window.ruxPlayChime) {
      window.ruxPlayChime();
    }
    this.showToast(`Added ${itemTitle} to cart!`);
    this.openCartDrawer();
  }

  updateQuantity(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
    }
  }

  removeFromCart(index) {
    if (this.cart[index]) {
      const name = this.cart[index].productName;
      this.cart.splice(index, 1);
      this.saveCart();
      this.showToast(`Removed ${name} from cart`);
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getTotals() {
    const subtotal = this.cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    let discount = 0;
    
    if (this.appliedCoupon) {
      if (this.appliedCoupon.type === "percent") {
        discount = Math.round((subtotal * this.appliedCoupon.value) / 100);
      } else if (this.appliedCoupon.type === "fixed") {
        discount = Math.min(subtotal, this.appliedCoupon.value);
      }
    }

    const discountedSubtotal = Math.max(0, subtotal - discount);
    const shipping = subtotal === 0 ? 0 : (discountedSubtotal >= RUX_CONFIG.freeShippingThreshold ? 0 : RUX_CONFIG.standardShippingFee);
    const total = discountedSubtotal + shipping;

    return {
      subtotal,
      discount,
      shipping,
      total,
      itemCount: this.cart.reduce((sum, item) => sum + item.quantity, 0)
    };
  }

  applyCoupon(code) {
    const cleanCode = (code || "").trim().toUpperCase();
    if (cleanCode === "RUXWELCOME10") {
      this.appliedCoupon = { code: "RUXWELCOME10", type: "percent", value: 10 };
      this.updateCartUI();
      this.showToast("Coupon Applied: 10% Discount on order!");
      return { success: true, message: "10% Discount Applied!" };
    } else if (cleanCode === "FREESHIP") {
      this.appliedCoupon = { code: "FREESHIP", type: "free_shipping", value: 0 };
      this.updateCartUI();
      this.showToast("Coupon Applied: Free Shipping Unlocked!");
      return { success: true, message: "Free Shipping Applied!" };
    } else if (cleanCode === "BULK20") {
      this.appliedCoupon = { code: "BULK20", type: "percent", value: 20 };
      this.updateCartUI();
      this.showToast("Coupon Applied: 20% Special Wholesaler Discount!");
      return { success: true, message: "20% Wholesaler Discount Applied!" };
    } else {
      return { success: false, message: "Invalid promo code. Try RUXWELCOME10" };
    }
  }

  // ========================================================================
  // DOM UPDATES & UI RENDERING
  // ========================================================================
  init() {
    document.addEventListener("DOMContentLoaded", () => {
      this.bindEvents();
      this.updateCartUI();
      this.renderCommonComponents();
    });
  }

  bindEvents() {
    // Header cart toggle buttons
    const cartTriggers = document.querySelectorAll(".open-cart-drawer");
    cartTriggers.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        this.openCartDrawer();
      });
    });

    // Close cart drawer
    const closeDrawerBtn = document.getElementById("closeCartDrawer");
    const cartOverlay = document.getElementById("cartDrawerOverlay");
    if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", () => this.closeCartDrawer());
    if (cartOverlay) {
      cartOverlay.addEventListener("click", (e) => {
        if (e.target === cartOverlay) this.closeCartDrawer();
      });
    }

    // Quick view modal overlay close
    const modalOverlay = document.getElementById("quickViewModal");
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) this.closeQuickView();
      });
      const modalCloseBtn = document.getElementById("closeQuickView");
      if (modalCloseBtn) modalCloseBtn.addEventListener("click", () => this.closeQuickView());
    }

    // Mobile nav toggle
    const mobileToggle = document.getElementById("mobileMenuToggle");
    const mobileNav = document.getElementById("mobileNav");
    if (mobileToggle && mobileNav) {
      mobileToggle.addEventListener("click", () => {
        mobileNav.classList.toggle("active");
      });
    }

    // Live search inputs
    const searchInputs = document.querySelectorAll(".header-search-input");
    searchInputs.forEach(input => {
      input.addEventListener("input", (e) => {
        this.handleLiveSearch(e.target.value);
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.target.value.trim()) {
          window.location.href = `shop.html?search=${encodeURIComponent(e.target.value.trim())}`;
        }
      });
    });
  }

  updateCartUI() {
    const totals = this.getTotals();

    // Update all quote list counters
    const counters = document.querySelectorAll(".cart-counter");
    counters.forEach(el => {
      el.textContent = totals.itemCount;
      el.style.display = totals.itemCount > 0 ? "flex" : "none";
    });

    // Update Drawer Contents
    const drawerContainer = document.getElementById("cartDrawerItems");
    const drawerSubtotal = document.getElementById("cartDrawerSubtotal");
    const shippingBar = document.getElementById("freeShippingBar");
    const shippingText = document.getElementById("freeShippingText");

    if (drawerContainer) {
      if (this.cart.length === 0) {
        drawerContainer.innerHTML = `
          <div class="cart-empty-state">
            <div class="cart-empty-icon" style="font-size: 2.5rem;">📋</div>
            <h4 style="margin-top: 10px;">Your Quote Request List is Empty</h4>
            <p style="color: #64748b; font-size: 0.9rem;">Browse our cleaning products and add items to request custom retail or wholesale quotes.</p>
            <a href="shop.html" class="btn btn-primary btn-sm" style="margin-top: 14px;">Browse Catalog</a>
          </div>
        `;
      } else {
        drawerContainer.innerHTML = this.cart.map((item, idx) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.productName}" class="cart-item-img" style="object-fit: contain; padding: 4px; background: #f8fafc;">
            <div class="cart-item-details">
              <div class="cart-item-title">${item.productName}</div>
              <div class="cart-item-variant">${item.variantLabel}</div>
              <div class="cart-item-bottom">
                <div class="cart-qty-ctrl">
                  <button class="qty-btn" onclick="ruxStore.updateQuantity(${idx}, -1)">-</button>
                  <span class="qty-val">${item.quantity}</span>
                  <button class="qty-btn" onclick="ruxStore.updateQuantity(${idx}, 1)">+</button>
                </div>
                <div class="cart-item-price" style="color: var(--rux-blue); font-weight: 700; font-size: 0.85rem;">Quote on Request</div>
                <button class="cart-item-remove" onclick="ruxStore.removeFromCart(${idx})" title="Remove">✕</button>
              </div>
            </div>
          </div>
        `).join("");
      }
    }

    if (drawerSubtotal) {
      drawerSubtotal.textContent = "Contact for Quote";
    }

    // Update Shipping Bar
    if (shippingBar && shippingText) {
      shippingBar.style.width = "100%";
      shippingText.innerHTML = `<span>✨ <strong>Direct Factory Supply Across Pakistan</strong></span> <span>TM # 768691</span>`;
    }
  }

  submitWhatsAppQuoteRequest() {
    if (this.cart.length === 0) {
      this.showToast("Your quote list is empty! Please add products first.");
      return;
    }
    let msg = `*PRICE QUOTATION REQUEST - RUX CLEANING & SHINE*\n`;
    msg += `Official Trademark: ${RUX_CONFIG.trademark}\n\n`;
    msg += `*Requested Products:*\n`;
    this.cart.forEach((item, i) => {
      msg += `${i + 1}. ${item.productName} [${item.variantLabel}] - Qty: ${item.quantity}\n`;
    });
    msg += `\nHello, please provide current wholesale & retail price quotes and delivery terms for the items listed above.`;
    window.open(`https://wa.me/923006458707?text=${encodeURIComponent(msg)}`, "_blank");
  }

  openCartDrawer() {
    const overlay = document.getElementById("cartDrawerOverlay");
    if (overlay) {
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  closeCartDrawer() {
    const overlay = document.getElementById("cartDrawerOverlay");
    if (overlay) {
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  openQuickView(productId) {
    const product = RUX_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("quickViewModal");
    const container = document.getElementById("quickViewContent");
    if (!modal || !container) return;

    const defaultVariant = product.variants[0];

    container.innerHTML = `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; padding: 30px;">
        <div>
          <div style="border-radius: 16px; overflow: hidden; background: #f8fafc; border: 1px solid #e2e8f0; aspect-ratio: 4/4.8;">
            <img id="qvMainImg" src="${product.images[0]}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="display: flex; gap: 8px; margin-top: 12px;">
            ${product.images.map((img, i) => `
              <div onclick="document.getElementById('qvMainImg').src='${img}'" style="width: 60px; height: 60px; border-radius: 8px; overflow: hidden; cursor: pointer; border: 1px solid #cbd5e1;">
                <img src="${img}" style="width: 100%; height: 100%; object-fit: cover;">
              </div>
            `).join("")}
          </div>
        </div>
        <div>
          <span class="badge badge-primary" style="margin-bottom: 8px;">${product.category}</span>
          <h2 style="font-size: 1.6rem; margin-bottom: 8px;">${product.name}</h2>
          <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px; font-size: 0.85rem; color: #64748b;">
            ${product.isLaunched 
              ? `<span class="stars">★★★★★</span> <strong>${product.rating}</strong> (${product.reviewCount} customer reviews)` 
              : `<span style="color: #64748b; font-weight: 600;">🔒 In Laboratory Formulation • Reviews open upon launch</span>`}
          </div>
          <p style="font-style: italic; color: #0056b3; font-weight: 600; font-size: 0.95rem; margin-bottom: 12px;">"${product.tagline}"</p>
          <div style="font-size: 1.6rem; font-weight: 800; color: #0056b3; font-family: var(--font-heading); margin-bottom: 4px;" id="qvPriceDisplay">
            Contact for Quote
          </div>
          <div style="font-size: 0.85rem; color: #64748b; margin-bottom: 16px;">
            Factory direct supply • Wholesale & retail quotes available
          </div>
          <p style="font-size: 0.92rem; color: #475569; line-height: 1.6; margin-bottom: 20px;">${product.shortDesc}</p>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: 700; font-size: 0.85rem; margin-bottom: 8px;">Available Pack Sizes:</label>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              ${product.variants.map((v, i) => `
                <button type="button" class="size-pill ${i === 0 ? 'active' : ''}" onclick="ruxStore.selectQuickViewVariant('${product.id}', ${i}, this)">
                  ${v.volume}
                </button>
              `).join("")}
            </div>
          </div>

          <div style="background: #f0fdf4; border: 1.5px dashed #10b981; padding: 14px; border-radius: 10px; margin-bottom: 20px; font-size: 0.85rem;">
            <strong style="color: #065f46;">📦 Wholesale Carton Option:</strong><br>
            Standard Packing: <strong>${defaultVariant.cartonSize}</strong><br>
            <span style="color: #059669;">Special carton dealership rates and bulk dispatch available upon request.</span>
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <a href="https://wa.me/923006458707?text=Hello%20RUX%20Team%2C%20I%20would%20like%20to%20request%20a%20price%20quote%20for%20${encodeURIComponent(product.name)}" target="_blank" class="btn btn-whatsapp" style="flex-grow: 1; text-decoration: none; display: inline-flex; align-items: center; justify-content: center; gap: 8px;">
              💬 Request Quote on WhatsApp
            </a>
            <button class="btn btn-secondary" onclick="ruxStore.addToCart('${product.id}', 0, 1, false); ruxStore.closeQuickView();" title="Add to Quote List">
              + Quote List
            </button>
            <a href="product.html?id=${product.id}" class="btn btn-secondary" style="white-space: nowrap;">
              View Details →
            </a>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  selectQuickViewVariant(productId, variantIndex, element) {
    const product = RUX_PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    const variant = product.variants[variantIndex];
    if (!variant) return;

    element.parentElement.querySelectorAll(".size-pill").forEach(el => el.classList.remove("active"));
    element.classList.add("active");

    const priceDisplay = document.getElementById("qvPriceDisplay");
    if (priceDisplay) {
      priceDisplay.innerHTML = "Contact for Quote";
    }
  }

  closeQuickView() {
    const modal = document.getElementById("quickViewModal");
    if (modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  showToast(message) {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>✨</span><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  buildWhatsAppCartMessage(customerInfo = {}) {
    let msg = `*PRICE QUOTATION REQUEST - RUX CLEANING & SHINE*\n`;
    msg += `Official Trademark: ${RUX_CONFIG.trademark}\n\n`;
    msg += `*Requested Products:*\n`;

    this.cart.forEach((item, i) => {
      msg += `${i + 1}. ${item.productName} [${item.variantLabel}] - Qty: ${item.quantity}\n`;
    });

    if (customerInfo.name) {
      msg += `\n*Customer Details:*\n`;
      msg += `Name: ${customerInfo.name}\n`;
      msg += `Phone: ${customerInfo.phone}\n`;
      msg += `City: ${customerInfo.city}\n`;
      msg += `Address: ${customerInfo.address || "N/A"}\n`;
      msg += `Type: ${customerInfo.businessType || "Retail / Dealership Inquiry"}\n`;
    }

    msg += `\nHello, please provide pricing, carton rates, and delivery details for the items above.`;
    return encodeURIComponent(msg);
  }

  renderProductCardHTML(product) {
    const defaultVariant = product.variants[0];
    const isComingSoon = product.status === "coming-soon" || !product.isLaunched;

    return `
      <div class="product-card ${isComingSoon ? 'coming-soon-card' : ''}" data-category="${product.category}">
        <div class="product-card-top">
          <img src="${product.images[0]}" alt="${product.name}" class="product-img" loading="lazy" style="object-fit: contain; padding: 12px; background: #f8fafc;">
          <div class="product-badges">
            ${isComingSoon 
              ? `<span class="badge" style="background: #e11d48; color: #fff; font-weight: 800; letter-spacing: 0.5px;">COMING SOON</span>` 
              : `<span class="badge badge-primary">${product.badge}</span>`}
          </div>
          <div class="quick-actions">
            <button class="quick-btn" onclick="ruxStore.openQuickView('${product.id}')">
              <span>👁️ Quick View</span>
            </button>
          </div>
        </div>
        <div class="product-card-body">
          <span class="product-cat">${product.category}</span>
          <h3 class="product-name">
            <a href="product.html?id=${product.id}">${product.name}</a>
          </h3>
          <div class="product-rating">
            ${isComingSoon 
              ? `<span style="font-size: 0.78rem; color: #64748b; font-weight: 600;">🔒 Formulation in progress</span>` 
              : `<span class="stars">★★★★★</span> <span>(${product.reviewCount})</span>`}
          </div>
          <div class="product-size-pills">
            ${product.variants.map((v, i) => `
              <span class="size-pill ${i === 0 ? 'active' : ''}">${v.volume}</span>
            `).join("")}
          </div>
          <div class="product-card-footer">
            <div class="price-wrap">
              ${isComingSoon 
                ? `<span class="current-price" style="color: #0284c7; font-size: 0.92rem; font-weight: 700;">Coming Soon</span>` 
                : `<span class="current-price" style="color: var(--rux-blue); font-size: 0.95rem; font-weight: 800;">Contact for Quote</span>`}
            </div>
            ${isComingSoon
              ? `<a href="https://wa.me/923006458707?text=Hello%20RUX%20Team%2C%20I%20am%20interested%20in%20pre-ordering%20${encodeURIComponent(product.name)}%20when%20launched" target="_blank" class="btn btn-sm" style="background: #0284c7; color: #fff; font-size: 0.72rem; padding: 6px 10px; border-radius: 6px; font-weight: 700; text-decoration: none;" title="Notify Me on WhatsApp">Notify Me</a>`
              : `<div style="display: flex; gap: 6px; align-items: center;">
                  <a href="https://wa.me/923006458707?text=Hello%20RUX%20Team%2C%20I%20would%20like%20to%20request%20a%20price%20quote%20for%20${encodeURIComponent(product.name)}" target="_blank" class="btn-quote-wa" style="background: #25d366; color: #fff; font-size: 0.75rem; padding: 6px 10px; border-radius: 6px; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;" title="Request Quote on WhatsApp"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg> Quote</a>
                  <button class="cart-add-btn" onclick="ruxStore.addToCart('${product.id}', 0, 1, false)" title="Add to Quote List">+</button>
                </div>`}
          </div>
        </div>
      </div>
    `;
  }

  renderCommonComponents() {
    // Dynamic year
    const yearEls = document.querySelectorAll(".current-year");
    yearEls.forEach(el => el.textContent = new Date().getFullYear());
  }

  handleLiveSearch(query) {
    const q = (query || "").trim().toLowerCase();
    const resultsBox = document.getElementById("headerSearchResults");
    if (!resultsBox) return;

    if (q.length < 2) {
      resultsBox.style.display = "none";
      return;
    }

    const matched = RUX_PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q)
    );

    if (matched.length === 0) {
      resultsBox.innerHTML = `<div style="padding: 12px; font-size: 0.85rem; color: #64748b;">No products found for "${query}"</div>`;
    } else {
      resultsBox.innerHTML = matched.map(p => `
        <a href="product.html?id=${p.id}" style="display: flex; align-items: center; gap: 10px; padding: 10px; border-bottom: 1px solid #f1f5f9; transition: background 0.2s;">
          <img src="${p.images[0]}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: contain; background: #f8fafc; padding: 2px;">
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: #0f172a;">${p.name}</div>
            <div style="font-size: 0.78rem; color: #0056b3; font-weight: 700;">Contact for Quote</div>
          </div>
        </a>
      `).join("");
    }
    resultsBox.style.display = "block";
  }
}

// Global Store Instance
const ruxStore = new RuxStore();
window.ruxStore = ruxStore;
