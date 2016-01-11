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

			self.$elms = self.$element.children();

			$(window).on('resize', function() {
				self.setMinHeight();
			});

			self.setMinHeight();
		},

		setMinHeight: function(){
			var self = this;

			self.$elms.css({
				'min-height': ''
			});

			$.each(getRows(), function() {
				var row = this;

				//if there are more than one element in a row, set those elements
				//to same height as tallets one
				var minHeight = row.elms.length > 1 ? getHeightOfTallest(row.elms) : '';
				$(row.elms).css({
					'min-height': minHeight
				});
			});

			//returns an array of objects containing elements in the same row
			function getRows() {
				var rows = [];

				self.$elms.each(function() {
					var elm = this;
					var top = $(elm).position().top;
					var rowFound = false;

					//if rows array has a row object for current element add element
					//to that row object's elms array
					if (rows.length > 0) {
						$.each(rows, function() {
							var row = this;

							if (row.top === top) {
								row.elms.push(elm);
								rowFound = true;
								return false;
							}
						});
					}

					//if there is no row for current element in rows array add a
					//new row object to rows array
					if (!rowFound) {
						var row = {};
						row.top = top;
						row.elms = [];
						row.elms.push(elm);
						rows.push(row);
					}
				});

				return rows;
			}
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
