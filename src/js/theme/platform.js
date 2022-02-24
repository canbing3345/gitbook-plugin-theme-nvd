var $ = require('jquery');

module.exports = {
    isMobile: function() {
        return ($(document).width() <= 600);
    },
    // Breakpoint for navigation links position
    isSmallScreen: function() {
        return ($(document).width() <= 1240);
    },
    isHideSidebar: function () {
        // Determine if the GET parameter hideSidebar is "true"
        var key = "hideSidebar";

        var local_url = document.location.href;
        if (local_url.indexOf('#')) {
            local_url = local_url.split('#')[0];
        }
        local_url = local_url.split('#')[0];
        var get = local_url.indexOf("hideSidebar=");
        if (get === -1) {
            return false;
        }
        var get_par = local_url.slice(key.length + get + 1);
        var nextPar = get_par.indexOf("&");
        if (nextPar !== -1) {
            get_par = get_par.slice(0, nextPar);
        }
        return decodeURI(get_par) === "true";
    }
};
