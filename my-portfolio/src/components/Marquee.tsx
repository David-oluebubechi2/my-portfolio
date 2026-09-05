import { StarIcon } from "./icons";

const row = (
  <>
    <span className="text-soft">LATEST WORK AND</span>
    <span className="text-paper"> FEATURED </span>
    <StarIcon className="mx-5 inline-block h-3 w-3 fill-primary" />
  </>
);

const half = (
  <span className="flex items-center">
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