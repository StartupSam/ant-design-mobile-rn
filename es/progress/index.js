var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _style=require("../style");var _index=_interopRequireDefault(require("./style/index"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var Progress=function(_React$Component){(0,_inherits2["default"])(Progress,_React$Component);var _super=_createSuper(Progress);function Progress(props){var _this;(0,_classCallCheck2["default"])(this,Progress);_this=_super.call(this,props);_this.onLayout=function(e){_this.setState({wrapWidth:e.nativeEvent.layout.width});};_this.normalPercent=function(percent){var widthPercent=0;if(percent!==undefined&&percent>0){widthPercent=percent>100?100:percent;}return widthPercent;};_this.getWidth=function(){var percent=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_this.props.percent;return _this.state.wrapWidth*(_this.normalPercent(percent)/100);};_this.state={wrapWidth:props.wrapWidth||_reactNative.Dimensions.get('window').width,percentage:new _reactNative.Animated.Value(0)};return _this;}(0,_createClass2["default"])(Progress,[{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(nextProps){if(nextProps.wrapWidth!==this.props.wrapWidth){this.setState({wrapWidth:nextProps.wrapWidth});}if(this.props.appearTransition&&nextProps.percent!==this.props.percent){this.setState({percentage:new _reactNative.Animated.Value(this.getWidth(nextProps.percent))});}}},{key:"componentDidMount",value:function componentDidMount(){if(this.props.appearTransition){this.state.percentage.setValue(0);_reactNative.Animated.timing(this.state.percentage,{toValue:this.getWidth(),duration:1000,useNativeDriver:true}).start();}}},{key:"render",value:function render(){var _this2=this;var _this$props=this.props,position=_this$props.position,unfilled=_this$props.unfilled,style=_this$props.style,barStyle=_this$props.barStyle;var percentStyle={width:this.getWidth(),height:0};return _react["default"].createElement(_style.WithTheme,{styles:this.props.styles,themeStyles:_index["default"]},function(styles){var child=_react["default"].createElement(_reactNative.View,{style:[styles.progressBar,percentStyle,barStyle]});if(_this2.props.appearTransition){percentStyle.width=_this2.state.percentage;child=_react["default"].createElement(_reactNative.Animated.View,{style:[styles.progressBar,percentStyle,barStyle]});}var outerStyle=[styles.progressOuter,position==='fixed'?{position:'absolute',top:0}:{},!unfilled?{backgroundColor:'transparent'}:{},style];return _react["default"].createElement(_reactNative.View,{onLayout:_this2.onLayout,style:outerStyle},child);});}}]);return Progress;}(_react["default"].Component);exports["default"]=Progress;Progress.defaultProps={percent:0,position:'normal',unfilled:true,appearTransition:false};