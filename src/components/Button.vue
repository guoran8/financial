<template>
    <div :class="[buttonClass, className]">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        className: {
            type: String,
            default: "",
        }
    },
    data: () => ({
        buttonClass: "button"
    })
}
</script>

<style lang="scss" scoped>
@import "../styles/element.scss";
.button {
    @include button;
}
</style>