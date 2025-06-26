import { css } from "@emotion/react";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function FindIdForm() {
  return (
    <>
      <div>
        <form action="">
          <div css={findInputStyle}>
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="전화번호" />
          </div>
          <Button>아이디 찾기</Button>
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
