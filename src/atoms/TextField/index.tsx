import React, { useRef, useEffect, useState } from "react";

import { useField } from "../../libraries/unform";
import {
  TextField as BaseTextField,
  TextFieldProps
} from "../../libraries/mui/components";

const TextField: React.FC<TextFieldProps> = ({
  name,
  helperText,
  defaultValue,
  InputLabelProps,
  ...restProps
}) => {

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    fieldName,
    defaultValue: defaultFieldValue,
    registerField,
    error
  } = useField(name as string);

  const visibleHelperText = helperText || " ";

  const defaultInputValue = defaultValue ?? defaultFieldValue;
  const [shrink, setShrink] = useState<boolean>(!!defaultInputValue);

  useEffect(() => {
    if (fieldName) {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value",
        clearValue(_ref, resetValue: string) {

          const ref = _ref;

          const newValue = resetValue ?? defaultInputValue ?? "";

          ref.value = newValue;
          setShrink(!!newValue);
        },
        setValue(_ref: HTMLInputElement, value: string) {
          if (_ref) {
            const newValue = value ?? "";
            const ref = _ref;

            ref.value = newValue;
            setShrink(!!newValue);
          }
        }
      });
    }
  }, [fieldName, registerField, defaultInputValue, setShrink]);

  useEffect(() => {
    const input = inputRef.current;

    function handlerFocusEvent(evt: FocusEvent) {
      const inputValue = (evt.currentTarget as HTMLInputElement).value;

      if (!inputValue) setShrink(true);
    }

    function handlerBlurEvent(evt: FocusEvent) {
      const inputValue = (evt.target as HTMLInputElement).value;

      if (!inputValue) setShrink(false);
    }

    if (input) {
      input.addEventListener("focus", handlerFocusEvent);
      input.addEventListener("blur", handlerBlurEvent);
    }

    return () => {
      if (input) {
        input.removeEventListener("focus", handlerFocusEvent);
        input.removeEventListener("blur", handlerBlurEvent);
      }
    };
  }, [inputRef]);

  return (
    <BaseTextField
      {...restProps}
      name={fieldName}
      error={!!error}
      helperText={error || visibleHelperText}
      inputRef={inputRef}
      defaultValue={defaultInputValue}
      InputLabelProps={{
        ...InputLabelProps,
        shrink: InputLabelProps?.shrink ?? shrink
      }}
    />
  );
};

export default React.memo(TextField);
