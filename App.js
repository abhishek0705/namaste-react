import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1", // tag name
//   { key: "h3" }, // attributes
//   "I am h1 tag!" // children
// );

// jsx (transpiled before it reaches the JS Engline using Babel) 
const jsxHeading = <h1 id='heading'>Learn React using JSX</h1>;

const HeadingComponent = () => (
    <div id='container'>
        <h1>Functional Heading Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
