//package.jsonの次に読み込まれる諸々の設定ファイル
//APIkey等の設定もこのファイル内に記述するようにする
export default {
  env: {},
  head: {
    title: "nuxtだよ～",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js TypeScript project" }
    ],
    link: [
//      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" }
    ],
    script: [
    ]
  },
  loading: { color: "#3B8070" },
  plugins: [
    { src: "@/plugins/element-ui", ssr: false}
  ],
//  css: ["~/assets/css/main.css"],
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/css/style.css"
  ],
  build: {
    //ビルド時のwebpackの設定を記述？
  },
  modules: [
    "@nuxtjs/axios",
  ],
  axios: {}
}
