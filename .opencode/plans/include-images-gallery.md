# Plan: Include Best 7 Images in index.html and index2.html

## Objective
Add 7 selected images from the `images/` folder to both `index.html` and `index2.html` gallery sections.

## Selected Images
1. `images/exterior-aerial-01.jpg` - Luftfoto af boligerne
2. `images/exterior-front-01.jpg` - Facaden
3. `images/living-room-01.jpg` - Stue
4. `images/kitchen-01.jpg` - Køkken
5. `images/bedroom-master-01.jpg` - Soveværelse
6. `images/bathroom-01.jpg` - Badeværelse
7. `images/dining-area-01.jpg` - Spisestue

---

## Changes to `index.html`

### 1. Update Gallery Section (lines 870-892)
Replace the 3 placeholder `gallery-item` divs with 7 actual image items:

```html
<div class="gallery-grid">
    <div class="gallery-item" onclick="openModal('exterior-aerial-01')">
        <img src="images/exterior-aerial-01.jpg" alt="Luftfoto af boligerne">
    </div>
    <div class="gallery-item" onclick="openModal('exterior-front-01')">
        <img src="images/exterior-front-01.jpg" alt="Facaden">
    </div>
    <div class="gallery-item" onclick="openModal('living-room-01')">
        <img src="images/living-room-01.jpg" alt="Stue">
    </div>
    <div class="gallery-item" onclick="openModal('kitchen-01')">
        <img src="images/kitchen-01.jpg" alt="Køkken">
    </div>
    <div class="gallery-item" onclick="openModal('bedroom-master-01')">
        <img src="images/bedroom-master-01.jpg" alt="Soveværelse">
    </div>
    <div class="gallery-item" onclick="openModal('bathroom-01')">
        <img src="images/bathroom-01.jpg" alt="Badeværelse">
    </div>
    <div class="gallery-item" onclick="openModal('dining-area-01')">
        <img src="images/dining-area-01.jpg" alt="Spisestue">
    </div>
</div>
```

### 2. Update `openModal()` function (lines 1046-1068)
Update to render actual `<img>` tags with local image paths:

```javascript
function openModal(type) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modalBody');
    const titles = {
        'exterior-aerial-01': 'Luftfoto af boligerne',
        'exterior-front-01': 'Facaden',
        'living-room-01': 'Stue',
        'kitchen-01': 'Køkken',
        'bedroom-master-01': 'Soveværelse',
        'bathroom-01': 'Badeværelse',
        'dining-area-01': 'Spisestue'
    };

    body.innerHTML = `
        <h2 class="modal-title">${titles[type]}</h2>
        <img src="images/${type}.jpg" alt="${titles[type]}" style="width: 100%; border-radius: 12px;">
        <p style="margin-top: 1rem; color: var(--text-secondary);">
            ${type === 'bathroom-01' ? 'Moderne badeværelse med gulvvarme, bruseniche og kvalitetsarmaturer.' :
            type === 'bedroom-master-01' ? 'Lyst og rummeligt soveværelse med god skabsplads.' :
            type === 'kitchen-01' ? 'Moderne køkken med induktionskomfur, opvaskemaskine og god arbejdsplads.' :
            type === 'living-room-01' ? 'Rummelig stue med plads til sofagruppe og spiseafdeling.' :
            type === 'dining-area-01' ? 'Åben spisestue i forbindelse med køkken og stue.' :
            type.startsWith('exterior') ? 'Velholdt rødstens facade med sort tag. Egen have og terrasse.' :
            'Moderne bolig med kvalitetsmaterialer.'}
        </p>
    `;
    modal.classList.add('active');
}
```

---

## Changes to `index2.html`

### 1. Update `photos` array (lines 1128-1149)
Replace Unsplash URLs with local image paths:

```javascript
const photos = [
    {
        src: 'images/exterior-aerial-01.jpg',
        title: 'Luftfoto af boligerne',
        desc: 'Oversigt over de 16 rækkehuse i Foldby'
    },
    {
        src: 'images/exterior-front-01.jpg',
        title: 'Facaden',
        desc: 'Røde mursten og hvide vinduer'
    },
    {
        src: 'images/living-room-01.jpg',
        title: 'Stue',
        desc: 'Rummelig stue med plads til hele familien'
    },
    {
        src: 'images/kitchen-01.jpg',
        title: 'Køkken',
        desc: 'Moderne køkken med alle hårde hvidevarer'
    },
    {
        src: 'images/bedroom-master-01.jpg',
        title: 'Soveværelse',
        desc: 'Lyst soveværelse med udgang til altan'
    },
    {
        src: 'images/bathroom-01.jpg',
        title: 'Badeværelse',
        desc: 'Moderne badeværelse med gulvvarme'
    },
    {
        src: 'images/dining-area-01.jpg',
        title: 'Spisestue',
        desc: 'Åben spisestue med udgang til terrasse'
    }
];
```

### 2. Update Gallery HTML (lines 967-1003)
Replace image sources from Unsplash to local paths:

```html
<div class="gallery-grid">
    <div class="gallery-item" onclick="openPhotoModal(0)">
        <img src="images/exterior-aerial-01.jpg" alt="Luftfoto af boligerne">
        <div class="gallery-overlay">
            <div class="gallery-title">Luftfoto af boligerne</div>
            <div class="gallery-desc">Oversigt over de 16 rækkehuse</div>
        </div>
    </div>
    <div class="gallery-item" onclick="openPhotoModal(1)">
        <img src="images/exterior-front-01.jpg" alt="Facaden">
        <div class="gallery-overlay">
            <div class="gallery-title">Facaden</div>
            <div class="gallery-desc">Røde mursten og hvide vinduer</div>
        </div>
    </div>
    <div class="gallery-item" onclick="openPhotoModal(2)">
        <img src="images/living-room-01.jpg" alt="Stue">
        <div class="gallery-overlay">
            <div class="gallery-title">Stue</div>
            <div class="gallery-desc">Rummelig stue med plads til familien</div>
        </div>
    </div>
    <div class="gallery-item" onclick="openPhotoModal(3)">
        <img src="images/kitchen-01.jpg" alt="Køkken">
        <div class="gallery-overlay">
            <div class="gallery-title">Køkken</div>
            <div class="gallery-desc">Moderne køkken med alle hårde hvidevarer</div>
        </div>
    </div>
    <div class="gallery-item" onclick="openPhotoModal(4)">
        <img src="images/bedroom-master-01.jpg" alt="Soveværelse">
        <div class="gallery-overlay">
            <div class="gallery-title">Soveværelse</div>
            <div class="gallery-desc">Lyst værelse med god skabsplads</div>
        </div>
    </div>
    <div class="gallery-item" onclick="openPhotoModal(5)">
        <img src="images/bathroom-01.jpg" alt="Badeværelse">
        <div class="gallery-overlay">
            <div class="gallery-title">Badeværelse</div>
            <div class="gallery-desc">Moderne med gulvvarme</div>
        </div>
    </div>
    <div class="gallery-item" onclick="openPhotoModal(6)">
        <img src="images/dining-area-01.jpg" alt="Spisestue">
        <div class="gallery-overlay">
            <div class="gallery-title">Spisestue</div>
            <div class="gallery-desc">Åben forbindelse til køkken</div>
        </div>
    </div>
</div>
```

### 3. Update Photo Counter (line 1013)
Change from `1 / 4` to dynamic counter (already handled by JS, just verify):
- Line 1013: `1 / 4` → `${currentPhotoIndex + 1} / ${photos.length}` (already correct in JS)

---

## Summary of Files to Modify
| File | Changes |
|------|---------|
| `index.html` | 2 sections (gallery HTML, openModal function) |
| `index2.html` | 3 sections (photos array, gallery HTML, photo counter text) |

## Estimated Time
- 5-10 minutes for implementation
- No testing required (static HTML/CSS changes only)
