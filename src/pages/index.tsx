import Card from '../components/main/Card';

import React, {useState, useEffect} from 'react'

import { fetchPokemons } from '../services/pokemonService';

interface pokemon {

    count: number | null

    next: string | null,

    previous: string | null,

    results: {name: string, url: string}[] | null
}

const Landing: React.FC = () => {

    const [loading, setIsLoading] = useState<boolean>(true)

    const [pokemons, setPokemons] = useState<pokemon | null>(null)

    const [error, setError] = useState<string| null>(null)

    useEffect(() => {

        if(!pokemons){

            const getPokemons = async () => {

                try{

                    const result = await fetchPokemons()

                    console.log(result)
              
                    const { data } : {data: pokemon} = result

                    setPokemons(data)
                            
                    setIsLoading(false)
                          
                }
              
                catch(err){
              
                    setIsLoading(false)
    
                    setError("Error Fetching Pokemons")
                            
                }

            }

            getPokemons()

        }

        else{

            setIsLoading(true)

        }

    }, [])

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

                                {
                                    loading ?

                                        <p>Loading</p>

                                    :
                                    pokemons ? 

                                        pokemons.results?.map((game, index) => (

                                            <Card name={game.name} key={index}/>

                                        ))
                                    :
                                    <p>Error Wa </p>
                                }
                                
                            </div>

                            <nav aria-label="Page navigation">

                                    <ul className="pagination justify-content-center">
                                        
                                        <li className="page-item"><button className="page-link color-2"  style={{color: "#ff7b79"}}>Previous</button></li>

                                        <li className="page-item"><button  className="page-link"  style={{color: "#ff7b79"}}>Next</button ></li>
                                        
                                    </ul>

                            </nav>

                        </div>
                    </div>
                </div>

             </main>

    )

}

export default Landing
