<template>
    <div>
        <ul>
            <li v-for="(item, index) in note" :key="index">
                <img class="side" src="~images/social/sidebar2.png"/>
                <div class="left">
                    <div class="time">{{item.time}}</div>
                    <div v-if="item.event" class="event">
                        <img class="somebody" :src="item.event.somebody"/>
                        <div class="detail">{{item.event.detail}}</div>
                    </div>
                    <div class="content">
                        <img class="roundImg" :src="item.roundImg"/>
                        <div class="word">
                            <div class="title">标题：{{item.title}}</div>
                            <div class="tag">标签：{{item.tag}}</div>
                            <div class="username">jio雯婷</div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MessageList",
    data(){
        return {
            note: [{
                event: {
                    somebody: require('images/social/dove.png'),
                    detail: '鸽子琨领取了'
                },
                time: '7月16日17：30',
                title: '有人帮我带奶茶吗',
                tag: '生活',
                roundImg: require('images/social/man.png')
            }, {
                time: '7月16日17：14',
                title: '有人帮我带奶茶吗',
                tag: '生活',
                roundImg: require('images/social/man.png')
            }]
        }
    }
}
</script>

<style scoped>
ul{
    width: 3.05rem;
    top: 0.4rem;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
}
.time{
    font-size: 0.15rem;
    color: #ffffff;
    margin-bottom: 0.07rem;
}
.event{
    height: 0.31rem;
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    vertical-align: middle;
}
.somebody{
    width: 0.31rem;
    height: 0.31rem;
    border-radius: 0.31rem;
    vertical-align: middle;
}
.detail{
    height: 0.31rem;
    line-height: 0.31rem;
    color: white;
    vertical-align: middle;
    display: inline-block;
    font-size: 0.14rem;
}
.side{
    width: 0.2268rem;
    height: 1.79rem;
    display: inline-block;
    vertical-align: middle;
}
.left{
    display: inline-block;
    margin-top: 0;
    position: relative;
    vertical-align: top;
}
.content{
    width: 2.6613rem;
    height: 0.862rem;
    background: linear-gradient(to left, #060606, #484848);
    position: relative;
}
.word{
    color: #ffffff;
    font-size: 0.13rem;
    position: absolute;
    left: 1rem;
    top: 0.09rem;
}
.title{
    margin-bottom: 0.05rem;
}
.tag{
    margin-bottom: 0.08rem;
}
.username{
    font-size: 0.09rem;
}
.heart{
    width: 0.1665rem;
    height: 0.15rem;
    background-image: url("~images/social/heart.png");
    background-size: 100% 100%;
}
.roundImg{
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 0.7rem;
    left: 0.1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
}
</style>