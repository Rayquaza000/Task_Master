import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

function ToDoItem(props) {
  const [itemDescp, setItemDescp] = useState(props.itemDescription);
  const [editClickedOnce, setEditClickedOnce] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const task_description_ref = useRef(null);
  const task_delete_button_ref = useRef(null);
  const task_edit_button_ref = useRef(null);
  const inputItemDescription = useRef(null);

  // Apply priority style once after mount
  useEffect(() => {
    if (props.priorityChecked) {
      if (task_description_ref.current) {
        task_description_ref.current.style.backgroundColor = "#f56565";
      }
      if (task_delete_button_ref.current) {
        task_delete_button_ref.current.style.backgroundColor = "#F2DCD7";
      }
      if (task_edit_button_ref.current) {
        task_edit_button_ref.current.style.backgroundColor = "#F2DCD7";
      }
    }
  }, [props.priorityChecked]);

  // Mark task as completed visually
  function markAsCompleted() {
    if (!isCompleted) {
      setIsCompleted(true);
      if (task_description_ref.current) {
        task_description_ref.current.style.backgroundColor = "#a3e635";
        task_delete_button_ref.current.style.backgroundColor = "#d7e4bd";
        task_edit_button_ref.current.style.backgroundColor = "#d7e4bd";
      }
    }
  }

  // Toggle editing and update description
  function editThisToDoItem() {
    if (!editClickedOnce) {
      setEditClickedOnce(true);
    } else {
      const newValue = inputItemDescription.current.value.trim();
      setItemDescp(newValue !== "" ? newValue : props.itemDescription);
      setEditClickedOnce(false);
    }
  }

  return (
    <div className="w-full h-24 p-0 flex text-2xl m-5">
      <div
        id="task_description"
        ref={task_description_ref}
        className="w-2/3 h-full pt-5 pl-5 pb-2.5 bg-gray-200 border-2 border-black flex justify-center items-center overflow-y-scroll"
        onDoubleClick={markAsCompleted}
      >
        {editClickedOnce ? (
          <input
            type="text"
            ref={inputItemDescription}
            defaultValue={itemDescp}
            className="w-4/5 bg-white border border-black p-1"
            placeholder="Enter new task"
          />
        ) : (
          itemDescp
        )}
      </div>

      <div
        id="task_delete_button"
        ref={task_delete_button_ref}
        className="w-1/6 h-full p-2.5 bg-gray-100 border-2 border-black flex justify-center items-center text-4xl text-red-700"
        onClick={() => props.deleteThisToDoItem(props.key1)}
      >
        <AiOutlineDelete />
      </div>

      <div
        id="task_edit_button"
        ref={task_edit_button_ref}
        className="w-1/6 h-full p-2.5 bg-gray-100 border-2 border-black flex justify-center items-center text-4xl"
        onClick={editThisToDoItem}
      >
        <CiEdit />
      </div>
    </div>
  );
}

export default ToDoItem;
