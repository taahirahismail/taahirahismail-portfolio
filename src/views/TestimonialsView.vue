<template>
    <div v-if="testimonials" class="p-2">
        <h2 class="text-center card p-2 light-bg brown-border">Testimonials</h2>

        <div class="row">            
            <div class="card p-3 pink-bg brown-border">
                <testimonials-comp v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
            </div>
        </div>
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