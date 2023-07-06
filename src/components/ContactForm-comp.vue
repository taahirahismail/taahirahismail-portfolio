<template>
  <div class="p-3 w-50">
    <div class="card brown-border">
      <form
        action="https://formspree.io/f/xleyrkln"
        method="POST"
        class="card p-3 dark-blue-bg"
      >
        <h2
          class="card p-3 heading-text light-bg brown-border-thin text-center"
        >
          Contact Me!
        </h2>
        <div class="mb-3">
          <label for="full-name" class="form-label heading-text">Name: *</label>
          <input
            v-model="text"
            id="full-name"
            name="Full Name"
            class="form-control light-bg"
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
            class="form-control light-bg"
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
            class="form-control light-bg"
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
            class="form-control light-bg"
            rows="10"
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

.dark-blue-bg {
  background-color: #A4D0A4;
}

.brown-border {
  border: 3px solid #492f10;
  border-radius: 11px;
}

.brown-border-thin {
  border: 2px solid #492f10;
  color: #492f10;
}

.light-bg {
  background-color: #FFF8D6;
  border: 1px solid #492f10;
}

.brown-btn {
  border: 3px solid #492f10;
  color: #492f10;
}

.brown-btn:hover {
  background-color: #492f10;
  color: #A4D0A4;
}
</style>
