# Cloud Computing Decal

Requires NodeJS@12 and npm@6

Run

```
 $ npm install --global @gridsome/cli
 $ npm install
```



TODO:
  - Make the schedule actually look good and link properly
  - Make the header look good and link to actual things
  - Announcements page
  - Staff page (preferably with GraphQL)
  - Resources page
  - Some method of uploading files and allowing people to download them (PDFs, raw LaTeX, etc)
  
NOTES:
  - `schedule.json`'s lecture is a **direct link**. Other links are **relative to their directory**. For example, if the `homework` field is `sample`, it will link to `homeworks/sample`.
  - Nothing in `schedule.json` can be a complex data structure. Only strings, integers, etc. otherwise GraphQL hates me.
  - Internal links use `<g-link to="">`, but external links still use `<a href="">`. Don't ask me why; Gatsby did the same thing.
