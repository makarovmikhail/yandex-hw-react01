import {
  CardContainer,
  CardContent,
  CommitDetails,
  CommitDetailsWrapper
} from "./Styles";
import {UIStatus} from "@ui/commit-card/status";
import {FC} from "react";
import {UIUser} from "./user";
import {UICommit} from "./commit";
import {UITimeStamp} from "./timestamp";

import {ReactComponent as FulfilledIcon} from "@icons/fulfilled.svg";
import {ReactComponent as PendingIcon} from "@icons/pending.svg";
import {ReactComponent as RejectedIcon} from "@icons/rejected.svg";

interface ICommitCardProps {
  id: string;
  message: string;
  branch: string;
  hash: string;
  user: string;
  date: string;
  time: string;
  status: "fulfilled" | "pending" | "rejected" | string;
  theme?: "primary" | "secondary";
}

const getStatusIcon = (status: string) => {
  if (status === "fulfilled") return <FulfilledIcon />;
  if (status === "rejected") return <RejectedIcon />;
  return <PendingIcon />;
};

const CommitCard: FC<ICommitCardProps> = ({
  id,
  message,
  branch,
  hash,
  user,
  date,
  time,
  theme,
  status
}) => {
  return (
    <CardContainer>
      <CommitDetailsWrapper>
        {getStatusIcon(status)}
        <CardContent>
          <UIStatus {...{id, message, status}} />
          <CommitDetails>
            <UICommit {...{branch, hash}} />
            <UIUser {...{user}} />
          </CommitDetails>
        </CardContent>
      </CommitDetailsWrapper>

      <UITimeStamp {...{date, time, theme}} />
    </CardContainer>
  );
};

export default CommitCard;
