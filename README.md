# Cloud Computing Decal

Requires NodeJS@12 and npm@6

Run

```
 $ npm install --global @gridsome/cli
 $ npm install
```

To develop:

```
 $ npm run develop
```

To deploy:

```
 $ npm run deploy
```

TODO:
  - Add syllabus as a page on the website and not a link to a Google doc
  - Favicon or logo
  - Streamlined(?) method of uploading files and allowing people to download them (PDFs, raw LaTeX, etc)
  - Move repo to staff account
  - Set up multiple-semester build script using repo branches and/or Github repository settings
  
NOTES:
  - `schedule.json`'s lecture (and only lecture) is a **direct link**. Other links are **relative to their directory**. For example, if the `homework` field is `sample`, it will link to `homeworks/sample`.
  - Nothing in `schedule.json` can be a complex data structure. Only strings, integers, etc. otherwise GraphQL hates me.
  - Internal links use `<g-link to="">`, but external links still use `<a href="">`. Don't ask me why; Gatsby did the same thing.
  - [This](https://github.com/gridsome/gridsome/issues/292) is why `StaffCard.vue` uses an ugly hack
