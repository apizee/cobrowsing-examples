

var upscope_init = function(w, u, d){
    var i=function(){
        i.c(arguments)
    };

    i.q=[];
    i.c=function(args){
        i.q.push(args)
    };

    var l = function(){
        var s=d.createElement('script');
        s.type='text/javascript';
        s.async=true;
        s.src='https://code.upscope.io/xh3aKI4FhF.js';

        var x=d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s,x);
    };

    if(typeof u!=="function"){
        w.Upscope=i;
        l();
    }
};
upscope_init(window, window.Upscope, document);

var id = (function(n) {
    const c = document.cookie.split("; ");
        const v = c.find(k => k.startsWith(n + "="));
        return v ? decodeURIComponent(v.split("=")[1]) : "";
    })("orid");

Upscope('init', {uniqueId: id});
