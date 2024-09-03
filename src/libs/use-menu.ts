import { MouseEvent, useState } from "react";

export const useMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const isOpened = Boolean(anchor);
  const handleMenuClick = (e: MouseEvent<HTMLElement>) => {
    setAnchor(e.currentTarget);
  };
  const handleMenuClose = () => setAnchor(null);

  return [isOpened, anchor, handleMenuClick, handleMenuClose] as [
    isOpened: boolean,
    anchor: HTMLElement,
    onClickMenu: (e: MouseEvent<HTMLElement>) => void,
    onCloseMenu: () => void,
  ];
};
