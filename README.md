# FoldbyHuse

Modern real estate website for 16 row houses in Foldby, Denmark.

## Project Structure

```
/workspace
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Property photos
├── archive/            # Old versioned HTML files
└── README.md           # This file
```

## Quick Start

Simply open `index.html` in a web browser to preview the site. No build system or server required.

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Photo Gallery**: Interactive lightbox with keyboard navigation
- **Unit Cards**: Click to view property details in modal
- **Contact Form**: Client-side validation with toast notifications
- **Mobile Navigation**: Hamburger menu for smaller screens
- **Smooth Scrolling**: Anchor links scroll smoothly to sections

## Improvements Made

### Code Organization
- ✅ Extracted inline CSS to `css/styles.css`
- ✅ Extracted inline JavaScript to `js/main.js`
- ✅ Archived old versioned HTML files (index.html - index9.html)
- ✅ Consolidated to single `index.html`

### Accessibility
- ✅ Added ARIA labels to interactive elements
- ✅ Added mobile menu toggle button with aria-label
- ✅ Improved keyboard navigation support
- ✅ Added role and tabindex to unit cards

### SEO
- ✅ Added meta description
- ✅ Added meta keywords
- ✅ Added Open Graph tags for social sharing
- ✅ Added author meta tag

### Mobile Experience
- ✅ Added hamburger menu for mobile navigation
- ✅ Improved responsive breakpoints
- ✅ Touch-friendly navigation

## Image Naming Convention

Gallery images follow this pattern:
```
images/<scene>-<variant>.jpg
```

Examples:
- `exterior-aerial-01.jpg` - Aerial view of properties
- `exterior-front-01.jpg` - Front facade
- `living-room-01.jpg` - Living room interior
- `kitchen-01.jpg` - Kitchen
- `bedroom-master-01.jpg` - Master bedroom
- `bathroom-01.jpg` - Bathroom

## Customization

### Contact Form
The contact form currently shows a success toast but doesn't submit anywhere. To enable actual submissions:

1. Use a form backend service like Formspree, Netlify Forms, or EmailJS
2. Update the `handleSubmit` function in `js/main.js`
3. Add your form endpoint URL

Example:
```javascript
async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('YOUR_FORM_ENDPOINT', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            // Show success toast
        }
    } catch (error) {
        // Show error toast
    }
}
```

### Colors
Edit CSS custom properties in `css/styles.css`:
```css
:root {
    --bg: #0b0b1a;        /* Background */
    --accent: #6c5ce7;    /* Primary accent */
    --accent2: #a29bfe;   /* Secondary accent */
    --text: #f0f0ff;      /* Text color */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2026 FoldbyHuse
