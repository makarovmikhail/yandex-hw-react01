import {FC} from "react";
import {UserContainer, UserIconWrapper, UserText} from "./Styles";

export interface IUser {
  user: string;
}

const User: FC<IUser> = ({user}) => {
  return (
    <UserContainer>
      <UserIconWrapper />
      <UserText>{user}</UserText>
    </UserContainer>
  );
};

export default User;
