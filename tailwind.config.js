const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-f1': '#E10600',
        'black-f1': '#1F1F27'
      }
    },
  },
  plugins: [],
});