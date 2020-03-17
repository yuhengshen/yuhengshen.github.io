import React from 'react'
import ReactDOM from 'react-dom'
import { Player } from 'react-music-widget'

const div = document.createElement('div')
const url = "http://up_mp4.t57.cn/2018/1/03m/13/396131229550.m4a"
const musicList = [{
    url,
    name: '最美的期待-周笔畅'

}]
ReactDOM.render(<Player musicList={musicList} autoPlay={false} position={'bottom'} auto />, div)
document.body.appendChild(div)

document.body.style.background = "linear-gradient(45deg, #3498db, #9b59b6)"
