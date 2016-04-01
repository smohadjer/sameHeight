#sameHeight
A jQuery plugin for better vertical alignment of elements in responsive layouts. It looks at children of the container it's applied to and if they are visually in the same row, it makes them all as tall as the tallest element in that row. If option "oneHeightForAll" is set to true plugin doesn't look at rows and makes all children the same height. By default height is adjusted using css property "min-height", but this can be changed to "height" by setting option "useCSSHeight" to true. This plugin also solves common problem of floated cells getting stuck after one another due to height differences. 

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
	oneHeightForAll: true,
	
	//this option by default is false. If set to true css height will be 
	//used instead of min-height to change height of elements.
	useCSSHeight: true
});
```

Public methods:
```javascript
//remove plugin and reset all DOM changes 
.destroy()

```
