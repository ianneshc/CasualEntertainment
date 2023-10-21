import React from "react";
import CasualButton from "./CasualButton";
import '../styles/SocialNetwork.css';

import InstagramLogo from "../assets/logos/InstagramLogo.svg";
import FacebookLogo from "../assets/logos/FacebookLogo.svg";

interface Props {
  socialNetwork: string,
  businessTag: string,
  whereTo: string
}

const SocialNetwork: React.FC<Props> = ({ socialNetwork, businessTag, whereTo }) => {
  let socialNetworkLogo;

  if (socialNetwork === "Instagram") {
    socialNetworkLogo = InstagramLogo;
  } else {
    socialNetworkLogo = FacebookLogo;
  }

  return (
    <div className="socialContainer">
        <img src={ socialNetworkLogo } alt={`{socialNetwork} logo`} className='socialLogo' />
        <p className="socialMediaName">{ socialNetwork }</p>
        <p className="businessTag">{ businessTag }</p>
        <CasualButton action='Follow' whereTo={ whereTo }></CasualButton>
    </div>
  )
};

export default SocialNetwork;
