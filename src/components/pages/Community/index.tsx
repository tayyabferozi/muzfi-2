import React from "react";
import Category from "./Category";

import Filter from "./Filter";
import CommunityItems from "./CommunityItems";
import Wrapper from "../../../layouts/MainLayout/wrapper";
import Categories from "../Home/Categories";

const Community = () => {
  // ADD Communities Page(2. Browse Communities) Here ----- This is the "Browse" Tab on Left Panel

  // Once a Specific Communitity is Clicked, User will be redirected to Community Page (Single)

  return (
    <div>
      <Category category={category} />
      <Wrapper>
        <Categories />
        <Filter />
        <CommunityItems />
      </Wrapper>
    </div>
  );
};

export default Community;

const category = [
  { title: "Create", icon: "tabler:category", active: true },
  { title: "See Brands", icon: "eva:flash-outline" },
  { title: "Search by Category", icon: "cil:filter" },
  { title: "My Communities", icon: "bi:bag", value: "18" },
];
