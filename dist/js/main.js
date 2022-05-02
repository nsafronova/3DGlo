(() => {
  "use strict";
  (e => {
    const t = document.getElementById("timer-hours"),
      n = document.getElementById("timer-minutes"),
      c = document.getElementById("timer-seconds");
    setInterval((() => {
      let e = (() => {
        let e = (new Date("3 may 2022").getTime() - (new Date).getTime()) / 1e3;
        return {
          timeRemaining: e,
          hours: Math.floor(e / 60 / 60),
          minutes: Math.floor(e / 60 % 60),
          seconds: Math.floor(e % 60)
        }
      })();
      e.timeRemaining > 0 && (t.textContent = r(e.hours), n.textContent = r(e.minutes), c.textContent = r(e.seconds))
    }), 1e3);
    const r = e => e >= 0 && e < 10 ? "0" + e : e
  })(), (() => {
    const e = document.querySelector(".menu"),
      t = document.querySelector("menu"),
      n = document.querySelector(".close-btn"),
      c = document.querySelectorAll("ul>li>a"),
      r = () => {
        t.classList.toggle("active-menu")
      };
    e.addEventListener("click", r), n.addEventListener("click", r), c.forEach((e => e.addEventListener("click", r)))
  })(), (() => {
    const e = document.querySelector(".popup"),
      t = document.querySelector(".popup-content"),
      n = document.querySelectorAll(".popup-btn"),
      c = e.querySelector(".popup-close");
    let r, l, a = 0;
    const o = () => {
      a++, r = requestAnimationFrame(o), a < 15 ? t.style.top = a + "%" : (cancelAnimationFrame(r), a = 0)
    };
    c.addEventListener("click", (() => {
      e.style.display = "none"
    })), n.forEach((t => {
      t.addEventListener("click", (() => {
        l < 786 || o(), e.style.display = "block"
      }))
    })), window.addEventListener("resize", (() => {
      l = document.documentElement.clientWidth
    }))
  })(), (() => {
    const e = document.querySelector(".calc-square"),
      t = document.querySelector(".calc-count"),
      n = document.querySelector(".calc-day"),
      c = document.querySelectorAll('[type="text"]'),
      r = document.querySelectorAll('[type="email"]'),
      l = document.querySelectorAll('[type="tel"]');
    e.addEventListener("input", (e => {
      e.target.value = e.target.value.replace(/\D+/, "")
    })), t.addEventListener("input", (e => {
      e.target.value = e.target.value.replace(/\D+/, "")
    })), n.addEventListener("input", (e => {
      e.target.value = e.target.value.replace(/\D+/, "")
    })), c.forEach((e => {
      e.addEventListener("input", (e => {
        e.target.value = e.target.value.match(/[а-я -]+/gi)
      }))
    })), r.forEach((e => {
      e.addEventListener("input", (e => {
        e.target.value = e.target.value.match(/[a-z0-9@-_.!~*']+/gi)
      }))
    })), l.forEach((e => {
      e.addEventListener("input", (e => {
        e.target.value = e.target.value.match(/[0-9-()]+/gi)
      }))
    }))
  })()
})();