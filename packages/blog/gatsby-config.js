module.exports = {
  siteMetadata: {
    title: `ZiQiLN's Devlog`,
    name: `ZiQiLN's Devlog`,
    siteUrl: `https://ziqiln.vercel.sh`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Ziqi's Personal Devlog`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/ziqiln`
      },
      {
        name: `github`,
        url: `https://github.com/ziqiln`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/ziqiln`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/ziqiln`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/ziqiln`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {}
    }
  ]
};
