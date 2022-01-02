import { memo, useContext } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
// react hooks版
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // react hooks版
  // どのContextを利用するかuseContextに引数で指定する。
  // const { userInfo } = useContext(UserContext);

  // recoil版
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  console.log("UserIconWithName");
  return (
    <SContainer>
      <SImage hight={160} width={160} alt={name} src={image} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
