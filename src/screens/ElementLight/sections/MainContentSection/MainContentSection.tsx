import React from "react";

export const MainContentSection = (): JSX.Element => {
  // Data for promotional messages
  const promoMessages = [
    {
      icon: "/muidone.svg",
      text: "Livraison offerte à partir de 30 euros",
    },
    {
      icon: "/muidone.svg",
      text: "Café aux arômes uniques.",
    },
    {
      icon: "/muidone.svg",
      text: "Capsule en aluminium recyclable",
    },
  ];

  return (
    <header className="w-full bg-wwwlorespressocomwhite border-b border-white">
      <div className="max-w-[1440px] h-12 mx-auto flex items-center justify-center px-10 overflow-x-auto">
        {promoMessages.map((message, index) => (
          <div
            key={`promo-message-${index}`}
            className={`inline-flex items-center gap-[3.37px] pb-[1.19px] ${index > 0 ? "pl-[120px]" : ""}`}
          >
            <div className="relative w-4 h-4 bg-[url(/muidone.svg)] bg-[100%_100%]" />
            <span className="[font-family:'Avenir_Next-Regular',Helvetica] font-normal text-wwwlorespressocomblack text-base tracking-[-0.64px] leading-[27.2px] whitespace-nowrap overflow-hidden text-ellipsis">
              {message.text}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
};
