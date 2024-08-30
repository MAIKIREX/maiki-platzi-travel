const Card = ({ title, description, bgImage }) => {
    return (
        <div
            className="flex-none w-64 h-72 bg-cover bg-center flex justify-center items-end rounded-xl transform transition-all hover:-translate-y-4 hover:shadow-2xl"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="bg-slate-800 bg-opacity-70 w-4/5 h-18 rounded-xl mb-5 p-1">
                <p className="text-lg text-white font-semibold">{title}</p>
                <p className="text-md text-white">{description}</p>
            </div>
        </div>
    );
};

export default Card;