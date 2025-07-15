import { Header } from "@/components/header/header";
import { Content } from "@/components/content/content";
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="flex-col justify-center">
      <Header />
      <Content />
      <footer className="w-full h-30"></footer>
    </div>
  );
}
