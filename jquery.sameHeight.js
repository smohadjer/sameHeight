/**
* @author Saeid Mohadjer <info@saeidmohadjer.com>
* @link https://github.com/smohadjer/jquery.sameHeight
* @license http://opensource.org/licenses/MIT
*
* @version 0.0.2
*
* based on: http://jqueryboilerplate.com/
*/

;(function ($, window, document, undefined) {
	'use strict';

	var pluginName = 'sameHeight',
		defaults = {};

	//private method
	var getHeightOfTallest = function(elms) {
		var height = 0;

		$.each(elms, function() {
			var _h = $(this).outerHeight();

			if (_h > height) {
				height = _h;
			}
		});

		return height;
	};

	// The actual plugin constructor
	function Plugin(element, options) {
		this.$element = $(element);
		this.options = $.extend({}, defaults, options);
		this.init();
	}

	// methods
	var methods = {
		init: function() {
			var self = this;
			self.index = 0;

			self.$elms = self.$element.children();

			$(window).on('resize', function() {
				//remove any previously set min-height
				self.$elms.css({
					'min-height': ''
				});

				self.setMinHeight(0);
			});

			//use setTimeout to make sure any code in stack is executed before
			//calculating height
			setTimeout(function() {
				self.setMinHeight(0);
			}, 0);
		},

		setMinHeight: function(index){
			var self = this;
			var row = self.getRow(index);
			var height = getHeightOfTallest(row);

			$.each(row, function() {
				$(this).css({
					'min-height': height
				});
			});

			if (self.index < self.$elms.length - 1) {
				self.setMinHeight(self.index);
			}
		},

		getRow: function(index) {
			var self = this;
			var row = [];
			var $first = self.$elms.eq(index);
			var top = $first.position().top;

			row.push($first);

			self.$elms.slice(index + 1).each(function() {
				var $elm = $(this);
				if ($elm.position().top === top) {
					row.push($elm);
					self.index = $elm.index();
				} else {
					self.index = $elm.index();
					return false;
				}
			});

			return row;
		}
	};

	// build
	$.extend(Plugin.prototype, methods);

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[pluginName] = function(options) {
		this.each(function() {
			if(!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});

		return this;
	};

})(jQuery, window, document);
