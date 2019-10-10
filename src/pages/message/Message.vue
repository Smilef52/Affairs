<template>
    <div>
        <message-header></message-header>
        <bottom-column></bottom-column>
    </div>
</template>

<script>
import BottomColumn from "@/common/bottomColumn/BottomColumn"
import MessageHeader from "@/pages/message/components/Header"
export default {
    name: 'Message',
    components: {
        BottomColumn,
        MessageHeader
    }
}
</script>

<style scoped>

</style>