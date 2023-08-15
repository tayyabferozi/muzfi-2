import { useState } from "react";
import Card from "../../../../../common/Card";
import "../Post.css";
import { Author } from "../common/author";
import { CardFooter } from "../common/card-footer";
import { User } from "../common/user";
import { Link } from "react-router-dom";

const Topic = ({ el, idx }: { el: any; idx: number }) => {
  const [isExpandedState, setIsExpandedState] = useState(false);
  console.log(
    el,
    " lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum fuga."
  );
  return (
    <Link to={el.link}>
      <Card className="h-full home-post" key={"home-post" + idx}>
        <User el={el} />
        <hr />
        <Author topic el={el} idx={idx} />
        {el.postTitle && (
          <div className="mt-3 text-2xl font-medium">{el.postTitle}</div>
        )}
        {el.postText && (
          <div className="mt-3 text-base font-normal">
            {isExpandedState ? (
              <>
                {el.postText}{" "}
                {el.postText.length > 194 && (
                  <span
                    className="cursor-pointer text-accentYellow-500"
                    onClick={() => setIsExpandedState(false)}
                  >
                    Read less
                  </span>
                )}
              </>
            ) : (
              <>
                {el.postText.slice(0, 194)}
                {el.postText.length > 194 && (
                  <>
                    ...{" "}
                    <span
                      className="cursor-pointer text-accentYellow-500"
                      onClick={() => setIsExpandedState(true)}
                    >
                      Read more
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        )}
        <CardFooter el={el} idx={idx} />
      </Card>
    </Link>
  );
};

export default Topic;
