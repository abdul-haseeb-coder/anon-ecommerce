import React from "react";
import Image from "next/image";
import { socialMediaLinks } from "./socialMediaLinks";
import page from "./page.module.css";

const SocialMediaLinks: React.FC = () => {
  return (
    <ul className={page.headerSocialContainer}>
      {socialMediaLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.url}
            className={page.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={link.icon} alt={link.name} width={18} height={18} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaLinks;
