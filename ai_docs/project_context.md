# DakarCafé Express - Project Context

## Project Overview
DakarCafé Express is a modern e-commerce website that embodies West African coffee culture while maintaining international design standards. The project aims to create a premium yet welcoming digital experience that appeals to both local Senegalese customers and international visitors.

## Current State Analysis

### Technology Stack
- **Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 6.0.4
- **Styling**: Tailwind CSS 3.4.16
- **UI Components**: Shadcn UI with Radix UI primitives
- **Package Manager**: Bun
- **Routing**: React Router DOM 6.8.1

### Current Design Issues
1. **Color Scheme**: Currently using generic dark colors without the specified West African palette
2. **Typography**: Using Avenir Next instead of the specified Poppins font
3. **Cultural Elements**: Lacks Senegalese design motifs and cultural references
4. **Pricing**: Displaying prices in EUR instead of FCFA
5. **Content**: Generic coffee content without West African coffee culture focus
6. **Mobile Optimization**: Not fully optimized for mobile-first design

### Current Structure
- Main component: `ElementLight.tsx` containing all sections
- Modular section components in `src/screens/ElementLight/sections/`
- UI components in `src/components/ui/`
- Product data hardcoded in individual components

## Design Requirements

### Color Palette
- **Primary Color**: Dark brown (#150A05) - representing rich coffee beans and earth
- **Accent Color**: Light bronze/caramel (#B16631) - representing roasted coffee and warmth
- **Supporting Colors**: Warm neutrals and complementary tones

### Typography
- **Primary Font**: Poppins (rounded sans-serif)
- **Characteristics**: Modern, approachable, readable
- **Hierarchy**: Clear visual hierarchy for headings, body text, and UI elements

### Cultural Integration
- **Senegalese Motifs**: Subtle geometric patterns inspired by traditional Senegalese textiles
- **Cultural References**: West African coffee traditions and heritage
- **Localization**: All text in French, prices in FCFA currency

### User Experience
- **Mobile-First**: Responsive design optimized for mobile devices
- **Intuitive Navigation**: Clear information architecture and user flows
- **Premium Feel**: High-quality visuals and smooth interactions
- **Accessibility**: WCAG compliant design

## Target Audience

### Primary Users
- **Local Senegalese**: Coffee enthusiasts and daily consumers
- **West African Diaspora**: Connecting with cultural heritage
- **International Visitors**: Tourists and coffee connoisseurs

### User Goals
- Discover authentic West African coffee products
- Learn about coffee culture and traditions
- Make secure online purchases
- Access product information and reviews

## Business Objectives
- Establish DakarCafé Express as a premium West African coffee brand
- Increase online sales and customer engagement
- Build brand recognition in local and international markets
- Create a memorable digital experience that reflects cultural authenticity

## Success Metrics
- Improved user engagement and time on site
- Increased conversion rates
- Positive user feedback on cultural authenticity
- Mobile performance optimization scores
- Accessibility compliance ratings

## Technical Constraints
- Maintain existing React/TypeScript architecture
- Preserve current component structure where possible
- Ensure backward compatibility with existing data
- Optimize for performance and loading speeds