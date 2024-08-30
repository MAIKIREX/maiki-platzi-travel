const Stays = () => {
    return (
        <>
            <div className="w-full h-auto p-6" id="Stays">
                <p className="text-3xl text-primary font-bold">Trending Stays</p>
                <div className="grid grid-cols-1 gap-4 p-2 md:grid-cols-5 md:grid-rows-4">
                    <div className="bg-chicago w-full h-96 bg-cover rounded-lg flex flex-col items-end md:row-span-2 md:col-span-5 md:bg-center md:h-full">
                        <p className="pr-4 mt-4 text-lg font-bold text-white md:text-3xl md:mt-20">Chicago</p>
                        <p className="pr-4 text-md text-white md:text-xl">2 rooms, bathroom and kitchen</p>
                    </div>
                    <div className="bg-LA w-full h-96 bg-cover rounded-lg flex flex-col items-end md:col-span-2 md:row-span-2 md:row-start-3 md:h-full">
                        <p className="pr-4 mt-4 text-lg font-bold text-white md:text-3xl md:mt-20 md:pt-12">Los Angeles</p>
                        <p className="pr-4 text-md text-white md:text-xl">4 rooms,3 bathroom and prrvate pool</p>
                    </div>
                    <div className="bg-miami w-full h-96 bg-cover rounded-lg flex flex-col items-end md:col-span-3 md:row-start-3 md:col-start-3">
                        <p className="pr-4 mt-4 text-lg font-bold text-white md:text-3xl md:mt-20 md:pt-12">Miami</p>
                        <p className="pr-4 text-md text-white md:text-xl">2 rooms, bathroom and kitchen</p>
                    </div>
                    <div className="bg-bali w-full h-96 bg-cover rounded-lg flex flex-col items-end md:col-span-3 md:row-start-4 md:col-start-3">
                        <p className="pr-4 mt-4 text-lg font-bold text-white md:text-3xl md:mt-20 md:pt-12">Bali</p>
                        <p className="pr-4 text-md text-white md:text-xl">2 rooms, bathroom and kitchen</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Stays}