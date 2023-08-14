"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => {
  return <Provider session={session}>{children}</Provider>;
};

export default Provider;
