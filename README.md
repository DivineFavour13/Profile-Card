# Profile Card

A polished Stage 1B profile card built with plain HTML, CSS, and vanilla JavaScript.

## Overview

This project presents a responsive and accessible personal profile card with:

- semantic HTML structure
- a visible avatar image
- live epoch time in milliseconds using `Date.now()`
- external social links that open safely in a new tab
- hobbies and dislikes lists

## Files

- `Index.html` contains the semantic structure and all required `data-testid` selectors
- `Styles.css` handles the responsive layout, visual styling, and focus states
- `Script.js` renders and updates the current epoch time every second

## Accessibility

- The avatar uses meaningful alt text
- The social links are keyboard-focusable and include visible focus outlines
- The time display uses `aria-live="polite"` so updates are announced gently
- Text contrast and spacing are tuned for readability

## Responsive Layout

- On mobile screens, the content stacks vertically with full-width actions
- On wider screens, the avatar and profile details sit side by side
- The lower sections shift into a two-column layout for better balance

## Running the Project

1. Clone the repository.
2. Open `Index.html` in your browser.

No build step or external library is required.
