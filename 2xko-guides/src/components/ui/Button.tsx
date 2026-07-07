export default function Button({
  children,
  ...props
}: any) {
  return (
    <button
      {...props}
      className="px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-sm"
    >
      {children}
    </button>
  );
}