
![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | REACT - MASTER OF HOF

## Learning Goals

In this exercise, the goal is to apply various higher order functions in react:

- when and how to setup react in your application,
- learn map, filter and reduce

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

### Introduction

In this exercise, you will try to work with various higher order functions. 

create a new react app using the following command
```
npx create-react-app hof
cd hof
```
Now go to your app.js and remove the unnecessary code. Your app.js should be looking similar to the this.
```
import React from 'react';
import HigherOrderFunctions from './components/hof/HigherOrderFunctions';
import './App.css';

function App() {
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
```

Now create a folder called components inside the src folder and create a component called HigherOrderComponent.jsx file. Once you create it you are good to go.
**Note: use rcc to generate the code template inside HigherOrderComponent.jsx**. Once you have done this. 

So let's get started!
Check below to see the overall output: You will be trying to replicate this

![Image description](https://i1.faceprep.in/ProGrad/l2.output1.png)


### PROGRESSION 1 | DEFINE THE STATE

Your task in this iteration is just to create an array of objects inside the state. To do this, let's go to our HigherOrderComponent.jsx and inside the class try to define the constructor and the state.
Just remember you need to define the super constructor before defining the state. Your code should look something like this.

```
  constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }
  
```

You're ready to move to the next iteration. :raised_hands:

#### REACT 2 | LIST ALL ITEMS

Now we have defined our data to be used. Your task in this iteration is to display all the elements from userData. 
**Remember to use map function to display all the details**

Code Snippet for reference
```
// display all items
renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
        <React.Fragment key={item.id}>
            <li className="list-elements">
                {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                <span>Id: {item.id}</span>
                <span>Name : {item.name}</span>
                <span>User Type: {item.user_type}</span>
           </li>
        </React.Fragment>
    ));
    return mapRows;
};

```
Now the most important step, You need to return the value to the render method so that the output get's displayed in the container.

```
render() {
        return (
        // instead of a parent div tag we can also use React.Fragment
          <React.Fragment>
            <h1>Display all items</h1>
            <div className="display-box">
            <ul>{this.renderItems()} </ul>
            </div>
          </React.Fragment>
```

If you do the above, you still can't see the output. Do you know why it is because you need to add your component to your app.js file.

![Image description](https://i1.faceprep.in/ProGrad/l2.output2.png)

If you get the above output, you can ensure that the react is completely setup in your system.

#### REACT 3 | IS IT A FUNCTION

The component can be a functional component or class component. Now before moving to the class component let us try to use the same example given above and try to convert it as a functional component.
This is going to be our output.
![Image description](https://i1.faceprep.in/ProGrad/l1-output2.png)

To get the above it is quite simple. Check the code snippet given below. There is no modification required in the index.html.
**React.createElement has three attributes (component,props,children)**
**Component can be a react component - reusable piece of UI.
**Props are properties of the component or element.
**children can be a nested component or html element.
**In the below code when you check the react element it has a `div` tag followed by null and a string called `Hey ProGrads! Welcome to React Learning`. The `div` tag refers to the component. null refers to the property and the statement is the children. When you inspect the element you can see a output similar to this. The next `div` tag is the children.**
![Image description](https://i1.faceprep.in/ProGrad/l1-output3.png)

```
// Functional component
const Container = () =>{
    return React.createElement(`div`,null,`Hey ProGrads! Welcome to React Learning`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
// Render the Container
const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(Container),container);
```

#### REACT 3 | NOW IT'S CLASS TIME

Now in this iteration we will try working with the class component. To define a class component. We are going to replicate the same output what we got in function component.
Check the code snippet below. Replace the above code instead of functional components and you can see that it should print

Hey ProGrads
Let's rock and roll

```
class ReactContainer extends React.Component{
  // constructor - to initialize the state 

  // render method to render the react dom 
    render(){
        return React.createElement(`div`,null,`Hey ProGrads`,
        React.createElement(`div`,null,`Let's rock and roll`)
        );
    }
  
}
const container = document.getElementById('react-container');
ReactDOM.render(React.createElement(ReactContainer),container);
```

You're ready to move to the next iteration. :raised_hands:

## part II - Use JSX and babel compiler
In the progressions above, we only relied on features that are natively supported by the browsers. This is why we used a JavaScript function call to tell React what to display:
However, React also offers an option to use JSX instead.JSX stands for Javascript XML, 

So far whatever we have used we did it directly without the use of Babel compiler. Babel is a very powerful javascript complier which converts react script to Browser acceptable Javascript. As you have learnt that react uses `virtual dom` and babel helps to transpile to browser javascript.

The quickest way to try JSX in your project is to add this <script> tag to your page:

```
    <!-- Include babel compiler -->
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
Now you can use JSX in any <script> tag by adding type="text/babel" attribute to it. 

```
    class ReactContainer extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (
          <div>Hello! Welcome to ProGrads   
             <div>Let's rock and roll </div>
         </div> )
      };  
  }

const container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer/>,container);    
```
Isn't the above one so easy. So instead of too many React.createElement you can use JSX which is super cool to use.

## Part III - CREATE REACT APP
create-react-app is a project aimed at getting you up to speed with React in no time. It provides a ready-made React application starter, so you can dive into building your app without having to deal with Webpack and Babel configurations.

It provides out of the box:

I. A development server with hot reloading
II. Provides a testing environment with Jest
III. Allows to build the React app
IV. Ready for ES6+ syntax
V. Bundles all your JavaScript and assets
VI. Comes with CSS autoprefixer, SASS and CSS Modules support

When you run npx create-react-app <app-name>, npx is going to download the most recent create-react-app release, run it, and then remove it from your system. This is great because you will never have an outdated version on your system, and every time you run it, you’re getting the latest and greatest code available.

To create the app  : 
`npx create-react-app first-react-app`

To run the app : 
`cd first-react-app
npm start`

To run it just go to open the console and go the the application directory and just type `npm start`

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

In this exercise, you've learnt various ways of setting up react in your system. If you managed to do it, good job! :trophy:

This concludes the React setup. We are proud of you!

Happy Coding ProGrad ❤️!

