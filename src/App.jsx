import { Routers } from "./routes/router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { AuthProvider } from "./contexts/AuthContext";
import { checkAuthentication } from "./hooks/checkAuthentication";

import GlobalStyles from "./styles/global";

function App() {

  return (
    <>
      <AuthProvider value={checkAuthentication()}>
        <Routers>
          <Navbar />
        </Routers>
        
        <Footer />
      </AuthProvider>

      <GlobalStyles />
    </>
  );
}

export default App;
