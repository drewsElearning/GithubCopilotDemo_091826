# The Pecos House

> **Stay extraordinary.**
>
> A lovingly overconfident Texas hotel company for curious travelers, good linens, and nights worth remembering.

<p align="center">
	<img src="https://img.shields.io/badge/status-demo_project-BD593A?style=flat-square" alt="Demo project" />
	<img src="https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JavaScript-17221D?style=flat-square" alt="HTML CSS JavaScript" />
	<img src="https://img.shields.io/badge/design-responsive-C7D1C5?style=flat-square" alt="Responsive design" />
</p>

## What it is

The Pecos House is a polished parody hospitality website set across Texas. It imagines a boutique hotel group that turns overlooked corners of the state into memorable stays, pairing high-end rooms with a little wit and plenty of personality.

The site is designed as a real, interactive first screen for a Copilot web-development demonstration. It has no build step or framework, so every visual and interaction is easy to open, inspect, and change in real time.

## The experience

- A dramatic editorial hero with the Pecos House brand and a Marfa suite feature
- A Texas-forward story section built around the company’s fictional point of view
- Three room options at distinct price points:
	- **The Desert Double** — Marfa, `$149/night`
	- **The Bluebonnet Suite** — Fort Worth, `$289/night`
	- **The Pecos Penthouse** — Austin, `$475/night`
- Room filters for all rooms, stays under `$200`, and premium stays
- Save-to-list heart buttons with toast feedback
- Room action buttons with lightweight interaction feedback
- Newsletter signup state with inline confirmation
- Responsive layouts for desktop and mobile screens
- Accessible labels, semantic sections, smooth scrolling, and live status messaging

## Visual direction

The visual language is warm, restrained, and intentionally premium:

- **Palette:** parchment cream, deep evergreen, muted rust, and sage
- **Type:** Playfair Display for the expressive editorial headlines and DM Sans for the interface
- **Composition:** oversized serif typography, generous whitespace, asymmetric grids, and image-led room cards
- **Tone:** boutique hospitality with a confident West Texas sense of humor

## Project structure

```text
.
├── index.html   # Page structure, content, and accessible controls
├── styles.css   # Responsive visual system and layout
├── script.js    # Filters, saves, toast messages, scrolling, and signup state
└── README.md    # Project overview and setup notes
```

## Run it locally

No dependencies are required.

### Option 1: Open directly

Open [`index.html`](index.html) in a browser.

### Option 2: Start a local server

```bash
python3 -m http.server 5500
```

Then visit [http://localhost:5500](http://localhost:5500).

Serving the site locally is the most convenient way to demonstrate live edits from VS Code.

## Image assets

The room and hotel photography currently uses remote Unsplash image URLs so the demo works without a local asset pipeline. Replace the `background-image` URLs in [`styles.css`](styles.css) with generated or locally hosted images when moving from demo content to a production-ready experience.

## Built for exploration

This is a fictional brand and a front-end concept. Booking, authentication, payments, availability, and form submission are intentionally represented as polished demo interactions rather than connected services.