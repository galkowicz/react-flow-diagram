import { Position } from "react-flow-renderer";
import { NO_BORDER_NODE, NodeShape } from "../components/noBorderNode";

const nodeDistance = 120;

type MicroType = {
  projectId: string;
  language: string;
};

type ResourceType = {
  fileName: string;
  name: string;
  access: string;
  type: string;
  projects: [string];
};

export const createNodesAndEdges = (resources: any, microservices: any) => {
  const nodes: any = [];
  const edges: any = [];

  microservices.forEach((micro: MicroType, index: number) => {
    const { projectId, language } = micro;
    const newNode = {
      id: projectId,
      type: NO_BORDER_NODE,
      data: {
        shape: NodeShape.Rounded,
        title: language,
        headerIconType: language,
        handlers: { right: true },
      },
      position: { x: 0, y: (index + 1) * nodeDistance },
      sourcePosition: Position.Right,
    };

    nodes.push(newNode);
  });

  resources.forEach((resource: ResourceType, index: number) => {
    const { fileName, name, access, type } = resource;

    const newNode = {
      id: fileName,
      type: NO_BORDER_NODE,
      data: {
        shape: NodeShape.Square,
        title: name,
        handlers: { left: true },
        iconType: type,
        headerIconType: access,
      },
      position: { x: 400, y: (index + 1) * nodeDistance },
      targetPosition: Position.Left,
    };

    nodes.push(newNode);

    resource.projects &&
      resource.projects.forEach((microResource: string, j: number) => {
        const newEdge = {
          id: `e-${index}${j}`,
          source: microResource,
          target: fileName,
          type: "straight",
        };
        edges.push(newEdge);
      });
  });

  return { nodes, edges };
};
