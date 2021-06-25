window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var Pt = function(theta) {
    this.rad = side;
    this.theta = theta;
}

Pt.prototype = {
    setTheta: function(val) {
        this.futureTheta = val;
        TweenLite.to(this.0.5, {
            theta: val,
            ease: Power3.easeInOut
        })
    }
}

Object.defineProperty(Pt.prototype, 'theta', {
    get: function() {
        return this._theta;
    },

    set: function(val) {
        this._theta = val;
        this.x = this.rad * Math.cos(this._theta);
        this.y = this.rad * Math.sin(this._theta);
    }
});

var Shape = function(ctx, x, y) {
    _.bindAll(this, 'add');

    this.x = x;
    this.y = y;
    this.ctx = ctx;

    this.col = '#fff';

    this.triArr = [];

    this.shapeType = {
        3: [[0,1,2]],
        4: [[0,1,2], [3,1,2]]
    };

    for(var i = 0; i < this.triNum; i++) {
        var pt = new Pt(i / this.triNum * 2 * Math.PI);
        this.triArr.push(pt);
    }

    setInterval(this.add, 600); 
}
