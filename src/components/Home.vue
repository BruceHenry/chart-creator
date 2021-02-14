<template>
    <div id="home">
        <div id="home-container">
            <HomeNavOption label="Bar" path="/chart/bar" image-path="img/bar.png"></HomeNavOption>
            <HomeNavOption label="Line" path="/chart/line" image-path="img/line.png"></HomeNavOption>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";
import HomeNavOption from "./HomeNavOption.vue";

export default defineComponent({
    name: "home",
    components:{
        HomeNavOption
    },
    setup() {
    }
});
</script>

<style scoped>
#home {
    text-align: center;
}
#home-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>
