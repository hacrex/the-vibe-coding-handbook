/**
 * Shared header behaviors: live GitHub star counter with animation.
 * Loaded by every page that includes the .header-github component.
 */
(function () {
  var REPO = 'hacrex/the-vibe-coding-handbook';
  var CACHE_KEY = 'gh:stars:' + REPO;
  var CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

  function format(n) {
    if (n >= 10000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
  }

  function animateCount(el, start, end) {
    var duration = 1200;
    var startTime = null;
    
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(start + (end - start) * eased);
      el.textContent = format(current);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = format(end);
      }
    }
    
    window.requestAnimationFrame(step);
  }

  function paint(n) {
    var els = document.querySelectorAll('.header-github .star-count, #starCount');
    for (var i = 0; i < els.length; i++) {
      var currentText = els[i].textContent;
      var currentNum = parseInt(currentText.replace(/[^0-9]/g, ''), 10) || 0;
      if (currentNum !== n) {
        animateCount(els[i], currentNum, n);
      } else {
        els[i].textContent = format(n);
      }
      els[i].removeAttribute('data-loading');
    }
  }

  function readCache() {
    try {
      var raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (Date.now() - parsed.t > CACHE_TTL_MS) return null;
      return parsed.n;
    } catch (e) {
      return null;
    }
  }

  function writeCache(n) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ n: n, t: Date.now() }));
    } catch (e) {
      // localStorage may be disabled
    }
  }

  function load() {
    var cached = readCache();
    if (cached != null) {
      paint(cached);
      return;
    }
    fetch('https://api.github.com/repos/' + REPO, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then(function (r) {
        if (!r.ok) throw new Error('gh ' + r.status);
        return r.json();
      })
      .then(function (data) {
        var n = data.stargazers_count;
        if (typeof n !== 'number') return;
        writeCache(n);
        paint(n);
      })
      .catch(function () {
        // Leave the placeholder; the link still works.
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', load);
  } else {
    load();
  }
})();
