import { Upload } from "@mui/icons-material";
import { Box, Stack, StackProps, SvgIcon, Typography } from "@mui/material";
import { useMemo } from "react";
import { useDropzone } from "react-dropzone";
import {
  Control,
  Controller,
  FieldPath,
  FieldValues,
  useWatch,
} from "react-hook-form";

export interface DropzoneInputProps<FV extends FieldValues> {
  name: FieldPath<FV>;
  control: Control<FV>;
  label?: string;
  slotsProps?: {
    dropzoneProps?: StackProps;
  };
  accept: string[];
}

export const DropzoneInput = <FV extends FieldValues>({
  name,
  control,
  label,
  slotsProps,
  accept,
}: DropzoneInputProps<FV>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={function Dropzone({
        field: { onChange, value },
        fieldState: { error },
      }) {
        const { getRootProps, getInputProps, isDragReject } = useDropzone({
          onDrop: (acceptedFiles) => {
            onChange(acceptedFiles);
          },
          multiple: false,
          accept: accept.reduce(
            (dict, ext) => {
              dict[ext] = [];
              return dict;
            },
            {} as Record<string, []>
          ),
        });

        const currentValue = useWatch({ control, name });

        const backgrounImage = useMemo(() => {
          return value?.[0] instanceof File
            ? `url(${URL.createObjectURL(currentValue[0])})`
            : undefined;
        }, [currentValue?.[0]]);

        return (
          <Box>
            {label && <Typography variant="h6">{label}</Typography>}
            <Stack
              {...getRootProps()}
              direction="row"
              justifyContent="center"
              alignItems="center"
              {...slotsProps?.dropzoneProps}
              sx={(theme) => ({
                p: 4,
                minHeight: 400,
                maxWidth: 400,
                borderWidth: 2,
                borderStyle: "dashed",
                borderColor: isDragReject
                  ? theme.palette.error.dark
                  : undefined,
                textAlign: "center",
                ":hover": {
                  cursor: "pointer",
                },
                background: backgrounImage,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                ...slotsProps?.dropzoneProps?.sx,
              })}
            >
              <input {...getInputProps()} />
              {!value?.[0] && (
                <Stack spacing={2}>
                  <Stack direction="row" justifyContent="center">
                    <SvgIcon
                      sx={{
                        fontSize: 72,
                        justifyContent: "center",
                        opacity: 0.2,
                      }}
                    >
                      <Upload />
                    </SvgIcon>
                  </Stack>
                  <Typography>
                    Drag and drop a file here, or click to select one
                  </Typography>
                </Stack>
              )}
            </Stack>
            {error && (
              <Typography color="error" variant="body2">
                {error.message}
              </Typography>
            )}
          </Box>
        );
      }}
    />
  );
};

export default DropzoneInput;
