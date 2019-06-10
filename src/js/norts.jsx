import React from 'react';
import styled from 'styled-components'

class Notes extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Card>
                <Title>これis何</Title>
                <MainText>
                    少し前に流行ったサイ○リヤ1000円ガチャをリスペクトして作った阪大食堂ミールプラン500円ガチャです。<br/><br/>
                    とりあえずネタとして作ったため、デザートがかぶったり、ライスSSを3つも4つも頼んだり、無限に味噌汁を飲んだりしますが、仕様です。<br/>
                    気が向いたら高機能化したり有能モードを付け加えたりするかもしれません。<br/><br/>
                    あと食堂のメニューはコロコロ変わるので出てきたメニューが今あるとは限りません。仕様です。<br/><br/>
                    最後に、現状図書館下食堂のみのメニューとなっております。仕様です。<br/><br/>
                    ご連絡は @happa_eight まで・・・<br/><br/>
                    Version 1.0.3 Beta
                </MainText>
            </Card>
        )
    }
}

const Card = styled.div`
    width: 600px;
    max-width: 80vw;
    height: auto;
    padding: 25px;
    background-color: #FFFFFF;
    color: #123456;
    margin: 7px;
    font-family: sans-serif;
    box-shadow:3px 3px 9px -3px #000000;
    text-align: center;
`;

const MainText = styled.p`
    font-size: 1.5rem;
    line-height: 2.2rem;
`;

const Title = styled.span`
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    display: block;
`;

export default Notes