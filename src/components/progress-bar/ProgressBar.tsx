import { css } from "@emotion/react";
import { Line } from "rc-progress";

interface ProgressBarProps {
  trailColor: string;
  strokeColor: string;
  chartTitle: string;
  leftPercent: number;
  leftText: string;
  rightPercent: number;
  rightText: string;
}
export default function ProgressBar({
  trailColor,
  strokeColor,
  chartTitle,
  leftPercent,
  leftText,
  rightPercent,
  rightText,
}: ProgressBarProps) {
  return (
    <div css={chartContainerStyle}>
      <div css={chartTitleStyle}>{chartTitle}</div>
      <div css={chartDetailStyle}>
        <div>
          <h2 css={[traitPercentStyle, leftPercent >= 50 && active]}>
            {leftPercent}%
          </h2>
          <h3 css={[traitStyle, leftPercent >= 50 && active]}>{leftText}</h3>
        </div>
        <Line
          percent={leftPercent >= rightPercent ? leftPercent : rightPercent}
          trailColor={trailColor}
          strokeColor={strokeColor}
          style={{
            height: "10px",
            borderRadius: "10px",
            borderTopRightRadius: 0,
            transform: rightPercent > 50 ? "rotate(180deg)" : "",
          }}
        />
        <div>
          <h2 css={[traitPercentStyle, rightPercent >= 50 && active]}>
            {rightPercent}%
          </h2>
          <h3 css={[traitStyle, rightPercent >= 50 && active]}>{rightText}</h3>
        </div>
      </div>
    </div>
  );
}

const chartContainerStyle = css`
  width: 100%;
  height: 107px;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  margin-top: 21px;
`;

const chartTitleStyle = css`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`;

const chartDetailStyle = css`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
  height: 47px;
  gap: 22px;
`;

const traitPercentStyle = css`
  font-size: 20px;
  font-weight: 600;
  color: rgba(102, 102, 102, 1);
  margin-bottom: 6px;
`;

const traitStyle = css`
  font-size: 16px;
  font-weight: 500;
  color: rgba(102, 102, 102, 1);
`;

const active = css`
  color: rgba(17, 138, 178, 1);
`;
