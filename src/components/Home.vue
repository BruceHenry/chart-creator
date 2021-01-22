<template>
    <div id="home">
        <h1>Home Page</h1>
        <p>
            <router-link to="/chart/bar">Bar</router-link>
        </p>
        <p>
            <router-link to="/chart/line">Line</router-link>
        </p>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {}
</script>

<style scoped>
#home {
    text-align: center;
}
</style>
