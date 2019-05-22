import React from 'react';
import styled from 'styled-components'

class ResultCard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card>
                <PriceData>合計:{this.props.price}円</PriceData>
                <Separate />
                <OtherData>{this.props.calorie}kCal</OtherData>
                <OtherData>赤:{this.props.red}/緑:{this.props.green}/黄:{this.props.yellow}</OtherData>
            </Card>
        )
    }
}

const Card = styled.div`
    width: 600px;
    max-width: 80vw;
    height: auto;
    padding: 10px;
    background-color: #FFFFFF;
    color: #123456;
    margin: 7px;
    font-family: sans-serif;
    box-shadow:3px 3px 9px -3px #000000;
    text-align: center;
`;

const OtherData = styled.span`
    text-align: center;
    margin-bottom: 5px;
    font-size: 1.5rem;
    display: block;
`;

const Separate = styled.div`
    display: inline-block;
    width: 90%;
    height: 1px;
    margin: 10px 0;
    background-color: #f00;
    text-align: center;
`;

const PriceData = styled.span`
    font-size: 2.5rem;
    color: #f00;
    font-weight: bold;
    display: block;
    margin-top: 15px;
    text-align: center;
`;

export default ResultCard