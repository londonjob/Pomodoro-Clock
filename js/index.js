var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));_this.








    handleCountDown = function () {
      if (_this.state.timer > 0) {
        _this.setState({
          timer: _this.state.timer - 1 });

      } else if (
      _this.state.timer === 0 &&
      document.getElementById("timer-label").innerHTML === "Session")
      {
        document.getElementById("timer-label").innerHTML = "Break";
        _this.audioBeep.play();
        _this.setState({
          timer: _this.state.brkLength * 60 });

      } else if (
      _this.state.timer === 0 &&
      document.getElementById("timer-label").innerHTML === "Break")
      {
        document.getElementById("timer-label").innerHTML = "Session";
        _this.audioBeep.play();
        _this.setState({
          timer: _this.state.seshLength * 60 });

      }
    };_this.
    handleTimer = function () {
      if (_this.state.status === "stopped") {
        clearInterval(_this.timer);
        _this.timer = setInterval(_this.handleCountDown, 1000);
        document.getElementById("start_stop").innerHTML = "Pause";
        _this.setState({
          status: "running" });

      } else {
        clearInterval(_this.timer);
        document.getElementById("start_stop").innerHTML = "Start";
        _this.setState({
          status: "stopped" });

      }
    };_this.

    handleReset = function () {
      clearInterval(_this.timer);
      document.getElementById("timer-label").innerHTML = "Session";
      _this.setState({
        brkLength: 5,
        seshLength: 25,
        timer: 1500,
        status: "stopped" });

      _this.audioBeep.pause();
      _this.audioBeep.currentTime = 0;
    };_this.

    handleDecrementBreak = function () {
      if (_this.state.brkLength > 1) {
        _this.setState({
          brkLength: _this.state.brkLength - 1 });

      }
    };_this.
    handleIncrementBreak = function () {
      if (_this.state.brkLength < 60) {
        _this.setState({
          brkLength: _this.state.brkLength + 1 });

      }
    };_this.

    handleDecrementSession = function () {
      if (_this.state.seshLength > 1) {
        _this.setState({
          seshLength: _this.state.seshLength - 1,
          timer: _this.state.timer - 60 });

      }
    };_this.
    handleIncrementSession = function () {
      if (_this.state.seshLength < 60) {
        _this.setState({
          seshLength: _this.state.seshLength + 1,
          timer: _this.state.timer + 60 });

      }
    };_this.state = { brkLength: 5, seshLength: 25, timer: 1500, status: "stopped" };return _this;}_createClass(App, [{ key: "render", value: function render()

    {var _this2 = this;
      var min = Math.floor(this.state.timer / 60);
      var seconds = this.state.timer % 60;
      var minZwei = ("0" + min).slice(-2);
      var secondsZwei = ("0" + seconds).slice(-2);

      return (
        React.createElement("div", { id: "box1", className: "container justify-content-center" },
          React.createElement("div", { className: "row justify-content-center" },
            React.createElement("div", { className: "col-md" },
              React.createElement("div", { className: "border border-primary" },
                React.createElement("div", { className: "text-center row justify-content-center" },
                  React.createElement("p", { id: "title", className: "text-center" }, "Pomodoro Clock")),

                React.createElement("div", { className: "row justify-content-center" },
                  React.createElement("div", { className: "\xE7ol-md" },
                    React.createElement("p", { id: "break-label", className: "row justify-content-center" }, "Break Length"),


                    React.createElement("button", {
                        id: "break-increment",
                        className: "btn btn-success",
                        onClick: this.handleIncrementBreak }, "+"),



                    React.createElement("input", {
                      id: "break-length",
                      className: "text-center",
                      value: this.state.brkLength,
                      readOnly: true }),

                    React.createElement("button", {
                        id: "break-decrement",
                        className: "btn btn-warning",
                        onClick: this.handleDecrementBreak }, "-")),




                  React.createElement("div", { className: "\xE7ol-md-6" },
                    React.createElement("p", { id: "session-label", className: "row justify-content-center" }, "Session Length"),


                    React.createElement("button", {
                        id: "session-increment",
                        className: "btn btn-success",
                        onClick: this.handleIncrementSession }, "+"),



                    React.createElement("input", {
                      id: "session-length",
                      className: "text-center",
                      value: this.state.seshLength,
                      readOnly: true }),

                    React.createElement("button", {
                        id: "session-decrement",
                        className: "btn btn-warning",
                        onClick: this.handleDecrementSession }, "-"))),






                React.createElement("div", { id: "box", className: "row justify-content-center" },
                  React.createElement("div", { className: "col-md" },
                    React.createElement("p", { className: "row justify-content-center", id: "timer-label" }, "Session"),


                    React.createElement("div", { className: "row justify-content-center text-center" },
                      React.createElement("p", {
                          className: "row justify-content-center text-center",
                          id: "time-left" },

                        " ",
                        minZwei + ":" + secondsZwei)))),




                React.createElement("div", { className: "row justify-content-center" },
                  React.createElement("button", {
                      id: "start_stop",
                      className: "btn btn-primary",
                      onClick: this.handleTimer }, "Start"),




                  React.createElement("button", { id: "reset", className: "btn btn-danger", onClick: this.handleReset }, "Reset")),



                React.createElement("audio", {
                  id: "beep",
                  preload: "auto",
                  src: "https://goo.gl/65cBl1",
                  ref: function ref(audio) {
                    _this2.audioBeep = audio;
                  } }))))));






    } }]);return App;}(React.Component);




ReactDOM.render(React.createElement(App, null), document.getElementById("root"));