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
    let updated;
    if (!isMounted.current) {
      console.log(isMounted.current);
      isMounted.current = true;
      return;
    }
    if (!props.taskData || props.taskData.description === ""){ return;}
    let temp=true;
    setToDoItemsArray(prevItems => {
      prevItems.forEach((pi,index)=>{
        if(pi.id==props.taskData.id)
        {
          temp=false;
        }
      });
      if(temp==false)
      {
        updated=prevItems;
      }
      else{
      updated = [...prevItems, props.taskData];
      }
      localStorage.setItem("tasks", JSON.stringify(updated));
      return updated;
    });
    console.log(updated);
  }, [props.taskData]);

  // Delete task
  function deleteThisToDoItem(idToRemove) {
    const updatedList = toDoItemsArray.filter(item => item.id !== idToRemove);
    const itemDeleted= toDoItemsArray.filter(item => item.id == idToRemove);
    if(itemDeleted.isCompleted==true)
    {
      localStorage.setItem("completed_tasks",(parseInt(localStorage.getItem("completed_tasks"))-1).toString());
    }
    else if(itemDeleted.isPriority==true)
    {
      localStorage.setItem("priority_tasks",(parseInt(localStorage.getItem("priority_tasks"))-1).toString());
      localStorage.setItem("pending_tasks",(parseInt(localStorage.getItem("pending_tasks"))-1).toString())
    }
    else
    {
      localStorage.setItem("pending_tasks",(parseInt(localStorage.getItem("pending_tasks"))-1).toString())
    }
    localStorage.setItem("current_tasks",(parseInt(localStorage.getItem("current_tasks"))+1).toString())
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
          marked={task.isCompleted}
        />
      ))}
    </div>
  );
}

export default ToDoList;
