import { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'

const TodoFilter = ({priority,setPriority}) => {
  // const [position, setPosition] =useState("bottom")
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
    <Button className='bg-primary-gradient font-semibold text-xl'>Filter</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
        <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default TodoFilter
