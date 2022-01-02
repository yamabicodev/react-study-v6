import { memo } from "react";
import styled from "styled-components";
import { Card } from "../atoms/card/Card";
import { UserIconWithName } from "../molecules/user/UserIconWithName";

export const UserCard = memo((props) => {
  const { user } = props;
  console.log("UserCard");
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>TEL</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>URL</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
});

const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    /*横幅による文字の飛び出し対応*/
    overflow-wrap: break-word;
  }
`;
