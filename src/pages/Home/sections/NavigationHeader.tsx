import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  XMarkIcon,
  Bars3Icon,
  HeartIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  PhoneIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { CoffeeCupIcon } from "./CoffeeCupIcon";

// Header height constant for consistent spacing
export const HEADER_HEIGHT = "100px"; // Accounts for announcement bar + main nav (reduced for mobile)

export const NavigationHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[90px] sm:h-[120px]" />

      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-[9997]">
        {/* Top announcement bar */}
        <div className="bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white text-center py-1.5 sm:py-2 text-xs sm:text-sm overflow-hidden">
          <div className="hidden sm:block">
            <span className="font-medium flex items-center justify-center gap-2 px-2">
              <TruckIcon className="w-4 h-4 flex-shrink-0" />
              <span>
                Livraison gratuite à Dakar pour les commandes de 25,000 FCFA+
              </span>
            </span>
          </div>
          <div className="block sm:hidden">
            <motion.div
              animate={{ x: [300, -300] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="font-medium flex items-center gap-1 whitespace-nowrap"
            >
              <TruckIcon className="w-3 h-3 flex-shrink-0" />
              <span>
                Livraison gratuite à Dakar pour les commandes de 25,000 FCFA+
              </span>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-fit py-2 sm:py-3">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Dakar Café Express Logo"
                  className="w-auto h-full"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm sm:text-lg md:text-xl font-semibold text-[#150A05] truncate">
                  Dakar Café Express
                </span>
                <span className="text-xs text-gray-600 hidden sm:block truncate">
                  Capsules & Machines Nespresso
                </span>
              </div>
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md lg:max-w-lg mx-4 lg:mx-8">
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
            <div className="hidden xl:flex items-center space-x-4 lg:space-x-6">
              <Link
                to="/"
                className={`font-medium transition-colors text-sm whitespace-nowrap ${
                  isActive("/")
                    ? "text-[#B16631] border-b-2 border-[#B16631] pb-1"
                    : "text-[#150A05] hover:text-[#B16631]"
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/boutique"
                className={`font-medium transition-colors text-sm whitespace-nowrap ${
                  isActive("/boutique")
                    ? "text-[#B16631] border-b-2 border-[#B16631] pb-1"
                    : "text-[#150A05] hover:text-[#B16631]"
                }`}
              >
                Boutique
              </Link>
              <Link
                to="/abonnements"
                className={`font-medium transition-colors text-sm whitespace-nowrap ${
                  isActive("/abonnements")
                    ? "text-[#B16631] border-b-2 border-[#B16631] pb-1"
                    : "text-[#150A05] hover:text-[#B16631]"
                }`}
              >
                Abonnements
              </Link>
              <Link
                to="/notre-cafe"
                className={`font-medium transition-colors text-sm whitespace-nowrap ${
                  isActive("/notre-cafe")
                    ? "text-[#B16631] border-b-2 border-[#B16631] pb-1"
                    : "text-[#150A05] hover:text-[#B16631]"
                }`}
              >
                Notre Café
              </Link>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
              {/* Mobile search */}
              <Button variant="ghost" size="icon" className="lg:hidden p-2">
                <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              {/* User Account */}
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex p-2"
              >
                <UserIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>

              {/* Shopping Cart */}
              <Button variant="ghost" size="icon" className="relative p-2">
                <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-[#B16631] text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  <Bars3Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer - Outside of nav */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-[9998]"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Content */}
          <div className="fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 bg-white shadow-xl z-[9999] transform transition-transform duration-300 overflow-y-auto">
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 h-full">
              {/* Close button */}
              <div className="flex justify-between items-center">
                <h2 className="text-base sm:text-lg font-semibold text-[#150A05]">
                  Menu
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                >
                  <XMarkIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>

              {/* Mobile Search */}
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm"
                />
                <MagnifyingGlassIcon className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>

              {/* User Account */}
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <UserIcon className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-[#150A05] text-sm sm:text-base">
                    Mon Compte
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Connectez-vous
                  </p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-2 sm:space-y-4">
                <Link
                  to="/"
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors ${
                    isActive("/")
                      ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                      : "text-[#150A05] hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <HomeIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Accueil</span>
                  </div>
                </Link>
                <Link
                  to="/boutique"
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors ${
                    isActive("/boutique")
                      ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                      : "text-[#150A05] hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <BuildingStorefrontIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Boutique</span>
                  </div>
                </Link>
                <Link
                  to="/abonnements"
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors ${
                    isActive("/abonnements")
                      ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                      : "text-[#150A05] hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">
                      Abonnements Café
                    </span>
                  </div>
                </Link>
                <Link
                  to="/notre-cafe"
                  className={`block px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors ${
                    isActive("/notre-cafe")
                      ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                      : "text-[#150A05] hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <CoffeeCupIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Notre Café</span>
                  </div>
                </Link>
                <div className="border-t border-gray-200 pt-3 sm:pt-4 mt-3 sm:mt-4">
                  <Link
                    to="/blog"
                    className="block px-3 sm:px-4 py-2 sm:py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <DocumentTextIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        Blog & Conseils
                      </span>
                    </div>
                  </Link>
                  <Link
                    to="/a-propos"
                    className="block px-3 sm:px-4 py-2 sm:py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <InformationCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">À Propos</span>
                    </div>
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-3 sm:px-4 py-2 sm:py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="text-sm sm:text-base">Contact</span>
                    </div>
                  </Link>
                </div>
              </nav>

              {/* Quick Actions */}
              <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                    <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      Mes Favoris
                    </span>
                  </div>
                  <span className="text-xs bg-[#B16631] text-white px-2 py-1 rounded-full flex-shrink-0">
                    2
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                    <ShoppingCartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-600">
                      Mon Panier
                    </span>
                  </div>
                  <span className="text-xs bg-[#B16631] text-white px-2 py-1 rounded-full flex-shrink-0">
                    3
                  </span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4">
                <Button
                  variant="premium"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Commander Maintenant
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-sm sm:text-base"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <DevicePhoneMobileIcon className="w-4 h-4 mr-2" />
                  Télécharger l'App
                </Button>
              </div>

              {/* Support */}
              <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-green-50 rounded-lg">
                <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="font-medium text-green-800 text-sm sm:text-base">
                    Support WhatsApp
                  </p>
                  <p className="text-xs sm:text-sm text-green-600">
                    Aide instantanée
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
