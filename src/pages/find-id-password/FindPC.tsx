import { css } from "@emotion/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import FindIdForm from "./FindIdForm";
import FindPasswordForm from "./FindPasswordForm";

const FindPC = () => {
  const location = useLocation();
  const initialTab = location.state?.selectTab || "id";
  const [selectTab, setSelectTab] = useState<"id" | "pwd">(initialTab);

  return (
    <div css={findWrapperStyle}>
      <div css={findTitle}>
        <h1>아이디/비밀번호 찾기</h1>
      </div>
      <div>
        <button
          css={tabButton(selectTab === "id")}
          onClick={() => setSelectTab("id")}
        >
          아이디 찾기
        </button>
        <button
          css={tabButton(selectTab === "pwd")}
          onClick={() => setSelectTab("pwd")}
        >
          비밀번호 찾기
        </button>
      </div>
      <div>
        {selectTab === "id" && <FindIdForm />}
        {selectTab === "pwd" && <FindPasswordForm />}
      </div>
      <div css={findItemStyle}>
        {selectTab === "id" && (
          <button onClick={() => setSelectTab("pwd")}>비밀번호 찾기</button>
        )}
        {selectTab === "pwd" && (
          <button onClick={() => setSelectTab("id")}>아이디 찾기</button>
        )}
        <span>|</span>
        <Link to="/sing-up">회원가입</Link>
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

const findItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 48px;
  font-size: 14px;
  color: #404040;
  font-weight: 500;

  > span {
    color: #d9d9d9;
  }
  > button {
    font-weight: 500;
    font-size: 14px;
    color: #404040;
  }
`;

export default FindPC;
