import type { Metadata } from "next";
import { Poppins, Cantarell } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import PageLogo from "@/components/PageLogo";

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const cantarell = Cantarell({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cantarell',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vifit.ca'),
  title: {
    default: "Vi, Your Neighbourhood Gym | Kelowna, BC",
    template: "%s | Vi Fit Kelowna"
  },
  description: "A welcoming, non-intimidating gym in Kelowna. Limited memberships for a comfortable fitness experience. Free no-pressure intro sessions available. Perfect for beginners and those seeking personalized fitness support.",
  keywords: [
    "gym Kelowna",
    "fitness Kelowna",
    "beginner-friendly gym",
    "neighbourhood gym",
    "Vi Fit",
    "personal training Kelowna",
    "non-intimidating gym",
    "downtown Kelowna gym",
    "limited membership gym",
    "Kelowna fitness center"
  ],
  authors: [{ name: "Vi Fit" }],
  creator: "Vi Fit",
  publisher: "Vi Fit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
  },
  alternates: {
    canonical: 'https://vifit.ca',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://vifit.ca',
    siteName: 'Vi Fit',
    title: 'Vi, Your Neighbourhood Gym | Kelowna, BC',
    description: 'A welcoming, non-intimidating gym in Kelowna. Limited memberships for a comfortable fitness experience. Perfect for beginners.',
    images: [
      {
        url: '/hero-kettle-bells.jpg', // TODO: Replace with proper og-image.jpg (1200x630)
        width: 1200,
        height: 630,
        alt: 'Vi Fit Gym - Your Neighbourhood Gym in Kelowna',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vi, Your Neighbourhood Gym | Kelowna, BC',
    description: 'A welcoming, non-intimidating gym in Kelowna. Limited memberships for a comfortable fitness experience.',
    images: ['/hero-kettle-bells.jpg'], // TODO: Replace with proper og-image.jpg
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Add Google Search Console verification code when available
    // google: 'your-google-verification-code',
  },
};

// JSON-LD Schema Markup for SEO and AI/GEO
const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    // LocalBusiness Schema - Critical for local SEO and AI understanding
    {
      "@type": "ExerciseGym",
      "@id": "https://vifit.ca/#gym",
      "name": "Vi, Your Neighbourhood Gym",
      "alternateName": "Vi Fit",
      "description": "A welcoming, non-intimidating gym in Kelowna with limited memberships to maintain a comfortable atmosphere. Perfect for beginners and those seeking personalized fitness support.",
      "url": "https://vifit.ca",
      "telephone": "+17785384998",
      "email": "info@vifit.ca",
      "priceRange": "$$",
      "image": "https://vifit.ca/hero-kettle-bells.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "895 Ellis St unit 2",
        "addressLocality": "Kelowna",
        "addressRegion": "BC",
        "postalCode": "V1Y 1Y8",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 49.8880,
        "longitude": -119.4960
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "04:00",
        "closes": "22:00"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Limited Memberships",
          "value": "Maximum 150 members for a non-intimidating atmosphere"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Personal Training",
          "value": "Personalized fitness support for beginners"
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Free Intro Sessions",
          "value": "No-pressure introductory sessions available"
        }
      ],
      "sameAs": [
        // TODO: Add social media profiles when available
        // "https://www.facebook.com/vifitkelowna",
        // "https://www.instagram.com/vifitkelowna"
      ]
    },
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://vifit.ca/#organization",
      "name": "Vi Fit",
      "url": "https://vifit.ca",
      "logo": "https://vifit.ca/fulll-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+17785384998",
        "contactType": "customer service",
        "email": "info@vifit.ca",
        "areaServed": "CA",
        "availableLanguage": "English"
      }
    },
    // WebSite Schema
    {
      "@type": "WebSite",
      "@id": "https://vifit.ca/#website",
      "url": "https://vifit.ca",
      "name": "Vi Fit",
      "description": "Your neighbourhood gym in Kelowna, BC",
      "publisher": {
        "@id": "https://vifit.ca/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema Markup for SEO and GEO (AI Search) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${cantarell.variable} font-cantarell antialiased bg-background-light text-text-dark`}
      >
        <PageLogo />
        {children}
        <Footer />
      </body>
    </html>
  );
}

