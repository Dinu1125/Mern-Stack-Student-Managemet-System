import Header from "./components/Header";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/Students";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterClass from "./components/counterClass";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <CounterClass />

        <Routes>
          <Route path="/" element={<AddStudent />} />
          <Route path="/students" element={<AllStudents />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

