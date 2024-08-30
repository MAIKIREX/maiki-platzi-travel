const Faqs = () => {
    return (
        <>
            <div className="p-6 w-full h-auto ">
                <div className="w-full h-full flex flex-col">
                    <p className="text-3xl font-bold text-primary">FAQS</p>
                    <div>
                        <p className="text-xl font-medium text-primary md:text-2xl">
                            Política de Cancelación
                        </p>
                        <p className="font-medium pt-2 md:text-xl">
                            Para estancias menores a una semana es importante
                            avisar con 3 días de anticipación, de caso contario
                            será sancionado.
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-primary md:text-2xl">
                            Métodos de pago
                        </p>
                        <p className="font-medium pt-2 md:text-xl">
                        Aceptamos distintos métodos de pago: VISA,
                        MasterCard, American Express, Paypal y Binance
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-primary md:text-2xl">
                        Información de Seguridad
                        </p>
                        <p className="font-medium pt-2 md:text-xl">
                        Todas nuestras estancias cuentan con seguro en caso
                        de accidentes
                        </p>
                    </div>
                    <div>
                        <p className="text-xl font-medium text-primary md:text-2xl">
                        Estancias Largas
                        </p>
                        <p className="font-medium pt-2 md:text-xl">
                        Contamos con estancias de hasta 3 meses, en este
                            caso es requerido un anticipo con un monto del 50%
                            del valor de la renta
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Faqs };
