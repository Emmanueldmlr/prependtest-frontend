import Card from '../components/main/Card';

import React, { useState, useEffect } from 'react'

import { fetchPokemons } from '../services/pokemonService';

import { getUrlParameters } from '../utilities/utils';

import Loader from "react-loader-spinner";

import pokemon from "../interface/pokemonInterface"

const Landing: React.FC = () => {

    const [loading, setIsLoading] = useState<boolean>(true)

    const [pokemons, setPokemons] = useState<pokemon | null>(null)

    const [error, setError] = useState<string | null>(null)

    const getPokemons = async (params: URLSearchParams | string | null) => {

        const result = await fetchPokemons(params)

        const { data }: { data: pokemon } = result

        setPokemons(data)

        setTimeout(() => {

            setIsLoading(false)

        }, 1000)

    }

    useEffect(() => {

        if (!pokemons) {

            try {

                getPokemons(null)

            }
            catch (e) {

                setIsLoading(false)

                setError("Error Fetching Pokemons")

            }

        }

        else {

            setIsLoading(true)

        }

    }, [])

    const fetchPreviousOrNextPokemons = async (url: string | null) => {

        if (url) {

            const params = getUrlParameters(url)

            setIsLoading(true)

            try {

                getPokemons(params)

            }

            catch (err) {

                setIsLoading(false)

                setError("Error Fetching Pokemons")

            }
        }

    }

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

                        {
                            loading ?

                                <div className="text-center" >

                                    <Loader

                                        type="Puff"

                                        color="#ff7b79"

                                        height={60}

                                        width={60}

                                        
                                    />
                                </div>

                                :

                                pokemons ?

                                    <>

                                        <div className="row">

                                            {
                                                pokemons.results?.map((game, index) => (

                                                    <Card name={game.name} key={index} />

                                                ))

                                            }

                                        </div>

                                        <nav aria-label="Page navigation">

                                            <ul className="pagination justify-content-center">

                                                <li className="page-item">

                                                    <button onClick={() => fetchPreviousOrNextPokemons(pokemons.previous)} disabled={pokemons.previous ? false : true} className="page-link color-2" style={{ color: "#ff7b79" }}>Previous</button>

                                                </li>

                                                <li className="page-item">

                                                    <button onClick={() => fetchPreviousOrNextPokemons(pokemons.next)} disabled={pokemons.next ? false : true} className="page-link" style={{ color: "#ff7b79" }}>Next</button >

                                                </li>

                                            </ul>

                                        </nav>

                                    </>

                                    :

                                    <p className="text-center">{error}</p>

                        }

                    </div>
                </div>
            </div>

        </main>

    )

}

export default Landing
