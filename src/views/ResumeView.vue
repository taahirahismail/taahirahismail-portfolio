<template>
    <div class="p-2">
        <div class="card container-x pink-bg brown-border">
            <div class="row m-2 align-items-md-stretch pink-bg">
                <div class="mt-3 col-md-6 p-3 pink-bg">
                    <h3 class="text-center card light-bg brown-border p-1">
                        Education & Experience
                    </h3>

                    <div v-if="experiences" class="timeline">
                        <EducationExpComp
                        v-for="experience of experiences"
                        :key="experience.id"
                        :experience="experience"/>
                    </div>

                    <div v-else>
                        idk mate...
                    </div>
                </div>

                <div class="mt-3 col-md-6 p-3 pink-bg">
                  <h3 class="text-center card light-bg brown-border p-1">
                    Coding & Design Skills
                  </h3>
                  <div class="skills-fix">
                    <p>HTML</p>
                    <div class="skills-container">
                      <div class="skills advanced">Advanced</div>
                    </div>
                  </div>

                  <div class="skills-fix">
                    <p>CSS</p>
                  <div class="skills-container">
                    <div class="skills advanced">Advanced</div>
                  </div>
                  </div>

                  <div class="skills-fix">
                    <p>Bootstrap</p>
                  <div class="skills-container">
                    <div class="skills advanced">Advanced</div>
                  </div>
                  </div>

                  <div class="skills-fix">
                    <p>JavaScript</p>
                  <div class="skills-container">
                    <div class="skills intermediate">Intermediate</div>
                  </div>
                  </div>

                  <div class="skills-fix">
                    <p>Vue.JS</p>
                  <div class="skills-container">
                    <div class="skills intermediate">Intermediate</div>
                  </div>
                  </div>

                  <h3 class="text-center card light-bg brown-border p-1 mt-5">
                    Soft Skills
                  </h3>
                  <div class="skills-fix">
                    <p>Leadership</p>
                    <div class="skills-container">
                      <div class="skills expert">Expert</div>
                    </div>
                  </div>

                  <div class="skills-fix">
                    <p>Critical Thinking</p>
                  <div class="skills-container">
                    <div class="skills advanced">Advanced</div>
                  </div>
                  </div>

                  <div class="skills-fix">
                    <p>People Skills</p>
                  <div class="skills-container">
                    <div class="skills advanced">Advanced</div>
                  </div>
                  </div> 

                  <div class="skills-fix">
                    <p>Data Analysis</p>
                  <div class="skills-container">
                    <div class="skills intermediate">Intermediate</div>
                  </div>
                  </div> 

                  <div class="skills-fix">
                    <p>Organization</p>
                  <div class="skills-container">
                    <div class="skills expert">Expert</div>
                  </div>

                  </div>                  
                  <div class="skills-fix">
                    <p>Being Cool & Stylish</p>
                  <div class="skills-container">
                    <div class="skills godly">Godly</div>
                  </div>
                  </div>                  
                </div>
            </div>
        </div>        
    </div>
</template>

<script>
import EducationExpComp from "@/components/EducationExp-comp.vue"

export default {
    computed: {
        experiences() {
            return this.$store.state.experiences;
        }
    },

    mounted() {
        this.$store.dispatch("getExperiences");
    },

    components: {EducationExpComp}
}
</script>

<style>
* {
  color: #492F10;
}

/* timeline */
    .timeline {
    position: relative;
    max-width: 6px;
    margin-left: 17%;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 100%;
    background-color: #492F10;
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: -10px;
    border-radius: 5px;
}

.container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 500px;
}

.container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #492F10;
    border: 4px solid #492F10;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

.right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid #E98580;
    border-width: 10px 10px 10px 0;
    border-color: transparent #E98580 transparent transparent;
}

.right::after {
    left: -20px;
}

.content {
    padding: 20px 30px;
    background-color: #DF5E5E;
    position: relative;
    border-radius: 6px;
    border: 1px solid #492F10;
    width: 100%;
}
/* end of timeline */

/* skills bars */
.skills-container {
    width: 100%;
    background-color: #FDD2BF;
    border-radius: 10px;
}

.skills {
    text-align: right;
    padding-top: 3px;
    padding-bottom: 3px;
    color: #FDD2BF;
}

.intermediate {max-width: 60%; background-color: #DF5E5E; padding-right: 5px; border-radius: 10px;}
.advanced {max-width: 75%; background-color: #DF5E5E; padding-right: 5px; border-radius: 10px;}
.expert {max-width: 90%; background-color: #DF5E5E; padding-right: 5px; border-radius: 10px;}
.godly {max-width: 100%; background-color: #DF5E5E; padding-right: 5px; border-radius: 10px;}

.intermediate, .advanced, .expert, .godly {
    animation-name: fill-bars;
    animation-duration: 2.5s;
}

@keyframes fill-bars {
    from{
        width: 0;
    }
    to{
        width: 100%;
    }
}

.skills-fix {
    padding: 10px;
}
/* end of skills bars */
</style>