const Navbar = () => {
    return (
        <div className='flex justify-between items-center text-white px-8 py-7 max-w-full'>
            <div className="font-outfit text-5xl font-medium">
                Motor-Heads
            </div>
            <ul className="flex items-center list-none text-lg gap-7 cursor-pointer">
                <li className="hover:opacity-80 transition-opacity">Home</li>
                <li className="hover:opacity-80 transition-opacity">Explore</li>
                <li className="hover:opacity-80 transition-opacity">About</li>
                <li className='rounded-full px-6 py-2.5 bg-white text-gray-800 hover:bg-gray-100 transition-colors'>
                    Contact
                </li>
            </ul>
        </div>
    )
}

export default Navbar