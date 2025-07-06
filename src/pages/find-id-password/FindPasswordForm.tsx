import { css } from "@emotion/react";
import { type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function FindPasswordForm() {
  const navigate = useNavigate();

  const goToFindPasswordResult = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("find-password-result");
  };

  return (
    <div>
      <div>
        <form action="">
          <div css={findInputStyle}>
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="아이디" />
            <Input type="text" placeholder="전화번호" />
          </div>
          <Button onClick={goToFindPasswordResult}>비밀번호 찾기</Button>
        </form>
      </div>
    </div>
  );
}

const findInputStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  margin-bottom: 32px;
`;
