<template>
    <div id="nav">
        <!-- <router-link to="/">Home</router-link> |
        <router-link to="/bar">Bar</router-link> -->
    </div>
    <router-view />
</template>

<style>
#nav {
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
