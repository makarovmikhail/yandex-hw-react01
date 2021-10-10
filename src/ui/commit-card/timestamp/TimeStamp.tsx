import {FC} from "react";
import {
  Calendar,
  Time,
  TextContainer,
  TimeStampContainer,
  Text
} from "./Styles";

export interface ITimeStampProps {
  date: string;
  time: string;
  theme?: "primary" | "secondary";
}

const TimeStamp: FC<ITimeStampProps> = ({date, time, theme}) => {
  return (
    <TimeStampContainer>
      <TextContainer>
        <Calendar {...{theme}} />
        <Text>{date}</Text>
      </TextContainer>
      <TextContainer>
        <Time {...{theme}} />
        <Text>{time}</Text>
      </TextContainer>
    </TimeStampContainer>
  );
};

export default TimeStamp;
