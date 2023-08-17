const listingData = [
  {
    name: "Fender Jazz Standard Bass Pickups with control plate",
    condition: "Excellent",
    time: "over 1 year old",
    price: "$100",
    views: 239,
    watchers: 9,
    offers: 3,
    order: 1,
    bumped: 4.5,
  },
  {
    name: "Fender Jazz Standard Bass Pickups with control plate",
    condition: "Excellent",
    time: "over 1 year old",
    price: "$100",
    views: 239,
    watchers: 9,
    offers: 3,
    order: 1,
    bumped: 4.5,
  },
  {
    name: "Fender Jazz Standard Bass Pickups with control plate",
    condition: "Excellent",
    time: "over 1 year old",
    price: "$100",
    views: 239,
    watchers: 9,
    offers: 3,
    order: 1,
    bumped: 4.5,
  },
];

const ManageListings = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center gap-5 text-xs">
        <div className="bg-white p-3 w-max text-sm">
          <div className="rounded-lg flex items-center gap-2 text-accentGray-200">
            <img src="/assets/vectors/common/location.svg" alt="location" />
            Order Status
          </div>
          All
        </div>
        <button className="bg-white border-[2px] border-solid border-accentGray-950 h-11 px-6 rounded-full font-bold hover:-translate-y-1 transition-transform">
          Create a Listing
        </button>
      </div>

      <div className="mt-10">
        {listingData.map((el, idx) => {
          return (
            <div
              className="border rounded-md border-solid bg-accentGray-30 border-accentGray-950 mb-2"
              key={"listing-" + idx}
            >
              <div className="p-4 rounded-md">
                <div className="flex items-end sm:items-start justify-between gap-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-start text-accentGray-60">
                    <div className="w-24 h-24 bg-gray-400 flex-shrink-0"></div>
                    <div>
                      <div className="font-bold underline">{el.name}</div>
                      <div>{el.condition} Condition</div>
                      <div>{el.time}</div>
                    </div>
                  </div>

                  <div className="text-end flex-shrink-0">
                    <div className="text-xl font-bold">{el.price}</div>
                    <div>{el.views} Views</div>
                    <div>{el.watchers} Watchers</div>
                    <div className="underline">{el.offers} Offers</div>
                    <div className="underline">{el.order} Order</div>
                    <div className="">Bumped {el.bumped}%</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-solid border-accentGray-150 py-3 px-4 flex gap-5 flex-wrap justify-between items-center">
                <div className="text-accentBlue-300 font-bold">LIVE</div>
                <div className="flex flex-wrap sm:flex-nowrap gap-4">
                  <button className="flex gap-2 items-center bg-white border-[2px] border-solid border-accentGray-950 h-10 px-6 rounded-full font-bold">
                    Edit{" "}
                    <img src="/assets/vectors/common/caret.svg" alt="caret" />
                  </button>
                  <button className="flex gap-2 items-center bg-white border-[2px] border-solid border-accentGray-950 h-10 px-6 rounded-full font-bold">
                    Sale{" "}
                    <img src="/assets/vectors/common/caret.svg" alt="caret" />
                  </button>
                  <button className="flex gap-2 items-center bg-white border-[2px] border-solid border-accentGray-950 h-10 px-6 rounded-full font-bold">
                    Bump
                  </button>
                  <button className="flex gap-2 items-center bg-white border-[2px] border-solid border-accentGray-950 h-10 px-6 rounded-full font-bold">
                    Direct Offers
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ManageListings;
