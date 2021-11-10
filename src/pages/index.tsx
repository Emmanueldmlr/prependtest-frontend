import React from 'react'

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

                                <div className="col-lg-4">

                                    <a href="/" className="service-link">

                                        <div className="box text-center">

                                            <div className="icon d-flex align-items-end">

                                            <img alt="game" src="/rubik.png" height="50" width="50"/>

                                            </div>

                                            <h3 className="service-title">bulbasaur</h3>

                                            <p>firered-leafgreen</p>

                                        </div>

                                    </a>

                                </div>

                                <div className="col-lg-4">

                                    <a href="/" className="service-link">

                                        <div className="box text-center">

                                            <div className="icon d-flex align-items-end">
                                                
                                                 <img alt="game" src="/rubik.png" height="50" width="50"/>
                                                
                                            </div>

                                            <h3 className="service-title">ivysaur</h3>

                                            <p>firered-leafgreen generation.</p>
                                            
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="/" className="service-link">
                                        <div className="box text-center">
                                            <div className="icon d-flex align-items-end"><img  alt="game" src="/rubik.png" height="50" width="50"/></div>
                                            <h3 className="service-title">venusaur</h3>
                                            <p>firered-leafgreen summary.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="/" className="service-link">
                                        <div className="box text-center">
                                            <div className="icon d-flex align-items-end"><img alt="game" src="/rubik.png" height="50" width="50"/></div>
                                            <h3 className="service-title">charmander</h3>
                                            <p>firered-leafgreen quick delivery.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="/" className="service-link">
                                        <div className="box text-center">
                                            <div className="icon d-flex align-items-end"><img alt="game" src="/rubik.png" height="50" width="50"/></div>
                                            <h3 className="service-title">charmeleon</h3>
                                            <p>firered-leafgreen shshs</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4">
                                    <a href="/" className="service-link">
                                        <div className="box text-center">
                                            <div className="icon d-flex align-items-end"><img alt="game" src="/rubik.png" height="50" width="50"/></div>
                                            <h3 className="service-title">charizard</h3>
                                            <p>firered-leafgreen</p>
                                        </div>
                                    </a>
                                </div>

                                
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
