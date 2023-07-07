<template>
  <div id="main" class="row align-items-md-stretch m-2">
          <div class="card container-fluid p-5 dark-purple-bg brown-border">
            <div class="container-md p-2 text-center d-flex justify-content-center align-items-center">
              <div class="card w-100 p-5 purple-bg brown-border-thin">
                <div class="p-5">
                  <div class="typewriter">
                    <h2>Hi there! I'm Taahirah and this is my portfolio!</h2>                  
                  </div>
                  
                  <div class="p-5 animate__animated animate__fadeIn animate__delay-3s">
                    <h6 class="d-flex justify-content-center align-items-center text-center brown-text">I plan to be an amazing fullstack developer someday. Click below so you can say you found me first :)</h6>
                  </div>

                  <div>
                    <ul class="d-flex p-2 justify-content-center animate__animated animate__fadeIn animate__delay-5s" style="list-style: none;">
                      <li><a href="/about" class="btn brown-btn">Learn more about me here!</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>

export default {
  
}
</script>

<style>
.dark-purple-bg {
  background-color: #926E6F;
}

.light-purple-bg {
  background-color: #E6C4C0;
}

.purple-bg {
  background-color: #CA8A8B;
}

.brown-border {
  border: 3px solid #492F10;
}

.brown-border-thin {
  border: 2px solid #492F10;
}

.brown-text {
  color: #492F10;
}

.brown-btn {
  border: 1px solid #492F10;
  color: #492F10;
}

.brown-btn:hover {
  background-color: #492F10;
  color: #CA8A8B;
}

/* typing animation */
.typewriter h2 {
    display: flex;
    align-content: center;
    text-align: center;
    color: #492F10;
    font-family: monospace;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid #492F10; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: .15em; /* Adjust as needed */
    animation: 
      typing 3s steps(30, end),
      blink-caret .5s step-end infinite;
  }
  
  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100%;}
  }
  
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    0% { border-color: transparent }
    50% { border-color: #492F10 }
    100% { border-color: transparent}
  }
</style>