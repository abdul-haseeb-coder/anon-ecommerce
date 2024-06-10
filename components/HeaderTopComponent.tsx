// import React from "react";
// import Image from "next/image";

// type SocialMediaLink = {
//   name: string;
//   url: string;
//   icon: any;
// };

// const socialMediaLinks: SocialMediaLink[] = [
//   {
//     name: "Upwork",
//     url: "https://www.upwork.com/freelancers/~017890f8a3624ddf25",
//     icon: "/icons/social/upwork.svg",
//   },
//   {
//     name: "X",
//     url: "https://x.com/AbdulHaseeb998",
//     icon: "/icons/social/x-twitter.svg",
//   },
//   {
//     name: "Github",
//     url: "https://github.com/code-haseeb",
//     icon: "/icons/social/github.svg",
//   },
//   {
//     name: "LinkedIn",
//     url: "https://www.linkedin.com/in/abdul-haseeb-akram/",
//     icon: "/icons/social/linkedin-in.svg",
//   },
// ];

// const HeaderTop: React.FC = () => {
//   return (
//     <div className="header-top">
//       <div className="container">
//         <ul className="header-social-container">
//           {socialMediaLinks.map((link, index) => (
//             <li key={index}>
//               <a
//                 href={link.url}
//                 className="social-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Image src={link.icon} alt={link.name} width={24} height={24} />
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="header-alert-news">
//           <p>
//             <b>Free Shipping</b> This Week Order Over - $55
//           </p>
//         </div>
//         <div className="header-top-actions">
//           <select name="currency">
//             <option value="usd">USD &#36;</option>
//             <option value="eur">EUR &#8364;</option>
//           </select>
//           <select name="language">
//             <option value="en-US">English</option>
//             <option value="es-ES">Espa&ntilde;ol</option>
//             <option value="fr">Fran&ccedil;ais</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderTop;
