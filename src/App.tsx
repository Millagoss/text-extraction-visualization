import Body from "./components/React-Flow/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-primary-body h-auto sm:h-screen flex flex-col sm:flex-row">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
