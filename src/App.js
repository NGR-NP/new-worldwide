import React from 'react'
import { lazy, Suspense } from "react";
import { GlobalStyle } from "./globalStyles";
const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/header"));
const Footer = lazy(() => import("./components/footer"));
const ScrollToTop = lazy(() => import("./components/scrollToTop"));


function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>


    </>
  );
}

export default App;
