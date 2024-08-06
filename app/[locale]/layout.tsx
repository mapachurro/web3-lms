import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ClientProvider from "../client";
import { locales } from "@/lib/locales";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_BASE_URL || ""),
  title: "Basics",
  description: "Surf school for base, but cooler",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Basics",
    description: "Surf school for base, but cooler",
    url: "/",
    siteName: "Basics",
    locale: "en_US",
    type: "website",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  // Receive messages provided in `i18n.ts`
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientProvider>{children}</ClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
