import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = nextIndex => {
    expandedIndex === nextIndex
      ? setExpandedIndex(-1)
      : setExpandedIndex(nextIndex);
  };

  const renderItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className='text-xl'>
        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className='p-3 bg-gray-50 border-b items-center cursor-pointer flex justify-between'
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className='border-b p-5'>{item.content}</div>}
      </div>
    );
  });

  return (
    <div className='border-x border-t w-[300px] rounded'>{renderItems}</div>
  );
}

export default Accordion;
