import React from 'react';

import { Route} from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

export const Guest = ({component: Component, ...rest}) => {

    return(

        <ErrorBoundary>
            

           <Route
            
                {...rest} 

                render={

                    (props) => {
                    
                            return (

                                <>
                                
                                    <div className="main-wrapper max-height">

                                        {/* <Header/>  */}

                                        <Component  {...props} /> 
    
                                        {/* <Footer/> */}

                                    </div>

                                </>
                                
                            )
        
                    }
                }
                
            /> 
            
        </ErrorBoundary>
    );
}