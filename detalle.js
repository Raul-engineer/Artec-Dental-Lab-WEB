const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const p = productos.find(x => x.id === id);

if (!p) {
  document.body.innerHTML = '<div style="text-align:center;padding:120px 20px;font-family:serif;font-size:1.5rem;color:#6B5C48">Producto no encontrado. <a href="index.html#catalogo" style="color:#8B6E3C">Volver al catálogo</a></div>';
} else {
  document.title = p.nombre + ' | Artec Dental Lab';

  document.getElementById('bc-cat').textContent = p.catLabel;
  document.getElementById('bc-cat').href = `index.html?cat=${p.cat}#catalogo`;
  document.getElementById('bc-nombre').textContent = p.nombre;

  const imgSrc = `imagenes/catalogo/${p.cat}/portada.jpg`;
  const imgEl = document.getElementById('det-img-main');
  const phEl = document.getElementById('det-ph');
  const swEl = document.getElementById('det-shadow-img');
  const wrap = document.getElementById('det-img-wrap');

  wrap.style.background = p.color;
  document.getElementById('det-ph-icon').textContent = p.icon;
  imgEl.src = imgSrc;
  swEl.src = imgSrc;
  imgEl.onload = () => { imgEl.style.display = 'block'; swEl.style.display = 'block'; phEl.style.display = 'none'; };
  imgEl.onerror = () => { imgEl.style.display = 'none'; swEl.style.display = 'none'; phEl.style.display = 'flex'; };

  document.getElementById('det-cat').textContent = p.catLabel;
  document.getElementById('det-nombre').textContent = p.nombre;
  document.getElementById('det-detalle').textContent = p.detalle || '';
  document.getElementById('det-precio').textContent = '$' + p.precio.toLocaleString('es-MX');
  document.getElementById('det-desc').textContent = p.desc;

  const specsEl = document.getElementById('det-specs');
  p.specs.forEach(([k, v]) => {
    specsEl.innerHTML += `<div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>`;
  });

  const msg = encodeURIComponent(`Hola Alfredo, quisiera cotizar: ${p.nombre}${p.detalle ? ' ('+p.detalle+')' : ''}. Precio referencia $${p.precio.toLocaleString('es-MX')}.`);
  document.getElementById('det-wa').href = `https://wa.me/528117739522?text=${msg}`;

  // Productos relacionados
  const rel = productos.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const grid = document.getElementById('relacionados-grid');
  rel.forEach((r, i) => {
    const imgR = `imagenes/catalogo/${r.cat}/portada.jpg`;
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = (i * 0.06) + 's';
    card.innerHTML = `
      <div class="card-img-wrap" style="background:${r.color}">
        <img class="card-bg-img" src="${imgR}" alt="${r.nombre}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
        <div class="card-ph" style="display:none"><span class="card-ph-icon">${r.icon}</span></div>
        <div class="card-overlay"><button class="card-overlay-btn">Ver detalle →</button></div>
      </div>
      <div class="card-shadow-wrap" style="background:${r.color}">
        <img class="card-shadow-img" src="${imgR}" alt="" onerror="this.style.display='none'"/>
      </div>
      <div class="card-info">
        <span class="card-cat-badge">${r.catLabel}</span>
        <div class="card-name">${r.nombre}</div>
        ${r.detalle ? `<div class="card-detalle">${r.detalle}</div>` : ''}
      </div>
    `;
    card.addEventListener('click', () => { window.location.href = `detalle.html?id=${r.id}`; });
    grid.appendChild(card);
  });
}

document.getElementById('yr').textContent = new Date().getFullYear();
