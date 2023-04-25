<template>
    <div class="envelope-wrapper">
      <div class="envelope" :class="{ 'envelope-open': open }" @click="open = true">
        <div class="envelope-flap"></div>
      </div>
      <transition name="envelope-content" mode="out-in">
        <div v-if="open" class="envelope-content-wrapper">
          <div class="envelope-content">
            <h2>Dear John,</h2>
            <p>Thank you for being such a great friend. I really appreciate all the times we've spent together and I hope we can continue to grow our friendship in the future.</p>
            <p>Take care,</p>
            <p>Jane</p>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "Envelope",
    data() {
      return {
        open: false,
      };
    },
  };
  </script>
  
  <style>
  .envelope-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f9f9f9;
  }
  
  .envelope {
    position: relative;
    width: 350px;
    height: 250px;
    border: 3px solid #ccc;
    border-radius: 10px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
  
  .envelope.envelope-open {
    width: 500px;
    height: 300px;
  }
  
  .envelope-flap {
    position: absolute;
    top: -10px;
    left: 50%;
    width: 60px;
    height: 25px;
    border: 3px solid #ccc;
    border-bottom: none;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    transform: translateX(-50%);
  }
  
  .envelope-content-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  
  .envelope-content {
    padding: 20px;
    border: 3px solid #ccc;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .envelope-content-enter-active {
    animation: envelope-content-enter 0.5s ease-in-out;
  }
  
  .envelope-content-leave-active {
    animation: envelope-content-leave 0.5s ease-in-out;
  }
  
  @keyframes envelope-content-enter {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  
  @keyframes envelope-content-leave {
    0% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(100px);
    }
  }
  </style>
  