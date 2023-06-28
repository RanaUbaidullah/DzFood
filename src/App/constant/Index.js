const serverUrl = 'https://danzeetech.com/multistore-10/public/';
// const serverUrl = 'http://127.0.0.1:8000/';

export const Config = {

  secretPass: "XkhZG4fW2t2W",
  serverUrl: serverUrl,
  serverApiUrl: serverUrl + 'api/',
  serverUrlProduct: serverUrl + 'api/products',
  serverUrlMe: serverUrl + 'api/me',
  serverUrlImages: serverUrl + 'public/images/',
  serverUrlCategories: serverUrl + '/api/categories?restaurant_id=1',
  serverUrlCategoryImages: serverUrl + 'images/categories/',
  serverUrlProductImages: serverUrl + 'public/images/products/',
  serverUrlUserImages: serverUrl + 'public/images/users/',
  userDzFoodToken: 'userDzfoodLoginToken',
  roleName: 'role',
  email: 'email',
  verificationCode: 'verifiactionCode',

  userApiTokenName: 'user-login-token',
  googleApiKey: 'AIzaSyD4BUDTEpTPIuhhJ2MyQ4AiQ0u3CyFlWOo',

  // Used in whole app
  currency_symbol: "DKK",
  currency: "Kr.",

  appName: "DZFood",

  pushTokenName: 'device-push-token',

  // Here add langues and then add transaltion file for languages
  languages: [
    { shortName: 'en', icon: '', longName: 'English' },
    { shortName: 'da', icon: '', longName: 'Danish' }
  ],
  firstVisitDone: "firstVisitDone",
  directory: "web-dzfood",
  defaultActivityImg: "../select-image.jpg",
  defaultImg: "select-image.jpg",
  defaultProductImageURI: 'https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg',

  digitalOceanLinkProductSmallImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/small/",
  digitalOceanLinkProductLargeImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/large/",
  digitalOceanLinkProductMediumImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/products/medium/",
  // category paths
  digitalOceanLinkCategorySmallImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/categories/small/",
  digitalOceanLinkCategoryLargeImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/categories/large/",
  digitalOceanLinkCategoryMediumImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/categories/medium/",
  // Admin image paths
  digitalOceanLinkAdminSmallImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/admin/small/",
  digitalOceanLinkAdminLargeImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/admin/large",
  digitalOceanLinkAdminMediumImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/admin/medium",
  // User image paths
  digitalOceanLinkUserSmallImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/user/small/",
  digitalOceanLinkUserLargeImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/user/large/",
  digitalOceanLinkUserMediumImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/user/medium/",

  // Restaurant image paths
  digitalOceanLinkRestaurantSmallImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/restaurant/small/",
  digitalOceanLinkRestaurantLargeImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/restaurant/large/",
  digitalOceanLinkRestaurantMediumImg: "https://danzee.fra1.digitaloceanspaces.com/dzfood/admin/images/restaurant/medium/",
}