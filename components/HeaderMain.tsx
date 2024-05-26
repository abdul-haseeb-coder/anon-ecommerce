
import React from 'react';
import Image from 'next/image'; // Only if using Next.js, otherwise use <img> tag.
import { IonIcon } from '@ionic/react';
import { personOutline, heartOutline, bagHandleOutline, searchOutline } from 'ionicons/icons';

const HeaderMain = () => {
  return (
    <div className="header-main">
      <div className="container">
        <a href="#" className="header-logo">
          <Image src="/assets/images/logo/logo.svg" alt="Anon's logo" width={120} height={36} />
        </a>
        <div className="header-search-container">
          <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
          <button className="search-btn">
            <IonIcon icon={searchOutline} />
          </button>
        </div>
        <div className="header-user-actions">
          <button className="action-btn">
            <IonIcon icon={personOutline} />
          </button>
          <button className="action-btn">
            <IonIcon icon={heartOutline} />
            <span className="count">0</span>
          </button>
          <button className="action-btn">
            <IonIcon icon={bagHandleOutline} />
            <span className="count">0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;

