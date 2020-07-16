module.exports = {
  siteName: "Cloud Computing Decal",
  pathPrefix: "2020-Fall",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Announcements",
        baseDir: "content",
        path: "announcements/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Homeworks",
        baseDir: "content",
        path: "homeworks/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Notes",
        baseDir: "content",
        path: "notes/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Projects",
        baseDir: "content",
        path: "projects/*.md"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Quizes",
        baseDir: "content",
        path: "quizes/*.md"
      }
    },
  ],
  transformers: {
    remark: {
      plugins: [
        'gridsome-remark-katex',
        'gridsome-plugin-remark-prismjs-all',
      ]
    }
  }
}
