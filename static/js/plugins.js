// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
	
	/*Uikit*/
	/*! UIkit 2.6.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */

!function(a){if("function"==typeof define&&define.amd&&define("uikit",function(){var b=a(window,window.jQuery,window.document);return b.load=function(a,c,d,e){var f,g=a.split(","),h=[],i=(e.config&&e.config.uikit&&e.config.uikit.base?e.config.uikit.base:"").replace(/\/+$/g,"");if(!i)throw new Error("Please define base path to uikit in the requirejs config.");for(f=0;f<g.length;f+=1){var j=g[f].replace(/\./g,"/");h.push(i+"/js/addons/"+j)}c(h,function(){d(b)})},b}),!window.jQuery)throw new Error("UIkit requires jQuery");window&&window.jQuery&&a(window,window.jQuery,window.document)}(function(a,b,c){"use strict";var d=b.UIkit||{},e=b("html"),f=b(window);return d.fn?d:(d.version="2.6.0",d.fn=function(a,c){var e=arguments,f=a.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),g=f[1],h=f[2];return d[g]?this.each(function(){var a=b(this),f=a.data(g);f||a.data(g,f=new d[g](this,h?void 0:c)),h&&f[h].apply(f,Array.prototype.slice.call(e,1))}):(b.error("UIkit component ["+g+"] does not exist."),this)},d.support={},d.support.transition=function(){var a=function(){var a,b=c.body||c.documentElement,d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(a in d)if(void 0!==b.style[a])return d[a]}();return a&&{end:a}}(),d.support.animation=function(){var a=function(){var a,b=c.body||c.documentElement,d={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(a in d)if(void 0!==b.style[a])return d[a]}();return a&&{end:a}}(),d.support.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.msRequestAnimationFrame||a.oRequestAnimationFrame||function(b){a.setTimeout(b,1e3/60)},d.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||a.DocumentTouch&&document instanceof a.DocumentTouch||a.navigator.msPointerEnabled&&a.navigator.msMaxTouchPoints>0||a.navigator.pointerEnabled&&a.navigator.maxTouchPoints>0||!1,d.support.mutationobserver=a.MutationObserver||a.WebKitMutationObserver||a.MozMutationObserver||null,d.Utils={},d.Utils.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)},h=c&&!d;clearTimeout(d),d=setTimeout(g,b),h&&a.apply(e,f)}},d.Utils.removeCssRules=function(a){var b,c,d,e,f,g,h,i,j,k;a&&setTimeout(function(){try{for(k=document.styleSheets,e=0,h=k.length;h>e;e++){for(d=k[e],c=[],d.cssRules=d.cssRules,b=f=0,i=d.cssRules.length;i>f;b=++f)d.cssRules[b].type===CSSRule.STYLE_RULE&&a.test(d.cssRules[b].selectorText)&&c.unshift(b);for(g=0,j=c.length;j>g;g++)d.deleteRule(c[g])}}catch(l){}},0)},d.Utils.isInView=function(a,c){var d=b(a);if(!d.is(":visible"))return!1;var e=f.scrollLeft(),g=f.scrollTop(),h=d.offset(),i=h.left,j=h.top;return c=b.extend({topoffset:0,leftoffset:0},c),j+d.height()>=g&&j-c.topoffset<=g+f.height()&&i+d.width()>=e&&i-c.leftoffset<=e+f.width()?!0:!1},d.Utils.options=function(a){if(b.isPlainObject(a))return a;var c=a?a.indexOf("{"):-1,d={};if(-1!=c)try{d=new Function("","var json = "+a.substr(c)+"; return JSON.parse(JSON.stringify(json));")()}catch(e){}return d},d.Utils.template=function(a,b){for(var c,d,e,f,g=a.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),h=0,i=[],j=0;h<g.length;){if(c=g[h],c.match(/\{\{\s*(.+?)\s*\}\}/))switch(h+=1,c=g[h],d=c[0],e=c.substring(c.match(/^(\^|\#|\!|\~|\:)/)?1:0),d){case"~":i.push("for(var $i=0;$i<"+e+".length;$i++) { var $item = "+e+"[$i];"),j++;break;case":":i.push("for(var $key in "+e+") { var $val = "+e+"[$key];"),j++;break;case"#":i.push("if("+e+") {"),j++;break;case"^":i.push("if(!"+e+") {"),j++;break;case"/":i.push("}"),j--;break;case"!":i.push("__ret.push("+e+");");break;default:i.push("__ret.push(escape("+e+"));")}else i.push("__ret.push('"+c.replace(/\'/g,"\\'")+"');");h+=1}f=["var __ret = [];","try {","with($data){",j?'__ret = ["Not all blocks are closed correctly."]':i.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n");var k=new Function("$data",f);return b?k(b):k},d.Utils.events={},d.Utils.events.click=d.support.touch?"tap":"click",b.UIkit=d,b.fn.uk=d.fn,b.UIkit.langdirection="rtl"==e.attr("dir")?"right":"left",b(function(){if(b(document).trigger("uk-domready"),d.support.mutationobserver){try{var a=new d.support.mutationobserver(d.Utils.debounce(function(){b(document).trigger("uk-domready")},300));a.observe(document.body,{childList:!0,subtree:!0})}catch(c){}d.support.touch&&d.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/)}}),e.addClass(d.support.touch?"uk-touch":"uk-notouch"),d)}),function(a,b){"use strict";var c=a(window),d="resize orientationchange",e=[],f=function(g,h){var i=this,j=a(g);j.data("stackMargin")||(this.element=j,this.columns=this.element.children(),this.options=a.extend({},f.defaults,h),this.columns.length&&(c.on(d,function(){var d=function(){i.process()};return a(function(){d(),c.on("load",d)}),b.Utils.debounce(d,150)}()),a(document).on("uk-domready",function(){i.columns=i.element.children(),i.process()}),this.element.data("stackMargin",this),e.push(this)))};a.extend(f.prototype,{process:function(){var b=this;this.revert();var c=!1,d=this.columns.filter(":visible:first"),e=d.length?d.offset().top:!1;if(e!==!1)return this.columns.each(function(){var d=a(this);d.is(":visible")&&(c?d.addClass(b.options.cls):d.offset().top!=e&&(d.addClass(b.options.cls),c=!0))}),this},revert:function(){return this.columns.removeClass(this.options.cls),this}}),f.defaults={cls:"uk-margin-small-top"},b.stackMargin=f,a(document).on("uk-domready",function(){a("[data-uk-margin]").each(function(){var c,d=a(this);d.data("stackMargin")||(c=new f(d,b.Utils.options(d.attr("data-uk-margin"))))})}),a(document).on("uk-check-display",function(){e.forEach(function(a){a.element.is(":visible")&&a.process()})})}(jQuery,jQuery.UIkit),function(a){function b(a,b,c,d){return Math.abs(a-b)>=Math.abs(c-d)?a-b>0?"Left":"Right":c-d>0?"Up":"Down"}function c(){j=null,l.last&&(l.el.trigger("longTap"),l={})}function d(){j&&clearTimeout(j),j=null}function e(){g&&clearTimeout(g),h&&clearTimeout(h),i&&clearTimeout(i),j&&clearTimeout(j),g=h=i=j=null,l={}}function f(a){return a.pointerType==a.MSPOINTER_TYPE_TOUCH&&a.isPrimary}var g,h,i,j,k,l={},m=750;a(function(){var n,o,p,q=0,r=0;"MSGesture"in window&&(k=new MSGesture,k.target=document.body),a(document).bind("MSGestureEnd",function(a){var b=a.originalEvent.velocityX>1?"Right":a.originalEvent.velocityX<-1?"Left":a.originalEvent.velocityY>1?"Down":a.originalEvent.velocityY<-1?"Up":null;b&&(l.el.trigger("swipe"),l.el.trigger("swipe"+b))}).on("touchstart MSPointerDown",function(b){("MSPointerDown"!=b.type||f(b.originalEvent))&&(p="MSPointerDown"==b.type?b:b.originalEvent.touches[0],n=Date.now(),o=n-(l.last||n),l.el=a("tagName"in p.target?p.target:p.target.parentNode),g&&clearTimeout(g),l.x1=p.pageX,l.y1=p.pageY,o>0&&250>=o&&(l.isDoubleTap=!0),l.last=n,j=setTimeout(c,m),k&&"MSPointerDown"==b.type&&k.addPointer(b.originalEvent.pointerId))}).on("touchmove MSPointerMove",function(a){("MSPointerMove"!=a.type||f(a.originalEvent))&&(p="MSPointerMove"==a.type?a:a.originalEvent.touches[0],d(),l.x2=p.pageX,l.y2=p.pageY,q+=Math.abs(l.x1-l.x2),r+=Math.abs(l.y1-l.y2))}).on("touchend MSPointerUp",function(c){("MSPointerUp"!=c.type||f(c.originalEvent))&&(d(),l.x2&&Math.abs(l.x1-l.x2)>30||l.y2&&Math.abs(l.y1-l.y2)>30?i=setTimeout(function(){l.el.trigger("swipe"),l.el.trigger("swipe"+b(l.x1,l.x2,l.y1,l.y2)),l={}},0):"last"in l&&(isNaN(q)||30>q&&30>r?h=setTimeout(function(){var b=a.Event("tap");b.cancelTouch=e,l.el.trigger(b),l.isDoubleTap?(l.el.trigger("doubleTap"),l={}):g=setTimeout(function(){g=null,l.el.trigger("singleTap"),l={}},250)},0):l={},q=r=0))}).on("touchcancel MSPointerCancel",e),a(window).on("scroll",e)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(b){a.fn[b]=function(c){return a(this).on(b,c)}})}(jQuery),function(a,b){"use strict";var c=function(b,d){var e=this;this.options=a.extend({},c.defaults,d),this.element=a(b),this.element.data("alert")||(this.element.on("click",this.options.trigger,function(a){a.preventDefault(),e.close()}),this.element.data("alert",this))};a.extend(c.prototype,{close:function(){function a(){b.trigger("closed").remove()}var b=this.element.trigger("close");this.options.fade?b.css("overflow","hidden").css("max-height",b.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,a):a()}}),c.defaults={fade:!0,duration:200,trigger:".uk-alert-close"},b.alert=c,a(document).on("click.alert.uikit","[data-uk-alert]",function(d){var e=a(this);if(!e.data("alert")){var f=new c(e,b.Utils.options(e.data("uk-alert")));a(d.target).is(e.data("alert").options.trigger)&&(d.preventDefault(),f.close())}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);f.data("buttonRadio")||(this.options=a.extend({},c.defaults,d),this.element=f.on("click",this.options.target,function(b){b.preventDefault(),f.find(e.options.target).not(this).removeClass("uk-active").blur(),f.trigger("change",[a(this).addClass("uk-active")])}),this.element.data("buttonRadio",this))};a.extend(c.prototype,{getSelected:function(){this.element.find(".uk-active")}}),c.defaults={target:".uk-button"};var d=function(b,c){var e=a(b);e.data("buttonCheckbox")||(this.options=a.extend({},d.defaults,c),this.element=e.on("click",this.options.target,function(b){b.preventDefault(),e.trigger("change",[a(this).toggleClass("uk-active").blur()])}),this.element.data("buttonCheckbox",this))};a.extend(d.prototype,{getSelected:function(){this.element.find(".uk-active")}}),d.defaults={target:".uk-button"};var e=function(b,c){var d=this,f=a(b);f.data("button")||(this.options=a.extend({},e.defaults,c),this.element=f.on("click",function(a){a.preventDefault(),d.toggle(),f.trigger("change",[f.blur().hasClass("uk-active")])}),this.element.data("button",this))};a.extend(e.prototype,{options:{},toggle:function(){this.element.toggleClass("uk-active")}}),e.defaults={},b.button=e,b.buttonCheckbox=d,b.buttonRadio=c,a(document).on("click.buttonradio.uikit","[data-uk-button-radio]",function(d){var e=a(this);if(!e.data("buttonRadio")){var f=new c(e,b.Utils.options(e.attr("data-uk-button-radio")));a(d.target).is(f.options.target)&&a(d.target).trigger("click")}}),a(document).on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(c){var e=a(this);if(!e.data("buttonCheckbox")){var f=new d(e,b.Utils.options(e.attr("data-uk-button-checkbox")));a(c.target).is(f.options.target)&&a(c.target).trigger("click")}}),a(document).on("click.button.uikit","[data-uk-button]",function(){var b=a(this);if(!b.data("button")){{new e(b,b.attr("data-uk-button"))}b.trigger("click")}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=!1,d=function(e,f){var g=this,h=a(e);h.data("dropdown")||(this.options=a.extend({},d.defaults,f),this.element=h,this.dropdown=this.element.find(".uk-dropdown"),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?a(this.options.justify):!1,this.boundary=a(this.options.boundary),this.boundary.length||(this.boundary=a(window)),"click"==this.options.mode||b.support.touch?this.element.on("click",function(b){var d=a(b.target);d.parents(".uk-dropdown").length||((d.is("a[href='#']")||d.parent().is("a[href='#']"))&&b.preventDefault(),d.blur()),g.element.hasClass("uk-open")?(d.is("a")||!g.element.find(".uk-dropdown").find(b.target).length)&&(g.element.removeClass("uk-open"),c=!1):g.show()}):this.element.on("mouseenter",function(){g.remainIdle&&clearTimeout(g.remainIdle),g.show()}).on("mouseleave",function(){g.remainIdle=setTimeout(function(){g.element.removeClass("uk-open"),g.remainIdle=!1,c&&c[0]==g.element[0]&&(c=!1)},g.options.remaintime)}).on("click",function(b){var c=a(b.target);g.remainIdle&&clearTimeout(g.remainIdle),(c.is("a[href='#']")||c.parent().is("a[href='#']"))&&b.preventDefault(),g.show()}),this.element.data("dropdown",this))};a.extend(d.prototype,{remainIdle:!1,show:function(){c&&c[0]!=this.element[0]&&c.removeClass("uk-open"),this.checkDimensions(),this.element.addClass("uk-open"),c=this.element,this.registerOuterClick()},registerOuterClick:function(){var b=this;a(document).off("click.outer.dropdown"),setTimeout(function(){a(document).on("click.outer.dropdown",function(d){!c||c[0]!=b.element[0]||!a(d.target).is("a")&&b.element.find(".uk-dropdown").find(d.target).length||(c.removeClass("uk-open"),a(document).off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){var b=this.dropdown.css("margin-"+a.UIkit.langdirection,"").css("min-width",""),c=b.show().offset(),d=b.outerWidth(),e=this.boundary.width(),f=this.boundary.offset()?this.boundary.offset().left:0;if(this.centered&&(b.css("margin-"+a.UIkit.langdirection,-1*(parseFloat(d)/2-b.parent().width()/2)),c=b.offset(),(d+c.left>e||c.left<0)&&(b.css("margin-"+a.UIkit.langdirection,""),c=b.offset())),this.justified&&this.justified.length){var g=this.justified.outerWidth();if(b.css("min-width",g),"right"==a.UIkit.langdirection){var h=e-(this.justified.offset().left+g),i=e-(b.offset().left+b.outerWidth());b.css("margin-right",h-i)}else b.css("margin-left",this.justified.offset().left-c.left);c=b.offset()}d+(c.left-f)>e&&(b.addClass("uk-dropdown-flip"),c=b.offset()),c.left<0&&b.addClass("uk-dropdown-stack"),b.css("display","")}}}),d.defaults={mode:"hover",remaintime:800,justify:!1,boundary:a(window)},b.dropdown=d;var e=b.support.touch?"click":"mouseenter";a(document).on(e+".dropdown.uikit","[data-uk-dropdown]",function(c){var f=a(this);if(!f.data("dropdown")){var g=new d(f,b.Utils.options(f.data("uk-dropdown")));("click"==e||"mouseenter"==e&&"hover"==g.options.mode)&&g.show(),g.element.find(".uk-dropdown").length&&c.preventDefault()}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=a(window),d="resize orientationchange",e=[],f=function(g,h){var i=this,j=a(g);j.data("gridMatchHeight")||(this.options=a.extend({},f.defaults,h),this.element=j,this.columns=this.element.children(),this.elements=this.options.target?this.element.find(this.options.target):this.columns,this.columns.length&&(c.on(d,function(){var d=function(){i.match()};return a(function(){d(),c.on("load",d)}),b.Utils.debounce(d,150)}()),a(document).on("uk-domready",function(){i.columns=i.element.children(),i.elements=i.options.target?i.element.find(i.options.target):i.columns,i.match()}),this.element.data("gridMatchHeight",this),e.push(this)))};a.extend(f.prototype,{match:function(){this.revert();var b=this.columns.filter(":visible:first");if(b.length){var c=Math.ceil(100*parseFloat(b.css("width"))/parseFloat(b.parent().css("width")))>=100?!0:!1,d=this;if(!c)return this.options.row?(this.element.width(),setTimeout(function(){var b=!1,c=[];d.elements.each(function(){var e=a(this),f=e.offset().top;f!=b&&c.length&&(d.matchHeights(a(c)),c=[],f=e.offset().top),c.push(e),b=f}),c.length&&d.matchHeights(a(c))},0)):this.matchHeights(this.elements),this}},revert:function(){return this.elements.css("min-height",""),this},matchHeights:function(b){if(!(b.length<2)){var c=0;b.each(function(){c=Math.max(c,a(this).outerHeight())}).each(function(){var b=a(this),d=c-(b.outerHeight()-b.height());b.css("min-height",d+"px")})}}}),f.defaults={target:!1,row:!1};var g=function(c,d){var e=a(c);if(!e.data("gridMargin")){this.options=a.extend({},g.defaults,d);var f=new b.stackMargin(e,this.options);e.data("gridMargin",f)}};g.defaults={cls:"uk-grid-margin"},b.gridMatchHeight=f,b.gridMargin=g,a(document).on("uk-domready",function(){a("[data-uk-grid-match],[data-uk-grid-margin]").each(function(){var c,d=a(this);d.is("[data-uk-grid-match]")&&!d.data("gridMatchHeight")&&(c=new f(d,b.Utils.options(d.attr("data-uk-grid-match")))),d.is("[data-uk-grid-margin]")&&!d.data("gridMargin")&&(c=new g(d,b.Utils.options(d.attr("data-uk-grid-margin"))))})}),a(document).on("uk-check-display",function(){e.forEach(function(a){a.element.is(":visible")&&a.match()})})}(jQuery,jQuery.UIkit),function(a,b,c){"use strict";function d(b,c){return c?("object"==typeof b?(b=b instanceof jQuery?b:a(b),b.parent().length&&(c.persist=b,c.persist.data("modalPersistParent",b.parent()))):b=a("<div></div>").html("string"==typeof b||"number"==typeof b?b:"$.UIkitt.modal Error: Unsupported data type: "+typeof b),b.appendTo(c.element.find(".uk-modal-dialog")),c):void 0}var e=!1,f=a("html"),g=function(c,d){var e=this;this.element=a(c),this.options=a.extend({},g.defaults,d),this.transition=b.support.transition,this.dialog=this.element.find(".uk-modal-dialog"),this.scrollable=function(){var a=e.dialog.find(".uk-overflow-container:first");return a.length?a:!1}(),this.element.on("click",".uk-modal-close",function(a){a.preventDefault(),e.hide()}).on("click",function(b){var c=a(b.target);c[0]==e.element[0]&&e.options.bgclose&&e.hide()})};a.extend(g.prototype,{scrollable:!1,transition:!1,toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){if(!this.isActive())return e&&e.hide(!0),this.element.removeClass("uk-open").show(),this.resize(),e=this,f.addClass("uk-modal-page").height(),this.element.addClass("uk-open").trigger("uk.modal.show"),this},hide:function(a){if(this.isActive()){if(!a&&b.support.transition){var c=this;this.element.one(b.support.transition.end,function(){c._hide()}).removeClass("uk-open")}else this._hide();return this}},resize:function(){var a="padding-"+("left"==b.langdirection?"right":"left");if(this.scrollbarwidth=window.innerWidth-f.width(),f.css(a,this.scrollbarwidth),this.element.css(a,""),this.dialog.offset().left>this.scrollbarwidth&&this.element.css(a,this.scrollbarwidth-(this.element[0].scrollHeight==window.innerHeight?0:this.scrollbarwidth)),this.scrollable){this.scrollable.css("height",0);var c=Math.abs(parseInt(this.dialog.css("margin-top"),10)),d=this.dialog.outerHeight(),e=window.innerHeight,g=e-2*(20>c?20:c)-d;this.scrollable.css("height",g<this.options.minScrollHeight?"":g)}},_hide:function(){this.element.hide().removeClass("uk-open"),f.removeClass("uk-modal-page").css("padding-"+("left"==b.langdirection?"right":"left"),""),e===this&&(e=!1),this.element.trigger("uk.modal.hide")},isActive:function(){return e==this}}),g.dialog={tpl:'<div class="uk-modal"><div class="uk-modal-dialog"></div></div>'},g.defaults={keyboard:!0,show:!1,bgclose:!0,minScrollHeight:150};var h=function(b,c){var d=this,e=a(b);e.data("modal")||(this.options=a.extend({target:e.is("a")?e.attr("href"):!1},c),this.element=e,this.modal=new g(this.options.target,c),e.on("click",function(a){a.preventDefault(),d.show()}),a.each(["show","hide","isActive"],function(a,b){d[b]=function(){return d.modal[b]()}}),this.element.data("modal",this))};h.dialog=function(b,c){var e=new g(a(g.dialog.tpl).appendTo("body"),c);return e.element.on("uk.modal.hide",function(){e.persist&&(e.persist.appendTo(e.persist.data("modalPersistParent")),e.persist=!1),e.element.remove()}),d(b,e),e},h.alert=function(b,c){h.dialog(['<div class="uk-margin uk-modal-content">'+String(b)+"</div>",'<div class="uk-modal-buttons"><button class="uk-button uk-button-primary uk-modal-close">Ok</button></div>'].join(""),a.extend({bgclose:!1,keyboard:!1},c)).show()},h.confirm=function(b,c,d){c=a.isFunction(c)?c:function(){};var e=h.dialog(['<div class="uk-margin uk-modal-content">'+String(b)+"</div>",'<div class="uk-modal-buttons"><button class="uk-button uk-button-primary js-modal-confirm">Ok</button> <button class="uk-button uk-modal-close">Cancel</button></div>'].join(""),a.extend({bgclose:!1,keyboard:!1},d));e.element.find(".js-modal-confirm").on("click",function(){c(),e.hide()}),e.show()},h.Modal=g,b.modal=h,a(document).on("click.modal.uikit","[data-uk-modal]",function(c){var d=a(this);if(d.is("a")&&c.preventDefault(),!d.data("modal")){var e=new h(d,b.Utils.options(d.attr("data-uk-modal")));e.show()}}),a(document).on("keydown.modal.uikit",function(a){e&&27===a.keyCode&&e.options.keyboard&&(a.preventDefault(),e.hide())}),c.on("resize orientationchange",b.Utils.debounce(function(){e&&e.resize()},150))}(jQuery,jQuery.UIkit,jQuery(window)),function(a,b){"use strict";var c,d=a(window),e=a(document),f={show:function(b){if(b=a(b),b.length){var g=a("html"),h=b.find(".uk-offcanvas-bar:first"),i="right"==a.UIkit.langdirection,j=(h.hasClass("uk-offcanvas-bar-flip")?-1:1)*(i?-1:1),k=-1==j&&d.width()<window.innerWidth?window.innerWidth-d.width():0;c={x:window.scrollX,y:window.scrollY},b.addClass("uk-active"),g.css({width:window.innerWidth,height:window.innerHeight}).addClass("uk-offcanvas-page"),g.css(i?"margin-right":"margin-left",(i?-1:1)*(h.outerWidth()-k)*j).width(),h.addClass("uk-offcanvas-bar-show").width(),b.off(".ukoffcanvas").on("click.ukoffcanvas swipeRight.ukoffcanvas swipeLeft.ukoffcanvas",function(b){var c=a(b.target);if(!b.type.match(/swipe/)&&!c.hasClass("uk-offcanvas-close")){if(c.hasClass("uk-offcanvas-bar"))return;if(c.parents(".uk-offcanvas-bar:first").length)return}b.stopImmediatePropagation(),f.hide()}),e.on("keydown.ukoffcanvas",function(a){27===a.keyCode&&f.hide()})}},hide:function(b){var d=a("html"),f=a(".uk-offcanvas.uk-active"),g="right"==a.UIkit.langdirection,h=f.find(".uk-offcanvas-bar:first");f.length&&(a.UIkit.support.transition&&!b?(d.one(a.UIkit.support.transition.end,function(){d.removeClass("uk-offcanvas-page").attr("style",""),f.removeClass("uk-active"),window.scrollTo(c.x,c.y)}).css(g?"margin-right":"margin-left",""),setTimeout(function(){h.removeClass("uk-offcanvas-bar-show")},50)):(d.removeClass("uk-offcanvas-page").attr("style",""),f.removeClass("uk-active"),h.removeClass("uk-offcanvas-bar-show"),window.scrollTo(c.x,c.y)),f.off(".ukoffcanvas"),e.off(".ukoffcanvas"))}},g=function(b,c){var d=this,e=a(b);e.data("offcanvas")||(this.options=a.extend({target:e.is("a")?e.attr("href"):!1},c),this.element=e,e.on("click",function(a){a.preventDefault(),f.show(d.options.target)}),this.element.data("offcanvas",this))};g.offcanvas=f,b.offcanvas=g,e.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(c){c.preventDefault();var d=a(this);if(!d.data("offcanvas")){{new g(d,b.Utils.options(d.attr("data-uk-offcanvas")))}d.trigger("click")}})}(jQuery,jQuery.UIkit),function(a,b){"use strict";function c(b){var c=a(b),d="auto";if(c.is(":visible"))d=c.outerHeight();else{var e={position:c.css("position"),visibility:c.css("visibility"),display:c.css("display")};d=c.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),c.css(e)}return d}var d=function(b,c){var e=this,f=a(b);f.data("nav")||(this.options=a.extend({},d.defaults,c),this.element=f.on("click",this.options.toggle,function(b){b.preventDefault();var c=a(this);e.open(c.parent()[0]==e.element[0]?c:c.parent("li"))}),this.element.find(this.options.lists).each(function(){var b=a(this),c=b.parent(),d=c.hasClass("uk-active");b.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),c.data("list-container",b.parent()),d&&e.open(c,!0)}),this.element.data("nav",this))};a.extend(d.prototype,{open:function(b,d){var e=this.element,f=a(b);this.options.multiple||e.children(".uk-open").not(b).each(function(){a(this).data("list-container")&&a(this).data("list-container").stop().animate({height:0},function(){a(this).parent().removeClass("uk-open")})}),f.toggleClass("uk-open"),f.data("list-container")&&(d?f.data("list-container").stop().height(f.hasClass("uk-open")?"auto":0):f.data("list-container").stop().animate({height:f.hasClass("uk-open")?c(f.data("list-container").find("ul:first")):0}))}}),d.defaults={toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},b.nav=d,a(document).on("uk-domready",function(){a("[data-uk-nav]").each(function(){var c=a(this);if(!c.data("nav")){new d(c,b.Utils.options(c.attr("data-uk-nav")))}})})}(jQuery,jQuery.UIkit),function(a,b,c){"use strict";var d,e,f=function(b,c){var d=this,e=a(b);e.data("tooltip")||(this.options=a.extend({},f.defaults,c),this.element=e.on({focus:function(){d.show()},blur:function(){d.hide()},mouseenter:function(){d.show()},mouseleave:function(){d.hide()}}),this.tip="function"==typeof this.options.src?this.options.src.call(this.element):this.options.src,this.element.attr("data-cached-title",this.element.attr("title")).attr("title",""),this.element.data("tooltip",this))};a.extend(f.prototype,{tip:"",show:function(){if(e&&clearTimeout(e),this.tip.length){d.stop().css({top:-2e3,visibility:"hidden"}).show(),d.html('<div class="uk-tooltip-inner">'+this.tip+"</div>");var b=this,c=a.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),f=d[0].offsetWidth,g=d[0].offsetHeight,h="function"==typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,i="function"==typeof this.options.pos?this.options.pos.call(this.element):this.options.pos,j={display:"none",visibility:"visible",top:c.top+c.height+g,left:c.left},k=i.split("-");"left"!=k[0]&&"right"!=k[0]||"right"!=a.UIkit.langdirection||(k[0]="left"==k[0]?"right":"left");var l={bottom:{top:c.top+c.height+h,left:c.left+c.width/2-f/2},top:{top:c.top-g-h,left:c.left+c.width/2-f/2},left:{top:c.top+c.height/2-g/2,left:c.left-f-h},right:{top:c.top+c.height/2-g/2,left:c.left+c.width+h}};a.extend(j,l[k[0]]),2==k.length&&(j.left="left"==k[1]?c.left:c.left+c.width-f);var m=this.checkBoundary(j.left,j.top,f,g);if(m){switch(m){case"x":i=2==k.length?k[0]+"-"+(j.left<0?"left":"right"):j.left<0?"right":"left";break;case"y":i=2==k.length?(j.top<0?"bottom":"top")+"-"+k[1]:j.top<0?"bottom":"top";break;case"xy":i=2==k.length?(j.top<0?"bottom":"top")+"-"+(j.left<0?"left":"right"):j.left<0?"right":"left"}k=i.split("-"),a.extend(j,l[k[0]]),2==k.length&&(j.left="left"==k[1]?c.left:c.left+c.width-f)}j.left-=a("body").position().left,e=setTimeout(function(){d.css(j).attr("class","uk-tooltip uk-tooltip-"+i),b.options.animation?d.css({opacity:0,display:"block"}).animate({opacity:1},parseInt(b.options.animation,10)||400):d.show(),e=!1},parseInt(this.options.delay,10)||0)}},hide:function(){this.element.is("input")&&this.element[0]===document.activeElement||(e&&clearTimeout(e),d.stop(),this.options.animation?d.fadeOut(parseInt(this.options.animation,10)||400):d.hide())},content:function(){return this.tip},checkBoundary:function(a,b,d,e){var f="";return(0>a||a-c.scrollLeft()+d>window.innerWidth)&&(f+="x"),(0>b||b-c.scrollTop()+e>window.innerHeight)&&(f+="y"),f}}),f.defaults={offset:5,pos:"top",animation:!1,delay:0,src:function(){return this.attr("title")}},b.tooltip=f,a(function(){d=a('<div class="uk-tooltip"></div>').appendTo("body")}),a(document).on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-uk-tooltip]",function(){var c=a(this);if(!c.data("tooltip")){{new f(c,b.Utils.options(c.attr("data-uk-tooltip")))}c.trigger("mouseenter")}})}(jQuery,jQuery.UIkit,jQuery(window)),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);if(!f.data("switcher")){if(this.options=a.extend({},c.defaults,d),this.element=f.on("click",this.options.toggle,function(a){a.preventDefault(),e.show(this)}),this.options.connect){this.connect=a(this.options.connect).find(".uk-active").removeClass(".uk-active").end();var g=this.element.find(this.options.toggle),h=g.filter(".uk-active");h.length?this.show(h):(h=g.eq(this.options.active),this.show(h.length?h:g.eq(0)))}this.element.data("switcher",this)}};a.extend(c.prototype,{show:function(b){b=isNaN(b)?a(b):this.element.find(this.options.toggle).eq(b);var c=b;if(!c.hasClass("uk-disabled")){if(this.element.find(this.options.toggle).filter(".uk-active").removeClass("uk-active"),c.addClass("uk-active"),this.options.connect&&this.connect.length){var d=this.element.find(this.options.toggle).index(c);this.connect.children().removeClass("uk-active").eq(d).addClass("uk-active")}this.element.trigger("uk.switcher.show",[c]),a(document).trigger("uk-check-display")}}}),c.defaults={connect:!1,toggle:">*",active:0},b.switcher=c,a(document).on("uk-domready",function(){a("[data-uk-switcher]").each(function(){var d=a(this);if(!d.data("switcher")){new c(d,b.Utils.options(d.attr("data-uk-switcher")))}})})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);if(!f.data("tab")){if(this.element=f,this.options=a.extend({},c.defaults,d),this.options.connect&&(this.connect=a(this.options.connect)),window.location.hash){var g=this.element.children().filter(window.location.hash);g.length&&this.element.children().removeClass("uk-active").filter(g).addClass("uk-active")}var h=a('<li class="uk-tab-responsive uk-active"><a href="javascript:void(0);"></a></li>'),i=h.find("a:first"),j=a('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),k=j.find("ul");i.html(this.element.find("li.uk-active:first").find("a").text()),this.element.hasClass("uk-tab-bottom")&&j.addClass("uk-dropdown-up"),this.element.hasClass("uk-tab-flip")&&j.addClass("uk-dropdown-flip"),this.element.find("a").each(function(b){var c=a(this).parent(),d=a('<li><a href="javascript:void(0);">'+c.text()+"</a></li>").on("click",function(){e.element.data("switcher").show(b)});a(this).parents(".uk-disabled:first").length||k.append(d)}),this.element.uk("switcher",{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active}),h.append(j).uk("dropdown",{mode:"click"}),this.element.append(h).data({dropdown:h.data("dropdown"),mobilecaption:i}).on("uk.switcher.show",function(a,b){h.addClass("uk-active"),i.html(b.find("a").text())}),this.element.data("tab",this)}};c.defaults={connect:!1,active:0},b.tab=c,a(document).on("uk-domready",function(){a("[data-uk-tab]").each(function(){var d=a(this);if(!d.data("tab")){new c(d,b.Utils.options(d.attr("data-uk-tab")))}})})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=a(window),d=[],e=function(){for(var a=0;a<d.length;a++)b.support.requestAnimationFrame.apply(window,[d[a].check])},f=function(c,e){var g=a(c);if(!g.data("scrollspy")){this.options=a.extend({},f.defaults,e),this.element=a(c);var h,i,j,k=this,l=function(){var a=b.Utils.isInView(k.element,k.options);a&&!i&&(h&&clearTimeout(h),j||(k.element.addClass(k.options.initcls),k.offset=k.element.offset(),j=!0,k.element.trigger("uk-scrollspy-init")),h=setTimeout(function(){a&&k.element.addClass("uk-scrollspy-inview").addClass(k.options.cls).width()},k.options.delay),i=!0,k.element.trigger("uk.scrollspy.inview")),!a&&i&&k.options.repeat&&(k.element.removeClass("uk-scrollspy-inview").removeClass(k.options.cls),i=!1,k.element.trigger("uk.scrollspy.outview"))};l(),this.element.data("scrollspy",this),this.check=l,d.push(this)}};f.defaults={cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},b.scrollspy=f;var g=[],h=function(){for(var a=0;a<g.length;a++)b.support.requestAnimationFrame.apply(window,[g[a].check])},i=function(d,e){var f=a(d);if(!f.data("scrollspynav")){this.element=f,this.options=a.extend({},i.defaults,e);var h,j=[],k=this.element.find("a[href^='#']").each(function(){j.push(a(this).attr("href"))}),l=a(j.join(",")),m=this,n=function(){h=[];for(var a=0;a<l.length;a++)b.Utils.isInView(l.eq(a),m.options)&&h.push(l.eq(a));if(h.length){var d=c.scrollTop(),e=function(){for(var a=0;a<h.length;a++)if(h[a].offset().top>=d)return h[a]}();if(!e)return;m.options.closest?k.closest(m.options.closest).removeClass(m.options.cls).end().filter("a[href='#"+e.attr("id")+"']").closest(m.options.closest).addClass(m.options.cls):k.removeClass(m.options.cls).filter("a[href='#"+e.attr("id")+"']").addClass(m.options.cls)}};this.options.smoothscroll&&b.smoothScroll&&k.each(function(){new b.smoothScroll(this,m.options.smoothscroll)}),n(),this.element.data("scrollspynav",this),this.check=n,g.push(this)
}};i.defaults={cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},b.scrollspynav=i;var j=function(){e(),h()};c.on("scroll",j).on("resize orientationchange",b.Utils.debounce(j,50)),a(document).on("uk-domready",function(){a("[data-uk-scrollspy]").each(function(){var c=a(this);if(!c.data("scrollspy")){new f(c,b.Utils.options(c.attr("data-uk-scrollspy")))}}),a("[data-uk-scrollspy-nav]").each(function(){var c=a(this);if(!c.data("scrollspynav")){new i(c,b.Utils.options(c.attr("data-uk-scrollspy-nav")))}})})}(jQuery,jQuery.UIkit),function(a,b){"use strict";var c=function(b,d){var e=this,f=a(b);f.data("smoothScroll")||(this.options=a.extend({},c.defaults,d),this.element=f.on("click",function(){{var b=a(a(this.hash).length?this.hash:"body"),c=b.offset().top-e.options.offset,d=a(document).height(),f=a(window).height();b.outerHeight()}return c+f>d&&(c=d-f),a("html,body").stop().animate({scrollTop:c},e.options.duration,e.options.transition),!1}),this.element.data("smoothScroll",this))};c.defaults={duration:1e3,transition:"easeOutExpo",offset:0},b.smoothScroll=c,a.easing.easeOutExpo||(a.easing.easeOutExpo=function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c}),a(document).on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var d=a(this);if(!d.data("smoothScroll")){{new c(d,b.Utils.options(d.attr("data-uk-smooth-scroll")))}d.trigger("click")}})}(jQuery,jQuery.UIkit),function(a,b,c){var d=function(a,c){var e=this,f=b(a);f.data("toggle")||(this.options=b.extend({},d.defaults,c),this.totoggle=this.options.target?b(this.options.target):[],this.element=f.on("click",function(a){a.preventDefault(),e.toggle()}),this.element.data("toggle",this))};b.extend(d.prototype,{toggle:function(){this.totoggle.length&&(this.totoggle.toggleClass(this.options.cls),"uk-hidden"==this.options.cls&&b(document).trigger("uk-check-display"))}}),d.defaults={target:!1,cls:"uk-hidden"},c.toggle=d,b(document).on("uk-domready",function(){b("[data-uk-toggle]").each(function(){var a=b(this);if(!a.data("toggle")){new d(a,c.Utils.options(a.attr("data-uk-toggle")))}})})}(this,jQuery,jQuery.UIkit);
}());

// Place any jQuery/helper plugins in here.


//bxslider start:

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,
		slideZIndex: 50,
		wrapperClass: 'bx-wrapper',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: true,
		pause: 3000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		autoSlideForOnePage: false,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {},
		onSliderResize: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('img, iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('img, iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true and has more than 1 page, start the show
			if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}

			if(slider.viewport.css('box-sizing') == 'border-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
							parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
			}else if(slider.viewport.css('box-sizing') == 'padding-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
			}

			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width() + slider.settings.slideMargin;
					slidesShowing = Math.floor((slider.viewport.width() +
						slider.settings.slideMargin) / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = Math.ceil(slider.children.length / getMoveBy());
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.on('click', 'a', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
			slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			if(pagerLink.attr('data-slide-index') !== undefined){
				var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
				// if clicked pager link is not active, continue with the goToSlide call
				if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
				e.preventDefault();
			}
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if(position){
					if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
					else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
				}
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// don't do anything if slider isn't initialized.
			if(!slider.initialized) return;
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
				// Call user resize handler
				slider.settings.onSliderResize.call(el, slider.active.index);
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns current slide element
		 */
		el.getCurrentSlideElement = function(){
			return slider.children.eq(slider.active.index);
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);


//End bxslider