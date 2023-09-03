# Step-by-Step

1. install packages
    
    With the package.json
    
    `npm i`

    Without package.json

    - `npm i react react-dom react-router-dom`
    - `npm i -D @types/react @types/react-dom @vitejs/plugin-react vite`

2. initalise the react-dom

    1. 'src' directory in the root of your project
    
    2. cd into the *'src'* directory and create the following base resources
        - index.html
            create a basic html doctype with the following
            ```
            <!-- root jsx file to render into the index.html -->
            <script type="module" src="./src/index.jsx"></script>
            <title>BasketNow</title>
            </head>
            <body>
                <div id="root"></div>
            </body>
            </html>
            ```
        - index.jsx
            Just to test the basic setup, make the rendered content a hello world
            ```
            //importing the dependencies
            import React from "react";
            import { createRoot } from 'react-dom/client'
            import { BrowserRouter as Router } from 'react-router-dom'

            // declare the root element for rendering the the application
            const root = createRoot(document.getElementById("root"))

            // render the application contents
            root.render(<>Hello World</>);
            ```
    
    3. within the *src* directory, create the App.jsx file which will be the file which is the base of the application.
        *If you do not already have the React extention with boilerplate shortcuts install the [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets) extention*
        - make a basic function component boilerplate just so data is returned as a basic troubleshoot/testing measure. *do this for every file you create*

    4. create the component pages directory
        - create an *index.jsx* file as the centralised point for importing all pages modules.

    5. within the pages directory, create a directory called 'Homepage'
        - create an *index.jsx* file
    
    6. Apply consume the Router in the *src* index.jsx file to lay foundations for path routing with dirrect pages later.
        - ensure that the BrowserRouter is imported from react-router-dom or else this won't work

        `import { BrowserRouter as Router } from 'react-router-dom'`
        - wrap the Router around the App component
        ```
        root.render(<Router><App/></Router>);
        ```
    7. Create and establish the routes to the homepage
        - import the homepage from *pages*
            `import { Homepage } from './pages';`
        - create a Routes tag. this will be the parent to all routes
        - nest the *Homepage* component within the Route element as the index
            ```
            <>
            <Routes>
                <Route index element={<Homepage />} />
            </Routes>
            </>
            ```
            //should return what is in Homepage component while within the root endpoint
        - create a "catch all" route for error handling
            This can contain a page specifically for incorrect endpoint handling, or a basic tag like in this example. For now, it will be a basic h1
            ```
            <>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="*" element={<h1 style={{textAlign: 'center'}}>404 Page Does Not Exist</h1>}/>
            </Routes>
            </>
            ```
    8. create the next boiler plate pages. (TO DO)
        Create all necessary pages
        - StartTraining page
        - MyLockerRoom page
        - Register/Login Page (TBC)
    
    9. Set up the Navigation (TO DO)
        1. Create a directory within *components* called *'Header'* with an accompanying index.jsx file inside
        2. import 'NavLink' and 'Outlet' from 'react-router-dom'
            This will allow us to have links that connect to our pre-defined routes, AND the Outlet will allow us to render the route elements on the page based on the path.
        3. nest the nav tag in a header elem and main elem.
            ```
            <main>
                <header>
                    <nav>
                    //<contents for nav bar>
                    </nav>
                </header>
            </main>
            ```
        4. setup the NavLinks with the corresponding child elements and child paths.

    - *DON'T FORGET TO ADD A LINKING FUNCTIONALITY STEP FOR THE 404 PAGE*

Okay, Now I'm ready to do more work. I plan to sort out the navigation bar
and work on the data portion of things. e.g. Using redux OR useContext

So I just refactored my code from *'Training History'* to *'MY Locker Room'*. My reasoning for this is because I'm planning ahead for future features. It would be better to have A whole page with personal details. e.g. training history

