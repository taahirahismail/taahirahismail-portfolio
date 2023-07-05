<template>
  <div class="container right">
    <div class="content">
      <h4>{{ experience.year }}</h4>
      <p><em>{{ experience.title }} &bull; {{ experience.place }}</em></p>
      <p>{{ experience.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ["experience"]
};
</script>

<style>
 
</style>