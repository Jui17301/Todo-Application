import { FormEvent, useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'

import { Input } from '../ui/input'
import { Label } from '../ui/label'
// import { useAppDispatch } from '@/redux/hook'
// import { addTodo } from '@/redux/features/todoSlice'
import { useAddTodoMutation } from '@/redux/api/api'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'

const AddTodoModal = () => {
  const [task,setTask] = useState('');
  const [description,setDescription] = useState("");
  const [priority,setPriority] = useState("");
  // For Local State:
  // const dispatch = useAppDispatch();

  //For server
  //? [actualFunctionForPost,{data,isLoading,isError}]
  const [addTodo,{isLoading,isError,isSuccess}] = useAddTodoMutation();
  
  const onSubmit=(e:FormEvent)=>{
    e.preventDefault();
    // const randomString=Math.random().toString(36).substring(2,7)
    const taskDetails ={
      // id:randomString,
      title:task,
      description:description,
      isCompleted :false,
      priority,
    }
      // For Local State:
    // dispatch(addTodo(taskDetails))
   
    //For server: 
    addTodo(taskDetails)
  }
  return (
    <div>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Todo</Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
         Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input
            onBlur={(e)=>setTask(e.target.value)}
              id="task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              onBlur={(e)=>setDescription(e.target.value)}
              id="description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Priority
            </Label>
            <Select onValueChange={(value)=> setPriority(value)}>
      <SelectTrigger className='col-span-3'>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
           
          </div>
        </div>
        <div className='flex justify-end'>
          <DialogClose asChild>
        <Button type="submit">Save changes</Button>
          </DialogClose>
         
        </div>
        </form>
        
      </DialogContent>
      
    </Dialog>
    </div>
  )
}

export default AddTodoModal
