// ── NAV ──
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('stuck', scrollY > 60)
});

const ham = document.getElementById('ham');
const mobNav = document.getElementById('mob-nav');
const mobOv = document.getElementById('mob-overlay');

ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mobNav.classList.toggle('open');
    mobOv.classList.toggle('open')
});

mobOv.addEventListener('click', closeNav);

function closeNav() {
    ham.classList.remove('open');
    mobNav.classList.remove('open');
    mobOv.classList.remove('open')
}

// ── REVEAL ON SCROLL ──
const ro = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('in')
}), { threshold: .12 });

document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => ro.observe(el));

// ── GALLERY FILTER ──
function filter(cat, btn) {
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    document.querySelectorAll('.gal-brick').forEach(b => {
        const show = cat === 'all' || b.dataset.cat === cat;
        b.style.opacity = show ? '1' : '0.15';
        b.style.transform = show ? '' : 'scale(.97)';
        b.style.transition = 'opacity .4s,transform .4s';
        b.style.pointerEvents = show ? '' : 'none';
    });
}

// ── SPOTLIGHT CAROUSEL ──
let spotIdx = 0;
function slideSpot(dir) {
    const track = document.getElementById('spotTrack');
    const cards = track.querySelectorAll('.spot-card');
    const cardW = cards[0].offsetWidth + 24;
    spotIdx = Math.max(0, Math.min(spotIdx + dir, cards.length - 3));
    track.style.transform = `translateX(-${spotIdx * cardW}px)`;
}

// Touch swipe for spotlight
let tsx = null;
document.getElementById('spotTrack').addEventListener('touchstart', e => {
    tsx = e.touches[0].clientX
}, { passive: true });

document.getElementById('spotTrack').addEventListener('touchend', e => {
    if (tsx) {
        const dx = tsx - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 40) slideSpot(dx > 0 ? 1 : -1);
        tsx = null;
    }
});

// ── LIGHTBOX ──
let lbBricks = [], lbIdx = 0;

function openLB(el) {
    const lb = document.getElementById('lb');
    const brick = el.closest('.gal-brick') || el.closest('.spot-card');
    lbBricks = Array.from(document.querySelectorAll('.gal-brick'));
    lbIdx = lbBricks.indexOf(brick);
    renderLB(lbIdx);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderLB(idx) {
    const brick = lbBricks[idx];
    if (!brick) return;
    const img = brick.querySelector('img');
    const content = document.getElementById('lb-content');
    document.getElementById('lb-name').textContent = brick.dataset.name || 'Artwork';
    document.getElementById('lb-cat').textContent = brick.dataset.cat || '';

    if (img) {
        content.innerHTML = '';
        const i = document.createElement('img');
        i.src = img.src;
        i.style.cssText = 'max-width:90vw;max-height:80vh;object-fit:contain';
        content.appendChild(i);
    } else {
        content.innerHTML = '<div class="lb-ph" style="color:rgba(255,255,255,.35);font-family:\'Playfair Display\',serif;font-style:italic;font-size:1.1rem;text-align:center;padding:3rem">Photo placeholder<br><span style="font-size:.75rem;letter-spacing:.1em;opacity:.6">Add &lt;img&gt; to see artwork here</span></div>';
    }
}

function lbNav(dir) {
    lbIdx = Math.max(0, Math.min(lbIdx + dir, lbBricks.length - 1));
    renderLB(lbIdx);
}

function closeLB() {
    document.getElementById('lb').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('lb').addEventListener('click', e => {
    if (e.target === document.getElementById('lb')) closeLB()
});

document.addEventListener('keydown', e => {
    if (!document.getElementById('lb').classList.contains('open')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
});

// ── ORDER FORM ──
function submitOrder() {
    const n = document.getElementById('fn').value.trim();
    const p = document.getElementById('fp').value.trim();
    const s = document.getElementById('fs').value;

    if (!n || !p || !s) {
        alert('Please fill your name, phone number and art style.');
        return;
    }

    const e = document.getElementById('fe').value;
    const m = document.getElementById('fm').value;
    const msg = `Hi Vivek! I'd like to commission artwork.%0A%0AName: ${encodeURIComponent(n)}%0APhone: ${encodeURIComponent(p)}%0AEmail: ${encodeURIComponent(e)}%0AStyle: ${encodeURIComponent(s)}%0ADetails: ${encodeURIComponent(m)}`;

    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`, '_blank');

    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 4000);
}

// ── POLAROID TILT ON MOUSEMOVE ──
const stack = document.getElementById('polStack');
if (stack) {
    stack.addEventListener('mousemove', e => {
        const r = stack.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / r.width;
        const y = (e.clientY - r.top - r.height / 2) / r.height;

        stack.querySelectorAll('.pol').forEach((p, i) => {
            const base = [[-8, 20, 4, -25, -2, 0], [4, -25, -8, 20, -2, 0]][(i) % 2] || [0, 0, 0, 0, 0, 0];
            p.style.transform = `rotate(${(i === 0 ? -8 : i === 1 ? 4 : -2) + x * 4}deg) translate(${(i === 0 ? -60 : i === 1 ? 55 : 0) + x * 15}px,${(i === 0 ? 20 : i === 1 ? -25 : 0) + y * 10}px)`;
        });
    });
}