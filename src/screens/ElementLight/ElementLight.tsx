import React from "react";
import { Button } from "../../components/ui/button";

import { BestSellersSection } from "./sections/BestSellersSection";
import { BlogHighlightsSection } from "./sections/BlogHighlightsSection";
import { ComponentNodeSection } from "./sections/ComponentNodeSection";
import { ContentContainerSection } from "./sections/ContentContainerSection/ContentContainerSection";
import { CustomerReviewsSection } from "./sections/CustomerReviewsSection";
import { DiscountOffersSection } from "./sections/DiscountOffersSection";
import { DividerSection } from "./sections/DividerSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { FlexContainerSection } from "./sections/FlexContainerSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
// Import all sections
import { HeroImageSection } from "./sections/HeroImageSection";
import { LayoutWrapperSection } from "./sections/LayoutWrapperSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MainWrapperSection } from "./sections/MainWrapperSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";
import { NewArrivalsSection } from "./sections/NewArrivalsSection";
import { NewsletterSignupSection } from "./sections/NewsletterSignupSection";
import { OverlaySection } from "./sections/OverlaySection";
import { ProductCategoriesSection } from "./sections/ProductCategoriesSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection";
import { PromotionalBannerSection } from "./sections/PromotionalBannerSection";
import { SidebarSection } from "./sections/SidebarSection";
import { SiteHeaderSection } from "./sections/SiteHeaderSection";
import { SubscriptionOptionsSection } from "./sections/SubscriptionOptionsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { UtilitySection } from "./sections/UtilitySection";

// Define product section data for reusability
const productSections = [
  {
    title: "Capsules Classiques",
    viewAllLink:
      "https://www.lorespresso.com/fr_fr/capsules-de-cafe/single-capsules",
  },
  {
    title: "Capsules XXL",
    viewAllLink:
      "https://www.lorespresso.com/fr_fr/capsules-de-cafe/capsules-double",
  },
  {
    title: "Grands Formats",
    viewAllLink: "https://www.lorespresso.com/fr_fr/capsules/multipack",
  },
];

export const ElementLight = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1920px]">
        <div className="relative bg-wwwlorespressocomblack">
          <MainContentSection />

          <div className="w-full mt-[130px]">
            <div className="flex flex-col w-full items-center">
              <LayoutWrapperSection />
              <OverlaySection />

              <div className="flex flex-col items-center pb-6 w-full bg-wwwlorespressocomwhite">
                <MainWrapperSection />

                <div className="flex flex-col max-w-[1440px] w-full items-start gap-24 px-10 z-0">
                  <div className="flex flex-col items-start pt-6 w-full">
                    <ContentContainerSection />

                    {/* First Product Section - Capsules Classiques */}
                    <div className="w-full">
                      <div className="w-full flex flex-col items-start">
                        <h2 className="w-fit mt-[-1.00px] font-['Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-[32px] tracking-[-1.28px] leading-10">
                          {productSections[0].title}
                        </h2>
                      </div>

                      <div className="w-full mt-[88px]">
                        <FlexContainerSection />
                        <UtilitySection />
                        <ComponentNodeSection />
                        <div className="w-[328px] h-[565px] rounded-lg bg-[url(/link---picture---image.png)] bg-cover bg-[50%_50%] float-right" />

                        <HeroImageSection />
                        <ProductCategoriesSection />
                        <BestSellersSection />
                        <NewArrivalsSection />
                      </div>

                      <div className="flex w-full items-start justify-center mt-6">
                        <Button
                          variant="outline"
                          className="h-14 flex items-center gap-2 px-4 py-[17px] rounded border border-solid border-[#3c3c3c]"
                          asChild
                        >
                          <a
                            href={productSections[0].viewAllLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="font-['Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-base"
                          >
                            Voir tous les articles
                            <div className="w-[18px] h-[18px] bg-[url(/icon-6.svg)] bg-[100%_100%] ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Second Product Section - Capsules XXL */}
                    <div className="w-full mt-6">
                      <div className="w-full flex flex-col items-start">
                        <h2 className="w-fit mt-[-1.00px] font-['Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-[32px] tracking-[-1.28px] leading-10">
                          {productSections[1].title}
                        </h2>
                      </div>

                      <div className="w-full mt-[88px]">
                        <DiscountOffersSection />
                        <SubscriptionOptionsSection />
                        <TestimonialsSection />
                        <BlogHighlightsSection />
                        <NewsletterSignupSection />
                        <ProductShowcaseSection />
                        <PromotionalBannerSection />
                        <FeaturedProductsSection />
                      </div>

                      <div className="flex w-full items-start justify-center mt-6">
                        <Button
                          variant="outline"
                          className="h-14 flex items-center gap-2 px-4 py-[17px] rounded border border-solid border-[#3c3c3c]"
                          asChild
                        >
                          <a
                            href={productSections[1].viewAllLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="font-['Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-base"
                          >
                            Voir tous les articles
                            <div className="w-[18px] h-[18px] bg-[url(/icon-6.svg)] bg-[100%_100%] ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    <HeaderSection />

                    {/* Third Product Section - Grands Formats */}
                    <div className="w-full mt-6">
                      <div className="w-full flex flex-col items-start">
                        <h2 className="w-fit mt-[-1.00px] font-['Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-[32px] tracking-[-1.28px] leading-10">
                          {productSections[2].title}
                        </h2>
                      </div>

                      <FooterSection />

                      <div className="flex w-full items-start justify-center mt-6">
                        <Button
                          variant="outline"
                          className="h-14 flex items-center gap-2 px-4 py-[17px] rounded border border-solid border-[#3c3c3c]"
                          asChild
                        >
                          <a
                            href={productSections[2].viewAllLink}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="font-['Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-base"
                          >
                            Voir tous les articles
                            <div className="w-[18px] h-[18px] bg-[url(/icon-6.svg)] bg-[100%_100%] ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <NavigationMenuSection />
                </div>
              </div>
            </div>

            <SidebarSection />
          </div>

          <CustomerReviewsSection />
          <DividerSection />
          <SiteHeaderSection />
        </div>
      </div>
    </div>
  );
};
