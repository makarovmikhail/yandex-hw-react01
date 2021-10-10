import styled from "styled-components";
import {ReactComponent as CalendarIcon} from "@icons/calendar.svg";
import {ReactComponent as TimeIcon} from "@icons/time.svg";

const getColorTheme = (theme: string) => {
  if (theme === "primary")
    return {
      opacity: 1
    };
  return {
    opacity: 0.2
  };
};

export const TimeStampContainer = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 8px;
  justify-content: space-between;
  height: 100%;
`;

export const Text = styled.span`
  font-family: "YS Text", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 1.23;
  letter-spacing: 0.06px;
  color: #000000;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const Calendar = styled(CalendarIcon)`
  display: flex;
  opacity: ${(props) => getColorTheme(props.theme).opacity};
`;

export const Time = styled(TimeIcon)`
  display: flex;
  opacity: ${(props) => getColorTheme(props.theme).opacity};
`;
