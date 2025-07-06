import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function FindIdForm() {
  const navigate = useNavigate();

  const findIdButton = () => {
    navigate("find-id-result");
  };
  return (
    <>
      <div>
        <form action="">
          <div css={findInputStyle}>
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="전화번호" />
          </div>
          <Button onClick={findIdButton}>아이디 찾기</Button>
        </form>
      </div>
    </>
  );
}

const findInputStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  margin-bottom: 32px;
`;
