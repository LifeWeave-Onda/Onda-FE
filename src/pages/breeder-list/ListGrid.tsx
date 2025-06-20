import { css } from "@emotion/react";

import resetIcon from "@/assets/breeder-list/reset.svg";

export default function ListGrid() {
  return (
    <>
      <div css={headerStyle}>
        <div />
        <h1 className="title">입양</h1>
        <span className="breeder-count">
          <span className="count">140</span>명의 브리더가 있습니다.
        </span>
      </div>

      <div css={filterContainerStyle}>
        <button type="button" className="reset-btn">
          <img src={resetIcon} alt="reset" width={16} height={16} />
          초기화
        </button>
        <div className="divider">|</div>
      </div>

      <div css={gridStyle}>
        {Array.from({ length: 5 }).map((_, rowIdx) => (
          <div key={rowIdx} className="row">
            {Array.from({ length: 4 }).map((_, colIdx) => {
              const cellNumber = rowIdx * 4 + colIdx + 1;
              return (
                <div key={cellNumber} className="cell">
                  Cell {cellNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

const headerStyle = css`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: flex-end;
  margin-top: 56px;

  .title {
    font-weight: 600;
    font-size: 28px;
    color: #454545;
  }

  .breeder-count {
    justify-self: end;
    font-size: 14px;
    color: #9a9a9a;

    .count {
      color: #ff5a58;
    }
  }
`;

const filterContainerStyle = css`
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  margin-top: 44px;
  padding-bottom: 20px;
  gap: 12px;

  .reset-btn {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .divider {
    color: #d9d9d9;
  }
`;

const gridStyle = css`
  margin: 60px 0 20%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .row {
    display: flex;
    gap: 16px;

    .cell {
      flex: 1;
      background-color: lightgray;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      height: 400px;
      cursor: pointer;

      transition: flex 0.6s ease;
      &:hover {
        flex: 3;
      }
    }
  }
`;
