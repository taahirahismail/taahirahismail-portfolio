<template>
  <div class="text-center m-2">
    <DetailsComp />
  </div>

  <div class="card m-2 p-3 text-center purple-bg brown-border brown-text">
    <h4 class="card p-3 light-purple-bg brown-border-thin">
      Some (self-proclaimed) interesting information about me!
    </h4>
    <p class="p-2">
      Hi, I'm Taahirah Ismail! Welcome to my profile. Stay a while, make
      yourself comfortable. There isn't too much to know about me, but after
      reading this you should feel like we're besties!
    </p>
    <p class="p-2">
      I'm currently 24 years old. My hobbies include a lot of outdoor activities
      like gardening, hiking, going to the beach. I really like the fresh air,
      you know? I also really love talking to and meeting new people, listening
      to their experiences and learning from them. I'm a very curious person by
      nature, which is also why I decided to go into the tech industry. What can
      I say? I just like breaking things apart and knowing how they function.
    </p>
    <p class="p-2">
      In 2016, I matriculated from South Peninsula High School as a top
      achiever. After that, I got my BSc degree (as well as a BScHons) from
      Stellenbosch University, because again, I just like knowing how things
      work (in this case, it was how our bodies function on a cellular level).
    </p>
    <p class="p-2">
      I'm really looking forward to the start of my career in web development,
      because I feel like for the first time in my life, I'm doing something
      that makes me happy and that I can be proud of. I hope to achieve big
      things, so stick around to see that happen!
    </p>
  </div>

  <div
    v-if="playlist"
    class="card m-2 p-3 text-center purple-bg brown-border brown-text"
  >
    <h4 class="card p-3 light-purple-bg brown-border-thin">
      Taahirah's Playlist of Passions:
    </h4>

    <div class="playlist-container">
      <div
        v-for="song of playlist"
        :key="song.name"
        :song="song"
        class="song-card"
      >
        <img :src="song.img" :alt="song.name" class="song-img" />
      </div>
    </div>
  </div>

  <div v-else>still coming...</div>
</template>

<script>
import DetailsComp from "@/components/Details-comp.vue";

export default {
  computed: {
    playlist() {
      return this.$store.state.playlist;
    },
  },

  mounted() {
    this.$store.dispatch("getPlaylist");
  },

  components: { DetailsComp },
};
</script>

<style>
.brown-text {
  color: #492f10;
}

.dark-purple-bg {
  background-color: #926e6f;
}

.light-purple-bg {
  background-color: #e6c4c0;
}

.brown-border {
  border: 3px solid #492f10;
}

.brown-border-thin {
  border: 2px solid #492f10;
}

.playlist-container {
  display: flex;
  overflow: auto;
  white-space: nowrap;
  padding: 10px;
}

.song-img {
  max-height: 500px;
}

.song-card {
  border: 2px solid #492f10;
  border-radius: 5px;
  background-color: #926e6f;
  margin: 5px;
  padding: 5px;
  max-height: 600px;
}

.song-card:hover {
  transform: translate3D(0, -1px, 0) scale(1.03);
  box-shadow: 8px 28px 50px #492f10, 1px 6px 12px #492f10;
  transition: all 0.4s ease;
}
</style>
