export default function ResourceFilters({
  filters,
  setFilters,
}: any) {
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      <input
        placeholder="Search..."
        className="border p-1 text-sm"
        onChange={(e) =>
          setFilters((f: any) => ({
            ...f,
            search: e.target.value,
          }))
        }
      />

      <select
        onChange={(e) =>
          setFilters((f: any) => ({
            ...f,
            type: e.target.value || undefined,
          }))
        }
        className="border p-1 text-sm"
      >
        <option value="">All Types</option>
        <option value="combo">Combo</option>
        <option value="mixup">Mixup</option>
        <option value="oki">Oki</option>
        <option value="neutral">Neutral</option>
        <option value="pressure">Pressure</option>
        <option value="punish">Punish</option>
      </select>
    </div>
  );
}