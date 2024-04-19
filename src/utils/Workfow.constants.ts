import { DefaultEdgeOptions, Edge, FitViewOptions, Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Initial Node" },
    type: "ParentNodeType",
  },
];

export const initialEdges: Edge[] = [];

export const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

export const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};
