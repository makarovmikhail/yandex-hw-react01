import styled from "styled-components";
import {ReactComponent as SettingsIcon} from "@icons/settings.svg";
import {ReactComponent as RunIcon} from "@icons/run.svg";

// .font_loaded body {
//   font-family: "YS Text", "Helvetica Neue", Arial, sans-serif;
//   -webkit-font-feature-settings: "liga", "kern";
//   -moz-font-feature-settings: "liga", "kern";
//   font-feature-settings: "liga", "kern";
// }

const getHeaderTextTheme = (theme: string) => {
  if (theme === "secondary")
    return {
      color: "#000000",
      lineHeight: 1.25
    };
  return {
    color: "#7f8285",
    lineHeight: 1.17
  };
};

export const HeaderContainer = styled.div`
  grid-area: header;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  box-sizing: border-box;
  padding: 10px 100px;
  width: 100%;
  background-color: transparent;
  @media (max-width: 320px) {
    padding: 12px 16px;
    height: auto;
  }
  @media (max-width: 800px) {
    padding: 12px 30px;
    height: auto;
  }
`;

export const HeaderText = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: ${(props) => getHeaderTextTheme(props.theme).lineHeight};
  letter-spacing: 0.25px;
  /* --blue-grey-500 */
  color: ${(props) => getHeaderTextTheme(props.theme).color};
  @media (max-width: 320px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: auto;
`;

export const ActionButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 8px;
  @media (max-width: 320px) {
    padding: 8px;
  }
  @media (max-width: 800px) {
    padding: 8px;
  }
`;

export const ActionButton = styled.button`
  /* bg / --color-bg-control */
  background-color: #e6e6e6;
  border: none;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 320px) {
    width: 100%;
  }
`;

export const SettingsIconWrapper = styled(SettingsIcon)`
  margin: auto;
`;

export const RunIconWrapper = styled(RunIcon)`
  margin: auto;
`;

export const ActionButtonText = styled.div`
  font-family: "YS Text";
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 2.15;
  /* typo / --color-text */
  color: #000000;
  margin: auto;
  padding: 0px 5px;
`;

export const ActionButtonTextContainer = styled.div`
  @media (max-width: 320px) {
    display: none;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;
