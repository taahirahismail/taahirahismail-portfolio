import { createStore } from 'vuex'

export default createStore({
  state: {
    experiences: null,
    projects: null,
    testimonials: null,
    playlist: null
  },
  mutations: {
    setExperiences: (state, experiences) => {
      state.experiences = experiences;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setPlaylist: (state, playlist) => {
      state.playlist = playlist;
    }
  },
  actions: {
    async getExperiences (context) {
      try {
        let res = await fetch("https://taahirahismail.github.io/vue-eomp-data/vue-eomp-data.json");
        let {experiences} = await res.json();
        if (experiences) {
          context.commit("setExperiences", experiences)
        } else {
          context.commit("setExperiences", experiences)
        }
      }
      catch(error) {
        console.error("Here's your problem:", error)
      }
    },
    async getProjects (context) {
      try {
        let res = await fetch("https://taahirahismail.github.io/vue-eomp-data/vue-eomp-data.json");
        let {projects} = await res.json();
        if (projects) {
          context.commit("setProjects", projects)
        } else {
          context.commit("setProjects", projects)
        }
      }
      catch(error) {
        console.error("Here's your problem:", error)
      }
    },

    async getTestimonials (context) {
      try {
        let res = await fetch("https://taahirahismail.github.io/vue-eomp-data/vue-eomp-data.json");
        let {testimonials} = await res.json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials)
        } else {
          context.commit("setTestimonials", testimonials)
        }
      }
      catch(error) {
        console.error("Here's your problem:", error)
      }
    },

    async getPlaylist (context) {
      try {
        let res = await fetch("https://taahirahismail.github.io/vue-eomp-data/vue-eomp-data.json");
        let {playlist} = await res.json();
        if (playlist) {
          context.commit("setPlaylist", playlist)
        } else {
          context.commit("setPlaylist", playlist)
        }
      }
      catch(error) {
        console.error("Here's your problem:", error)
      }
    },
  }
})
