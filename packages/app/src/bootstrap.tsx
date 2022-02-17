const { createRoot } = await import("react-dom");
const { StrictMode } = await import("react");
const { App } = await import("./components/App");

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export {};
