import {
  InputLabelProps,
  SlotProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

export type TextInputProps<FV extends FieldValues> = {
  name: FieldPath<FV>;
  control: Control<FV>;
} & TextFieldProps;

export const TextInput = <FV extends FieldValues>(
  props: TextInputProps<FV>
) => {
  const { control, name, ...textFieldProps } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <TextField
            {...textFieldProps}
            slotProps={{
              inputLabel: {
                shrink: textFieldProps.label ? true : undefined,
                ...textFieldProps.slotProps?.inputLabel,
              } as SlotProps<React.ElementType<InputLabelProps>, {}, {}>,
            }}
            {...field}
          />
        );
      }}
    />
  );
};
