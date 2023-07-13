import LightBlueBtn from "components/buttons/LightBlueBtn";

const reviews = [
  {
    img: "/assets/imgs/home/user-img-8.png",
    name: "Tom Hardy",
    time: "2 weeks ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    flowers: "1,65,201",
  },
  {
    img: "/assets/imgs/home/user-img-9.png",
    name: "Matt Damon",
    time: "2 weeks ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    flowers: "1,65,201",
  },
  {
    img: "/assets/imgs/home/user-img-10.png",
    name: "Bri Larson",
    time: "2 weeks ago",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    flowers: "1,65,201",
  },
];

const Reviews2 = () => {
  return (
    <div>
      <h4 className="mb-5 text-base">Pro Talk</h4>

      <div>
        {reviews.map((el, idx) => {
          return (
            <div className="mb-[18px]" key={"home-top-gear" + idx}>
              <div className="flex items-start gap-[14px]">
                <img
                  className="w-[46px] h-[46px] rounded-[50%] flex-shrink-0"
                  src={el.img}
                  alt={el.name}
                />
                <div className="mt-[2px] flex-grow flex justify-between items-center">
                  <div>
                    <div className="text-xs font-semibold">{el.name}</div>
                    <div className="flex justify-start items-center gap-[3px] mt-[2px]">
                      <img src="/assets/vectors/home/flower.svg" alt="flower" />
                      <div className="text-[9px] font-medium">{el.flowers}</div>
                    </div>
                  </div>
                  <div className="text-accentGray-700 font-sm">{el.time}</div>
                </div>
              </div>

              <div className="mt-1 text-sm">{el.review}</div>
            </div>
          );
        })}
        <LightBlueBtn label="View All" />
      </div>
    </div>
  );
};

export default Reviews2;
