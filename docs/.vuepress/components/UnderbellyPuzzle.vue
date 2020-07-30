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
        :class="['panel', `panel-${i}`]"
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
      <div class="wire wire-0-1" />
      <div class="wire wire-0-2" />
      <div class="wire wire-1-3-1" />
      <div class="wire wire-1-3-2" />
      <div class="wire wire-1-3-3" />
      <div class="wire wire-2-3" />
      <div class="wire wire-3-4" />
      <div class="wire wire-0-4" />
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
    darkTheme() {
      return localStorage.getItem('dark-theme');
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
    width 100%
    --panel-width 2.7em
    display grid
    grid-template-columns var(--panel-width) repeat(4, 1fr var(--panel-width))
    grid-template-rows repeat(6, 2fr) 
    justify-content space-between
    max-height 28em

    @media (min-width 400px)
      --panel-width 3.7em

    @media (min-width 720px)
      --panel-width 4em
    
    @media (min-width 960px)
      --panel-width 4.5em

    .wire
      --border-width 5px
      position relative
      border var(--border-width) solid yellow
      border-image repeating-linear-gradient(45deg, goldenrod 0.1em, goldenrod 0.9em, teal 1.1em, teal 1.9em, goldenrod 2.1em)
      border-image-slice 1
      z-index -1

      &.wire-0-1
        grid-area 2 / 2 / 3 / 4
        top 50%
        left 0
        width calc(100% - var(--panel-width) / 2 + var(--border-width))
        height 50%
        border-bottom 0
        border-left 0

      &.wire-0-2
        grid-area 1 / 1 / 2 / 6
        top 25%
        left 2.25em
        width calc(100% - 3em + var(--border-width) / 2)
        height 75%
        border-bottom 0
      
      &.wire-1-3-1
        grid-area 5 / 4 / 7 / 6
        top 0
        left 0
        width calc(100% + var(--border-width))
        height 75%
        border-top 0
        border-left 0
      
      &.wire-1-3-2
        grid-area 5 / 5 / 4 / 7
        top 50%
        left var(--panel-width)
        width calc(100% - var(--panel-width))
        height 50%
        border-bottom 0
        border-right 0

      &.wire-1-3-3
        grid-area 7 / 3 / 5 / 4
        top 0
        left calc(var(--panel-width) / 2 - var(--border-width) / 2)
        width calc(100% - var(--panel-width) / 2 + var(--border-width) / 2)
        height 75%
        border-top 0
        border-right 0

      &.wire-2-3
        grid-area 3 / 5 / 1 / 8
        top 3em
        left 2.25em
        width calc(100% - 3em + var(--border-width) / 2)
        height calc(100% - 3em)
        border-bottom 0

      &.wire-3-4
        grid-area 3 / 7 / 1 / 10
        top 20%
        left 1.25em
        width calc(100% - 3em + var(--border-width) / 2)
        height 80%
        border-bottom 0

      &.wire-0-4
        grid-area 6 / 1 / 4 / 10
        top 0
        left calc(var(--panel-width) / 2)
        width calc(100% - var(--panel-width) + var(--border-width) / 2)
        height 100%
        border-top 0

    .panel
      width 100%
      box-sizing unset
      border 2px solid
      display flex
      flex-direction column
      align-items center
      cursor pointer
      height 100%

      &.panel-0
        grid-area 2 / 1 / 4 / 2

      &.panel-1
        grid-area 3 / 3 / 5 / 4

      &.panel-2
        grid-area 2 / 5 / 4 / 6

      &.panel-3
        grid-area 3 / 7 / 5 / 8

      &.panel-4
        grid-area 2 / 9 / 4 / 10

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
        height 100%

      .total-value-not-10
        background-color darkred
        color white
      
      .total-value-10
        background-color green
        color white

.yuu-theme-dark .container .puzzle-container .wire
  border-image-source repeating-linear-gradient(45deg, yellow 0.1em, yellow 0.9em, coral 1.1em, coral 1.9em, yellow 2.1em)

</style>