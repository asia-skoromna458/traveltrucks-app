import { getCamperById } from "@/app/services/api";

import CamperPageClient from "./CamperPageClient";

export default async function CamperPage({
  params,
}: {
  params: { camperId: string };
}) {
  const { camperId } = await params;

  const camper = await getCamperById(camperId);

  return <CamperPageClient camper={camper} />;
}
