import { useEffect, useState } from "react";
import { InitialLoader } from "./components/InitialLoader/InitialLoader";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return <>{isLoading && <InitialLoader />}</>;
}

export default App;
