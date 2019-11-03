<template>
  <div class="main-card">
    <div>
      <div class="flex-column">
        <div>
          <div class="captioned-image">
            <img :src="$frontmatter.scenarioPic" />
            <div>
              <q>{{ $frontmatter.flavorText }}</q>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h4>Objectives:</h4>
          </div>
          <div>
            <ul>
              <li v-for="o in $frontmatter.objectives">{{ o }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScenarioOverviewCard"
};
</script>

<style lang="stylus">
.main-card {
  display: flex;
  justify-content: center;
}

.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
}

.captioned-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.captioned-image q {
  font-size: 0.9em;
}

.flex-column ul
  margin-top -1em

</style>