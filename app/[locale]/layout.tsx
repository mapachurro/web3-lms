import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ClientProvider from "../client";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_BASE_URL || ""),
  title: "Basics Academy",
  description:
    "A vernacular gamified based academy to help people learn, earn & build on the future of crypto. ",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Basics Academy",
    description:
      "A vernacular gamified based academy to help people learn, earn & build on the future of crypto. ",
    url: "/",
    // images: "/images/preview.png",
    siteName: "Basics Academy",
    locale: "en_US",
    type: "website",
  },
};

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
