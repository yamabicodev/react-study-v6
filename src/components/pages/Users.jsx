// import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
// react hooks版
// import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test-${val}`,
    image: "https://source.unsplash.com/EdJZqsZpZYg",
    email: "test@gmail.com",
    phone: "090-1234-5678",
    company: {
      name: "hogefuga"
    },
    website: "https://hogefuga.com"
  };
});

export const Users = () => {
  // stateのバケツリレーが不要となる。
  // const { state } = useLocation();

  // react hooks版
  // const { userInfo, setUserInfo } = useContext(UserContext);

  // recoil版
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwith = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwith}>権限切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
