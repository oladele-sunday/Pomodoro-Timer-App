'use strict';

/* profile picture changing */
const fileInput = document.getElementById('file-input');
const profilePic = document.getElementById('profile-pic');
const PROFILE_PIC_STORAGE_KEY = 'focusflow-profile-pic';

const savedProfilePic = localStorage.getItem(PROFILE_PIC_STORAGE_KEY);
if (savedProfilePic) {
  profilePic.src = savedProfilePic;
}

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profilePic.src = e.target.result;
      localStorage.setItem(PROFILE_PIC_STORAGE_KEY, e.target.result);
    };
    reader.readAsDataURL(file);
  }
});

/* ── Glass card hover lift ───────────────────────────────── */
document.querySelectorAll('.glass-card').forEach(function (card) {
  card.addEventListener('mouseenter', function () {
    card.style.transform = 'translateY(-4px)';
  });
  card.addEventListener('mouseleave', function () {
    card.style.transform = 'translateY(0)';
  });
});

/* ── Period tabs (Week / Month / Year) ───────────────────── */
const periodBtns = document.querySelectorAll('.period-tabs__btn');

const switchableSections = document.querySelectorAll('.metrics-grid[data-period], .charts-grid[data-period]');

periodBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    const period = btn.dataset.period;

    periodBtns.forEach(function (b) {
      b.classList.remove('period-tabs__btn--active');
    });
    btn.classList.add('period-tabs__btn--active');

    switchableSections.forEach(function (section) {
      section.classList.toggle('hidden', section.dataset.period !== period);
    });
  });
});

/* ── Topbar nav active item toggle ───────────────────────── */
const topbarNavItems = document.querySelectorAll('.topbar__nav-item');

topbarNavItems.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    topbarNavItems.forEach(function (navItem) {
      navItem.classList.remove('topbar__nav-item--active');
    });
    item.classList.add('topbar__nav-item--active');
  });
});

/* ── Bottom nav active item toggle ───────────────────────── */
const bottomNavItems = document.querySelectorAll('.bottom-nav__item');

bottomNavItems.forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    bottomNavItems.forEach(function (navItem) {
      navItem.classList.remove('bottom-nav__item--active');
    });
    item.classList.add('bottom-nav__item--active');
  });
});
