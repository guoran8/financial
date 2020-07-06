<template>
<section class="swiper">
    <Swiper :options="options" :not-next-tick="options.notNextTick">
        <SwiperSlide v-for="item in items" :key="item.href">
            <router-link :to="{ name: item.href }">
                <img :src="item.src" atl="">
            </router-link>
        </SwiperSlide>
        <div class="swiper-pagination" v-if="options.pagination" />
    </Swiper>
</section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
export default {
    name: "Slider",
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        options: {
            type: Object,
            default: () => ({
                autoplay: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination'
                },
                notNextTick: false
            })
        },
        items: {
            type: Array,
            default: () => (
                [{href: '', src: ''}]
            )
        }
    }
}
</script>

<style lang="scss" scoped>

</style>