import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
export const HEADER_HEIGHT = "120px"; // Accounts for announcement bar + main nav

export const NavigationHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[120px]" />

      <nav className="fixed top-0 w-full bg-white border-b border-gray-100 !z-[99997]">
        {/* Top announcement bar */}
        <div className="bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white text-center py-2 text-sm">
          <span className="font-medium flex items-center justify-center gap-2">
            <TruckIcon className="w-4 h-4" />
            Livraison gratuite à Dakar pour les commandes de 25,000 FCFA+
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-fit">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
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
            </Link>

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
                  <Link
                    to="/"
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive("/")
                        ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                        : "text-[#150A05] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <HomeIcon className="w-5 h-5" />
                      Accueil
                    </div>
                  </Link>
                  <Link
                    to="/boutique"
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive("/boutique")
                        ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                        : "text-[#150A05] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <BuildingStorefrontIcon className="w-5 h-5" />
                      Boutique
                    </div>
                  </Link>
                  <Link
                    to="/abonnements"
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive("/abonnements")
                        ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                        : "text-[#150A05] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <CalendarDaysIcon className="w-5 h-5" />
                      Abonnements Café
                    </div>
                  </Link>
                  <Link
                    to="/notre-cafe"
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive("/notre-cafe")
                        ? "text-[#B16631] bg-[#B16631]/10 font-medium"
                        : "text-[#150A05] hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <CoffeeCupIcon className="w-5 h-5" />
                      Notre Café
                    </div>
                  </Link>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <Link
                      to="/blog"
                      className="block px-4 py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <DocumentTextIcon className="w-5 h-5" />
                        Blog & Conseils
                      </div>
                    </Link>
                    <Link
                      to="/a-propos"
                      className="block px-4 py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <InformationCircleIcon className="w-5 h-5" />À Propos
                      </div>
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-3 text-[#150A05] hover:bg-gray-50 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <PhoneIcon className="w-5 h-5" />
                        Contact
                      </div>
                    </Link>
                  </div>
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
                    <DevicePhoneMobileIcon className="w-4 h-4 mr-2" />
                    Télécharger l'App
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
    </>
  );
};
