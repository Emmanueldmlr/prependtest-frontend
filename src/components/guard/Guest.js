import React from 'react';

import { Route} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

import Header from '../part/Header'

import SubHeader from '../part/SubHeader'

import Footer from '../part/Footer'

export const Guest = ({component: Component, ...rest}) => {

    return(

        <ErrorBoundary>
            

           <Route
            
                {...rest} 

                render={

                    (props) => {
                    
                            return (

                                <>
                                
                                    <div id="page">

                                        <Header/> 

                                        <SubHeader/> 

                                        <Component  {...props} /> 
    
                                        <Footer/>

                                    </div>

                                </>
                                
                            )
        
                    }
                }
                
            /> 
            
        </ErrorBoundary>
    );
}