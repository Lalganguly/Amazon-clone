# Amazon Clone

A browser based shopping demo built with HTML, CSS, and vanilla JavaScript. It recreates the main flows of an Amazon style storefront: browsing products, adding items to a cart, selecting delivery options, placing an order, and viewing order and delivery tracking pages.

## Features

- Responsive product listing with product images, ratings, prices, and quantity controls.
- Add products to a cart and review or update the cart at checkout.
- Cart contents are saved in the browser's `localStorage`.
- Choose delivery options and see item, shipping, tax, and order totals.
- Place an order and view it on the orders page, with a tracking page for delivery status.
- A small Jasmine based test suite is included under `tests/`.

## Project structure

```text
.
├── amazon.html              # Storefront / product listing
├── checkout.html            # Cart and checkout
├── orders.html              # Order history
├── tracking.html            # Order delivery tracking
├── backend/products.json    # Local product data file
├── data/                    # Product, cart, order, and delivery data logic
├── scripts/                 # Page behavior and shared utilities
├── styles/                  # Shared and page-specific styles
├── images/                  # Product, logo, icon, and rating images
└── tests/                   # Jasmine tests
```

## Run locally

This project uses JavaScript ES modules and browser requests, so open it through a local web server rather than opening the HTML file directly.

### Option 1: VS Code Live Server

1. Open this folder in VS Code.
2. Install the **Live Server** extension if needed.
3. Right-click `amazon.html` and select **Open with Live Server**.

### Option 2: Python

From the project folder, start a server:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000/amazon.html](http://localhost:8000/amazon.html) in your browser. Stop the server with `Ctrl+C` in the terminal.

Use the storefront navigation to visit checkout, orders, and tracking pages.

## Backend and browser data

The app requests product data and cart/order operations from `https://supersimplebackend.dev`. You need an internet connection for those requests, and the demo backend must be available for product loading and order placement. `backend/products.json` is included in the repository, but the current app code loads products from the remote service rather than that local JSON file.

Cart state and saved order history use browser `localStorage`. They are specific to the browser and origin. To reset the demo data, clear this site's local storage in your browser's developer tools.

## Tests

The repository includes browser based Jasmine tests. Serve the project locally as described above, then open:

- `tests/test.html`
- `tests/tests.simple/tests.html`

Some tests may depend on browser storage or external product/cart requests, depending on the page being run.

## Notes

This is a learning/demo project, not an official Amazon website. It has no production payment processing or account system.
