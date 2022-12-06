import React from "react";
import Header from "./Header"
import Post from "./Post"
import "../../styles/Header.css"

export default function Home() {
    return(
        <div>
            <Header />
            <Post />
        </div>
    )
}