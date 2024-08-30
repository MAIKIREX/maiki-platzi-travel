import sanFrancisco from "../../../img/sanFrancisco.jpg"

const Home = () => {
    return (
        <>
            <div className="w-full h-3/4 ">
                <div className="w-full h-full flex flex-col absolute space-y-96 items-center p-8 md:items-start md:space-y-0 md:mt-20 md:pt-20">
                    <input className="outline-none p-3 rounded-full shadow-sm transition-all duration-300 ease-in-out focus:w-11/12 focus:ring-2 focus-within:shadow-sm md:hidden" placeholder="San Francisco" type="text" />
                    <div className="hidden md:text-xl md:font-bold md:w-2/5 md:h-auto md:pb-6 md:flex">
                        <p>Find More Locations like this</p>
                    </div>
                    <button className="w-48 p-4 text-lg rounded-full font-bold bg-white text-primary shadow-sm transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 md:">Explore more</button>
                </div>
                <div className="w-full h-full md:bg-sanFranciscoDesktop md:bg-cover">
                    <img className="md:hidden" src={sanFrancisco} alt="" />
                </div>
            </div>
        </>
    )
}

export {Home}