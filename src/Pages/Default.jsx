import { Home } from "./Default/.components/Home"
import {Recomendations} from "./Default/.components/Recomendations"
import { Stays } from "./Default/.components/Stays"
import { Faqs } from "./Default/.components/Faqs"
import {AboutUs} from "./Default/.components/AboutUs"
import { Tavbar } from "./Default/.components/Tavbar"
import { Navbar } from "../components/Navbar"
const Default = () => {
    return (
        <>
            <section className="w-full h-screen">
                <Navbar></Navbar>
                <Home></Home>
                <Recomendations></Recomendations>
                <Stays></Stays>
                <Faqs/>
                <AboutUs/>
                <Tavbar></Tavbar>
            </section>
        </>
    )
}

export {Default}