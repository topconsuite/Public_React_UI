import styled from "styled-components";
import { windowWidth } from "@styles/global";

// Layout Container
export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 100vw;
  // overflow: hidden;
  // box-sizing: border-box;

  .fxuSKl > :first-child {
      bottom: 10px !important;
  }

  .dataTables_paginate {
    margin-right: 100px !important;
  }

  @media (max-width: ${windowWidth.tablet}) {
    .fxuSKl > :first-child {
      bottom: 14px !important;
    }

    .dataTables_paginate {
      margin-right: 0px !important;
    }
`;

export const MainContent = styled.div<{ hideSidebarOnMobile?: boolean }>`
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  
  @media (max-width: ${windowWidth.tablet}) {
    ${(props) => props.hideSidebarOnMobile && `
      > :first-child {
        display: none;
      }
    `}
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 24px;
  background-color: #f5f5f5;
  overflow-y: auto;
  
  h1 {
    margin: 0 0 16px 0;
    color: #333;
    font-size: 24px;
  }
  
  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 16px;
  }
  
  @media (max-width: ${windowWidth.mobile.large}) {
    padding: 16px;
  }
`;
