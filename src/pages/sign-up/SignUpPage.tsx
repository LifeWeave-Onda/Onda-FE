import { css } from "@emotion/react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const AGREE_TERMS = [
  { title: "(필수) 약관 전체 동의", id: "requiredAllCheck" },
  { title: "(선택) 약관 전체 동의", id: "selectedAllCheck" },
  { title: "(필수) 이용약관 동의", modal: "", id: "agreeTerm1" },
  { title: "(필수) 만 14세 이상확인", id: "agreeTerm2" },
  { title: "(필수) 개인정보 수집 및 이용동의", modal: "", id: "agreeTerm3" },
  { title: "(선택) 개인정보 수집 및 이용동의", modal: "", id: "agreeTerm4" },
  { title: "(선택) 마케팅 정보 수신동의", modal: "", id: "agreeTerm5" },
  { title: "(선택) 위치기반서비스 이용약관 동의", modal: "", id: "agreeTerm6" },
];
export default function SignUpPage() {
  return (
    <div css={signUpPageStyle}>
      <h1 css={signUpTitle}>회원가입</h1>
      <div>
        <h2 css={signUpDetailTitle}>계정정보</h2>
        <div css={signUpDetailInputStyle}>
          <div css={idInputStyle}>
            <Input placeholder="아이디" />
            <button css={duplicationCheckBtn}>중복확인</button>
          </div>
          <div css={passwordInputStyle}>
            <Input placeholder="비밀번호 입력" />
            <button css={showPwdBtn}>비밀번호 표시</button>
          </div>
          <div css={passwordInputStyle}>
            <Input placeholder="비밀번호 재입력" />
            <button css={showPwdBtn}>비밀번호 표시</button>
          </div>
        </div>
      </div>
      <div>
        <h2 css={signUpDetailTitle}>본인인증</h2>
        <button css={identityVerificationBtn}>본인인증하기</button>
      </div>
      <div>
        <h2 css={signUpDetailTitle}>약관동의</h2>
        <div css={agreeTermsAllCheck}>
          {AGREE_TERMS.map((item, idx) =>
            idx < 2 ? (
              <div key={item.title} css={agreeTermsAllCheckStyle}>
                <input type="checkbox" id={item.id} />
                <label htmlFor={item.id}>
                  <span />
                  {item.title}
                </label>
              </div>
            ) : (
              ""
            ),
          )}
        </div>
        <div css={agreeTermsDetail}>
          {AGREE_TERMS.map((item, idx) =>
            idx > 1 ? (
              <div key={item.title}>
                <div css={agreeTermsDetailStyle}>
                  <input type="checkbox" id={item.id} />
                  <label htmlFor={item.id}>
                    <span />
                    {item.title}
                  </label>
                  {idx === 3 ? "" : <button css={seeMoreBtn}>내용보기</button>}
                </div>
                {idx === 6 ? (
                  <div css={[agreeTermsDetailStyle, emailAndSMSBtn]}>
                    <input type="checkbox" id="email" />
                    <label htmlFor="email">
                      <span />
                      이메일
                    </label>
                    <input type="checkbox" id="SMS" />
                    <label htmlFor="SMS">
                      <span />
                      SMS
                    </label>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            ),
          )}
        </div>
      </div>
      <Button>가입완료</Button>
      <div css={ondaRights}>
        <p>ⓒOnda.All Rights Reserved.</p>
      </div>
    </div>
  );
}

const signUpPageStyle = css`
  margin: 64px auto;
  width: 410px;
`;

const signUpTitle = css`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 26px;
`;

const passwordInputStyle = css`
  position: relative;
  display: flex;
  align-items: center;
`;

const showPwdBtn = css`
  position: absolute;
  right: 13px;
  font-size: 14px;
  font-weight: 500;
  text-decoration-line: underline;
`;
const signUpDetailTitle = css`
  font-size: "16px";
  font-weight: 500;
  margin-bottom: 16px;
`;

const signUpDetailInputStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 36px;
`;
const idInputStyle = css`
  position: relative;
`;

const duplicationCheckBtn = css`
  position: absolute;
  width: 80px;
  height: 48px;
  background-color: rgba(34, 34, 34, 1);
  color: white;
  padding: 15px 9px;
  font-size: 14px;
  font-weight: 500;
  right: 0px;
`;
const identityVerificationBtn = css`
  width: 410px;
  height: 48px;
  background-color: rgba(34, 34, 34, 1);
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 36px;
`;

const agreeTermsAllCheck = css`
  display: flex;
  gap: 12px;
`;

const agreeTermsAllCheckStyle = css`
  input {
    display: none;
  }
  label {
    display: flex;
    gap: 8px;
    color: rgba(64, 64, 64, 1);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -2.5%;
    cursor: pointer;
  }
  label > span {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(217, 217, 217, 1);
  }
  input:checked + label > span {
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13L9 17L19 7' stroke='%2352D9FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px;
  }
`;

const agreeTermsDetail = css`
  border: 1px solid rgba(217, 217, 217, 1);
  padding: 24px;
  width: 410px;
  height: 244px;
  margin-top: 23px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const agreeTermsDetailStyle = css`
  display: flex;
  position: relative;

  > input {
    display: none;
  }
  > label {
    display: flex;
    gap: 8px;
    color: rgba(64, 64, 64, 1);
    cursor: pointer;
  }
  > label > span {
    display: inline-block;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(217, 217, 217, 1);
  }
  input:checked + label > span {
    background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 13L9 17L19 7' stroke='%2352D9FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 18px;
  }
`;

const seeMoreBtn = css`
  position: absolute;
  right: 0px;
  text-decoration-line: underline;
  font-weight: 500;
  font-size: 14px;
`;

const emailAndSMSBtn = css`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: 28px;
  margin-top: 10px;
`;

const ondaRights = css`
  font-size: 10px;
  font-weight: 500;
  color: #666666;
  text-align: center;
  margin-top: 48px;
`;
