import './App.css'
import expressLogo from './assets/express.png'
import reactLogo from './assets/react.svg'
import tRpcLogo from './assets/trpc.svg'

function App() {
  return (
    <div className='App'>
      <div>
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
          <img src={expressLogo} className='logo express' alt='express logo' />
        </a>
      </div>
      <h1>Vite + React | Express | tRPC</h1>
      <h3>npm workspaces</h3>
    </div>
  )
}

export default App
