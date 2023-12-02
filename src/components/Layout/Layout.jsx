import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
