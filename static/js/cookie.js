/**
 * purecookie.js
 * author: SnowPatch
 * download page: https://github.com/SnowPatch/PureCookie
 */

// CONFIG //
var linkPolicy      =   'privacy';
var purecookieDesc  = '<p>Uso cookie. Se continui a navigare do per scontato ne sia felice.</p>'
                    +   '<p style="margin-top: 0.3em">Maggiori informazioni <a href="' + linkPolicy + '" class="light-link">qui</a>.</p>';
// /CONFIG //

function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

function cookieConsent() {
  if (!getCookie('nparisiCookieApproved')) {
    document.body.innerHTML += '<div class="super-cookieConsentContainer" id="cookieConsentContainer"><div class="cookieConsentContainer article" style="color: #f8f8f8; padding: 1.5em">'
                            +   '<div style="margin-top: -0.5em">' + purecookieDesc
                            +   '</div>'
                            +   '<div style="text-align: center"><a href="#" onclick="cookieApproved();" class="more-link" style="cursor: pointer; padding: 1em 1.73em">OK</a></div>'
                            +   '</div></div>';
    pureFadeIn("cookieConsentContainer");
  }
}

function cookieApproved() {
  setCookie('nparisiCookieApproved','1', 365);
  pureFadeOut("cookieConsentContainer");
  startInstaFeed();
}