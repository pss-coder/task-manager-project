import { useState } from 'react';
// import Footer from './Footer'
import Header from './Header'
import CreateTaskDialog from './CreateTaskDialog';
import TaskCard from './TaskCard';

export default function App() {


  const [navigation, setNavigation] = useState (
    [
      { name: 'All', href: '#', current: true },
      { name: 'Upcoming', href: '#', current: false },
      { name: 'Overdue', href: '#', current: false },
      { name: 'Completed', href: '#', current: false },
    ]
  )

  // use State to store tasks
  //TODO: to store in localstorage/sessionStorage
  const [tasks, setTasks] = useState([]);

  const [displayedTasks, setDisplayedTasks] = useState([]);

  // for adding task
  let [isCreateTaskOpen, SetIsCreateTaskOpen] = useState(false)

  const [priorityFilter, setPriorityFilter] = useState('All'); // State for priority filter



  function addTask(newTask) {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });

    SetIsCreateTaskOpen(false)
  }

  function editTask(index, edittedTask) {
    setTasks((prevTasks) =>
        prevTasks.map((task, i) => {
          if (i === index) {
            return edittedTask;
          }
          return task;
        })
      );
  }

  //TODO
  function deleteTask(id) {
    setTasks(prevTask => {
      return prevTask.filter((taskItem, index) => {
        return index !== id;
      });
    });
  }

  function toggleTaskComplete(index) {

      setTasks((prevTasks) =>
        prevTasks.map((task, i) => {
          if (i === index) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        })
      );


  }


  return (
    <>
      <div>

       <Header navigation={navigation} setNavigation={setNavigation} /> 

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              {navigation.find((item) => item.current)?.name} Tasks</h1>
              <button type="button" className="text-sm px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600" onClick={() => SetIsCreateTaskOpen(true)}> Add Task </button>
              {/* Priority filter dropdown */}
              <div className="mt-4">
                <label htmlFor="priorityFilter" className="block text-sm font-medium text-gray-700">
                  Filter by Priority:
                </label>
                <select
                  id="priorityFilter"
                  name="priorityFilter"
                  className="border mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  value={priorityFilter}
                  onChange={(e) => setPriorityFilter(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <CreateTaskDialog open={isCreateTaskOpen} setOpen={SetIsCreateTaskOpen} onAdd={addTask} />

              {tasks.map((task, index) => {
                return (
                  <TaskCard
                    key = {index}
                    id={index}
                    title = {task.title}
                    content = {task.content}
                    dueDate={ task.dueDate}
                    priority={task.priority}
                    isCompleted={task.isCompleted}
                    toggleTaskComplete = {() => toggleTaskComplete(index)}
                    onEdit={editTask}
                    // onDelete={deleteTask(index)}
                   />
                )
              })}


            </div>
          </main>
        </div>
      </div>
    </>
  )
}
