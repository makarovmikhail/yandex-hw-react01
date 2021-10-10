import styled from "styled-components";

const getColorTheme = (theme: string) => {
  if (theme === "primary")
    return {
      backgroundColor: "#ffcc00",
      hoverBackgroundColor: "#f2c200",
      focusBorderColor: "#b38f00"
    };
  return {
    backgroundColor: "#e6e6e6",
    hoverBackgroundColor: "#dbdbdb",
    focusBorderColor: "#b3b3b3"
  };
};

export const PrimaryButton = styled.button`
  background-color: ${(props) => getColorTheme(props.theme).backgroundColor};
  border: none;
  border-radius: 4px;
  padding: 0px 20px;
  &:hover {
    background-color: ${(props) =>
      getColorTheme(props.theme).hoverBackgroundColor};
    cursor: pointer;
  }
  &:focus {
    border: 2px solid ${(props) => getColorTheme(props.theme).focusBorderColor};
    box-sizing: border-box;
  }
  &:disabled {
    background-color: #f2f2f2;
    border-radius: 4px;
  }
`;

export const Label = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 2.77;
  text-align: center;
  /* typo / --color-text */
  color: #000000;
`;
