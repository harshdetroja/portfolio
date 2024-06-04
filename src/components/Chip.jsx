export function Chip({ title, color }) {
  return (
    <span
      className={`p-2 bg-bodyBg text-center border-[1px] ${color} rounded-md`}
    >
      {title}
    </span>
  );
}
