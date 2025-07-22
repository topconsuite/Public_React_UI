import styled from "styled-components";

export const FormModalContainer = styled.div`
  .MuiDialog-paper {
    min-width: 400px;
  }

  .mHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #e0e0e0;

    .content {
      flex: 1;

      .title {
        font-size: 1.25rem;
        font-weight: 500;
        color: #333;
      }
    }

    .actions {
      display: flex;
      gap: 8px;

      .MuiButton-root {
        min-width: auto;
        padding: 8px;
        border-radius: 4px;

        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    }
  }

  .mContent {
    padding: 24px;
    min-height: 200px;

    .form {
      width: 100%;
    }

    .MuiGrid-container {
      margin: 0;
      width: 100%;
    }

    .MuiTextField-root {
      width: 100%;
    }

    .MuiFormControlLabel-root {
      margin-left: 0;
      margin-right: 16px;
    }
  }

  .mFooter {
    padding: 16px 24px;
    border-top: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .actions {
      display: flex;
      gap: 8px;
    }

    .MuiButton-root {
      text-transform: none;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 4px;

      &[color="primary"] {
        background-color: #1976d2;
        color: white;

        &:hover {
          background-color: #1565c0;
        }

        &:disabled {
          background-color: #ccc;
          color: #666;
        }
      }
    }
  }

  /* Responsive adjustments */
  @media (max-width: 600px) {
    .MuiDialog-paper {
      margin: 16px;
      width: calc(100% - 32px);
      min-width: unset;
    }

    .mHeader {
      padding: 12px 16px;

      .title {
        font-size: 1.1rem;
      }
    }

    .mContent {
      padding: 16px;
    }

    .mFooter {
      padding: 12px 16px;
      flex-direction: column-reverse;
      gap: 8px;

      .actions {
        width: 100%;
        justify-content: center;
      }

      .MuiButton-root {
        flex: 1;
        max-width: 200px;
      }
    }
  }
`;
