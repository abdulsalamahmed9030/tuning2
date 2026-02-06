import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Layout from "@/components/Layout";

const faqs = [
  {
    category: "Shipping",
    items: [
      { q: "Do you ship across Canada?", a: "Yes! We ship performance parts to all provinces and territories across Canada. Standard shipping typically takes 3-7 business days, with express options available." },
      { q: "How much does shipping cost?", a: "Shipping costs vary by weight and destination. Free shipping is available on orders over $500 within Canada. Exact costs are calculated at checkout." },
      { q: "Do you ship internationally?", a: "Currently, we only ship within Canada. We're exploring international shipping options for the future." },
    ],
  },
  {
    category: "Returns & Refunds",
    items: [
      { q: "What is your return policy?", a: "We accept returns within 30 days of delivery for unused items in original packaging. Custom or tuning-specific parts may not be eligible for return." },
      { q: "How long do refunds take?", a: "Refunds are processed within 5-7 business days after we receive and inspect the returned item. You'll receive a confirmation email once processed." },
    ],
  },
  {
    category: "Installation & Services",
    items: [
      { q: "Do you install the parts you sell?", a: "Absolutely! We offer professional installation for all parts we sell. Book an appointment online or call us to schedule." },
      { q: "How long does a typical tune take?", a: "A standard ECU remap takes 2-4 hours. Custom dyno tuning sessions are typically half-day appointments. Complex builds may require multiple days." },
      { q: "Do I need an appointment for services?", a: "Yes, we recommend booking in advance to ensure availability. You can book online or call us at 403-993-6742." },
    ],
  },
  {
    category: "Warranty",
    items: [
      { q: "Do parts come with a warranty?", a: "Yes, all parts carry the manufacturer's warranty. We also stand behind our installation work with our own service warranty." },
      { q: "Does tuning void my factory warranty?", a: "Modifications may affect your factory warranty coverage on related components. We recommend checking with your dealer. We offer our own tuning warranty for peace of mind." },
    ],
  },
  {
    category: "Booking & Appointments",
    items: [
      { q: "How do I book a service?", a: "You can book online through our website, call us at 403-993-6742, or email general@tuningfactory.ca." },
      { q: "Can I drop off my vehicle?", a: "Yes, we accept vehicle drop-offs during business hours. Early drop-off arrangements can also be made for your convenience." },
    ],
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">Support</p>
            <h1 className="mt-2 font-heading text-5xl font-bold text-foreground">Frequently Asked Questions</h1>
          </div>

          <div className="space-y-8">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="mb-4 font-heading text-xl font-bold text-primary">{section.category}</h2>
                <div className="space-y-2">
                  {section.items.map((item) => {
                    const key = `${section.category}-${item.q}`;
                    const isOpen = openItems.has(key);
                    return (
                      <div key={key} className="rounded-lg border border-border bg-gradient-card overflow-hidden">
                        <button
                          onClick={() => toggle(key)}
                          className="flex w-full items-center justify-between p-4 text-left"
                        >
                          <span className="font-medium text-foreground pr-4">{item.q}</span>
                          {isOpen ? <ChevronUp className="h-4 w-4 text-primary shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                        </button>
                        {isOpen && (
                          <div className="border-t border-border px-4 pb-4 pt-3">
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
