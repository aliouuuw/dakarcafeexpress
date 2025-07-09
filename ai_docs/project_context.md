# DakarCafé Express - Project Context

## Project Overview
DakarCafé Express is a modern e-commerce platform that embodies West African coffee culture while maintaining international design standards. The project consists of a React web application with a planned React Native mobile app, both sharing a unified Convex backend for seamless data synchronization and authentication.

## Current State Analysis

### Technology Stack
- **Frontend Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 6.0.4
- **Package Manager**: Bun
- **Styling**: Tailwind CSS 3.4.16
- **UI Components**: Shadcn UI with Radix UI primitives
- **Routing**: React Router DOM 6.8.1
- **Animation**: Framer Motion 12.23.0
- **Icons**: Heroicons React 2.2.0

### Backend Architecture (Planned)
- **Database & Backend**: Convex (TypeScript-first backend-as-a-service)
- **Authentication**: Convex Auth (with support for social logins)
- **Real-time Updates**: Built-in with Convex reactive queries
- **File Storage**: Convex file storage for product images
- **API**: Generated TypeScript APIs from Convex functions

### Current Project Structure
```
dakarcafeexpress/
├── src/
│   ├── App.tsx                 # Main app component with routing
│   ├── pages/                  # Page components
│   │   ├── Home/              # Landing page
│   │   │   ├── index.tsx      # Home page main component
│   │   │   └── sections/      # Home page sections
│   │   ├── Boutique/          # Product catalog
│   │   ├── Abonnements/       # Subscription plans
│   │   ├── NotreCafe/         # About coffee/culture
│   │   └── Product/           # Product details
│   ├── components/            # Reusable UI components
│   │   └── ui/               # Shadcn UI components
│   ├── lib/                  # Utilities and helpers
│   └── screens/              # Legacy screen components
├── public/                   # Static assets
├── convex/                   # Backend functions (to be created)
├── tailwind.config.js        # Tailwind configuration
├── package.json             # Dependencies
└── ai_docs/                 # Project documentation
```

### Current Features Implemented
1. **Multi-page Navigation**: Home, Boutique, Abonnements, NotreCafe, Product detail
2. **Responsive Design**: Mobile-first approach with Tailwind CSS
3. **Modern UI Components**: Shadcn UI with Radix primitives
4. **Typography System**: Poppins font integration
5. **Color System**: West African inspired color palette
6. **Interactive Elements**: Floating WhatsApp, navigation, product cards
7. **Cultural Branding**: Senegalese design elements

### Current Design Implementation Status
- ✅ **Color Palette**: West African colors implemented in Tailwind config
- ✅ **Typography**: Poppins font configured as default
- ✅ **Component Structure**: Modular section-based architecture
- ✅ **Responsive Design**: Mobile-first Tailwind implementation
- ⚠️ **Content Localization**: Partially implemented (needs FCFA conversion)
- ⚠️ **Cultural Elements**: Basic implementation (needs enhancement)
- ❌ **Backend Integration**: Not yet implemented
- ❌ **Authentication**: Not yet implemented
- ❌ **Product Management**: Hardcoded data

## Backend Integration Plan with Convex

### Phase 1: Convex Setup & Configuration
1. **Initialize Convex Backend**
   - Install Convex dependencies
   - Set up Convex development environment
   - Configure authentication providers
   - Create initial database schema

2. **Database Schema Design**
   ```typescript
   // Products Schema
   products: {
     id: string,
     name: string,
     description: string,
     price: number, // in FCFA
     originalPrice?: number,
     category: 'capsules' | 'machines' | 'accessoires',
     subcategory?: string,
     images: string[], // Convex file storage IDs
     rating: number,
     reviewCount: number,
     inStock: boolean,
     isNew?: boolean,
     isBestSeller?: boolean,
     tags?: string[],
     createdAt: number,
     updatedAt: number
   }
   
   // Users Schema
   users: {
     id: string,
     email: string,
     name: string,
     phone?: string,
     address?: object,
     preferences?: object,
     createdAt: number,
     updatedAt: number
   }
   
   // Orders Schema
   orders: {
     id: string,
     userId: string,
     items: object[],
     total: number,
     status: 'pending' | 'confirmed' | 'shipped' | 'delivered',
     deliveryAddress: object,
     paymentMethod: 'cash_on_delivery' | 'mobile_money',
     createdAt: number,
     updatedAt: number
   }
   
   // Subscriptions Schema
   subscriptions: {
     id: string,
     userId: string,
     planType: 'basic' | 'premium' | 'enterprise',
     products: string[], // product IDs
     frequency: 'weekly' | 'monthly',
     nextDelivery: number,
     active: boolean,
     createdAt: number,
     updatedAt: number
   }
   ```

### Phase 2: Authentication Integration
1. **User Authentication Setup**
   - Configure Convex Auth with social providers (Google, Facebook)
   - Implement email/password authentication
   - Set up user session management
   - Create authentication middleware

2. **User Management Features**
   - User registration and login
   - Profile management
   - Address book
   - Order history
   - Subscription management

### Phase 3: Product Management System
1. **Product API Functions**
   - Create product CRUD operations
   - Implement product filtering and search
   - Set up product image management
   - Create inventory management

2. **Frontend Integration**
   - Replace hardcoded product data with Convex queries
   - Implement real-time product updates
   - Add product management interface (admin)
   - Create product search functionality

### Phase 4: E-commerce Features
1. **Shopping Cart & Checkout**
   - Cart state management with Convex
   - Checkout process implementation
   - Order management system
   - Payment integration (mobile money, cash on delivery)

2. **Subscription System**
   - Subscription plan management
   - Recurring order processing
   - Subscription billing
   - Customer subscription dashboard

### Phase 5: Mobile App Architecture
1. **React Native App Setup**
   - Create React Native project with Expo
   - Configure Convex client for React Native
   - Set up shared authentication state
   - Implement navigation structure

2. **Shared Backend Benefits**
   - Unified user authentication across platforms
   - Synchronized product catalog
   - Real-time order updates
   - Consistent subscription management
   - Cross-platform cart synchronization

## Mobile App Integration Strategy

### Shared Convex Backend Architecture
```typescript
// Shared Convex functions work across platforms
Web App (React) ←→ Convex Backend ←→ Mobile App (React Native)
                      ↓
                 Shared Database
                 - Users
                 - Products
                 - Orders
                 - Subscriptions
```

### Cross-Platform Features
1. **Authentication**
   - Single sign-on across web and mobile
   - Social login support
   - Session synchronization

2. **Product Catalog**
   - Real-time product updates
   - Consistent pricing and availability
   - Synchronized favorites/wishlist

3. **Shopping Experience**
   - Cross-platform cart synchronization
   - Unified order history
   - Consistent checkout process

4. **Subscription Management**
   - Manage subscriptions from any platform
   - Real-time delivery tracking
   - Unified billing

### Mobile-Specific Features
1. **Push Notifications**
   - Order status updates
   - Subscription reminders
   - Special offers

2. **Offline Capabilities**
   - Cached product catalog
   - Offline cart management
   - Sync when back online

3. **Native Integrations**
   - Camera for product reviews
   - Location services for delivery
   - Native payment methods

## Technical Implementation Details

### Convex Integration Steps
1. **Installation**
   ```bash
   npm install convex
   npx convex dev
   ```

2. **Provider Setup**
   ```typescript
   // src/main.tsx
   import { ConvexProvider, ConvexReactClient } from "convex/react";
   
   const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL);
   
   <ConvexProvider client={convex}>
     <App />
   </ConvexProvider>
   ```

3. **Authentication Configuration**
   ```typescript
   // convex/auth.config.ts
   export default {
     providers: [
       {
         domain: "https://your-auth-domain.com",
         applicationID: "convex",
       },
     ],
   };
   ```

### Data Flow Architecture
```
User Action → React Component → Convex Hook → Convex Function → Database
    ↓
Real-time Updates ← Reactive Query ← Database Change
```

## Development Workflow

### Current Development Process
1. **Frontend Development**
   - Component-based architecture
   - Tailwind CSS for styling
   - TypeScript for type safety
   - Vite for fast development

2. **Backend Development (Planned)**
   - Convex functions for API endpoints
   - TypeScript for backend logic
   - Automatic API generation
   - Real-time database updates

### Testing Strategy
1. **Frontend Testing**
   - Component unit tests
   - Integration tests for user flows
   - E2E testing for critical paths

2. **Backend Testing**
   - Convex function unit tests
   - Database schema validation
   - API endpoint testing

## Performance Considerations

### Web Application
- **Bundle Optimization**: Vite's tree-shaking and code splitting
- **Image Optimization**: Convex file storage with optimization
- **Lazy Loading**: Component and route-based code splitting
- **Caching Strategy**: Convex's automatic caching

### Mobile Application
- **Bundle Size**: Optimized React Native bundles
- **Image Caching**: Native image caching strategies
- **Offline Support**: Convex offline sync capabilities
- **Performance Monitoring**: Real-time performance tracking

## Security Implementation

### Authentication Security
- **JWT Token Management**: Secure token storage and rotation
- **Session Security**: Automatic session timeout and renewal
- **Multi-Factor Authentication**: Optional 2FA for enhanced security

### Data Security
- **Input Validation**: Server-side validation for all inputs
- **Data Encryption**: Encrypted data at rest and in transit
- **Access Control**: Role-based access control (RBAC)
- **Audit Logging**: Comprehensive activity logging

## Scalability Planning

### Database Scalability
- **Convex Auto-scaling**: Automatic scaling based on usage
- **Query Optimization**: Efficient database queries and indexing
- **Caching Strategy**: Multi-level caching for performance

### Application Scalability
- **Microservices Architecture**: Modular Convex functions
- **Load Distribution**: Convex's built-in load balancing
- **CDN Integration**: Global content delivery for assets

## Cultural Integration Requirements

### West African Market Adaptation
- **Currency**: FCFA pricing throughout the application
- **Payment Methods**: Mobile money integration (Orange Money, Wave)
- **Delivery Options**: Local delivery services integration
- **Language**: French language support with cultural context

### Cultural Design Elements
- **Color Palette**: Earth tones reflecting African heritage
- **Typography**: Readable fonts suitable for French content
- **Imagery**: Local coffee culture and Senegalese aesthetics
- **UX Patterns**: Culturally appropriate user interactions

## Success Metrics

### Technical Metrics
- **Performance**: Page load times, API response times
- **Reliability**: Uptime, error rates, recovery times
- **Security**: Security audit results, vulnerability assessments
- **Scalability**: Concurrent user capacity, resource utilization

### Business Metrics
- **User Engagement**: Session duration, page views, conversion rates
- **Cross-Platform Usage**: Web vs mobile usage patterns
- **Subscription Growth**: Subscription acquisition and retention rates
- **Revenue**: Sales growth, average order value, customer lifetime value

## Future Enhancements

### Advanced Features
1. **AI-Powered Recommendations**: Personalized product suggestions
2. **Advanced Analytics**: Customer behavior analysis
3. **Inventory Management**: Automated stock management
4. **Loyalty Program**: Customer rewards and incentives
5. **Multi-Language Support**: Additional West African languages

### Integration Possibilities
1. **Payment Gateways**: Additional payment method integrations
2. **Delivery Services**: Third-party delivery service APIs
3. **Marketing Tools**: Email marketing and SMS campaigns
4. **Analytics Platforms**: Advanced business intelligence tools
5. **Customer Support**: Live chat and support ticket systems

This comprehensive architecture ensures a scalable, maintainable, and culturally appropriate e-commerce platform that serves both web and mobile users through a unified Convex backend.