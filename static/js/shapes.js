Vector2 = function (a, b) {
    return this.x = a || 0, this.y = b || 0, this
}, Vector2.prototype.add = function (a) {
    return this.x += a.x, this.y += a.y, this
}, Vector2.prototype.sub = function (a) {
    return "object" == typeof a && (this.x -= a.x, this.y -= a.y), "number" == typeof a && (this.x -= a, this.y -= a), this
}, Vector2.prototype.mult = function (a) {
    return "object" == typeof a ? (this.x *= a.x, this.y *= a.y) : "number" == typeof a && (this.x *= a, this.y *= a), this
}, Vector2.prototype.div = function (a) {
    return "object" == typeof a ? (this.x /= a.x, this.y /= a.y) : "number" == typeof a && (this.x /= a, this.y /= a), this
}, Vector2.prototype.norm = function () {
    return this.div(this.mag()), this
}, Vector2.prototype.setMag = function (a) {
    return this.norm(), this.mult(a), this
}, Vector2.prototype.limit = function (a) {
    return this.mag() > a ? (this.setMag(a), this) : this
}, Vector2.prototype.direction = function (a) {
    return Math.atan2(this.y, this.x)
}, Vector2.prototype.rotate = function (a) {
    var b = this.direction() + a,
        c = this.mag();
    return this.x = Math.cos(b) * c, this.y = Math.sin(b) * c, this
}, Vector2.prototype.mag = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}, Vector2.prototype.angleTo = function (a) {
    var b = Math.atan2(a.x - this.x, a.y - this.y);
    return b
}, Vector2.prototype.distanceTo = function (a) {
    return Math.sqrt(Math.pow(a.x - this.x, 2) + Math.pow(a.y - this.y, 2))
}, Vector2.prototype.copy = function () {
    return new Vector2(this.x, this.y)
}, Vector2.prototype.set = function () {
    var a = arguments;
    return 1 == a.length ? "object" == typeof a[0] ? (this.x = a[0].x, this.y = a[0].y) : "number" == typeof a[0] && (this.x = a[0], this.y = a[0]) : 2 == a.length && (this.x = a[0], this.y = a[1]), this
}, Vector2.prototype.map = function (a, b, c, d) {
    return a < this.x < b && c < this.y < d ? this : (this.x < a ? this.x = a : this, this.x > b ? this.x = b : this, this.y < c ? this.y = c : this, void(this.y > d ? this.y = d : this))
}, Math.radians = function (a) {
    return a * (Math.PI / 180)
}, Math.degrees = function (a) {
    return a * (180 / Math.PI)
}, random = function () {
    if (!arguments) return Math.random();
    var a = arguments;
    return 1 == a.length ? Math.random() * a[0] : 2 == a.length ? Math.random() * (Math.max(a[0], a[1]) - Math.min(a[0], a[1])) + Math.min(a[0], a[1]) : void 0
}, random = function (a, b) {
    return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
};

(function () {
    var canvasBody, $,
        w = window.innerWidth,
        h = window.innerHeight,
        tick = 0,
        pi = Math.PI,
        pi2 = pi * 2,
        piD2 = pi / 2,
        piD3 = pi / 3,
        piD6 = pi / 6,
        pi2D3 = pi2 / 3,
        piDeg = pi / 180,
        particles = [],
        canvasStyles = {
            position: "absolute",
            top: "0px",
            left: "0px",
            "z-index": -1
        },
        opts = {
            bgc: "#f7f8f8",
            showFPS: false,
            color: "#75b8d4",
            amount: 30,
            thickness: 5,
            radius: 12,
            rotSpeed: 0.4,
            gravity: 0.4,
            populate: function () {
                particles = [];
                for (var i = 0; i < opts.amount; particles[i++] = new Shape());
            }
        },
        Shape = function () {
            this.vertices = Math.floor(Math.random() * 5);
            this.pos = new Vector2(opts.radius / 2 + Math.random() * w - opts.radius, Math.random() * h - opts.radius);
            this.angle = Math.random() * 180;
            this.d = Math.random() < .5 ? 1 : -1
        };
    Shape.prototype = {
        update: function () {
            this.pos.y - opts.radius - opts.thickness < h ? (
                    this.pos.y += opts.gravity,
                    this.angle += opts.rotSpeed * this.d
                ) :
                this.pos.set(Math.random() * w, -opts.radius);
        },
        render: function () {
            if (this.vertices > 0) {
                $.beginPath();
                $.moveTo(Math.cos(this.angle * piDeg) * opts.radius + this.pos.x, Math.sin(this.angle * piDeg) * opts.radius + this.pos.y);
                for (var i = 1; i < this.vertices; i++) {
                    var a = pi2 / this.vertices * i;
                    var aa = this.angle * piDeg;
                    $.lineTo(Math.cos(a + aa) * opts.radius + this.pos.x,
                        Math.sin(a + aa) * opts.radius + this.pos.y);
                }
                $.closePath();
                $.lineCap = "round";
                $.lineJoin = "round";
                $.lineWidth = opts.thickness;
                $.strokeStyle = opts.color;
                $.stroke();
            } else {
                $.beginPath();
                $.arc(this.pos.x, this.pos.y, opts.radius, 0, pi2);
                $.closePath();
                $.lineWidth = opts.thickness;
                $.strokeStyle = opts.color;
                $.stroke();
            }
        }
    }

    function setup() {
        createCanvas();
        opts.populate();
        window.requestAnimationFrame(loop);
    }

    function loop() {
        drawBg();
        particles.map(function (S) {
            S.update();
            S.render();
        })
        window.requestAnimationFrame(loop);
    }

    function createCanvas() {
        var el = document.createElement("canvas"),
            ctx = el.getContext("2d");
        for (var style in canvasStyles) {
            el.style[style] = canvasStyles[style];
        }
        document.body.appendChild(el);
        canvasBody = el;
        $ = ctx;
        canvasBody.width = w;
        canvasBody.height = 540;
        return [el, ctx];
    }

    function drawBg() {
        $.fillStyle = opts.bgc;
        $.fillRect(0, 0, w, h);
    }

    setup();
})()