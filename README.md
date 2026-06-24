# my-afb-safe — Custom Shopify Theme

A customized Shopify theme based on the **Ambaz** theme, built for the **AFB Safe** store. Includes extended sections, custom snippets, and additional assets not present in the original theme.

## Project Structure

```
my-afb-safe/
├── assets/          # CSS, JS, fonts, and image assets
├── blocks/          # Reusable theme blocks
├── config/          # Theme settings schema and data
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/          # Base layout templates
│   └── theme.liquid
├── locales/         # Translation strings
├── sections/        # Page sections (announcement bar, product, collection, etc.)
├── snippets/        # Reusable Liquid snippets
└── templates/       # Page templates (product, collection, cart, blog, etc.)
```

## Notable Custom Sections

- `advanced-search-filter` — Filterable search with slideshow
- `countdown-timer` / `countdown-timer-with-media` — Promotional countdown banners
- `collection-showcase` — Featured collection display
- `best-deals-products` — Deals section with product grid
- `email-popup` — Email capture popup
- `contact-info-with-map` — Contact page with embedded map
- `age-verifier-popup` — Age gate popup

## Template Variants

Multiple product and collection template layouts are included:

- `product.product-stacked.json`
- `product.product-thumbnails.json`
- `product.product-color-swatches.json`
- `collection.filter-drawer.json`
- `collection.filter-horizontal.json`
- `collection.slider-input.json`

## Development

### Prerequisites

- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli) >= 3.x
- A Shopify Partner account or development store

### Local Development

```bash
shopify theme dev --store YOUR_STORE.myshopify.com
```

### Push to Store

```bash
shopify theme push --store YOUR_STORE.myshopify.com
```

### Pull from Store

```bash
shopify theme pull --store YOUR_STORE.myshopify.com
```

## Notes

- `OUTPUT/` and `CLAUDE.md` are excluded from this repository (see `.gitignore`).
- Root-level `.json` files are workflow artifacts and are not part of the theme.
