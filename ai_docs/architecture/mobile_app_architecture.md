# DakarCafé Express - Mobile App Architecture Documentation

## Overview

This document outlines the comprehensive mobile app architecture for DakarCafé Express, built with React Native and Expo, sharing a unified Convex backend with the web application. The architecture is designed to provide a native mobile experience while maintaining feature parity and real-time synchronization with the web platform.

## Architecture Principles

### 1. Cross-Platform Consistency
- Shared business logic between iOS and Android
- Consistent user experience across platforms
- Unified data layer with web application

### 2. Native Performance
- Platform-specific optimizations
- Efficient image loading and caching
- Smooth animations and transitions

### 3. Offline Capabilities
- Local data persistence
- Offline cart management
- Sync when connectivity restored

### 4. Real-time Synchronization
- Shared Convex backend with web app
- Live updates across all user devices
- Consistent state management

## Mobile App Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Mobile Application                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                  Presentation Layer                         │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │ │
│  │  │   Screens   │  │ Components  │  │ Navigation  │         │ │
│  │  │ (Pages)     │  │ (Reusable)  │  │ (Stack/Tab) │         │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                 │                               │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                   Business Logic Layer                     │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │ │
│  │  │   Hooks     │  │   Context   │  │ Utilities   │         │ │
│  │  │ (Custom)    │  │ (State)     │  │ (Helpers)   │         │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                 │                               │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                     Data Layer                              │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │ │
│  │  │   Convex    │  │   Storage   │  │    Cache    │         │ │
│  │  │ (Backend)   │  │ (AsyncStorage)│  │ (Images)   │         │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                 │                               │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                   Platform Layer                            │ │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │ │
│  │  │    iOS      │  │   Android   │  │    Expo     │         │ │
│  │  │ (Native)    │  │ (Native)    │  │ (Services)  │         │ │
│  │  └─────────────┘  └─────────────┘  └─────────────┘         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Shared Convex Backend                       │
│                     (Same as Web App)                          │
└─────────────────────────────────────────────────────────────────┘
```

## Project Structure

```
dakarcafe-mobile/
├── app/                          # Expo Router app directory
│   ├── (tabs)/                   # Tab navigation
│   │   ├── index.tsx             # Home screen
│   │   ├── boutique.tsx          # Products screen
│   │   ├── cart.tsx              # Cart screen
│   │   └── profile.tsx           # Profile screen
│   ├── (modals)/                 # Modal screens
│   │   ├── login.tsx             # Login modal
│   │   ├── product.tsx           # Product detail modal
│   │   └── checkout.tsx          # Checkout modal
│   ├── _layout.tsx               # Root layout
│   └── +not-found.tsx            # 404 screen
├── components/                   # Reusable components
│   ├── ui/                       # Base UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   └── Loading.tsx
│   ├── product/                  # Product components
│   │   ├── ProductCard.tsx
│   │   ├── ProductList.tsx
│   │   └── ProductDetail.tsx
│   ├── cart/                     # Cart components
│   │   ├── CartItem.tsx
│   │   ├── CartSummary.tsx
│   │   └── CartEmpty.tsx
│   └── common/                   # Common components
│       ├── Header.tsx
│       ├── SearchBar.tsx
│       └── FloatingWhatsApp.tsx
├── hooks/                        # Custom hooks
│   ├── useAuth.ts                # Authentication hook
│   ├── useCart.ts                # Cart management hook
│   ├── useProducts.ts            # Product queries hook
│   └── useOrders.ts              # Order management hook
├── contexts/                     # React contexts
│   ├── AuthContext.tsx           # Authentication context
│   ├── CartContext.tsx           # Cart context
│   └── ThemeContext.tsx          # Theme context
├── utils/                        # Utility functions
│   ├── formatting.ts             # Currency/date formatting
│   ├── validation.ts             # Form validation
│   ├── storage.ts                # AsyncStorage wrapper
│   └── constants.ts              # App constants
├── styles/                       # Style definitions
│   ├── colors.ts                 # Color palette
│   ├── typography.ts             # Typography system
│   └── spacing.ts                # Spacing system
├── convex/                       # Shared backend (symlinked)
│   └── ...                       # Same as web app
├── assets/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── fonts/
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
└── README.md                     # Documentation
```

## Key Technologies

### Core Framework
- **React Native**: 0.72.x
- **Expo**: ~49.0.0
- **TypeScript**: 5.x
- **Expo Router**: File-based navigation

### Backend Integration
- **Convex**: Shared backend with web app
- **Real-time Updates**: Reactive queries
- **Authentication**: Convex Auth

### UI & Styling
- **NativeWind**: Tailwind CSS for React Native
- **Expo Icons**: Vector icons
- **React Native Reanimated**: Animations
- **React Native Gesture Handler**: Touch interactions

### Storage & Persistence
- **AsyncStorage**: Local data persistence
- **Expo SecureStore**: Secure credential storage
- **React Native MMKV**: High-performance storage

### Device Features
- **Expo Camera**: Product photo reviews
- **Expo Location**: Delivery tracking
- **Expo Notifications**: Push notifications
- **Expo Haptics**: Tactile feedback

## Screen Architecture

### Navigation Structure
```typescript
// app/_layout.tsx
import { Stack } from 'expo-router';
import { ConvexProvider } from 'convex/react';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <AuthProvider>
        <CartProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(modals)" options={{ presentation: 'modal' }} />
          </Stack>
        </CartProvider>
      </AuthProvider>
    </ConvexProvider>
  );
}
```

### Home Screen
```typescript
// app/(tabs)/index.tsx
import React from 'react';
import { ScrollView, View } from 'react-native';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { Categories } from '@/components/home/Categories';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white">
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
    </ScrollView>
  );
}
```

### Product Catalog Screen
```typescript
// app/(tabs)/boutique.tsx
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useProducts } from '@/hooks/useProducts';
import { ProductCard } from '@/components/product/ProductCard';
import { SearchBar } from '@/components/common/SearchBar';
import { FilterButtons } from '@/components/product/FilterButtons';

export default function BoutiqueScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { products, loading } = useProducts({
    search: searchQuery,
    category: selectedCategory,
  });

  return (
    <View className="flex-1 bg-white">
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Rechercher des produits..."
      />
      <FilterButtons
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={(item) => item._id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
```

### Cart Screen
```typescript
// app/(tabs)/cart.tsx
import React from 'react';
import { View, FlatList } from 'react-native';
import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { CartEmpty } from '@/components/cart/CartEmpty';
import { CheckoutButton } from '@/components/cart/CheckoutButton';

export default function CartScreen() {
  const { cart, loading, updateQuantity, removeItem } = useCart();

  if (loading) {
    return <LoadingScreen />;
  }

  if (!cart?.items.length) {
    return <CartEmpty />;
  }

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={cart.items}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onUpdateQuantity={updateQuantity}
            onRemove={removeItem}
          />
        )}
        keyExtractor={(item) => item.productId}
        contentContainerStyle={{ padding: 16 }}
      />
      <CartSummary cart={cart} />
      <CheckoutButton cart={cart} />
    </View>
  );
}
```

## Data Management

### Convex Integration
```typescript
// hooks/useProducts.ts
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

export function useProducts(filters?: {
  search?: string;
  category?: string;
  priceRange?: { min: number; max: number };
}) {
  const products = useQuery(api.products.getProducts, filters);
  
  return {
    products: products || [],
    loading: products === undefined,
  };
}
```

### Cart Management
```typescript
// hooks/useCart.ts
import { useQuery, useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export function useCart() {
  const cart = useQuery(api.cart.getCart);
  const addToCart = useMutation(api.cart.addToCart);
  const updateQuantity = useMutation(api.cart.updateCartItem);
  const removeItem = useMutation(api.cart.removeFromCart);

  return {
    cart,
    loading: cart === undefined,
    addToCart,
    updateQuantity,
    removeItem,
  };
}
```

### Authentication
```typescript
// contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuth as useConvexAuth } from 'convex/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const convexAuth = useConvexAuth();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize auth state
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('auth_token');
      if (token) {
        // Validate token and set user
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    // Implementation
  };

  const logout = async () => {
    // Implementation
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!user,
      user,
      login,
      logout,
      loading,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
```

## Component Architecture

### Product Card Component
```typescript
// components/product/ProductCard.tsx
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { router } from 'expo-router';
import { formatPrice } from '@/utils/formatting';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handlePress = () => {
    router.push(`/(modals)/product?id=${product._id}`);
  };

  const handleAddToCart = () => {
    addToCart({ productId: product._id, quantity: 1 });
  };

  return (
    <Pressable
      onPress={handlePress}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 m-2"
    >
      <Image
        source={{ uri: product.images[0] }}
        className="w-full h-40 rounded-lg mb-3"
        resizeMode="cover"
      />
      <Text className="text-lg font-semibold text-gray-900 mb-1">
        {product.name}
      </Text>
      <Text className="text-sm text-gray-600 mb-2">
        {product.shortDescription}
      </Text>
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-bold text-dakarcafe-accent">
          {formatPrice(product.price)}
        </Text>
        <Pressable
          onPress={handleAddToCart}
          className="bg-dakarcafe-primary px-4 py-2 rounded-lg"
        >
          <Text className="text-white font-medium">Ajouter</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
```

### Search Bar Component
```typescript
// components/common/SearchBar.tsx
import React from 'react';
import { View, TextInput } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChangeText, placeholder }: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 mx-4 my-2">
      <MagnifyingGlassIcon size={20} color="#666" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="flex-1 ml-3 text-base text-gray-900"
        placeholderTextColor="#666"
      />
    </View>
  );
}
```

## Native Features Integration

### Push Notifications
```typescript
// utils/notifications.ts
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export async function registerForPushNotificationsAsync() {
  let token;
  
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus !== 'granted') {
    throw new Error('Failed to get push token for push notification!');
  }
  
  token = (await Notifications.getExpoPushTokenAsync()).data;
  
  return token;
}
```

### Camera Integration
```typescript
// components/camera/CameraScreen.tsx
import React, { useState, useRef } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await MediaLibrary.saveToLibraryAsync(photo.uri);
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-center mb-4">
          Nous avons besoin de votre permission pour utiliser la caméra
        </Text>
        <Pressable onPress={requestPermission} className="bg-blue-500 px-4 py-2 rounded">
          <Text className="text-white">Autoriser la caméra</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Camera className="flex-1" type={type} ref={cameraRef}>
        <View className="flex-1 bg-transparent justify-end items-center pb-8">
          <Pressable
            onPress={takePicture}
            className="bg-white w-16 h-16 rounded-full items-center justify-center"
          >
            <View className="bg-black w-12 h-12 rounded-full" />
          </Pressable>
        </View>
      </Camera>
    </View>
  );
}
```

## Offline Capabilities

### Offline Storage
```typescript
// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export class OfflineStorage {
  static async storeData(key: string, value: any) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }

  static async getData(key: string) {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
      return null;
    }
  }

  static async removeData(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
    }
  }
}
```

### Offline Cart Management
```typescript
// hooks/useOfflineCart.ts
import { useState, useEffect } from 'react';
import { OfflineStorage } from '@/utils/storage';
import NetInfo from '@react-native-community/netinfo';

export function useOfflineCart() {
  const [offlineCart, setOfflineCart] = useState<CartItem[]>([]);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected || false);
      
      if (state.isConnected) {
        syncOfflineCart();
      }
    });

    loadOfflineCart();

    return () => unsubscribe();
  }, []);

  const loadOfflineCart = async () => {
    const cart = await OfflineStorage.getData('offline_cart');
    if (cart) {
      setOfflineCart(cart);
    }
  };

  const syncOfflineCart = async () => {
    if (offlineCart.length > 0) {
      // Sync with Convex backend
      try {
        // Implementation
        await OfflineStorage.removeData('offline_cart');
        setOfflineCart([]);
      } catch (error) {
        console.error('Sync error:', error);
      }
    }
  };

  return {
    offlineCart,
    isOnline,
    addToOfflineCart: (item: CartItem) => {
      const updatedCart = [...offlineCart, item];
      setOfflineCart(updatedCart);
      OfflineStorage.storeData('offline_cart', updatedCart);
    },
  };
}
```

## Performance Optimization

### Image Optimization
```typescript
// components/ui/OptimizedImage.tsx
import React from 'react';
import { Image, ImageProps } from 'react-native';
import { useState } from 'react';

interface OptimizedImageProps extends ImageProps {
  source: { uri: string };
  placeholder?: string;
}

export function OptimizedImage({ source, placeholder, ...props }: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Image
      {...props}
      source={source}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
      onError={() => setError(true)}
      style={[
        props.style,
        { opacity: loading ? 0.5 : 1 },
      ]}
    />
  );
}
```

### List Optimization
```typescript
// components/product/ProductList.tsx
import React, { memo } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { Product } from '@/types';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
  onEndReached?: () => void;
}

const ProductItem = memo<{ item: Product }>(({ item }) => (
  <ProductCard product={item} />
));

export function ProductList({ products, onEndReached }: ProductListProps) {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductItem item={item} />
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      numColumns={2}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.1}
      removeClippedSubviews={true}
      maxToRenderPerBatch={10}
      updateCellsBatchingPeriod={50}
      initialNumToRender={10}
      windowSize={10}
    />
  );
}
```

## Security Implementation

### Secure Storage
```typescript
// utils/secureStorage.ts
import * as SecureStore from 'expo-secure-store';

export class SecureStorage {
  static async setItem(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error('Error storing secure data:', error);
    }
  }

  static async getItem(key: string): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error('Error retrieving secure data:', error);
      return null;
    }
  }

  static async deleteItem(key: string) {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error('Error deleting secure data:', error);
    }
  }
}
```

### API Security
```typescript
// utils/api.ts
import { SecureStorage } from './secureStorage';

export class ApiClient {
  private static async getAuthToken(): Promise<string | null> {
    return await SecureStorage.getItem('auth_token');
  }

  static async secureRequest(url: string, options: RequestInit = {}) {
    const token = await this.getAuthToken();
    
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    };

    return fetch(url, {
      ...options,
      headers,
    });
  }
}
```

## Testing Strategy

### Component Testing
```typescript
// components/__tests__/ProductCard.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ProductCard } from '../product/ProductCard';

const mockProduct = {
  _id: '1',
  name: 'Test Product',
  price: 5000,
  images: ['test-image.jpg'],
  shortDescription: 'Test description',
};

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);
    
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('Test description')).toBeTruthy();
    expect(getByText('5.000 FCFA')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);
    const addButton = getByText('Ajouter');
    
    fireEvent.press(addButton);
    // Add assertions for expected behavior
  });
});
```

### Integration Testing
```typescript
// __tests__/cart.integration.test.tsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { CartProvider } from '@/contexts/CartContext';
import { CartScreen } from '@/app/(tabs)/cart';

describe('Cart Integration', () => {
  it('adds product to cart and displays in cart screen', async () => {
    const { getByText, getByTestId } = render(
      <CartProvider>
        <CartScreen />
      </CartProvider>
    );

    // Add product to cart
    fireEvent.press(getByTestId('add-to-cart-button'));

    // Wait for cart to update
    await waitFor(() => {
      expect(getByText('Test Product')).toBeTruthy();
    });
  });
});
```

## Deployment

### App Configuration
```json
// app.json
{
  "expo": {
    "name": "DakarCafé Express",
    "slug": "dakarcafe-express",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#150A05"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.dakarcafe.express"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#150A05"
      },
      "package": "com.dakarcafe.express"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router",
      "expo-secure-store",
      "expo-camera",
      "expo-location"
    ]
  }
}
```

### Build Configuration
```json
// eas.json
{
  "cli": {
    "version": ">= 5.4.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {}
  },
  "submit": {
    "production": {}
  }
}
```

## Monitoring & Analytics

### Performance Monitoring
```typescript
// utils/performance.ts
import { Performance } from 
