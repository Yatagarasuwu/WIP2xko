import { Resource } from "@/types/resource";

export default function ResourceCard({
  resource,
}: {
  resource: Resource;
}) {
  return (
    <div className="border border-zinc-800 rounded p-3">
      <div className="text-sm font-semibold">
        {resource.title}
      </div>

      <div className="text-xs text-zinc-500">
        {resource.type}
      </div>

      <div className="flex gap-1 flex-wrap mt-2">
        {resource.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-2 text-xs text-zinc-400">
        {resource.description}
      </div>
    </div>
  );
}