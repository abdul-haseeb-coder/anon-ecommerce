import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faUpwork,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./HeaderTop.module.css";
type SocialMediaLink = {
  name: string;
  url: string;
  icon: any;
};

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~017890f8a3624ddf25",
    icon: faUpwork,
  },
  { name: "X", url: "https://x.com/AbdulHaseeb998", icon: faXTwitter },
  { name: "Github", url: "https://github.com/code-haseeb", icon: faGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdul-haseeb-akram/",
    icon: faLinkedinIn,
  },
];

const HeaderTop: React.FC = () => {
  return (
    <div className="header-top">
      <div className="container">
        <ul className="header-social-container">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="social-link"
                target="_blank"
                aria-label={link.name}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
