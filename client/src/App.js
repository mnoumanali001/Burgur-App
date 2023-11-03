import AppContextProvider from "./context/AppContextProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <AppContextProvider>
      <AppRoutes />
    </AppContextProvider>
  );
};
export default App;
