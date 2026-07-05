import { Resource } from "@/types/resource";
import ResourceCard from "./ResourceCard";

export default function ResourceList({
  resources,
}: {
  resources: Resource[];
}) {
  return (
    <div className="grid gap-3">
      {resources.map((r) => (
        <ResourceCard key={r.id} resource={r} />
      ))}
    </div>
  );
}