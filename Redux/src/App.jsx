import Navbar from './Components/Navbar'
import Routing from './Routing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='bg-red-500 pb-20  '>
        <Navbar />
      </div>
      <div className='bg-black h-screen text-white '>
        <Routing />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

    </>
  )
}

export default App
