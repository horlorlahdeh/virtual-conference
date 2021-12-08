import React from 'react'

const Container = (props) => {
    return (
        <div className="bg-black bg-fixed bg-shapesContact bg-cover bg-center bg-no-repeat">
            {props.children}
        </div>
    )
}

export default Container
