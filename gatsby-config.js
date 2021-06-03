module.exports = {
  siteMetadata: {
    title: "CondutaOutlet",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.GATSBY_BACKEND_URL,
        queryLimit: 1000, // Default to 100
        contentTypes: [`produtos`, `carrossels`, `Assets`, `categorias`],
        singleTypes: [],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Jost\:400,500,600,700`,
          `Roboto\:400,500`,
        ],
        display: 'swap'
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {  
        icon: `src/images/icon.png`
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "4101126233267789",
      },
    },
  ],
  flags: {
    DEV_SSR: true
  },
};
