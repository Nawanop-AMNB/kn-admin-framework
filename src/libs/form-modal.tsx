import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { ReactNode, useState } from "react";

export type FormModalProps = Omit<DialogProps, "onClose"> & {
  header?: ReactNode;
  actions?: ReactNode;
  onClose: () => void;
};

export const useFormModal = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

  return {
    open,
    handleClickClose,
    handleClickOpen,
  };
};

export const FormModal = (props: FormModalProps) => {
  const { onClose, ...restProps } = props;
  return (
    <Dialog {...restProps}>
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent={props.header ? "space-between" : "end"}
          alignItems="start"
        >
          {props.header}
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Stack>
      </DialogTitle>
      <Divider />
      <DialogContent sx={{ minWidth: 400 }}>{props.children}</DialogContent>
      <Divider />
      {props.actions && <DialogActions>{props.actions}</DialogActions>}
    </Dialog>
  );
};
