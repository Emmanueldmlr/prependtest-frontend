## Project Approach

I managed each component's state internally, since using redux or any third party state management tool would be an overkill. I created two services i.e httpService and pokemonService to help manage the interaction with the API request. pokemonService always create an instance of the httpService whenever there is a need to reach out to the API.

I created a Wrapper Component called Guest which handles all the http request to the application and routes them to the right page. Also, the Guest component includes the Header and the footer to avoid repetition.

I also wrapped the entire application with the ErrorHandlerComponent in other to help handles any error that occurs in the application.

All utility functions are declared inside the util file.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.