import Header from "./header"
import Buttons from "./buttons"
import Details from "./details"
import Footer from "./footer"
export default function Card(){
    return(
        <div className="container max-w-lg">
            <Header/>
            <Buttons/>
            <Details/>
            <Footer/>
        </div>
    )
}