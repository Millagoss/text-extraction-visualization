import { IconChevronUp } from "@tabler/icons-react";
import Body from "./components/React-Flow/Body";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="relative bg-primary-body h-lvh96 sm:h-screen flex flex-col sm:flex-row">
      <Sidebar />
      <Body />
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        title="Go to Top"
        className="absolute bottom-0 right-0 mb-4 mr-4 bg-gray-400 text-gray-100 animate-bounce px-3 py-2 rounded-full shadow-md focus:outline-none sm:hidden"
      >
        <IconChevronUp />
      </button>
    </div>
  );
}

export default App;
