import { css } from "@emotion/react";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";

import resetIcon from "@/assets/breeder-list/reset.svg";
import searchIcon from "@/assets/breeder-list/search.svg";

import BreederFilterTag from "./components/Tag";
import BreederFilter from "./components/breeder-filter";

const SORT_LIST = ["추천순", "평점순", "최신순"];
const BREED_LIST = [
  "강아지",
  "고양이",
  "포메라니안",
  "골든리트리버",
  "랙돌",
  "싱가푸라",
  "보더콜리",
  "시베리안허스키",
  "푸들",
  "사모예드",
  "페키니즈",
  "말리노이즈",
];
const LOCATION_LIST = [
  "서울·인천·경기",
  "강원도",
  "충청도",
  "경상도",
  "전라도",
  "제주도",
];
const ADOPTION_PLACE_LIST = ["브리더", "보호소"];

export default function BreederFilterPanel() {
  const [breedInputValue, setBreedInputValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const fuse = useMemo(
    () =>
      new Fuse(BREED_LIST, {
        threshold: 0.3,
      }),
    [],
  );
  const breedFilteredList = useMemo(() => {
    if (!breedInputValue) return BREED_LIST;
    return fuse.search(breedInputValue).map((result) => result.item);
  }, [breedInputValue, fuse]);

  const handleTagSelect = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prev) => [...prev, tag]);
    }
  };
  const handleTagRemove = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <>
      <div css={tagContainerStyle}>
        <button
          type="button"
          className="reset-btn"
          onClick={() => setSelectedTags([])}
        >
          <img src={resetIcon} alt="reset" width={16} height={16} />
          초기화
        </button>
        <div className="divider" />
        {selectedTags.map((tag) => (
          <BreederFilterTag
            key={tag}
            name={tag}
            onClick={() => handleTagRemove(tag)}
          />
        ))}
      </div>

      <div style={{ position: "relative" }}>
        <div css={breederFilterContainerStyle}>
          <BreederFilter.Root initialWidth={90}>
            <BreederFilter.Trigger label="정렬" />
            <BreederFilter.List>
              <div css={listWrapperStyle}>
                {SORT_LIST.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="item"
                    onClick={() => handleTagSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </BreederFilter.List>
          </BreederFilter.Root>

          <BreederFilter.Root initialWidth={90}>
            <BreederFilter.Trigger label="품종" />
            <BreederFilter.List>
              <div css={breedListWrapperStyle}>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={breedInputValue}
                    onChange={(e) => setBreedInputValue(e.target.value)}
                  />
                  <img src={searchIcon} alt="search" />
                </div>
                <div className="list">
                  {breedFilteredList.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className="item"
                      onClick={() => handleTagSelect(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </BreederFilter.List>
          </BreederFilter.Root>

          <BreederFilter.Root initialWidth={90}>
            <BreederFilter.Trigger label="지역" />
            <BreederFilter.List>
              <div css={listWrapperStyle}>
                {LOCATION_LIST.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="item"
                    onClick={() => handleTagSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </BreederFilter.List>
          </BreederFilter.Root>

          <BreederFilter.Root initialWidth={104}>
            <BreederFilter.Trigger label="입양처" />
            <BreederFilter.List>
              <div css={listWrapperStyle}>
                {ADOPTION_PLACE_LIST.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="item"
                    onClick={() => handleTagSelect(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </BreederFilter.List>
          </BreederFilter.Root>
        </div>
      </div>
    </>
  );
}

const tagContainerStyle = css`
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 44px;
  padding-bottom: 20px;
  gap: 12px;
  min-height: 50px;

  .reset-btn {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .divider {
    width: 1px;
    height: 18px;
    background-color: #d9d9d9;
  }
`;

const breederFilterContainerStyle = css`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-top: 20px;
`;

const listWrapperStyle = css`
  margin-top: 14px;
  border-top: 0.5px solid #9a9a9a;
  padding-top: 14px;
  font-size: 14px;
  color: #666666;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .item {
    display: block;
    text-align: left;

    &:hover {
      color: black;
    }
  }
`;

const breedListWrapperStyle = css`
  margin-top: 6px;
  font-size: 14px;
  color: #666666;

  .input-wrapper {
    position: relative;
    width: 100%;

    input {
      width: 100%;
      height: 30px;
      border: 1px solid #d9d9d9;
      text-indent: 6px;
      outline: none;
    }

    img {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 14px;

    .item {
      display: block;
      text-align: left;

      &:hover {
        color: black;
      }
    }
  }
`;
