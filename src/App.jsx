import "./App.css";
import { MantineProvider } from '@mantine/core';
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <div className="blur" style={{ top: '-18%', right: '0' }}></div>
        <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
        <Home />
      </div>
    </MantineProvider>
  );
};

export default App;