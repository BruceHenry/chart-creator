<template>
    <div id="menu-container">
        <form>
            <div>
                <label>Title:</label>
                <input v-model="model.title.text"/>
            </div>
            <div>
                <label>Title:</label>
                <input v-model="model.title.text"/>
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
}
</style>