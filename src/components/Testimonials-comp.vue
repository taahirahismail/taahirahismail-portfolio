<template>
    <div data-aos="fade-up" class="row align-items-md-stretch gap-md-4 d-flex justify-content-center align-items-center">
                <div class="card d-flex justify-content-center align-items-center animate__animated animate__fadeInUp pink-bg brown-border">
                  <figure class="test-cards card brown-border">
                    <blockquote>
                        {{ testimonials.quote }}
                      <div class="arrow"></div>
                    </blockquote>
                    <img :src="testimonials.img" :alt="testimonials.name" loading="lazy"/>
                    <div class="author">
                      <h5>{{ testimonials.name }}<br>
                        <span>{{ testimonials.relation }}</span>
                    </h5>
                    </div>
                  </figure>
                </div>
                </div>
</template>

<script>
export default {
    
}
</script>

<style>
.pink-bg {
    background-color: #E98580;
}

.brown-border {
    border: 3px solid #492F10;
}

   figure.test-cards {
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 500px;
  width: 100%;
  color: black;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
figure.test-cards * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}
figure.test-cards img {
  max-width: 100%;
  vertical-align: middle;
}
figure.test-cards blockquote {
  position: relative;
  background-color: ivory;
  padding: 25px 50px 25px 50px;
  font-size: 0.8em;
  font-weight: 500;
  text-align: left;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
}
figure.test-cards blockquote:before,
figure.test-cards blockquote:after {
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}
figure.test-cards blockquote:before {
  top: 25px;
  left: 20px;
}
figure.test-cards blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0;
}
figure.test-cards .arrow {
  top: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #ffffff;
  margin: 0;
  position: absolute;
}
figure.test-cards .author {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 25px;
  color: #000000;
  background-color: ivory;
  margin: 0;
  text-transform: uppercase;
}
figure.test-cards .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800px;
}
figure.test-cards .author h5 span {
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;
} 
</style>