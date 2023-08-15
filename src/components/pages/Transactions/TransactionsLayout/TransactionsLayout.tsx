import { Outlet } from "react-router-dom";
import Jumbo from "./Jumbo";
import Tabs from "../../../common/Tabs/Tabs";

const tabs = [
  {
    to: "/transactions/account",
    icon: "/assets/vectors/transactions/purchases.svg",
    label: "Purchases",
  },
  {
    to: "/transactions/orders",
    icon: "/assets/vectors/transactions/orders.svg",
    label: "Orders",
  },
  {
    to: "/transactions/offers",
    icon: "/assets/vectors/transactions/offers.svg",
    label: "Offers",
  },
  {
    to: "/transactions/earnings",
    icon: "/assets/vectors/transactions/earnings.svg",
    label: "Earnings",
  },
  {
    to: "/transactions/my-bill",
    icon: "/assets/vectors/transactions/my-bill.svg",
    label: "My Bill",
  },
  {
    to: "/transactions/manage-listsings",
    icon: "/assets/vectors/transactions/manage-listings.svg",
    label: "Manage Listings",
  },
];

const TransactionsLayout = () => {
  return (
    <>
      <Jumbo />
      <Tabs tabsData={tabs} />

      <Outlet />
    </>
  );
};

export default TransactionsLayout;
