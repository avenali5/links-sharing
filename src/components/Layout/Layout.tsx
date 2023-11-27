import React from "react";
import { LayoutStyle } from "./Layout.style";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
