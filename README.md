#sameHeight
A jQuery plugin for better alignment of elements in a responsive layout. It looks at children of the container it's applied to and if they are visually in the same row (should find at least two elements beside one another), it makes them all as tall as the tallest element in that row (via css min-height). This also solves common problem of floated cells getting stuck after one another due to height differences. 

##Examples
- [Applying to all elements (option oneHeightForAll: true)] (http://smohadjer.github.io/sameHeight/demo/demo1.html)
- [Applying to elements in the same row (default behavior)] (http://smohadjer.github.io/sameHeight/demo/demo2.html)

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
