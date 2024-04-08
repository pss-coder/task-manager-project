import { useState } from "react";
import EditTaskDialog from "./EditTaskDialog";

// TaskCard.js
export default function TaskCard({ onEdit, onDelete, id, title, content, dueDate, priority, isCompleted, toggleTaskComplete }) {

  const priorityColors = {
    low: 'bg-green-200 text-green-800',
    medium: 'bg-yellow-200 text-yellow-800',
    high: 'bg-red-200 text-red-800',
  };

  // State for controlling edit dialog
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  


  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">

<EditTaskDialog
        open={isEditTaskOpen}
        setOpen={setIsEditTaskOpen}
        onEdit={onEdit}
        id={id}
        title={title}
        content={content}
        dueDate={dueDate}
        priority={priority}
        isCompleted={isCompleted}
      />

  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="flex space-x-2">
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded focus:outline-none" 
      onClick={() => setIsEditTaskOpen(true)}>Edit</button>

      <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none" 
      onClick={() => onDelete(id)}>Delete</button>
    </div>
  </div>
  <p className="text-gray-700 mb-4">{content}</p>
  <div className="flex justify-between items-center mb-2">
    <div className="flex items-center">
      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500"
        checked={isCompleted}
            onChange={toggleTaskComplete}
       />
      <label htmlFor="task-complete" className="ml-2 text-sm text-gray-600">Mark as Completed</label>
    </div>
    <span className={`bg-yellow-400 text-white py-1 px-2 rounded-full text-xs ${priorityColors[priority]} `}>{priority} Priority</span>
  </div>
  <p className="text-sm text-gray-600">Due Date: {dueDate}</p>
</div>

  );
}
