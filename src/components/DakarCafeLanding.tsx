import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { formatFCFA, productData, senegalPatterns, typography } from '../lib/dakar-utils';
import { Coffee, Download, Truck, Smartphone, MessageCircle, Star, ShoppingCart, Mail, Phone } from 'lucide-react';

export const DakarCafeLanding = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#150A05] flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <span className="text-xl font-semibold text-[#150A05]">DakarCafé Express</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#produits" className="text-[#150A05] hover:text-[#B16631] font-medium transition-colors text-sm">Produits</a>
              <a href="#origines" className="text-[#150A05] hover:text-[#B16631] font-medium transition-colors text-sm">Origines</a>
              <a href="#culture" className="text-[#150A05] hover:text-[#B16631] font-medium transition-colors text-sm">Culture</a>
              <a href="#contact" className="text-[#150A05] hover:text-[#B16631] font-medium transition-colors text-sm">Contact</a>
              <Button variant="default" size="default">
                Commander
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Split Layout */}
      <section className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/10 text-[#B16631] text-sm font-medium">
                  <Coffee className="w-4 h-4 mr-2" />
                  Votre marketplace 100% sénégalaise
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#150A05] leading-[0.9]">
                  Capsules & Machines
                  <br />
                  <span className="font-medium text-[#B16631]">Nespresso</span>
                  <br />
                  <span className="font-semibold">à Dakar</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Dakar Café Express est votre plateforme de vente de capsules, machines et accessoires café 
                  compatibles Nespresso avec livraison rapide à domicile et au bureau.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" size="lg">
                  Commander Maintenant
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Télécharger l'App
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#B16631] rounded-full"></div>
                  <span className="text-sm text-gray-600">Livraison rapide à Dakar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#B16631] rounded-full"></div>
                  <span className="text-sm text-gray-600">Paiement à la livraison</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#B16631] rounded-full"></div>
                  <span className="text-sm text-gray-600">Support WhatsApp</span>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative lg:h-[600px]">
              <div className="relative w-full h-full">
                {/* Main Hero Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Tasse de café authentique"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150A05]/20 to-transparent"></div>
                </div>
                
                                 {/* Floating Product Card */}
                 <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-6 shadow-xl max-w-xs">
                   <div className="space-y-3">
                     <div className="flex items-center space-x-2">
                       <div className="flex text-[#B16631] text-sm">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className="w-3 h-3 fill-current" />
                         ))}
                       </div>
                       <span className="text-xs text-gray-500">4.9/5</span>
                     </div>
                     <h3 className="text-lg font-medium text-[#150A05]">Capsules Arpeggio</h3>
                     <p className="text-sm text-gray-600">Compatible Nespresso - Intensité 9</p>
                     <div className="flex items-center justify-between pt-2">
                       <span className="text-xl font-semibold text-[#150A05]">3,500 FCFA</span>
                       <Button variant="secondary" size="sm">
                         Ajouter
                       </Button>
                     </div>
                   </div>
                 </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#B16631]/10 rounded-full"></div>
                <div className="absolute top-1/4 -left-6 w-12 h-12 bg-[#150A05]/10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="produits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
              Nos Produits les Plus Vendus
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection de capsules et machines compatibles Nespresso avec livraison rapide à Dakar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.map((product) => (
              <div key={product.id} className="group hover:transform hover:scale-[1.02] transition-all duration-500">
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
                          <Star
                            key={i}
                            className={`w-3 h-3 fill-current ${i < product.intensity / 2 ? 'text-[#B16631]' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-medium text-[#150A05] mb-1">{product.name}</h3>
                      <p className="text-xs text-[#B16631] font-medium uppercase tracking-wide">{product.origin}</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{product.description}</p>
                    <div className="space-y-3 pt-2">
                      <div className="text-xl font-light text-[#150A05]">{formatFCFA(product.price)}</div>
                      <Button 
                        variant={product.inStock ? "default" : "subtle"}
                        size="lg" 
                        className="w-full uppercase tracking-wide text-xs"
                        disabled={!product.inStock}
                      >
                        {product.inStock ? 'Ajouter au Panier' : 'Épuisé'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section id="origines" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
                  Pourquoi Choisir DakarCafé Express
                </h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Votre marketplace 100% sénégalaise pour tous vos besoins café avec un service premium 
                  adapté au marché local.
                </p>
              </div>
              
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#B16631] flex items-center justify-center text-white">
                    <Truck className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#150A05]">Livraison Rapide</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Livraison rapide dans tout Dakar, à domicile et au bureau, avec paiement à la livraison.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#150A05] flex items-center justify-center text-white">
                    <Smartphone className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#150A05]">Application Mobile</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Application disponible sur iOS avec nouveau design et intégration chat WhatsApp.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#B16631] flex items-center justify-center text-white">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium text-[#150A05]">Support WhatsApp</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Support client instantané via WhatsApp pour toutes vos questions et commandes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1580933073521-dc49ac0d4e6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Plantation de café sénégalaise"
                  className="w-full h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1541833759800-57d1a90c2a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Récolte traditionnelle"
                  className="w-full h-64 object-cover mt-12"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Grains de café"
                  className="w-full h-64 object-cover -mt-12"
                />
                <img 
                  src="https://images.unsplash.com/photo-1516023533449-1fa30e5b9033?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Torréfaction artisanale"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What People are Saying Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#150A05] leading-tight">
              Ce que disent nos clients sur notre café
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Aminata Diop",
                location: "Dakar",
                review: "Livraison super rapide et les capsules sont exactement comme les originales. Parfait !",
                rating: 5
              },
              {
                name: "Moussa Kane", 
                location: "Plateau",
                review: "L'app est très facile à utiliser et le support WhatsApp répond rapidement.",
                rating: 5
              },
              {
                name: "Fatou Ba",
                location: "Almadies", 
                review: "Excellents prix et paiement à la livraison très pratique. Je recommande !",
                rating: 5
              },
              {
                name: "Jean-Claude Diouf",
                location: "Parcelles",
                review: "Ma machine Nespresso fonctionne parfaitement avec leurs capsules compatibles.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="border-l-4 border-[#B16631] pl-6">
                <div className="space-y-4">
                  <div className="flex text-[#B16631] text-lg">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed italic">
                    "{testimonial.review}"
                  </blockquote>
                  <div className="pt-4">
                    <p className="font-medium text-[#150A05]">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#150A05] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light leading-tight">
                Abonnez-vous
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Recevez 10% de réduction sur votre première commande
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <div className="flex gap-0 shadow-2xl">
                <Input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 bg-white border-[#B16631]/30 border-r-0 text-[#150A05] placeholder-gray-500 focus:border-[#B16631] focus:ring-[#B16631] rounded-r-none"
                />
                <Button variant="secondary" size="lg" className="uppercase tracking-wide border border-[#B16631] rounded-l-none">
                  S'abonner
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Button Showcase Section - Demo */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-medium text-[#150A05]">Découvrez Nos Interfaces</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="default" size="lg">Commande Standard</Button>
              <Button variant="premium" size="lg">Premium Collection</Button>
              <Button variant="secondary" size="lg">Ajouter Panier</Button>
              <Button variant="whatsapp" size="lg" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
              <Button variant="outline" size="lg">Télécharger App</Button>
              <Button variant="ghost" size="lg">En Savoir Plus</Button>
              <Button variant="subtle" size="lg">Produit Épuisé</Button>
              <Button variant="link" size="lg">Conditions</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#150A05] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DC</span>
                </div>
                <span className="text-2xl font-semibold text-[#150A05]">DakarCafé Express</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Votre passerelle vers l'authentique café d'Afrique de l'Ouest
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#150A05] uppercase tracking-wide">Produits</h3>
              <div className="space-y-3 text-gray-600">
                <a href="#" className="block hover:text-[#B16631] transition-colors">Capsules Nespresso</a>
                <a href="#" className="block hover:text-[#B16631] transition-colors">Machines à Café</a>
                <a href="#" className="block hover:text-[#B16631] transition-colors">Accessoires</a>
                <a href="#" className="block hover:text-[#B16631] transition-colors">Promotions</a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#150A05] uppercase tracking-wide">Services</h3>
              <div className="space-y-3 text-gray-600">
                <a href="#" className="block hover:text-[#B16631] transition-colors">Livraison Dakar</a>
                <a href="#" className="block hover:text-[#B16631] transition-colors">Paiement Livraison</a>
                <a href="#" className="block hover:text-[#B16631] transition-colors">Application Mobile</a>
                <a href="#" className="block hover:text-[#B16631] transition-colors">Support WhatsApp</a>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-[#150A05] uppercase tracking-wide">Contact</h3>
              <div className="space-y-3 text-gray-600">
                <p>dakarcafeexpress@gmail.com</p>
                <p>WhatsApp: +221 77 XXX XX XX</p>
                <p>Dakar, Sénégal</p>
                <div className="pt-2">
                  <a href="#" className="inline-flex items-center gap-2 text-[#B16631] hover:text-[#8F4F26]">
                    <Download className="w-4 h-4" />
                    Télécharger sur iOS
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
              <a href="#" className="text-gray-400 hover:text-[#B16631] transition-colors">Conditions</a>
              <a href="#" className="text-gray-400 hover:text-[#B16631] transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="whatsapp" 
          size="icon" 
          className="w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
          title="Contacter le support WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
    </div>
  );
}; 