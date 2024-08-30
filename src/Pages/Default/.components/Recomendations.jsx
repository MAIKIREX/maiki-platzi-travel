import Card from "../../../components/Card";
import norwayimage from "../../../img/norway.jpg"
import newyorkimage from "../../../img/new_york.jpg"
import yosemiteimage from "../../../img/yosemite.jpg"

const Recomendations = () => {
    return (
        <>
            <div className="p-6" id="Recomendation">
                <p className="text-primary font-bold text-3xl pb-6 mt-6">Recomendations</p>
                <div className="flex space-x-6 overflow-x-auto overscroll-x-contain py-4">
                    <Card
                        title="Norway"
                        description="Beautiful landscapes"
                        bgImage={norwayimage}
                    />
                    <Card
                        title="New York"
                        description="Concrete jungle"
                        bgImage={newyorkimage}
                    ></Card>
                    <Card
                        title="Yosemite"
                        description="A break from the world"
                        bgImage={yosemiteimage}
                    ></Card>
                </div>
            </div>
        </>
    );
};

export { Recomendations };
