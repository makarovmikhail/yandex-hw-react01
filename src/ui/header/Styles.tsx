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
`;

export const ActionButton = styled.button`
  /* bg / --color-bg-control */
  background-color: #e6e6e6;
  border: none;
  padding: 0;
  border-radius: 4px;
  cursor: pointer;
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

  padding: 0px 5px;
  margin: auto;
`;
