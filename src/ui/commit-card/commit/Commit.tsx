import {FC} from "react";
import {
  BranchText,
  CommitContainer,
  CommitIconWrapper,
  HashText
} from "./Styles";

export interface ICommit {
  branch: string;
  hash: string;
}

const Commit: FC<ICommit> = ({branch, hash}) => {
  return (
    <CommitContainer>
      <CommitIconWrapper />
      <BranchText>{branch}</BranchText>
      <HashText>{hash}</HashText>
    </CommitContainer>
  );
};

export default Commit;
