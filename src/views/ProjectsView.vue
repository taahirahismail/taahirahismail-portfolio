<template>
    
    <div v-if="projects" class="m-2 p-3 d-flex flex-wrap justify-content-center">
        <projects-comp
        v-for="project of projects"
        :key="project.id"
        :project="project"/>
    </div>

    <div v-else>
        Something's wrong, baba...
    </div>
</template>

<script>
import ProjectsComp from "@/components/Projects-comp.vue";

export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },

    mounted() {
        this.$store.dispatch("getProjects");
    },

    components: {ProjectsComp}
}
</script>

<style>
    
</style>