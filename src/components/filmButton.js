import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function FilmButton(){

    return(
        <div>
            <button type="button" class="btn btn-secondary"> Film(s) </button>
        </div>
    )
}

export default FilmButton;


/* const [btnColor, setBtnColor] = useState("blue")

const click = btnColor => {
    setBtnColor(btnColor);
}

useEffect(() => {
    document.body.style.backgroundColor = btnColor}, [btnColor])


return(
    <div>
        <button onClick={() => click("white")} type="button" class="btn btn-secondary"> Film(s) </button>
    </div>
);*/



/*class FilmButton extends React.Component{
    constructor(){
        super();

        this.state = {
            black: true
        }
    }

    changeColor(){
        this.setState({black: !this.state.black})
    }

    render(){
        let btn_class = this.state.black ? "blackButton" : "whiteButton";

        return(
            <button className={btn_class} onClick={this.changeColor.bind(this)}>
                Button
            </button>
        )
    }
}

React.render(<FilmButton />, document.getElementById('container'));*/