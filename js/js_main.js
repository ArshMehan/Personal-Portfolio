let currentIdx = 0;
let autoScrollTimer;
let activeGallery = [];

function initPortfolio() {
    const grid = document.getElementById('project-list');
    if (!grid) return;

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.title}">
            <div class="card-content">
                <span class="tag">${p.tag}</span>
                <h3 style="margin:0;">${p.title}</h3>
            </div>
        `;
        card.onclick = () => navigateTo(p.id);
        grid.appendChild(card);
    });
}

function navigateTo(id) {
    const p = projects.find(proj => proj.id === id);
    if (!p) return;

    activeGallery = p.gallery;
    currentIdx = 0;
    
    const slider = document.getElementById('slider-content');
    slider.innerHTML = '';
    activeGallery.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = `slider-img ${i === 0 ? 'active' : ''}`;
        slider.appendChild(img);
    });

    document.getElementById('detail-title').innerText = p.title;
    document.getElementById('detail-tag').innerText = p.tag;
    document.getElementById('detail-desc').innerText = p.desc;
    document.getElementById('detail-tech').innerText = p.tech;
    
    const linkArea = document.getElementById('cad-link-area');
    linkArea.innerHTML = p.link ? `<a href="${p.link}" target="_blank" style="color:var(--primary); font-weight:700; text-decoration:none; border: 1px solid var(--primary); padding: 10px 20px; border-radius: 6px;">View Onshape CAD →</a>` : '';

    document.getElementById('project-page').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    startAutoScroll();
}

function startAutoScroll() {
    clearInterval(autoScrollTimer);
    if (activeGallery.length > 1) {
        autoScrollTimer = setInterval(() => moveSlide(1), 5000);
    }
}

function moveSlide(direction) {
    const imgs = document.querySelectorAll('.slider-img');
    if (imgs.length <= 1) return;

    imgs[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + direction + imgs.length) % imgs.length;
    imgs[currentIdx].classList.add('active');
}

function manualMove(direction) {
    moveSlide(direction);
    startAutoScroll();
}

function goBack() {
    document.getElementById('project-page').classList.remove('active');
    document.body.style.overflow = 'auto';
    clearInterval(autoScrollTimer);
}

document.addEventListener('DOMContentLoaded', initPortfolio);