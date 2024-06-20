export function LCchip({ title, count, color, border }) {
  return (
    <>
      <div
        className={`text-sm text-center border-[1px] w-20 ${border} rounded-md`}
      >
        <div className={`${color}`}>{title}</div>
        <div className="text-white">{count}</div>
      </div>
    </>
  );
}
