import React from "react";
import ReactFlow from "react-flow-renderer";
import { NoBorderNode } from "./noBorderNode";
import { createNodesAndEdges } from "../util/dataUtil";
import { useMemo } from "react";
import resources from "../mockData/resources.json";
import microservices from "../mockData/microservices.json";

export const Diagram = () => {
  // in a real app we would use an async call to fetch the real data
  const { resources: parsedResources } = JSON.parse(JSON.stringify(resources));
  const { microservices: parsedMicroservices } = JSON.parse(
    JSON.stringify(microservices),
  );

  const { nodes, edges } = createNodesAndEdges(
    parsedResources,
    parsedMicroservices,
  );
  const nodeTypes = useMemo(() => ({ noBorderNode: NoBorderNode }), []);

  return (
    <div className="container mx-auto mt-14 h-5/6">
      <ReactFlow nodes={nodes} edges={edges} fitView nodeTypes={nodeTypes} />
    </div>
  );
};
