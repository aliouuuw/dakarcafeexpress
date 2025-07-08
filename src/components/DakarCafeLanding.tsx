import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { formatFCFA, productData } from "../lib/dakar-utils";
import { useState } from "react";
import {
  ArrowDownTrayIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  ShoppingCartIcon,
  UserIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

// Custom Coffee Cup SVG Component
const CoffeeCupIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 11h14l-1 7.5c-.5 2.5-2.5 3.5-5 3.5h-2c-2.5 0-4.5-1-5-3.5L5 11z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 11v-1c0-2.5-2-4.5-4.5-4.5h-1c-2.5 0-4.5 2-4.5 4.5v1"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11h1c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5h-1"
    />
  </svg>
);

export const DakarCafeLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 !z-[99997]">
        {/* Top announcement bar */}
        <div className="bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white text-center py-2 text-sm">
          <span className="font-medium">
            🚚 Livraison gratuite à Dakar pour les commandes de 25,000 FCFA+
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-fit">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 md:w-24 md:h-24 rounded-md flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Dakar Café Express Logo"
                  className="w-auto h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-[#150A05]">
                  Dakar Café Express
                </span>
                <span className="text-xs text-gray-600 hidden sm:block">
                  Capsules & Machines Nespresso
                </span>
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-md lg:max-w-lg mx-4 lg:mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Rechercher capsules, machines..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:border-[#B16631] focus:ring-1 focus:ring-[#B16631] text-sm"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="#machines"
                className="text-[#150A05] hover:text-[#B16631] font-medium transition-colors text-sm whitespace-nowrap"
              >
                Machines
              </a>
              <a
                href="#capsules"
                className="text-[#150A05] hover:text-[#B16631] font-medium transition-colors text-sm whitespace-nowrap"
              >
                Capsules
              </a>
              <a
                href="#accessoires"
                className="text-[#150A05] hover:text-[#B16631] font-medium transition-colors text-sm whitespace-nowrap"
              >
                Accessoires
              </a>
              <a
                href="#promotions"
                className="text-[#B16631] hover:text-[#8F4F26] font-medium transition-colors text-sm whitespace-nowrap"
              >
                Promotions
              </a>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Mobile search */}
              <Button variant="ghost" size="icon" className="md:hidden">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </Button>

              {/* User Account */}
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <UserIcon className="w-5 h-5" />
              </Button>

              {/* Shopping Cart */}
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCartIcon className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B16631] text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-5 h-5" />
                ) : (
                  <Bars3Icon className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="h-screen">
            {/* Backdrop */}
            <div
              className="fixed h-full inset-0 bg-black/50 !z-[99998]"
              style={{ zIndex: 999998 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <div
              className="fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-xl !z-[99999] transform transition-transform duration-300 overflow-y-auto"
              style={{ zIndex: 999999 }}
            >
              <div className="p-6 space-y-6 h-full">
                {/* Close button */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-[#150A05]">Menu</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Search */}
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Rechercher..."
                    className="w-full pl-10 pr-4 py-2"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>

                {/* User Account */}
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <UserIcon className="w-8 h-8 text-gray-600" />
                  <div>
                    <p className="font-medium text-[#150A05]">Mon Compte</p>
                    <p className="text-sm text-gray-500">Connectez-vous</p>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-4">
                  <a
                    href="#machines"
                    className="block px-4 py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ☕ Machines à Café
                  </a>
                  <a
                    href="#capsules"
                    className="block px-4 py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🎯 Capsules
                  </a>
                  <a
                    href="#accessoires"
                    className="block px-4 py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🛍️ Accessoires
                  </a>
                  <a
                    href="#promotions"
                    className="block px-4 py-3 text-[#B16631] hover:bg-orange-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    🔥 Promotions
                  </a>
                </nav>

                {/* Quick Actions */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <HeartIcon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-600">Mes Favoris</span>
                    </div>
                    <span className="text-xs bg-[#B16631] text-white px-2 py-1 rounded-full">
                      2
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <ShoppingCartIcon className="w-5 h-5 text-gray-600" />
                      <span className="text-sm text-gray-600">Mon Panier</span>
                    </div>
                    <span className="text-xs bg-[#B16631] text-white px-2 py-1 rounded-full">
                      3
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3 pt-4">
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Commander Maintenant
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    📱 Télécharger l'App
                  </Button>
                </div>

                {/* Support */}
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-green-800">
                      Support WhatsApp
                    </p>
                    <p className="text-sm text-green-600">Aide instantanée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned */}
      <section
        className="pt-24 sm:pt-28 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white relative z-[1] overflow-hidden min-h-[90vh]"
        style={{ zIndex: 1 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B16631]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh] py-12">
            {/* Left Content */}
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/20 backdrop-blur-sm text-[#B16631] text-sm font-medium rounded-full border border-[#B16631]/30">
                  ✨ Votre marketplace 100% sénégalaise
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.9]">
                  Le Café
                  <br />
                  <span className="font-medium text-[#B16631]">Premium</span>
                  <br />
                  <span className="font-semibold">à votre porte</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                  Découvrez notre sélection exclusive de capsules et machines
                  Nespresso, livrées rapidement partout à Dakar.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="group shadow-lg hover:shadow-xl bg-[#B16631] hover:bg-[#D4822A] text-white border-none"
                >
                  <span>Commander Maintenant</span>
                  <ArrowDownTrayIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20"
                >
                  <DevicePhoneMobileIcon className="w-5 h-5 mr-2" />
                  Télécharger l'App
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-6">
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Paiement sécurisé</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Produits certifiés</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Support 7j/7</span>
                </div>
              </div>
            </div>

            {/* Right Content - Enhanced Image Section */}
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-br from-[#B16631]/10 to-[#150A05]/10 rounded-3xl p-2">
                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Expérience café premium"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150A05]/40 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-4 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B16631]/20 to-[#B16631]/10 rounded-lg flex items-center justify-center">
                    <CoffeeCupIcon className="w-7 h-7 text-[#B16631]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-[#150A05] text-sm">
                        Bestseller du mois
                      </h4>
                      <div className="bg-[#B16631] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        -15%
                      </div>
                    </div>
                    <p className="text-xs text-gray-600">Capsules Arpeggio</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-lg font-bold text-[#B16631]">
                        2,975 FCFA
                      </span>
                      <span className="text-xs text-gray-400 line-through">
                        3,500
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Badge */}
              <div className="absolute top-4 right-4 bg-[#150A05]/90 backdrop-blur-sm text-white rounded-xl p-3 shadow-xl">
                <div className="text-center">
                  <div className="text-xl font-bold">30min</div>
                  <div className="text-xs opacity-90">Livraison</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        id="produits"
        className="py-24 bg-white relative z-[1]"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
              Nos Produits les Plus Vendus
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection de capsules et machines compatibles
              Nespresso avec livraison rapide à Dakar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.map((product) => (
              <div
                key={product.id}
                className="group hover:transform hover:scale-[1.02] transition-all duration-500"
              >
                <div className="bg-white border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                  <div className="relative overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-[#F5F5F5] to-[#E5E5E5] flex items-center justify-center">
                      <div className="w-40 h-40 bg-[#150A05] opacity-5"></div>
                    </div>
                    {!product.inStock && (
                      <div className="absolute top-4 left-4 bg-[#150A05] text-white px-4 py-2 text-xs font-medium uppercase tracking-wide">
                        Bientôt disponible
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 bg-white p-3 shadow-lg">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`w-3 h-3 fill-current ${i < product.intensity / 2 ? "text-[#B16631]" : "text-gray-200"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#150A05] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#B16631] font-medium uppercase tracking-wide">
                        {product.origin}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <div className="space-y-3 pt-2">
                      <div className="text-xl font-light text-[#150A05]">
                        {formatFCFA(product.price)}
                      </div>
                      <Button
                        variant={product.inStock ? "default" : "subtle"}
                        size="lg"
                        className="w-full uppercase tracking-wide text-xs"
                        disabled={!product.inStock}
                      >
                        {product.inStock ? "Ajouter au Panier" : "Épuisé"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose DakarCafé Express - Redesigned */}
      <section
        id="pourquoi"
        className="py-24 bg-gradient-to-b from-white to-gray-50 relative z-[1] overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, #B16631 0, #B16631 1px, transparent 1px, transparent 15px)`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
              Pourquoi Choisir DakarCafé Express
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Votre marketplace 100% sénégalaise pour tous vos besoins café avec
              un service premium adapté au marché local.
            </p>
          </div>

          {/* Feature 1: Livraison Rapide - Left Content, Right Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B16631] to-[#D4822A] rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="text-xl font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#150A05] mb-4">
                    Livraison Express à Dakar
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Recevez vos capsules et machines en moins de 2 heures dans
                    tout Dakar. Service de livraison disponible 7j/7 de 8h à
                    22h.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-[#B16631]">
                        30min
                      </div>
                      <div className="text-sm text-gray-600">
                        Livraison moyenne
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-[#B16631]">
                        98%
                      </div>
                      <div className="text-sm text-gray-600">
                        Satisfaction client
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-[#B16631] text-[#B16631] hover:bg-[#B16631] hover:text-white"
                  >
                    <TruckIcon className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Suivre ma livraison
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Livraison rapide Dakar"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#B16631] to-[#D4822A] text-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <TruckIcon className="w-10 h-10" />
                  <div>
                    <div className="font-bold text-lg">Livraison gratuite</div>
                    <div className="text-sm opacity-90">
                      Dès 25,000 FCFA d'achat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Application Mobile - Right Content, Left Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Application mobile Dakar Café Express"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <StarIcon className="w-5 h-5 fill-current" />
                  <span className="font-bold">4.9/5 sur App Store</span>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                        📱
                      </div>
                      <div>
                        <div className="font-semibold text-[#150A05]">
                          Dakar Café Express
                        </div>
                        <div className="text-sm text-gray-600">
                          Télécharger maintenant
                        </div>
                      </div>
                    </div>
                    <Button variant="premium" size="sm">
                      Installer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#150A05] to-[#2a1810] rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="text-xl font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#150A05] mb-4">
                    Application Mobile Intuitive
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Commandez en quelques clics avec notre application iOS.
                    Interface moderne, paiement sécurisé et suivi en temps réel.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-[#B16631]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Nouveau design épuré
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-[#B16631]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Chat WhatsApp intégré
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-[#B16631]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        Historique de commandes
                      </span>
                    </li>
                  </ul>
                  <div className="flex space-x-4">
                    <Button variant="premium" size="lg">
                      <DevicePhoneMobileIcon className="w-5 h-5 mr-2" />
                      App Store
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-[#150A05]"
                    >
                      En savoir plus
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Support WhatsApp - Left Content, Right Image */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg">
                    <span className="text-xl font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#150A05] mb-4">
                    Support Client Instantané
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Une question ? Un problème ? Notre équipe est disponible sur
                    WhatsApp pour vous aider instantanément, 7 jours sur 7.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-800 font-medium">
                        Support en ligne maintenant
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-4">
                      <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-400" />
                      <div>
                        <div className="font-medium text-[#150A05]">
                          Temps de réponse moyen
                        </div>
                        <div className="text-sm text-gray-600">
                          Moins de 2 minutes
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <StarIcon className="w-6 h-6 text-gray-400" />
                      <div>
                        <div className="font-medium text-[#150A05]">
                          Satisfaction support
                        </div>
                        <div className="text-sm text-gray-600">
                          99% de clients satisfaits
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                    Contacter le support
                  </Button>
                </div>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Support client WhatsApp"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute top-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl max-w-xs">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white">
                      <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        Support DakarCafé
                      </div>
                      <div className="text-xs text-gray-500">En ligne</div>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700">
                    Bonjour! Comment puis-je vous aider aujourd'hui? ☕
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What People are Saying Section - Redesigned */}
      <section
        className="py-24 bg-white relative z-[1] overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15 6.716-15 15-15zm0 5c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z' fill='%23B16631' fill-opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/10 text-[#B16631] text-sm font-medium rounded-full mb-4">
              <StarIcon className="w-4 h-4 mr-2 fill-current" />
              Plus de 1000 clients satisfaits
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences de nos clients fidèles à travers Dakar
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Aminata Diop",
                location: "Dakar, Plateau",
                avatar: "AD",
                review:
                  "Livraison super rapide et les capsules sont exactement comme les originales. Le livreur était très professionnel.",
                rating: 5,
                product: "Capsules Arpeggio",
                verified: true,
                date: "Il y a 3 jours",
              },
              {
                name: "Moussa Kane",
                location: "Mermoz",
                avatar: "MK",
                review:
                  "L'app est très facile à utiliser et le support WhatsApp répond rapidement. J'ai reçu ma commande en 30 minutes!",
                rating: 5,
                product: "Machine Essenza Mini",
                verified: true,
                date: "Il y a 1 semaine",
              },
              {
                name: "Fatou Ba",
                location: "Almadies",
                avatar: "FB",
                review:
                  "Excellents prix et paiement à la livraison très pratique. La qualité des capsules est top, je recommande vivement!",
                rating: 5,
                product: "Pack Découverte",
                verified: true,
                date: "Il y a 2 semaines",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B16631] to-[#8F4F26] rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#150A05]">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center text-green-600 text-xs">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Achat vérifié
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="relative">
                        <CoffeeCupIcon
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-[#B16631] fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {testimonial.date}
                  </span>
                </div>

                {/* Review */}
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.review}"
                </blockquote>

                {/* Product */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">A commandé:</span>
                      <span className="font-medium text-[#150A05] ml-1">
                        {testimonial.product}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Voir plus d'avis clients
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Redesigned */}
      <section
        className="py-24 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white relative z-[1] overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B16631]/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/20 text-[#B16631] text-sm font-medium rounded-full">
                  🎉 Offre exclusive
                </div>
                <h2 className="text-4xl md:text-5xl font-light leading-tight">
                  Rejoignez le Club Café
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Plus de 1000 amateurs de café reçoivent nos offres exclusives
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">☕</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      10% de réduction
                    </span>{" "}
                    sur votre première commande
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🚚</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Livraison gratuite
                    </span>{" "}
                    sur les commandes premium
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🎁</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold text-white">
                      Accès anticipé
                    </span>{" "}
                    aux nouveaux produits
                  </p>
                </div>
              </div>

              {/* Trust */}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>✓ Pas de spam</span>
                <span>✓ Désabonnement facile</span>
                <span>✓ Données sécurisées</span>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-medium">
                  Inscrivez-vous maintenant
                </h3>

                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-[#B16631] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <span className="ml-2 text-sm">S'inscrire</span>
                  </div>
                  <div className="flex-1 h-0.5 bg-white/20 mx-2"></div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-sm">
                      2
                    </div>
                    <span className="ml-2 text-sm text-white/60">
                      Confirmer
                    </span>
                  </div>
                  <div className="flex-1 h-0.5 bg-white/20 mx-2"></div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white/60 font-bold text-sm">
                      3
                    </div>
                    <span className="ml-2 text-sm text-white/60">Profiter</span>
                  </div>
                </div>

                {/* Form */}
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Votre prénom"
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#B16631] focus:ring-[#B16631]"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-[#B16631] focus:ring-[#B16631]"
                    />
                  </div>
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full bg-[#B16631] hover:bg-[#D4822A] text-white"
                  >
                    Obtenir mon code -10%
                  </Button>
                </div>

                {/* Discount Preview */}
                <div className="bg-[#B16631]/20 rounded-lg p-4 text-center">
                  <p className="text-sm mb-2">Votre code promo sera:</p>
                  <div className="font-mono text-2xl font-bold text-[#B16631]">
                    BIENVENUE10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section - Redesigned */}
      <section
        className="py-16 bg-gradient-to-b from-gray-50 to-white relative z-[1]"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-medium text-[#150A05] mb-4">
              Commencez votre expérience café
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choisissez la méthode qui vous convient le mieux pour commander
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Quick Order */}
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300">
                <div className="w-16 h-16 bg-[#B16631]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#B16631]/20 transition-colors">
                  <ShoppingCartIcon className="w-8 h-8 text-[#B16631]" />
                </div>
                <h4 className="font-semibold text-[#150A05] mb-2">
                  Commander Rapidement
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Parcourez notre catalogue et commandez en quelques clics
                </p>
                <Button variant="default" className="w-full">
                  Voir le catalogue
                </Button>
              </div>
            </div>

            {/* Mobile App */}
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300">
                <div className="w-16 h-16 bg-[#150A05]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#150A05]/20 transition-colors">
                  <DevicePhoneMobileIcon className="w-8 h-8 text-[#150A05]" />
                </div>
                <h4 className="font-semibold text-[#150A05] mb-2">
                  Application Mobile
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Téléchargez l'app pour une expérience optimale
                </p>
                <Button variant="premium" className="w-full">
                  Télécharger l'app
                </Button>
              </div>
            </div>

            {/* WhatsApp Order */}
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-green-300 transition-all duration-300">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-[#150A05] mb-2">
                  Commander par WhatsApp
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Envoyez-nous votre commande directement sur WhatsApp
                </p>
                <Button variant="whatsapp" className="w-full">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Call Us */}
            <div className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-xl hover:border-[#B16631]/30 transition-all duration-300">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#150A05] mb-2">
                  Appelez-nous
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Pour les commandes urgentes ou personnalisées
                </p>
                <Button variant="outline" className="w-full">
                  +221 77 XXX XX XX
                </Button>
              </div>
            </div>
          </div>

          {/* Popular Products Quick Access */}
          <div className="mt-12 bg-[#B16631]/5 rounded-2xl p-8">
            <h4 className="text-center text-lg font-medium text-[#150A05] mb-6">
              Accès rapide aux favoris
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="subtle" size="sm">
                Capsules Arpeggio
              </Button>
              <Button variant="subtle" size="sm">
                Machine Essenza Mini
              </Button>
              <Button variant="subtle" size="sm">
                Pack Découverte
              </Button>
              <Button variant="subtle" size="sm">
                Capsules Roma
              </Button>
              <Button variant="subtle" size="sm">
                Accessoires
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-white border-t border-gray-200 py-16 relative z-[1]"
        style={{ zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 md:w-23 md:h-23 rounded-md flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="Dakar Café Express Logo"
                    className="w-full h-full"
                  />
                </div>
                <span className="text-2xl font-semibold text-[#150A05]">
                  DakarCafé Express
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Votre passerelle vers l'authentique café d'Afrique de l'Ouest
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#150A05] uppercase tracking-wide">
                Produits
              </h3>
              <div className="space-y-3 text-gray-600">
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Capsules Nespresso
                </a>
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Machines à Café
                </a>
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Accessoires
                </a>
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Promotions
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#150A05] uppercase tracking-wide">
                Services
              </h3>
              <div className="space-y-3 text-gray-600">
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Livraison Dakar
                </a>
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Paiement Livraison
                </a>
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Application Mobile
                </a>
                <a
                  href="#"
                  className="block hover:text-[#B16631] transition-colors"
                >
                  Support WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#150A05] uppercase tracking-wide">
                Contact
              </h3>
              <div className="space-y-3 text-gray-600">
                <p>dakarcafeexpress@gmail.com</p>
                <p>WhatsApp: +221 77 XXX XX XX</p>
                <p>Dakar, Sénégal</p>
                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#B16631] hover:text-[#8F4F26]"
                  >
                    <ArrowDownTrayIcon className="w-4 h-4" />
                    Télécharger sur iOS - Android
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              © 2024 DakarCafé Express. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#B16631] transition-colors"
              >
                Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#B16631] transition-colors"
              >
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Support Button */}
      <div className="fixed bottom-6 right-6 z-[9996]">
        <Button
          variant="whatsapp"
          size="icon"
          className="w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
          title="Contacter le support WhatsApp"
        >
          <img src="/whatsapp.svg.png" alt="WhatsApp" className="w-auto h-10" />
        </Button>
      </div>
    </div>
  );
};
