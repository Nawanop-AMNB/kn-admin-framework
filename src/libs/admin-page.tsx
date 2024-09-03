import { Container, Grid2 } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
  SideBar,
  SideBarItemGroupSchema,
  SideBarItemSchema,
  useSideBar,
} from "./side-bar";
import { TopBar } from "./top-bar";

type WithAdminPageContent<
  T extends SideBarItemGroupSchema | SideBarItemSchema,
> = T extends SideBarItemGroupSchema
  ? Omit<SideBarItemGroupSchema, "subItems"> & {
      subItems: (SideBarItemSchema & { element: () => JSX.Element })[];
    }
  : SideBarItemSchema & { element: () => JSX.Element };

export type AdminPageProps = {
  contents: WithAdminPageContent<SideBarItemGroupSchema | SideBarItemSchema>[];
};

export const AdminPage = (props: AdminPageProps) => {
  const keyContentList = useMemo(() => {
    const list: { keys: string[]; element: () => JSX.Element }[] = [];
    props.contents.forEach((content) => {
      if (content.type === "item") {
        list.push({ keys: [content.id], element: content.element });
      }
      if (content.type === "group") {
        content.subItems.forEach((subContent) => {
          list.push({
            keys: [content.id, subContent.id],
            element: subContent.element,
          });
        });
      }
    });
    return list;
  }, [props.contents]);

  const defaultKeys = useMemo(() => {
    const keys: string[] = [];
    if (keyContentList[0] && keyContentList[0].keys?.[0]) {
      keys.push(keyContentList[0].keys[0]);
    }
    if (keyContentList[1] && keyContentList[1].keys?.[1]) {
      keys.push(keyContentList[1].keys[1]);
    }
    return keys;
  }, [keyContentList[0]]);

  const sideBarListener = useSideBar({
    defaultKeys,
  });
  const { selectedKeys } = sideBarListener;
  const [Element, setElement] = useState<JSX.Element>();

  useEffect(() => {
    const foundItem = keyContentList.find((kContent) => {
      const isMatchedKey1 = kContent.keys[0] === selectedKeys[0];
      const isMatchedKey2 = kContent.keys[1] === selectedKeys[1];
      return isMatchedKey1 && isMatchedKey2;
    });

    const ElementComp = foundItem?.element();

    if (ElementComp) {
      setElement(ElementComp);
    }
  }, [keyContentList, selectedKeys]);

  return (
    <Container maxWidth={false}>
      <TopBar />
      <Grid2 container height="100%">
        <Grid2>
          <SideBar width={275} items={props.contents} {...sideBarListener} />
        </Grid2>
        <Grid2 flex={1}>{Element}</Grid2>
      </Grid2>
    </Container>
  );
};
