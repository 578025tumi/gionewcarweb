document.addEventListener('DOMContentLoaded', () => {
  // ─── Vehicle Data ───
  const vehicles = [
    {
      id: 1,
      name: 'Rolls-Royce Ghost',
      year: 2023,
      type: 'sedan',
      brand: 'Rolls-Royce',
      originalPrice: 382000,
      price: 219000,
      mileage: 3200,
      engine: '6.75L V12 Twin-Turbo',
      horsepower: 563,
      acceleration: '4.6s 0-60',
      transmission: '8-Speed Automatic',
      color: 'Arctic White',
      interior: 'Cobalt Blue / Navy',
      image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&h=500&fit=crop',
      badge: 'Like New'
    },
    {
      id: 2,
      name: 'Bentley Continental GT',
      year: 2022,
      type: 'convertible',
      brand: 'Bentley',
      originalPrice: 274000,
      price: 164000,
      mileage: 8100,
      engine: '6.0L W12 Twin-Turbo',
      horsepower: 626,
      acceleration: '3.7s 0-60',
      transmission: '8-Speed Dual-Clutch',
      color: 'Beluga Black',
      interior: 'Linen / Beluga',
      image: 'https://unsplash.com/photos/blue-coupe-on-road-cAbH8B-14Vo',
      badge: 'Low Miles'
    },
    {
      id: 3,
      name: 'Lamborghini Urus',
      year: 2023,
      type: 'suv',
      brand: 'Lamborghini',
      originalPrice: 235000,
      price: 175000,
      mileage: 5400,
      engine: '4.0L V8 Twin-Turbo',
      horsepower: 641,
      acceleration: '3.6s 0-60',
      transmission: '8-Speed Automatic',
      color: 'Giallo Auge (Yellow)',
      interior: 'Nero Ade / Giallo',
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=500&fit=crop',
      badge: 'Certified'
    },
    {
      id: 4,
      name: 'Ferrari 488 GTB',
      year: 2021,
      type: 'sports',
      brand: 'Ferrari',
      originalPrice: 284000,
      price: 198000,
      mileage: 12000,
      engine: '3.9L V8 Twin-Turbo',
      horsepower: 661,
      acceleration: '3.0s 0-60',
      transmission: '7-Speed Dual-Clutch',
      color: 'Rosso Corsa',
      interior: 'Nero / Rosso',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=500&fit=crop',
      badge: 'Collector'
    },
    {
      id: 5,
      name: 'Mercedes-Maybach S680',
      year: 2023,
      type: 'sedan',
      brand: 'Mercedes-Benz',
      originalPrice: 230000,
      price: 159000,
      mileage: 4800,
      engine: '6.0L V12 Biturbo',
      horsepower: 621,
      acceleration: '4.4s 0-60',
      transmission: '9-Speed Automatic',
      color: 'Obsidian Black',
      interior: 'Exclusive Nappa Leather',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=500&fit=crop',
      badge: 'Premium'
    },
    {
      id: 6,
      name: 'Porsche 911 Turbo S',
      year: 2022,
      type: 'sports',
      brand: 'Porsche',
      originalPrice: 217000,
      price: 168000,
      mileage: 9500,
      engine: '3.8L Flat-6 Twin-Turbo',
      horsepower: 640,
      acceleration: '2.6s 0-60',
      transmission: '8-Speed PDK',
      color: 'Gentian Blue',
      interior: 'Black / Chalk',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=500&fit=crop',
      badge: 'Performance'
    },
    {
      id: 7,
      name: 'Range Rover Autobiography',
      year: 2023,
      type: 'suv',
      brand: 'Land Rover',
      originalPrice: 195000,
      price: 139000,
      mileage: 6200,
      engine: '5.0L V8 Supercharged',
      horsepower: 523,
      acceleration: '5.1s 0-60',
      transmission: '8-Speed Automatic',
      color: 'Constellation Grey',
      interior: 'Perlino / Ebony',
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&h=500&fit=crop',
      badge: 'Luxury'
    },
    {
      id: 8,
      name: 'Maserati MC20',
      year: 2023,
      type: 'sports',
      brand: 'Maserati',
      originalPrice: 215000,
      price: 172000,
      mileage: 2800,
      engine: '3.0L V6 Twin-Turbo Nettuno',
      horsepower: 621,
      acceleration: '2.9s 0-60',
      transmission: '8-Speed Dual-Clutch',
      color: 'Bianco Audace',
      interior: 'Nero / Grigio',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop',
      badge: 'Rare'
    },
    {
      id: 9,
      name: 'Aston Martin DB11',
      year: 2022,
      type: 'convertible',
      brand: 'Aston Martin',
      originalPrice: 220000,
      price: 155000,
      mileage: 7600,
      engine: '4.0L V8 Twin-Turbo',
      horsepower: 503,
      acceleration: '4.0s 0-60',
      transmission: '8-Speed Automatic',
      color: 'Magnetic Silver',
      interior: 'Obsidian / Cream',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&h=500&fit=crop',
      badge: 'Elegant'
    }
  ];

  // ─── Render Brand Logos ───
  const brands = ['Rolls-Royce', 'Bentley', 'Lamborghini', 'Ferrari', 'Mercedes-Benz', 'Porsche', 'Land Rover', 'Maserati', 'Aston Martin'];
  const brandContainer = document.getElementById('brandLogos');
  brands.forEach(brand => {
    const el = document.createElement('span');
    el.className = 'text-lg font-display font-bold text-slate-500 hover:text-gold-400 transition cursor-default select-none';
    el.textContent = brand;
    brandContainer.appendChild(el);
  });

  // ─── Format Price ───
  function formatPrice(n) {
    return '$' + n.toLocaleString('en-US');
  }

  // ─── Render Vehicle Cards ───
  const grid = document.getElementById('vehicleGrid');
  const noResults = document.getElementById('noResults');
  const vehicleSelect = document.getElementById('contactVehicle');

  function renderVehicles(filter = 'all') {
    const filtered = filter === 'all' ? vehicles : vehicles.filter(v => v.type === filter);
    grid.innerHTML = '';

    if (filtered.length === 0) {
      noResults.classList.remove('hidden');
      return;
    }
    noResults.classList.add('hidden');

    filtered.forEach((v, i) => {
      const card = document.createElement('div');
      card.className = 'vehicle-card group rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-gold-400/20 transition-all duration-300 cursor-pointer';
      card.setAttribute('data-id', v.id);
      card.setAttribute('data-type', v.type);
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';

      const savings = v.originalPrice - v.price;
      const savingsPercent = Math.round((savings / v.originalPrice) * 100);

      card.innerHTML = `
        <div class="relative overflow-hidden">
          <img src="${v.image}" alt="${v.name}" class="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
          <div class="absolute top-3 left-3 flex gap-2">
            <span class="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-slate-950">${v.badge}</span>
            <span class="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white">Save ${savingsPercent}%</span>
          </div>
          <div class="absolute bottom-3 right-3">
            <span class="rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs text-white">${v.year}</span>
          </div>
        </div>
        <div class="p-5">
          <div class="flex items-start justify-between mb-1">
            <h3 class="text-lg font-bold text-white group-hover:text-gold-400 transition">${v.name}</h3>
          </div>
          <p class="text-xs text-slate-500 mb-3">${v.brand} · ${v.mileage.toLocaleString()} mi</p>
          <div class="flex items-baseline gap-2 mb-4">
            <span class="text-2xl font-bold text-gold-400 font-display">${formatPrice(v.price)}</span>
            <span class="text-sm text-slate-500 line-through">${formatPrice(v.originalPrice)}</span>
          </div>
          <div class="flex items-center gap-3 text-xs text-slate-400">
            <span class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              ${v.horsepower} HP
            </span>
            <span>·</span>
            <span>${v.acceleration}</span>
            <span>·</span>
            <span class="capitalize">${v.type}</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openModal(v));
      grid.appendChild(card);

      // Animate in
      anime({
        targets: card,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        delay: i * 80,
        easing: 'easeOutQuad'
      });
    });
  }

  // ─── Populate Vehicle Select ───
  vehicles.forEach(v => {
    const opt = document.createElement('option');
    opt.value = v.name;
    opt.textContent = `${v.year} ${v.name} — ${formatPrice(v.price)}`;
    vehicleSelect.appendChild(opt);
  });

  // ─── Filters ───
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderVehicles(btn.dataset.filter);
    });
  });

  // ─── Vehicle Modal ───
  const modal = document.getElementById('vehicleModal');
  const modalBody = document.getElementById('modalBody');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');

  function openModal(v) {
    const savings = v.originalPrice - v.price;
    modalBody.innerHTML = `
      <div class="relative">
        <img src="${v.image}" alt="${v.name}" class="w-full h-64 sm:h-80 object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>
      <div class="p-6 sm:p-10 -mt-16 relative z-10">
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-slate-950">${v.badge}</span>
          <span class="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white">Save ${formatPrice(savings)}</span>
        </div>
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-white mb-1">${v.name}</h2>
        <p class="text-slate-400 mb-6">${v.brand} · ${v.year}</p>
        
        <div class="flex flex-wrap items-baseline gap-4 mb-8">
          <span class="text-4xl font-bold text-gold-400 font-display">${formatPrice(v.price)}</span>
          <span class="text-lg text-slate-500 line-through">${formatPrice(v.originalPrice)}</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">Engine</p>
            <p class="text-sm font-semibold text-white">${v.engine}</p>
          </div>
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">Horsepower</p>
            <p class="text-sm font-semibold text-white">${v.horsepower} HP</p>
          </div>
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">0-60 mph</p>
            <p class="text-sm font-semibold text-white">${v.acceleration}</p>
          </div>
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">Transmission</p>
            <p class="text-sm font-semibold text-white">${v.transmission}</p>
          </div>
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">Mileage</p>
            <p class="text-sm font-semibold text-white">${v.mileage.toLocaleString()} mi</p>
          </div>
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">Exterior</p>
            <p class="text-sm font-semibold text-white">${v.color}</p>
          </div>
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">Interior</p>
            <p class="text-sm font-semibold text-white">${v.interior}</p>
          </div>
          <div class="rounded-xl bg-white/[0.03] border border-white/5 p-4">
            <p class="text-xs text-slate-500 mb-1">Type</p>
            <p class="text-sm font-semibold text-white capitalize">${v.type}</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-3">
          <a href="#contact" onclick="closeModal()" class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-3.5 text-sm font-bold text-slate-950 hover:bg-gold-400 transition">
            Inquire About This Vehicle
          </a>
          <button onclick="closeModal()" class="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/5 transition">
            Back to Inventory
          </button>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    anime({
      targets: '#modalContent',
      opacity: [0, 1],
      scale: [0.95, 1],
      duration: 300,
      easing: 'easeOutQuad'
    });
  }

  window.closeModal = function() {
    anime({
      targets: '#modalContent',
      opacity: [1, 0],
      scale: [1, 0.95],
      duration: 200,
      easing: 'easeInQuad',
      complete: () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  };

  modalOverlay.addEventListener('click', window.closeModal);
  modalClose.addEventListener('click', window.closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) window.closeModal();
  });

  // ─── Contact Form ───
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const phone = document.getElementById('contactPhone').value;
    const email = document.getElementById('contactEmail').value;
    const vehicle = document.getElementById('contactVehicle').value;
    const message = document.getElementById('contactMessage').value;

    const subject = encodeURIComponent(`Vehicle Inquiry${vehicle ? ': ' + vehicle : ''}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Phone: ${phone || 'N/A'}\n` +
      `Email: ${email}\n` +
      `Vehicle of Interest: ${vehicle || 'N/A'}\n\n` +
      `Message:\n${message || 'No message provided.'}`
    );

    window.open(`mailto:giovanniknight@luxauctions.co.za?subject=${subject}&body=${body}`, '_self');

    formSuccess.classList.remove('hidden');
    anime({
      targets: formSuccess,
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 400,
      easing: 'easeOutQuad'
    });
    form.reset();
    setTimeout(() => {
      anime({
        targets: formSuccess,
        opacity: 0,
        duration: 300,
        complete: () => formSuccess.classList.add('hidden')
      });
    }, 5000);
  });

  // ─── Mobile Menu ───
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });

  // ─── Navbar Scroll Effect ───
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 50) {
      navbar.classList.add('bg-slate-950/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-black/20');
    } else {
      navbar.classList.remove('bg-slate-950/90', 'backdrop-blur-xl', 'shadow-lg', 'shadow-black/20');
    }
    lastScroll = current;
  });

  // ─── Hero Animations ───
  anime.timeline({ easing: 'easeOutExpo' })
    .add({ targets: '.hero-eyebrow', opacity: [0, 1], translateY: [20, 0], duration: 800, delay: 200 })
    .add({ targets: '.hero-title', opacity: [0, 1], translateY: [30, 0], duration: 1000 }, '-=500')
    .add({ targets: '.hero-subtitle', opacity: [0, 1], translateY: [20, 0], duration: 800 }, '-=600')
    .add({ targets: '.hero-actions', opacity: [0, 1], translateY: [20, 0], duration: 800 }, '-=500')
    .add({ targets: '.hero-stats', opacity: [0, 1], translateY: [20, 0], duration: 800 }, '-=400');

  // ─── Scroll Reveal for Sections ───
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        anime({
          targets: entry.target,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 700,
          easing: 'easeOutQuad'
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.feature-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // ─── Initialize ───
  renderVehicles();
});
