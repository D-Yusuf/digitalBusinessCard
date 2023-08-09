import Header from "./header"
import Buttons from "./buttons"
import Details from "./details"
import Footer from "./footer"
export default function Card(){
    return(
        <div className="container max-w-[317px] m-auto bg-[#1A1B21] text-white flex flex-col rounded-[10px] items-center">
            <Header/>
            <Buttons/>
            <Details/>
            <Footer/>
        </div>
    )
}