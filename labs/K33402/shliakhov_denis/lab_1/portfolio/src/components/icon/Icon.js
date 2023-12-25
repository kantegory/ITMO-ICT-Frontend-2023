import React from "react";
import Sprite from "../../img/sprite.svg"

export const Icon = ({id , height , width}) => {
    return(
        <svg width={width} height={height}>
            <use href={Sprite + "#" + id} />
        </svg>
    )
}