import { ChevronRight } from "@mui/icons-material";
import { Box, Collapse } from "@mui/material";
import { SideBarItem, SideBarItemSchema } from "./side-bar-item";
import { SideBarItemBaseSchema } from "./side-bar-item-base";

export type SideBarItemGroupSchema = {
  type: "group";
  subItems: SideBarItemSchema[];
} & SideBarItemBaseSchema;

export type SideBarItemGroupProps = Omit<
  SideBarItemGroupSchema,
  "type" | "children"
> & {
  selectedKeys: string[];
  selected?: boolean;
  onItemSelected: (keys: string[]) => void;
};

export const SideBarItemGroup = (props: SideBarItemGroupProps) => {
  const handleItemSelected = (key: string, onClick?: () => void) => () => {
    props.onItemSelected([props.id, key]);
    onClick?.();
  };

  const isItemSelected = (key: string) => {
    return props.id === props.selectedKeys[0] && props.selectedKeys[1] === key;
  };

  return (
    <>
      <SideBarItem
        {...props}
        extra={
          <ChevronRight
            sx={{
              rotate: props.selected ? "90deg" : undefined,
              transition: "rotate 300ms ease-out",
            }}
          />
        }
      />
      <Collapse in={props.selected}>
        {props.subItems.map((item) => (
          <Box
            key={`${item.id}-item`}
            paddingLeft={4}
            paddingTop={1}
            paddingRight={1}
          >
            <SideBarItem
              {...item}
              selected={isItemSelected(item.id)}
              onClick={handleItemSelected(item.id, item.onClick)}
            />
          </Box>
        ))}
      </Collapse>
    </>
  );
};
