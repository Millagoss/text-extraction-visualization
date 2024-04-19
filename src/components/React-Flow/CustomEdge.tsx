import { IconX } from "@tabler/icons-react";
import {
  BezierEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "reactflow";

function CustomEdge(props: EdgeProps) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  } = props;

  const { setEdges } = useReactFlow();
  const [path, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    targetPosition,
    sourcePosition,
  });
  return (
    <>
      <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <IconX
          onClick={() => setEdges((pE) => pE.filter((e) => e.id !== id))}
          className="absolute bg-gray-200 rounded-md hover:scale-150 transition-all  text-red-500 cursor-pointer"
          size={"20px"}
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
          }}
          pointerEvents="all"
          aria-label="delete edge"
        />
      </EdgeLabelRenderer>
    </>
  );
}

export default CustomEdge;
