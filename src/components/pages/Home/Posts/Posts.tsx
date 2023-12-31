import Post from './Post/Post';

const posts = [
  {
    newGear: true,
    goodCondition: true,
    type: "prod-gear",
    link: "/single/new-gear",
    userImg: "/assets/imgs/home/user-img.png",
    username: "r/buybass",
    time: new Date().setDate(new Date().getDate() - 2),
    author: "u/BgRobFox12",
    authorImg: "/assets/imgs/home/user-img-lg.png",
    authorName: "Robert Fox",
    authorRating: 5,
    authorReviewsCount: 981,
    location: "Des Plaines, IL, United States",
    postTitle: "1993 Fender Jazz Bass",
    postSubtitle: "New Gear !",
    condition: "Good Condition",
    usability: 5,
    expectation: 5,
    performance: 5,
    prodTitle: "Added as Signature",
    prodSubtitle: "Current Gear",
    prodDescription: "#So who am I Say Hello To me newest baby! Meet LALA!",
    imgs: [
      "/assets/imgs/home/prod-img-1.png",
      "/assets/imgs/home/prod-img-2.png",
      "/assets/imgs/home/prod-img-3.png",
      "/assets/imgs/home/prod-img-4.png",
    ],
    likes: "1.58 k",
    comments: "2.34 k",
    tags: ["Bass", "5 String"],
  },
  {
    ad: "assets/imgs/home/ad-4.png",
  },
  {
    type: "prod-sale",
    link: "/single/listing",
    userImg: "/assets/imgs/home/user-img.png",
    username: "r/buybass",
    time: new Date().setDate(new Date().getDate() - 2),
    author: "u/BgRobFox12",
    authorImg: "/assets/imgs/home/user-img-lg.png",
    authorName: "Robert Fox",
    authorRating: 5,
    authorReviewsCount: 981,
    location: "Des Plaines, IL, United States",
    prodTitle: "Fender Jazz Bass",
    prodSubtitle: "Current Gear",
    prodDescription: "#So who am I Say Hello To me newest baby! Meet LALA!",
    askingPrice: 348,
    bidsCount: 21,
    days: 2,
    imgs: [
      "/assets/imgs/home/prod-img-1.png",
      "/assets/imgs/home/prod-img-2.png",
      "/assets/imgs/home/prod-img-3.png",
      "/assets/imgs/home/prod-img-4.png",
    ],
    likes: "1.54 k",
    comments: "2.34 k",
    tags: ["Bass", "5 String"],
  },
  {
    type: "prod-topic",
    link: "/single/topic",
    userImg: "/assets/imgs/home/user-img.png",
    username: "r/buybass",
    time: new Date().setDate(new Date().getDate() - 2),
    author: "u/BgRobFox12",
    authorImg: "/assets/imgs/home/user-img-lg.png",
    authorName: "Robert Fox",
    authorRating: 5,
    authorReviewsCount: 981,
    location: "Des Plaines, IL, United States",
    postTitle: "Welcome guys to my account",
    postText:
      "While Corfu give us the ability to shoot by the sea with amazing blue background full of light of the sky, Florina give us its gentle side. The humble atmosphere and Light of Florina which comes from the north-west of the Earth.",
    likes: "1.54 k",
    comments: "2.34 k",
    tags: ["Bass", "5 String"],
  },
  {
    type: "prod-poll",
    link: "/single/poll",
    userImg: "/assets/imgs/home/user-img.png",
    username: "r/buybass",
    time: new Date().setDate(new Date().getDate() - 2),
    author: "u/BgRobFox12",
    authorImg: "/assets/imgs/home/user-img-lg.png",
    authorName: "Robert Fox",
    authorRating: 5,
    authorReviewsCount: 981,
    location: "Des Plaines, IL, United States",
    postTitle: "Nord or Roland?",
    options: ["Nord", "Roland"],
    votesCount: 316,
    timeLeft: "1 day 12 hours left",
    likes: "1.54 k",
    comments: "2.34 k",
    tags: ["Bass", "5 String"],
  },
  {
    ad: "assets/imgs/home/ad-4.png",
  },
  {
    type: "prod-sale",
    link: "/single/listing",
    brownBtns: true,
    userImg: "/assets/imgs/home/user-img.png",
    username: "r/buybass",
    time: new Date().setDate(new Date().getDate() - 2),
    author: "u/BgRobFox12",
    authorImg: "/assets/imgs/home/user-img-lg.png",
    authorName: "Robert Fox",
    authorRating: 5,
    authorReviewsCount: 981,
    location: "Des Plaines, IL, United States",
    prodTitle: "Fender Jazz Bass",
    prodSubtitle: "Current Gear",
    prodDescription: "#So who am I Say Hello To me newest baby! Meet LALA!",
    askingPrice: 348,
    bidsCount: 21,
    days: 2,
    imgs: [
      "/assets/imgs/home/prod-img-1.png",
      "/assets/imgs/home/prod-img-2.png",
      "/assets/imgs/home/prod-img-3.png",
      "/assets/imgs/home/prod-img-4.png",
    ],
    likes: "1.54 k",
    comments: "2.34 k",
    tags: ["Bass", "5 String"],
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((el, idx) => {
        if (el.ad)
          return (
            <img key={el.ad} className='w-full mt-6' src={el.ad} alt='ad' />
          );
        return <Post key={el.postText!} el={el} idx={idx} />;
      })}
    </div>
  );
};

export default Posts;
