<template>
    <article>
        <Slider :className="$style.slider" :items="items" />
        <section class="list">
            <div
              class="item"
              v-for="item in enters"
              :key="item.img"
            >
                <router-link :to="{ name: item.href }">
                    <img :src="item.img" :alt="item.title" />
                    <span>{{ item.title }}</span>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from '@/components/Slider';

export default {
    components: {
        Slider
    },
    data: () => ({
        items: [
            {
                href: "home",
                src: "https://img20.360buyimg.com/mcpageview/jfs/t1/122349/17/1613/199131/5ebe417bE9608b120/2d1eafa4647e5801.jpg"
            },
            {
                href: "home",
                src: "https://img20.360buyimg.com/mcpageview/jfs/t1/106678/1/12210/92914/5e4535daE1770d4c3/30137746303353c1.jpg"
            },
            {
                href: "home",
                src: "https://img20.360buyimg.com/mcpageview/jfs/t1/93607/27/9768/38387/5e11d688E04270824/2d9495f7de2365ca.jpg"
            }
        ],
        enters: [
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png",
                title: "优惠券"
            },
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/90523/1/9767/16031/5e11d735E29291893/7ea1474e22f075a3.png",
                title: "领钢镚"
            },
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png",
                title: "白条提额"
            },
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png",
                title: "领京豆"
            },
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png",
                title: "工资理财"
            },
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/101963/37/9857/11372/5e11d7a7E05793a8e/f9371aee1e18ae9a.png",
                title: "京东众筹"
            },
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/110353/31/6597/13152/5e4f4579Ecefc0163/bf2e3ec63adfa15c.png",
                title: "1元扭蛋机"
            },
            {
                href: "home",
                img: "https://img20.360buyimg.com/mcpageview/jfs/t1/85137/14/9816/10770/5e11d7ddE2805969c/9f4f3cdcfeb204e5.png",
                title: "免息红包"
            }
        ]
    })
}
</script>

<style lang="scss" module>
@import "@/styles/element.scss";
.slider {
    margin-top: 120px;
}
.list {
    @include list(row);
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    background: #FFFFFF;
    a {
        text-decoration: none;
    }
    .item {
        text-align: center;
        img {
            display: inline-block;
            width: 90px;
            height: 90px;
        }
        h4 {
            margin-top: 12px;
            font-size: 26px;
            color: #666666;
        }
    }
}

</style>