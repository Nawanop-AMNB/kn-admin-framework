import { Add } from "@mui/icons-material";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { ContentBox } from "../libs/content-box";
import { EditorInput } from "../libs/editor-input/editor-input";
import { FormModal, useFormModal } from "../libs/form-modal";
import { SelectInput } from "../libs/select-input";
import { TextInput } from "../libs/text-input";
import DropzoneInput from "../libs/dropzone-input";

export const ProductContent = () => {
  const { open, handleClickOpen, handleClickClose } = useFormModal();

  const { control } = useForm({
    defaultValues: {
      test1: "",
      test2: "",
      test3: "",
      test4: "",
      content: "",
      file: undefined as File | undefined,
    },
  });

  return (
    <ContentBox
      label="Dashboard"
      action={
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleClickOpen}
        >
          Add
        </Button>
      }
    >
      <EditorInput control={control} name="content" />
      <DropzoneInput
        control={control}
        name="file"
        accept={["image/png", "image/jpeg"]}
      />
      <FormModal
        open={open}
        onClose={handleClickClose}
        header="This is testing header"
      >
        <TextInput
          control={control}
          name="test1"
          label="Title [EN]"
          fullWidth
        />
        <TextInput
          control={control}
          name="test2"
          label="Description [EN]"
          fullWidth
          minRows={8}
          slotProps={{
            input: {
              style: {
                resize: "both",
              },
            },
          }}
          multiline
        />
        <TextInput
          control={control}
          name="test3"
          label="Title [TH]"
          fullWidth
        />
        <TextInput
          control={control}
          name="test4"
          label="Description [TH]"
          fullWidth
          minRows={8}
          slotProps={{
            input: {
              style: {
                resize: "both",
              },
            },
          }}
          multiline
        />
        <TextInput
          control={control}
          name="test4"
          label="Meta Title"
          fullWidth
        />
        <TextInput
          control={control}
          name="test4"
          label="Meta Description"
          fullWidth
        />
        <SelectInput
          control={control}
          name="test1"
          label="test1"
          fullWidth
          options={[{ label: "Test 1", value: "test1" }]}
        />
        <TextInput control={control} name="test4" label="Keywords" fullWidth />
      </FormModal>
    </ContentBox>
  );
};
