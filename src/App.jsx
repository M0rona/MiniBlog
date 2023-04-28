import { Routers } from "./routes/router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <>
      <Routers>
        <Navbar />
      </Routers>
      <Footer />

      <GlobalStyles />
    </>
  );
}

export default App;
