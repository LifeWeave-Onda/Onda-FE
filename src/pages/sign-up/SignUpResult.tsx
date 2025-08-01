import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const PERSONAL_INFO = [
  {
    title: "아이디",
    value: "abcd**",
  },
  {
    title: "가입일",
    value: "2025.06.05",
  },
  {
    title: "마케팅동의",
    value: "N / -",
  },
  {
    title: "생년월일/성별",
    value: "2001.04.10 / 남",
  },
  {
    title: "전화번호",
    value: "010-1234-56**",
  },
];
export default function SignUpResult() {
  return (
    <div css={signUpCompleteWrapper}>
      <h1 css={signUpCompleteTitle}>회원가입 완료</h1>
      <div css={signUpContainer}>
        <div css={signUpCompleteMessageWrapper}>
          <h2>
            <span css={nameStyle}>홍길동</span> 님!
          </h2>
          <p>회원가입이 완료되었습니다.</p>
        </div>
        <div css={personalInfoWrapper}>
          {PERSONAL_INFO.map((item) => (
            <p key={item.title} css={personalInfoDetail}>
              {item.title} : {item.value}
            </p>
          ))}
        </div>
        <Link css={submitButtonStyle} to="/login">
          로그인하기
        </Link>
        <div css={ondaRights}>
          <p>ⓒOnda.All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
const signUpCompleteWrapper = css`
  width: 410px;
  margin: 65px auto;
`;
const signUpCompleteTitle = css`
  font-size: 32px;
  font-weight: 600;
  color: rgba(34, 34, 34, 1);
`;
const signUpContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const signUpCompleteMessageWrapper = css`
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: 24px;
`;
const nameStyle = css`
  color: rgba(82, 217, 255, 1);
`;
const personalInfoWrapper = css`
  width: 100%;
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 24px 27px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 36px;
  margin-top: 16px;
`;
const personalInfoDetail = css`
  font-size: 14px;
  color: rgba(34, 34, 34, 1);
`;
const submitButtonStyle = css`
  width: 100%;
  background-color: #52d9ff;
  text-align: center;
  height: 52px;
  color: #222222;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ondaRights = css`
  font-size: 10px;
  font-weight: 500;
  color: #666666;
  text-align: center;
  margin-top: 48px;
`;
