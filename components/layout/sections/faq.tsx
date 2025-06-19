import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "Fasting  1",
        answer: "Required Fasting of 6 to 8 hours",
        value: "item-1",
    },
    {
        question: "Fasting 2",
        answer:
            "Required Fasting 10 to 12 hours",
        value: "item-2",
    },
    {
        question:
            "Stress Test",
        answer:
            "For Stress test schedule, Monday 1pm (Cut off time 3pm) Fri and Sat 9am (Cut off time 3pm) then Tues-Wed-Thurs 8am (Cut off time 2pm). For the preparation: Eat light meal, wear loose shirt and wear comfortable shoes. Thank you.",
        value: "item-3",
    },
    {
        question: "Vaccine",
        answer: "Hi! For the price and availability of Vaccines, please call or text the Doctor's Secretary at 0919-9962690. Thank you",
        value: "item-4",
    },
];

export const FAQSection = () => {
    return (
        <section id="faq" className="max-w-7xl mx-auto py-12">
            <div className="text-center mb-8">
                <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    FAQS
                </h2>

                <h2 className="text-3xl md:text-4xl text-center font-bold">
                    Common Questions
                </h2>
            </div>

            <Accordion type="single" collapsible className="AccordionRoot">
                {FAQList.map(({question, answer, value}) => (
                    <AccordionItem key={value} value={value}>
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};