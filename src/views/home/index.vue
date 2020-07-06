<template>
    <div>
        <Header />
        <Slider />
    </div>
</template>

<script>
import Header from "@/layout/Header";
import Slider from "./components/HeaderSlider";
export default {
    name: "Home",
    components: {
        Header,
        Slider
    }
}
</script>

<style scoped>

</style>