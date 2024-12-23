import Container from "@/components/Container";
import RainEffect from "@/components/RainEffect";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <RainEffect />
      <div className="relative grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen p-12 md:p-8">
        <main className="lg:absolute flex flex-col gap-8 items-center sm:items-start z-10 mb-12 lg:mb-0 md:max-w-[50vw]">
          <Container />
        </main>
        <footer className="flex gap-6 flex-wrap items-center justify-center self-end relative z-10">
          <SocialLinks />
        </footer>
      </div>
    </>
  );
}
