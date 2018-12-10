/* eslint-disable */
import React from 'react';
import { DropTarget } from 'react-dnd';
import { TWEET_DECK } from '../../consts';

const dropTarget = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.handleClone(item, props.source);
  },
  canDrop(props, monitor) {
    const item = monitor.getItem();
    return item && props.source !== item.source;
  },
};
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    item: monitor.getItem(),
  };
}
const Droppable = props => {
  const { isOver, connectDropTarget, item, handleRemoveCard, index, parentIndex } = props;
  const isSameBox = item && item.source === props.source;
  return connectDropTarget(
    <div>
      {isOver && props.onOver && !isSameBox && props.onOver()}
      <div style={{ opacity: !isSameBox && isOver ? 0.5 : 1 }}>{props.children}</div>
    </div>,
  );
};
export default DropTarget(TWEET_DECK, dropTarget, collect)(Droppable);
