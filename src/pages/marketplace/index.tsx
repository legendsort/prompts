export default function Marketplace() {
  return (
    <>
      <div className="grid grid-cols-10 gap-4">
        <div id="filterSection" className="col-span-1">
          <div className="flex flex-col">
            <p>Sort By </p>
          </div>
          <div className="flex flex-col">
            <p>Prompts</p>
          </div>
        </div>
        <div id="trendingPrompts" className="col-span-9">
          <h3>Trending Prompts</h3>
        </div>
      </div>
    </>
  );
}
