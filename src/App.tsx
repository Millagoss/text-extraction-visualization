import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-primary-body h-screen flex flex-row">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
