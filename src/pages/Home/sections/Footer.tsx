import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white border-t border-gray-200 py-8 sm:py-12 md:py-16 relative z-[1]"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-md flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Dakar Café Express Logo"
                  className="w-full h-full"
                />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-semibold text-[#150A05]">
                DakarCafé Express
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Votre passerelle vers l'authentique café d'Afrique de l'Ouest
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-medium text-[#150A05] uppercase tracking-wide">
              Produits
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
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

          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-base sm:text-lg font-medium text-[#150A05] uppercase tracking-wide">
              Services
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
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

          <div className="space-y-4 sm:space-y-6 sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-medium text-[#150A05] uppercase tracking-wide">
              Contact
            </h3>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600">
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

        <div className="border-t border-gray-200 mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs sm:text-sm text-center md:text-left text-gray-500">
            © 2025 DakarCafé Express. Tous droits réservés.
          </p>
          <div className="text-xs sm:text-sm flex space-x-4 sm:space-x-6 mt-3 sm:mt-4 md:mt-0">
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
  );
};
