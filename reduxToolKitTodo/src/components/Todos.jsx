import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo, updateTodo} from '../features/todo/todoSlice'
import { X, PencilIcon, Check } from 'lucide-react'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)
    const [editText, setEditText] = useState('')

    const handleEditClick = (todo) => {
      setEditingId(todo.id)
      setEditText(todo.text)
    }

    const handleSaveClick = (id) => {
      if (editText.trim()) {
        dispatch(updateTodo({ id, text: editText.trim() }))
      }
      setEditingId(null)
      setEditText('')
    }

    const handleCancelEdit = () => {
      setEditingId(null)
      setEditText('')
    }

  return (
    <>
      <div className='mt-3 text-xl font-semibold'>Your Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
           className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
           key={todo.id}>
            <div className='text-white flex-1'>
              {editingId === todo.id ? (
                <div className='flex items-center gap-2'>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveClick(todo.id)
                      if (e.key === 'Escape') handleCancelEdit()
                    }}
                    className='flex-1 bg-zinc-700 text-white px-3 py-1 rounded outline-none focus:ring-2 focus:ring-blue-500'
                    autoFocus
                  />
                  <button 
                    onClick={() => handleSaveClick(todo.id)}
                    className='p-1 rounded hover:bg-green-600 transition-colors'
                    title="Save (Enter)"
                  >
                    <Check size={16} className="text-green-500 hover:text-white" />
                  </button>
                  <button 
                    onClick={handleCancelEdit}
                    className='p-1 rounded hover:bg-red-600 transition-colors'
                    title="Cancel (Esc)"
                  >
                    <X size={16} className="text-red-500 hover:text-white" />
                  </button>
                </div>
              ) : (
                <div className='flex items-center justify-between gap-4'>
                  <span className='flex-1'>{todo.text}</span>
                  <div className='flex items-center gap-2'>
                    <button 
                      onClick={() => handleEditClick(todo)}
                      className='p-1 rounded hover:bg-blue-600 transition-colors'
                      title="Edit"
                    >
                      <PencilIcon size={16} className="text-blue-500 hover:text-white" />
                    </button>
                    <button 
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className='p-1 rounded hover:bg-red-600 transition-colors'
                      title="Delete"
                    >
                      <X size={16} className="text-red-500 hover:text-white" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos