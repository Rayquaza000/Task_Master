import React, { useRef, useState, useEffect } from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";

function ToDoItem(props) {
  const [itemDescp, setItemDescp] = useState(props.itemDescription);
  const [editClickedOnce, setEditClickedOnce] = useState(false);
  

  const task_description_ref = useRef(null);
  const task_delete_button_ref = useRef(null);
  const task_edit_button_ref = useRef(null);
  const inputItemDescription = useRef(null);

  // useEffect(()=>{
  //   if(props.marked)
  // {
  //   task_description_ref.current.style.backgroundColor="#a3e635";
  // }
  // },[])
  

  useEffect(() => {
    if(props.marked)
    {
      if (task_description_ref.current)
        task_description_ref.current.style.backgroundColor = "#a3e635";
      if (task_delete_button_ref.current)
        task_delete_button_ref.current.style.backgroundColor = "#d7e4bd";
      if (task_edit_button_ref.current)
        task_edit_button_ref.current.style.backgroundColor = "#d7e4bd";
    }
    
    else if(props.priorityChecked) {
      if (task_description_ref.current)
        task_description_ref.current.style.backgroundColor = "#f56565";
      if (task_delete_button_ref.current)
        task_delete_button_ref.current.style.backgroundColor = "#F2DCD7";
      if (task_edit_button_ref.current)
        task_edit_button_ref.current.style.backgroundColor = "#F2DCD7";
    }
  }, [props.priorityChecked]);

  function markAsCompleted(key1) {
    if (!props.isCompleted) {
      props.setIsCompleted(true);
      if (task_description_ref.current){
        task_description_ref.current.style.backgroundColor = "#a3e635";}
      if (task_delete_button_ref.current){
        task_delete_button_ref.current.style.backgroundColor = "#d7e4bd";}
      if (task_edit_button_ref.current){
        task_edit_button_ref.current.style.backgroundColor = "#d7e4bd";
        }
        props.markTaskIsCompleted(props.key1)
    }
  }

  function handleSaveEdit() {
    if (!editClickedOnce) {
      setEditClickedOnce(true);
    } else {
      const newValue = inputItemDescription.current?.value.trim();
      if (newValue) {
        props.editThisToDoItem(props.key1, newValue);
        setItemDescp(newValue);
        setEditClickedOnce(false);
      }
    }
  }

  return (
    <div className="w-full h-24 p-0 flex text-2xl m-5">
      <div
        ref={task_description_ref}
        className="w-7/12 h-full pt-5 pl-5 pb-2.5 bg-gray-200 border-2 border-black flex justify-center items-center overflow-y-scroll"
        onDoubleClick={()=>markAsCompleted(props.key1)}
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
        ref={task_delete_button_ref}
        className="w-1/6 h-full p-2.5 bg-gray-100 border-2 border-black flex justify-center items-center text-4xl text-red-700"
        onClick={() => props.deleteThisToDoItem(props.key1)}
      >
        <AiOutlineDelete />
      </div>

      <div ref={task_edit_button_ref} className="w-1/6 h-full p-2.5 bg-gray-100 border-2 border-black flex justify-center items-center text-4xl" onClick={handleSaveEdit}
      >
        <CiEdit />
      </div>
    </div>
  );
}

export default ToDoItem;
