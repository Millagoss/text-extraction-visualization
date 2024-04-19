import { Handle, NodeProps, Position } from "reactflow";
import Nodes from "./Nodes";

function ChildrenNode({ data: { label }, id }: NodeProps<{ label: string }>) {
  return (
    <div className="flex items-center justify-center">
      <Nodes label={label} id={id} />
      <Handle type="target" position={Position.Top} className="-ml-6" />
      <Handle type="source" position={Position.Bottom} className="-ml-6" />
    </div>
  );
}

export default ChildrenNode;
