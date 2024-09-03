import {
  FormatAlignCenter,
  FormatAlignLeft,
  FormatAlignRight,
  FormatBold,
  FormatIndentDecrease,
  FormatIndentIncrease,
  FormatItalic,
  FormatListBulleted,
  FormatListNumbered,
  FormatStrikethrough,
  FormatUnderlined,
  Redo,
  Undo,
} from "@mui/icons-material";
import { Box, Stack, styled } from "@mui/material";
import { type Level } from "@tiptap/extension-heading";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import { content, extensions, fontSizes, headings } from "./editor-constants";
import { EditorDivider } from "./editor-divider";
import { EditorMenuButton, EditorMenuItem } from "./editor-menu-button";
import { EditorToggleButton } from "./editor-toggle-button";
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

const StyledEditorContent = styled(EditorContent)`
  div[class*="tiptap ProseMirror"] {
    padding: 8px 12px;
    border-width: 1px;
    border-radius: 4px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .tiptap.ProseMirror-focused {
    outline: none;
  }
`;

export type EditorInputProps<FV extends FieldValues> = {
  name: FieldPath<FV>;
  control: Control<FV>;
};

export const EditorInput = <FV extends FieldValues>(
  props: EditorInputProps<FV>
) => {
  const { control, name } = props;
  const { field } = useController({
    control,
    name,
  });

  const editor = useEditor({
    extensions,
    content,
    onUpdate: (ev) => {
      field.onChange(ev.editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }
  return (
    <Box>
      <Stack direction="row" spacing={0.5}>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().undo().run()}
          isDisabled={(editor) => !editor.can().undo()}
        >
          <Undo />
        </EditorToggleButton>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().redo().run()}
          isDisabled={(editor) => !editor.can().redo()}
        >
          <Redo />
        </EditorToggleButton>
        <EditorDivider />
        <EditorMenuButton
          editor={editor}
          items={fontSizes}
          onSelected={(value, editor) => {
            editor.chain().setFontSize(value).run();
          }}
          getSelected={(options: EditorMenuItem<string>[], editor: Editor) => {
            return options.find((option) =>
              editor.isActive({ fontSize: option.value })
            )?.value;
          }}
        />
        <EditorMenuButton
          editor={editor}
          items={headings}
          onSelected={(value, editor) => {
            if (value === 4) {
              editor.chain().setParagraph().run();
            } else {
              editor
                .chain()
                .setHeading({ level: value as Level })
                .run();
            }
          }}
          getSelected={(options: EditorMenuItem<number>[], editor: Editor) => {
            return options.find((option) =>
              editor.isActive({ level: option.value })
            )?.value;
          }}
        />

        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().toggleBold().run()}
          isActive={(editor) => editor.isActive("bold")}
        >
          <FormatBold />
        </EditorToggleButton>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().toggleItalic().run()}
          isActive={(editor) => editor.isActive("italic")}
        >
          <FormatItalic />
        </EditorToggleButton>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().toggleUnderline().run()}
          isActive={(editor) => editor.isActive("underline")}
        >
          <FormatUnderlined />
        </EditorToggleButton>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().toggleStrike().run()}
          isActive={(editor) => editor.isActive("strike")}
        >
          <FormatStrikethrough />
        </EditorToggleButton>
        <EditorDivider />
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().toggleBulletList().run()}
          isActive={(editor) => editor.isActive("bulletList")}
        >
          <FormatListBulleted />
        </EditorToggleButton>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().toggleOrderedList().run()}
          isActive={(editor) => editor.isActive("orderedList")}
        >
          <FormatListNumbered />
        </EditorToggleButton>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().focus().indent().run()}
          isDisabled={(editor) => !editor.can().indent()}
        >
          <FormatIndentIncrease />
        </EditorToggleButton>
        <EditorToggleButton
          editor={editor}
          onToggle={(editor) => editor.chain().focus().outdent().run()}
          isDisabled={(editor) => !editor.can().outdent()}
        >
          <FormatIndentDecrease />
        </EditorToggleButton>
        <EditorDivider />
        <EditorMenuButton
          editor={editor}
          items={[
            { icon: <FormatAlignLeft />, value: "left" },
            { icon: <FormatAlignCenter />, value: "center" },
            { icon: <FormatAlignRight />, value: "right" },
          ]}
          getSelected={(items, editor) => {
            const currentAlignment = items.find((item) =>
              editor.isActive({ textAlign: item.value })
            );
            return currentAlignment?.value;
          }}
          onSelected={(value, editor) => {
            editor.chain().focus().setTextAlign(value).run();
          }}
        />
      </Stack>
      <StyledEditorContent editor={editor} />
    </Box>
  );
};
