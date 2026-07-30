import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tiger365cricket.com'),
  alternates: { canonical: '/' },
  verification: {
    google: '11Kk48JuDZOGaOotSGtLx2YB9GNvm2MeYtBWXwLV2PM',
  },
  title: 'Tiger365 Cricket | Online Cricket Betting & Sports Betting Platform',
  description:
    'Join Tiger365 Cricket for secure online cricket betting, live sports betting, instant betting IDs, competitive odds, and fast withdrawals across India.',
  keywords: [
    'Tiger365 ID',
    'Tiger 365 ID',
    'cricket betting ID',
    'online betting ID India',
    'cricket ID provider',
    'Tiger365 WhatsApp',
    'online cricket ID',
    'sports betting India',
    'IPL betting ID',
    'T20 betting',
  ],
  authors: [{ name: 'Tiger 365 ID' }],
  openGraph: {
    title: 'Tiger 365 ID â€“ Online Cricket Betting ID Provider',
    description: 'Get your Tiger365 ID and start betting on cricket, football, and live casino games. 24/7 support. Instant setup.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZQER71ZNPZ" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZQER71ZNPZ');
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://tiger365cricket.com/#organization",
                  "name": "Tiger365 Cricket",
                  "alternateName": "Tiger365ID",
                  "url": "https://tiger365cricket.com/",
                  "description": "Tiger365 Cricket provides secure online cricket betting IDs, sports betting access and live betting services for users across India.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Support",
                    "telephone": "+91-7589045547",
                    "url": "https://wa.me/917589045547",
                    "areaServed": "IN",
                    "availableLanguage": [
                      "English",
                      "Hindi"
                    ]
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://tiger365cricket.com/#website",
                  "url": "https://tiger365cricket.com/",
                  "name": "Tiger365 Cricket",
                  "publisher": {
                    "@id": "https://tiger365cricket.com/#organization"
                  },
                  "inLanguage": "en-IN",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://tiger365cricket.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://tiger365cricket.com/#webpage",
                  "url": "https://tiger365cricket.com/",
                  "name": "Tiger365 Cricket | Online Cricket Betting & Sports Betting Platform",
                  "description": "Join Tiger365 Cricket for secure online cricket betting, live sports betting, instant betting IDs, competitive odds, and fast withdrawals across India.",
                  "isPartOf": {
                    "@id": "https://tiger365cricket.com/#website"
                  },
                  "about": {
                    "@id": "https://tiger365cricket.com/#organization"
                  },
                  "breadcrumb": {
                    "@id": "https://tiger365cricket.com/#breadcrumb"
                  },
                  "inLanguage": "en-IN"
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://tiger365cricket.com/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://tiger365cricket.com/"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://tiger365cricket.com/#service",
                  "name": "Online Cricket Betting & Sports Betting",
                  "provider": {
                    "@id": "https://tiger365cricket.com/#organization"
                  },
                  "description": "Tiger365 Cricket provides cricket betting IDs, live sports betting access, online casino games and fast deposits and withdrawals for Indian users.",
                  "serviceType": [
                    "Cricket Betting ID",
                    "Online Cricket Betting",
                    "Sports Betting",
                    "Live Betting",
                    "Casino Games",
                    "Fast Withdrawals"
                  ],
                  "areaServed": {
                    "@type": "Country",
                    "name": "India"
                  },
                  "availableChannel": {
                    "@type": "ServiceChannel",
                    "serviceUrl": "https://tiger365cricket.com/",
                    "availableLanguage": [
                      "English",
                      "Hindi"
                    ]
                  }
                },
                {
                  "@type": "SiteNavigationElement",
                  "@id": "https://tiger365cricket.com/#navigation",
                  "name": [
                    "Home",
                    "Blog",
                    "CPL 2026 Betting Strategy"
                  ],
                  "url": [
                    "https://tiger365cricket.com/",
                    "https://tiger365cricket.com/blog",
                    "https://tiger365cricket.com/cpl-2026-betting-strategy"
                  ]
                },
                {
                  "@type": "RegisterAction",
                  "@id": "https://tiger365cricket.com/#register",
                  "name": "Register for a Tiger365 Cricket Betting ID",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://wa.me/917589045547",
                    "actionPlatform": [
                      "https://schema.org/DesktopWebPlatform",
                      "https://schema.org/MobileWebPlatform"
                    ]
                  },
                  "agent": {
                    "@id": "https://tiger365cricket.com/#organization"
                  },
                  "result": {
                    "@type": "Thing",
                    "name": "Tiger365 Cricket Betting ID"
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://tiger365cricket.com/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Where can I find the Tiger365ID WhatsApp number?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can find the official Tiger365 ID WhatsApp number on this website. Simply click any 'GET TIGER 365 ID' button to connect with our support team. Our official WhatsApp number is +91 75890 45547 and customer support is available 24 hours a day."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I access multiple platforms with a Tiger365ID account?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. A Tiger365 ID can provide access to multiple betting exchanges and platforms, allowing users to enjoy cricket betting, football betting, live casino games, Aviator, Teen Patti and many other betting markets using a single account."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Tiger365ID 24/7 service mean?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tiger365 Cricket provides customer support 24 hours a day, 7 days a week. Users can receive assistance with account creation, deposits, withdrawals and betting-related queries through WhatsApp."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the Tiger365ID login secure?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Tiger365 Cricket uses secure encrypted connections to help protect user accounts and personal information. Security measures are regularly maintained to provide a safe betting experience."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I play Cricket ID and Aviator games with Tiger365ID?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Tiger365 ID provides access to live cricket betting, Aviator, Dragon Tiger, Roulette, Teen Patti and various online casino games using a single betting ID."
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
