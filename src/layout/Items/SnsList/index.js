import React from 'react'

const SnsList = ({href, img, alt}) => {
    return (
        <span>
          <a href={href} target="blank">
            <img src={img} alt={alt} width="100%" height="100%" />
          </a>
        </span>
    )
}

export default SnsList
