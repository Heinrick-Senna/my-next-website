import Container from "@/components/Container";
import SocialLinks from "@/components/socialLinks";

export default function Home() {
  return (
    <div className="grid bg-red grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
        <Container />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center relative">
        <SocialLinks />
      </footer>
    </div>
  );
}
