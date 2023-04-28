import React from "react";

const Container = ({ children, containerStyleExtention }) => {
    return (
        <main className={`w-11/12 md:w-6/12 mx-auto ${containerStyleExtention}`}>
            {children}
        </main>
    )
}

export default Container;