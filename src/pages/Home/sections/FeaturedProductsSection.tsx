import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { CoffeeCupIcon } from "./CoffeeCupIcon";
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  origin: string;
  description: string;
  price: number;
  originalPrice?: number;
  intensity: number;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
  category: string;
}

const productData: Product[] = [
  {
    id: "1",
    name: "Arpeggio",
    origin: "Costa Rica & Guatemala",
    description: "Intense et crémeux avec des notes de cacao",
    price: 3500,
    originalPrice: 4000,
    intensity: 9,
    inStock: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 124,
    category: "Capsules",
  },
  {
    id: "2",
    name: "Ristretto",
    origin: "Colombie & Kenya",
    description: "Puissant et contrasté avec une touche fruitée",
    price: 3500,
    intensity: 10,
    inStock: true,
    isNew: true,
    isBestSeller: false,
    rating: 4.6,
    reviewCount: 89,
    category: "Capsules",
  },
  {
    id: "3",
    name: "Livanto",
    origin: "Brésil & Costa Rica",
    description: "Rond et équilibré avec des notes caramélisées",
    price: 3500,
    intensity: 6,
    inStock: false,
    isNew: false,
    isBestSeller: false,
    rating: 4.4,
    reviewCount: 67,
    category: "Capsules",
  },
  {
    id: "4",
    name: "Volluto",
    origin: "Brésil & Colombie",
    description: "Doux et léger avec des notes biscuitées",
    price: 3500,
    intensity: 4,
    inStock: true,
    isNew: false,
    isBestSeller: false,
    rating: 4.2,
    reviewCount: 45,
    category: "Capsules",
  },
];

const formatFCFA = (amount: number) => {
  return `${amount.toLocaleString("fr-FR")} FCFA`;
};

const getDiscountPercentage = (price: number, originalPrice: number) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};

export const FeaturedProductsSection: React.FC = () => {
  return (
    <section
      id="produits"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative z-[1]"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#150A05] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nos Produits les Plus Vendus
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Découvrez notre sélection de capsules et machines compatibles
            Nespresso avec livraison rapide à Dakar
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
        >
          {productData.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -5 }}
            >
              <Card>
                {/* Product Image */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  {/* Placeholder image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#150A05] to-[#2A1410] flex items-center justify-center">
                    <CoffeeCupIcon className="w-12 h-12 sm:w-16 sm:h-16 opacity-20 text-white" />
                  </div>

                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-1 sm:gap-2">
                    {product.isNew && (
                      <motion.span
                        className="bg-green-600 text-white text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        Nouveau
                      </motion.span>
                    )}
                    {product.isBestSeller && (
                      <motion.span
                        className="bg-[#B16631] text-white text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        Best Seller
                      </motion.span>
                    )}
                    {product.originalPrice && (
                      <motion.span
                        className="bg-red-600 text-white text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3,
                          scale: { duration: 2, repeat: Infinity, delay: 2 },
                        }}
                      >
                        -
                        {getDiscountPercentage(
                          product.price,
                          product.originalPrice,
                        )}
                        %
                      </motion.span>
                    )}
                    {!product.inStock && (
                      <motion.span
                        className="bg-gray-600 text-white text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        Rupture
                      </motion.span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <motion.button
                    className="absolute top-2 right-2 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-red-500 transition-colors" />
                  </motion.button>

                  {/* Quick Add Button */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0"
                    initial={{ y: "100%" }}
                    animate={{ y: "100%" }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button
                        className="w-full rounded-none bg-[#B16631] hover:bg-[#8B4F26] text-white py-2 sm:py-3 text-sm sm:text-base"
                        disabled={!product.inStock}
                      >
                        <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                        <span className="hidden sm:inline">
                          {product.inStock
                            ? "Ajouter au panier"
                            : "Indisponible"}
                        </span>
                        <span className="sm:hidden">
                          {product.inStock ? "Ajouter" : "Indisponible"}
                        </span>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">
                  {/* Category */}
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {product.category}
                  </p>

                  {/* Product Name */}
                  <h3 className="font-semibold text-sm sm:text-base text-[#150A05] mb-2 line-clamp-1 group-hover:text-[#B16631] transition-colors">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>

                  {/* Origin */}
                  <p className="text-xs text-[#B16631] font-medium uppercase tracking-wide mb-2">
                    {product.origin}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.5 + i * 0.05 }}
                        >
                          <StarIcon
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-2 sm:mb-3">
                    <span className="text-lg sm:text-xl font-bold text-[#150A05]">
                      {formatFCFA(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs sm:text-sm text-gray-500 line-through">
                        {formatFCFA(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Intensity */}
                  <div className="pt-2 sm:pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                        Intensité
                      </span>
                      <span className="text-xs text-[#B16631] font-semibold bg-[#B16631]/10 px-2 py-1 rounded-full">
                        {product.intensity}/10
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#B16631] to-[#8B4F26]"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${(product.intensity / 10) * 100}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full transition-all duration-300 ${
                                i < Math.ceil(product.intensity / 2)
                                  ? "bg-white shadow-sm"
                                  : "bg-transparent"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
