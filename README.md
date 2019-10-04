[![Codacy Badge](https://api.codacy.com/project/badge/Grade/8350247562824586bce406ce6f75c052)](https://www.codacy.com/manual/guganems/js-parse-query-string?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=guganems/js-parse-query-string&amp;utm_campaign=Badge_Grade)

## Description

A tiny library for decode value of the query string using JS

## Using

add this script
```html
<script src="https://cdn.jsdelivr.net/gh/guganems/js-parse-query-string/app.js"></script>
```

### Example

assuming the ```url``` is:
```https://somesite.com/index.php?name=guga```

to retrieve the parameter ```guga```, you should use:

```javascript
let url = new Url();
console.log(url.name);
```