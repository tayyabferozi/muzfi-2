import React from 'react';
import { Link} from "react-router-dom";

const resources = [
  {
    to: "/",
    icon: "/assets/vectors/sidebar/music.svg",
    label: "Advertise",
  },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Help" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Careers" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "About Muzfi" },
  { to: "/", icon: "/assets/vectors/sidebar/music.svg", label: "Policy" },

];
const Resources = () => {
  return (
    <div>
      {" "}
      <h5 className="mb-3 text-white">Resources</h5>
      {resources.map((el, idx) => {
        return (
          <Link
            to={el.to}
            className="flex items-center gap-[14px] p-3 rounded-lg transition-colors hover:bg-primary-700"
            key={"sidebar-topic-item" + idx}
          >
            <div>
              <img src={el.icon} alt={el.label} />
            </div>
            <div className="text-base font-semibold text-white text-sm">{el.label}</div>
          </Link>
        );
      })}
    </div>
  );
}

export default Resources