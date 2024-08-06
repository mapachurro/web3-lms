import Landing from "@/components/Landing";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";

export default function Home() {
  const t = useTranslations("IndexPage");

  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return <Landing locale={locale} />;
}
