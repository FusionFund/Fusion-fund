import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const UserContext = React.createContext<{
  setDrawerTitle: any;
  drawerTitle: string;
  drawerBody: string;
  setDrawerBody: any;
  closeDrawer: any;
  drawerIsOpen: boolean;
}>({
  setDrawerTitle: undefined,
  drawerTitle: "",
  drawerBody: "",
  setDrawerBody: undefined,
  closeDrawer: undefined,
  drawerIsOpen: false,
});

export const useUserContext = () => {
  const router = useRouter();
  const pathname = router.pathname;

  const [drawerTitle, setDrawerTitle] = useState("");
  const [drawerBody, setDrawerBody] = useState("");
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const closeDrawer = () => {
    setDrawerTitle("");
    setDrawerBody("");
    setDrawerIsOpen(false);
  };

  return {
    drawerTitle,
    setDrawerTitle,
    drawerBody,
    setDrawerBody,
    closeDrawer,
    drawerIsOpen,
  };
};

export const UserContextProvider = ({ children }) => {
  const auth = useUserContext();
  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
};

export const useClient = () => useContext(UserContext);