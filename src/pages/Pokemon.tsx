import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom";

import { getPokemon } from '../services/pokemonService';

import Loader from "react-loader-spinner";

import gameInterface from '../interface/gameInterface'

import Wrapper from '../components/main/Wrapper'
import ListCard from 'components/main/ListCard';

const Pokemon: React.FC = () => {

    const { name }: { name: string } = useParams()

    const [loading, setIsLoading] = useState<boolean>(true)

    const [game, setGame] = useState<gameInterface | null>(null)

    const [error, setError] = useState<string | null>(null)

    const retrievePokemon = async (gameName: string) => {

        try {

            const result = await getPokemon(gameName)

            const { data }: { data: gameInterface } = result

            setGame(data)

            setTimeout(() => {

                setIsLoading(false)

            }, 1000)

        }
        catch (err) {

            setIsLoading(false)

            setError("Not Found")

        }


    }

    useEffect(() => {

        if (!game) {

            retrievePokemon(name)

        }
        else {

            setIsLoading(false)

        }

    }, [])

    return (

        <main>

            <div className="order">

                <div className="container">

                    <div className="row">

                        {

                            loading ?

                                <div className="offset-md-5 offset-4" >

                                    <Loader

                                        type="Puff"

                                        color="#ff7b79"

                                        height={60}

                                        width={60}

                                    />

                                </div>

                                :

                                game ?

                                    <>

                                        <div className="col-lg-8" id="mainContent">

                                            <div className="row">

                                                <Wrapper title="Species" isMove={false}>

                                                    <div id="faqNavContainer" className="theiaStickySidebar">

                                                        <ul id="faqNav">

                                                            <li><a href="#" className="active nice-scroll-faq">Name: {game.species.name}</a></li>

                                                            <li><a href="#" className="active nice-scroll-faq">URL: {game.species.url}</a></li>

                                                        </ul>
                                                    </div>

                                                </Wrapper>

                                                <Wrapper title="Weight" isMove={false}>

                                                    <div id="faqNavContainer" className="theiaStickySidebar">

                                                        <ul id="faqNav">

                                                            <li><a href="#" className="active nice-scroll-faq">{game.weight}</a></li>

                                                        </ul>

                                                    </div>

                                                </Wrapper>

                                                <Wrapper title="Stats" isMove={false}>

                                                    <div id="orderContainer" className="theiaStickySidebar">

                                                        <div className="row">

                                                            <div className="col-md-12">

                                                                <ListCard name="name" title="Stat">

                                                                    <>
                                                                        {

                                                                            game.stats.map((stat, index) => (

                                                                                <>
                                                                                    <div className="col-8 p-0">

                                                                                        <span>{stat.stat.name}</span>

                                                                                    </div>

                                                                                    <div className="col-4 p-0">

                                                                                        <span>{stat.base_stat}</span>

                                                                                    </div>

                                                                                </>

                                                                            ))

                                                                        }

                                                                    </>

                                                                </ListCard>

                                                                <div id="totalError"></div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </Wrapper>

                                                <Wrapper title="Types" isMove={false}>

                                                    <div id="orderContainer" className="theiaStickySidebar">

                                                        <div className="row">

                                                            <div className="col-md-12">

                                                               <ListCard title="slot" name="name">

                                                                    <>
                                                                        {

                                                                            game.types.map((type) => (

                                                                                <>
                                                                                    <div className="col-8 p-0">

                                                                                        <span>{type.type.name}</span>

                                                                                    </div>

                                                                                    <div className="col-4 p-0">

                                                                                        <span>{type.slot}</span>

                                                                                    </div>

                                                                                </>
                                                                            ))
                                                                        }

                                                                    </>

                                                               </ListCard>

                                                                <div id="totalError"></div>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </Wrapper>

                                                <Wrapper title="Moves" isMove={true}>

                                                    <div id="orderContainer" className="theiaStickySidebar">

                                                        {
                                                            game.moves.map((move, index) => (

                                                                <span className="terms-link" key={index}>{move.move.name}</span>

                                                            ))
                                                        }

                                                    </div>

                                                </Wrapper>
                                            </div>


                                        </div>

                                        <div className="col-lg-4" id="sidebar">

                                            <div id="orderContainer" className="theiaStickySidebar">

                                                <div className="box text-center">

                                                    <img alt="game" src="/rubik.png" height="200" width="200" />

                                                </div>

                                            </div>
                                        </div>

                                    </>
                                    :

                                    <h4 className="offset-md-5 offset-4 text-danger">Not Found</h4>

                        }

                    </div>

                </div>

            </div>
            
        </main>

    )

}

export default Pokemon
