import { FC } from "react";
import { css } from "@emotion/react";

const Filter: FC = () => {

  return (
    <div 
      css={css`
        display: flex;
        align-items: center;
      `}
    >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
            <path d="M6.7379 5.20162L7.92877 4L3.96438 0L0 4L1.19087 5.20162L3.12215 3.25303V13.0988H4.80662V3.25303L6.7379 5.20162Z" fill="black"/>
            <path d="M13.4758 10.7984L11.5445 12.747V2.90126H9.86006V12.747L7.92879 10.7984L6.73792 12L10.7023 16L14.6667 12L13.4758 10.7984Z" fill="black"/>
          </svg>
        </div> 
        <select
          css={css`
            margin-left: 12px;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            border: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            ::-ms-expand {
              display: none;
            }
            :focus{
              outline:none;
            }
            option:hover {
              background-color: yellow;
            }
          `}
        >
          <option
            css={css`
            option:hover {
              box-shadow: 0 0 10px 100px orange inset;
              }
            `}
          >Сначала в наличии</option>
          <option
            css={css`
            :hover {
              box-shadow: 0 0 10px 100px orange inset;
              }
            `}
          >По имени (A-Z)</option>
          <option
            css={css`
            :hover {
              box-shadow: 0 0 10px 100px orange inset;
              }
            `}
          >По имени (Z-A)</option>
          <option
            css={css`
            :hover {
              box-shadow: 0 0 10px 100px orange inset;
              }
            `}
          >Сначала новее</option>
          <option
            css={css`
            :hover {
              box-shadow: 0 0 10px 100px orange inset;
              }
            `}
          >Сначала старше</option>
          <option
            css={css`
            :hover {
              box-shadow: 0 0 10px 100px orange inset;
              }
            `}
          >Сначала дешевле</option>
          <option
            css={css`
            :hover {
              box-shadow: 0 0 10px 100px orange inset;
              }
            `}
          >Сначала дороже</option>
        </select>
    </div>
  );
};

export default Filter;
