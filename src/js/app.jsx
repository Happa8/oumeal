import React, { Component } from 'react';
import { render } from 'react-dom';
import kanshitaData from "../data/menu.json";
import MenuCard from "./menucard"
import ResultCard from "./resultcard"
import styled from 'styled-components'
import Notes from "./norts"

/// やぎちゃん考案別機構---------------------
const filterMenu = {
    // priceを基準にmenuオブジェクトのpriceについて比較する関数を返す
    maxPrice: (price) => (menu) =>
        menu.price <= price
}

// ランダムセレクト
const selectRandom = (list) =>
    list[Math.floor(Math.random() * list.length)]

//gachaメイン
const gacha = (maxPrice, menuList) => {
    const result = selectRandom(
        menuList.filter(filterMenu.maxPrice(maxPrice))
    )
    if (result == null) return [];
    return [...gacha(maxPrice - result.price, menuList), result]
    console.log(result)
}

/// やぎちゃん式ココマデ----------------------
/// Happa8式 v1.0.4以降不使用
function mealGacha(mealPrice, isStrict){
    var list = []
    var misslist = []
    // [TODO] デザート一品限定機能つける
    // var isDessert = false
    // var isDrink = false
    var nowPrice = 0
    console.log(kanshitaData.length)
    while((nowPrice < mealPrice) && (misslist.length < kanshitaData.length)){
        var randomSeed =  kanshitaData.length - 1
        var cullentMenu = getRandom(randomSeed)
        console.log("M:"+cullentMenu)
        var currentPrice = kanshitaData[cullentMenu].price
        //console.log("price:"+currentPrice)
        console.log("P:"+nowPrice)
        var sagaku = mealPrice - nowPrice
        if(sagaku >= currentPrice){
            // 成功処理
            nowPrice = currentPrice + nowPrice
            list.push(cullentMenu)
            // if(kanshitaData[cullentMenu].isDessert == true){
            //     isDessert = true
            // }
            // if(kanshitaData[cullentMenu].isDrink == true){
            //     isDrink = true
            // }
        }else if(misslist.indexOf(cullentMenu) == -1){
            misslist.push(cullentMenu)
        }
        //console.log("L:"+list)
        //console.log("MISS:"+misslist+"   l:"+misslist.length)
        console.log("After:"+nowPrice)
    }
    //console.log("LAST:"+list)
    return list

}

function getRandom(max){
    return Math.floor(Math.random()*(max + 1))
}
/// Happa8式ココマデ

class App extends React.Component{
    constructor(props){
        super(props);
        this.playGacha = this.playGacha.bind(this)
        this.state = {
            menuList: [],
            menuListNum: [],
            sumPrice: [],
            sumCalorie: [],
            sumRed: [],
            sumGreen: [],
            sumYellow: [],
            isResultDisplay: false,
            tweetMessage: "ミールプラン500円ガチャを回したよ！"
        }
        
    }
    componentDidMount() {
        // !function(d,s,id){
        //     var js,
        //         fjs=d.getElementsByTagName(s)[0],
        //         p=/^http:/.test(d.location)?'http':'https';
        //     if(!d.getElementById(id)){
        //       js=d.createElement(s);
        //       js.id=id;
        //       js.src=p+'://platform.twitter.com/widgets.js';
        //       fjs.parentNode.insertBefore(js,fjs);
        //     }
        //   }(document, 'script', 'twitter-wjs');
    }
    playGacha(){
        console.log("Gacha")
        //var list = mealGacha(500, true)
        var list = gacha(500, kanshitaData)
        console.log(list)
        var menuListPre = []
        var sumPrice = 0
        var sumCalorie = 0
        var sumRed = 0
        var sumGreen = 0
        var sumYellow = 0
        var menuListName =[]
        for(var i in list){
            menuListPre.push(<MenuCard menuName={list[i].menu} menuPrice={list[i].price} menuCalorie={list[i].calorie}/>)
            console.log(list[i].calorie)
            menuListName.push(list[i].menu)
            sumPrice += list[i].price
            sumCalorie += list[i].calorie
            sumRed += list[i].red
            sumGreen += list[i].green
            sumYellow += list[i].yellow
        }
        var tweetMessage = "ミールプラン500円ガチャを回したよ！<br/>" + menuListName
        this.setState({
            menuList: menuListPre,
            menuListNum: list,
            sumPrice: sumPrice,
            sumCalorie: Math.round(sumCalorie*10)/10,
            sumRed: Math.round(sumRed*10)/10,
            sumGreen: Math.round(sumGreen*10)/10,
            sumYellow: Math.round(sumYellow*10)/10,
            isResultDisplay: true,
            tweetMessage: tweetMessage
        })
    }
    render(){
        
        console.log("did")
        return(
            <Containter>
                {!this.state.isResultDisplay && <Notes />}
                <Button onClick={this.playGacha}>ガチャを回す</Button>
                {this.state.menuList}
                {this.state.isResultDisplay && <ResultCard price={this.state.sumPrice} calorie={this.state.sumCalorie} red={this.state.sumRed} green={this.state.sumGreen} yellow={this.state.sumYellow} />}
                {console.log(this.state.tweetMessage)}
                <MarginOverScroll />
            </Containter>
        )
    }
    
}

const TweetButton = styled.a`
    margin: 5px;
`;

const MarginOverScroll = styled.div`
    display: block;
    height: 20vh;
    width: 100%;
`;

const Button = styled.a`
    background-color:#fff;
    color:#000;
    padding: 10px;
    font-size: 1.5rem;
    margin: 5px;
    cursor: pointer;
    font-family: sans-serif;
`;


const Containter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

render(<App/>, document.getElementById('root'))