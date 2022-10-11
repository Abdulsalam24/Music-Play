function ReleaseItem({ rel }) {
  return (
    <div className="min-h-8">
      <div className="relative h-full rounded-xl py-3 px-2 bg-dark">
        <div className="w-40 h-40">
          <img
            className="block rounded pointer-events-none cursor-pointer"
            src={rel.img}
            alt={rel.desc}
          />
        </div>
      </div>
    </div>
  );
}

export default ReleaseItem;
