<template>
    <div v-if="testimonials" id="testimonials">
        <testimonials-comp v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
    </div>

    <div v-else>
        Loading...
    </div>
</template>

<script>
import TestimonialsComp from '@/components/Testimonials-comp.vue'

export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials;
        }
    },

    mounted() {
        this.$store.dispatch("getTestimonials");
    },

  components: { TestimonialsComp }
    
}
</script>

<style>
    
</style>