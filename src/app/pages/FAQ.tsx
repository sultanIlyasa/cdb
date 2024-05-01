import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Faq = () => {
  return (
    <main>
        <br />
      <div
        className="font-montserrat text-base font-semibold leading-[24.38px] text-center"
        style={{ color: "#ED3237" }}
      >
        INSIGHTS
      </div>
      <div
        className="font-montserrat text-4xl font-bold leading-[34.13px] text-center"
        style={{ color: "#7374C5" }}
      >
        Frequently Asked Questions
      </div>
      <div
        className="flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 gap-4 "
        style={{ backgroundColor: "#DBDBF0" }}
      ></div>
      <br />

      <div className="p-10 rounded-lg flex flex-col justify-center grid md:grid-cols-2 lg:grid-cols-2 gap-4" style={{ backgroundColor: "#DBDBF0" }}>
        <Card className="p-4 rounded-lg flex flex-col justify-center ">
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
              <AccordionTrigger>Pertanyaan 5
              </AccordionTrigger>
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
