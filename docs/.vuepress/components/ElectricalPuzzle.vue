<template>
  <div :style="{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}">
    <div :style="{
      '--square-width': '4em',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, var(--square-width))',
      gridTemplateRows: 'repeat(4, var(--square-width))',
      alignItems: 'center',
      justifyItems: 'center',
      gridGap: 0}">
      <div v-for="(on, i) in buttonStates" :key="i" :style="{
        border: '2px solid black',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '3em',
        backgroundColor: on ? 'lightgray' : 'darkslategray'
        }"
        @click="() => onButtonClick(i)" />
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
      buttonStates: [
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
        false, false, false, false,
      ],
    };
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

      this.buttonStates = this.buttonStates.map((b, i) => positions.includes(i) ? !b : b);
    }
  }
};
</script>

<style lang="stylus" scoped>

</style>
