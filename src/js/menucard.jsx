import React from 'react';
import styled from 'styled-components';

class MenuCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card>
                {this.props.menuName}<br />
                {this.props.menuPrice}YEN  <br /> 
                {this.props.menuCalorie}kCal
            </Card>
        )
    }
}

const Card = styled.div`
    width: 600px;
    max-width: 90vw;
    height: auto;
    padding: 10px;
    background-color: #317ff7;
    color: #ffffff;
    margin: 7px;
    font-family: sans-serif;
    font-size: 1.5rem;
    box-shadow:3px 3px 9px -3px #000000;
`;

export default MenuCard