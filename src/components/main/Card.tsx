import React from 'react'

import { Link} from 'react-router-dom';

interface CardDetails {

    name: string;

    id: number;
}

const Card = ({name, id} : CardDetails) => {

    return (

        <div className="col-lg-4">

            <Link to={`/pokemon/${id}`}>

                <a href="/" className="service-link">

                    <div className="box text-center">

                        <div className="icon d-flex align-items-end">

                            <img alt="game" src="/rubik.png" height="50" width="50" />

                        </div>

                        <h3 className="service-title">{name}</h3>

                    </div>

                </a>

            </Link>

        </div>
    )

}

export default Card
