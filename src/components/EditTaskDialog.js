import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'

export default function EditTaskDialog({open, setOpen, onEdit, id ,title, content, dueDate, priority, isCompleted}) {
  //const [open, setOpen] = useState(true)

  const [task, setTask] = useState({
    title: title,
    content: content,
    dueDate: dueDate,
    priority: priority,
    isCompleted: isCompleted
  });

  function handleChange(event) {
    const { name, value } = event.target;
    
    setTask(prevTask => {
      return {
        ...prevTask,
        [name]: value
      };
    });
  }

  function submitTask(event) {
    
    // console.log(task)
    onEdit(id,task);

    setOpen(false)
  }

  // If the length of the element's string is 0 then display helper message 
  function onSubmit(event) 
  {
    submitTask(task)

    event.preventDefault();
   } 
  

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                {/* <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                      </p>
                    </div>
                  </div>
                </div> */}

                <form onSubmit={onSubmit}>
                  
                    <label htmlFor="title" className="block font-semibold">Title</label>
                    <input type="text" id="title" className="border border-gray-300 p-2 mt-2 w-full rounded-md"
                      required={true}
                      name="title"
                      onChange={handleChange}
                      value={task.title}
                     />
                    
                    <label htmlFor="content" className="block font-semibold mt-4">Content</label>
                    <textarea id="content" className="border border-gray-300 p-2 mt-2 w-full rounded-md" rows="3" placeholder="Enter content"
                    required
                    name="content"
                    onChange={handleChange}
                    value={task.content}
                    ></textarea>
                    
                    <label htmlFor="dueDate" className="block font-semibold mt-4">Due Date</label>
                    <input type="date" id="dueDate" className="border border-gray-300 p-2 mt-2 w-full rounded-md"
                    required
                    name="dueDate"
                    placeholder="dd/mm/yyyy"
                    onChange={handleChange}
                    value={task.dueDate}
                     />
                    
                    <label htmlFor="priority" className="block font-semibold mt-4">Priority Level</label>
                    <select id="priority" className="border border-gray-300 p-2 mt-2 w-full rounded-md"
                    required
                    name="priority"
                    onChange={handleChange}
                    value={task.priority}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>

                  <div className="mt-5 sm:mt-6">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    //onClick={submitTask}
                  >
                    Confirm Edit
                  </button>
                </div>
                </form>
                
                
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
