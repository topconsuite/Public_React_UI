import styled from "styled-components";

import { windowWidth } from "../../styles/global";

import { Drawer } from "../../libraries/mui/components";

const Container = styled(Drawer)`
  z-index: 2;

  > .MuiDrawer-paper {
    background-color: transparent !important;
    width: 250px;

    /* Large than any mobile device */
    @media ( min-width: ${windowWidth.mobile.large} ) {
      width: 350px;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 10px;
  transition: all 0.5s;
  overflow: auto;
  overflow-x: hidden;
  gap: 25px;
  background-color: ${({ theme }) => theme.colors.scrollBar};

  .default-submit-button {
    border-radius: 5px !important;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

const InfoFilter = styled.div`
  padding: 10px;
  border: 0.5px solid #ddd;
  border-radius: 5px;

  .title {
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 5px;
  }
`;

const Fields = styled.div`

  .info {
    color: ${(props) => props.theme.colors.gray};
    margin-bottom: 15px;
  }
  .fields {
    height: calc(100vh - 365px);
    overflow-y: auto;
    padding: 5px;
    border: 0.5px solid #ddd;

    .field {
      border: 0.5px solid #ddd;
      border-radius: 5px;
      margin: 5px 0;
      list-style: none;
      box-shadow: none;
      background-color: #faffbd;
      font-size: 0.8rem;
      cursor: pointer;

      .title {
        color: ${(props) => props.theme.colors.gray};
        display: flex;
        align-items: center;
        justify-content: space-between;

        .field_name:after {
          content: " *";
        }
        svg {
          fill: #ddd;
        }
      }
      .content {
        font-size: 0.8rem;
      }
      .operator {
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.error};
      }

      .MuiAccordionSummary-root {
        padding: 0;
      }
      .MuiAccordionSummary-content {
        display: block;
        margin: 5px;
      }


    }
    .no-filter {
      height: 100%;
      justify-content: center;
      display: flex;
      align-items: center;
    }
  }
`;

const FormFilterField = styled.form`
  margin-top: 15px;

  .default-field {
    min-width: auto !important;
    min-height: auto !important;
    background-color: transparent;
    text-transform: inherit;
    box-shadow: none;
    color: black;
    height: fit-content;
    margin: 5px 0;
  }
  .default-submit-button {
    min-width: auto !important;
    background-color: transparent !important;
    margin-top: 10px;
    display: block;
    float: right;
    padding-right: 0;
    box-shadow: none;
    color: black;


  }
  .input-label {

  }

  .MuiInputLabel-formControl[data-shrink="false"] {
    transform: translate(14px, 12px) scale(1);
  }

  .MuiInputLabel-shrink[data-shrink="true"] {
    transform: translate(14px, -4px) scale(0.75);
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    display: block;
    background-color: transparent;
    text-transform: inherit;
    box-shadow: none;
    color: black;
    min-width: auto !important;
    min-height: auto !important;
    height: fit-content;

    :first-child {
      padding-left: 0;
    }
    :last-child {
      padding-right: 0;
    }

  }
`;

export {
  Container, Content, Title, InfoFilter, Fields, FormFilterField, Actions
};
