import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavigationHeader } from "../Home/sections/NavigationHeader";
import { Footer } from "../Home/sections/Footer";
import { FloatingWhatsApp } from "../Home/sections/FloatingWhatsApp";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  StarIcon,
  ShoppingCartIcon,
  HeartIcon,
  TruckIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon as HeartOutlineIcon,
  ShareIcon as ShareOutlineIcon,
} from "@heroicons/react/24/outline";

interface ProductDetail {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  intensity: number;
  inStock: boolean;
  stockQuantity: number;
  rating: number;
  reviewCount: number;
  images: string[];
  tags: string[];
  specifications: {
    origin: string;
    roastLevel: string;
    notes: string[];
    compatibility: string[];
    packaging: string;
    weight: string;
  };
  isNew?: boolean;
  isBestSeller?: boolean;
  reviews: Array<{
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
    verified: boolean;
  }>;
  relatedProducts: string[];
}

// Mock product data - in a real app, this would come from an API
const mockProduct: ProductDetail = {
  id: "1",
  name: "Arpeggio",
  category: "Capsules",
  description: "Intense et crémeux avec des notes de cacao",
  longDescription: "Arpeggio est un café intense et crémeux aux notes de cacao prononcées. Cette sélection premium combine des grains d'Amérique du Sud et d'Amérique Centrale pour créer un espresso riche et équilibré. Son profil aromatique complexe révèle des nuances de chocolat noir et de fruits secs, parfait pour les amateurs de café corsé.",
  price: 3500,
  originalPrice: 4000,
  intensity: 9,
  inStock: true,
  stockQuantity: 45,
  rating: 4.8,
  reviewCount: 124,
  images: [
    "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ],
  tags: ["Intense", "Chocolat", "Premium", "Espresso"],
  specifications: {
    origin: "Costa Rica & Guatemala",
    roastLevel: "Torréfaction foncée",
    notes: ["Chocolat noir", "Cacao", "Fruits secs"],
    compatibility: ["Nespresso Original", "Machines compatibles"],
    packaging: "Boîte de 10 capsules",
    weight: "50g",
  },
  isNew: false,
  isBestSeller: true,
  reviews: [
    {
      id: "1",
      author: "Aminata D.",
      rating: 5,
      comment: "Excellent café, très intense comme promis. Je recommande vivement !",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: "2",
      author: "Moussa K.",
      rating: 4,
      comment: "Bon café mais un peu fort pour moi le matin. Parfait pour l'après-midi.",
      date: "2024-01-10",
      verified: true,
    },
  ],
  relatedProducts: ["2", "3", "4"],
};

const formatFCFA = (amount: number) => {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
};

const getDiscountPercentage = (price: number, originalPrice: number) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

  useEffect(() => {
    // Simulate API call
    const loadProduct = async () => {
      setLoading(true);
      // In a real app, you would fetch the product by ID
      await new Promise(resolve => setTimeout(resolve, 500));
      setProduct(mockProduct);
      setLoading(false);
    };

    loadProduct();
  }, [id]);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? (product?.images.length || 1) - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === (product?.images.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, Math.min(product?.stockQuantity || 1, prev + change)));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Adding ${quantity} of ${product?.name} to cart`);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavigationHeader />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B16631]"></div>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavigationHeader />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Produit non trouvé</h1>
          <Button onClick={() => navigate('/boutique')}>
            Retour à la boutique
          </Button>
        </div>
        <Footer />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <button onClick={() => navigate('/')} className="hover:text-[#B16631]">
            Accueil
          </button>
          <span>/</span>
          <button onClick={() => navigate('/boutique')} className="hover:text-[#B16631]">
            Boutique
          </button>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePreviousImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                  >
                    <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                  >
                    <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Nouveau
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="bg-[#B16631] text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Best Seller
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    -{getDiscountPercentage(product.price, product.originalPrice)}%
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex
                        ? 'border-[#B16631]'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleWishlistToggle}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {isWishlisted ? (
                      <HeartIcon className="w-5 h-5 text-red-500" />
                    ) : (
                      <HeartOutlineIcon className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ShareOutlineIcon className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviewCount} avis)
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#B16631]/10 text-[#B16631] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  {formatFCFA(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {formatFCFA(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Intensity */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    Intensité
                  </span>
                  <span className="text-sm text-[#B16631] font-semibold bg-[#B16631]/10 px-2 py-1 rounded-full">
                    {product.intensity}/10
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#B16631] to-[#8B4F26] transition-all duration-500 ease-out"
                      style={{ width: `${(product.intensity / 10) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center mb-6">
                {product.inStock ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm">
                      En stock ({product.stockQuantity} disponibles)
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600">
                    <XCircleIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm">Rupture de stock</span>
                  </div>
                )}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-sm text-gray-700">Quantité:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= product.stockQuantity}
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full mb-4"
                disabled={!product.inStock}
              >
                <ShoppingCartIcon className="w-5 h-5 mr-2" />
                {product.inStock ? 'Ajouter au panier' : 'Indisponible'}
              </Button>

              {/* Delivery Info */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center text-green-800">
                  <TruckIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">
                    Livraison gratuite à Dakar pour les commandes de 25,000 FCFA+
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'specifications', label: 'Spécifications' },
                { id: 'reviews', label: `Avis (${product.reviewCount})` },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-[#B16631] text-[#B16631]'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Caractéristiques</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Origine:</dt>
                      <dd className="text-gray-900">{product.specifications.origin}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Torréfaction:</dt>
                      <dd className="text-gray-900">{product.specifications.roastLevel}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Conditionnement:</dt>
                      <dd className="text-gray-900">{product.specifications.packaging}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Poids:</dt>
                      <dd className="text-gray-900">{product.specifications.weight}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Notes de dégustation</h3>
                  <div className="space-y-2">
                    {product.specifications.notes.map((note, index) => (
                      <span
                        key={index}
                        className="inline-block bg-[#B16631]/10 text-[#B16631] px-3 py-1 rounded-full text-sm mr-2"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-4 mt-6">Compatibilité</h3>
                  <div className="space-y-2">
                    {product.specifications.compatibility.map((comp, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <Card key={review.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{review.author}</h4>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Achat vérifié
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Product;
