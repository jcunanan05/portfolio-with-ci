// const API_KEY =
//   process.env.NODE_ENV === 'development'
//     ? process.env.REACT_APP_CONTENTFUL_PREVIEW_KEY
//     : process.env.REACT_APP_CONTENTFUL_CDN_KEY;

const defaultConfig = {
  SPACE_ID: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  ACCESS_TOKEN: process.env.REACT_APP_CONTENTFUL_CDN_KEY
};

// export const defaultClient = (config = defaultConfig) => {
//   const options = {
//     host: 'cdn.contentful.com',
//     space: config.SPACE_ID,
//     accessToken: config.ACCESS_TOKEN
//   };

//   return contentful.createClient(options);
// }

export const defaultOptions = {
  host: 'cdn.contentful.com',
  space: defaultConfig.SPACE_ID,
  accessToken: defaultConfig.ACCESS_TOKEN
};

export default defaultOptions;
