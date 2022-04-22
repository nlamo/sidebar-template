const app = Vue.createApp({
   data() {
      return {
         darkModeToggle: false,
         buttonBackground: "#000",
         buttonText: "Darken",
         buttonTextColor: "#fff"
      };
   },
   methods: {
      setButtonText() {
         if (this.buttonText == "Darken") {
            this.buttonText = "Lighten";
            this.buttonBackground = "#fff";
            this.buttonTextColor = "#000";
         } 
         else if (this.buttonText == "Lighten") {
            this.buttonText = "Darken";
            this.buttonBackground = "#000";
            this.buttonTextColor = "#fff";
         }
      },
      toggleDarkMode() {
         if (this.darkModeToggle == false) {
            this.darkModeToggle = true;
         } 
         else if (this.darkModeToggle == true) {
            this.darkModeToggle = false;
         }
      },
   },
});

app.mount("#main-app");
