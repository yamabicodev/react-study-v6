import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  text-align: center;
  background-color: #4682b4;
  padding: 8px 0;
`;

const SLink = styled(Link)`
  margin: 0 8px;
`;
