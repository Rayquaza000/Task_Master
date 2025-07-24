import React, { useEffect, useRef, useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
  const [toDoItemsArray, setToDoItemsArray] = useState([]);
  const isMounted = useRef(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setToDoItemsArray(JSON.parse(tasks));
    }
  }, []);

  // Add new task
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    if (!props.taskData || props.taskData.description === "") return;

    setToDoItemsArray(prevItems => {
      const updated = [...prevItems, props.taskData];
      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });
  }, [props.taskData]);

  // Delete task
  function deleteThisToDoItem(idToRemove) {
    const updatedList = toDoItemsArray.filter(item => item.id !== idToRemove);
    setToDoItemsArray(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  }

  // Edit task
  function editThisToDoItem(idToEdit, newDescription) {
    const updatedList = toDoItemsArray.map(task =>
      task.id === idToEdit ? { ...task, description: newDescription } : task
    );
    setToDoItemsArray(updatedList);
    localStorage.setItem("tasks", JSON.stringify(updatedList));
  }

  function markTaskIsCompleted(keyToMark){
    toDoItemsArray.map((task,index)=>{
      console.log(keyToMark);
      console.log(task.id);
      const temp=toDoItemsArray;
      keyToMark==task.id?(temp[index].isCompleted=true):(temp[index].isCompleted=temp[index].isCompleted);
      setToDoItemsArray(temp);
      localStorage.setItem("tasks",JSON.stringify(toDoItemsArray));
    });
  }
  return (
    <div className="w-full h-fit p-5">
      {toDoItemsArray.map((task) => (
        <ToDoItem
          key={task.id}
          key1={task.id}
          itemDescription={task.description}
          priorityChecked={task.isPriority}
          deleteThisToDoItem={deleteThisToDoItem}
          editThisToDoItem={editThisToDoItem}
          markTaskIsCompleted={markTaskIsCompleted}
          setIsCompleted={setIsCompleted}
          isCompleted={isCompleted}
          marked={task.isCompleted}
        />
      ))}
    </div>
  );
}

export default ToDoList;
