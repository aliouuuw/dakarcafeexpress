# DakarCafé Express - Backend Architecture Documentation

## Overview

This document outlines the comprehensive backend architecture for DakarCafé Express, built on Convex as the primary backend-as-a-service platform. The architecture is designed to support both web and mobile applications with real-time synchronization, scalable authentication, and robust e-commerce functionality.

## Architecture Principles

### 1. Single Source of Truth
- Convex serves as the unified backend for both web and mobile applications
- All data flows through Convex functions ensuring consistency
- Real-time updates across all connected clients

### 2. Type Safety
- End-to-end TypeScript from frontend to backend
- Automatic API type generation from Convex functions
- Runtime validation of data schemas

### 3. Scalability
- Serverless architecture with automatic scaling
- Optimized queries with built-in caching
- Global distribution for low latency

### 4. Security
- Built-in authentication and authorization
- Row-level security for data access
- Encrypted data at rest and in transit

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Client Applications                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐         ┌─────────────────┐               │
│  │   Web App       │         │   Mobile App    │               │
│  │   (React)       │         │ (React Native)  │               │
│  └─────────────────┘         └─────────────────┘               │
│           │                           │                         │
│           └─────────────┬─────────────┘                         │
│                         │                                       │
└─────────────────────────┼─────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Convex Backend                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   API Layer     │  │  Authentication │  │   File Storage  │ │
│  │  (Functions)    │  │    (Auth)       │  │   (Images)      │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│           │                     │                     │         │
│           └─────────────────────┼─────────────────────┘         │
│                                 │                               │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    Database                                 │ │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───────┐ │ │
│  │  │Products │ │  Users  │ │ Orders  │ │  Cart   │ │Reviews│ │ │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └───────┘ │ │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌───────┐ │ │
│  │  │Categories│ │Subscriptions│ │Payments│ │Analytics│ │Logs │ │ │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └───────┘ │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                External Integrations                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   Payment       │  │   Notifications │  │   Analytics     │ │
│  │  (Orange Money, │  │   (Push, Email) │  │   (Tracking)    │ │
│  │   Wave, etc.)   │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Database Schema Design

### Core Tables

#### 1. Users Table
```typescript
users: {
  _id: Id<"users">,
  email: string,
  name: string,
  phone?: string,
  avatar?: string,
  addresses: {
    id: string,
    type: "home" | "work" | "other",
    street: string,
    city: string,
    region: string,
    postalCode?: string,
    country: string,
    isDefault: boolean,
  }[],
  preferences: {
    language: "fr" | "en",
    currency: "FCFA",
    notifications: {
      email: boolean,
      push: boolean,
      sms: boolean,
    },
    delivery: {
      preferredTime: string,
      specialInstructions?: string,
    },
  },
  role: "user" | "admin" | "moderator",
  isActive: boolean,
  lastLogin?: number,
  createdAt: number,
  updatedAt: number,
}
```

#### 2. Products Table
```typescript
products: {
  _id: Id<"products">,
  name: string,
  description: string,
  shortDescription: string,
  price: number, // in FCFA
  originalPrice?: number, // for discounts
  category: "capsules" | "machines" | "accessories",
  subcategory?: string,
  brand?: string,
  images: Id<"_storage">[],
  specifications: {
    weight?: string,
    dimensions?: string,
    material?: string,
    color?: string,
    compatibility?: string[],
    intensity?: number, // for capsules
  },
  inventory: {
    stock: number,
    lowStockThreshold: number,
    isTracked: boolean,
  },
  seo: {
    slug: string,
    metaTitle?: string,
    metaDescription?: string,
    keywords?: string[],
  },
  tags: string[],
  rating: number,
  reviewCount: number,
  isActive: boolean,
  isFeatured: boolean,
  isNew: boolean,
  isBestSeller: boolean,
  sortOrder: number,
  createdAt: number,
  updatedAt: number,
}
```

#### 3. Orders Table
```typescript
orders: {
  _id: Id<"orders">,
  userId: Id<"users">,
  orderNumber: string,
  items: {
    productId: Id<"products">,
    quantity: number,
    price: number,
    total: number,
  }[],
  subtotal: number,
  shipping: number,
  tax: number,
  discount: number,
  total: number,
  currency: "FCFA",
  status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled",
  paymentStatus: "pending" | "paid" | "failed" | "refunded",
  paymentMethod: "cash_on_delivery" | "orange_money" | "wave" | "card",
  deliveryAddress: {
    street: string,
    city: string,
    region: string,
    postalCode?: string,
    country: string,
    phone: string,
    instructions?: string,
  },
  tracking: {
    number?: string,
    carrier?: string,
    updates: {
      status: string,
      message: string,
      timestamp: number,
      location?: string,
    }[],
  },
  notes?: string,
  createdAt: number,
  updatedAt: number,
}
```

#### 4. Cart Table
```typescript
cart: {
  _id: Id<"cart">,
  userId: Id<"users">,
  items: {
    productId: Id<"products">,
    quantity: number,
    addedAt: number,
  }[],
  updatedAt: number,
}
```

#### 5. Subscriptions Table
```typescript
subscriptions: {
  _id: Id<"subscriptions">,
  userId: Id<"users">,
  planType: "basic" | "premium" | "enterprise",
  name: string,
  products: {
    productId: Id<"products">,
    quantity: number,
  }[],
  frequency: "weekly" | "bi-weekly" | "monthly",
  nextDelivery: number,
  deliveryAddress: {
    street: string,
    city: string,
    region: string,
    postalCode?: string,
    country: string,
    phone: string,
  },
  paymentMethod: "cash_on_delivery" | "orange_money" | "wave" | "card",
  pricing: {
    subtotal: number,
    discount: number,
    total: number,
  },
  status: "active" | "paused" | "cancelled",
  pausedUntil?: number,
  cancelReason?: string,
  createdAt: number,
  updatedAt: number,
}
```

#### 6. Reviews Table
```typescript
reviews: {
  _id: Id<"reviews">,
  userId: Id<"users">,
  productId: Id<"products">,
  orderId?: Id<"orders">,
  rating: number, // 1-5
  title?: string,
  comment?: string,
  images?: Id<"_storage">[],
  isVerified: boolean,
  isVisible: boolean,
  helpfulCount: number,
  createdAt: number,
  updatedAt: number,
}
```

#### 7. Categories Table
```typescript
categories: {
  _id: Id<"categories">,
  name: string,
  slug: string,
  description?: string,
  image?: Id<"_storage">,
  parentId?: Id<"categories">,
  isActive: boolean,
  sortOrder: number,
  createdAt: number,
  updatedAt: number,
}
```

## API Functions Architecture

### Query Functions (Read Operations)

#### Products
```typescript
// convex/products.ts
export const getProducts = query({
  args: {
    category: v.optional(v.string()),
    search: v.optional(v.string()),
    priceRange: v.optional(v.object({
      min: v.number(),
      max: v.number(),
    })),
    sortBy: v.optional(v.union(
      v.literal("name"),
      v.literal("price"),
      v.literal("rating"),
      v.literal("newest"),
    )),
    limit: v.optional(v.number()),
    offset: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Implementation
  },
});

export const getProduct = query({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    // Implementation
  },
});

export const getFeaturedProducts = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    // Implementation
  },
});
```

#### Users
```typescript
// convex/users.ts
export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    // Implementation with authentication
  },
});

export const getUserProfile = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    // Implementation
  },
});
```

#### Orders
```typescript
// convex/orders.ts
export const getUserOrders = query({
  args: {
    userId: v.id("users"),
    limit: v.optional(v.number()),
    offset: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    // Implementation
  },
});

export const getOrder = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    // Implementation
  },
});
```

### Mutation Functions (Write Operations)

#### Cart Management
```typescript
// convex/cart.ts
export const addToCart = mutation({
  args: {
    productId: v.id("products"),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    // Implementation
  },
});

export const updateCartItem = mutation({
  args: {
    productId: v.id("products"),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    // Implementation
  },
});

export const removeFromCart = mutation({
  args: { productId: v.id("products") },
  handler: async (ctx, args) => {
    // Implementation
  },
});
```

#### Order Processing
```typescript
// convex/orders.ts
export const createOrder = mutation({
  args: {
    items: v.array(v.object({
      productId: v.id("products"),
      quantity: v.number(),
    })),
    deliveryAddress: v.object({
      street: v.string(),
      city: v.string(),
      region: v.string(),
      postalCode: v.optional(v.string()),
      country: v.string(),
      phone: v.string(),
      instructions: v.optional(v.string()),
    }),
    paymentMethod: v.union(
      v.literal("cash_on_delivery"),
      v.literal("orange_money"),
      v.literal("wave"),
      v.literal("card"),
    ),
  },
  handler: async (ctx, args) => {
    // Implementation
  },
});

export const updateOrderStatus = mutation({
  args: {
    orderId: v.id("orders"),
    status: v.union(
      v.literal("pending"),
      v.literal("confirmed"),
      v.literal("processing"),
      v.literal("shipped"),
      v.literal("delivered"),
      v.literal("cancelled"),
    ),
  },
  handler: async (ctx, args) => {
    // Implementation
  },
});
```

## Authentication & Authorization

### Authentication Setup
```typescript
// convex/auth.config.ts
export default {
  providers: [
    {
      domain: process.env.CONVEX_SITE_URL,
      applicationID: "convex",
    },
    {
      domain: process.env.GOOGLE_AUTH_DOMAIN,
      applicationID: "google",
    },
    {
      domain: process.env.FACEBOOK_AUTH_DOMAIN,
      applicationID: "facebook",
    },
  ],
};
```

### Authorization Middleware
```typescript
// convex/lib/auth.ts
export async function requireAuth(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new Error("Authentication required");
  }
  return identity;
}

export async function requireAdmin(ctx: QueryCtx | MutationCtx) {
  const identity = await requireAuth(ctx);
  const user = await ctx.db
    .query("users")
    .withIndex("by_email", (q) => q.eq("email", identity.email))
    .first();
  
  if (!user || user.role !== "admin") {
    throw new Error("Admin access required");
  }
  return user;
}
```

## Real-time Features

### Product Updates
```typescript
// convex/products.ts
export const subscribeToProductChanges = query({
  args: { productId: v.id("products") },
  handler: async (ctx, args) => {
    // Real-time product updates
  },
});
```

### Order Tracking
```typescript
// convex/orders.ts
export const subscribeToOrderUpdates = query({
  args: { orderId: v.id("orders") },
  handler: async (ctx, args) => {
    // Real-time order status updates
  },
});
```

### Cart Synchronization
```typescript
// convex/cart.ts
export const getCart = query({
  args: {},
  handler: async (ctx) => {
    // Real-time cart updates across devices
  },
});
```

## File Storage

### Image Management
```typescript
// convex/files.ts
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

export const deleteFile = mutation({
  args: { fileId: v.id("_storage") },
  handler: async (ctx, args) => {
    await ctx.storage.delete(args.fileId);
  },
});
```

## Performance Optimization

### Indexing Strategy
```typescript
// convex/schema.ts
export default defineSchema({
  products: defineTable({
    // ... fields
  })
    .index("by_category", ["category"])
    .index("by_price", ["price"])
    .index("by_rating", ["rating"])
    .index("by_featured", ["isFeatured"])
    .index("by_active", ["isActive"])
    .searchIndex("search_products", {
      searchField: "name",
      filterFields: ["category", "isActive"],
    }),
  
  orders: defineTable({
    // ... fields
  })
    .index("by_user", ["userId"])
    .index("by_status", ["status"])
    .index("by_date", ["createdAt"]),
  
  // ... other tables
});
```

### Caching Strategy
```typescript
// convex/lib/cache.ts
export const getCachedProducts = query({
  args: {},
  handler: async (ctx) => {
    // Implement caching logic
  },
});
```

## Error Handling

### Structured Error Responses
```typescript
// convex/lib/errors.ts
export class AppError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number = 400
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    return {
      error: error.message,
      code: error.code,
      statusCode: error.statusCode,
    };
  }
  
  return {
    error: "Internal server error",
    code: "INTERNAL_ERROR",
    statusCode: 500,
  };
};
```

## Data Migration

### Migration Scripts
```typescript
// convex/migrations/001_initial_products.ts
export default defineTable({
  name: "products",
  fields: {
    // Migration logic
  },
});
```

## Security Considerations

### Data Validation
```typescript
// convex/lib/validation.ts
export const validateProduct = (product: any) => {
  return v.object({
    name: v.string(),
    price: v.number(),
    category: v.union(
      v.literal("capsules"),
      v.literal("machines"),
      v.literal("accessories")
    ),
    // ... other validations
  }).parse(product);
};
```

### Rate Limiting
```typescript
// convex/lib/rateLimiting.ts
export const rateLimitByUser = async (ctx: QueryCtx | MutationCtx, limit: number) => {
  // Rate limiting implementation
};
```

## Monitoring & Analytics

### Performance Metrics
```typescript
// convex/analytics.ts
export const trackEvent = mutation({
  args: {
    event: v.string(),
    properties: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    // Analytics tracking
  },
});
```

### Health Checks
```typescript
// convex/health.ts
export const healthCheck = query({
  args: {},
  handler: async (ctx) => {
    return {
      status: "healthy",
      timestamp: Date.now(),
      database: "connected",
      auth: "active",
    };
  },
});
```

## Deployment & DevOps

### Environment Configuration
```typescript
// convex/environment.ts
export const config = {
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  apiUrl: process.env.CONVEX_URL,
  authDomain: process.env.AUTH_DOMAIN,
  // ... other config
};
```

### Backup Strategy
```typescript
// convex/backup.ts
export const backupData = mutation({
  args: {},
  handler: async (ctx) => {
    // Backup implementation
  },
});
```

## Testing Strategy

### Unit Tests
```typescript
// convex/tests/products.test.ts
import { test, expect } from "vitest";
import { convexTest } from "convex-test";
import { api } from "./_generated/api";

test("get products", async () => {
  const t = convexTest(schema);
  const products = await t.query(api.products.getProducts, {});
  expect(products).toBeDefined();
});
```

### Integration Tests
```typescript
// convex/tests/orders.integration.test.ts
import { test, expect } from "vitest";
import { convexTest } from "convex-test";
import { api } from "./_generated/api";

test("create order flow", async () => {
  const t = convexTest(schema);
  
  // Create user
  const user = await t.mutation(api.users.createUser, {
    email: "test@example.com",
    name: "Test User",
  });
  
  // Create order
  const order = await t.mutation(api.orders.createOrder, {
    userId: user._id,
    items: [
      { productId: "product1", quantity: 2 },
    ],
    deliveryAddress: {
      street: "123 Test St",
      city: "Dakar",
      region: "Dakar",
      country: "Senegal",
      phone: "+221123456789",
    },
    paymentMethod: "cash_on_delivery",
  });
  
  expect(order).toBeDefined();
  expect(order.status).toBe("pending");
});
```

## Conclusion

This backend architecture provides a solid foundation for the DakarCafé Express e-commerce platform, leveraging Convex's real-time capabilities, built-in authentication, and automatic scaling. The modular design allows for easy maintenance and feature additions while ensuring type safety and performance across both web and mobile applications.

The architecture supports the cultural and business requirements of the West African market while maintaining international standards for scalability and security. The real-time features ensure a smooth user experience across all platforms, while the comprehensive API design provides flexibility for future enhancements.