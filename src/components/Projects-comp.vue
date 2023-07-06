<template>
  <div class="card m-2 col-5 dark-pink-bg brown-border">
    <router-link
      :to="{ title: 'project', params: { id: project.id } }"
      class="routerlink"
    >
      <img
        :src="project.img"
        :alt="project.title"
        class="d-block w-100"
        loading="lazy"
        style="width: 100%;"
      />
      <h5 class="text-center pt-3">{{ project.title }}</h5>
    </router-link>

    <p class="text-center">
      {{ project.desc }}
    </p>
    <ul
      class="d-flex p-0 gap-2 justify-content-center"
      style="list-style: none"
    >
      <li>
        <a
          :href="project.github"
          target="_blank"
          class="btn brown-btn"
          >Github</a
        >
      </li>
      <li>
        <a
          :href="project.netlify"
          target="_blank"
          class="btn brown-btn"
          >Netlify</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["project"]
};
</script>

<style>
* {
    color: #492F10;
}
.routerlink {
    color: #492F10;
    text-decoration: none;
}

.routerlink:hover {
    color: #FDD2BF;
}

.dark-pink-bg {
  background-color: #DF5E5E;
}

.brown-btn {
  border: 1px solid #492F10;
  color: #492F10;
}

.brown-btn:hover {
  background-color: #492F10;
  color: #DF5E5E;
}
</style>