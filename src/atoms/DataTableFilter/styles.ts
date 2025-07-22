import styled from "styled-components";

import { windowWidth } from "../../styles/global";

import { Drawer } from "../../libraries/mui/components";

const Container = styled(Drawer)`
  z-index: 2;

  > .MuiDrawer-paper {
    background-color: transparent !important;
    width: 280px;
    font-family: 'Roboto', sans-serif;

    /* Large than any mobile device */
    @media ( min-width: ${windowWidth.mobile.large} ) {
      width: 380px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    
    ::-webkit-scrollbar {
      width: 4px;
      background-color: transparent;
      
      @media (max-width: 800px) {
        width: 0px !important;
      }
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #ddd;
      border-radius: 2px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: #bbb;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0;
  transition: all 0.5s;
  overflow: auto;
  overflow-x: hidden;
  background: white;
  font-family: 'Roboto', sans-serif;

  .default-submit-button {
    border-radius: 0px !important;
    background: ${({ theme }) => theme.colors.primary || "#ff9900"} !important;
    color: white !important;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: white;
  padding: 20px;
  background: ${({ theme }) => theme.colors.primary || "rgba(0,0,0,0.1)"};
  margin: 0;
  font-family: 'Roboto', sans-serif;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const InfoFilter = styled.div`
  padding: 20px;
  margin: 0;
  background: transparent;

  .title {
    margin-bottom: 5px;
    font-size: 0.85rem;
    font-weight: 400;
  }
  
  .content {
    color: #333;
    font-weight: 500;
    font-size: 1rem;
  }
`;

const Fields = styled.div`
  padding: 0 20px;
  flex: 1;

  .info {
    color: #666;
    margin-bottom: 20px;
    font-size: 0.95rem;
    font-weight: 500;
    text-align: center;
  }
  .fields {
    height: calc(100vh - 400px);
    overflow-y: auto;
    padding: 10px;
    background: #f8f9fa;
    border-radius: 12px;
    border: 1px solid #e9ecef;

    /* Scrollbar styles */
    &::-webkit-scrollbar {
      width: 4px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ddd;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #bbb;
    }

    .field {
       border: 1px solid #e9ecef;
       border-radius: 12px;
       margin: 12px 0;
       list-style: none;
       box-shadow: 0 2px 8px rgba(0,0,0,0.08);
       background: white;
       font-size: 0.9rem;
       cursor: pointer;
       transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0,0,0,0.15);
        border-color: ${({ theme }) => theme.colors.primary || "#ff9900"};
      }

      .title {
        color: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;

        .field_name:after {
          content: " *";
          color: ${({ theme }) => theme.colors.primary || "#ff9900"};
        }
        svg {
          fill: #666;
          transition: fill 0.3s ease;
        }
      }
      .content {
        font-size: 0.85rem;
        color: #666;
      }
      .operator {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary || "#ff9900"};
        font-weight: 600;
        font-size: 0.8rem;
      }

      .MuiAccordionSummary-root {
        padding: 0;
        border-radius: 12px;
      }
      .MuiAccordionSummary-content {
        display: block;
        margin: 12px;
      }
    }
    .no-filter {
       height: 100%;
       justify-content: center;
       display: flex;
       align-items: center;
       color: #666;
       font-size: 1.1rem;
       font-weight: 500;
     }
  }
`;

const FormFilterField = styled.form`
  background: rgba(255,255,255,0.05);
  border-radius: 8px;

  .default-field {
    min-width: auto !important;
    min-height: auto !important;
    background-color: rgba(255,255,255,0.9);
    text-transform: inherit;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    color: #333;
    height: fit-content;
    margin: 8px 0;
    border-radius: 8px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .MuiOutlinedInput-root {
      border-radius: 8px;
      
      &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${({ theme }) => theme.colors.primary || "#ff9900"};
        border-width: 2px;
      }
    }
  }
  .default-submit-button {
    min-width: auto !important;
    color: ${({ theme }) => theme.colors.primary || "#ff9900"} !important;
    background: white !important;
    margin-top: 15px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 16px;
    box-shadow: none;
    font-weight: bold;
    border-radius: 8px !important;
  }

  .MuiInputLabel-formControl[data-shrink="false"] {
    transform: translate(14px, 12px) scale(1);
    color: #666;
  }

  .MuiInputLabel-shrink[data-shrink="true"] {
    transform: translate(14px, -4px) scale(0.75);
    color: ${({ theme }) => theme.colors.primary || "#ff9900"};
    font-weight: 500;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 24px 20px;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  position: sticky;
  bottom: 0;
  gap: 12px;

  button {
    display: block;
    background: rgba(255,255,255,0.9);
    text-transform: inherit;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    color: #333;
    min-width: auto !important;
    min-height: auto !important;
    height: fit-content;
    border-radius: 8px;
    padding: 10px 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(10px);

    &:hover {
      background: white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    &:first-child {
      background: ${({ theme }) => theme.colors.primary || "#ff9900"};
      color: white;
      
      &:hover {
        background: ${({ theme }) => theme.colors.primary || "#e68900"};
      }
    }

    &:last-child {
      background: rgba(255,255,255,0.9);
      color: #666;
      
      &:hover {
        background: white;
        color: #333;
      }
    }
  }
`;

export {
  Container, Content, Title, InfoFilter, Fields, FormFilterField, Actions
};
