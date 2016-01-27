#sameHeight
A jQuery plugin for better alignment of cells in a grid. Plugin looks at children of a container and if they are visually in the same row, it makes them all as tall as the tallest one in the row (using css min-height). This also solves common problem of floated cells in a grid getting stuck after one another due to height difference.

##Examples
- [sameHeight plugin applied to cells in a responsive grid] (http://smohadjer.github.io/sameHeight/demo/demo.html)
- [sameHeight plugin fixing float problem] (http://smohadjer.github.io/sameHeight/demo/demo2.html)

##Usage
```javascript
$('.parent-element').sameHeight();
```

With all options:
```javascript
$('.parent-element').sameHeight({

	//this option by default is false so elements on the same row can have
	//different height. If set to true all elements will have the same height
	//regardless of whether they are on the same row or not.
	oneHeightForAll: true
});
```
