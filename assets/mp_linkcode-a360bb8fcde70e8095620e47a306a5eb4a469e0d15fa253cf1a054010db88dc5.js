var MP={Version:"3.1.1.0",SrcLang:"en",UrlLang:"mp_js_current_lang",SrcUrl:decodeURIComponent("mp_js_orgin_url"),oSite:decodeURIComponent("mp_js_origin_baseUrl"),tSite:decodeURIComponent("mp_js_translated_baseUrl"),init:function(){1==MP.oSite.indexOf("p_js_")&&(MP.SrcUrl=window.top.document.location.href,MP.oSite=MP.tSite=window.top.document.location.host,MP.UrlLang=MP.SrcLang)},switchLanguage:function(e,t,o){var o=o,n=MP.oSite.replace("http://","").replace("https://","").replace(/\/?$/,""),r=MP.tSite.replace("http://","").replace("https://","").replace(/\/?$/,"");if(e=e.replace("http://","").replace("https://","").replace(/\/?$/,""),o&&"undefined"!=typeof MpStorage&&"undefined"!=typeof MpStorage.updatePref){if(t){var a=t.substring(0,2);t=a==MP.UrlLang?MP.SrcLang+t.substring(2):t}MpStorage.updatePref(e,t)}return setTimeout(function(){var t=document.createElement("SCRIPT");t.src=e==n?location.protocol+"//"+r+"?1023749634;"+encodeURIComponent(location.href):location.protocol+"//"+e+"?1023749632;"+encodeURIComponent(MP.SrcUrl);var o=document.getElementsByTagName("script")[0];o.parentNode.insertBefore(t,o)},500),!1},switchToLang:function(e){window.top.location.href==e?"undefined"!=typeof MpStorage&&"undefined"!=typeof MpStorage.updatePref&&MpStorage.updatePref(MP.oSite,MP.SrcLang):window.top.location.href=e}};