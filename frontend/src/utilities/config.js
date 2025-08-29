// Helper to build paths
const createAssetPaths = (base) => ({
  css: (file) => `${base.css}/${file}`,
  js: (file) => `${base.js}/${file}`,
  img: (file) => `${base.images}/${file}`,
  font: (file) => `${base.fonts}/${file}`,
  vendor: (file) => (base.vendor ? `${base.vendor}/${file}` : null),
});

// Base asset paths
const landingAssetsBasePaths = {
  css: "assets/landing/css",
  js: "assets/landing/js",
  images: "assets/landing/images",
  fonts: "assets/landing/fonts",
};

const adminAssetsBasePaths = {
  css: "../assets/admin/css",
  js: "../assets/admin/js",
  images: "../assets/admin/images",
  fonts: "assets/admin/fonts",
  vendor: "assets/admin/vendor",
};

// Path builders
const landing = createAssetPaths(landingAssetsBasePaths);
const admin = createAssetPaths(adminAssetsBasePaths);

const landingAssets = {
  css: [
    { link: landing.img("favicon.ico"), rel: "shortcut icon" },
    { link: landing.css("master.css"), rel: "stylesheet" },
    { link: landing.css("responsive.css"), rel: "stylesheet" },
  ],
  js: [
    landing.js("jquery.min.js"),
    landing.js("master.js"),
  ],
};

// Config
export const config = {
  basePaths: {
    landingAssetsBasePaths,
    adminAssetsBasePaths,
  },
  routeAssets: {
    "/": landingAssets,
    "/admin": {
      css: [
        { link: admin.img("favicon.ico"), rel: "shortcut icon" },
        { link: admin.css("vendor.min.css"), rel: "stylesheet" },
        { link: admin.css("app.min.css"), rel: "stylesheet" },
        { link: admin.css("icons.min.css"), rel: "stylesheet" },
      ],
      js: [
        admin.js("config.js"),
        admin.js("vendor.min.js"),
        // admin.js("app.js"),
        // admin.vendor("apexcharts/apexcharts.min.js"),
        // admin.js("pages/dashboard.js"),
      ],
    },
    "/*": landingAssets,
  },
};
