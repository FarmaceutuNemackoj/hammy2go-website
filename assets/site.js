// Hammy2go – kleine Helfer ohne Tracking: passenden Store hervorheben, Jahreszeit markieren, Sprache merken.
(function () {
  var ua = navigator.userAgent || '';
  var ios = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var android = /Android/.test(ua);
  var btn = ios ? document.querySelector('.badge.ios') : android ? document.querySelector('.badge.android') : null;
  if (btn) btn.classList.add('highlight');

  // Aktuelle Jahreszeit (Nordhalbkugel, wie im Spiel)
  var m = new Date().getMonth() + 1;
  var season = m >= 3 && m <= 5 ? 'spring' : m >= 6 && m <= 8 ? 'summer' : m >= 9 && m <= 11 ? 'autumn' : 'winter';
  var el = document.querySelector('.season[data-season="' + season + '"]');
  if (el) el.classList.add('now');

  // Gewählte Sprache merken (nur im Browser, darf fehlschlagen)
  document.querySelectorAll('.lang a').forEach(function (a) {
    a.addEventListener('click', function () {
      try { localStorage.setItem('hammy2go.lang', a.getAttribute('hreflang')); } catch (e) {}
    });
  });
})();
