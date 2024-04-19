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
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";
import {
  defaultEdgeOptions,
  fitViewOptions,
  initialEdges,
  initialNodes,
} from "./Workfow.constants";
import ParentNode from "./ParentNode";
import ChildrenNode from "./ChildrenNode";
import CustomEdge from "./CustomEdge";

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
        id: edges.length + 1,
        animated: true,
        type: "CustomEdge",
      };
      setEdges((prevEdges) => addEdge(newEdge, prevEdges));
    },
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="min-h-12 bg-primary-body shadow-sm flex items-center justify-center font-serif">
        <h2 className="text-xl font-bold text-gray-500">
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
