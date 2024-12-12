import Title from "@/components/Title";
import { TPages } from "./Container";

export default function PageSelector({ page }: { page: TPages }) {
  return (
    <>
      {page == 'about' && <Title />}
      {page == 'projects' && <Title />}
    </>
  );
}
