import React from 'react'

const ListCard = ({ name, title, children }: { children: JSX.Element, name: string, title: string }) => {

    return (

        <div className="row total-container">

            <div className="col-8 p-0">

                <h5>{name}</h5>

            </div>

            <div className="col-4 p-0">

                <h5>{title}</h5>

            </div>

            {

                children

            }


        </div>
        
    )

}

export default ListCard