import React, { useEffect } from "react";

import { useAtom } from "../../libraries/jotai";
import { Close } from "../../libraries/mui/icons";
import { Skeleton } from "../../libraries/mui/components";

import { sidebarDrawerAtom } from "../../states/SidebarDrawerContext";

import {
  SidebarDrawerContainer,
  SidebarDrawerContent,
  SidebarDrawerHeader,
  SidebarDrawerBody,
  SidebarDrawerFooter,
  SidebarDrawerProductIcon
} from "./styles";

interface SidebarDrawerProps {
  anchor?: "left" | "top" | "right" | "bottom",
  bodyChildren: JSX.Element;
  footerChildren: JSX.Element;
  primarycolor: string;
  productIconPath: string;
  open: boolean;
  onClose: () => void;
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  anchor, open, onClose, bodyChildren, footerChildren, primarycolor, productIconPath
}) => {

  const [sidebarDrawer, setSidebarDrawer] = useAtom(sidebarDrawerAtom);

  useEffect(() => {
    setSidebarDrawer({ onClose });
  }, [onClose]);

  return (
    <SidebarDrawerContainer anchor={anchor} open={open} onClose={sidebarDrawer.onClose}>
      <SidebarDrawerContent primarycolor={primarycolor}>
        <SidebarDrawerHeader primarycolor={primarycolor}>
          <SidebarDrawerProductIcon
            src={productIconPath}
            loading={() => <Skeleton variant="rectangular" animation="wave" width={150} height={49} />}
          />
          <Close onClick={onClose} />
        </SidebarDrawerHeader>
        <SidebarDrawerBody>
          { bodyChildren }
        </SidebarDrawerBody>
        <SidebarDrawerFooter primarycolor={primarycolor}>
          { footerChildren }
        </SidebarDrawerFooter>
      </SidebarDrawerContent>
    </SidebarDrawerContainer>
  );
};

SidebarDrawer.defaultProps = {
  anchor: "left"
};

export default SidebarDrawer;
