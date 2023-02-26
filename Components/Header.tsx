import Link from "next/link"

const Header = () => {
    return (
        <header className="flex items-center justify-between px-4 w-full py-2 max-w-7xl mx-auto">
            <div className="flex items-center space-x-[29px]">
                <Link href='/'>
                    <img className="w-12 object-contain cursor-pointer" src="data:image/jpeg;base64,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" alt="" />
                </Link>
                {/* <ul className="hidden md:inline-flex space-x-5 items-center">
                    <li>About</li>
                    <li>Contact</li>
                </ul> */}
            </div>
            <div className="flex items-center space-x-5">
                <Link href='https://www.veritas.edu.ng/journals/vejoh.php' target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Contact Us</Link>
                <div className="text-green-700 border border-green-900 hidden md:inline-flex px-4 py-1 rounded-lg hover:bg-green-900 hover:text-white">Submit a Manuscript</div>
            </div>
        </header>
    )
}

export default Header