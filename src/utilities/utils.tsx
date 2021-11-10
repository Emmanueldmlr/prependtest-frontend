export const getUrlParameters = (url: string) => {
    
    const value = new URL(url);

    const params = new URLSearchParams(value.search);  
            
    return params

}