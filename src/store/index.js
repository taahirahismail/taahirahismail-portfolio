import { createStore } from 'vuex'

export default createStore({
  state: {
    experiences: null,
    projects: null,
    project: null,
    testimonials: null
  },
  mutations: {
    setExperiences: (state, experiences) => {
      state.experiences = experiences;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setProject: (state, project) => {
      state.project = project;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    }
  },
  actions: {
    getExperiences: async (context) => {
      fetch("https://taahirahismail.github.io/vue-eomp-data/edu-exp-db.json")
      .then((res) => res.json())
      .then((experiences) => context.commit("setExperiences", experiences))
    },
    getProjects: async (context) => {
      fetch("https//:taahirahismail.github.io/vue-eomp-data/projects-db.json")
      .then((res) => res.json())
      .then((projects) => context.commit("setProjects", projects))
    },
    getProject: async (context, id) =>{
      fetch("https//:taahirahismail.github.io/vue-eomp-data/projects-db.json/" + id)
      .then((res) => res.json())
      .then((project) => context.commit("setProject", project))
    },
    getTestimonials: async (context) => {
      fetch("https//:taahirahismail.github.io/vue-eomp-data/testimonials-db.json")
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials))
    }
  }
})
