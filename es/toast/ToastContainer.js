var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _icon=_interopRequireDefault(require("../icon"));var _style=require("../style");var _index=_interopRequireDefault(require("./style/index"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var ToastContainer=function(_React$Component){(0,_inherits2["default"])(ToastContainer,_React$Component);var _super=_createSuper(ToastContainer);function ToastContainer(props){var _this;(0,_classCallCheck2["default"])(this,ToastContainer);_this=_super.call(this,props);_this.state={fadeAnim:new _reactNative.Animated.Value(0)};return _this;}(0,_createClass2["default"])(ToastContainer,[{key:"componentDidMount",value:function componentDidMount(){var _this2=this;var onAnimationEnd=this.props.onAnimationEnd;var duration=this.props.duration;var timing=_reactNative.Animated.timing;if(this.anim){this.anim=null;}var animArr=[timing(this.state.fadeAnim,{toValue:1,duration:200,useNativeDriver:true}),_reactNative.Animated.delay(duration*1000)];if(duration>0){animArr.push(timing(this.state.fadeAnim,{toValue:0,duration:200,useNativeDriver:true}));}this.anim=_reactNative.Animated.sequence(animArr);this.anim.start(function(){if(duration>0){_this2.anim=null;if(onAnimationEnd){onAnimationEnd();}}});}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.anim){this.anim.stop();this.anim=null;}var onClose=this.props.onClose;if(onClose){onClose();}}},{key:"render",value:function render(){var _this3=this;var _this$props=this.props,_this$props$type=_this$props.type,type=_this$props$type===void 0?'':_this$props$type,content=_this$props.content,mask=_this$props.mask;return _react["default"].createElement(_style.WithTheme,{styles:this.props.styles,themeStyles:_index["default"]},function(styles){var iconType={success:'check-circle',fail:'close-circle',offline:'frown'};var iconDom=null;if(type==='loading'){iconDom=_react["default"].createElement(_reactNative.ActivityIndicator,{animating:true,style:[styles.centering],color:"white",size:"large"});}else if(type==='info'){iconDom=null;}else{iconDom=_react["default"].createElement(_icon["default"],{name:iconType[type],style:styles.image,color:"white",size:36});}return _react["default"].createElement(_reactNative.View,{style:[styles.container],pointerEvents:mask?undefined:'box-none'},_react["default"].createElement(_reactNative.View,{style:[styles.innerContainer]},_react["default"].createElement(_reactNative.Animated.View,{style:{opacity:_this3.state.fadeAnim}},_react["default"].createElement(_reactNative.View,{style:[styles.innerWrap,iconDom?styles.iconToast:styles.textToast]},iconDom,_react["default"].isValidElement(content)?content:_react["default"].createElement(_reactNative.Text,{style:styles.content},content)))));});}}]);return ToastContainer;}(_react["default"].Component);exports["default"]=ToastContainer;ToastContainer.defaultProps={duration:3,mask:true,onClose:function onClose(){}};