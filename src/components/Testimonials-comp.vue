<template>
    <div id="testimonials">
                <div class="card m-1 p-3 col-6 light-bg brown-border">
                  <figure class="test-cards light-bg">
                    <blockquote class="blockquote">
                        {{ testimonial.quote }}
                      <div class="arrow"></div>
                    </blockquote>
                    <img :src="testimonial.img" :alt="testimonial.name" loading="lazy" class="img"/>
                    <div class="p-2 author">
                      <h5 class="test-heading">{{ testimonial.name }}<br>
                        <span class="test-span">{{ testimonial.relation }}</span>
                    </h5>
                    </div>
                  </figure>
                </div>
                </div>
</template>

<script>
export default {
    props: ["testimonial"]
}
</script>

<style>
.pink-bg {
    background-color: #E98580;
}

.light-bg {
  background-color: #FDD2BF;
}

.brown-border {
    border: 3px solid #492F10;
}

.brown-border-thin {
  border: 1px solid #492F10;
}

#testimonials {
    display: grid;
    grid-template-columns: auto auto;
}

.test-cards {
  position: relative;
  overflow: hidden;
  min-width: 220px;
  max-width: 500px;
  width: 100%;
  color: #492F10;
  text-align: left;
}

.test-cards .img {
  max-width: 100%;
  vertical-align: middle;
}

.test-cards .blockquote {
  position: relative;
  background-color: #FDD2BF;
  padding: 25px 50px 25px 50px;
  font-size: 0.8em;
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
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #FDD2BF;
  margin: 0;
  position: absolute;
}

.test-cards .author {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 25px;
  color: #492F10;
  background-color: #FDD2BF;
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