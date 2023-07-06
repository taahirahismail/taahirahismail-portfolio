<template>
    <div class="m-2">
      <div v-if="testimonials" class="card p-3 pink-bg brown-border">
        <h2 class="text-center card p-2 light-bg brown-border">Testimonials</h2>

        <div class="row justify-content-center">
            <div
              v-for="testimonial of testimonials"
              :key="testimonial.id"
              :testimonial="testimonial"
              class="card m-1 p-3 col-5 light-bg brown-border"
            >
            <figure class="mx-auto test-cards light-bg">
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

      <div v-else>
        give her a second...
      </div>
    </div>


</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },

  mounted() {
    this.$store.dispatch("getTestimonials");
  },
};
</script>

<style>
.pink-bg {
  background-color: #e98580;
}

.light-bg {
  background-color: #fdd2bf;
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
  background-color: #fdd2bf;
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
  border-top: 25px solid #fdd2bf;
  margin: 0;
  position: absolute;
}

.test-cards .author {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 25px;
  color: #492f10;
  background-color: #fdd2bf;
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
</style>