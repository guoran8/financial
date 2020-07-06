<template>
    <section :class="[panelClass, className]">
        <h4>-{{ title }}-</h4>
        <div>{{ content }}</div>
    </section>
</template>

<script>
export default {
    name: "Panel",
    data: () => ({
        panelClass: "panel"
    }),
    props: {
        title: {
          type: String,
          default: ""
        },
        className: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/element";
.panel {
    @include panel;
}
</style>