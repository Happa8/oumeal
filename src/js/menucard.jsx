import React from 'react';
import styled from 'styled-components';

class MenuCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card>
                <MenuName>{this.props.menuName}</MenuName>
                <Separate />
                <MenuData>{this.props.menuPrice} 円 / {this.props.menuCalorie} kCal</MenuData>
            </Card>
        )
    }
}

const MenuName = styled.span`
    text-align: center;
    width:100%;
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
`;

const MenuData = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Separate = styled.div`
    display: inline-block;
    width: 90%;
    height: 1px;
    margin: 10px 0;
    background-color: #fff;
    text-align: center;
`;

const Card = styled.div`
    text-align: center;
    width: 600px;
    max-width: 80vw;
    height: auto;
    padding: 10px 10px;
    background-color: #317ff7;
    color: #ffffff;
    margin: 7px;
    font-family: sans-serif;
    font-size: 1.5rem;
    box-shadow:3px 3px 9px -3px #000000;
`;

export default MenuCard