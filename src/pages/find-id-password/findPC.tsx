import { css } from "@emotion/react";
import { useState } from "react";

import FindId from "./findId";
import FindPassword from "./findPassword";

const FindPC = () => {
  const [select, setSelect] = useState("id");
  const onClickButton = (id: string) => {
    setSelect(id);
  };
  return (
    <div css={findWrapperStyle}>
      <div css={findTitle}>
        <h1>아이디/비밀번호 찾기</h1>
      </div>
      <div>
        <button
          css={tabButton(select === "id")}
          onClick={() => onClickButton("id")}
        >
          아이디 찾기
        </button>
        <button
          css={tabButton(select === "pwd")}
          onClick={() => onClickButton("pwd")}
        >
          비밀번호 찾기
        </button>
      </div>
      <div>
        {select === "id" && <FindId onClickButton={onClickButton} />}
        {select === "pwd" && <FindPassword onClickButton={onClickButton} />}
      </div>
      <div css={ondaRights}>
        <p>ⓒOnda.All Rights Reserved.</p>
      </div>
    </div>
  );
};

const findWrapperStyle = css`
  width: 410px;
  margin: 65px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const findTitle = css`
  font-size: 32px;
  font-weight: 600;
  color: #222222;
  line-height: 100%;
  margin-bottom: 32px;
  align-self: flex-start;
`;

const tabButton = (isActive: boolean) => css`
  width: 205px;
  height: 56px;
  border-width: 1px 0.5px 0px 0.5px;
  border-style: solid;
  border-color: #d9d9d9;
  border-top-color: ${isActive ? "#52d9ff" : "#d9d9d9"};
  font-size: 14px;
  font-weight: 600;
  color: ${isActive ? "#222222" : "#666666"};
  background-color: ${isActive ? "#FFFFFF" : "#F7F7F7"};
`;

const ondaRights = css`
  font-size: 10px;
  font-weight: 500;
  color: #666666;
`;

export default FindPC;
