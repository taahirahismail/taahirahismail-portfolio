<template>
  <div class="text-center m-2">
    <DetailsComp />
  </div>

  <div class="card m-2 p-3 purple-bg brown-border">
    <h3 class="text-center card m-2 p-3 light-purple-bg brown-border">
      My Projects (so far!)
    </h3>

    <div
      v-if="projects"
      class="m-2 p-3 d-flex flex-wrap justify-content-center"
    >
      <div
        v-for="project of projects"
        :key="project.id"
        :project="project"
        id="projects-card"
        class="card m-2 dark-purple-bg brown-border fix-width"
      >
        <iframe
          :src="project.netlify"
          :alt="project.title"
          class="d-block w-100"
          style="width: 100%; height: 400px"
          frameborder="0"
        ></iframe>
        <h5 class="text-center pt-3 brown-text">{{ project.title }}</h5>

        <p class="text-center brown-text">
          {{ project.desc }}
        </p>
        <ul
          class="d-flex p-0 gap-2 justify-content-center"
          style="list-style: none"
        >
          <li>
            <a :href="project.github" target="_blank" class="btn brown-btn"
              >Github</a
            >
          </li>
          <li>
            <a :href="project.netlify" target="_blank" class="btn brown-btn"
              >Netlify</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div v-else class="text-center">wait for it...</div>
  </div>
</template>

<script>
import DetailsComp from "@/components/Details-comp.vue";

export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  mounted() {
    this.$store.dispatch("getProjects");
  },

  components: { DetailsComp },
};
</script>

<style>
.brown-text {
  color: #492f10;
}

.light-purple-bg {
  background-color: #e6c4c0;
}

.dark-purple-bg {
  background-color: #926e6f;
}

.purple-bg {
  background-color: #ca8a8b;
}

.brown-border {
  border: 3px solid #492f10;
}

.brown-btn {
  border: 1px solid #492f10;
  color: #492f10;
}

.brown-btn:hover {
  background-color: #492f10;
  color: #ca8a8b;
}

#projects-card:hover {
  transform: translate3D(0, -1px, 0) scale(1.03);
  box-shadow: 8px 28px 50px #492f10, 1px 6px 12px #492f10;
  transition: all 0.4s ease;
}

.fix-width {
  width: 48%;
}

@media screen and (max-width: 900px) {
  .fix-width {
    width: 100%;
  }
}
</style>
