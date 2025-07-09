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
                  tout Dakar. Service de livraison disponible 7j/7 de 8h à 22h.
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
                    <div className="text-2xl font-bold text-[#B16631]">98%</div>
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
                      <DevicePhoneMobileIcon className="w-6 h-6 text-gray-600" />
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
                      <CheckIcon className="w-4 h-4 text-[#B16631]" />
                    </div>
                    <span className="text-gray-700">Nouveau design épuré</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-[#B16631]" />
                    </div>
                    <span className="text-gray-700">Chat WhatsApp intégré</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-[#B16631]" />
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
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </Button>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Support client WhatsApp"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute top-8 left-8">
              <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#150A05]">Support</div>
                    <div className="text-xs text-green-600">En ligne</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700">
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
