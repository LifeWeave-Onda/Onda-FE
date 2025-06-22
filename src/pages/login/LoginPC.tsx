import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import MainLogo from "@/assets/shared/main-logo.png";

const FIND_LIST = [
  {
    name: "아이디/비밀번호 찾기",
    link: " ",
  },
  { name: "회원가입", link: " " },
];

const SOCIAL_LOGIN_BTN = [
  {
    name: "kakao",
    link: " ",
  },
  {
    name: "naver",
    link: " ",
  },
  {
    name: "google",
    link: " ",
  },
];

export default function LoginPC() {
  return (
    <div css={loginStyle}>
      <div css={loginTitle}>
        <img src={MainLogo} alt="logo" width={40} height={40} />
        <h1>온다</h1>
      </div>
      <div css={formWrapperStyle}>
        <form action="">
          <div css={inputDetail}>
            <input type="text" placeholder="아이디" />
            <div css={passwordWraper}>
              <input type="password" placeholder="비밀번호 확인" />
              <button type="button" className="PWDBtn">
                비밀번호 표시
              </button>
            </div>
          </div>
          <div css={loginSave}>
            <input type="checkbox" id="saveId" />
            <label htmlFor="saveId">
              <span />
              아이디 저장
            </label>
          </div>
          <button>로그인</button>
        </form>
      </div>
      <div css={loginFind}>
        {FIND_LIST.map((item, idx) => (
          <div key={item.name}>
            <Link to={item.link}>{item.name}</Link>
            {idx < FIND_LIST.length - 1 ? <span>|</span> : null}
          </div>
        ))}
      </div>
      <div css={socialBTN}>
        {SOCIAL_LOGIN_BTN.map((item) => (
          <button key={item.name}>{item.name}</button>
        ))}
      </div>
      <div css={ondaRights}>
        <p>ⓒOnda.All Rights Reserved.</p>
      </div>
    </div>
  );
}

const loginStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 410px;
  margin: 0 auto;
`;

const loginTitle = css`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 108px;
  height: 40px;
  margin-top: 64px;

  h1 {
    font-size: 32px;
    font-weight: 600;
    color: #222222;
  }
`;

const formWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 410px;
  height: 210px;
  margin-top: 32px;

  form > button {
    background-color: #52d9ff;
    text-align: center;
    width: 410px;
    height: 52px;
    padding: 14px 27px 14px 16px;
    color: #222222;
    font-size: 18px;
    font-weight: 600;
    margin-top: 16px;
  }
`;

const loginSave = css`
  display: flex;
  align-items: center;

  input {
    display: none;
  }

  label {
    font-size: 14px;
    font-weight: 500;
    color: #404040;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  label > span {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid #d9d9d9;
  }

  input:checked + label > span {
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13L9 17L19 7' stroke='%2352D9FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px;
  }
`;

const inputDetail = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  margin-bottom: 16px;

  input {
    padding: 14px 27px 14px 16px;
    border: 1px solid #d9d9d9;
  }
  input::placeholder {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
  }
`;

const passwordWraper = css`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 14px 27px 14px 16px;
    border: 1px solid #d9d9d9;
  }

  input::placeholder {
    color: #666666;
    font-size: 14px;
    font-weight: 400;
  }

  .PWDBtn {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    color: #222229;
    cursor: pointer;
    border-bottom: 1px solid #222229;
    font-weight: 500;
  }
`;

const loginFind = css`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 21px;
  margin-bottom: 33px;
  div {
    display: flex;
    gap: 16px;
    font-size: 14px;
    color: #404040;
    font-weight: 500;
  }
`;

const socialBTN = css`
  display: flex;
  gap: 12px;
  button {
    width: 56px;
    height: 56px;
    background-color: #d9d9d9;
    border-radius: 50%;
    margin-bottom: 40px;
  }
`;

const ondaRights = css`
  font-size: 10px;
  font-weight: 500;
  color: #666666;
`;
