let { BASE_URL } = process.env;

if (!BASE_URL) {
  BASE_URL = "http://localhost:8000";
}

let BACKEND_APP = "trouve";

const axiosBaseUrl = `${BASE_URL}/${BACKEND_APP}`;

export default {
  env: {
    baseUrl: BASE_URL,
    backen_app: BACKEND_APP
  },
  head: {
    title: "Trouve",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Blaise TAYOU Trouve"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  css: ["@/assets/css/global.css"],
  plugins: ["@/plugins/helpers.js", "@/plugins/mdi-vue.client.js"],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: axiosBaseUrl
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  // auth configuration
  auth: {
    // Options
    redirect: {
      login: "/login",
      // logout: '/',
      // callback: '/login',
      callback: "/middleware",
      // home: false
      home: "/middleware"
    },
    strategies: {
      local: {
        scheme: "refresh",
        token: {
          property: "access_token",
          maxAge: 60 * 15
          // type: 'Bearer'
        },
        refreshToken: {
          property: "refresh_token",
          // data: "refresh_token",
          maxAge: 60 * 60 * 24 * 7
        },

        endpoints: {
          login: {
            url: `${BASE_URL}/auth/login`,
            method: "post",
            propertyName: "access_token"
          },
          refresh: {
            url: `${BASE_URL}/auth/refresh_token`,
            method: "post"
          },
          user: {
            url: `${BASE_URL}/auth/emptyuser`,
            method: "get",
            propertyName: false
          },
          logout: { url: `${BASE_URL}/auth/logout`, method: "get" }
        }
        // autoLogout: false
      }
    }
  },
  router: {
    middleware: ["auth"]
  }
};
