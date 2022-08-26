import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} exact />
            <Route path="/register" component={RegistrationPage} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
