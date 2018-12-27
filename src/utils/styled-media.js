import { css } from 'styled-components'

export const media = {
  largeDesktop: (...args) => css`
    @media screen and (min-width: 1200px) {
      ${css(...args)};
    }
  `,

  desktop: (...args) => css`
    @media screen and (min-width: 992px) {
      ${css(...args)};
    }
  `,

  mobile: (...args) => css`
    @media screen and (max-width: 991px) {
      ${css(...args)};
    }
  `,

  smallmobile: (...args) => css`
    @media screen and (max-width: 414px) {
      ${css(...args)};
    }
  `
}
