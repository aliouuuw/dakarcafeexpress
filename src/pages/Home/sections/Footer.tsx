import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export const Footer: React.FC = () => {
  return (
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
  );
};
