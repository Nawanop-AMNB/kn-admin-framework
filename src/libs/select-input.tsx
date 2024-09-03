import {
  InputLabelProps,
  MenuItem,
  SlotProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";

export type SelectInputProps<FV extends FieldValues> = TextFieldProps & {
  options: { label: string; value: string }[];
  name: FieldPath<FV>;
  control: Control<FV>;
};

export const SelectInput = <FV extends FieldValues>(
  props: SelectInputProps<FV>
) => {
  const { options, control, name, ...restProps } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          select
          {...restProps}
          slotProps={{
            inputLabel: {
              shrink: restProps.label ? true : undefined,
              ...restProps.slotProps?.inputLabel,
            } as SlotProps<React.ElementType<InputLabelProps>, {}, {}>,
          }}
          {...field}
        >
          {options.map((option) => (
            <MenuItem
              key={`${option.value}-${option.label}`}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
