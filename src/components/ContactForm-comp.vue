<template>
  <div class="p-3">
    <div class="card brown-border">
      <form
        action="https://formspree.io/f/xleyrkln"
        method="POST"
        class="card p-3 purple-bg"
      >
        <h2
          class="card p-3 light-purple-heading-bg brown-border-light text-center"
        >
          Contact Me!
        </h2>
        <div class="mb-3">
          <label for="full-name" class="form-label heading-text">Name: *</label>
          <input
            v-model="text"
            id="full-name"
            name="Full Name"
            class="form-control light-purple-bg"
            placeholder="Your Full Name"
            required
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label heading-text">Email: *</label>
          <input
            v-model="email"
            id="email"
            name="Email"
            class="form-control light-purple-bg"
            placeholder="Your Email Address"
            required
          />
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label heading-text"
            >Mobile Number: *</label
          >
          <input
            v-model="tel"
            id="tel"
            name="Contact Number"
            class="form-control light-purple-bg"
            placeholder="Your Mobile Number"
            required
          />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label heading-text">Message:</label>
          <textarea
            v-model="message"
            id="message"
            name="Message"
            class="form-control light-purple-bg"
            rows="7"
            placeholder="Leave me a message!"
          ></textarea>
        </div>

        <p class="p-2">* indicates a required field</p>

        <button type="submit" class="btn brown-btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      email: "",
      tel: "",
      message: "",
    };
  },
};
</script>

<style>
form label,
form p {
  color: #492f10;
}

.dark-purple-bg {
  background-color: #926e6f;
}

.brown-border {
  border: 3px solid #492f10;
  border-radius: 11px;
}

.brown-border-light {
  border: 2px solid #492f10;
  color: #492f10;
}

.light-purple-heading-bg {
  background-color: #e6c4c0;
}

.light-purple-bg {
  background-color: #e6c4c0;
  border: 1px solid #492f10;
}

.brown-btn {
  border: 3px solid #492f10;
  color: #492f10;
}

.brown-btn:hover {
  background-color: #492f10;
  color: #926e6f;
}
</style>
