<template>
  <div class="container">
    <div class="select">
      <select v-model="variation">
        <option v-for="(p, i) in puzzleOptions" :key="p.text" :value="i">
          {{ p.text }}
        </option>
      </select>
      <button @click="variation = variation">Reset</button>
    </div>
    <div class="puzzle-container">
      <div v-for="(data, i) in panelData" :key="i"
        class="panel"
        @click="() => onClick(i)"
        >
        <div class="current-value">
          {{ currentValues[i] || '&nbsp;'}}
        </div>
        <div class="base-value">
          {{ data.baseValue }}
        </div>
        <div class="total-value" :class="[
          (currentValues[i] + data.baseValue) === 10
            ? 'total-value-10'
            : 'total-value-not-10'
          ]">
          {{ currentValues[i] + data.baseValue }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderbellyPuzzle',
  data() {
    return {
      panelData: [
        {
          baseValue: 10,
          connections: [1, 2, 4]
        },
        {
          baseValue: 1,
          connections: [0, 3]
        },
        {
          baseValue: 3,
          connections: [0, 3]
        },
        {
          baseValue: 6,
          connections: [1, 2, 4]
        },
        {
          baseValue: 8,
          connections: [0, 3]
        },
      ],
      initialValues: {
        'Very Hard': [
          [9, 2, 0, 4, 7],
          [7, 0, 2, 4, 9],
        ],
        'Hard': [
          [9, 0, 4, 2, 7],
          [7, 4, 0, 2, 9],
        ],
        'Normal': [
          [9, 4, 7, 2, 0],
          [7, 9, 4, 2, 0],
        ],
        'Easy': [
          [9, 4, 7, 0, 2],
          [7, 9, 4, 0, 2],
        ],
      },
      selectedVariation: 0,
      currentValues: [],
    };
  },
  mounted() {
    this.currentValues = [...this.puzzleOptions[this.variation].values];
  },
  computed: {
    variation: {
      get() { return this.selectedVariation; },
      set(v) {
        this.selectedVariation = v;
        this.currentValues = [...this.puzzleOptions[v].values];
      }
    },
    puzzleOptions() {
      return Object.keys(this.initialValues)
        .map((e) => [
          {
            text: `${e}, variation 1`,
            values: this.initialValues[e][0],
          },
          {
            text: `${e}, variation 2`,
            values: this.initialValues[e][1],
          }
        ]).reduce((p, c) => [...p, ...c]);
    },
  },
  methods: {
    onClick(index) {
      const indexOfEmpty = this.currentValues.indexOf(0);
      if (this.panelData[index].connections.includes(indexOfEmpty)) {
        this.$set(this.currentValues, indexOfEmpty, this.currentValues[index]);
        this.$set(this.currentValues, index, 0);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
div
  box-sizing border-box

.container
  width 100%
  display flex
  flex-direction column
  align-items center
  padding 1em

  .select
    padding-bottom 2em

  .puzzle-container
    width 90%
    display flex
    justify-content space-between

    .panel
      width 15%
      box-sizing unset
      border 2px solid
      display flex
      flex-direction column
      align-items center
      cursor pointer

      div
        width 100%
        text-align right 

      .current-value
        background-color goldenrod
        border-bottom 1px solid
        font-size 3em

      .base-value
        background-color teal
        border-bottom 1px solid
        font-size 2em

      .total-value
        padding 0.25em 0
        font-size 1.5em

      .total-value-not-10
        background-color darkred
        color white
      
      .total-value-10
        background-color green
        color white

</style>