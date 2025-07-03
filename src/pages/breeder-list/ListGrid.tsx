import { css } from "@emotion/react";

import BreederFilterPanel from "./BreederFilterPanel";

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

      <BreederFilterPanel />

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

const gridStyle = css`
  margin: 120px 0 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .row {
    display: flex;
    gap: 10px;

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
