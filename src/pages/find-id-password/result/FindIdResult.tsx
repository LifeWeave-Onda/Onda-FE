import { css } from "@emotion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

export default function FindIdResult() {
  const [selectTab, setSelectTab] = useState<"id" | "pwd">("id");
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div css={findWrapperStyle}>
      <div css={findTitle}>
        <h1>아이디/비밀번호 찾기</h1>
      </div>
      <div>
        <button
          css={tabButton(selectTab === "id")}
          onClick={() => navigate("/find-id-password")}
        >
          아이디 찾기
        </button>
        <button
          css={tabButton(selectTab === "pwd")}
          onClick={() =>
            navigate("/find-id-password", { state: { selectTab: "pwd" } })
          }
        >
          비밀번호 찾기
        </button>
      </div>
      <div>
        <div css={findIdResultWrapper}>
          <h3>회원정보와 일치하는 아이디입니다.</h3>
          <div css={infoWrapper}>
            <p>아이디 : abcde**</p>
            <p>가입일 : 2025.06.05</p>
          </div>
          <Button onClick={goToLoginPage}>로그인하기</Button>
        </div>
      </div>
      <div css={findItemStyle}>
        <button
          onClick={() =>
            navigate("/find-id-password", { state: { selectTab: "pwd" } })
          }
        >
          비밀번호 찾기
        </button>
        <span>|</span>
        <Link to="/sing-up">회원가입</Link>
      </div>
      <div css={ondaRights}>
        <p>ⓒOnda.All Rights Reserved.</p>
      </div>
    </div>
  );
}

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

const findIdResultWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  > h3 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 32px;
  }
`;

const infoWrapper = css`
  width: 410px;
  height: 92px;
  padding: 24px 27px 24px 16px;
  border: 1px solid #d9d9d9;
  margin-bottom: 32px;
  margin-top: 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
  }
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
