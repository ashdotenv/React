import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const cart = useSelector(state => state.cart.items);
    return (
        <div className='flex  w-full fixed border-b border-orange-500 justify-between p-4 bg-black text-white h-20 items-center '>
            <div><a href="/">Logo</a></div>
            <div>
                <Link className='p-2' to={"/"}>Home</Link>
                <button className='p-2 '>🛒 <sup className='text-xl text-sky-500'>{cart}
                </sup> </button>
            </div>
        </div>
    )
}

export default Navbar