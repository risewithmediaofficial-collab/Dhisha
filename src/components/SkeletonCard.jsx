/* All skeleton classes are driven by the `.shimmer` utility in index.css */

export function SkeletonPropertyCard() {
  return (
    <div className="bg-white border border-line rounded-[14px] overflow-hidden" aria-hidden="true">
      {/* Image placeholder */}
      <div className="shimmer w-full aspect-[4/3] rounded-none" />

      {/* Body */}
      <div className="p-6 flex flex-col gap-3">
        <div className="shimmer w-[70px] h-5 rounded-[3px]" />
        <div className="shimmer w-4/5 h-[22px]" />
        <div className="shimmer w-full h-3.5" />
        <div className="shimmer w-[65%] h-3.5" />
        <div className="flex gap-2.5 mt-1">
          <div className="shimmer h-7 w-[70px] rounded" />
          <div className="shimmer h-7 w-[90px] rounded" />
        </div>
        <div className="shimmer w-full h-11 rounded mt-1" />
      </div>
    </div>
  )
}

export default function SkeletonPropertyGrid({ count = 6 }) {
  return (
    <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonPropertyCard key={i} />
      ))}
    </div>
  )
}
