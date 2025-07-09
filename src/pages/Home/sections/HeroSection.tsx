import React from "react";
import { Button } from "../../../components/ui/button";
import {
  ArrowDownTrayIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CoffeeCupIcon } from "./CoffeeCupIcon";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white relative z-[1] overflow-hidden min-h-[90vh]"
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
                <SparklesIcon className="w-4 h-4 mr-2" />
                Votre marketplace 100% sénégalaise
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
  );
};
