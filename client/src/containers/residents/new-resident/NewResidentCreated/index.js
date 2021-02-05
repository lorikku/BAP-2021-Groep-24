import * as React from "react";
import BannerHeader from "../../../../components/global/BannerHeader";
import ResidentProfilePicture from "../../../../components/residents/detail/ResidentProfilePicture";
import "./newresidentcreated.css";

const NewResidentCreated = () => {
  return (
    <div className="newresident-header-wrapper flex-content fit-height">
      <BannerHeader
        title={"Proficiat!"}
        subtext={
          "We hebben een unieke link gemaakt die leidt naar het digitale woon-en leefplan voor deze toekomstige bewoner."
        }
        isNewResident
      />
      <div className="newresident-container">
        <div className="newresident-welkom-left">
          <p className="newresident-welkom-title">
            Welkom bij het Heilig Hart:
          </p>
          <div className="newresident-profile">
            <ResidentProfilePicture
              src={
                "https://media.istockphoto.com/photos/happy-senior-woman-picture-id1029340496?k=6&m=1029340496&s=612x612&w=0&h=4ScjIFlsN8uVI2xxijOegNZaiYn4_toD0AGciS4bejc="
              }
            />
            <p className="newresident-name">
              Mathilda <br></br> Dejonckheere
            </p>
            <p className="newresident-status">Vast verblijf</p>
            <div className="newresident-room-div">
              <p className="newresident-room">Kamer 102</p>
            </div>
          </div>
        </div>
        <div className="newresident-welkom-right">
          <p className="newresident-link-instruction">
            Kopieer de link en bezorg deze aan de toekomstige bewoner.
          </p>

          <div>
            <p className="newresident-link-title">Woon- en leef link:</p>
            <div className="newresident-link-wrapper">
              <p className="newresident-link">https://Hhart.be/wlp/34568433567</p>
              <div className="clipboard-btn">
                <img
                  className="clipboard-vector"
                  alt="clipboard icoon"
                  src="/assets/img/clipboard-misc.svg"
                ></img>
              </div>
            </div>
          </div>
          <div className="back-home-btn">
            <p className="back-home-btn-text">Terug naar overzicht</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewResidentCreated;
