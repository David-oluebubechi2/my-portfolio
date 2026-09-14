import { StarIcon } from "./icons";

const row = (
  <>
    <span className="whitespace-nowrap text-soft">LATEST WORK AND </span>
    <span className="whitespace-nowrap text-paper">FEATURED </span>
    <StarIcon className="mx-5 inline-block h-3 w-3 shrink-0 fill-primary" />
  </>
);

const half = (
  <span className="flex items-center whitespace-nowrap">
    {row}
    {row}
    {row}
    {row}
  </span>
);

export default function Marquee() {
  return (
    <div className="card overflow-hidden px-6 py-4" aria-hidden="true">
      <div className="marquee">
        <div className="marquee-track text-xs">
          {half}
          {half}
        </div>
      </div>
    </div>
  );
}
