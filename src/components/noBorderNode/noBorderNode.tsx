import React, { memo } from "react";
import { Handle, NodeProps, Position } from "react-flow-renderer";
import Icon from "../../assets/Icon";

const NO_BORDER_NODE = "noBorderNode";

enum NodeShape {
  Rounded = "rounded",
  Square = "square",
}

const NoBorderNode = memo(({ data }: NodeProps) => {
  const {
    shape,
    title,
    handlers = { left: false, right: false },
    iconType,
    headerIconType,
  } = data;
  const { left, right } = handlers;

  return (
    <div className="no-border-node">
      {left ? <Handle type="target" position={Position.Left} /> : null}
      <div className={`${shape}-node node-base flex-col`}>
        {headerIconType ? (
          <div className="flex">
            <Icon type={headerIconType} />
          </div>
        ) : null}
        <div className="flex items-center">
          {iconType ? <Icon type={iconType} /> : null}
          <span>{title}</span>
        </div>
      </div>
      {right ? <Handle type="source" position={Position.Right} /> : null}
    </div>
  );
});

export { NoBorderNode, NO_BORDER_NODE, NodeShape };
