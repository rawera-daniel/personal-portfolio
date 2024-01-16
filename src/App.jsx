import React from "react";
import Applayout from "./ui/Applayout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Applayout />;
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "bg-stone-50",
            color: "text-stone-950",
          },
        }}
      />
    </>
  );
}

export default App;
