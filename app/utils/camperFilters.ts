import { CamperFilters } from "@/app/types/filter";

export const buildCamperParams = (
  filters: CamperFilters,
  page = 1
) => ({
  page,
  perPage: 4,
  ...(filters.location && { location: filters.location }),
  ...(filters.form && { form: filters.form }),
  ...(filters.engine && { engine: filters.engine }),
  ...(filters.transmission && {
    transmission: filters.transmission,
  }),
});