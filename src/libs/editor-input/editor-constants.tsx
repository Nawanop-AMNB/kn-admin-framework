import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";
import FontSize from "./extensions/font-size";
import Indent from "./extensions/indent";

export const extensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4],
    },
  }),
  Underline,
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Indent.configure({
    types: ["heading", "paragraph", "bulletList", "orderedList"],
  }),
  FontSize,
];

export const content = "<p></p>";

export const fontSizes = [
  {
    label: "Default Size",
    value: "default",
  },
  {
    label: "8pt",
    value: "8pt",
  },
  {
    label: "12pt",
    value: "12pt",
  },
  {
    label: "16pt",
    value: "16pt",
  },
  {
    label: "20pt",
    value: "20pt",
  },
  {
    label: "24pt",
    value: "24pt",
  },
  {
    label: "28pt",
    value: "28pt",
  },
  {
    label: "32pt",
    value: "32pt",
  },
  {
    label: "36pt",
    value: "36pt",
  },
];

export const headings = [
  {
    label: "Paragraph",
    value: 4,
    menuItemLabel: <p>Paragraph</p>,
  },
  {
    label: "Heading 1",
    menuItemLabel: <h1>Heading 1</h1>,
    value: 1,
  },
  {
    label: "Heading 2",
    menuItemLabel: <h2>Heading 2</h2>,
    value: 2,
  },
  {
    label: "Heading 3",
    menuItemLabel: <h3>Heading 3</h3>,
    value: 3,
  },
];
