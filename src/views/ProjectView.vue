<template>
    <div v-if="project">
        <img :src="project.img" :alt="project.title">
        <h5>{{ project.title }}</h5>
        <p>{{ project.desc }}</p>
        <a :href="project.github" class="btn btn-outline-danger">GitHub</a>
        <a :href="project.netlify"  class="btn btn-outline-danger">Netlify</a>
    </div>
</template>

<script>
export default {
    props: ["id"],

    computed: {
        project() {
            return this.$store.state.project;
        }
    },

    mounted() {
        this.$store.dispatch("getProject", this.id);
    }
}
</script>

<style>
    
</style>