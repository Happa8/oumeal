import React from 'react';
import styled from 'styled-components'

class ResultCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card>
                Price:{this.props.price} YEN<br/>
                Calorie:{this.props.calorie} kCal<br/>
                Red:{this.props.red}/Green:{this.props.green}/Yellow:{this.props.yellow}
            </Card>
        )
    }
}

const Card = styled.div`
    width: 600px;
    max-width: 90vw;
    height: auto;
    padding: 10px;
    background-color: #FFFFFF;
    color: #123456;
    margin: 7px;
    font-family: sans-serif;
    font-size: 2rem;
    box-shadow:3px 3px 9px -3px #000000;
`;

export default ResultCard