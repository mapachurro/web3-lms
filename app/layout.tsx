import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_API_BASE_URL || ""),
  title: "Basics",
  description: "Surf School for Base, but cooler",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Basics",
    description: "Surf School for Base, but cooler",
    url: "/",
    images: "/images/preview.png",
    siteName: "Basics",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
