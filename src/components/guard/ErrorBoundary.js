import React, {Component} from 'react';

class ErrorBoundary extends Component{

    constructor(props){

        super(props);

        this.state = { hasError: false };

    }

    static getDerivedStateFromError(error) {

        return { hasError: true };

    }

    componentDidCatch(error, errorInfo) {

        console.log(errorInfo, error);

    }

    render() {

            return(

                <>

                    { 
                        
                        this.state.hasError ? 

                        <div class="row" style={ {marginTop: "5rem", height:"auto", minHeight:"500px"} }>
                                                        
                            <p class="col-12 text-center">Something went wrong</p>
                            
                        </div>

                    :
                        
                        this.props.children 
                        
                    }
                </>
            );
        

    }
}

export default ErrorBoundary;