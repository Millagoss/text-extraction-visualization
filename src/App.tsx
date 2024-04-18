import Body from "./components/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="bg-primary-body flex h-full">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
