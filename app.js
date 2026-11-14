(function () {
  'use strict';
  var STATES = [
    { n: 'Лидерство', notes: 'бергамот · чёрный перец · ирис · уд' },
    { n: 'Притяжение', notes: 'розовый перец · роза · жасмин · амбра' },
    { n: 'Спокойствие', notes: 'нероли · чай · кедр · белый мускус' }
  ];
  var label = document.getElementById('label'), nm = document.getElementById('nm');
  var lbName = document.getElementById('lbName'), lbState = document.getElementById('lbState'), lbNotes = document.getElementById('lbNotes'), lbNo = document.getElementById('lbNo');
  var orName = document.getElementById('orName');
  var btns = Array.prototype.slice.call(document.querySelectorAll('.st'));

  function ink() { label.classList.remove('inked'); void label.offsetWidth; label.classList.add('inked'); }
  function num(s) { var h = 7; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 997; return '№ ' + ('00' + (h + 1)).slice(-3); }

  nm.addEventListener('input', function () {
    var v = nm.value.replace(/\s+/g, ' ').trim();
    lbName.textContent = v || 'Ваше имя';
    orName.textContent = v || 'ваше имя';
    lbNo.textContent = v ? num(v) : '№ 001';
    label.classList.toggle('named', !!v);
  });
  nm.addEventListener('change', ink);

  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      var s = STATES[+b.dataset.s];
      btns.forEach(function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-checked', on ? 'true' : 'false'); });
      lbState.textContent = s.n; lbNotes.textContent = s.notes; ink();
    });
  });
  document.getElementById('mk').addEventListener('submit', function (e) { e.preventDefault(); ink(); });
})();
