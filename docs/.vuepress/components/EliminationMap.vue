<template>
<div class="map">
  <component :is="elimination" />
</div>
</template>

<script>
import Elimination1 from './EliminationMaps/Elimination1.vue';
import Elimination2 from './EliminationMaps/Elimination2.vue';
import Elimination3 from './EliminationMaps/Elimination3.vue';

export default {
  name: 'EliminationMap',
  props: {
    num: {
      type: Number,
      validator(val) { return [1, 2, 3].includes(val); },
    }
  },
  computed: {
    elimination() { return [Elimination1, Elimination2, Elimination3][this.num - 1]; },
  },
}
</script>

<style lang="stylus" scoped>
.map >>> svg
  width 100%
  text
    font-family inherit
    font-size 0.75em

  polygon
    fill transparent
  
  g
    &.edge path
    &.node polygon
      stroke currentColor
    &.node text
      fill currentColor
</style>