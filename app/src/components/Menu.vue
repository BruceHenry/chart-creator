<template>
    <div id="menu-container">
        <form>
            <div>
                <label>Title:</label>
                <input v-model="model.title.text" type="text"/>
            </div>
            <div>
                <label>Legend:</label>
                <input type="checkbox" v-model="model.legend.show"/>
            </div>
            <div >
                <h2>Series:</h2>
                  <div v-for="(item, index) in model.series" :key="index">
                    <label>Name:</label>
                    <input v-model="item.name" @input="model.legend.data[index]=item.name" type="text"/>
                    <input v-model="item.itemStyle.color" type="color"/>
                    <hr>
                  </div>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'menu',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      model: props.option
    }
  }
});
</script>

<style>
#menu-container {
    width: 600px;
    height: 300px;
    background-color: beige;
    align-content: left;
}
</style>