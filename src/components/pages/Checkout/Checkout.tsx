import GradientBtn from "../../buttons/GradientBtn/GradientBtn";
import Card from "../../common/Card";
import Checkbox from "../../common/Checkbox";
import Select from "../../common/select2";

const months = [
  {
    label: "Jan",
    value: "january",
  },
  {
    label: "Feb",
    value: "february",
  },
  {
    label: "Mar",
    value: "march",
  },
  {
    label: "Apr",
    value: "april",
  },
  {
    label: "May",
    value: "may",
  },
  {
    label: "Jun",
    value: "june",
  },
  {
    label: "July",
    value: "july",
  },
  {
    label: "Aug",
    value: "august",
  },
  {
    label: "Sep",
    value: "september",
  },
  {
    label: "Oct",
    value: "october",
  },
  {
    label: "Nov",
    value: "november",
  },
  {
    label: "Dec",
    value: "december",
  },
];

const years = [
  {
    label: "2036",
    value: "2036",
  },
  {
    label: "2035",
    value: "2035",
  },
  {
    label: "2034",
    value: "2034",
  },
  {
    label: "2033",
    value: "2033",
  },
  {
    label: "2032",
    value: "2032",
  },
  {
    label: "2031",
    value: "2031",
  },
  {
    label: "2030",
    value: "2030",
  },
  {
    label: "2029",
    value: "2029",
  },
  {
    label: "2028",
    value: "2028",
  },
  {
    label: "2027",
    value: "2027",
  },
  {
    label: "2026",
    value: "2026",
  },
  {
    label: "2025",
    value: "2025",
  },
  {
    label: "2024",
    value: "2024",
  },
  {
    label: "2023",
    value: "2023",
  },
  {
    label: "2022",
    value: "2022",
  },
  {
    label: "2021",
    value: "2021",
  },
  {
    label: "2020",
    value: "2020",
  },
  {
    label: "2019",
    value: "2019",
  },
  {
    label: "2018",
    value: "2018",
  },
  {
    label: "2017",
    value: "2017",
  },
  {
    label: "2016",
    value: "2016",
  },
  {
    label: "2015",
    value: "2015",
  },
  {
    label: "2014",
    value: "2014",
  },
  {
    label: "2013",
    value: "2013",
  },
  {
    label: "2012",
    value: "2012",
  },
];

const Checkout = () => {
  return (
    <div className="font-montserrat">
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-8">
          <Card>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-semibold">Payment Method</h3>
              <div className="text-[#66C600] flex gap-2 items-center">
                DONE <img src="/assets/vectors/checkout/tick.svg" alt="tick" />
              </div>
            </div>

            <div className="flex justify-between items-center flex-wrap mt-4 gap-2">
              <img src="/assets/vectors/checkout/visa.svg" alt="visa" />
              <img
                src="/assets/vectors/checkout/mastercard.svg"
                alt="mastercard"
              />
              <img src="/assets/vectors/checkout/maestro.svg" alt="maestro" />
              <img
                src="/assets/vectors/checkout/american-express.svg"
                alt="american-express"
              />
              <img src="/assets/vectors/checkout/paypal.svg" alt="paypal" />
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-semibold">Card Details</h3>
              <div className="text-[#66C600] flex gap-2 items-center">
                DONE <img src="/assets/vectors/checkout/tick.svg" alt="tick" />
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-7">
                <div className="text-accentGray-200 text-xs font-semibold">
                  Card Number
                </div>
                <div className="relative">
                  <input
                    className="rounded-lg border border-solid border-accentGray-400 bg-accentGray-50 h-12 outline-none w-full p-3 my-1"
                    type="text"
                  />
                </div>
                <div className="text-accentGray-200 text-xs">
                  The digit on the front of your card
                </div>
              </div>
              <div className="mb-7">
                <div className="text-accentGray-200 text-xs font-semibold">
                  Card Holder Name
                </div>
                <div className="relative">
                  <input
                    className="rounded-lg border border-solid border-accentGray-400 bg-accentGray-50 h-12 outline-none w-full p-3 my-1"
                    type="text"
                  />
                  <img
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                    src="/assets/vectors/checkout/mastercard-input.svg"
                    alt="mastercard"
                  />
                </div>
                <div className="text-accentGray-200 text-xs">
                  The name on the front of your card
                </div>
              </div>
              <div className="mb-7 flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="text-accentGray-200 text-xs font-semibold">
                    Expiration date
                  </div>
                  <div className="my-1 flex gap-4">
                    <Select
                      uniqueKey="month"
                      defaultValue="Jan"
                      options={months}
                      description=""
                    />
                    <Select
                      uniqueKey="month"
                      defaultValue="20023"
                      options={years}
                      description=""
                    />
                  </div>
                  <div className="text-accentGray-200 text-xs">
                    The date your credit card expires
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="text-accentGray-200 text-xs font-semibold">
                    CVV
                  </div>
                  <div className="relative my-1">
                    <input
                      className="rounded-lg border border-solid border-accentGray-400 bg-accentGray-50 h-12 outline-none w-full p-3"
                      type="text"
                    />
                    <img
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      src="/assets/vectors/checkout/cvv.svg"
                      alt="cvv"
                    />
                  </div>
                  <div className="text-accentGray-200 text-xs">
                    Find this on the back of your card
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <Card className="col-span-12 md:col-span-4 flex flex-col justify-between">
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-[18px] font-semibold">Summary</h3>
            </div>

            <div className="text-accentGray-200 text-xs font-semibold">
              3 items
            </div>

            <div>
              <div className="flex justify-between gap-3 my-3">
                <div>1 x MSTTMS bunkbed</div>
                <div className="flex-shrink-0">$ 399.99</div>
              </div>
              <div className="flex justify-between gap-3 my-3">
                <div>1 x MSTTMS bunkbed</div>
                <div className="flex-shrink-0">$ 120.50</div>
              </div>
            </div>
            <hr className="border-accentGray-600 my-4" />
            <div>
              <div className="flex justify-between gap-3 my-3">
                <div>Shipping</div>
                <div className="flex-shrink-0">$ 58.00</div>
              </div>
              <div className="flex justify-between gap-3 my-3">
                <div>Shipping</div>
                <div className="flex-shrink-0">$ 20.0</div>
              </div>
            </div>
            <hr className="border-accentGray-600 my-4" />
          </div>

          <div className="flex justify-between items-center my-2">
            <div className="font-bold text-base">Shipping</div>
            <div className="font-bold text-base">$ 20.0</div>
          </div>
        </Card>
      </div>
      <div className="mt-5">
        <Card className="p-[16px]">
          <Checkbox
            id="tos"
            label={
              <>
                <strong> I agree to PGateWay's</strong> Terms & Conditions.
              </>
            }
          />
        </Card>
        <Card className="p-[16px]">
          <Checkbox
            id="account"
            label={
              <>
                <strong>I Would like to create</strong> an PGateWay account.
              </>
            }
          />
        </Card>

        <GradientBtn
          className="w-full mt-5 max-w-[400px] mx-auto"
          label="Finish & Pay"
        />
      </div>
    </div>
  );
};

export default Checkout;
