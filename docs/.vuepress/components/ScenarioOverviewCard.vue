<template>
<div>
    <div>
        <img :src="$frontmatter.scenarioPic">
    </div>
    <div>
        <div>
            <ul>
                <li v-for="o in $frontmatter.objectives">{{ o }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ScenarioOverviewCard'
}
</script>