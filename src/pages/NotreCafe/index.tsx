import React from "react";
import { NavigationHeader } from "../Home/sections/NavigationHeader";
import { Footer } from "../Home/sections/Footer";
import { FloatingWhatsApp } from "../Home/sections/FloatingWhatsApp";
import { Button } from "../../components/ui/button";
import { CoffeeCupIcon } from "../Home/sections/CoffeeCupIcon";
import {
  GlobeAltIcon,
  ArrowPathRoundedSquareIcon,
  SparklesIcon,
  FireIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

export const NotreCafe: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader />

      {/* Hero Section */}
      <section className="pb-16 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Notre passion pour
              <br />
              <span className="font-medium text-[#B16631]">
                le café d'exception
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              De la plantation à votre tasse, découvrez l'histoire de nos cafés
              soigneusement sélectionnés à travers le monde.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[#B16631]/10 text-[#B16631] text-sm font-medium rounded-full">
                <GlobeAltIcon className="w-4 h-4 mr-2" />
                Notre histoire
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[#150A05]">
                Une tradition de qualité depuis Dakar
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Dakar Café Express est né de la passion de connecter les
                amateurs de café sénégalais aux meilleurs cafés du monde. Notre
                mission est simple : rendre accessible le café de qualité
                exceptionnelle à tous les Dakarois.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous travaillons directement avec des producteurs certifiés qui
                partagent nos valeurs de qualité, durabilité et commerce
                équitable. Chaque capsule raconte l'histoire d'un terroir unique
                et d'un savoir-faire transmis de génération en génération.
              </p>
              <Button variant="outline" size="lg">
                En savoir plus sur notre mission
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Coffee farmers"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#B16631]/10 rounded-full flex items-center justify-center">
                    <CoffeeCupIcon className="w-8 h-8 text-[#B16631]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#150A05]">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">
                      Commerce équitable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Origins */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#150A05] mb-4">
              Nos origines sélectionnées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque origine est choisie pour ses caractéristiques uniques et sa
              qualité exceptionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                country: "Colombie",
                region: "Huila & Nariño",
                altitude: "1,800-2,200m",
                notes: "Notes de chocolat, caramel et fruits rouges",
                intensity: 7,
                image:
                  "https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                country: "Éthiopie",
                region: "Yirgacheffe",
                altitude: "1,700-2,200m",
                notes: "Floral, citronné avec une acidité vive",
                intensity: 5,
                image:
                  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                country: "Brésil",
                region: "Cerrado Mineiro",
                altitude: "1,000-1,300m",
                notes: "Noisette, chocolat au lait, doux",
                intensity: 6,
                image:
                  "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                country: "Costa Rica",
                region: "Tarrazú",
                altitude: "1,200-1,900m",
                notes: "Agrumes, miel, corps moyen",
                intensity: 6,
                image:
                  "https://images.unsplash.com/photo-1447452001602-7090c7ab2739?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                country: "Kenya",
                region: "Nyeri",
                altitude: "1,500-2,100m",
                notes: "Cassis, vin rouge, acidité brillante",
                intensity: 8,
                image:
                  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
              {
                country: "Guatemala",
                region: "Antigua",
                altitude: "1,500-1,700m",
                notes: "Épices, chocolat noir, fumé",
                intensity: 9,
                image:
                  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              },
            ].map((origin, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={origin.image}
                    alt={`Coffee from ${origin.country}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">
                      {origin.country}
                    </h3>
                    <p className="text-white/80 text-sm">{origin.region}</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Altitude:</span>
                    <span className="font-medium text-[#150A05]">
                      {origin.altitude}
                    </span>
                  </div>
                  <p className="text-gray-700">{origin.notes}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Intensité:</span>
                    <div className="flex space-x-1">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-4 rounded-sm ${
                            i < origin.intensity
                              ? "bg-[#B16631]"
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roasting Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-[#150A05] mb-4">
              Notre processus de torréfaction
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un art maîtrisé pour révéler le meilleur de chaque grain
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Sélection",
                description:
                  "Seuls les meilleurs grains verts sont sélectionnés selon des critères stricts de qualité",
                icon: <SparklesIcon className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Torréfaction",
                description:
                  "Chaque origine est torréfiée selon un profil unique pour révéler ses arômes",
                icon: <FireIcon className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Refroidissement",
                description:
                  "Refroidissement rapide pour préserver les arômes développés pendant la torréfaction",
                icon: <CloudIcon className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "Encapsulation",
                description:
                  "Mise en capsule hermétique pour conserver toute la fraîcheur du café",
                icon: <CoffeeCupIcon className="w-6 h-6" />,
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#B16631]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[#B16631]">
                  {process.icon}
                </div>
                <h3 className="text-xl font-medium text-[#150A05] mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24 bg-gradient-to-br from-[#150A05] to-[#2a1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Notre engagement pour
                <br />
                <span className="font-medium text-[#B16631]">
                  un café durable
                </span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <GlobeAltIcon className="w-6 h-6 text-[#B16631]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">
                      Commerce équitable
                    </h3>
                    <p className="text-gray-300">
                      Nous garantissons un prix juste aux producteurs pour
                      soutenir leurs communautés et améliorer leurs conditions
                      de vie.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowPathRoundedSquareIcon className="w-6 h-6 text-[#B16631]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">
                      Capsules recyclables
                    </h3>
                    <p className="text-gray-300">
                      Nos capsules en aluminium sont 100% recyclables. Nous
                      offrons un programme de collecte gratuit à Dakar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B16631]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-[#B16631]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2">
                      Agriculture durable
                    </h3>
                    <p className="text-gray-300">
                      Nous soutenons des pratiques agricoles qui préservent
                      l'environnement et la biodiversité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable coffee farming"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#B16631]">
                      100%
                    </div>
                    <div className="text-xs text-gray-600">Équitable</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#B16631]">0</div>
                    <div className="text-xs text-gray-600">
                      Émission carbone
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#B16631]">
                      100%
                    </div>
                    <div className="text-xs text-gray-600">Recyclable</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#B16631]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-[#150A05] mb-6">
            Prêt à découvrir nos cafés d'exception ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explorez notre sélection et trouvez le café qui correspond à vos
            goûts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg">
              Découvrir nos cafés
            </Button>
            <Button variant="outline" size="lg">
              Commander un échantillon
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};
