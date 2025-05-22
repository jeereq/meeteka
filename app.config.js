// app.config.js
export default {
  scheme: "meeteka",
  deeplink: "meeteka://",
  platforms: ["ios", "android", "web"],
  extra: {
    // utile pour une logique de partage
    websiteBaseUrl: "https://www.meeteka.com",
  },
};
