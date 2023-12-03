/// <reference types="@emotion/react/types/css-prop" />
import { css } from '@emotion/react'

export const GLOBAL_STYLES = {
  "*": {
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif",
  } as const,
  "html, body, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
  },
};

export const whiteColor = css`
  color: #fff;
`

export const grayColor = css`
  color: #595959;
`

export const darkColor = css`
  color: #d9d9d9;
`

export const backgroundViolet = css`
  background: #4F2CD9;
`

export const backgroundGray = css`
  background: #D9D9D9;
`

export const fontSize24 = css`
  font-size: 24px;
`

export const fontSize16 = css`
  font-size: 16px;
`

export const fontSize14 = css`
  font-size: 14px;
`

export const fontWidth500 = css`
  font-weight: 500;
`

export const fontWidth400 = css`
  font-weight: 400;
`

