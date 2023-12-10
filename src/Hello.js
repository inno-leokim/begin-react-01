import React from "react";

function Hello({name, color, isSpecial}) {

    return(
        <div>
            <h1 style={{color}}>
                {/* {isSpecial ? "*" : null}     */}
                {isSpecial && "*"}
                안녕하세요 {name}
            </h1>
        </div>
    )
}

Hello.defaultProps = {
    name: "김윤규",
    color: "blue"
}

export default Hello;