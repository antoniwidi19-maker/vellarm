(function () {
  var scenes = [].slice.call(document.querySelectorAll('.scene'));
  var N      = scenes.length;
  var bar    = document.querySelector('#bar i');
  var gear   = document.getElementById('gear');
  var plane  = document.getElementById('plane');
  var hint   = document.querySelector('.hint');

  // Kurva halus untuk transisi
  function ease(t) { return t * t * (3 - 2 * t); }

  function tick() {
    var max = document.documentElement.scrollHeight - innerHeight;
    var p   = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0; // 0..1
    var x   = p * (N - 1);                                           // posisi scene

    // Indikator scroll di kanan
    bar.style.height = p * 100 + '%';
    hint.style.opacity = p > 0.03 ? 0 : '';

    scenes.forEach(function (s, i) {
      var d = x - i;                                     // jarak ke scene ini
      var o = (d < -1 || d > 1) ? 0 : 1 - Math.abs(d);   // opacity mentah

      s.style.opacity = ease(Math.min(1, o * 1.6));
      s.style.pointerEvents = 'none';

      // Efek dolly zoom: latar membesar saat scroll
      var z = 1 + (d + 1) * 0.18;
      s.querySelector('.bg').style.transform =
        'scale(' + z.toFixed(3) + ') translateY(' + (-d * 3) + '%)';

      // Teks bergerak sedikit (parallax)
      s.querySelector('.txt').style.transform =
        'translateY(' + (d * 60) + 'px)';
    });

    // Roda gigi berputar mengikuti scroll
    if (gear) gear.style.transform = 'rotate(' + (p * 720) + 'deg)';

    // Pesawat bergerak & mengecil
    if (plane) {
      plane.style.transform =
        'translateY(' + ((x - 4) * 40) + 'px) ' +
        'scale(' + (1.4 - Math.max(0, x - 4) * 0.5) + ')';
    }
  }

  addEventListener('scroll', function () { requestAnimationFrame(tick); }, { passive: true });
  addEventListener('resize', tick);
  tick();
})();
