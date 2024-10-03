import Landing from "@/components/Landing";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  return <Landing locale={locale} />;
}
