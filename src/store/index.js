import { createStore } from 'vuex'

export default createStore({
  state: {
    experience: null,
    projects: null,
    project: null,
    testimonials: null,
    playlist: null
  },
  mutations: {
    setExperience: (state, experience) => {
      state.experience = experience;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setProject: (state, project) => {
      state.project = project;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setPlaylist: (state, playlist) => {
      state.playlist = playlist;
    }
  },
  actions: {
    getExperience: async (context) => {
      fetch("https://taahirahismail.github.io/vue-eomp-data/edu-exp-db.json")
      .then((res) => res.json())
      .then((experience) => context.commit("setExperience", experience))
    },
    getProjects: async (context) => {
      fetch("https://taahirahismail.github.io/vue-eomp-data/projects-db.json")
      .then((res) => res.json())
      .then((projects) => context.commit("setProjects", projects))
    },
    getProject: async (context, id) =>{
      fetch("https://taahirahismail.github.io/vue-eomp-data/projects-db.json/" + id)
      .then((res) => res.json())
      .then((project) => context.commit("setProject", project))
    },
    getTestimonials: async (context) => {
      fetch("https://taahirahismail.github.io/vue-eomp-data/testimonials-db.json")
      .then((res) => res.json())
      .then((testimonials) => context.commit("setTestimonials", testimonials))
    },
    getPlaylist: async (context) => {
      fetch("https://taahirahismail.github.io/vue-eomp-data/passion-board-db.json")
      .then((res) => res.json())
      .then((playlist) => context.commit("setPlaylist", playlist))
    }
  }
})
