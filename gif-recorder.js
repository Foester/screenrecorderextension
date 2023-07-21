function encode64(n) {
    for (var o = "", f = 0, l = n.length, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", s, i, r, c, h, e, t; f < l;) {
        s = n.charCodeAt(f++),
            i = n.charCodeAt(f++),
            r = n.charCodeAt(f++),
            c = s >> 2,
            h = (s & 3) << 4 | i >> 4,
            e = (i & 15) << 2 | r >> 6,
            t = r & 63,
            isNaN(i) ? e = t = 64 : isNaN(r) && (t = 64),
            o = o + u.charAt(c) + u.charAt(h) + u.charAt(e) + u.charAt(t);
    }
    return o
}

LZWEncoder = function () {
    var c = {},
        it = -1,
        st, ht, rt, l, w, et, ut = 12,
        ct = 5003,
        t, ft = ut,
        o, ot = 1 << ut,
        u = [],
        y = [],
        a = ct,
        s = 0,
        h = !1,
        v, f, p, i = 0,
        n = 0,
        vt = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
        r, g = [],
        lt = c.LZWEncoder = function lt(n, t, i, r) {
            st = n, ht = t, rt = i, l = Math.max(2, r)
        },
        nt = function (n, t) {
            g[r++] = n, r >= 254 && k(t)
        },
        at = function (n) {
            tt(a), s = f + 2, h = !0, e(f, n)
        },
        tt = function (n) {
            for (var t = 0; t < n; ++t) u[t] = -1
        },
        yt = c.compress = function yt(n, i) {
            var w, c, nt, l, rt, g, k;
            for (v = n, h = !1, t = v, o = b(t), f = 1 << n - 1, p = f + 1, s = f + 2, r = 0, l = d(), k = 0, w = a; w < 65536; w *= 2) ++k;
            k = 8 - k, g = a, tt(g), e(f, i);
            n: while ((nt = d()) != it) {
                if (w = (nt << ft) + l, c = nt << k ^ l, u[c] == w) {
                    l = y[c];
                    continue
                } else if (u[c] >= 0) {
                    rt = g - c, c == 0 && (rt = 1);
                    do
                        if ((c -= rt) < 0 && (c += g), u[c] == w) {
                            l = y[c];
                            continue n
                        }
                    while (u[c] >= 0)
                }
                e(l, i), l = nt, s     < l ? (y[c] = s++, u[c] = w) : at(i);
            }
            
            if (--i <= 0 && !h) {
                h = !0, i = 0;
            }
            
            r > 0 && k(!1), e(p, i), e(it, i)
            },
            
            d = function () {
                var n;
                if (n = i, i = n + 1, n == t) {
                    var u = ot,
                        f = ot,
                        r;
                    for (r = 0; r < ot; ++r, f >>= 1) {
                        if ((v & f) != 0) {
                            u |= 1 << r;
                        }
                    }
                    ot = u, v = b(ot)
                }
                return n < st.length ? st.charCodeAt(n) : it
            },
            
            b = function (n) {
                var i = 0,
                    r = n,
                    t, u;
                if (n > 0) {
                    t = Math.floor(n / 8);
                    for (u = n % 8; u < 8; ++u, --r) {
                        if ((ht[rt + t] & 1 << r) != 0) {
                            i |= 1 << u;
                        }
                    }
                }
                return i;
            },
            
            k = function (n) {
                n && r > 0 && (g[r++] = 0), rt += Math.floor((r + 3) / 4), r > 0 && (g[0] = r - 1, et.push.apply(et, g)), r = 0
            },
            
            e = function (n, t) {
                var i, u;
                if (n >= vt[ft]) {
                    for (i = ft; n >= vt[i]; ++i);
                    for (u = i; u > ft; --u) {
                        nt(n >> u - 1 & 1, t);
                    }
                }
                for (i = ft; i >= 1; --i) {
                    nt(n >> i - 1 & 1, t);
                }
            },
            
            lt,prototype = {
                compress: function () {
                    return yt(l, 0), et = encode64(et.join("")), et
                }
            },
            
            lt
            }();
            
