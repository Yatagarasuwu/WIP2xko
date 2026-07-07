export default function Card({ children }: any) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
      {children}
    </div>
  );
}