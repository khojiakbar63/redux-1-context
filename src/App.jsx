import React from "react";
import { Header, Footer, Section } from "./components";
import { Outlet } from "react-router";
import { CounterProvider } from "./context/counter";
import { StringProvider } from "./context/string";

export const App = () => {
  return (
    <>
      <StringProvider>
        <CounterProvider>
          <Header />
          <main>
            <Section>
              <div className="container">
                <Outlet />
              </div>
            </Section>
          </main>
          <Footer />
        </CounterProvider>
      </StringProvider>
    </>
  );
};
