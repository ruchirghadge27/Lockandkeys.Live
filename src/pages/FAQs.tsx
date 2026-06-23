import Layout from '@/components/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQs = () => {
  const faqs = [
    {
      question: "How long does a typical construction project take?",
      answer: "Project timelines vary based on scope and complexity. Residential homes typically take 4-8 months, while commercial projects can range from 6-18 months. We provide detailed timelines during the planning phase and keep you updated throughout the process."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We offer free initial consultations and estimates for all potential projects. Our team will visit your site, assess your requirements, and provide a detailed quote with no obligation."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. LocknKey Construction is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation to protect both our team and your property during construction."
    },
    {
      question: "What types of construction projects do you handle?",
      answer: "We specialize in residential, commercial, and industrial construction. This includes new builds, renovations, extensions, interior finishing, electrical work, plumbing, and general contracting services."
    },
    {
      question: "How do you ensure quality control?",
      answer: "We implement strict quality control measures including regular inspections, using certified materials, following building codes, and having experienced supervisors on every project. We also provide warranties on our work."
    },
    {
      question: "Can I make changes to the project once construction begins?",
      answer: "Minor changes can often be accommodated, though they may affect timeline and cost. We discuss all change requests with you and provide updated estimates before proceeding. Major changes may require design revisions."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including checks, bank transfers, and credit cards. Payment is typically structured in phases based on project milestones, with a small initial deposit to begin work."
    },
    {
      question: "Do you handle permits and approvals?",
      answer: "Yes, we handle all necessary permits and regulatory approvals for your project. Our team is familiar with local building codes and regulations, ensuring your project meets all requirements."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide a comprehensive 1-year warranty on residential projects and 2-year warranty on commercial projects. This covers workmanship and structural issues. Specific material warranties may vary by manufacturer."
    },
    {
      question: "How do you handle weather delays?",
      answer: "Weather delays are factored into our initial timeline estimates. We monitor weather conditions closely and adjust schedules accordingly. Indoor work can often continue during adverse weather conditions."
    },
    {
      question: "Can you work with my architect or designer?",
      answer: "Absolutely! We frequently collaborate with architects, designers, and other professionals. We're happy to work with your existing team or can recommend trusted partners if needed."
    },
    {
      question: "What happens if there are cost overruns?",
      answer: "We provide detailed estimates and stick to agreed-upon budgets. Any potential overruns are discussed with you immediately, including the reasons and options available. We never proceed with additional costs without your approval."
    }
  ];

  return (
    <Layout>
      <div className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-construction-blue-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our construction services, 
              processes, and what you can expect when working with LocknKey.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:bg-construction-blue-light/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-medium text-foreground pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our team is here to help! Contact us for personalized answers to your specific project questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact-us">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="tel:+1234567890">Call Now: (123) 456-7890</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQs;