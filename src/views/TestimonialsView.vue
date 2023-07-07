<template>
  <div class="text-center m-2">
    <DetailsComp />
  </div>

  <div class="card m-2 p-3 purple-bg brown-border fix-display">
    <div class="w-40">
      <div class="card p-3 dark-purple-bg brown-border light-text">
        <h5 class="card p-3 text-center light-purple-bg brown-border brown-text">
          What the People Have to Say (in General):
        </h5>
        <p class="text-sm-start p-2">
          "Add more quotes." <br />
          <cite class="brown-text">-Lyle Brown, 2023</cite>
        </p>
        <p class="text-sm-start p-2">
          "You can't force me to be funny. I'm randomly funny, not forcefully
          funny" <br />
          <cite class="brown-text">-Cheslyn Herman, 2023</cite>
        </p>
        <p class="text-sm-start p-2">
          "I feel like throwing a tantrum." <br />
          <cite class="brown-text">-Ethan Lesar, 2023</cite>
        </p>
        <p class="text-sm-start p-2">
          "Pew... ppp... pah.. pp..." <br />
          <cite class="brown-text">-Caryn Lodewyk, 2023</cite>
        </p>
        <p class="text-sm-start p-2">
          "Uh, Caryn's being weird again." <br />
          <cite class="brown-text">-Lyle Brown, 2023</cite>
        </p>
        <p class="text-sm-start p-2">
          "I'm gonna start working now." <br />
          <cite class="brown-text"
            >-Timothy (T-money) Barry, 2023 (legend says he still has yet to
            start)</cite
          >
        </p>
        <p class="text-sm-start p-2">
          "I appreciate your appreciation of my appreciation." <br />
          <cite class="brown-text">-Luke Evertson, 2023</cite>
        </p>
        <p class="text-sm-start p-2">
          "I'm just not going to say anything anymore" <br />
          <cite class="brown-text"
            >-Jadee Paulse, 2023 (she continued speaking shortly after)</cite
          >
        </p>
        <p class="text-sm-start p-2">
          "I'm helping them because Oslin's not here today. They must pay me."
          <br />
          <cite class="brown-text">-Ethan Lesar, 2023</cite>
        </p>
      </div>
    </div>

    <div
      id="carouselExampleAutoplaying"
      class="carousel slide card w-60 dark-purple-bg brown-border"
      data-bs-ride="carousel"
    >
      <h3 class="text-center card m-2 p-2 light-purple-bg brown-border brown-text">
        What the People Have to Say About Taahirah:
      </h3>
      <div class="carousel-inner">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial"
        >
          <div
            class="carousel-item"
            :class="{ active: testimonials.indexOf(testimonial) === 0 }"
          >
            <div class="justify-content-center">
              <figure class="mx-auto test-cards dark-purple-bg">
                <blockquote class="blockquote">
                  {{ testimonial.quote }}
                  <div class="arrow"></div>
                </blockquote>
                <img
                  :src="testimonial.img"
                  :alt="testimonial.name"
                  loading="lazy"
                  class="img"
                />
                <div class="p-2 author">
                  <h5 class="test-heading">
                    {{ testimonial.name }}<br />
                    <span class="test-span">{{ testimonial.relation }}</span>
                  </h5>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import DetailsComp from "@/components/Details-comp.vue";

export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },

  mounted() {
    this.$store.dispatch("getTestimonials");
  },

  components: { DetailsComp },
};
</script>

<style>
.fix-display {
  display: flex !important;
  flex-direction: row-reverse !important;
  justify-content: space-around !important;
}
.w-40 {
  width: 35%;
}

.w-60 {
  width: 60%;
}

.dark-purple-bg {
  background-color: #926e6f;
}

.light-purple-bg {
  background-color: #e6c4c0;
}

.purple-bg {
  background-color: #ca8a8b;
}

.light-text {
  color: #e6c4c0;
}

.brown-border {
  border: 3px solid #492f10;
}

.brown-border-thin {
  border: 1px solid #492f10;
}

.test-cards {
  position: relative;
  overflow: hidden;
  min-width: 220px;
  max-width: 500px;
  width: 100%;
  color: #492f10;
  text-align: left;
}

.test-cards .img {
  max-width: 100%;
  vertical-align: middle;
}

.test-cards .blockquote {
  position: relative;
  background-color: #926e6f;
  padding: 25px 50px 25px 50px;
  font-size: 1em;
  font-weight: 500;
  text-align: left;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
}

.test-cards .blockquote:before,
.test-cards .blockquote:after {
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}

.test-cards .blockquote:before {
  top: 25px;
  left: 20px;
}

.test-cards .blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0;
}

.test-cards .arrow {
  top: 100%;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 0px solid transparent;
  border-top: 25px solid #926e6f;
  margin: 0;
  position: absolute;
}

.test-cards .author {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 25px;
  color: #492f10;
  background-color: #926e6f;
  margin: 0;
  text-transform: uppercase;
}

.test-cards .author .test-heading {
  opacity: 0.8;
  margin: 0;
  font-weight: 800px;
}

.test-cards .author .test-heading .test-span {
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;
}

@media screen and (max-width: 750px) {
  .fix-display {
    display: flex !important;
    flex-direction: column-reverse !important;
    justify-content: center !important;
  }

  .w-40 {
    width: 100%;
    margin-bottom: 10px;
  }

  .w-60 {
    width: 100%;
  }
}
</style>
