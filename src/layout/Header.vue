<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <a>注册</a> ｜ <a>登陆</a>
        </span>
        <Button :class="$style.download">APP下载</Button>
    </div>
</template>
<script>
import Button from '@/components/Button';
export default {
    components: {
        Button
    },
    name: "Header"
}
</script>

<style lang="scss" module>
.header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 100px;
    line-height: 100px;
    font-size: 32px;
    color: #666666;
    background: url("https://storage.360buyimg.com/base/images/jdjr-logo/logo-jr-r.png") no-repeat center;
    background-size: auto 50%;
    z-index: 100;
    .left {
        margin: 17px 0 0 18px;
        height: 30px;
        line-height: 30px;
        font-size: 20px;
    }
    .download {
        float: right;
        margin: 28px 24px 0 0;
        padding: 0;
        min-width: 120px;
        height: 56px;
        line-height: 56px;
        border-width: 0;
        border-radius: 4px;
        font-size: 24px;
    }
}
</style>