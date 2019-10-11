<template>
    <div class="message">
        <message-header></message-header>
        <message-list class="fixedHeight"></message-list>
        <bottom-column></bottom-column>
    </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn"
import MessageHeader from "@/pages/message/components/Header"
import MessageList from "@/pages/message/components/List"
export default {
    name: 'Message',
    components: {
        BottomColumn,
        MessageHeader,
        MessageList
    }
}
</script>

<style scoped>
.message{
    width: 100%;
    height: 6.02rem;
    background-image: url("~images/social/bgImg.png");
    background-size: 100% 100%;
}
.fixedHeight{
    top: 0.67rem;
    height: 5.35rem;
    width: 100%;
    position: fixed;
    overflow: auto;
}
</style>