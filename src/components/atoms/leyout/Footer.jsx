import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2022 yamabico react test</SFooter>;
};

const SFooter = styled.header`
  text-align: center;
  background-color: #4682b4;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
