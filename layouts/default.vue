<template>
  <div class="app">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/Header/Navbar";

export default {
  mounted() {
    let registration;
    window.isUpdateAvailable = new Promise(function (resolve, reject) {
      // lazy way of disabling service workers while developing
      if (
        "serviceWorker" in
        navigator /* && ['localhost', '127'].indexOf(location.hostname) === -1 */
      ) {
        // register service worker file
        navigator.serviceWorker
          .register("sw.js")
          .then((reg) => {
            // trigger the update went there is one
            //   reg.update();
            if (reg.waiting) {
              reg.update();
            }
            // console.log("registered sw :", reg);
            reg.onupdatefound = () => {
              // console.log("1 :", reg);
              const installingWorker = reg.installing;
              // console.log("2 :", installingWorker);
              installingWorker.onstatechange = () => {
                switch (installingWorker.state) {
                  case "installed":
                    // detect if a client is controlled via navigator.serviceWorker.controller which will be null or a service worker instance
                    if (navigator.serviceWorker.controller) {
                      // console.log("3 :", navigator.serviceWorker);
                      // new update available
                      registration = reg;
                      resolve(true);
                    } else {
                      // no update available
                      resolve(false);
                    }
                    break;
                }
              };
            };
          })
          .catch((err) => console.error("[SW ERROR]", err));
      }
    });

    // listen to the SW promise up there to see if there has been a new update
    window["isUpdateAvailable"].then((isAvailable) => {
      if (isAvailable) {
        alert("new update found");
      }
    });
  },
};
</script>

<style>
.app {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
