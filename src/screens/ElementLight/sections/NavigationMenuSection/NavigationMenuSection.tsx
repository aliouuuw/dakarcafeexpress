import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const NavigationMenuSection = (): JSX.Element => {
  // Data for accordion items
  const accordionItems = [
    {
      id: "item-1",
      title: "Capsules de café L'OR Espresso pour tous les goûts",
      content: (
        <p className="font-['Avenir_Next-Regular',Helvetica] text-wwwlorespressocomblack text-base leading-6">
          Le café L'OR offre un plaisir unique dans chaque tasse. Avec une large
          gamme de variétés, des arômes intenses aux
          <br />
          saveurs douces, chaque capsule offre une expérience café
          exceptionnelle. Pour un espresso fort ou un café plus
          <br />
          léger, les capsules de café L'OR Espresso répondent à toutes les
          envies
        </p>
      ),
    },
    {
      id: "item-2",
      title: "Quel est le meilleur café en capsule ?",
      content: (
        <div className="flex flex-col gap-4">
          <p className="font-['Avenir_Next-Regular',Helvetica] text-base leading-6">
            <span className="text-black">Que vous préfériez les </span>
            <a
              href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/espresso"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#ebbc55] underline"
            >
              capsules de café espresso
            </a>
            <span className="text-black">, les </span>
            <a
              href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/ristretto"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#ebbc55] underline"
            >
              capsules de café ristretto
            </a>
            <span className="text-black"> ou les </span>
            <a
              href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/lungo"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#ebbc55] underline"
            >
              capsules de café lungo
            </a>
            <span className="text-black">
              , vous
              <br />
              trouverez toujours ce que vous cherchez dans la vaste gamme de
              capsules de café L'OR. Si vous souhaitez profiter
              <br />
              d'un goût exceptionnel, mais sans caféine, choisissez nos{" "}
            </span>
            <a
              href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/decafeine"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#ebbc55] underline"
            >
              capsules de café décaféiné
            </a>
            <span className="text-black">
              {" "}
              ! Vous préférez boire un
              <br />
              cappuccino ? Pas de problème. Chez L'OR, vous êtes sûr de trouver
              les meilleures capsules de café compatibles
              <br />
              avec votre machine à café à capsules. Pourquoi ne pas essayer ces
              capsules L'OR BARISTA et compatibles avec
              <br />
              Nespresso®* Original pour découvrir votre prochain coup de cœur ?
              Que vous soyez amateur de chocolat, les
              <br />
            </span>
            <a
              href="https://www.lorespresso.com/fr_fr/p/espresso-chocolat"
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#ebbc55] underline"
            >
              capsules Espresso Chocolat
            </a>
            <span className="text-black">
              {" "}
              de L'OR ajoutera une touche délicieusement sucrée à votre moment
              café, avec une
              <br />
              saveur riche qui combine l'intensité de l'espresso et le goût
              raffiné du chocolat.
            </span>
          </p>
          <p className="font-www-lorespresso-com-semantic-emphasis text-wwwlorespressocomblack text-[length:var(--www-lorespresso-com-semantic-emphasis-font-size)] tracking-[var(--www-lorespresso-com-semantic-emphasis-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-emphasis-line-height)] [font-style:var(--www-lorespresso-com-semantic-emphasis-font-style)]">
            *Marque déposée d'un tiers, sans rapport avec JACOBS DOUWE EGBERTS
          </p>
        </div>
      ),
    },
    {
      id: "item-3",
      title: "La nouvelle génération de capsules pour machines L'OR BARISTA",
      content: (
        <p className="font-['Avenir_Next-Regular',Helvetica] text-base leading-6">
          <span className="text-black">
            La nouvelle génération de capsules de café{" "}
          </span>
          <a
            href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/single-capsules"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#ebbc55] underline"
          >
            classiques
          </a>
          <span className="text-black">
            {" "}
            L'OR et de capsules doubles L'OR BARISTA est conçue en
            <br />
            aluminium hermétique pour vous offrir un arôme et un goût
            exceptionnels à tout moment de la journée. Nous
            <br />
            choisissons l'aluminium, car il préserve de manière optimale l'arôme
            de notre espresso et lungo, tout en étant
            <br />
            respectueux de l'environnement (toutes nos capsules de café L'OR
            sont{" "}
          </span>
          <a
            href="https://www.lorespresso.com/fr_fr/content/notre-histoire/recyclage-capsules-cafe"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#ebbc55] underline"
          >
            recyclables
          </a>
          <span className="text-black">
            ). Vous ne savez pas quel type de
            <br />
            café vous convient ? La seule façon de le découvrir est d'en essayer
            plusieurs et de faire votre choix ! L'OR propose
            <br />
            une large gamme de capsules pour machine à espresso, y compris
            espresso et lungo.
          </span>
        </p>
      ),
    },
    {
      id: "item-4",
      title: "Commandez vos capsules de café L'OR en ligne",
      content: (
        <p className="font-['Avenir_Next-Regular',Helvetica] text-base leading-6">
          <span className="text-black">
            N'hésitez pas à acheter les meilleures capsules de café en ligne
            pour profiter de tous les avantages et promotions
            <br />
            offerts par la boutique officielle L'OR Espresso. Vous trouverez la
            gamme la plus complète de capsules de café L'OR,
            <br />
            en versions simple et double, ainsi que des{" "}
          </span>
          <a
            href="https://www.lorespresso.com/fr_fr/capsules-de-cafe/assortiment/packs-varietes"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#ebbc55] underline"
          >
            packs variés
          </a>
          <span className="text-black">
            {" "}
            pour satisfaire toutes vos envies de café. Vous avez besoin
            <br />
            d'un (double) coup de pouce pour commencer votre journée ou
            souhaitez préparer deux tasses de café en même
            <br />
            temps ? Essayez alors nos capsules de café double ; double espresso
            pour deux fois plus de plaisir. Jetez un œil à
            <br />
            notre boutique en ligne et découvrez les capsules de café
            compatibles avec votre L'OR BARISTA ou une autre
            <br />
            machine à café.
          </span>
        </p>
      ),
    },
    {
      id: "item-5",
      title: "Capsules de café et dosettes de café",
      content: (
        <p className="font-['Avenir_Next-Regular',Helvetica] text-base leading-6">
          <span className="text-black">
            Les capsules de café et les dosettes de café ont le même objectif :
            vous permettre de préparer de délicieuses tasses
            <br />
            de café. En règle générale, la capsule de café est un conteneur en
            plastique qui contient le café et préserve son
            <br />
            arôme. Les capsules de café L'OR sont fabriquées en aluminium pour
            préserver les saveurs et les arômes intenses du
            <br />
            café. Différents types de capsules pour machines à café sont
            compatibles avec différentes machines. Le type de
            <br />
            capsules de café dont vous avez besoin pour votre machine à café
            dépend des capsules compatibles avec celle-ci.
            <br />
            Vous voulez vérifier quelles{" "}
          </span>
          <a
            href="https://www.lorespresso.com/fr_fr/machines"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#ebbc55] underline"
          >
            machines à café
          </a>
          <span className="text-black">
            {" "}
            sont compatibles avec les capsules de café L'OR ? Cliquez sur ce
            lien
            <br />
            pour voir toutes les informations nécessaires sur les machines à
            café compatibles.
          </span>
        </p>
      ),
    },
    {
      id: "item-6",
      title: "Comment conserver mes capsules de café L'OR ?",
      content: (
        <p className="font-['Avenir_Next-Regular',Helvetica] text-wwwlorespressocomblack text-base leading-6">
          Pour préserver la fraîcheur et les saveurs riches de vos capsules de
          café L'OR, conservez-les dans un endroit frais et
          <br />
          sec, à l'abri de la lumière directe du soleil. Bien conserver ses
          capsules garantit que chaque tasse de café que vous
          <br />
          préparez sera aussi délicieuse que la première. Évitez de conserver
          les capsules au réfrigérateur ou au congélateur,
          <br />
          car cela pourrait altérer leur goût et leur arôme.
        </p>
      ),
    },
    {
      id: "item-7",
      title:
        "Les capsules de café L'OR sont-elles compatibles avec les machines Nespresso® ?",
      content: (
        <p className="font-['Avenir_Next-Regular',Helvetica] text-base leading-6">
          <span className="text-black">
            Oui, les capsules de café L'OR sont compatibles avec les machines
            Nespresso®* Original. Notez cependant qu'elles
            <br />
            ne sont pas compatibles avec les machines Nespresso® Vertuo.
            Veuillez consulter la section{" "}
          </span>
          <a
            href="https://www.lorespresso.com/fr_fr/cp/notre-histoire/compatibilite"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#ebbc55] underline"
          >
            compatibilité
          </a>
          <span className="text-black">
            {" "}
            sur notre
            <br />
            site web pour plus de détails.
          </span>
        </p>
      ),
    },
    {
      id: "item-8",
      title: "Puis-je recycler les capsules de café L'OR ?",
      content: (
        <p className="font-['Avenir_Next-Regular',Helvetica] text-base leading-6">
          <span className="text-black">
            Oui, les capsules de café L'OR sont fabriquées en aluminium et sont
            entièrement{" "}
          </span>
          <a
            href="https://www.lorespresso.com/fr_fr/cp/notre-histoire/recyclage"
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#ebbc55] underline"
          >
            recyclables
          </a>
          <span className="text-black">
            . Veuillez suivre les
            <br />
            instructions de recyclage des capsules de café sur notre site web
            pour assurer une élimination correcte.
          </span>
        </p>
      ),
    },
  ];

  return (
    <section className="flex flex-col w-full items-start px-6 py-0 relative">
      <div className="flex flex-wrap w-full items-start justify-center gap-0 py-0 relative">
        <div className="hidden md:block w-full md:w-1/6 self-stretch" />

        <div className="flex flex-col w-full md:w-5/6 lg:w-4/6 items-start pl-0 md:pl-4 pr-0 pt-4 pb-0 relative self-stretch">
          <Accordion type="single" collapsible className="w-full">
            {accordionItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-t border-[#d6d6d6] border-solid"
              >
                <AccordionTrigger className="py-4 font-www-lorespresso-com-semantic-heading-3 font-[number:var(--www-lorespresso-com-semantic-heading-3-font-weight)] text-wwwlorespressocomblack text-[length:var(--www-lorespresso-com-semantic-heading-3-font-size)] tracking-[var(--www-lorespresso-com-semantic-heading-3-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-heading-3-line-height)] [font-style:var(--www-lorespresso-com-semantic-heading-3-font-style)]">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-8">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
