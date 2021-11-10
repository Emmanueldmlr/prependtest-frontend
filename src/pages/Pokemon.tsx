import React,{useState, useEffect}  from 'react'

import {useParams} from "react-router-dom";

import { getPokemon } from '../services/pokemonService';

interface gameInterface{

    weight: number,

    moves: { move : {name: string, url: string}, version_group_details: any}[],

    types: {slot: number, type: {name: string, url: string}}[],

    stats: {base_stat: number, effort: number, stat: {name: string, url: string}}[],

    species: {name: string, url: string}

}

const Pokemon: React.FC = () => {

    const {name}: {name:string} = useParams()

    const [loading, setIsLoading] = useState<boolean>(true)

    const [game, setGame] = useState<gameInterface | null>(null)

    const [error, setError] = useState<string | null>(null)

    const retrievePokemon = async (gameName: string) => {

        const result = await getPokemon(gameName)

        const { data }: { data: gameInterface  } = result

        setGame(data)

        setTimeout(() => {

            setIsLoading(false)

        }, 1000)

    }

    useEffect(() => {

        if(!game){

            try{

                retrievePokemon(name)

            }

            catch(err){

                console.log(err)

            }

        }

    }, [])

    return (

        <main>

            <div className="order">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-8" id="mainContent">

                            <div className="row">

                                <div className="col-lg-6" id="sidebar">

                                    <h5>Species</h5>

                                    <div id="faqNavContainer" className="theiaStickySidebar">

                                        <ul id="faqNav">

                                            <li><a href="#" className="active nice-scroll-faq">Name: bulbasaur</a></li>

                                            <li><a href="#" className="active nice-scroll-faq">URL: https://pokeapi.co/api/v2/pokemon-species/1/</a></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6" id="sidebar">

                                    <h5>Weight</h5>

                                    <div id="faqNavContainer" className="theiaStickySidebar">

                                        <ul id="faqNav">

                                            <li><a href="#" className="active nice-scroll-faq">60KG</a></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6" id="sidebar">

                                    <h5>Stats</h5>

                                    <div id="orderContainer" className="theiaStickySidebar">
                                        <div className="row">
                                            <div className="col-md-12">

                                                <div className="row total-container">
                                                    <div className="col-8 p-0">
                                                        <h5>Name</h5>
                                                    </div>

                                                    <div className="col-4 p-0">
                                                        <h5>Base Stats</h5>
                                                    </div>

                                                    <div className="col-8 p-0">
                                                        <span>Defence</span>
                                                    </div>

                                                    <div className="col-4 p-0">
                                                        <span>60</span>
                                                    </div>
                                                    <div className="col-8 p-0">
                                                        <span>Attack</span>
                                                    </div>

                                                    <div className="col-4 p-0">
                                                        <span>200</span>
                                                    </div>

                                                </div>
                                                <div id="totalError"></div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>

                                <div className="col-lg-6" id="sidebar">

                                    <h5>Types</h5>

                                    <div id="orderContainer" className="theiaStickySidebar">
                                        <div className="row">
                                            <div className="col-md-12">

                                                <div className="row total-container">
                                                    <div className="col-8 p-0">
                                                        <h5>Name</h5>
                                                    </div>

                                                    <div className="col-4 p-0">
                                                        <h5>Slot</h5>
                                                    </div>

                                                    <div className="col-8 p-0">
                                                        <span>grass</span>
                                                    </div>

                                                    <div className="col-4 p-0">
                                                        <span>1</span>
                                                    </div>
                                                    <div className="col-8 p-0">
                                                        <span>poison</span>
                                                    </div>

                                                    <div className="col-4 p-0">
                                                        <span>2</span>
                                                    </div>

                                                </div>
                                                <div id="totalError"></div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12" id="sidebar">

                                    <h5>Moves</h5>

                                    <div id="orderContainer" className="theiaStickySidebar">
                                        <span className="terms-link">bind</span>
                                        <span className="terms-link">vine-whip</span>
                                        <span className="terms-link">headbutt</span>
                                        <span className="terms-link">tackle</span>
                                    </div>
                                    
                            </div>

                        </div>

                        <div className="col-lg-4" id="sidebar">

                            <div id="orderContainer" className="theiaStickySidebar">

                                <div className="box text-center">

                                    <img alt="game" src="/rubik.png" height="200" width="200" />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )

}

export default Pokemon
