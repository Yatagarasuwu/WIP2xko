export default function Modal({ open, children }: any) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="bg-zinc-900 p-4 rounded">
        {children}
      </div>
    </div>
  );
}