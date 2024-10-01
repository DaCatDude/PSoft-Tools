import {
    NodeResizer,
    type NodeProps,
    useStore,
    Handle,
    Position,
    useKeyPress,
    useReactFlow,
    useUpdateNodeInternals,
    XYPosition,
  } from '@xyflow/react';
  
  import { useCallback, useState } from 'react';
  
  import Shape from './shape.tsx';
  import { type ShapeType } from './shape';
  import NodeLabel from '../label';
  
  export type ShapeNodeData<
  NodeData extends Record<string, unknown> = Record<string, unknown>,
  > = {
    id: string,
    position: XYPosition,
    sourcePosition?: Position,
    targetPosition?: Position,
    selected?: boolean,
    dragHandle?: string,
    selectable?: boolean,
    deletable?: boolean,
    draggable?: boolean,
    parentId?: string,
    data: NodeData,
    width?: number;
    height?: number;
    type: ShapeType;
    color: string;
  };
  
  function ShapeNode({ id, selected, data }: NodeProps<ShapeNodeData>) {
    const { color, type } = data;
    const { setNodes } = useReactFlow();
    const handleStyle = { backgroundColor: "#00000", };
  
    return (
      <div className="shapeNode">
        <Shape
          type={type}
          width={120}
          height={40}
          fill={'white'}
          strokeWidth={2}
          stroke={'black'}
        />
        <Handle
          style={handleStyle}
          id='top'
          type='source'
          position={Position.Top}
          isConnectable={true}
        />
        <Handle
          style={handleStyle}
          id='bottom'
          type='source'
          position={Position.Bottom}
          isConnectable={true}
        />
        <Handle
          style={handleStyle}
          id='right'
          type='source'
          position={Position.Right}
          isConnectable={true}
        />
        <Handle
          style={handleStyle}
          id='left'
          type='source'
          position={Position.Left}
          isConnectable={true}
        />
        <NodeLabel placeholder={"Node"}/>
      </div>
    );
  }
  
  export default ShapeNode;