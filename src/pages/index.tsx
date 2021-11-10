import Card from '../components/main/Card';

import React from 'react'

import { Link} from 'react-router-dom';



const Landing: React.FC = () => {

    return (

            <main>
                <div className="services">

                    <div className="container">

                        <div className="text-center">

                            <h2>List of Available Pokemons</h2>

                            <div className="border-multiple">

                                <span className="first"></span>

                                <span className="second"></span>

                                <span className="third"></span>

                            </div>

                        </div>

                        <div className="mt-5">

                            <div className="row">

                                <Card name="Crochet" id={4} key={1}/>
                                <Card name="Crocodie" id={4} key={2}/>
                                <Card name="Crochet" id={4} key={3}/>
                                <Card name="Crochet" id={4} key={4}/>
                                <Card name="Crochet" id={4} key={5}/>

                            </div>

                            <nav aria-label="Page navigation">

                                    <ul className="pagination justify-content-center">
                                        
                                        <li className="page-item"><a className="page-link color-2" href="/" style={{color: "#ff7b79"}}>Previous</a></li>

                                        <li className="page-item"><a className="page-link" href="/" style={{color: "#ff7b79"}}>Next</a></li>
                                        
                                    </ul>

                            </nav>

                        </div>
                    </div>
                </div>

             </main>

    )

}

export default Landing
