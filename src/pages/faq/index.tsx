import React from "react";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  return (
    <main>
      <br />
      <div className="font-montserrat text-base font-semibold leading-[24.38px] text-center text-[#ED3237]">
        INFORMASI
      </div>
      <div className="font-montserrat text-4xl font-bold leading-[34.13px] text-center text-[#7374C5] mb-5">
        Pertanyaan yang Sering Diajukan
      </div>
      <div className="p-10 rounded-lg bg-[#DBDBF0] flex-col justify-center grid grid-cols-2 gap-4 mx-[100px] mb-[200px]">
        <Card className="p-4 rounded-lg  flex-col justify-center ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pertanyaan 1</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col justify-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pertanyaan 2</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col justify-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pertanyaan 3</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col justify-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pertanyaan 4</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col justify-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pertanyaan 5</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <Card className="p-4 rounded-lg flex flex-col justify-center">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Pertanyaan 6</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </main>
  );
};

export default Faq;
