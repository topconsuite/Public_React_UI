import TopconTheConcretesuiteAsset from "./TopconTheConcreteSuite.svg";
import TopconDispatchLogoAsset from "./TopconDispatch.svg";
import TopconDispatchAlternativeLogoAsset from "./TopconDispatchAlternative.svg";
import TopconCustomerLogoAsset from "./TopconCustomer.svg";
import TopconIdentityLogoAsset from "./TopconIdentity.svg";
import TopconTechLogoAsset from "./TopconTech.svg";

export const iconTypes = {
  TopconDispatchLogoAsset,
  TopconCustomerLogoAsset,
  TopconIdentityLogoAsset,
  TopconTechLogoAsset
};

const iconOptions = {
  control: "select",
  options: Object.keys(iconTypes),
  description: "Ícone SVG"
};

export {
  iconOptions, TopconTheConcretesuiteAsset, TopconDispatchAlternativeLogoAsset, TopconDispatchLogoAsset, TopconCustomerLogoAsset, TopconIdentityLogoAsset, TopconTechLogoAsset
};
