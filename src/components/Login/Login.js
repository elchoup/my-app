import React from "react";
import LoginForm from "./Form"
import Header from "./Header";
import Footer from "../Footer";


export default function Home() {
    return(
            <div>
                <Header />
                <LoginForm />
                <Footer />
            </div>          
    )
}