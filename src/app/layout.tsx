import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

const fontHeading = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

const siteUrl = "https://ankitsingh.dev";

const seoTitle =
  "Ankit Singh | Full Stack Engineer | AI Full-Stack Engineer | Remote";
const seoDescription =
  "Ankit Singh - AI full-stack engineer building production systems for early-stage startups. 3+ years: RAG, vector DBs, Next.js, TypeScript. Available for remote full-time roles. Hire a full stack engineer who ships and maintains live AI products.";
const seoKeywords = [
  "Ankit Singh",
  "full stack engineer",
  "AI full stack engineer",
  "full stack developer",
  "AI engineer",
  "remote full stack engineer",
  "hire full stack engineer",
  "early-stage startup engineer",
  "production AI systems",
  "RAG systems",
  "vector databases",
  "Next.js",
  "TypeScript",
  "OpenAI",
  "LangChain",
  "full stack engineer portfolio",
  "AI full stack developer remote",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Ankit Singh",
  },
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: "Ankit Singh", url: siteUrl }],
  creator: "Ankit Singh",
  publisher: "Ankit Singh",
  applicationName: "Ankit Singh Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "https://ankitsingh.dev/",
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Ankit Singh · Full Stack Engineer Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/opengraph-image.jpg`,
        secureUrl: `${siteUrl}/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Ankit Singh - Full Stack Engineer & AI Engineer Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "portfolio",
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
};

const GoogleAnalytics = () => (
  <>
    <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-NR203WYBQP"
    />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NR203WYBQP');
      `}
    </Script>
  </>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ankit Singh",
      jobTitle: "Full Stack Engineer",
      description: seoDescription,
      url: siteUrl,
      image: `${siteUrl}/ankit.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/ankitsingh122/",
        "https://github.com/ankitsingh122",
      ],
      knowsAbout: [
        "Full Stack Development",
        "AI/ML Systems",
        "RAG",
        "Next.js",
        "TypeScript",
        "Production AI",
      ],
      knowsLanguage: "en",
      jobLocation: {
        "@type": "Place",
        name: "Remote",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ankit Singh · Full Stack Engineer Portfolio",
      description: seoDescription,
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fontSans.variable} ${fontHeading.variable}`}>
      <body className={`${fontSans.className} font-sans antialiased bg-white dark:bg-black`}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SmoothScroll>
            <main className="w-full min-h-screen bg-white dark:bg-black">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
