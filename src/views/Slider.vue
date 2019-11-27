<template>
    <div class="fullpage-container">
        <div class="fullpage-wp" v-fullpage="opts">
            <div class="page-1 page">
                <p class="part-1" v-animate="{value: 'bounceInLeft'}">vue-fullpage</p>
                <p v-animate="{value: 'slideInUp'}" class="part-1 shouzhi"></p>
            </div>
            <div class="page-2 page">
                <p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
                <p v-animate="{value: 'slideInUp'}" class="part-2 shouzhi"></p>
            </div>
            <div class="page-3 page">
                <p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'bounceInRight', delay: 600}">vue-fullpage</p>
                <p class="part-3" v-animate="{value: 'zoomInDown', delay: 1200}">vue-fullpage</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            opts: {
                start: 0,
                dir: "v",
                loop: false,
                duration: 300,
                beforeChange: function(prev, next) {
                    console.log("before", prev, next);
                },
                afterChange: function(prev, next) {
                    console.log("after", prev, next);
                }
            }
        };
    }
};
</script>

<style>
/* .fullpage-container {
    width: 300px;
    height: 450px;
} */
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.page {
    display: block;
    text-align: center;
    font-size: 26px;
    color: #eee;
}
.page-1 {
    padding-top: 100px;
    background: #1bbc9b;
}
.page-2 {
    padding-top: 100px;
    background: #000000;
}
.page-3 {
    padding-top: 50px;
    background: #aabbcc;
}
.shouzhi{
    position: absolute;
    background: url("./../store/imges/shouzhi.png");
    background-position: 50%;
    background-size: 100% 100%;
    width: 200px;
    height: 200px;
    bottom: 0;
    z-index: 100;
    left: 50%;
    margin: 0 -100px;
}
</style>