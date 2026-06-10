import "./App.css";
import FoldableList from "./components/base/FoldableList";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="under-nav">
        <Sidebar />
        <FoldableList />
      </div>
    </>
  );
}

export default App;
