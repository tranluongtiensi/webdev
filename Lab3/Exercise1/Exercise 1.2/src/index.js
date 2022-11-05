import React from 'react';
import ReactDOM from 'react-dom/client';
import Mybutton from './MyButton';
import MyList from './MyList';


const root = ReactDOM.createRoot(document.getElementById('root'));


const appState = {
    text: "My Button",
    disable: true,
    items: ["First", "Second", "Third"],
};




function render(props){
    root.render(

        <main>
            <Mybutton text={props.text} disable={props.disable}/>
            <MyList items={props.items} />
        </main>
    )

}
render(appState);
setTimeout (()=>{
    appState.disable=false;
    appState.items.push("Fourth");

    render(appState);
},1000
)