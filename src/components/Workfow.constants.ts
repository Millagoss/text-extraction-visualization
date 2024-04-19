import { DefaultEdgeOptions, Edge, FitViewOptions, Node } from "reactflow";

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
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
