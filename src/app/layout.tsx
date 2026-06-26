import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Doto } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const fontClock = Doto({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-clock",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontHeading.variable} ${fontMono.variable} ${fontClock.variable}`}
    >
      <body suppressHydrationWarning className={`${fontSans.className} font-sans antialiased bg-background text-foreground`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SmoothScroll>
            <main className="relative w-full min-h-screen">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
