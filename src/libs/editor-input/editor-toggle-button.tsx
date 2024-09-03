import { IconButton, IconButtonProps } from "@mui/material";
import { Editor } from "@tiptap/core";
import { MouseEvent, PropsWithChildren } from "react";

export type EditorToggleButtonProps = {
  editor: Editor;
  onToggle?: (editor: Editor) => void;
  isActive?: (editor: Editor) => boolean;
  isDisabled?: (editor: Editor) => boolean;
} & IconButtonProps;

export const EditorToggleButton = (
  props: PropsWithChildren<EditorToggleButtonProps>
) => {
  const { editor, onToggle, isActive, ...iconButtonProps } = props;
  function handleToggle(editor: Editor) {
    return function (event: MouseEvent<HTMLButtonElement>) {
      props.onToggle?.(editor);
      props.onClick?.(event);
    };
  }

  const active = props.isActive?.(props.editor) ?? false;
  const disabled = props.isDisabled?.(props.editor) ?? false;

  return (
    <IconButton
      sx={(theme) => ({
        backgroundColor: active ? theme.palette.grey[200] : undefined,
        ...theme.applyStyles("dark", {
          backgroundColor: active ? theme.palette.grey[800] : undefined,
        }),
      })}
      {...iconButtonProps}
      onClick={handleToggle(props.editor)}
      disabled={disabled}
    >
      {props.children}
    </IconButton>
  );
};
