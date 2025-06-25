import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

interface FindIdProps {
  onClickButton: (value: "pwd") => void;
}

const FindId = (props: FindIdProps) => {
  return (
    <div>
      <div>
        <form action="">
          <div css={findInputStyle}>
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="전화번호" />
          </div>
          <Button>아이디 찾기</Button>
        </form>
      </div>
      <div css={findItemStyle}>
        <button onClick={() => props.onClickButton("pwd")}>
          비밀번호 찾기
        </button>
        <span>|</span>
        <Link to="/signUp">회원가입</Link>
      </div>
    </div>
  );
};

const findInputStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  margin-bottom: 32px;
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

export default FindId;
