/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `me`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-custom-blocks",
            options: {
              blocks: {
                portfolioParagraph: {
                  classes: "portfolioParagraph",
                  title: "optional",
                },
                image: {
                  classes: "image",
                  title: "optional",
                },
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "OP5l4lkMC4mKbvnuoh4SvTfNO",
          consumer_secret: "kLhtbLzmg0KU3nFaqBRzH0phjxBtJ8SKDrEkSj6jDqHTi1EBkT",
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAAI8VDwEAAAAAv11FkRMhsAB%2Fxx1gyccVm2MwxyY%3DtCngrsus82REyS7Ts6k3q5Z0nyyQgUb53nWjNEoetXPedQ1LAQ",
        },
        queries: {
          HackersTweets: {
            endpoint: `statuses/user_timeline`,
            params: {
              screen_name: `mikethepurple`,
              include_rts: true,
              exclude_replies: true,
              tweet_mode: `extended`,
              count: 3,
            },
          },
          AuthorTwitterProfiles: {
            endpoint: `lists/members`,
            params: {
              list_id: `1043490256052539392`,
              include_rts: true,
              exclude_replies: true,
              tweet_mode: `extended`,
              count: 20,
            },
          },
          SearchTweets: {
            endpoint: "search/tweets",
            params: {
              q: "#python",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
