import ResourceCard from "@/components/resources/ResourceCard";
import { Resource } from "@/types/resource";

type Props = {
  resources: Resource[];
};

export default function TeamResourceList({
  resources,
}: Props) {

  if (resources.length === 0) {
    return (
      <div className="text-zinc-500">
        This team has no resources yet.
      </div>
    );
  }


  return (
    <div className="space-y-4">

      {resources.map((resource) => (

        <ResourceCard
          key={resource.id}
          resource={resource}
        />

      ))}

    </div>
  );
}