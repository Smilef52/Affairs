<template>
    <div class="message">
        <message-header></message-header>
        <message-list></message-list>
        <bottom-column></bottom-column>
    </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn"
import MessageHeader from "@/pages/message/components/Header"
import MessageList from "@/pages/message/components/List"
export default {
    name: "Message",
    components: {
        MessageHeader,
        BottomColumn,
        MessageList
    }
}
</script>

<style scoped>
.message{
    width: 100%;
    height: 6.02rem;
    background-image: url("~images/message/bgImg.png");
    background-size: 100% 100%;
}
</style>