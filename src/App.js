import React from 'react'
import Header from "./componets/commons/Header";
import Footer from "./componets/commons/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

const App =()=>{

return(

    <div class="container text-center">
        <div row= "row">
            <div col-12>
                <Header/>
            </div>
        </div>
        <div row= "row">
            <div col-12>
                <h1>This is body</h1>
            </div>
        </div>

        <div row= "row">
            <div col-12>
                <Footer/>
            </div>
        </div>
    </div>
)
}

export default App