# Pages Structure Documentation

## Overview

This directory contains all the page components for the DakarCafé Express website. The application uses React Router for navigation and follows a modular component architecture.

## Directory Structure

```
src/pages/
├── Home/
│   ├── index.tsx                    # Home page main component
│   └── sections/                    # Home page sections
│       ├── HeaderSection.tsx        # Navigation header
│       ├── HeroSection.tsx          # Hero banner section
│       ├── ProductCategoriesSection.tsx  # Product categories showcase
│       ├── BestSellersSection.tsx   # Best selling products
│       ├── SubscriptionSection.tsx  # Subscription plans
│       ├── TestimonialsSection.tsx  # Customer testimonials
│       ├── NewsletterSection.tsx    # Newsletter signup
│       └── FooterSection.tsx        # Footer section
├── Boutique/
│   ├── index.tsx                    # Boutique page main component
│   └── components/                  # Boutique specific components
│       ├── ProductGrid.tsx          # Product display grid/list
│       └── ProductFilters.tsx       # Product filtering sidebar
└── README.md                        # This file
```

## Routing

The application routing is configured in `src/App.tsx`:

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/boutique" element={<Boutique />} />
</Routes>
```

### Available Routes

- `/` - Home page
- `/boutique` - Product listing page
- `/boutique?category=capsules` - Filtered by capsules
- `/boutique?category=machines` - Filtered by machines
- `/boutique?category=accessoires` - Filtered by accessories

## Page Components

### Home Page (`/`)

The landing page consists of the following sections:

1. **HeaderSection** - Main navigation with mobile responsive menu
2. **HeroSection** - Eye-catching banner with CTA buttons
3. **ProductCategoriesSection** - Showcases main product categories
4. **BestSellersSection** - Displays best-selling products
5. **SubscriptionSection** - Subscription plans and pricing
6. **TestimonialsSection** - Customer reviews and ratings
7. **NewsletterSection** - Email subscription form
8. **FooterSection** - Footer with links and contact info

### Boutique Page (`/boutique`)

The product listing page includes:

1. **HeaderSection** - Shared navigation component
2. **Product Hero** - Page title and description
3. **ProductFilters** - Sidebar with filtering options:
   - Category filter
   - Price range filter
   - Tag/feature filter
4. **ProductGrid** - Product display with:
   - Grid/List view toggle
   - Sorting options
   - Product cards with quick actions
5. **FooterSection** - Shared footer component

## Component Usage

### Shared Components

The `HeaderSection` and `FooterSection` are shared between pages:

```typescript
import { HeaderSection } from '../Home/sections/HeaderSection';
import { FooterSection } from '../Home/sections/FooterSection';
```

### Product Data Structure

Products follow this TypeScript interface:

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'capsules' | 'machines' | 'accessoires';
  subcategory?: string;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  tags?: string[];
}
```

## Adding New Pages

To add a new page:

1. Create a new directory under `src/pages/`
2. Add an `index.tsx` file as the main component
3. Create a `sections/` or `components/` subdirectory for page-specific components
4. Add the route in `src/App.tsx`
5. Update navigation links in `HeaderSection.tsx`

Example:

```typescript
// src/pages/About/index.tsx
import React from 'react';
import { HeaderSection } from '../Home/sections/HeaderSection';
import { FooterSection } from '../Home/sections/FooterSection';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSection />
      <main>
        {/* Your content here */}
      </main>
      <FooterSection />
    </div>
  );
};
```

## Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the color scheme:
  - Primary: `#150A05` (Dark brown)
  - Accent: `#B16631` (Light bronze/caramel)
- Use responsive classes for mobile-first design
- Maintain consistent spacing with Tailwind's spacing scale

## State Management

Currently, state is managed locally within components. For the Boutique page:

- Product filtering state is managed in the main Boutique component
- Filter values are passed down to child components as props
- URL parameters are used for category filtering

## Future Enhancements

- Add product detail pages (`/product/:id`)
- Implement shopping cart functionality
- Add user authentication pages
- Create checkout flow
- Add order tracking pages
- Implement search functionality