class vector {
	constructor(x , y)
	{
		this._x = x || 0
		this._y = y || 0
	}

	setX (value) {
		this._x = value;
	}

	getX() {
		return this._x;
	}

	setY (value) {
		this._y = value;
	}

	getY() {
		return this._y;
	}

	setAngle (angle) {
		var length = this.getLength();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	}

	getAngle () {
		return Math.atan2(this._y, this._x);
	}

	setLength (length) {
		var angle = this.getAngle();
		this._x = Math.cos(angle) * length;
		this._y = Math.sin(angle) * length;
	}

	getLength () {
		return Math.sqrt(this._x * this._x + this._y * this._y);
	}

	add (v2) {
		return new vector(this._x + v2.getX(), this._y + v2.getY());
	}

	subtract (v2) {
		return new vector(this._x - v2.getX(), this._y - v2.getY());
	}

	multiply (val) {
		return new vector(this._x * val, this._y * val);
	}

	divide (val) {
		return new vector(this._x / val, this._y / val);
	}

	addTo (v2) {
		this._x += v2.getX();
		this._y += v2.getY();
	}

	subtractFrom (v2) {
		this._x -= v2.getX();
		this._y -= v2.getY();
	}

	multiplyBy (val) {
		this._x *= val;
		this._y *= val;
	}

	divideBy (val) {
		this._x /= val;
		this._y /= val;
	}
};