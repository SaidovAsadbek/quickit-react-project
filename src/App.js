import "./App.css";
// React-router-dom setup
import { BrowserRouter, Routes, Route } from "react-router-dom";

// All imported components and pages
import { Hero } from "./components";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Hero />} />
                <Route exact path="/solution" element={<Hero />} />
                <Route exact path="/resources" element={<Hero />} />
                <Route exact path="/pricing" element={<Hero />} />
                <Route exact path="/contact" element={<Hero />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
