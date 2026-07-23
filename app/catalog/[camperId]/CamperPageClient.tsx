import { Camper } from "@/app/types/camper";
interface CamperCardProp {
  camper: Camper;
}
export default function CamperPageClient({ camper }: CamperCardProp) {
  return (
    <>
      <div className="details">
        <h1>{camper.name}</h1>
      </div>
    </>
  );
}
