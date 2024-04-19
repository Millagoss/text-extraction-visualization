import { IconTrash } from "@tabler/icons-react";
import { useState } from "react";

const Sidebar = () => {
  const [inputText, setInputText] = useState("");
  const [menuItems, setMenuItems] = useState<string[]>([]);

  const extractMenuItems = (text: string) => {
    const regex = /^(?:\d+[:.-] ).+/gm;
    const matches = text.match(regex);
    return matches ? matches.map((match) => match.trim()) : [];
  };

  const handleExtractClick = () => {
    const extractedItems = extractMenuItems(inputText);
    setMenuItems(extractedItems);
  };

  const handleClear = () => setInputText("");

  const handleRemoveMenuItem = (item: string) =>
    setMenuItems((prev) => prev.filter((i) => i !== item));

  return (
    <div className="w-1/3 border-r-2 h-full border-primary-border p-4 rounded-lg shadow-md overflow-scroll">
      <div>
        <textarea
          className="w-full min-h-80 px-4 py-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-blue-500"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Paste text containing menu structures..."
        />
        <div className="flex gap-5 justify-between">
          <button
            onClick={handleClear}
            className="border border-gray-500 text-gray-500 w-1/2 px-4 py-2 mb-4 rounded-md hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out"
          >
            Clear
          </button>
          <button
            className="block w-1/2 px-4 py-2 mb-4 bg-primary-0 text-primary-text rounded-md hover:bg-gray-200 border-primary-border"
            onClick={handleExtractClick}
          >
            Extract
          </button>
        </div>
      </div>
      <div>
        {menuItems.length > 0 ? (
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-4 items-center flex justify-between py-2 mb-2 bg-white border border-gray-300 rounded-md"
              >
                {item}
                <div title="add to node" className="flex gap-1">
                  <button
                    title="Delete Menu-item"
                    onClick={() => handleRemoveMenuItem(item)}
                  >
                    <IconTrash
                      size="20px"
                      className="text-red-300 cursor-pointer hover:text-red-500 transition-all"
                    />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No valid menu items found</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
