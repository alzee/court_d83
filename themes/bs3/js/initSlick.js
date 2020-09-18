// https://github.com/kenwheeler/slick/issues/3299#issuecomment-426801855
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun) {
        "use strict";

        if (this == null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun != "function")
            throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }

        return res;
    };
}

$(document).ready(function(){
  $('.slick1').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 4000,
      dots: true,
      fade: true,
      cssEase: 'linear',
  });
  $('.slick2').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      slidesToShow: 6,
      slidesToScroll: 1,
  });
});
