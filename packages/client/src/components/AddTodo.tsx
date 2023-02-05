export default function AddTodo() {
  return (
    <div className='flex justify-between space-x-4'>
      <input
        type='text'
        placeholder='Get milk...'
        className='flex-grow rounded-md'
      />
      <button className='bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-white py-1 px-3 rounded-md'>
        Add todo
      </button>
    </div>
  )
}
