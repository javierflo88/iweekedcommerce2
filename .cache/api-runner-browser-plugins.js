module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":1380,"linkImagesToOriginal":false}},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-numbered-footnotes"},{"resolve":"gatsby-remark-smartypants"}],"remarkPlugins":[null]},
    },{
      plugin: require('../node_modules/@hangindev/gatsby-theme-courses/gatsby-browser.js'),
      options: {"plugins":[],"contentPath":"content/courses"},
    }]
