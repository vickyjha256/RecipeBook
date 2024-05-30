import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <div>
            <nav className="w-full border-0 py-2 lg:px-24 px-10 bg-gray-950 sticky">
                <h1 className='text-3xl text-white'><Link to="/">Recipe Book</Link></h1>
            </nav>
        </div>
    </>
  )
}

export default Navbar;