import { useState } from "react";
import EditTaskDialog from "./EditTaskDialog";

// TaskCard.js
export default function TaskCard({onEdit, onDelete ,id, title, content ,dueDate, priority, isCompleted, toggleTaskComplete }) {

  const priorityColors = {
    low: 'bg-green-200 text-green-800',
    medium: 'bg-yellow-200 text-yellow-800',
    high: 'bg-red-200 text-red-800',
  };

  // for adding task
  let [isEditTaskOpen, setIsEditTaskOpen] = useState(false)

  return (
    <div className="mt-2 border bg-white shadow-sm rounded-lg overflow-hidden mb-4">
    <EditTaskDialog open={isEditTaskOpen} setOpen={setIsEditTaskOpen} onEdit={onEdit} 
                    id={id}
                    title = {title}
                    content = {content}
                    dueDate={ dueDate}
                    priority={priority}
                    isCompleted={isCompleted}

    />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-4">{content}</p>
        <div className="flex justify-between items-center">
          <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${priorityColors[priority]}`}>
            {priority}
          </span>
          <span className="text-sm text-gray-500">{dueDate}</span>
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
      {/* Opens up edit dialog -> save tasks and update */}
        <button className="text-sm text-gray-600" onClick={() => setIsEditTaskOpen(true) }>Edit</button>
        <button className="text-sm text-gray-600" onClick={() => onDelete(id)}>Delete</button>
        <input type="checkbox" checked={isCompleted} onChange={toggleTaskComplete} className="form-checkbox h-5 w-5 text-indigo-600" />
      </div>
    </div>
  );
}
