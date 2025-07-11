// const heading = React.createElement("h1",
//     {id:"heading", xyz:"abc"

//     }, "Hello World from React!");

//     console.log(heading)

{/* <div id="perent">
    <div id ="child">
        <h1>I am H1</h1>
         <h1>I am H1</h1>
    </div>
    <div id ="child2">
        <h1>I am H1</h1>
         <h1>I am H1</h1>
    </div>
</div> */}

const perent = React.createElement("div",{id:"perent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
     React.createElement("h1",{},"I am h1 tag"),
    ]),
      React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
     React.createElement("h1",{},"I am h1 tag"),
    ]),  
]);

console.log(perent);// object

    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    root.render(perent);