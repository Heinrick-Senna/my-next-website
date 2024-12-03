import Title from "@/components/Title";
import { TPages } from "@/utils/types";

export default function PageSelector({ page }: { page: TPages }) {
  return (
    <>
      {page == 'about' && <Title />}
      {page == 'projects' && <Title />}
    </>
  );
}
