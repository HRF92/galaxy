define(["libs/underscore"],function(c){function d(g,f,e){var h=new XMLHttpRequest();h.open("GET",g,true);h.setRequestHeader("Accept","application/json");h.setRequestHeader("Cache-Control","no-cache");h.setRequestHeader("X-Requested-With","XMLHttpRequest");h.onloadend=function(){var i=h.status;if(i==200){try{response=jQuery.parseJSON(h.responseText)}catch(j){response=h.responseText}f&&f(response)}else{e&&e(i)}};h.send()}function b(h,e){var f=$('<div class="'+h+'"></div>');f.appendTo(":eq(0)");var g=f.css(e);f.remove();return g}function a(e){if(!$('link[href^="'+e+'"]').length){$('<link href="'+galaxy_config.root+e+'" rel="stylesheet">').appendTo("head")}}return{cssLoadFile:a,cssGetAttribute:b,jsonFromUrl:d}});