import { Handle, NodeProps, Position } from "reactflow";

import Nodes from "./Nodes";

function ParentNode({ data: { label }, id }: NodeProps<{ label: string }>) {
  return (
    <div className="flex items-center justify-center">
      <Nodes label={label} id={id} />
      <Handle type="source" position={Position.Bottom} className="-ml-8" />
    </div>
  );
}

export default ParentNode;
