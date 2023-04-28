module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        withdrawalBgImg: "",
      }),
      colors: {
        navPrimary: "#5B63E6",
        navSecondary: "#6D76FF",
      },
      fontFamily: {
        custom: ["Nexa"],
        Monstserrat: ["Font name", "Monstserrat"],
        Raleway: ["Font name", "Raleway"],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "@layer fonts": {
          "@font-face": [
            {
              fontFamily: "Nexa",
              src: 'url("/public/fonts/NexaDemo-Bold.ttf") format("truetype") , url("/public/fonts/NexaTextDemo-Bold.ttf") format("truetype")',
              fontWeight: "bold",
              fontStyle: "normal",
            },
            {
              fontFamily: "Nexa",
              src: 'url("/public/fonts/NexaDemo-Light.ttf") format("truetype") , url("/public/fonts/NexaTextDemo-Light.ttf") format("truetype")',
              fontWeight: "normal",
              fontStyle: "normal",
            },
          ],
        },
      });
    },
  ],
};
