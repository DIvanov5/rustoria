/**
 * @project Blamper
 * @user front-end / delosgatos(a)gmail.com
 * @date 27.09.13 15:43
 */
/*requirejs.onError = function (err) {
 if(window && window.logError){
 window.logError("Error loading ["+err.requireType+"] js modules: "+ JSON.stringify(err.requireModules) +"", 'core-init', 9);
 }
 };*/
var ognyvo = {
    define: define,
    require: require,
    requirejs: requirejs
};
define = null;

var _GET = function() {
    for (var e = {}, n = window.location.search.substring(1), o = n.split("&"), t = 0; t < o.length; t++) {
        var i = o[t].split("=");
        if ("undefined" == typeof e[i[0]]) e[i[0]] = decodeURIComponent(i[1]);
        else if ("string" == typeof e[i[0]]) {
            var r = [e[i[0]], decodeURIComponent(i[1])];
            e[i[0]] = r
        } else e[i[0]].push(decodeURIComponent(i[1]))
    }
    return e
}();
var triggerEvent = function(e, t) {
    var n;
    document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = document.createEventObject(), n.eventType = e), n.eventName = e, n.data = t, document.createEvent ? document.dispatchEvent(n) : document.fireEvent("on" + n.eventType, n)
};
window.console || (window.console = {});
var disableConsole = function() {
        window.consoleBack = {};
        for (var e = ["log", "debug", "warn", "info"], o = 0; o < e.length; o++) window.consoleBack[e[o]] = window.console[e[o]], window.console[e[o]] = function() {}
    },
    enableConsole = function() {
        for (var e = ["log", "debug", "warn", "info"], o = 0; o < e.length; o++) window.console[e[o]] = window.consoleBack[e[o]];
        window.consoleBack = null
    };
window.keyPressed = {
    ctrl: !1,
    alt: !1,
    shift: !1,
    key: ""
}, document.onkeydown = function(e) {
    e = e || window.event;
    var o = "number" == typeof e.which ? e.which : e.keyCode;
    16 == o ? window.keyPressed.shift = !0 : 17 == o ? window.keyPressed.ctrl = !0 : 18 == o ? window.keyPressed.alt = !0 : o > 31 && (window.keyPressed.key = String.fromCharCode(o), triggerEvent("globalKeyDown", window.keyPressed))
}, document.onkeyup = function(e) {
    e = e || window.event;
    var o = "number" == typeof e.which ? e.which : e.keyCode;
    16 == o ? window.keyPressed.shift = !1 : 17 == o ? window.keyPressed.ctrl = !1 : 18 == o ? window.keyPressed.alt = !1 : o > 31 && (window.keyPressed.key = "")
};

if ((!localStorage.getItem("debug") || localStorage.getItem("debug") == "undefined") && !_GET['debug']) {
    document.addEventListener('globalKeyDown', function(e) {
        var k = window.keyPressed;
        if (k.ctrl && k.alt && k.key == "D") {
            if (window.consoleBack) {
                enableConsole();
            } else {
                disableConsole();
            }
        }
    });
    disableConsole();
}

ognyvo.require.config({
    deps: ['build'],
    waitSeconds: 200,
    urlArgs: (typeof debug_disabled == "undefined") ? (new Date()).getTime() : version
    //,baseUrl:"/js/app/"
    //,enforceDefine : true
    ,
    paths: {
        'jquery': ['//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.3.min.js'] //,'../vendor/bower/jquery/dist/jquery.min']
        //,'vk.api':                  '//vk.com/js/api/openapi'
        ,
        'fb.api': '//connect.facebook.net/ru_RU/all',
        'metrika': '//mc.yandex.ru/metrika/watch',
        'jquery.mobile': '../vendor/jquery.mobile.customized.min',
        'fotorama': '../vendor/gallery/fotorama/fotorama.dev'
        //,optimizely:              '//cdn.optimizely.com/js/1511193221'
    }
});