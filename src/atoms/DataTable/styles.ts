import styled from "styled-components";

export const Container = styled.div`

.dataTables_wrapper {
  background: white;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  .reverse-mobile {

    @media (max-width: 800px) {
      flex-flow: wrap-reverse;
    }
  }
  .dataTables_length {
    padding-top: 10px;

    @media (max-width: 800px) { // Mobile
      text-align: -webkit-center;
      padding-top: 24px;

      label {
        display: inline-flex;
        width: 100%;

        select {
          margin-right: 0;
          text-align-last: center;
          -webkit-appearance: none;
          -moz-appearance: none;
          text-indent: 1px;
          text-overflow: '';
          width: 60%;

          option {
            text-align: center;
          }
        }
      }
    }

    select {
      margin-right: 10px;
    }
  }
  .dataTables_filter {
    padding-top: 20px;
    float:left;

    @media (max-width: 800px) { // Mobile
      padding: 18px 0 0 4px;
      width: 100%;

      label {
        display: grid;
        margin-bottom: 15px;

        input {
          margin-left: 0 !important;
        }
      }
    }

    label {

      svg {
        position: absolute;
        margin-left: 2px;
        margin-top: 2px;
      }
      input {
        margin-left: 0px;
        padding-left: 28px;
        min-width: 190px;
      }
    }
  }
  .dataTables_scroll {

    .dataTables_scrollHead {
      background: #707070;
      color: white;

      thead tr th {
        border-bottom: none;
      }
    }
    .dataTables_scrollBody {
      border-bottom: 1px solid #ddd;

      table {

        .dataTables_empty {
          padding: 50px;
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
    padding-top: 15px;

    @media (max-width: 800px) { // Mobile
      padding-top: 24px;
    }
  }
  .dataTables_paginate {
    display: flex;
    padding-top: 5px;
    justify-content: space-evenly;

    @media (max-width: 800px) { // Mobile
      padding-top: 8px;
    }

    & > span {
      display: flex;
      align-items: center;
    }
    .paginate_button {
      padding: 5px 8px;
    }
    
  }
  .dataTables_buttons .dt-buttons {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    
    .button:disabled,
    .button[disabled]{
      opacity: 0.7;
      cursor: auto;
    }
    .button {
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      width: 104px;
      height: 56px;
      background: #707070;
      border-radius: 10px;
      border: 0;
      padding: 14px 10px;
      color: #fff;
      font-weight: 500;
      margin-left: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: rgb(112 112 112 / 0.6);
      }
    }
    .button.MuiButton-root{
      text-transform: inherit;
      line-height:  0.9;
      box-shadow: none;
    }
    

    @media (max-width: 800px) { // Mobile
      justify-content: space-evenly;
      width: 100%;

      .button {
        margin: 0 2px 0 2px;

        &:first-child {
          margin: 0 2px 0 0px;
        }
        &:last-child {
          margin: 0 0px 0 2px;
        }
      }
    }
  }
  .flex--center {
    display: flex;
    justify-content: center;
  }
}`;
