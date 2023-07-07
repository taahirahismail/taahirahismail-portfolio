<template>
  <div class="text-center m-2">
    <DetailsComp />
  </div>

  <div class="row m-2 p-3 justify-content-around purple-bg brown-border">
    <div class="col-5">
                  <div class="card p-3 dark-purple-bg brown-border">
                    <h4 class="card p-3 text-center light-purple-bg brown-border">Heard in the Classroom:</h4>
                    <p class="text-sm-start p-2">
                      "Why don't you put some quotes from people in your life to cover this (previously) empty space." <br>
                      <cite>-Lyle Brown, 2023</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "You can't force me to be funny. I'm randomly funny, not forcefully funny" <br>
                      <cite>-Cheslyn Herman, 2023</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "Pew... ppp... pah.. pp..." <br>
                      <cite>-Caryn Lodewyk, 2023</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "Uh, Caryn's being weird again." <br>
                      <cite>-Lyle Brown, 2023</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "Yes." <br>
                      <cite>-Timothy (T-money) Barry, 2023 (when asked for motivation)</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "Take care of yourself. How about that?" <br>
                      <cite>-Connor Winkworth, 2023 (when asked for motivation)</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "For what?" <br>
                      <cite>-Jadee Paulse, 2023 (when asked for inspiration)</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "Uhh... um... uhh... uh, idk work hard, you can do it!" <br>
                      <cite>-Caryn Lodewyk, 2023</cite>
                    </p>
                    <p class="text-sm-start p-2">
                      "I'm helping them because Oslin's not here today. They must pay me." <br>
                      <cite>-Ethan Lesar, 2023</cite>
                    </p>
                  </div>  
                </div>

    <div
      id="carouselExampleAutoplaying"
      class="carousel slide card col-6 dark-purple-bg brown-border"
      data-bs-ride="carousel"
    >
    <h3 class="text-center card m-2 p-2 light-purple-bg brown-border">What the People Have to Say About Taahirah:</h3>
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
            <div class="row justify-content-center">
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
.dark-purple-bg {
  background-color: #926e6f;
}

.light-purple-bg {
  background-color: #e6c4c0;
}

.purple-bg {
  background-color: #ca8a8b;
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
  .row {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
  }

  .col-5 {
    width: 100%;
    margin-bottom: 10px;
  }

  .col-6 {
    width: 100%;
  }
}
</style>
