import { Extension } from "@tiptap/core";
import TextStyle from "@tiptap/extension-text-style";

export const DEFAULT_FONT_SIZES = [
  "default",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "30",
  "36",
];

export const DEFAULT_FONT_SIZE = "16pt";

const SIZE_PATTERN = /([\d.]+)px/i;

export function convertToPX(styleValue: string): string {
  const matches = styleValue.match(SIZE_PATTERN);
  if (!matches) return "";
  const value = matches[1];
  if (!value) return "";
  return value;
}

export type FontSizeOptions = {
  types: string[];
};

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize: {
      /**
       * Set the font size
       */
      setFontSize: (fontSize: string) => ReturnType;
      /**
       * Unset the font size
       */
      unsetFontSize: () => ReturnType;
    };
  }
}

const FontSize = Extension.create<FontSizeOptions>({
  name: "fontSize",

  addOptions() {
    return {
      types: ["textStyle"],
      fontSizes: DEFAULT_FONT_SIZES,
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => {
              return convertToPX(element.style.fontSize) || "";
            },
            renderHTML: (attributes) => {
              if (!attributes.fontSize) {
                return {};
              }

              return {
                style: `font-size: ${attributes.fontSize}!important`,
              };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setFontSize:
        (fontSize) =>
        ({ chain }) => {
          return chain().setMark("textStyle", { fontSize }).run();
        },
      unsetFontSize:
        () =>
        ({ chain }) => {
          return chain()
            .setMark("textStyle", { fontSize: DEFAULT_FONT_SIZE })
            .removeEmptyTextStyle()
            .run();
        },
    };
  },

  addExtensions() {
    return [TextStyle];
  },
});

export default FontSize;
