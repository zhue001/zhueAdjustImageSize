if ((typeof window == 'object' && !window.zhue) || (typeof global == 'object' && !global.zhue)) window ? window.zhue = {} : global.zhue = {}
zhue.adjustImageSize = function(t, e, i) {
  i.addEventListener("click", function(n) {
    var l = i.clientWidth, c = i.clientHeight, h = i.getBoundingClientRect(), r = n.clientY - h.top;
    if (c / 2 >= r) {
      var d = l + 1, s = c + 1;
      if (d > t || s > t) return;
      i.style.width = d + "px", i.style.height = s + "px";
    } else {
      var d = l - 1, s = c - 1;
      if (e > d || e > s) return;
      i.style.width = d + "px", i.style.height = s + "px";
    }
  });
}
