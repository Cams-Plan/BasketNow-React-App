# Step-by-Step

1. install packages
    
    With the package.json
    
    `npm i`

    Without package.json

    - `npm i react react-dom react-router-dom`
    - `npm i -D @types/react @types/react-dom @vitejs/plugin-react vite`

2. initalise the react-dom

    1. 'src' directory in the root of your project
    2. cd into the 'src' directory and create the following resources
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
    3. 
