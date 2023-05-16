// https://nuxt.com/docs/api/configuration/nuxt-config
export default({ 
app:{
    head: {
        // ...
        script: [
          {
            src: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js',
          }
        ],
        link: [
          { rel: 'stylesheet',
            href: 'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',
            integrity: "sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=",
            crossorigin: ""
          }
        ]
      },
      // ...
    },
    css: ['~/assets/css/main.css',],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }

})