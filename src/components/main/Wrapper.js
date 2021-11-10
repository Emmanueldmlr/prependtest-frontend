import React from 'react'

const Wrapper = ({title,isMove, children}) => {

    return (

        <div className={`${isMove ? "col-lg-12" : "col-lg-6"}`} id="sidebar">

            <h5>{title}</h5>

            {children}
        
        </div>

    )

}

export default Wrapper


