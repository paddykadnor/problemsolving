var MyArray = /** @class */ (function () {
    function MyArray() {
        var _this = this;
        this.push = function (element) {
            _this.data[_this.length] = element;
            _this.length++;
            return _this.data;
        };
        this.pop = function () {
            delete _this.data[_this.length - 1];
            _this.length--;
            return _this.data;
        };
        this.insert = function (index, element) {
            for (var i = _this.length; i >= index; i--) {
                _this.data[i] = _this.data[i - 1];
            }
            _this.data[index] = element;
            _this.length++;
            return _this.data;
        };
        this.delete = function (index) {
            for (var i = index; i < _this.length - 1; i++) {
                _this.data[i] = _this.data[i + 1];
            }
            delete _this.data[_this.length - 1];
            _this.length--;
            return _this.data;
        };
        this.getElementAtIndex = function (index) {
            return _this.data[index];
        };
        this.length = 0;
        this.data = {};
    }
    return MyArray;
}());
