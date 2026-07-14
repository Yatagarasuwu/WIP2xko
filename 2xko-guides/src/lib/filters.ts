import { Resource } from "@/types/resource";

type Filters = {
  championId?: string;
  type?: string;
  tag?: string;
  search?: string;
};

export function filterResources(
  resources: Resource[],
  filters: Filters
) {
  return resources.filter((r) => {
    if (filters.championId && r.championId !== filters.championId) {
      return false;
    }

    if (filters.type && r.type !== filters.type) {
      return false;
    }

    if (
      filters.tag &&
      !r.tags.includes(filters.tag)
    ) {
      return false;
    }

    if (
      filters.search &&
      !r.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    return true;
  });
}