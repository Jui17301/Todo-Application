// import React from 'react'
import TodoCard from './TodoCard'
// import { Button } from '../ui/button'
import AddTodoModel from './AddTodoModal'
import TodoFilter from './TodoFilter'
// import { useAppSelector } from '@/redux/hook'
import { useGetTodosQuery } from '@/redux/api/api'
import { useState } from 'react'
const TodoContainer = () => {
  const [priority,setPriority] = useState("");
  // From local State:
  // const {todos} = useAppSelector(state =>state.todos)

  //From server
  const {data:todos,isLoading,isError} = useGetTodosQuery(priority);

  if(isLoading){
    return <p>Loading.....</p>
  }
  if (isError) {
    return <p>Error fetching todos.</p>;
  }

  return (
    <div>
      <div className='flex justify-between mb-5'>        
        <AddTodoModel/>
        <TodoFilter priority={priority} setPriority={setPriority}/>       
      </div>
      <div className='bg-primary-gradient w-full h-full rounded-xl p-[5px] '>
        {/* <div className='bg-white p-5 flex justify-center items-center rounded-md text-2xl font-bold'>
          <p>There is no task pending</p>
          </div> */}

          <div className=' bg-white p-5 w-full h-full rounded-lg space-y-3'>
  {todos?.data?.map((item:any)=>(
    <TodoCard key={item.id} {...item} />
  ))}
       </div>
      </div>
    </div>
  )
}

export default TodoContainer
