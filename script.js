const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 60));

document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const t = document.querySelector(a.getAttribute('href'));
  if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }); }
}));

const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
}), { threshold: .08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal,.rl,.rr').forEach(el => obs.observe(el));

function formatPrice(n) { return '$' + n.toLocaleString('es-MX'); }

function renderCards(list) {
  const grid = document.getElementById('products-grid');
  const count = document.getElementById('product-count');
  grid.innerHTML = '';
  count.textContent = list.length + ' servicio' + (list.length !== 1 ? 's' : '') + ' disponible' + (list.length !== 1 ? 's' : '');
  if (!list.length) { grid.innerHTML = '<div class="empty-state"><p>No hay servicios en esta categoría.</p></div>'; return; }
  list.forEach((p, i) => {
    const imgSrc = `imagenes/catalogo/${p.cat}/${p.id}.jpg`;
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = (i * 0.04) + 's';
    card.innerHTML = `
      <div class="card-img-wrap" style="background:${p.color}">
        <img class="card-bg-img" src="${imgSrc}" alt="${p.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="card-ph" style="display:none"><span class="card-ph-icon">${p.icon}</span><span class="card-ph-text">Imagen próximamente</span></div>
        <div class="card-overlay"><button class="card-overlay-btn">Ver detalle →</button></div>
      </div>
      <div class="card-shadow-wrap" style="background:${p.color}">
        <img class="card-shadow-img" src="${imgSrc}" alt="" onerror="this.style.display='none'"/>
      </div>
      <div class="card-info">
        <span class="card-cat-badge">${p.catLabel}</span>
        <div class="card-name">${p.nombre}</div>
        ${p.detalle ? `<div class="card-detalle">${p.detalle}</div>` : ''}
      </div>
    `;
    card.addEventListener('click', () => { window.location.href = `detalle.html?id=${p.id}`; });
    grid.appendChild(card);
  });
}

let activeFilter = 'all';
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderCards(activeFilter === 'all' ? productos : productos.filter(p => p.cat === activeFilter));
  });
});

function filterCat(cat) {
  const btn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
  if (btn) btn.click();
}

const catParam = new URLSearchParams(window.location.search).get('cat');
if (catParam) filterCat(catParam);
else renderCards(productos);

document.getElementById('yr').textContent = new Date().getFullYear();

// Lightbox galería
const lbStyle = document.createElement('style');
lbStyle.textContent = '@keyframes lbIn{from{opacity:0}to{opacity:1}}@keyframes imgIn{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}';
document.head.appendChild(lbStyle);

document.querySelectorAll('.gal-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.94);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:zoom-out;padding:40px;animation:lbIn .3s ease';
    if (img && img.complete && img.naturalWidth > 0) {
      const clone = document.createElement('img');
      clone.src = img.src;
      clone.style.cssText = 'max-width:90vw;max-height:86vh;object-fit:contain;border-radius:2px;animation:imgIn .3s ease';
      overlay.appendChild(clone);
    } else {
      const ph = document.createElement('div');
      ph.style.cssText = 'color:rgba(255,255,255,.3);font-family:serif;font-size:1.2rem;font-style:italic';
      ph.textContent = item.querySelector('.gal-overlay span')?.textContent || 'Imagen próximamente';
      overlay.appendChild(ph);
    }
    const btn = document.createElement('button');
    btn.innerHTML = '×';
    btn.style.cssText = 'position:absolute;top:20px;right:28px;background:none;border:none;color:rgba(255,255,255,.6);font-size:2.5rem;cursor:pointer;line-height:1;transition:color .2s';
    btn.onmouseenter = () => btn.style.color = '#fff';
    btn.onmouseleave = () => btn.style.color = 'rgba(255,255,255,.6)';
    overlay.appendChild(btn);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    const close = () => { document.body.removeChild(overlay); document.body.style.overflow = ''; };
    overlay.addEventListener('click', close);
    btn.addEventListener('click', e => { e.stopPropagation(); close(); });
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
  });
});