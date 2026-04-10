// FoldbyHuse - Main JavaScript

// Unit data
const units = Array.from({length: 16}, (_, i) => ({
    id: i + 1,
    status: 'rented',
    type: 'Rækkehus',
    size: '105 m²'
}));

// Photo gallery data
const photos = [
    {src: 'images/exterior-aerial-01.jpg', title: 'Luftfoto'},
    {src: 'images/exterior-front-01.jpg', title: 'Facade'},
    {src: 'images/living-room-01.jpg', title: 'Stue'},
    {src: 'images/kitchen-01.jpg', title: 'Køkken'},
    {src: 'images/bedroom-master-01.jpg', title: 'Soveværelse'},
    {src: 'images/bathroom-01.jpg', title: 'Badeværelse'}
];

let currentPhoto = 0;

// Render unit cards
function renderUnits() {
    const grid = document.getElementById('housesGrid');
    if (!grid) return;
    
    grid.innerHTML = units.map(u => `
        <div class="unit-card" onclick="openUnitModal(${u.id})" role="button" tabindex="0" aria-label="Se detaljer for hus ${u.id}">
            <div class="num">${u.id}</div>
            <div class="addr">Gammelager ${u.id}</div>
            <div class="status">Udlejet</div>
        </div>
    `).join('');
}

// Open unit modal
function openUnitModal(id) {
    const u = units.find(x => x.id === id);
    if (!u) return;
    
    document.getElementById('modalTitle').textContent = `Hus ${u.id}`;
    document.getElementById('modalBody').innerHTML = `
        <div class="modal-row"><span class="label">Type</span><span class="value">${u.type}</span></div>
        <div class="modal-row"><span class="label">Størrelse</span><span class="value">${u.size}</span></div>
        <div class="modal-row"><span class="label">Status</span><span class="value" style="color:var(--error)">Udlejet</span></div>
        <div class="modal-row"><span class="label">Adresse</span><span class="value">Gammelager ${u.id}</span></div>
        <p style="margin-top:1rem;color:var(--text-dim);text-align:center;font-size:0.85rem;">Denne bolig er udlejet. Kontakt os for venteliste.</p>
    `;
    document.getElementById('unitModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close unit modal
function closeUnitModal() {
    document.getElementById('unitModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Open photo modal
function openPhoto(i) {
    currentPhoto = i;
    updatePhotoModal();
    document.getElementById('photoModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Update photo modal content
function updatePhotoModal() {
    document.getElementById('modalPhoto').src = photos[currentPhoto].src;
    document.getElementById('modalPhoto').alt = photos[currentPhoto].title;
    document.getElementById('photoCounter').textContent = `${currentPhoto + 1} / ${photos.length}`;
}

// Close photo modal
function closePhotoModal() {
    document.getElementById('photoModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Navigate photos
function changePhoto(d) {
    currentPhoto = (currentPhoto + d + photos.length) % photos.length;
    updatePhotoModal();
}

// Handle form submission
function handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const btn = document.getElementById('submitBtn');
    const originalText = btn.textContent;
    
    // Basic validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--error)';
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (!isValid) return;
    
    // Simulate submission
    btn.textContent = 'Sender...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
        form.reset();
        
        // Show toast
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }, 1500);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    renderUnits();
    
    // Modal click outside to close
    const unitModal = document.getElementById('unitModal');
    const photoModal = document.getElementById('photoModal');
    
    if (unitModal) {
        unitModal.addEventListener('click', function(e) {
            if (e.target === this) closeUnitModal();
        });
    }
    
    if (photoModal) {
        photoModal.addEventListener('click', function(e) {
            if (e.target === this) closePhotoModal();
        });
    }
    
    // Keyboard navigation for modals
    document.addEventListener('keydown', function(e) {
        if (!photoModal || !photoModal.classList.contains('active')) return;
        
        if (e.key === 'Escape') closePhotoModal();
        if (e.key === 'ArrowLeft') changePhoto(-1);
        if (e.key === 'ArrowRight') changePhoto(1);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({behavior: 'smooth'});
                // Close mobile menu if open
                document.querySelector('.nav-links')?.classList.remove('active');
            }
        });
    });
});
