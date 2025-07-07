import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const SidebarSection = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <Card className="border-0 bg-transparent">
        <CardContent className="p-0">
          <div className="flex items-center justify-between w-full py-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-www-lorespresso-com-semantic-heading-4 font-[number:var(--www-lorespresso-com-semantic-heading-4-font-weight)] text-wwwlorespressocomwhite text-[length:var(--www-lorespresso-com-semantic-heading-4-font-size)] tracking-[var(--www-lorespresso-com-semantic-heading-4-letter-spacing)] leading-[var(--www-lorespresso-com-semantic-heading-4-line-height)] [font-style:var(--www-lorespresso-com-semantic-heading-4-font-style)]">
                Abonnez-vous à la newsletter
              </h4>
              <p className="font-www-lorespresso-com-avenir-next-regular font-[number:var(--www-lorespresso-com-avenir-next-regular-font-weight)] text-wwwlorespressocomwhite text-[length:var(--www-lorespresso-com-avenir-next-regular-font-size)] tracking-[var(--www-lorespresso-com-avenir-next-regular-letter-spacing)] leading-[var(--www-lorespresso-com-avenir-next-regular-line-height)] [font-style:var(--www-lorespresso-com-avenir-next-regular-font-style)]">
                Et bénéficiez d&apos;une remise de 30%* sur votre prochaine
                <br />
                commande
              </p>
            </div>

            <Button
              className="h-14 rounded relative bg-transparent p-4 text-wwwlorespressocomronchi [font-family:'Avenir_Next-Regular',Helvetica] font-normal text-base"
              style={{
                backgroundImage: "url('/mask-group.svg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "127px",
              }}
            >
              Je m&apos;abonne
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
