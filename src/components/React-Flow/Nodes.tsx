import { IconCheck, IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";
import { MarkerType, Node, useReactFlow } from "reactflow";
import { v4 as uuidv4 } from "uuid";

const Nodes = ({ id, label }: { id: string; label: string }) => {
  const { setNodes, addNodes, getNodes, getNode, addEdges } = useReactFlow();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditInputOpen, setIsEditInputOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    setNodes((prev: Node[]) => {
      return prev;
    });
  };

  const handleDuplicate = () => {
    setNodes((prev: Node[]) => {
      const node = prev.find((n: Node) => n.id === id);
      if (node) {
        return [
          ...prev,
          {
            ...node,
            id: `${prev.length + 1}`,
            position: { x: node.position.x + 50, y: node.position.y + 100 },
          },
        ];
      }
      return prev;
    });
  };

  const handleAddChildrenNode = () => {
    const childrenId = uuidv4();
    const node = getNode(id);
    const x = node?.position ? node?.position.x + 40 : 0;
    const y = node?.position ? node?.position.y + 60 : 0;
    addNodes({
      id: childrenId,
      position: { x, y },
      data: { label: "new node" },
      type: "ChildrenNodeType",
    });
    addEdges({
      id: uuidv4(),
      source: id,
      target: childrenId,
      animated: true,
      type: "CustomEdge",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#FF0072",
      },
      label: "marker size and color",
      style: {
        strokeWidth: 2,
        stroke: "#FF0072",
      },
    });
  };

  const handleDelete = () => {
    if (getNodes().length === 1) return;
    setNodes((prev: Node[]) => prev.filter((n) => n.id !== id));
  };

  const handleEditNode = () => {
    setIsEditInputOpen((p) => !p);
  };

  const handleEditNodeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setNodes((prev: Node[]) =>
      prev.map((node) => {
        if (node.id === id) {
          return { ...node, data: { label: e.target.value } };
        }
        return node;
      })
    );
  };

  return (
    <>
      <div className="bg-white border flex justify-center items-center border-gray-400 min-w-32 h-8 rounded-sm">
        <p className="text-gray-700 text-xs">{label}</p>
      </div>
      <div className="flex gap-1">
        <button title="Add or Duplicate">
          <IconPlus
            onClick={() => setIsDropdownOpen((p) => !p)}
            size={"17px"}
            className="text-gray-700 ml-1 cursor-pointer hover:scale-125 transition-all"
          />
        </button>
        {isDropdownOpen && (
          <div className="absolute -top-20 left-2/3 w-40 z-50 bg-white shadow-lg rounded-md p-1">
            <ul>
              <li
                onClick={handleAddChildrenNode}
                className="py-2 px-4 text-sm hover:bg-gray-200 text-gray-500 cursor-pointer"
              >
                Add Children Node
              </li>
              <li
                onClick={handleDuplicate}
                className="py-2 px-4 text-sm hover:bg-gray-200 text-gray-500 cursor-pointer"
              >
                Duplicate Node
              </li>
            </ul>
          </div>
        )}
        <button title="Delete Node">
          <IconTrash
            onClick={handleDelete}
            size={"17px"}
            className="text-gray-700 cursor-pointer hover:scale-125 transition-all"
          />
        </button>
        <button title="Edit Node">
          <IconEdit
            onClick={handleEditNode}
            size={"17px"}
            className="text-gray-700 cursor-pointer hover:scale-125 transition-all"
          />
        </button>
        {isEditInputOpen && (
          <div className="absolute flex -top-15 p-2 left-2/3 min-w-40 z-50 bg-white shadow-lg">
            <input
              value={inputText}
              onChange={(e) => handleEditNodeText(e)}
              placeholder="Edit Node label"
              type="text"
              className="outline-none"
            />
            <button
              title="Confirm"
              className="bg-white transition-all hover:scale-125 text-gray-500"
            >
              <IconCheck onClick={() => setIsEditInputOpen(false)} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Nodes;
