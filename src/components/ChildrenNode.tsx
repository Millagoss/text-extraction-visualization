import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { Handle, Node, NodeProps, Position, useReactFlow } from "reactflow";
import { v4 as uuidv4 } from "uuid";

function ChildrenNode({ data: { label }, id }: NodeProps<{ label: string }>) {
  const { setNodes, addNodes, getNode, addEdges, getEdges } = useReactFlow();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClick = () => {
    setNodes((prev: Node[]) => {
      console.log(prev, "prev");
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
    });
  };

  const handleDelete = () => {
    setNodes((prev: Node[]) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={handleClick}
        className="bg-white border flex justify-center items-center border-gray-400 min-w-32 h-8 rounded-sm"
      >
        <p className="text-gray-700 text-xs">{label}</p>
      </div>
      <div className="flex gap-1">
        <IconPlus
          onClick={() => setIsDropdownOpen((p) => !p)}
          size={"17px"}
          className="text-gray-700 ml-1 cursor-pointer hover:scale-125 transition-all"
        />
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
        <IconTrash
          onClick={handleDelete}
          size={"17px"}
          className="text-gray-700 cursor-pointer hover:scale-125 transition-all"
        />
        <IconEdit
          size={"17px"}
          className="text-gray-700 cursor-pointer hover:scale-125 transition-all"
        />
      </div>
      <Handle type="target" position={Position.Top} className="-ml-6" />
      <Handle type="source" position={Position.Bottom} className="-ml-6" />
    </div>
  );
}

export default ChildrenNode;
