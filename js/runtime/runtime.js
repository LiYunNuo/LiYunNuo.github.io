var now = new Date();
function createtime () {
  var t = new Date('09/16/2022 00:00:00');
  now.setTime(now.getTime() + 250);
  var e = (now - t) / 1e3 / 60 / 60 / 24,
    a = Math.floor(e),
    n = (now - t) / 1e3 / 60 / 60 - 24 * a,
    r = Math.floor(n);
  1 == String(r).length && (r = '0' + r);
  var s = (now - t) / 1e3 / 60 - 1440 * a - 60 * r,
    i = Math.floor(s);
  1 == String(i).length && (i = '0' + i);
  var o = (now - t) / 1e3 - 86400 * a - 3600 * r - 60 * i,
    l = Math.round(o);
  1 == String(l).length && (l = '0' + l);
  let g = '';
  (g =
    r < 18 && r >= 9
      ? `<img class='boardsign' src='https://tuchuangs.com/imgs/2022/09/17/58ae009367466fe2.png' title='距离月入3k也就还差一个大佬带我~'><span class='textTip'> <br> 小破站在各种灾难中苟活了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
      : `<img class='boardsign' src='https://tuchuangs.com/imgs/2022/09/17/58ae009367466fe2.png' title='下班了就该开开心心的玩耍，嘿嘿~'><span class='textTip'> <br> 小破站在各种灾难中苟活了 ${a} 天</span><span id='runtime'> ${r} 小时 ${i} 分 ${l} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById('workboard') &&
    (document.getElementById('workboard').innerHTML = g);
}
setInterval(() => {
  createtime();
}, 250);
