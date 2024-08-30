
const Navbar = () => {
    return (
        <>
            <div id="Navbar" className="w-full bg-white fixed z-10 h-14 md:flex justify-between items-center px-6 hidden">
                <div id="logo">
                    <p className="font-bold text-xl text-primary"> Platzi Travel </p>
                </div>
                <div className="flex space-x-8">
                    <a className="text-md font-bold text-primary" href="">home</a>
                    <a className="text-md font-bold text-primary" href="">Stays</a>
                    <a className="text-md font-bold text-primary" href="">Faqs</a>
                    <a className="text-md font-bold text-primary" href="">About us</a>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export {Navbar}