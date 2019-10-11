<template>
    <div class="social-header">
        社交
    </div>
</template>

<script>
export default {
    name: "SocialHeader"
}
</script>

<style scoped>
.social-header{
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    height: 0.67rem;
    width: 100%;
    background: linear-gradient(to right, #040309, #7B7B7B);
    text-align: center;
    color: #FFFBC4;
    font-size: 0.18rem;
    line-height: 0.67rem;
}
</style>