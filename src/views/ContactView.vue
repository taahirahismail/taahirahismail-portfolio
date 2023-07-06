<template>
  <div class="d-flex">
    <contact-form-comp />

    <div class="p-3 hide">
      <div class="card p-3 dark-blue-bg brown-border">
        <h3 class="card p-3 text-center light-bg brown-border">
          What other people contact me for:
        </h3>

        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "Why don't you put some quotes from people in your life to cover this
          (previously) empty space." <br />
          <cite>-Lyle Brown, 2023</cite>
        </p>
        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "When life gives you lemons, make chocolate cake." <br />
          <cite>-Cheslyn Herman, 2023</cite>
        </p>
        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "Ehhh." <br />
          <cite>-Lyle Kepkey, 2023 (when asked how he's feeling)</cite>
        </p>
        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "Um, whatchamacallit, how do you spell your name again?" <br />
          <cite>-Waydin Jochem, 2023 (when asked if he knows my name)</cite>
        </p>
        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "Yes." <br />
          <cite
            >-Timothy (T-money) Barry, 2023 (when asked for motivation)</cite
          >
        </p>
        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "For what?" <br />
          <cite>-Jadee Paulse, 2023 (when asked for inspiration)</cite>
        </p>
        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "Uhh... um... uhh... uh, idk work hard, you can do it!" <br />
          <cite>-Caryn Lodewyk, 2023</cite>
        </p>
        <p class="card text-sm-start m-2 p-2 purple-bg brown-border-thin">
          "Um, I was thinking about my buttons." <br />
          <cite>-Ethan Lesar, 2023 (when asked what was on his mind)</cite>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ContactFormComp from "@/components/ContactForm-comp.vue";

export default {
  components: { ContactFormComp },
};
</script>

<style>
.purple-bg {
  background-color: #F7E1AE;
}

.brown-border-thin {
  border: 1px solid #492f10;
}
</style>
