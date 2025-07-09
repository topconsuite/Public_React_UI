/* eslint-disable max-len */

import styled from "styled-components";
import { windowWidth } from "@styles/global";

type ContainerProps = {
  use: string;
  filters?: boolean;
  editColumns?: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 100%;
  // margin-top: -18px;
  font-family: 'Roboto', sans-serif;

  .filter-button {
    top: 25px;
    right: 10px;
    position: relative;
    float: right;
    z-index: 1;
    cursor: pointer;

    @media ( max-width: ${windowWidth.mobile.large} ) { // Mobile
      right: 10px;
      top: 32px;
      justify-content: end;
    }

    .filter-icon {
      font-size: 25px;
    }

    .MuiBadge-badge {
      width: 20px;
      height: 20px;
      border-radius: 50%;

      display: flex;
      align-content: center;
      justify-content: center;

      .MuiSvgIcon-root {
        font-size: 16px;
        color: ${(props) => props.theme.colors.primary} !important;
        border-radius: 50%;
      }
    }
  }

  .dataTables_wrapper {
    margin: 10px;
    height: 100%;

    .dataTables_paginate {
      margin: 0;
      padding-top: 0 !important;
    }

    .MuiGrid-container {
      margin: 0;
      margin-left: -10px !important;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 4px;
      flex-wrap: unset;
      
      @media (max-width: ${windowWidth.tablet}) {
        flex-direction: column;
      }

      
    }

    
  }
  .dataTables_length {
    width: 100%;
    label {
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      justify-content: center !important;
      width: 100%;
      padding: 0px;
      margin: 0px;

      select {
        margin: 0 4px 0px 4px !important;
        background-color: ${(props) => props.theme.colors.primary} !important;
        color: white !important;
        font-weight: bold !important;
        border: 1px solid ${(props) => props.theme.colors.primary} !important;
        border-radius: 30px !important;

        option {
          text-align: center;
          background-color: ${(props) => props.theme.colors.primary} !important;
          color: white !important;
          font-weight: bold !important;
        }
      }
    }
  }
  .dataTables_search {
    position: relative;
    padding: 10px 10px;
    width: 100%;
    z-index: 0;
    min-height: 30px;
      justify-content: end !important;

    @media ( max-width: ${windowWidth.mobile.large} ) { // Mobile
      justify-content: end !important;
      padding-left: 0;
      padding-top: 0;

      .dataTables_filter {
        margin-left: 0 !important;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }
    }
    @media ( min-width: ${windowWidth.mobile.large} ) { // Desktop
      justify-content: end !important;

      padding: 0;

      .dataTables_filter {
        margin-bottom: 10px;
      }
    }

    .filterGrid {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      ${(props) => {
    if (props.filters && props.editColumns) {
      return `@media (max-width: ${windowWidth.tablet}) {
                margin-right: 66px;
              }

              margin-top: -4px;

              > div {
                @media (max-width: ${windowWidth.tablet}) {
                  margin-top: -22px;
                }
                @media (max-width: ${windowWidth.mobile.large}) {
                  margin-top: -38px;
                }
              }  
              
              `;
    }

    return `
              > div {
                @media (max-width: ${windowWidth.tablet}) {
                  width: 40vw;
                  margin-top: -28px;
                }

                @media (max-width: ${windowWidth.mobile.large}) {
                  width: 50vw;
                  margin-right: -10px;
                  margin-top: -40px !important;

                }

                @media (max-width: ${windowWidth.mobile.medium}) {
                  width: 50vw;
                  margin-right: -10px;
                  margin-top: -40px !important;
                }

                > label {
                  display: flex;
                  flex-direction: row-reverse;
                  align-content: center;
                  justify-content: center;
                  align-items: center;
                  flex-wrap: wrap;
                }
              }
          `;

  }}

    }

    .dataTables_filter {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: ${(props) => {
    const filterWidth = props.filters ? 16 : 0;
    const editColumnsWidth = props.editColumns ? 16 : 0;
    const totalWidth = filterWidth + editColumnsWidth;

    if (!totalWidth) return "auto";

    return `${Math.min(totalWidth)}px`;
  }};

       > div:first-child {
         width: 100% !important;

         > div:first-child {
           width: 100% !important;
         }
       }

      .MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs {
        width: 100% !important;
      }

      label {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        cursor: pointer;

        svg {
          transition: all 0.3s ease;
          z-index: 3;
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }

        input {
          width: 0;
          opacity: 0;
          border: none;
          outline: none;
          background: transparent;
          transition: all 0.3s ease;
          border-radius: 10px;
          padding: 8px 12px;
          margin-right: 0;
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);

          &.expanded {
            width: 200px;
            opacity: 1;
            background: white;
            border: 1px solid #ddd;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding-left: 12px;
            padding-right: 12px;
            
            @media (max-width: ${windowWidth.tablet}) {
              width: 200px;
              padding-left: 12px;
              padding-right: 12px;
            }
            
            @media (max-width: ${windowWidth.mobile.large}) {
              width: 200px;
              padding-left: 12px;
              padding-right: 12px;
            }
          }

          &:focus {
            outline: none;
            border-color: ${(props) => props.theme.colors.primary};
          }
        }

        &.search-active {
          // Ícone já posicionado globalmente
        }
      }
    }
  }

  /* Responsive control button customization */
  table.dataTable.dtr-inline.collapsed > tbody > tr > td.dtr-control:before,
  table.dataTable.dtr-inline.collapsed > tbody > tr > th.dtr-control:before {
    content: '+';
    background-color: #28a745;
    color: white;
    border-radius: 50%;
    border: 1px solid #fff;
    width: 15px;
    height: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.7s ease;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2);
    vertical-align: middle;
    position: relative;
    top: -1px;
    flex-shrink: 0;
  }

  table.dataTable.dtr-inline.collapsed > tbody > tr > td.dtr-control,
  table.dataTable.dtr-inline.collapsed > tbody > tr > th.dtr-control {
    white-space: nowrap;
  }

  table.dataTable.dtr-inline.collapsed > tbody > tr.parent > td.dtr-control:before,
  table.dataTable.dtr-inline.collapsed > tbody > tr.parent > th.dtr-control:before {
    content: '-';
    background-color: #dc3545;
  }



  .dataTables_scroll {
    width: 100%;
    margin-right: -30px;

    .dataTables_scrollHead {
      background: ${(props) => props.theme.colors.primary};
      color: white;
      border-radius: 5px 5px 0 0;

      /* Large than any mobile device */
      @media ( min-width: ${windowWidth.mobile.large} ) {
        padding: 5px 0;
      }

      thead tr th {
        border-bottom: none;
        font-size: 12px;
        font-weight: 600;

        @media ( max-width: ${windowWidth.laptop.large} ) {
          font-size: 13px;
        }

        @media ( max-width: ${windowWidth.tablet} ) {
          font-size: 14px;
        }

        @media ( max-width: ${windowWidth.mobile.large} ) {
          font-size: 15px;
        }

        @media ( max-width: ${windowWidth.mobile.medium} ) {
          font-size: 16px;
        }
      }
    }
    .dataTables_scrollBody {
      overflow-x: auto !important;
      border-radius: 0 0 10px 10px;
      max-height: calc(100vh - 210px) !important;

      ::-webkit-scrollbar {
        width: 6px;
      }
      
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
      }

      @media ( max-width: ${windowWidth.laptop.medium} ) {
        max-height: calc(100vh - 225px) !important;
      } 
      
      @media ( max-width: ${windowWidth.tablet} ) {
        max-height: calc(100vh - 260px) !important;
      } 

      @media ( max-width: ${windowWidth.mobile.large} ) {
        max-height: calc(100vh - 240px) !important;
      }

      table {
        td {
          padding: 5px;
          font-size: 12px;

          @media ( max-width: ${windowWidth.laptop.large} ) {
            padding: 2px 5px;
            font-size: 13px;
          }

          @media ( max-width: ${windowWidth.tablet} ) {
            padding: 5px;
            font-size: 14px;
          }

          @media ( max-width: ${windowWidth.mobile.large} ) {
            font-size: 15px;
          }

          @media ( max-width: ${windowWidth.mobile.medium} ) {
            font-size: 16px;
          }
         
          @media ( max-width: ${windowWidth.mobile.small} ) {
            font-size: 16px;
          }
        }

        .child {

          .dtr-details {
            width: 100%;

            li {
              padding: 5px 0;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .dtr-title {
                min-width: 0;
              }
              .dtr-data {
                text-align: right;
                padding-left: 15px;
              }
            }
          }
        }
      }
    }
  }
  .dataTables_info {
    padding: 0;
    font-size: 14px;
    color: #666;
    text-align: center;
    
    @media (max-width: ${windowWidth.mobile.large}) {
      text-align: center;
    }
  }
  .dataTables_paginate {
    // margin-top: 15px;
    display: flex;
    justify-content: space-evenly;

    & > span {
      display: flex;
      align-items: center;
    }
    .paginate_button {
      padding: 8px 12px;
      margin: 0 2px;
      background: transparent !important;
      color: #495057 !important;
      text-decoration: none;
      cursor: pointer;
      font-size: 14px;
      border: none !important;
      box-shadow: none !important;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:hover {
        background: transparent !important;
        color: #495057 !important;
        border: none !important;
        box-shadow: none !important;
      }

      &.current {
        background: ${(props) => props.theme.colors.primary} !important;
        color: white !important;
        font-weight: bold;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: none !important;
        box-shadow: none !important;

        &:hover {
          background: ${(props) => props.theme.colors.primary} !important;
          color: white !important;
          border: none !important;
          box-shadow: none !important;
        }
      }

      &.disabled {
        color: #6c757d !important;
        cursor: not-allowed;
        opacity: 0.6;
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;

        &:hover {
          background: transparent !important;
          color: #6c757d !important;
          border: none !important;
          box-shadow: none !important;
        }
      }

      @media (max-width: 768px) {
        font-size: 12px;
        margin: 0 1px;
        
        &.current {
          width: 32px;
          height: 32px;
          color: white !important;
        }
      }
    }

    @media screen and (max-width: 767px) {
      margin-top: 0;
    }

  }
  .dataTables_buttons .dt-buttons {
    margin-top: 25px;

    .button:disabled, .button[disabled]{
      opacity: 0.7;
      cursor: auto;
    }
    .button {
      min-width: 100px;
      height: 50px;
      background: #707070;
      border-radius: 10px;
      border: 0;
      padding: 14px 10px;
      color: #fff;
      font-weight: 500;
      margin-left: 16px;
    }
    .button.MuiButton-root{
      text-transform: inherit;
      line-height:  0.9;
      box-shadow: none;
    }
  }
  .flex--center {
    display: flex;
    justify-content: center;
  }
  .flex--hidden {
    display: none;
  }
  .fixed--bottom {
    background: ${(props) => (props.use === "maintenanceScreen" ? "#f6f6f6" : "rgba(248, 249, 250, 0.95)")};
    backdrop-filter: blur(8px);
    border-top: 1px solid #e9ecef;
    position: fixed;
    margin: ${(props) => (props.use === "maintenanceScreen" ? "0 -10px 0 -20px" : "10px 0")};
    bottom: 0;
    width: -webkit-fill-available;
    padding: 10px 15px 15px 15px;

    @media ( max-width: ${windowWidth.mobile.large} ) { // Mobile
      padding: 0 0 5px 0;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .MuiGrid-grid-xs-6 {
        max-width: 100%;
      }
    }
  }
`;

export const Buttons = styled.div`
  > :first-child {
    padding: 5px;
    bottom: 85px;
    background: white;
    border-radius: 50%;

    > :first-child {
      box-shadow: none;
    }
    > :nth-child(3) {
      bottom: 162px;
      padding-right: 5px;
    }
  }
`;
