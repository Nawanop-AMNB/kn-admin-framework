import { Popover, PopoverProps } from "@mui/material";
import { MouseEventHandler, ReactNode } from "react";
import { useMenu } from "./use-menu";

export type WithPopoverListener = {
  onOpen: MouseEventHandler<HTMLElement>;
  onClose: () => void;
};

export type WithPopperProps = Omit<PopoverProps, "open"> & {
  element: (listener: WithPopoverListener) => ReactNode;
  render: (listener: WithPopoverListener) => ReactNode;
};

export const WithPopover = (props: WithPopperProps) => {
  const [open, anchor, onOpen, onClose] = useMenu();
  const { element, render, ...restProps } = props;

  return (
    <>
      {render({ onOpen, onClose })}
      <Popover
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        {...restProps}
        open={open}
        anchorEl={anchor}
        onClose={onClose}
      >
        {element({ onOpen, onClose })}
      </Popover>
    </>
  );
};
