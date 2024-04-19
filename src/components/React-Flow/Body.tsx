import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  NodeTypes,
  EdgeTypes,
} from "reactflow";

import "reactflow/dist/style.css";
import {
  defaultEdgeOptions,
  fitViewOptions,
  initialEdges,
  initialNodes,
} from "../../utils/Workfow.constants";
import ParentNode from "./ParentNode";
import ChildrenNode from "./ChildrenNode";
import CustomEdge from "./CustomEdge";
import { v4 as uuidv4 } from "uuid";

const nodeType: NodeTypes = {
  ParentNodeType: ParentNode,
  ChildrenNodeType: ChildrenNode,
};
const edgeTypes: EdgeTypes = {
  CustomEdge: CustomEdge,
};

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => {
      const newEdge = {
        ...connection,
        id: uuidv4(),
        animated: true,
        type: "CustomEdge",
      };
      setEdges((prevEdges) => addEdge(newEdge, prevEdges));
    },
    [setEdges]
  );

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="static sm:relative"
    >
      <div className="min-h-12 absolute top-0 left-0 w-full z-50 bg-primary-body sm:shadow-sm flex items-center justify-center font-serif">
        <h2 className="text-sm sm:text-xl font-bold text-gray-500">
          ReactFlow Menu Extraction and Visualization
        </h2>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
        nodeTypes={nodeType}
        edgeTypes={edgeTypes}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
