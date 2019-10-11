<template>
    <div>
        <ul>
            <li v-for="(item, index) in note" :key="index">
                <img class="side" src="~images/social/sidebar.png"/>
                <div class="right">
                    <div class="time">{{item.time}}</div>
                    <div class="content">
                        <div class="word">
                            <div class="username">{{item.username}}</div>
                            <div class="detail" v-if="item.detail">{{item.detail}}</div>
                            <div class="heart" v-if="!item.detail"></div>
                        </div>
                        <img class="roundImg" :src="item.roundImg"/>
                        <img class="squareImg" :src="item.squareImg"/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SocialList",
    data(){
        return {
            note: [{
                time: '下午17：34',
                username: '格子琨',
                detail: '大爷，下次我请你',
                roundImg: require('images/social/dove.png'),
                squareImg: require('images/social/man.png')
            }, {
                time: '下午17：34',
                username: '格子琨',
                roundImg: require('images/social/dove.png'),
                squareImg: require('images/social/man.png')
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
.side{
    width: 0.19rem;
    height: 1.545rem;
    display: inline-block;
    vertical-align: middle;
}
.right{
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
    font-size: 0.1rem;
    position: absolute;
    left: 0.77rem;
    top: 0.17rem;
}
.username{
    font-weight: bold;
    margin-bottom: 0.07rem;
}
.detail{
    font-size: 0.09rem;
}
.heart{
    width: 0.1665rem;
    height: 0.15rem;
    background-image: url("~images/social/heart.png");
    background-size: 100% 100%;
}
.roundImg{
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 0.45rem;
    left: 0.159rem;
    position: absolute;
    top: 0.1621rem;
}
.squareImg{
    position: absolute;
    right: 0.0753rem;
    top: 0.1255rem;
    width: 0.6026rem;
    height: 0.6026rem;
}
</style>