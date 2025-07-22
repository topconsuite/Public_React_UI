import React, { useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid
} from "@libraries/mui/components";
import { Edit as EditIcon } from "@libraries/mui/icons";
import { Form } from "@libraries/unform";
import { FormHandles } from "@unform/core";
import { useTranslation } from "@hooks/index";
import { GlobalMessages } from "../../languages/interfaces/globalMessages";
import { FormModalProps } from "./types";
import { FormModalContainer } from "./styles";

const FormModal: React.FC<FormModalProps> = ({
  open,
  onClose,
  title,
  mode,
  onSubmit,
  fields,
  loading = false,
  maxWidth = "md",
  fullWidth = true,
  onEdit,
  submitButtonText,
  cancelButtonText,
  containerProps
}) => {

  const { t } = useTranslation();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = (formData: Record<string, unknown>) => {
    onSubmit(formData);
  };

  const handleEdit = () => {
    if (onEdit) {
      onEdit();
    }
  };

  const getSubmitButtonText = () => {
    if (submitButtonText) return submitButtonText;

    return mode === "create" ? t(GlobalMessages.register) : t(GlobalMessages.save);
  };

  const getCancelButtonText = () => cancelButtonText || t(GlobalMessages.close);

  return (
    <FormModalContainer {...containerProps}>
      <Dialog
        open={open}
        onClose={onClose}
        scroll="paper"
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        container={containerProps?.id ? document.getElementById(containerProps.id) : undefined}
      >
        <DialogTitle className="mHeader">
          <div className="content">
            <div className="title">{title}</div>
          </div>
          <div className="actions">
            {mode === "view" && onEdit && (
              <Button disableRipple onClick={handleEdit}>
                <EditIcon />
              </Button>
            )}
          </div>
        </DialogTitle>

        <DialogContent dividers className="mContent">
          <Form
            className="form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <DialogContentText tabIndex={-1} component="div">
              <Grid container spacing={1}>
                {fields.map((field, index) => {
                  // Generate a unique key based on field content or position
                  const fieldKey = `field-${JSON.stringify(field.gridProps || {})}-${index}`;

                  return (
                    <Grid
                      key={fieldKey}
                      item
                      xs={field.gridProps?.xs || 12}
                      sm={field.gridProps?.sm}
                      md={field.gridProps?.md}
                      lg={field.gridProps?.lg}
                      xl={field.gridProps?.xl}
                    >
                      {field.component}
                    </Grid>
                  );
                })}
              </Grid>
            </DialogContentText>
          </Form>
        </DialogContent>

        <DialogActions className="mFooter">
          <div className="actions">
            {mode !== "view" && (
              <Button
                disableRipple
                type="submit"
                color="primary"
                disabled={loading}
                onClick={() => formRef.current?.submitForm()}
              >
                {getSubmitButtonText()}
              </Button>
            )}
          </div>
          <Button
            disableRipple
            onClick={onClose}
            color="primary"
            disabled={loading}
          >
            {getCancelButtonText()}
          </Button>
        </DialogActions>
      </Dialog>
    </FormModalContainer>
  );
};

export default FormModal;
