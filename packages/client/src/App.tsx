import './App.css'
import expressLogo from './assets/express.png'
import reactLogo from './assets/react.svg'
import tRpcLogo from './assets/trpc.svg'
import AddTodo from './components/AddTodo'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <div className='max-w-xl mx-auto'>
      <div className='grid grid-cols-4 gap-x-4 '>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://trpc.io/' target='_blank'>
          <img src={tRpcLogo} className='logo tRpc' alt='tRPC logo' />
        </a>
        <a href='https://expressjs.com/' target='_blank'>
          <img
            src={expressLogo}
            className='logo express object-contain'
            alt='express logo'
          />
        </a>
      </div>
      <div className='text-center text-3xl font-bold text-gray-700'>
        <h1>Vite + React | Express | tRPC</h1>
        <h3>npm workspaces</h3>
      </div>
      <div className='max-w-md mx-auto grid gap-y-4 mt-8'>
        <ListTodos />
        <AddTodo />
        {/* <GetTodoById /> */}
      </div>
    </div>
  )
}

export default App
