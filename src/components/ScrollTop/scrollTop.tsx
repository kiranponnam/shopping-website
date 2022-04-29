import React, { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop: FC<any> = () => {
  const { pathname } = useLocation();
  useEffect(() => window?.scrollTo({ top: 0, behavior: "smooth" }), [pathname]);
  return null;
};
