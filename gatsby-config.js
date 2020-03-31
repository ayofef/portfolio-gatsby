/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Farouq.dev | Front-end Developer",
    author: "Farouq Ayofe",
    description: "I'm a front-end developer and Ui/Ux enthusait ready to help you with your digital transformation. My current stack of languages or technologies includes: HTML5 - CSS3 - JAVASCRIPT - Webpack - Babel - SASS - PHP - WordPress - Git - Adobe Photoshop - Adobe Xd - Bootstrap - ReactJS - GatsbyJS - CSS Modules - Styled Component - GraphQL - Headless CMS",
    type: "website",
    siteUrl: "https://farouq.dev",
    image: "farouq.jpeg",
    keywords: "farouq.dev, ayofef, front-end developer, freelance, web developer, portfolio"



  },
  

  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            target: "_blank",
            rel: "nofollow, noopener, noreferrer"
          }
        }
        ]
      }
    },

    

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Farouq.Dev | Front-end Web Developer`,
        short_name: `Farouq.Dev`,
        start_url: `/`,
        icon: `static/logo/icon.png`,
        background_color: `#851d41`,
        theme_color: `#851d41`,
        display: `standalone`,
      }
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `500`, `600`, `700`]
          }
        ]
      }
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`

  ]
}
