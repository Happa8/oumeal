import React from 'react';
import { render } from 'react-dom';
import kanshitaData from "../data/menu.json";


function mealGacha(mealPrice){
    var list = []
    var misslist = []
    var nowPrice = 0
    var test = 0
    console.log(kanshitaData.length)
    while((nowPrice <= mealPrice) || (misslist.length <= kanshitaData.length)){
        var cullentMenu = getRandom(kanshitaData.length)
        console.log("M:"+cullentMenu+"  price:"+kanshitaData[cullentMenu].price)
        console.log("P:"+nowPrice)
        var sagaku = mealPrice - nowPrice
        if(sagaku >= kanshitaData[cullentMenu].price){
            nowPrice = kanshitaData[cullentMenu].price + nowPrice
            list.push(cullentMenu)
        }else if(misslist.indexOf(cullentMenu) == -1){
            misslist.push(cullentMenu)
        }
        console.log("L:"+list)
        console.log("MISS:"+misslist+"   l:"+misslist.length)
        test++
        console.log("After:"+nowPrice)
    }
    console.log("LAST:"+list)
    

}

function getRandom(max){
    return Math.floor(Math.random()*(max+1))
}

class App extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        // var list = mealGacha(500)
        // for(var i in mealGacha(500)){
        //     list.push(kanshitaData[i].menu + "")
        // }
        return(
            <div>{mealGacha(500)}{kanshitaData[getRandom(kanshitaData.length)].price + 20}</div>
        )
    }
}

render(<App/>, document.getElementById('root'))