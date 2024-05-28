
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



interface SocialLinkProps {
  href: string;
  icon: string;
  alt: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, alt }) => {
  return (
    <li>
      <Link href={href} className="social-link">
        <Image src={icon} alt={alt} width={24} height={24} />
      </Link>
    </li>
  );
};

export default SocialLink;

