import React from "react";
import SignupForm from "./Form"
import Header from "./Header";
import Footer from "../Footer";


export default function Home() {
    return(
        <div>
            <Header />
            <SignupForm />
            <Footer />
        </div>
       
    )
}