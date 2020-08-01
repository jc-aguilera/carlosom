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
    <div class="electrical-panel">
      <div v-for="(on, i) in currentValues" :key="i"
        :class="['electrical-button', `electrical-button-${on ? 'on' : 'off' }`]"
        @click="() => onButtonClick(i)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElectricalPuzzle',
  props: {
    scenario: {
      type: String,
      validator(value) {
        return ['hellfire', 'decisions-decisions'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      states: {
        'decisions-decisions': {
          'Very Hard': [
            [
              false, false, false, false,
              false, false, false, false,
              false, false, false, false,
              false, false, false, false,
            ],
            [
              false, false, false, false,
              true, false, false, false,
              false, false, false, true,
              false, false, false, false,
            ],
          ],
          'Hard': [
            [
              false, false, true, true,
              false, false, false, false,
              false, false, false, false,
              true, true, false, false,
            ], 
            [
              false, true, false, false,
              false, true, false, false,
              false, true, true, true,
              false, false, false, false,
            ],
          ],
          'Normal': [
            [
              true, false, false, true,
              false, false, false, false,
              false, false, false, false,
              true, false, false, true,
            ],
            [
              false, true, false, false,
              false, true, false, false,
              false, false, true, false,
              false, false, true, false,
            ],
          ],
          'Easy': [
            [
              false, false, true, true,
              false, false, true, true,
              true, true, false, false,
              true, true, false, false,
            ],
            [
              true, true, true, true,
              true, false, false, true,
              true, false, false, true,
              true, true, true, true,
            ],
          ]
        },
        'hellfire': {
          'Very Hard': [
            [
              false, true, true, false,
              true, true, true, true,
              true, true, true, true,
              false, true, true, false,
            ],
            [
              true, true, true, true,
              true, false, false, true,
              true, false, false, true,
              true, true, true, true,
            ],
          ],
          'Hard': [
            [
              true, false, false, false,
              false, false, true, false,
              false, true, false, false,
              false, false, false, true,
            ],
            [
              true, true, true, true,
              false, false, false, false,
              false, false, false, false,
              true, true, true, true,
            ],
          ],
          'Normal': [
            [
              true, false, false, true,
              false, false, false, false,
              false, false, false, false,
              true, false, false, true,
            ],
            [
              false, true, true, false,
              true, false, false, true,
              true, false, false, true,
              false, true, true, false,
            ],
          ],
          'Easy': [
            [
              false, false, false, false,
              false, false, false, false,
              false, false, false, false,
              false, false, false, false,
            ],
          ]
        }
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
    initialValues() {
      return this.states[this.scenario];
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
        ])
        .reduce((p, c) => [...p, ...c])
        .filter((e) => !!e.values);
    },
  },
  methods: {
    onButtonClick(i) {
      this.changeButtonState(this.calculateCoordinates(i));
    },
    calculatePosition(coordinates) {
      return coordinates[0] * 4 + coordinates[1]
    },
    calculateCoordinates(position) {
      return [(position - (position % 4)) / 4, position % 4];
    },
    changeButtonState (coordinates) {
      let coordinatessToChange = coordinates;  // Assume 'coordinates' is a two-element list
      let adjacentCoordinates = 
      {
        'hellfire': [
          [coordinates[0], coordinates[1] - 1],
          [coordinates[0], coordinates[1] + 1],
          [coordinates[0] - 1, coordinates[1]],
          [coordinates[0] + 1, coordinates[1]]
        ],
        'decisions-decisions': [
          [coordinates[0] - 1, coordinates[1] - 1],
          [coordinates[0] - 1, coordinates[1] + 1],
          [coordinates[0] + 1, coordinates[1] - 1],
          [coordinates[0] + 1, coordinates[1] + 1]
        ],
      }[this.scenario];
      adjacentCoordinates = adjacentCoordinates.filter((c) => c[0] >= 0 && c[0] <= 3 && c[1] >= 0 && c[1] <= 3)
      let positions = [this.calculatePosition(coordinatessToChange), ...adjacentCoordinates.map(this.calculatePosition)]

      this.currentValues = this.currentValues.map((b, i) => positions.includes(i) ? !b : b);
    }
  }
};
</script>

<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  align-items center
  flex-direction column

  .select
    padding-bottom 2em
  
  .electrical-panel
    --square-width 4em
    display grid
    grid-template-columns repeat(4, var(--square-width))
    grid-template-rows repeat(4, var(--square-width))
    align-items center
    justify-items center
    grid-gap 0

    .electrical-button
      border 2px solid black
      height 100%
      width 100%
      display flex
      justify-content center
      align-items center
      font-size 3em

      &.electrical-button-on
        background-color lightgray
      
      &.electrical-button-off
        background-color darkslategray
</style>
