<template>
    <div class="card m-2 p-3 pink-bg brown-border">
        <h3 class="text-center card m-2 p-2 light-bg brown-border">
                        Education & Experience
                      </h3>
        
        <div v-if="projects" class="m-2 p-3 d-flex flex-wrap justify-content-center">
            <projects-comp
            v-for="project of projects"
            :key="project.id"
            :project="project"
            id="projects-card"/>
        </div>
    
        <div v-else>
            Something's wrong, baba...
        </div>
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
    #projects-card:hover {
        transform: translate3D(0,-1px,0) scale(1.03);
        box-shadow: 8px 28px 50px #492F10, 1px 6px 12px #492F10;
  transition: all .4s ease;
    }
</style>