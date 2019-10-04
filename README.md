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