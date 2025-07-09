import React from "react";
import { Button } from "../../../components/ui/button";
import {
  TruckIcon,
  DevicePhoneMobileIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export const WhyChooseSection: React.FC = () => {
  return (
    <section
      id="pourquoi"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative z-[1] overflow-hidden"
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
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#150A05] leading-tight">
            Pourquoi Choisir DakarCafé Express
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Votre marketplace 100% sénégalaise pour tous vos besoins café avec
            un service premium adapté au marché local.
          </p>
        </div>

        {/* Feature 1: Livraison Rapide - Left Content, Right Image */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-3 sm:lg:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#B16631] to-[#D4822A] rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg sm:text-xl font-bold">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#150A05] mb-3 sm:mb-4">
                  Livraison Express à Dakar
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Recevez vos capsules et machines en moins de 2 heures dans
                  tout Dakar. Service de livraison disponible 7j/7 de 8h à 22h.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0">
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <div className="text-lg sm:text-2xl font-bold text-[#B16631]">
                      30min
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Livraison moyenne
                    </div>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
                    <div className="text-lg sm:text-2xl font-bold text-[#B16631]">
                      98%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Satisfaction client
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group border-2 border-[#B16631] text-[#B16631] hover:bg-[#B16631] hover:text-white w-full sm:w-auto text-sm sm:text-base"
                  >
                    <TruckIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span className="hidden sm:inline">
                      Suivre ma livraison
                    </span>
                    <span className="sm:hidden">Suivre livraison</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Livraison rapide Dakar"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-4 left-[22%] sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-[#B16631] to-[#D4822A] text-white p-4 sm:p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <TruckIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                <div>
                  <div className="font-bold text-base sm:text-lg">
                    Livraison gratuite
                  </div>
                  <div className="text-xs sm:text-sm opacity-90">
                    Dès 25,000 FCFA d'achat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Application Mobile - Right Content, Left Image */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="relative text-center lg:text-left">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Application mobile Dakar Café Express"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white p-3 sm:p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                <span className="font-bold text-sm sm:text-base">
                  4.9/5 sur App Store
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8">
              <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <DevicePhoneMobileIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#150A05] text-sm sm:text-base">
                        Dakar Café Express
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Télécharger maintenant
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="premium"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    Installer
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-3 sm:lg:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#150A05] to-[#2a1810] rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg sm:text-xl font-bold">2</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#150A05] mb-3 sm:mb-4">
                  Application Mobile Intuitive
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Commandez en quelques clics avec notre application iOS.
                  Interface moderne, paiement sécurisé et suivi en temps réel.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0 text-left">
                  <li className="flex max-md:justify-center items-center space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#B16631]" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      Nouveau design épuré
                    </span>
                  </li>
                  <li className="flex max-md:justify-center items-center space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#B16631]" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      Chat WhatsApp intégré
                    </span>
                  </li>
                  <li className="flex max-md:justify-center items-center space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4 text-[#B16631]" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">
                      Historique de commandes
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 items-center lg:items-start justify-center lg:justify-start">
                  <Button
                    variant="premium"
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-base"
                  >
                    <DevicePhoneMobileIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    App Store
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-[#150A05] w-full sm:w-auto text-sm sm:text-base"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Support WhatsApp - Left Content, Right Image */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-3 sm:lg:space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-lg sm:text-xl font-bold">3</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#150A05] mb-3 sm:mb-4">
                  Support Client Instantané
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  Une question ? Un problème ? Notre équipe est disponible sur
                  WhatsApp pour vous aider instantanément, 7 jours sur 7.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0">
                  <div className="flex max-md:justify-center  items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-800 font-medium text-sm sm:text-base">
                      Support en ligne maintenant
                    </span>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 max-w-sm mx-auto lg:mx-0">
                  <div className="flex justify-normal items-center md:justify-normal space-x-3 sm:space-x-4">
                    <ChatBubbleLeftRightIcon className="hidden md:block w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                    <div className="w-full md:w-auto flex flex-col justify-center">
                      <div className="font-medium text-[#150A05] text-sm sm:text-base flex items-center justify-center md:block">
                        <ChatBubbleLeftRightIcon className="block md:hidden w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-2" />
                        Temps de réponse moyen
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        Moins de 2 minutes
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-normal items-center md:justify-normal space-x-3 sm:space-x-4">
                    <StarIcon className="hidden md:block w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                    <div className="w-full md:w-auto flex flex-col justify-center">
                      <div className="font-medium text-[#150A05] text-sm sm:text-base flex items-center justify-center md:block">
                        <StarIcon className="block md:hidden w-5 h-5 sm:w-6 sm:h-6 text-gray-400 mr-2" />
                        Satisfaction support
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600">
                        99% de clients satisfaits
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white text-sm sm:text-base"
                  >
                    <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Chat WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Support client WhatsApp"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
              <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-base sm:text-xl">💬</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#150A05] text-sm sm:text-base">
                      Support
                    </div>
                    <div className="text-xs text-green-600">En ligne</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-2 sm:p-3 rounded-lg text-xs sm:text-sm text-gray-700">
                  Bonjour! Comment puis-je vous aider aujourd'hui?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
