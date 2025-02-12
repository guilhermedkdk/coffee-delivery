import styled from "styled-components";

import { mixins } from "../../styles/mixins";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1160px;
  padding: 2rem 1.25rem;
  margin: 0 auto;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    padding: 0.625rem 0.5rem;
    border-radius: 6px;

    background-color: ${(props) => props.theme["purple-light"]};

    svg {
      color: ${(props) => props.theme.purple};
    }

    span {
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  a {
    position: relative;
    display: flex;
    align-items: center;

    padding: 0.5rem;
    border-radius: 6px;

    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};

    &[aria-disabled="true"] {
      pointer-events: none;
    }

    span {
      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(50%, -50%);

      display: flex;
      align-items: center;
      justify-content: center;

      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;

      ${mixins.fonts.textS};
      font-weight: bold;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;
