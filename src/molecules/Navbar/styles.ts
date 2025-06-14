import styled from "styled-components";
import { ReactSVG } from "react-svg";

import { windowWidth } from "@styles/global";

const Container = styled.nav`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px 8px 15px;
  transition: all 0.5s;
  width: 100%;
  color: ${(props) => props.theme.colors.primary};
  font-family: 'Roboto', sans-serif;

  > :first-child {
    display: none;
    visibility: hidden;

    @media ( max-width: ${windowWidth.tablet} ) {
      display: block;
      visibility: visible;
      cursor: pointer;

      :not(:hover) {
        transition: all 0.2s;
      }

      :hover {
        transition: all 0.5s;
        transform: scale(1.2);
      }
    }
  }

  @media ( max-width: ${windowWidth.mobile.large} ) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  position: relative;
`;

const ProductIcon = styled(ReactSVG)`

  width: 200px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media ( max-width: ${windowWidth.laptop.large} ) {
    width: 180px;
  }

  @media ( max-width: ${windowWidth.mobile.large} ) {
    width: 150px;
  }

  @media ( max-width: ${windowWidth.mobile.small} ) {
    width: 120px;
  }
`;

const Version = styled.p`
  text-align: right;
  font-size: 0.6rem;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export {
  Container, ProductIcon, Version, Product
};
