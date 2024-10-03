"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Features from "./features";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

interface LandingProps {
  locale: string;
}

export default function Landing({ locale }: LandingProps) {
  // const { ready, authenticated } = usePrivy();

  // if (!ready) {
  //   return <Loading />;
  // }

  // If the user is authenticated, we'll let the ClientProvider handle the redirect
  // if (authenticated) {
  //   return <div>Redirecting...</div>;
  // }

  return (
    <main>
      <Navbar locale={locale} />
      <Header locale={locale} />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
