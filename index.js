// MonogatariDle : ton appli d'origine (HTML et code inchangés), livrée en plugin.
// Ses données sont dans le dossier du plugin, que NeoDex sauvegarde (synchro cloud et sauvegardes) ; à la première ouverture elle reprend ce que tu avais dans NeoDex.
// Elle tourne dans le bac à sable de NeoDex, avec ses outils d'interface (ctx.host) et seulement les autorisations de son plugin.json.
const HTML = "";
/*CSS-MOVED*/ const CSS = `.mdRow{display:grid;grid-template-columns:repeat(var(--n),46px);gap:6px}
.mdCell{height:46px;display:grid;place-items:center;font:18px var(--title);color:#fff;background:#160d30;box-shadow:inset 0 0 0 2px #3a2a6e}
.mdCell.typed{box-shadow:inset 0 0 0 2px var(--lilac)}
.mdCell.ghost{color:#5e4d85}
.mdCell.flip{animation:mdFlip .45s both}
.gSel{width:auto;font-size:14px;padding:6px 10px;margin-right:8px}
.shGrid td.num{text-align:right}
.mdClue{display:flex;flex-direction:column;gap:8px}
.mdHint{--fill:var(--field);padding:10px 14px;color:var(--lilac);font-size:15px}
.mdEmoji{--fill:var(--field);padding:14px;font-size:34px;letter-spacing:6px;text-align:center}
.mdForm{position:relative}
.mdInput{width:100%;font-size:16px;padding:12px 14px}
.mdSug{position:absolute;left:0;right:0;top:calc(100% + 6px);z-index:5;--fill:#120922;display:flex;flex-direction:column;padding:4px;max-height:340px;overflow-y:auto}
.mdSugItem{all:unset;cursor:var(--cp,pointer);display:flex;justify-content:space-between;gap:12px;padding:8px 10px;color:#fff;font-size:15px}
.mdSugItem:hover,.mdSugItem.on{background:rgba(var(--mgr),.22)}
.mdSugItem .hint{font-size:12px}
.mdSugItem .n{display:flex;align-items:center;gap:10px}
.mdSugItem img{width:30px;height:30px;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.sysCard.mdWin{flex-direction:row;align-items:center;gap:18px}
.mdWin b{color:#ffd07a;font-size:17px}
.mdWinTxt{display:flex;flex-direction:column;gap:6px;min-width:0}
.mdWinImg{width:104px;height:104px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 3px #ffd07a,4px 4px 0 3px rgba(0,0,0,.45)}
.mdPix{width:240px;height:240px;align-self:center;image-rendering:pixelated;box-shadow:0 0 0 3px var(--field),6px 6px 0 3px rgba(0,0,0,.45)}
.mdGuesses{display:flex;flex-direction:column;gap:6px;overflow-x:auto}
.mdRow{display:grid;gap:6px}
.mdRow.head{position:sticky;top:0}
.mdH{font:7px var(--title);letter-spacing:1px;color:var(--muted);text-align:center;padding:4px 0}
.mdCell{display:flex;align-items:center;justify-content:center;gap:4px;min-height:54px;padding:6px;text-align:center;font-size:12px;overflow-wrap:break-word;hyphens:auto;min-width:0;color:#fff;background:#2a1d52;box-shadow:inset 0 -3px 0 rgba(0,0,0,.35);animation:mdFlip .35s steps(4) backwards}
.mdCell.who{background:#1c1238;font-weight:bold;justify-content:flex-start;gap:8px;text-align:left}
.mdCell.who img{width:40px;height:40px;flex:none;object-fit:cover;object-position:top;box-shadow:0 0 0 2px rgba(0,0,0,.45)}
.mdCell.wide img{width:32px;height:32px}
.mdCell.ok{background:#2f8f5a}
.mdCell.part{background:#c0862a}
.mdCell.no{background:#9a2a44}
.mdCell i{font-style:normal;font-size:18px;color:#ffd07a}
.mdCell.wide{justify-content:flex-start;padding:10px 14px;min-height:0;font-size:15px}
.mdRow .mdCell:nth-child(2){animation-delay:.05s}
.mdRow .mdCell:nth-child(3){animation-delay:.1s}
.mdRow .mdCell:nth-child(4){animation-delay:.15s}
.mdRow .mdCell:nth-child(5){animation-delay:.2s}
.mdRow .mdCell:nth-child(6){animation-delay:.25s}
.mdRow .mdCell:nth-child(7){animation-delay:.3s}
.mdRow .mdCell:nth-child(8){animation-delay:.35s}
.mdRow .mdCell:nth-child(9){animation-delay:.4s}

/* habillage v1.2 */
.dleWrap{--dle:#ff5ad9;gap:14px}
.dleWrap .agHead{padding:14px 18px;background:linear-gradient(90deg,color-mix(in srgb,var(--dle) 32%,#0d0820),transparent 85%);box-shadow:inset 5px 0 0 var(--dle)}
.dleWrap .agHead .label{font-size:16px;letter-spacing:2px;color:#fff;text-shadow:3px 3px 0 rgba(0,0,0,.55)}
.dleWrap .agHead .hint{color:color-mix(in srgb,var(--dle) 55%,#fff)}
.dleWrap .agNav button,.dleWrap .row button{letter-spacing:1px}
.dleWrap .mdInput{background:#0d0820;border:3px solid var(--dle);box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 16px color-mix(in srgb,var(--dle) 30%,transparent);transition:box-shadow .15s}
.dleWrap .mdInput:focus{outline:none;box-shadow:0 0 0 3px rgba(0,0,0,.45),0 0 26px color-mix(in srgb,var(--dle) 60%,transparent)}
.dleWrap .mdSug{border:3px solid var(--dle);box-shadow:6px 6px 0 rgba(0,0,0,.55)}
.dleWrap .mdSugItem{padding:6px 10px;border-bottom:1px solid rgba(255,255,255,.07)}
.dleWrap .mdSugItem img{width:38px;height:38px}
.dleWrap .mdSugItem:hover,.dleWrap .mdSugItem.on{background:color-mix(in srgb,var(--dle) 28%,transparent)}
.dleWrap .mdHint,.dleWrap .mdEmoji{box-shadow:inset 4px 0 0 var(--dle),0 0 0 3px rgba(0,0,0,.35)}
.dleWrap .mdGuesses{gap:8px;padding:6px 0}
.dleWrap .mdH{background:#160d30;color:#fff;border-bottom:3px solid var(--dle);padding:7px 2px;font-size:7px}
.dleWrap .mdRow{gap:6px}
.dleWrap .mdRow:not(.head) .mdCell{font-weight:bold;text-shadow:1px 1px 0 rgba(0,0,0,.5);box-shadow:inset 0 3px 0 rgba(255,255,255,.2),inset 0 -4px 0 rgba(0,0,0,.4),0 0 0 2px rgba(0,0,0,.55)}
.dleWrap .mdCell.who{background:linear-gradient(#2a1d52,#1c1238);border-left:4px solid var(--dle)}
.dleWrap .mdCell.who img{width:46px;height:46px;box-shadow:0 0 0 2px var(--dle),3px 3px 0 2px rgba(0,0,0,.5)}
.dleWrap .mdCell.ok{background:linear-gradient(#45c27b,#2f8f5a)}
.dleWrap .mdCell.part{background:linear-gradient(#e8aa42,#c0862a)}
.dleWrap .mdCell.no{background:linear-gradient(#cc3f5e,#9a2a44)}
.dleWrap .mdCell.wide{font-size:16px}
.dleWrap .sysCard.mdWin{background:linear-gradient(135deg,#34265f,#160d30);border:3px solid #ffd07a;box-shadow:0 0 0 3px #000,0 0 30px rgba(255,208,122,.35);padding:16px}
.dleWrap .mdWinImg{width:124px;height:124px}
.dleWrap .mdWin b{font-size:19px;text-shadow:3px 3px 0 rgba(0,0,0,.5)}
.dleWrap .mdPix{box-shadow:0 0 0 3px var(--dle),6px 6px 0 3px rgba(0,0,0,.5)}
`;  // le style de ce plugin (il utilise les variables du thème de NeoDex)
export default async function (ctx) {
  const view = ctx.view;
  if (!ctx.host) { view.textContent = "Ce plugin doit être approuvé par NeoDex pour s'ouvrir."; return; }
  const host = ctx.host, { el, toast, sfx, ask, newTab, pixIcon, PIX, WX } = host;
  const folder = ctx.folder, legacy = ctx.legacy || {};
  ctx.host.addStyle(CSS);
  view.innerHTML = HTML;
  const $ = id => id === "dle_monodle" ? view : (view.querySelector('#' + id) || document.getElementById(id));  // les identifiants de ta vue d'abord, puis ceux de la page (fenêtres, menus)
  const doc = async n => { try { return await folder.read(n); } catch { return null; } };
  const __icon = () => ctx.icon;  // l'icône de ce plugin
  const __asset = async (rel, type) => URL.createObjectURL(new Blob([Uint8Array.from(atob(await neo.pluginFileRead(ctx.id, rel)), c => c.charCodeAt(0))], { type }));  // un fichier livré avec le plugin
  const __imgs = {};  // les portraits livrés avec le plugin
  await Promise.all(["black-hanekawa.webp","crabe-de-poids-omoshi-kani.webp","deathtopia-virtuoso-suicide-master.webp","deishuu-kaiki.webp","dramaturgy.webp","episode.webp","guillotinecutter.webp","hitagi-senjougahara.webp","izuko-gaen.webp","jagirinawa.webp","kako.webp","karen-araragi.webp","koyomi-araragi.webp","kuchinawa.webp","mayoi-hachikuji.webp","meme-oshino.webp","meniko-hamukai.webp","mere-de-hitagi.webp","mere-de-koyomi.webp","mere-de-nadeko.webp","mizudori.webp","nadeko-sengoku.webp","ougi-oshino.webp","pere-de-hitagi.webp","pere-de-mayoi.webp","pere-de-nadeko.webp","rainy-devil.webp","rouka-numachi.webp","rousokuzawa.webp","sasayabu.webp","seishirou-shishirui.webp","seiu-higasa.webp","shide-no-tori.webp","shinobu-oshino.webp","sodachi-oikura.webp","suruga-kanbaru.webp","tadatsuru-teori.webp","tooe-gaen.webp","tropicalesque-home-a-wave-dog-strings.webp","tsubasa-hanekawa.webp","tsukihi-araragi.webp","tsunade.webp","yotsugi-ononoki.webp","yozuru-kagenui.webp"].map(async n => { __imgs[n] = await __asset('img/' + n, /.png$/.test(n) ? 'image/png' : /.webp$/.test(n) ? 'image/webp' : 'image/jpeg'); }));
  const LEGACY_GAMES = {"top":["monodle"],"best":"^$"};
  let games = await doc('games');
  if (games == null) {  // première ouverture : tu retrouves tes records et tes parties d'avant
    const old = legacy.api ? await legacy.api('games').catch(() => null) : null; games = { best: {} };
    if (old) { const re = new RegExp(LEGACY_GAMES.best); for (const [k, v] of Object.entries(old.best || {})) if (re.test(k)) games.best[k] = v; for (const k of LEGACY_GAMES.top) if (old[k] !== undefined) games[k] = old[k]; await folder.write('games', games); }
  }
  games = { best: {}, ...games };
  let gamesTimer = null;
  const saveGames = () => { clearTimeout(gamesTimer); gamesTimer = setTimeout(() => { gamesTimer = null; folder.write('games', games).catch(() => {}); }, 500); };
  const best = (k, v, higher = true) => { const b = games.best[k]; if (b == null || (higher ? v > b : v < b)) { games.best[k] = v; saveGames(); return true; } return false; };
  const gstore = (k, init) => (games[k] ??= init);  // la section d'un jeu
function gameLoop(st, appKey, update, draw) {
  cancelAnimationFrame(st.raf);
  const STEP = 1000 / 60; let acc = 0, last = performance.now();
  const frame = t => {
    if (!view.classList.contains('on')) { st.raf = 0; if (st.mode === 'play') st.mode = 'pause'; return; }  // leaving the tab pauses the game
    st.raf = requestAnimationFrame(frame);
    acc += Math.min(200, t - last); last = t;
    while (acc >= STEP) { if (st.mode === 'play') update(); st.tick++; acc -= STEP; }
    draw();
  };
  st.raf = requestAnimationFrame(frame);
}
function gameText(g, w, lines, y0) {  // centred pixel-font lines over a dark band
  g.fillStyle = 'rgba(11,3,28,.72)'; g.fillRect(0, y0 - 14, w, lines.length * 14 + 14);
  g.textAlign = 'center';
  lines.forEach(([text, color, size], i) => { g.fillStyle = color; g.font = (size || 8) + 'px "Press Start 2P", monospace'; g.fillText(text, w / 2, y0 + i * 14); });
  g.textAlign = 'left';
}
const px = (g, color, x, y, w = 1, h = 1) => { g.fillStyle = color; g.fillRect(Math.round(x), Math.round(y), w, h); };
function sprite(g, rows, x, y, pal) { rows.forEach((r, j) => { for (let i = 0; i < r.length; i++) { const c = pal[r[i]]; if (c) px(g, c, x + i, y + j); } }); }
  // ---- ton code d'origine ----
/* NeoDle: the "-dle" games (guess a character of a series). One engine, each series registers itself from web/dle/<series>.js with dleRegister():
   its columns (eq: same value, set: lists that can overlap, num / ord: numbers or ordered labels with ↑ ↓ arrows), its characters and its pools.
   Modes: Classique (columns compared), Indices (hints one after the other), Emoji (when the characters have emojis), Image (the portrait, less pixelated after each wrong guess).
   A daily challenge per mode (the same for everyone) and free games, saved in games.<key> (synced). Portraits: web/dle/img/<series>/ (from the series' Fandom wiki). */

const DLES = {};
const DLE_MODES = {classic: 'Classique', hints: 'Indices', emoji: 'Emoji', image: 'Image'};
const DLE_GENDER = {F: 'Femme', M: 'Homme', V: 'Variable', N: 'Aucun', '?': 'Inconnu'};
const dleDay = (d = new Date()) => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
const dleHash = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
const dleNorm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9぀-鿿]+/g, ' ').trim();
const dleImg = (g, c) => c.img ? (__imgs[c.img] || '') : '';

/* ---------- comparing a guess with the answer, column by column ---------- */
function dleCompare(g, guess, ans) {
  return g.cols.map(col => {
    const a = guess[col.id], b = ans[col.id], show = v => v == null || v === '' ? '?' : col.type === 'ord' ? col.labels[v] : col.map ? col.map[v] ?? v : (col.pre || '') + v + (col.unit || '');
    if (col.type === 'set') {
      const A = a || [], B = b || [], S = new Set(A), same = A.length === B.length && B.every(x => S.has(x));
      return {k: col.k, v: A.join(', ') || col.none || 'Aucun', r: same ? 'ok' : B.some(x => S.has(x)) ? 'part' : 'no'};
    }
    if (col.type === 'num' || col.type === 'ord') {
      if (a === b) return {k: col.k, v: show(a), r: 'ok'};
      if (a == null || b == null) return {k: col.k, v: show(a), r: 'no'};
      return {k: col.k, v: show(a), r: col.near && Math.abs(a - b) <= col.near ? 'part' : 'no', arrow: b > a ? '↑' : '↓'};
    }
    return {k: col.k, v: show(a), r: a === b ? 'ok' : 'no'};
  });
}

/* ---------- the save: games.<key> ---------- */
const dleSave = g => gstore(g.key, {days: {}, stats: {}, free: null, pool: 'main', mode: 'classic'});
const dlePool = (g, p) => g.chars.filter(c => c.t <= (g.pools[p] || g.pools.main).t);
const dleFits = (c, mode) => mode === 'emoji' ? !!c.em : mode === 'image' ? !!c.img : mode === 'hints' ? c.h.length > 0 : true;
function dleDaily(g, mode, day = dleDay()) {  // the same character for everyone on a given day, among the main pool
  const pool = dlePool(g, 'all').filter(c => dleFits(c, mode));
  return pool[dleHash(g.key + ':' + mode + ':' + day) % pool.length];
}
function dleState(g, mode, daily) {  // the game being played: today's challenge of this mode, or the free game
  const s = dleSave(g);
  if (!g.pools[s.pool]) s.pool = 'all';  // a pool that no longer exists (MonogatariDle's « extrême »)
  if (daily) { const day = dleDay(), d = (s.days[day] ||= {}); return d[mode] ||= {ans: dleDaily(g, mode, day).n, guesses: [], won: false}; }
  const pool = dlePool(g, s.pool).filter(c => dleFits(c, mode));
  if (!s.free || s.free.mode !== mode || s.free.pool !== s.pool || !pool.some(c => c.n === s.free.ans))
    s.free = {mode, pool: s.pool, ans: pool[Math.floor(Math.random() * pool.length)].n, guesses: [], won: false};
  return s.free;
}
function dleRecord(g, mode, daily, won, tries) {
  const st = (dleSave(g).stats[mode] ||= {played: 0, wins: 0, streak: 0, bestStreak: 0, tries: 0, lastDay: ''});
  st.played++; if (won) { st.wins++; st.tries += tries; }
  if (daily) {
    const y = new Date(); y.setDate(y.getDate() - 1);
    st.streak = won ? (st.lastDay === dleDay(y) ? st.streak + 1 : 1) : 0; st.bestStreak = Math.max(st.bestStreak, st.streak); st.lastDay = dleDay();
  }
}

/* ---------- the portrait of the Image mode: drawn on a few big pixels, more of them after each wrong guess ---------- */
const DLE_PIX = [6, 9, 13, 18, 26, 38, 56, 90];
function dlePixel(cv, src, cells) {
  const im = new Image();
  im.onload = () => {
    const S = cv.width, side = Math.min(im.width, im.height), sx = (im.width - side) / 2, sy = im.height > im.width ? 0 : (im.height - side) / 2;  // square crop, the top of tall portraits (the face)
    const ctx = cv.getContext('2d'); ctx.imageSmoothingEnabled = cells >= S;
    if (cells >= S) { ctx.drawImage(im, sx, sy, side, side, 0, 0, S, S); return; }
    const t = document.createElement('canvas'); t.width = t.height = cells;
    const tc = t.getContext('2d'); tc.drawImage(im, sx, sy, side, side, 0, 0, cells, cells);
    ctx.drawImage(t, 0, 0, cells, cells, 0, 0, S, S);
  };
  im.src = src;
}

/* ---------- the page of one game ---------- */
const dleChar = (g, n) => g.chars.find(c => c.n === n);
function dleRender(g) {
  if (!games) return;
  const u = g.ui, s = dleSave(g), st = dleState(g, u.mode, u.daily), ans = dleChar(g, st.ans) || g.chars[0], tries = st.guesses.length;
  for (const b of u.modes.children) b.classList.toggle('on', b.dataset.m === u.mode);
  u.dailyBtn.classList.toggle('main', u.daily); u.freeBtn.classList.toggle('main', !u.daily);
  u.pool.value = s.pool; u.pool.disabled = u.daily;
  const stats = s.stats[u.mode];
  u.info.textContent = (u.daily ? 'Défi du jour · ' : 'Partie libre · ' + g.pools[s.pool].l + ' · ') + dlePool(g, u.daily ? 'all' : s.pool).filter(c => dleFits(c, u.mode)).length + ' personnages'
    + (stats ? ' · série ' + stats.streak + ' (record ' + stats.bestStreak + ') · ' + stats.wins + ' / ' + stats.played + ' gagnées' : '');
  // what the mode shows before the guesses
  const top = u.clue; top.replaceChildren();
  if (u.mode === 'hints') {
    const shown = st.won ? ans.h.length : Math.min(ans.h.length, 1 + tries);
    top.append(el('span', 'label', 'Indices · ' + shown + ' / ' + ans.h.length), ...ans.h.slice(0, shown).map((h, i) => el('div', 'mdHint px', (i + 1) + '. ' + h)));
  } else if (u.mode === 'emoji') {
    const e = [...ans.em.matchAll(/\p{Extended_Pictographic}(‍\p{Extended_Pictographic}|️)*/gu)].map(m => m[0]), shown = st.won ? e.length : Math.min(e.length, 1 + tries);
    top.append(el('span', 'label', 'Emojis · ' + shown + ' / ' + e.length), el('div', 'mdEmoji px', e.slice(0, shown).join(' ') + ' ' + '❔'.repeat(e.length - shown)));
  } else if (u.mode === 'image') {
    const lv = st.won ? DLE_PIX.length : Math.min(tries, DLE_PIX.length), cv = el('canvas', 'mdPix');
    cv.width = cv.height = 240;
    top.append(el('span', 'label', st.won ? 'Portrait' : 'Portrait · netteté ' + (lv + 1) + ' / ' + (DLE_PIX.length + 1)), cv);
    dlePixel(cv, dleImg(g, ans), lv >= DLE_PIX.length ? 240 : DLE_PIX[lv]);
  } else {
    top.append(el('span', 'hint', 'Vert : pareil · orange : en partie' + (g.cols.some(c => c.near) ? ' ou proche' : '') + ' · rouge : différent · ' + g.arrows));
    if (!st.won && tries >= 6 && ans.va) top.append(el('div', 'mdHint px', 'Indice (6 essais) : voix japonaise ' + ans.va));
    if (!st.won && tries >= 10 && ans.h.length) top.append(el('div', 'mdHint px', 'Indice (10 essais) : ' + ans.h.at(-1)));
  }
  // the input, or the win banner
  u.form.style.display = st.won ? 'none' : '';
  u.win.style.display = st.won ? '' : 'none';
  if (st.won) {
    const next = new Date(), txt = el('div', 'mdWinTxt'); next.setHours(24, 0, 0, 0);
    txt.append(el('b', '', 'Bravo ! C\'était ' + ans.n), el('span', 'hint', [ans.jp, 'trouvé en ' + tries + ' essai' + (tries > 1 ? 's' : ''), g.tiers[ans.t], ans.va && 'voix : ' + ans.va].filter(Boolean).join(' · ')),
      el('span', 'hint', u.daily ? 'Prochain défi dans ' + Math.ceil((next - Date.now()) / 3600e3) + ' h. Une partie libre en attendant ?' : 'Clique sur « Nouvelle partie » pour recommencer.'));
    u.win.replaceChildren(...(ans.img ? [Object.assign(el('img', 'mdWinImg'), {src: dleImg(g, ans), alt: ''})] : []), txt);
  }
  u.newBtn.style.display = u.daily ? 'none' : '';
  // the guesses, the last one first
  const list = u.guesses, cols = g.cols.length, grid = {gridTemplateColumns: '1.5fr repeat(' + cols + ',1fr)', minWidth: 150 + cols * 104 + 'px'};
  list.replaceChildren();
  if (u.mode === 'classic' && tries) { const hr = el('div', 'mdRow head'); Object.assign(hr.style, grid); hr.append(el('span', 'mdH', 'Personnage'), ...g.cols.map(c => el('span', 'mdH', c.k))); list.append(hr); }
  for (const name of [...st.guesses].reverse()) {
    const c = dleChar(g, name); if (!c) continue;
    const who = el('span', 'mdCell who' + (c.n === ans.n ? ' ok' : '') + (u.mode === 'classic' ? '' : ' wide ' + (c.n === ans.n ? 'ok' : 'no')));
    if (c.img) who.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    who.append(el('span', '', c.n + (u.mode === 'classic' ? '' : c.n === ans.n ? ' ✓' : ' ✗')));
    if (u.mode === 'classic') {
      const row = el('div', 'mdRow'); Object.assign(row.style, grid); row.append(who);
      for (const r of dleCompare(g, c, ans)) { const cell = el('span', 'mdCell ' + r.r, r.v); if (r.arrow) cell.append(el('i', '', r.arrow)); cell.title = r.k; row.append(cell); }
      list.append(row);
    } else list.append(who);
  }
}
function dleGuess(g, name) {
  const u = g.ui, st = dleState(g, u.mode, u.daily), c = dleChar(g, name);
  if (!c || st.won || st.guesses.includes(c.n)) return;
  st.guesses.push(c.n);
  if (c.n === st.ans) { st.won = true; dleRecord(g, u.mode, u.daily, true, st.guesses.length); sfx('launch'); } else sfx('click');
  saveGames(); u.input.value = ''; dleSuggest(g); dleRender(g);
}
function dleSuggest(g) {
  const u = g.ui, q = dleNorm(u.input.value), st = dleState(g, u.mode, u.daily);
  const pool = dlePool(g, u.daily ? 'all' : dleSave(g).pool).filter(c => !st.guesses.includes(c.n) && dleFits(c, u.mode));
  const hits = q ? pool.filter(c => (c.key ||= dleNorm([c.n, c.n.split(' ').reverse().join(' '), c.jp, ...(c.al || [])].join(' '))).includes(q)).slice(0, 8) : [];
  u.sug.replaceChildren(...hits.map((c, i) => {
    const b = el('button', 'mdSugItem' + (i === u.sel ? ' on' : '')), name = el('span', 'n');
    if (c.img) name.append(Object.assign(el('img'), {src: dleImg(g, c), alt: '', loading: 'lazy'}));
    name.append(c.n); b.append(name, el('span', 'hint', c.jp || ''));
    b.onmousedown = e => { e.preventDefault(); dleGuess(g, c.n); }; return b;
  }));
  u.sug.style.display = hits.length ? '' : 'none'; u.hits = hits;
}
function dleRegister(g) {
  console.assert(g.chars.every(c => c.n && Array.isArray(c.h) && g.tiers[c.t] && g.cols.every(col => col.type !== 'set' || Array.isArray(c[col.id] || []))) && new Set(g.chars.map(c => c.n)).size === g.chars.length, g.key + ': well-formed, unique names');
  DLES[g.key] = g;
  const modes = Object.keys(DLE_MODES).filter(m => g.chars.some(c => dleFits(c, m)));
  // the view is already in index.html (tabs reopened at launch can be created before this script runs), else it is added here
  const v = $('dle_' + g.key) || el('div', 'appView'), w = el('div', 'appWrap'), head = el('div', 'agHead'), nav = el('div', 'agNav');
  if (!v.id) { v.id = 'dle_' + g.key; $('musicApp').before(v); }
  v.append(w);
  w.classList.add('dleWrap'); w.style.setProperty('--dle', '#7fe0ee');  // la couleur de la série
  const u = g.ui = {mode: 'classic', daily: true, info: el('span', 'hint'), dailyBtn: el('button', 'btn px', 'DÉFI DU JOUR'), freeBtn: el('button', 'btn px', 'PARTIE LIBRE'), pool: el('select', 'f gSel'), newBtn: el('button', 'btn px', 'NOUVELLE PARTIE'),
    modes: el('div', 'row'), clue: el('div', 'mdClue'), form: el('div', 'mdForm'), input: el('input', 'f mdInput'), sug: el('div', 'mdSug px'), win: el('div', 'sysCard px mdWin'), guesses: el('div', 'mdGuesses')};
  u.pool.title = 'Personnages possibles en partie libre';
  Object.assign(u.input, {placeholder: 'Nom d\'un personnage de ' + g.series + '…', spellcheck: false, autocomplete: 'off'});
  u.sug.style.display = 'none'; u.win.style.display = 'none';
  nav.append(u.dailyBtn, u.freeBtn, u.pool, u.newBtn); head.append(el('span', 'label', g.name), u.info, nav); u.form.append(u.input, u.sug);
  w.append(head, u.modes, u.clue, u.form, u.win, u.guesses, el('div', 'hint', g.about));
  u.input.oninput = () => { u.sel = 0; dleSuggest(g); };
  u.input.onkeydown = e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); u.sel = Math.max(0, Math.min((u.hits?.length || 1) - 1, (u.sel || 0) + (e.key === 'ArrowDown' ? 1 : -1))); dleSuggest(g); }
    if (e.key === 'Enter' && u.hits?.length) { e.preventDefault(); dleGuess(g, u.hits[u.sel || 0].n); }
    if (e.key === 'Escape') u.sug.style.display = 'none';
  };
  u.input.onblur = () => setTimeout(() => u.sug.style.display = 'none', 100);
  u.modes.append(...modes.map(k => { const b = el('button', 'tab px', DLE_MODES[k]); b.dataset.m = k; b.onclick = () => { u.mode = k; dleSave(g).mode = k; dleRender(g); }; return b; }));
  u.pool.append(...Object.entries(g.pools).map(([k, p]) => { const o = el('option', '', p.l + ' (' + dlePool(g, k).length + ')'); o.value = k; return o; }));
  u.pool.onchange = () => { dleSave(g).pool = u.pool.value; saveGames(); dleRender(g); };
  u.dailyBtn.onclick = () => { u.daily = true; dleRender(g); };
  u.freeBtn.onclick = () => { u.daily = false; dleRender(g); };
  u.newBtn.onclick = () => { const s = dleSave(g); if (s.free && !s.free.won && s.free.guesses.length) dleRecord(g, s.free.mode, false, false, 0); s.free = null; saveGames(); dleRender(g); u.input.focus(); };
}
function dleOpen(key) { const g = DLES[key], m = games?.[key]?.mode; if (m && g.ui.modes.querySelector('[data-m="' + m + '"]')) g.ui.mode = m; dleRender(g); setTimeout(() => g.ui.input.focus(), 50); }

/* MonogatariDle: the characters of the Monogatari series (Nisio Isin), with the ones only mentioned and the oddities.
   Data from the series' wiki (bakemonogatari.fandom.com) and Wikipedia's character list; hair = anime colours, age = apparent age; portraits from the wiki. */
dleRegister({key: 'monodle', name: 'MonogatariDle', series: 'Monogatari', dir: 'monogatari',
  tiers: {1: 'Principal', 2: 'Secondaire', 3: 'Mentionné / oddité'},
  pools: {main: {l: 'Personnages principaux', t: 2}, all: {l: 'Tous (mentionnés et oddités)', t: 3}},
  cols: [
    {id: 'g', k: 'Genre', type: 'eq', map: DLE_GENDER}, {id: 'sp', k: 'Nature', type: 'set'}, {id: 'ro', k: 'Rôle', type: 'set'}, {id: 'ha', k: 'Cheveux', type: 'set', none: '?'},
    {id: 'a', k: 'Âge apparent', type: 'ord', labels: ['Enfant', 'Adolescent', 'Jeune adulte', 'Adulte', 'Âgé', 'Plusieurs siècles']},
    {id: 'f', k: '1re apparition', type: 'ord', labels: ['Bakemonogatari', 'Kizumonogatari', 'Nisemonogatari', 'Nekomonogatari (Kuro)', 'Nekomonogatari (Shiro)', 'Kabukimonogatari', 'Hanamonogatari', 'Otorimonogatari', 'Onimonogatari', 'Koimonogatari', 'Tsukimonogatari', 'Owarimonogatari', 'Koyomimonogatari', 'Zoku Owarimonogatari', 'Orokamonogatari', 'Wazamonogatari', 'Nademonogatari', 'Musubimonogatari', 'Shinobumonogatari']},
    {id: 'od', k: 'Oddité liée', type: 'set'},
  ],
  arrows: '↑ : le personnage à trouver est plus vieux ou apparaît plus tard dans la série, ↓ : l\'inverse.',
  about: 'Devine le personnage de la série Monogatari. Classique : chaque essai compare genre, nature, rôle, cheveux (couleurs de l\'anime), âge apparent, première apparition et oddité. Indices, Emoji et Image : un indice de plus à chaque essai raté. Le défi du jour est le même pour tout le monde ; la partie libre peut aussi tirer les personnages juste mentionnés et les oddités.',
  chars: [
  {n: "Koyomi Araragi",jp: "阿良々木 暦",t: 1,g: "M",sp: ["Humain","Vampire"],ro: ["Famille Araragi","Lycée Naoetsu","Police"],ha: ["Noir"],a: 1,f: 0,od: ["Vampire"],va: "Hiroshi Kamiya",em: "🦇🩸🍩📚👊",h: ["Il raconte la plupart des histoires.","Il a deux petites sœurs.","Seul élève à avoir eu 100 au contrôle de maths de la classe 1-3.","Il a été transformé par un vampire pendant les vacances de printemps.","Son nom de famille s'écrit avec trois caractères dont « 々 »."],img: "koyomi-araragi.webp"},
  {n: "Hitagi Senjougahara",jp: "戦場ヶ原 ひたぎ",t: 1,g: "F",sp: ["Humain"],ro: ["Lycée Naoetsu","Héroïne"],ha: ["Violet"],a: 1,f: 0,od: ["Crabe"],va: "Chiwa Saitō",em: "🦀📎⚖️✂️💜",h: ["Elle était considérée comme une élève maladive.","Sa mère a rejoint une secte.","Elle se défend avec des agrafeuses et des ciseaux.","Une oddité lui avait retiré presque tout son poids.","Elle est la petite amie puis la femme du narrateur."],img: "hitagi-senjougahara.webp"},
  {n: "Mayoi Hachikuji",jp: "八九寺 真宵",t: 1,g: "F",sp: ["Fantôme","Divinité"],ro: ["Héroïne","École primaire"],ha: ["Noir"],a: 0,f: 0,od: ["Escargot"],va: "Emiri Katō",em: "🐌🎒🌀👻⛩️",h: ["Elle porte toujours un très grand sac à dos.","Elle se trompe exprès dans le nom du narrateur.","Elle n'arrivait jamais à rentrer chez sa mère.","Elle est morte dans un accident de la route en CM2.","Elle devient la divinité du sanctuaire Kita-Shirahebi."],img: "mayoi-hachikuji.webp"},
  {n: "Suruga Kanbaru",jp: "神原 駿河",t: 1,g: "F",sp: ["Humain"],ro: ["Lycée Naoetsu","Héroïne","Basket"],ha: ["Bleu"],a: 1,f: 0,od: ["Singe","Démon"],va: "Miyuki Sawashiro",em: "🐒🏀🩹💪📚",h: ["Elle est très rapide et vit chez ses grands-parents.","Sa chambre est un désordre total.","Elle porte un bandage autour du bras gauche.","Elle a souhaité trois fois sur une patte de singe.","Sa tante est la spécialiste qui « sait tout »."],img: "suruga-kanbaru.webp"},
  {n: "Nadeko Sengoku",jp: "千石 撫子",t: 1,g: "F",sp: ["Humain","Divinité"],ro: ["Collège","Héroïne"],ha: ["Brun"],a: 1,f: 0,od: ["Serpent"],va: "Kana Hanazawa",em: "🐍🧢✏️💕⛩️",h: ["C'est une amie d'enfance de la plus jeune sœur du narrateur.","Elle cache son visage sous sa frange et une casquette.","Elle parle d'elle-même à la troisième personne.","Un serpent invisible l'étranglait à cause d'une malédiction.","Elle devient une déesse serpent puis une mangaka."],img: "nadeko-sengoku.webp"},
  {n: "Tsubasa Hanekawa",jp: "羽川 翼",t: 1,g: "F",sp: ["Humain","Oddité"],ro: ["Lycée Naoetsu","Héroïne"],ha: ["Noir"],a: 1,f: 0,od: ["Chat","Tigre"],va: "Yui Horie",em: "🐱🐯👓📖🌸",h: ["Déléguée de classe à lunettes et nattes.","« Je ne sais pas tout, je sais juste ce que je sais. »","Elle vit avec des parents qui ne sont pas les siens.","Le stress l'a fait fusionner avec un chat.","Sa jalousie a pris la forme d'un tigre de feu."],img: "tsubasa-hanekawa.webp"},
  {n: "Black Hanekawa",jp: "ブラック羽川",t: 2,g: "F",sp: ["Oddité"],ro: ["Oddité"],ha: ["Blanc"],a: 1,f: 0,od: ["Chat"],va: "Yui Horie",em: "🐱🖤🐾⚡😼",h: ["Il ou elle parle en miaulant.","Elle sort quand sa maîtresse est à bout.","Elle draine l'énergie de ceux qu'elle touche.","Elle a les cheveux blancs et des oreilles de chat.","C'est l'autre personnalité de la déléguée de classe."],img: "black-hanekawa.webp"},
  {n: "Shinobu Oshino",jp: "忍野 忍",t: 1,g: "F",sp: ["Vampire"],ro: ["Héroïne"],ha: ["Blond"],a: 0,f: 0,od: ["Vampire"],va: "Maaya Sakamoto",em: "🦇🍩🌙👑🗡️",h: ["Elle adore les donuts.","Elle vit dans l'ombre du narrateur.","Elle a presque 600 ans.","Son vrai nom est très long et contient « Heart-Under-Blade ».","Elle est la reine des oddités, la vampire de Kizumonogatari."],img: "shinobu-oshino.webp"},
  {n: "Karen Araragi",jp: "阿良々木 火憐",t: 1,g: "F",sp: ["Humain"],ro: ["Famille Araragi","Fire Sisters","Police"],ha: ["Noir"],a: 1,f: 0,od: ["Abeille"],va: "Eri Kitamura",em: "🐝🥋🔥👊🧑‍🤝‍🧑",h: ["Elle pratique les arts martiaux.","Elle est la plus grande de sa famille.","Elle forme un duo justicier avec sa sœur.","Un faux spécialiste lui a transmis une fièvre.","C'est la sœur cadette du narrateur, celle de l'abeille."],img: "karen-araragi.webp"},
  {n: "Tsukihi Araragi",jp: "阿良々木 月火",t: 1,g: "F",sp: ["Humain","Oddité"],ro: ["Famille Araragi","Fire Sisters","Collège"],ha: ["Noir"],a: 1,f: 0,od: ["Phénix"],va: "Yuka Iguchi",em: "🐦🔥👘♻️🍵",h: ["Elle change de coiffure très souvent.","Elle porte des kimonos à la maison.","Elle est la stratège d'un duo justicier.","Elle guérit de tout, même de la mort.","C'est une oddité née dans le ventre de sa mère : un oiseau de la mort."],img: "tsukihi-araragi.webp"},
  {n: "Yotsugi Ononoki",jp: "斧乃木 余接",t: 1,g: "F",sp: ["Shikigami"],ro: ["Spécialiste"],ha: ["Turquoise"],a: 0,f: 2,od: ["Tsukumogami"],va: "Saori Hayami",em: "✌️🧸😐💥🧟",h: ["Elle a toujours le même visage sans expression.","Elle fait le signe de la paix.","« Unlimited Rulebook » est sa technique.","C'est un cadavre devenu tsukumogami.","Elle sert l'onmyouji qui ne touche jamais le sol."],img: "yotsugi-ononoki.webp"},
  {n: "Ougi Oshino",jp: "忍野 扇",t: 1,g: "V",sp: ["Oddité"],ro: ["Lycée Naoetsu"],ha: ["Noir"],a: 1,f: 5,od: ["Ténèbres"],va: "Kaori Mizuhashi",em: "🌑❓🧥🖤🪞",h: ["Ses manches cachent toujours ses mains.","Il ou elle se dit de la famille d'un spécialiste.","« Je ne sais rien. C'est toi qui sais. »","Personne ne se souvient de l'avoir croisé une fois parti.","C'est le double critique du narrateur, une quasi-ténèbres."],img: "ougi-oshino.webp"},
  {n: "Sodachi Oikura",jp: "老倉 育",t: 1,g: "F",sp: ["Humain"],ro: ["Lycée Naoetsu","Héroïne"],ha: ["Argent"],a: 1,f: 11,od: [],va: "Marina Inoue",em: "🧮➗😠🏠📐",h: ["Elle adore les mathématiques.","Elle voulait qu'on l'appelle « Euler ».","Son surnom de classe est « How Much ».","Elle a été désignée coupable par un vote de la classe 1-3.","Elle déteste le narrateur depuis l'enfance, et a eu 99 au contrôle."],img: "sodachi-oikura.webp"},
  {n: "Meme Oshino",jp: "忍野 メメ",t: 2,g: "M",sp: ["Humain"],ro: ["Spécialiste"],ha: ["Blond"],a: 3,f: 0,od: [],va: "Takahiro Sakurai",em: "🚬🏚️🌺😏☯️",h: ["Il porte une chemise hawaïenne.","Il vit dans une école de cours du soir abandonnée.","« Tu as l'air plein d'énergie. Il s'est passé quelque chose de bien ? »","Il dit qu'on ne peut que s'aider soi-même.","Il a donné son nom de famille à la vampire."],img: "meme-oshino.webp"},
  {n: "Deishuu Kaiki",jp: "貝木 泥舟",t: 2,g: "M",sp: ["Humain"],ro: ["Spécialiste","Escroc"],ha: ["Noir"],a: 3,f: 2,od: ["Abeille"],va: "Shinichirō Miki",em: "🐦‍⬛💴🕴️🤥☁️",h: ["Il est toujours habillé en noir, comme en deuil.","Il ne croit pas aux oddités et ne vit que pour l'argent.","Il a escroqué la famille d'une héroïne et des collégiens.","Il narre un roman entier qu'il dit plein de mensonges.","C'est le faux spécialiste de « Karen Bee »."],img: "deishuu-kaiki.webp"},
  {n: "Yozuru Kagenui",jp: "影縫 余弦",t: 2,g: "F",sp: ["Humain"],ro: ["Spécialiste"],ha: ["Noir","Rouge"],a: 3,f: 2,od: ["Phénix"],va: "Ryoko Shiraishi",em: "🥋🚧⚔️🗣️🐦",h: ["Elle parle avec l'accent du Kansai.","Elle ne pose jamais le pied par terre.","Elle chasse les oddités immortelles gratuitement.","Elle était au même club universitaire que trois autres spécialistes.","C'est l'onmyouji maîtresse d'un shikigami au visage figé."],img: "yozuru-kagenui.webp"},
  {n: "Izuko Gaen",jp: "臥煙 伊豆湖",t: 2,g: "F",sp: ["Humain"],ro: ["Spécialiste","Famille Kanbaru"],ha: ["Brun"],a: 3,f: 4,od: [],va: "Satsuki Yukino",em: "🧢📚🧠🎩♟️",h: ["Elle porte une casquette trop grande.","Elle tire les ficelles de plusieurs histoires.","« Je sais tout. »","Elle est l'aînée des spécialistes de son ancien club.","C'est la tante de la joueuse de basket."],img: "izuko-gaen.webp"},
  {n: "Tadatsuru Teori",jp: "手折 正弦",t: 3,g: "M",sp: ["Oddité"],ro: ["Spécialiste"],ha: ["Bleu"],a: 3,f: 10,od: ["Tsukumogami"],va: "Takehito Koyasu",em: "🪆🧵🎭💀",h: ["Il manipule des poupées.","Il fabrique des corps.","Il est lié de loin à la famille Kagenui.","Il est lui-même un tsukumogami raté.","C'est l'adversaire de « Yotsugi Doll »."],img: "tadatsuru-teori.webp"},
  {n: "Seishirou Shishirui",jp: "死屍累 生死郎",t: 2,g: "M",sp: ["Vampire"],ro: ["Spécialiste","Serviteur de Kiss-shot"],ha: ["Noir"],a: 5,f: 11,od: ["Vampire"],va: "Rikiya Koyama",em: "🧟🗡️🍩⏳",h: ["Il a plus de 400 ans.","Il revient sous la forme d'un zombie.","Il veut retrouver sa maîtresse.","Il a été le premier serviteur de la vampire.","C'est l'ennemi de « Shinobu Mail »."],img: "seishirou-shishirui.webp"},
  {n: "Episode",jp: "エピソード",t: 2,g: "M",sp: ["Demi-vampire"],ro: ["Chasseur de vampires"],ha: ["Blond"],a: 1,f: 1,od: ["Vampire"],va: "Miyu Irino",em: "✝️🌫️🎓😈",h: ["Il se change en brume.","Il lance une croix géante.","Il est à moitié vampire.","Il a blessé gravement la déléguée de classe pendant un combat.","C'est un des trois chasseurs de Kizumonogatari, le plus jeune."],img: "episode.webp"},
  {n: "Dramaturgy",jp: "ドラマツルギー",t: 2,g: "M",sp: ["Vampire"],ro: ["Chasseur de vampires"],ha: ["Roux"],a: 3,f: 1,od: ["Vampire"],va: "Masashi Ebara",em: "🗡️🗡️💪🌋",h: ["Il est immense.","Ses bras se changent en épées.","C'est un vampire qui chasse les vampires.","Il a proposé au narrateur de rejoindre les chasseurs.","C'est le premier adversaire du narrateur dans Kizumonogatari."],img: "dramaturgy.webp"},
  {n: "Guillotinecutter",jp: "ギロチンカッター",t: 2,g: "M",sp: ["Humain"],ro: ["Chasseur de vampires"],ha: ["Brun"],a: 3,f: 1,od: [],va: "Hochu Otsuka",em: "✝️⛪📿🔪",h: ["Il a l'air doux et poli.","C'est un humain, pas une oddité.","Il dirige une organisation religieuse.","Il a pris une élève en otage.","C'est le dernier chasseur que le narrateur affronte dans Kizumonogatari."],img: "guillotinecutter.webp"},
  {n: "Mère de Koyomi",jp: "阿良々木の母",t: 3,g: "F",sp: ["Humain"],ro: ["Famille Araragi","Police"],ha: ["Noir"],a: 3,f: 4,od: [],va: "—",em: "👮‍♀️🏠",h: ["Elle travaille dans la police avec son mari.","On ne voit presque jamais son visage.","Elle sait ce qu'est vraiment sa fille cadette.","Son nom n'est jamais donné.","C'est la mère des trois enfants Araragi."],img: "mere-de-koyomi.webp"},
  {n: "Kako",jp: "苛虎",t: 2,g: "?",sp: ["Oddité"],ro: ["Oddité"],ha: [],a: null,f: 4,od: ["Tigre"],va: "Mitsuki Saiga",em: "🐯🔥🏚️😾",h: ["Il brûle les maisons.","Il est né de la jalousie.","Il a mis le feu à la maison de la déléguée.","C'est un tigre géant.","C'est l'oddité de « Tsubasa Tiger »."],img: "kako.webp"},
  {n: "Kuchinawa",jp: "くちなわ",t: 2,g: "M",sp: ["Oddité","Divinité"],ro: ["Oddité"],ha: [],a: null,f: 7,od: ["Serpent"],va: "Yōji Ueda",em: "🐍⛩️🎀",h: ["Il parle depuis un chouchou.","Il réclame qu'on retrouve son corps.","Il n'existe peut-être que dans la tête de celle qui l'entend.","C'est un dieu serpent.","C'est l'oddité de « Nadeko Medusa »."],img: "kuchinawa.webp"},
  {n: "Rouka Numachi",jp: "沼地 蠟花",t: 2,g: "F",sp: ["Humain","Fantôme"],ro: ["Basket","Collectionneuse de démons"],ha: ["Brun"],a: 1,f: 6,od: ["Démon"],va: "Kana Asumi",em: "🦶🏀🦯📦",h: ["Elle marche avec une béquille.","Elle écoute les malheurs des gens.","Elle était la grande rivale de basket de Suruga.","Elle collectionne les morceaux du démon.","C'est la « Devil » de « Suruga Devil »."],img: "rouka-numachi.webp"},
  {n: "Seiu Higasa",jp: "日傘 星雨",t: 3,g: "F",sp: ["Humain"],ro: ["Lycée Naoetsu","Basket"],ha: ["Noir"],a: 1,f: 6,od: [],va: "Yoko Hikasa",em: "🏀☂️🙋‍♀️",h: ["Elle aime raconter des rumeurs.","Elle joue au basket à Naoetsu.","Elle est une amie de Suruga.","Elle parle à Suruga de la « Devil-sama ».","Elle apparaît dans « Suruga Devil »."],img: "seiu-higasa.webp"},
  {n: "Deathtopia Virtuoso Suicide-Master",jp: "デストピア・ヴィルトゥオーゾ・スーサイドマスター",t: 3,g: "F",sp: ["Vampire"],ro: ["Vampire"],ha: ["Blond"],a: 5,f: 15,od: ["Vampire"],va: "Rika Fukami",em: "🧛‍♀️👑💀🩸",h: ["C'est une vampire de naissance.","Elle a plus de 600 ans.","Elle cherchait la mort.","Elle a créé Tropicalesque et une princesse.","C'est elle qui a fait de Kiss-shot une vampire."],img: "deathtopia-virtuoso-suicide-master.webp"},
  {n: "Tropicalesque Home-A-Wave Dog-Strings",jp: "トロピカレスク・ホームアヴェイヴ・ドッグストリングス",t: 3,g: "M",sp: ["Vampire"],ro: ["Vampire"],ha: ["Blond"],a: null,f: 15,od: ["Vampire"],va: "Daisuke Hirakawa",em: "🧛🐕🌴",h: ["C'est un vampire, ancien humain.","Son nom contient « Dog-Strings ».","Il sert une vampire de naissance.","Il apparaît dans les aventures de la vampire en Europe.","Son maître est Deathtopia."],img: "tropicalesque-home-a-wave-dog-strings.webp"},
  {n: "High-Waist",jp: "ハイ・ウエスト",t: 3,g: "F",sp: ["Vampire"],ro: ["Vampire"],ha: ["Blond"],a: null,f: 15,od: ["Vampire"],va: "—",em: "👖⬆️🧛‍♀️",h: ["C'est une vampire.","Elle a un frère jumeau.","Son nom vient de la mode.","Elle est l'aînée des jumeaux.","Son frère s'appelle Low-Rise."]},
  {n: "Low-Rise",jp: "ロー・ライズ",t: 3,g: "M",sp: ["Vampire"],ro: ["Vampire"],ha: [],a: null,f: 15,od: ["Vampire"],va: "—",em: "👖⬇️🧛",h: ["C'est un vampire.","Il a une sœur jumelle.","Son nom vient de la mode.","Il est le cadet des jumeaux.","Sa sœur s'appelle High-Waist."]},
  {n: "Meniko Hamukai",jp: "食飼 命日子",t: 2,g: "F",sp: ["Humain"],ro: ["Université"],ha: ["Violet"],a: 2,f: 18,od: [],va: "Momo Asakura",em: "🎓🔐💻",h: ["Elle est étudiante.","Elle étudie la cryptographie.","Elle est une amie de fac du narrateur.","Elle est à l'université Magarinaose.","Elle apparaît dans « Shinobu Mustard »."],img: "meniko-hamukai.webp"},
  {n: "Zenka Suo",jp: "周防全歌",t: 3,g: "F",sp: ["Humain","Oddité"],ro: ["Police"],ha: [],a: 3,f: 17,od: ["Sirène"],va: "—",em: "🧜‍♀️👮‍♀️🌊",h: ["Elle a 26 ans.","Elle est policière.","Elle fait partie de la brigade des rumeurs.","Elle est à moitié sirène.","Elle apparaît dans « Zenka Mermaid »."]},
  {n: "Nozomi Kizashima",jp: "兆間臨",t: 3,g: "F",sp: ["Oddité"],ro: ["Police"],ha: [],a: 0,f: 17,od: ["Golem"],va: "—",em: "🗿👮‍♀️🧒",h: ["Elle a l'air d'une enfant.","Elle a en vrai 29 ans.","Elle fait partie de la brigade des rumeurs.","C'est une golem, ancienne humaine.","Elle apparaît dans « Nozomi Golem »."]},
  {n: "Mitome Saisaki",jp: "再埼みとめ",t: 3,g: "F",sp: ["Oddité"],ro: ["Police"],ha: [],a: 3,f: 17,od: ["Loup-garou"],va: "—",em: "🐺👮‍♀️🌕",h: ["Elle a 29 ans.","Elle est policière.","Elle fait partie de la brigade des rumeurs.","C'est une louve-garou.","Elle apparaît dans « Mitome Wolf »."]},
  {n: "Tsuzura Kouga",jp: "甲賀葛",t: 3,g: "F",sp: ["Humain"],ro: ["Police"],ha: [],a: 3,f: 17,od: [],va: "—",em: "👮‍♀️⭐🗂️",h: ["Elle est humaine.","Elle est policière.","Elle dirige une brigade spéciale.","Elle est la cheffe de la brigade des rumeurs.","Elle apparaît dans « Tsuzura Human »."]},
  {n: "Tooe Gaen",jp: "臥煙 遠江",t: 3,g: "F",sp: ["Humain"],ro: ["Spécialiste","Famille Kanbaru"],ha: ["Brun"],a: 3,f: 6,od: ["Singe"],va: "Michiko Neya",em: "🐒🕯️📦",h: ["Elle est morte avant le début de l'histoire.","Elle a laissé un héritage maudit à sa fille.","Sa sœur cadette sait tout.","Elle était spécialiste des oddités.","C'est la mère de Suruga."],img: "tooe-gaen.webp"},
  {n: "Shun Kanbaru",jp: "神原 駿",t: 3,g: "M",sp: ["Humain"],ro: ["Famille Kanbaru"],ha: [],a: 3,f: 0,od: [],va: "—",em: "🚗💔",h: ["Il est mort dans un accident.","Sa famille désapprouvait son mariage.","Il s'est enfui avec sa femme.","Il était le beau-frère d'une spécialiste.","C'est le père de Suruga."]},
  {n: "Grand-mère de Suruga",jp: "駿河の祖母",t: 3,g: "F",sp: ["Humain"],ro: ["Famille Kanbaru"],ha: [],a: 4,f: 0,od: [],va: "—",em: "👵🏯",h: ["Elle vit dans une grande maison japonaise.","Elle élève sa petite-fille.","Son fils est mort.","On ne la voit presque pas.","C'est la grand-mère de Suruga."]},
  {n: "Père de Hitagi",jp: "ひたぎの父",t: 3,g: "M",sp: ["Humain"],ro: ["Famille Senjougahara"],ha: ["Gris"],a: 3,f: 0,od: [],va: "Fumihiko Tachiki",em: "👔💼🚙",h: ["Il travaille énormément pour rembourser des dettes.","Il est divorcé.","Il vit avec sa fille dans un petit appartement.","Il conduit sa fille et son petit ami à l'observation des étoiles.","C'est le père de Hitagi."],img: "pere-de-hitagi.webp"},
  {n: "Mère de Hitagi",jp: "ひたぎの母",t: 3,g: "F",sp: ["Humain"],ro: ["Famille Senjougahara"],ha: [],a: 3,f: 0,od: [],va: "—",em: "🙏💸⛪",h: ["Elle s'est fait escroquer.","Elle a rejoint une secte.","Elle a dépensé la fortune de la famille.","Elle a laissé un homme agresser sa fille.","C'est la mère de Hitagi."],img: "mere-de-hitagi.webp"},
  {n: "Tsunade",jp: "綱手",t: 3,g: "F",sp: ["Humain"],ro: ["Famille Hachikuji"],ha: [],a: 3,f: 0,od: [],va: "—",em: "🏠👩‍👧",h: ["Elle est divorcée.","Elle a déménagé.","Sa fille n'est jamais arrivée chez elle.","C'est son nom de famille qu'a pris sa fille un temps.","C'est la mère de Mayoi."],img: "tsunade.webp"},
  {n: "Père de Mayoi",jp: "真宵の父",t: 3,g: "M",sp: ["Humain"],ro: ["Famille Hachikuji"],ha: ["Noir"],a: 3,f: 0,od: [],va: "—",em: "👨‍👧💔",h: ["Il est divorcé.","Il a gardé sa fille.","Sa fille a voulu aller voir sa mère un jour de fête des mères.","On ne voit que le bas de son visage.","C'est le père de Mayoi."],img: "pere-de-mayoi.webp"},
  {n: "Mère de Nadeko",jp: "撫子の母",t: 3,g: "F",sp: ["Humain"],ro: ["Famille Sengoku"],ha: ["Brun"],a: 3,f: 7,od: [],va: "Miho Miyagawa",em: "🏠🍰",h: ["Elle gâte beaucoup sa fille.","Elle laisse entrer le narrateur chez elle.","Sa fille a disparu un temps.","Elle a les cheveux bruns et le teint pâle.","C'est la mère de Nadeko."],img: "mere-de-nadeko.webp"},
  {n: "Père de Nadeko",jp: "撫子の父",t: 3,g: "M",sp: ["Humain"],ro: ["Famille Sengoku"],ha: ["Noir"],a: 3,f: 7,od: [],va: "—",em: "🏠📰",h: ["Il gâte beaucoup sa fille.","On le voit surtout de dos.","Il a les cheveux noirs et courts.","Sa fille l'a fui en devenant déesse.","C'est le père de Nadeko."],img: "pere-de-nadeko.webp"},
  {n: "Parents adoptifs de Tsubasa",jp: "翼の両親",t: 3,g: "?",sp: ["Humain"],ro: ["Famille Hanekawa"],ha: [],a: 3,f: 3,od: [],va: "—",em: "🏠🚪🥶",h: ["Ils ne sont pas ses vrais parents.","Ils la laissent dormir dans le couloir.","Le père l'a frappée une fois.","Ils ont tout perdu dans un incendie.","Ce sont les parents de Tsubasa Hanekawa."]},
  {n: "Mère biologique de Tsubasa",jp: "翼の実母",t: 3,g: "F",sp: ["Humain"],ro: ["Famille Hanekawa"],ha: [],a: 1,f: 3,od: [],va: "—",em: "🕯️🍼",h: ["Elle avait 17 ans à la naissance de sa fille.","Elle avait beaucoup d'amants.","Elle a épousé un homme qui travaillait trop.","Elle s'est suicidée juste après l'accouchement.","C'est la vraie mère de Tsubasa."]},
  {n: "Mizudori",jp: "瑞鳥",t: 3,g: "M",sp: ["Humain"],ro: ["Petit ami"],ha: [],a: 1,f: 4,od: [],va: "—",em: "💑🥋",h: ["On ne le voit jamais.","Il est cité par la plus jeune sœur Araragi.","Le narrateur aimerait bien lui parler…","Il sort avec une karatéka.","C'est le petit ami de Karen."],img: "mizudori.webp"},
  {n: "Rousokuzawa",jp: "蝋燭沢",t: 3,g: "M",sp: ["Humain"],ro: ["Petit ami"],ha: [],a: 1,f: 4,od: [],va: "—",em: "💑🕯️",h: ["On ne le voit jamais.","Son nom contient le mot « bougie ».","Le narrateur ne l'aime pas trop.","Il sort avec la fille au kimono.","C'est le petit ami de Tsukihi."],img: "rousokuzawa.webp"},
  {n: "Sasayabu",jp: "笹薮",t: 3,g: "M",sp: ["Humain"],ro: ["Collège"],ha: [],a: 3,f: 7,od: [],va: "Ken Narita",em: "👨‍🏫📝",h: ["Il est enseignant.","Il travaille dans un collège.","Il est le professeur principal d'une héroïne.","Il enseigne au collège Nanahyakuichi.","C'est le professeur de Nadeko."],img: "sasayabu.webp"},
  {n: "Komichi Tetsujou",jp: "鉄条径",t: 3,g: "F",sp: ["Humain"],ro: ["Lycée Naoetsu","Classe 1-3"],ha: [],a: 3,f: 11,od: [],va: "—",em: "🥎➗🤰",h: ["Elle jouait au softball.","On la surnommait « Jou ».","Elle était la pacificatrice de la classe 1-3.","Elle est devenue professeure de maths au lycée.","Elle est en congé maternité pendant la dernière année du narrateur."]},
  {n: "Les Ténèbres",jp: "暗闇",t: 3,g: "?",sp: ["Oddité"],ro: ["Oddité"],ha: [],a: null,f: 8,od: ["Ténèbres"],va: "—",em: "⚫🌑🕳️",h: ["Ce n'est pas une personne.","Elle avale ce qui ne devrait plus exister.","Elle a poursuivi la vampire il y a 400 ans.","Elle est venue chercher Mayoi.","C'est l'oddité noire d'« Onimonogatari »."]},
  {n: "Crabe de poids (Omoshi Kani)",jp: "重し蟹",t: 3,g: "?",sp: ["Oddité"],ro: ["Oddité"],ha: [],a: null,f: 0,od: ["Crabe"],va: "—",em: "🦀⚖️",h: ["C'est une oddité.","Elle vient des montagnes de Kyushu.","Elle prend le poids des gens.","C'est presque un dieu.","C'est l'oddité de « Hitagi Crab »."],img: "crabe-de-poids-omoshi-kani.webp"},
  {n: "Rainy Devil",jp: "レイニーデヴィル",t: 3,g: "?",sp: ["Oddité"],ro: ["Oddité"],ha: [],a: null,f: 0,od: ["Démon","Singe"],va: "—",em: "🌧️😈🐒",h: ["C'est une oddité.","Elle exauce trois vœux.","Elle prend l'âme en échange.","Ses morceaux sont dispersés.","On la prend d'abord pour une patte de singe."],img: "rainy-devil.webp"},
  {n: "Jagirinawa",jp: "蛇切縄",t: 3,g: "?",sp: ["Oddité"],ro: ["Oddité"],ha: [],a: null,f: 0,od: ["Serpent"],va: "—",em: "🐍🪢",h: ["C'est une oddité invisible.","Elle laisse des marques d'écailles.","La toucher fait saigner.","C'est une malédiction lancée par une camarade.","C'est le serpent de « Nadeko Snake »."],img: "jagirinawa.webp"},
  {n: "Abeille de feu (Kakoi Hi Bachi)",jp: "囲い火蜂",t: 3,g: "?",sp: ["Oddité"],ro: ["Oddité"],ha: [],a: null,f: 2,od: ["Abeille"],va: "—",em: "🐝🔥🤒",h: ["C'est une oddité.","Elle date de l'époque de Muromachi.","Elle donne une fièvre paralysante.","Elle se transmet.","C'est l'oddité de « Karen Bee »."]},
  {n: "Shide no Tori",jp: "死出の鳥",t: 3,g: "?",sp: ["Oddité"],ro: ["Oddité"],ha: [],a: null,f: 2,od: ["Phénix"],va: "—",em: "🐦🥚♾️",h: ["C'est une oddité.","C'est un coucou.","Elle pond dans le ventre d'une femme enceinte.","On la confond avec un phénix.","C'est l'oddité de « Tsukihi Phoenix »."],img: "shide-no-tori.webp"},
  ]});  // (non indenté : les textes sur plusieurs lignes restent exactement les tiens)
  // ---- fin ----
  ctx.onOpen(() => { dleOpen('monodle'); });
}
