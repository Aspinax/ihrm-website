/* Remove the "added non-passive event listener to a scroll-blocking..." violation message from the console */
(function () {
    var func = EventTarget.prototype.addEventListener;

    EventTarget.prototype.addEventListener = function (type, fn, capture) {
        this.func = func;
        capture = capture || {};
        capture.passive = false;
        this.func(type, fn, capture);
    };
}());

/* add the sidenav functionality */
$(document).ready(function () {
    $('.sidenav').sidenav();
});