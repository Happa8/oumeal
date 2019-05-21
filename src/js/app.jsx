import React from 'react';
import { render } from 'react-dom';
import kanshitaData from "../data/menu.json";
import MenuCard from "./menucard"
import ResultCard from "./resultcard"
import styled from 'styled-components'


function mealGacha(mealPrice){
    var list = []
    var misslist = []
    var nowPrice = 0
    console.log(kanshitaData.length)
    while((nowPrice < mealPrice) && (misslist.length < kanshitaData.length)){
        var randomSeed =  kanshitaData.length - 1
        var cullentMenu = getRandom(randomSeed)
        console.log("M:"+cullentMenu)
        var currentPrice = kanshitaData[cullentMenu].price
        console.log("price:"+currentPrice)
        console.log("P:"+nowPrice)
        var sagaku = mealPrice - nowPrice
        if(sagaku >= currentPrice){
            nowPrice = currentPrice + nowPrice
            list.push(cullentMenu)
        }else if(misslist.indexOf(cullentMenu) == -1){
            misslist.push(cullentMenu)
        }
        console.log("L:"+list)
        console.log("MISS:"+misslist+"   l:"+misslist.length)
        console.log("After:"+nowPrice)
    }
    console.log("LAST:"+list)
    return list

}

function getRandom(max){
    return Math.floor(Math.random()*(max + 1))
}

class App extends React.Component{
    constructor(props){
        super(props)
        console.log("start")
        var list = mealGacha(500)
        console.log("listcom")
        var menuListPre = []
        var sumPrice = 0
        var sumCalorie = 0
        var sumRed = 0
        var sumGreen = 0
        var sumYellow = 0
        for(var i in list){
            menuListPre.push(<MenuCard menuName={kanshitaData[list[i]].menu} menuPrice={kanshitaData[list[i]].price} menuCalorie={kanshitaData[list[i]].calorie}/>)
            sumPrice += kanshitaData[list[i]].price
            sumCalorie += kanshitaData[list[i]].calorie
            sumRed += kanshitaData[list[i]].red
            sumGreen += kanshitaData[list[i]].green
            sumYellow += kanshitaData[list[i]].yellow
        }
        this.state = {
            menuList: menuListPre,
            menuListNum: list,
            sumPrice: sumPrice,
            sumCalorie: sumCalorie,
            sumRed: sumRed,
            sumGreen: sumGreen,
            sumYellow: sumYellow
        }
        console.log("complete")
        console.log(this.state.sumCalorie)
    }
    render(){
        return(
            <Containter>
                {this.state.menuList}{console.log("rendered")}
                <ResultCard price={this.state.sumPrice} calorie={this.state.sumCalorie} red={this.state.sumRed} green={this.state.sumGreen} yellow={this.state.sumYellow} />
            </Containter>
        )
    }
}

const Containter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

render(<App/>, document.getElementById('root'))