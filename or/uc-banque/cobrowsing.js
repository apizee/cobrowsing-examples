var initOpts = {
    projectKey: "3zCHLAtm9vPaeNMoTEBr",
    ingestPoint: "https://openreplay.dev.apizee.com/ingest",
    defaultInputMode: 1,
    obscureTextNumbers: true,
    obscureTextEmails: true,
};
var startOpts = { userID: "", userAnonymousID: "Test user" };
(function(A,s,a,y,e,r){
    r=window.OpenReplay=[e,r,y,[s-1, e]];
    s=document.createElement("script");s.src=A;s.async=!a;
    document.getElementsByTagName("head")[0].appendChild(s);
    r.start=function(v){r.push([0])};
    r.stop=function(v){r.push([1])};
    r.setUserID=function(id){r.push([2,id])};
    r.setUserAnonymousID=function(id){r.push([3,id])};
    r.setMetadata=function(k,v){r.push([4,k,v])};
    r.event=function(k,p,i){r.push([5,k,p,i])};
    r.issue=function(k,p){r.push([6,k,p])};
    r.isActive=function(){return false};
    r.getSessionToken=function(){};
})("https://static.openreplay.com/latest/openreplay-assist.js",1,0,initOpts,startOpts);