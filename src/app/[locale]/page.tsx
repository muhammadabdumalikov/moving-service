import { notFound } from "next/navigation";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Faq } from "@/components/sections/Faq";
import { company, getContent } from "@/content/site";
import { isLocale } from "@/lib/i18n";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getContent(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: company.name,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Diego",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: "San Diego County",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "67",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} t={t} />
      <main>
        <Hero t={t} />
        <HowItWorks t={t} />
        <WhyUs t={t} />
        <Services t={t} />
        <Testimonials t={t} />
        <QuoteForm t={t} />
        <Faq t={t} />
      </main>
      <Footer locale={locale} t={t} />
    </>
  );
}
