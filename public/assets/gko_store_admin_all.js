/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie=function(a,b,c){if(arguments.length>1&&String(b)!=="[object Object]"){c=jQuery.extend({},c);if(b===null||b===undefined)c.expires=-1;if(typeof c.expires=="number"){var d=c.expires,e=c.expires=new Date;e.setDate(e.getDate()+d)}return b=String(b),document.cookie=[encodeURIComponent(a),"=",c.raw?b:encodeURIComponent(b),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}c=b||{};var f,g=c.raw?function(a){return a}:decodeURIComponent;return(f=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)")).exec(document.cookie))?g(f[1]):null},function(a){var b={method:"GET",contentType:"json",queryParam:"q",searchDelay:300,minChars:1,propertyToSearch:"name",jsonContainer:null,hintText:"Type in a search term",noResultsText:"No results",searchingText:"Searching...",deleteText:"&times;",animateDropdown:!0,tokenLimit:null,tokenDelimiter:",",preventDuplicates:!1,tokenValue:"id",prePopulate:null,processPrePopulate:!1,idPrefix:"token-input-",resultsFormatter:function(a){return"<li>"+a[this.propertyToSearch]+"</li>"},tokenFormatter:function(a){return"<li><p>"+a[this.propertyToSearch]+"</p></li>"},onResult:null,onAdd:null,onDelete:null,onReady:null},c={tokenList:"token-input-list",token:"token-input-token",tokenDelete:"token-input-delete-token",selectedToken:"token-input-selected-token",highlightedToken:"token-input-highlighted-token",dropdown:"token-input-dropdown",dropdownItem:"token-input-dropdown-item",dropdownItem2:"token-input-dropdown-item2",selectedDropdownItem:"token-input-selected-dropdown-item",inputToken:"token-input-input-token"},d={BEFORE:0,AFTER:1,END:2},e={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,NUMPAD_ENTER:108,COMMA:188},f={init:function(c,d){var e=a.extend({},b,d||{});return this.each(function(){a(this).data("tokenInputObject",new a.TokenList(this,c,e))})},clear:function(){return this.data("tokenInputObject").clear(),this},add:function(a){return this.data("tokenInputObject").add(a),this},remove:function(a){return this.data("tokenInputObject").remove(a),this},get:function(){return this.data("tokenInputObject").getTokens()}};a.fn.tokenInput=function(a){return f[a]?f[a].apply(this,Array.prototype.slice.call(arguments,1)):f.init.apply(this,arguments)},a.TokenList=function(b,f,g){function x(){if(g.tokenLimit!==null&&j>=g.tokenLimit){n.hide(),H();return}}function y(){if(m===(m=n.val()))return;var a=m.replace(/&/g,"&amp;").replace(/\s/g," ").replace(/</g,"&lt;").replace(/>/g,"&gt;");v.html(a),n.width(v.width()+30)}function z(a){return a>=48&&a<=90||a>=96&&a<=111||a>=186&&a<=192||a>=219&&a<=222}function A(b){var c=g.tokenFormatter(b);c=a(c).addClass(g.classes.token).insertBefore(t),a("<span>"+g.deleteText+"</span>").addClass(g.classes.tokenDelete).appendTo(c).click(function(){return F(a(this).parent()),o.change(),!1});var d={id:b.id};return d[g.propertyToSearch]=b[g.propertyToSearch],a.data(c.get(0),"tokeninput",b),i=i.slice(0,q).concat([d]).concat(i.slice(q)),q++,G(i,o),j+=1,g.tokenLimit!==null&&j>=g.tokenLimit&&(n.hide(),H()),c}function B(b){var c=g.onAdd;if(j>0&&g.preventDuplicates){var d=null;s.children().each(function(){var c=a(this),e=a.data(c.get(0),"tokeninput");if(e&&e.id===b.id)return d=c,!1});if(d){C(d),t.insertAfter(d),n.focus();return}}if(g.tokenLimit==null||j<g.tokenLimit)A(b),x();n.val(""),H(),a.isFunction(c)&&c.call(o,b)}function C(a){a.addClass(g.classes.selectedToken),p=a.get(0),n.val(""),H()}function D(a,b){a.removeClass(g.classes.selectedToken),p=null,b===d.BEFORE?(t.insertBefore(a),q--):b===d.AFTER?(t.insertAfter(a),q++):(t.appendTo(s),q=j),n.focus()}function E(b){var c=p;p&&D(a(p),d.END),c===b.get(0)?D(b,d.END):C(b)}function F(b){var c=a.data(b.get(0),"tokeninput"),d=g.onDelete,e=b.prevAll().length;e>q&&e--,b.remove(),p=null,n.focus(),i=i.slice(0,e).concat(i.slice(e+1)),e<q&&q--,G(i,o),j-=1,g.tokenLimit!==null&&n.show().val("").focus(),a.isFunction(d)&&d.call(o,c)}function G(b,c){var d=a.map(b,function(a){return a[g.tokenValue]});c.val(d.join(g.tokenDelimiter))}function H(){u.hide().empty(),r=null}function I(){u.css({position:"absolute",top:a(s).offset().top+a(s).outerHeight(),left:a(s).offset().left,zindex:999}).show()}function J(){g.searchingText&&(u.html("<p>"+g.searchingText+"</p>"),I())}function K(){g.hintText&&(u.html("<p>"+g.hintText+"</p>"),I())}function L(a,b){return a.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+b+")(?![^<>]*>)(?![^&;]+;)","gi"),"<b>$1</b>")}function M(a,b,c){return a.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+b+")(?![^<>]*>)(?![^&;]+;)","g"),L(b,c))}function N(b,c){if(c&&c.length){u.empty();var d=a("<ul>").appendTo(u).mouseover(function(b){O(a(b.target).closest("li"))}).mousedown(function(b){return B(a(b.target).closest("li").data("tokeninput")),o.change(),!1}).hide();a.each(c,function(c,e){var f=g.resultsFormatter(e);f=M(f,e[g.propertyToSearch],b),f=a(f).appendTo(d),c%2?f.addClass(g.classes.dropdownItem):f.addClass(g.classes.dropdownItem2),c===0&&O(f),a.data(f.get(0),"tokeninput",e)}),I(),g.animateDropdown?d.slideDown("fast"):d.show()}else g.noResultsText&&(u.html("<p>"+g.noResultsText+"</p>"),I())}function O(b){b&&(r&&P(a(r)),b.addClass(g.classes.selectedDropdownItem),r=b.get(0))}function P(a){a.removeClass(g.classes.selectedDropdownItem),r=null}function Q(){var b=n.val().toLowerCase();b&&b.length&&(p&&D(a(p),d.AFTER),b.length>=g.minChars?(J(),clearTimeout(l),l=setTimeout(function(){R(b)},g.searchDelay)):H())}function R(b){var c=b+S(),d=k.get(c);if(d)N(b,d);else if(g.url){var e=S(),f={};f.data={};if(e.indexOf("?")>-1){var h=e.split("?");f.url=h[0];var i=h[1].split("&");a.each(i,function(a,b){var c=b.split("=");f.data[c[0]]=c[1]})}else f.url=e;f.data[g.queryParam]=b,f.type=g.method,f.dataType=g.contentType,g.crossDomain&&(f.dataType="jsonp"),f.success=function(d){a.isFunction(g.onResult)&&(d=g.onResult.call(o,d)),k.add(c,g.jsonContainer?d[g.jsonContainer]:d),n.val().toLowerCase()===b&&N(b,g.jsonContainer?d[g.jsonContainer]:d)},a.ajax(f)}else if(g.local_data){var j=a.grep(g.local_data,function(a){return a[g.propertyToSearch].toLowerCase().indexOf(b.toLowerCase())>-1});a.isFunction(g.onResult)&&(j=g.onResult.call(o,j)),k.add(c,j),N(b,j)}}function S(){var a=g.url;return typeof g.url=="function"&&(a=g.url.call()),a}if(a.type(f)==="string"||a.type(f)==="function"){g.url=f;var h=S();g.crossDomain===undefined&&(h.indexOf("://")===-1?g.crossDomain=!1:g.crossDomain=location.href.split(/\/+/g)[1]!==h.split(/\/+/g)[1])}else typeof f=="object"&&(g.local_data=f);g.classes?g.classes=a.extend({},c,g.classes):g.theme?(g.classes={},a.each(c,function(a,b){g.classes[a]=b+"-"+g.theme})):g.classes=c;var i=[],j=0,k=new a.TokenList.Cache,l,m,n=a('<input type="text"  autocomplete="off">').css({outline:"none"}).attr("id",g.idPrefix+b.id).focus(function(){(g.tokenLimit===null||g.tokenLimit!==j)&&K()}).blur(function(){H(),a(this).val("")}).bind("keyup keydown blur update",y).keydown(function(b){var c,f;switch(b.keyCode){case e.LEFT:case e.RIGHT:case e.UP:case e.DOWN:if(!!a(this).val()){var g=null;return b.keyCode===e.DOWN||b.keyCode===e.RIGHT?g=a(r).next():g=a(r).prev(),g.length&&O(g),!1}c=t.prev(),f=t.next(),c.length&&c.get(0)===p||f.length&&f.get(0)===p?b.keyCode===e.LEFT||b.keyCode===e.UP?D(a(p),d.BEFORE):D(a(p),d.AFTER):b.keyCode!==e.LEFT&&b.keyCode!==e.UP||!c.length?(b.keyCode===e.RIGHT||b.keyCode===e.DOWN)&&f.length&&C(a(f.get(0))):C(a(c.get(0)));break;case e.BACKSPACE:c=t.prev();if(!a(this).val().length)return p?(F(a(p)),o.change()):c.length&&C(a(c.get(0))),!1;a(this).val().length===1?H():setTimeout(function(){Q()},5);break;case e.TAB:case e.ENTER:case e.NUMPAD_ENTER:case e.COMMA:if(r)return B(a(r).data("tokeninput")),o.change(),!1;break;case e.ESCAPE:return H(),!0;default:String.fromCharCode(b.which)&&setTimeout(function(){Q()},5)}}),o=a(b).hide().val("").focus(function(){n.focus()}).blur(function(){n.blur()}),p=null,q=0,r=null,s=a("<ul />").addClass(g.classes.tokenList).click(function(b){var c=a(b.target).closest("li");c&&c.get(0)&&a.data(c.get(0),"tokeninput")?E(c):(p&&D(a(p),d.END),n.focus())}).mouseover(function(b){var c=a(b.target).closest("li");c&&p!==this&&c.addClass(g.classes.highlightedToken)}).mouseout(function(b){var c=a(b.target).closest("li");c&&p!==this&&c.removeClass(g.classes.highlightedToken)}).insertBefore(o),t=a("<li />").addClass(g.classes.inputToken).appendTo(s).append(n),u=a("<div>").addClass(g.classes.dropdown).appendTo("body").hide(),v=a("<tester/>").insertAfter(n).css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"});o.val("");var w=g.prePopulate||o.data("pre");g.processPrePopulate&&a.isFunction(g.onResult)&&(w=g.onResult.call(o,w)),w&&w.length&&a.each(w,function(a,b){A(b),x()}),a.isFunction(g.onReady)&&g.onReady.call(),this.clear=function(){s.children("li").each(function(){a(this).children("input").length===0&&F(a(this))})},this.add=function(a){B(a)},this.remove=function(b){s.children("li").each(function(){if(a(this).children("input").length===0){var c=a(this).data("tokeninput"),d=!0;for(var e in b)if(b[e]!==c[e]){d=!1;break}d&&F(a(this))}})},this.getTokens=function(){return i}},a.TokenList.Cache=function(b){var c=a.extend({max_size:500},b),d={},e=0,f=function(){d={},e=0};this.add=function(a,b){e>c.max_size&&f(),d[a]||(e+=1),d[a]=b},this.get=function(a){return d[a]}}}(jQuery),function(a){a.extend(a.fn,{delayedObserver:function(b,c,d){return this.each(function(){var e=a(this),f=d||{};e.data("oldval",e.val()).data("delay",c||.5).data("condition",f.condition||function(){return a(this).data("oldval")==a(this).val()}).data("callback",b)[f.event||"keyup"](function(){if(e.data("condition").apply(e))return;e.data("timer")&&clearTimeout(e.data("timer")),e.data("timer",setTimeout(function(){e.data("callback").apply(e)},e.data("delay")*1e3)),e.data("oldval",e.val())})})}})}(jQuery),format_product_autocomplete=function(a){var b="",c=a.data.product;if(a.data["variant"]==undefined)c["images"].length!=0&&(b=image_html(c)),b+="<div><h4>"+c.title+"</h4>",b+="<span><strong>Sku: </strong>"+c.master.sku+"</span>",b+="<span><strong>On Hand: </strong>"+c.count_on_hand+"</span></div>";else{var d=a.data.variant,e=a.data.product.title;d["images"].length!=0?b=image_html(d):c["images"].length!=0&&(b=image_html(c)),e+=" - "+$.map(d.option_values,function(a){return a.option_type.presentation+": "+a.name}).join(", "),b+="<div><h4>"+e+"</h4>",b+="<span><strong>Sku: </strong>"+d.sku+"</span>",b+="<span><strong>On Hand: </strong>"+d.count_on_hand+"</span></div>"}return b},prep_product_autocomplete_data=function(data){return $.map(eval(data),function(a){var b=a.product;return b.variants.length>0&&["expand_variants"]?$.map(b.variants,function(a){var c=b.title;return c+=" - "+$.map(a.option_values,function(a){return a.option_type.presentation+": "+a.title}).join(", "),{data:{product:b,variant:a},value:title,result:title}}):{data:{product:b},value:b.title,result:b.title}})},$.fn.product_autocomplete=function(){return this.each(function(){$(this).autocomplete({source:function(a,b){$.get(ajax_urls.product_search_json+"?q="+$("#add_product_name").val()+"&authenticity_token="+encodeURIComponent($("meta[name=csrf-token]").attr("content")),function(a){result=prep_product_autocomplete_data(a),b(result)})},minLength:4,focus:function(a,b){return $("#add_product_name").val(b.item.label),!1},select:function(a,b){return $("#add_product_name").val(b.item.label),product=b.item.data,product["variant"]==undefined?$("#add_variant_id").val(product.product.master.id):$("#add_variant_id").val(product.variant.id),!1}}).data("autocomplete")._renderItem=function(a,b){return $(a).addClass("ac_results"),html=format_product_autocomplete(b),$("<li></li>").data("item.autocomplete",b).append("<a>"+html+"</a>").appendTo(a)},$(this).data("autocomplete")._resizeMenu=function(){var a=this.menu.element;a.outerWidth(this.element.outerWidth())}})},$.fn.objectPicker=function(a){$(this).tokenInput(a+"&authenticity_token="+escape(AUTH_TOKEN),{searchDelay:600,hintText:strings.type_to_search,noResultsText:strings.no_results,searchingText:strings.searching,prePopulateFromInput:!0})},$.fn.productPicker=function(){$(this).objectPicker(ajax_urls.product_search_basic_json)},$.fn.userPicker=function(){$(this).objectPicker(ajax_urls.user_search_basic_json)},$(document).ready(function(){$(".tokeninput.products").productPicker(),$(".tokeninput.users").userPicker()}),$(document).ready(function(){$("#add_line_item_to_order").live("click",function(){return $("#add_variant_id").val()==""?!1:(update_target=$(this).attr("data-update"),$.ajax({dataType:"script",url:this.href,type:"POST",data:{"line_item[variant_id]":$("#add_variant_id").val(),"line_item[quantity]":$("#add_quantity").val()}}),!1)}),$("#add_product_name").product_autocomplete()}),$.each($("td.qty input"),function(a,b){$(b).delayedObserver(function(){var a=$(this).attr("id").replace("order_line_items_attributes_","").replace("_quantity","");a="#order_line_items_attributes_"+a+"_id",jQuery.ajax({type:"POST",url:"/admin/site/1/orders/"+$("input#order_number").val()+"/line_items/"+$(a).val(),data:{_method:"put","line_item[quantity]":$(this).val()},complete:function(a){$("#order-form-wrapper").html(a.responseText)}})},0,5)}),$(document).ready(function(){add_address=function(a){var b="";return a!=undefined&&(b+=a.firstname+" "+a.lastname+", ",b+=a.address1+", "+a.address2+", ",b+=a.city+", ",a["state_id"]!=null?b+=a.state.name+", ":b+=a.state_name+", ",b+=a.country.name),b},format_user_autocomplete=function(a){var b=a.data,c="<h4>"+b.email+"</h4>";return c+="<span><strong>Billing:</strong> ",c+=add_address(b.bill_address),c+="</span>",c+="<span><strong>Shipping:</strong> ",c+=add_address(b.ship_address),c+="</span>",c},prep_user_autocomplete_data=function(data){return $.map(eval(data),function(a){return{data:a.user,value:a.user.email,result:a.user.email}})},$("#customer_search").length>0&&($("#customer_search").autocomplete({minChars:5,delay:1500,source:function(a,b){$.get(ajax_urls.user_search_json+"?q="+$("#customer_search").val()+"&authenticity_token="+encodeURIComponent($("meta[name=csrf-token]").attr("content")),function(a){result=prep_user_autocomplete_data(a),b(result)})},focus:function(a,b){return $("#customer_search").val(b.item.label),$(b).addClass("ac_over"),!1},select:function(a,b){return $("#customer_search").val(b.item.label),_.each(["bill","ship"],function(a){var c=b.item.data[a+"_address"];c!=undefined&&($("#order_"+a+"_address_attributes_firstname").val(c.firstname),$("#order_"+a+"_address_attributes_lastname").val(c.lastname),$("#order_"+a+"_address_attributes_company").val(c.company),$("#order_"+a+"_address_attributes_address1").val(c.address1),$("#order_"+a+"_address_attributes_address2").val(c.address2),$("#order_"+a+"_address_attributes_city").val(c.city),$("#order_"+a+"_address_attributes_zipcode").val(c.zipcode),$("#order_"+a+"_address_attributes_state_id").val(c.state_id),$("#order_"+a+"_address_attributes_country_id").val(c.country_id),$("#order_"+a+"_address_attributes_phone").val(c.phone))}),$("#order_email").val(b.item.data.email),$("#user_id").val(b.item.data.id),$("#guest_checkout_true").prop("checked",!1),$("#guest_checkout_false").prop("checked",!0),!0}}).data("autocomplete")._renderItem=function(a,b){return $(a).addClass("ac_results"),html=format_user_autocomplete(b),$("<li></li>").data("item.autocomplete",b).append("<a class='ui-menu-item'>"+html+"</a>").appendTo(a)},$("#customer_search").data("autocomplete")._resizeMenu=function(){var a=this.menu.element;a.outerWidth(this.element.outerWidth())}),$("input#order_use_billing").click(function(){show_billing(!$(this).is(":checked"))}),$("#guest_checkout_true").change(function(){$("#customer_search").val(""),$("#user_id").val(""),$("#checkout_email").val(""),$("#guest_checkout_false").prop("disabled",!0),$("#order_bill_address_attributes_firstname").val(""),$("#order_bill_address_attributes_lastname").val(""),$("#order_bill_address_attributes_company").val(""),$("#order_bill_address_attributes_address1").val(""),$("#order_bill_address_attributes_address2").val(""),$("#order_bill_address_attributes_city").val(""),$("#order_bill_address_attributes_zipcode").val(""),$("#order_bill_address_attributes_state_id").val(""),$("#order_bill_address_attributes_country_id").val(""),$("#order_bill_address_attributes_phone").val(""),$("#order_ship_address_attributes_firstname").val(""),$("#order_ship_address_attributes_lastname").val(""),$("#order_bill_address_attributes_company").val(""),$("#order_ship_address_attributes_address1").val(""),$("#order_ship_address_attributes_address2").val(""),$("#order_ship_address_attributes_city").val(""),$("#order_ship_address_attributes_zipcode").val(""),$("#order_ship_address_attributes_state_id").val(""),$("#order_ship_address_attributes_country_id").val(""),$("#order_ship_address_attributes_phone").val("")});var show_billing=function(a){a?($("#shipping").show(),$("#shipping input").prop("disabled",!1),$("#shipping select").prop("disabled",!1)):($("#shipping").hide(),$("#shipping input").prop("disabled",!0),$("#shipping select").prop("disabled",!0))}});