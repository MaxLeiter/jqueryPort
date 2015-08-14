/** $(document).ready(function() {}) **/
function ready(bool) {
	if (document.readyState != 'loading'){
		return true;
		finished();
	} else {
		document.addEventListener('DOMContentLoaded', finished);
	}
}

/** $(element).prev() **/
function prev(element) {
	return element.previousElementSibling();
}

/** $(element).next() **/
function next(element) {
	return element.nextElementSibling();
}

/** $(element).parent() **/
function parent(element) {
	return element.parentNode;
}

/** $(element).sibilings() **/
function siblings(element) {
	Array.prototype.filter.call(element.parentNode.children, function(child) {
		return child !== element;
	});
}

/** $(element).children() **/
function children(element) {
	return element.children;
}

/**$(element).find(selector) **/
function findChildren(element, selector) {
	return element.querySelectorAll(selector);
}

/** $(element).addClass(className) **/
function addClass(element, className) {
	if (element.classList) {
		element.classList.add(className);
	} else {
		element.className += ' ' + className;
	}
}

/** $(element).removeClass(className) **/
function removeClass(element, className) {
	if (element.classList) {
		element.classList.remove(className);
	} else {
		document.querySelector(element).className.replace('/\b' + className + '\b/','');
	}
}

/** $(element).hide() **/
function hide(elemet) {
	element.style.display = 'none';
}

/** $(element).show() **/
function show(element) {
	element.style.display = '';
}


/** #(element).fadeIn() **/
function fadeIn(element) {
	element.style.opacity = 0;

	var last = +new Date();
	var tick = function() {
		element.style.opacity = +element.style.opacity + (new Date() - last) / 400;
		last = +new Date();

		if (+element.style.opacity < 1) {
			(window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
		}
	};

	tick();
}

/** $(element).empty() **/
function empty(element) {
	element.innerHTML = '';
}

/** $(element).attr('attr') **/
function attr(element, attr) {
	return element.getAttribute(attr);
}

/** $(element).html() **/
function html(element) {
	return element.innerHTML;
}

/** $(element).css(ruleName)**/
function css(element, ruleName) {
	getComputedStyle(element)[ruleName];
}

/** $(element).text()**/
function text(element) {
	return element.textContent;
}

/** $(element).hasClass(className)**/
function hasClass(element, className) {
	if(element.classList) {
		return element.classList.contains(className);
	} else {
		return false;
	}
}

/** $(element).is(equalTo)**/
function is(element, comparedElement) {
	if(element === comparedElement) {
		return true;
	} else {
		return false;
	}
}

/** $(element).next()**/
function next(element) {
	return element.nextElementSibiling;
}

/** $(element).position()**/
function position(element) {
	return {left: element.offsetLeft, top: element.offsetTop};
}

/** $(parent).prepend(element)**/
function prepend(parent, element) {
	parent.insertBefore(element, parent.firstChild);
}

/** $(parent).append(element)**/
function prepend(parent, element) {
	parent.appendChild(element);
}

/** $(element).before(html) **/
function before(element, html) {
	element.insertAdjacentHTML('beforebegin', html);
}

/** $(element).after(html) **/
function before(element, html) {
	element.insertAdjacentHTML('afterend', html);
}

/** $.proxy(fn, context) **/
function bind(fn, context) {
	fn.bind(context);
}

/** $.isArray(array) **/
function isArray(array) {
	return Array.isArray(array);
}

/** $.now() **/
function now() {
	return Date.now();
}

/** $.parseJSON(string) **/
function parseJSON(string) {
	return JSON.parse(string);
}

/** $.parseHTML(html) **/
function parseHTML(html) {
	function parse(html) {
		var tmp = document.implementation.createHTMLDocument();
		tmp.body.innerHTML = str;
		return tmp.body.children;
	};

	return parseHTML(htmlString);
}

/** $.trim(string) **/
function trim(string) {
	return string.trim();
}
