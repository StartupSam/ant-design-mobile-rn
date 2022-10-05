var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _style=require("../style");var _Modal=_interopRequireDefault(require("./Modal"));var _index=_interopRequireDefault(require("./style/index"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var OperationContainer=function(_React$Component){(0,_inherits2["default"])(OperationContainer,_React$Component);var _super=_createSuper(OperationContainer);function OperationContainer(props){var _this;(0,_classCallCheck2["default"])(this,OperationContainer);_this=_super.call(this,props);_this.onBackAndroid=function(){var onBackHandler=_this.props.onBackHandler;if(typeof onBackHandler==='function'){var flag=onBackHandler();if(flag){_this.onClose();}return true;}else if(_this.state.visible){_this.onClose();return true;}return false;};_this.onClose=function(){_this.setState({visible:false});};_this.state={visible:true};return _this;}(0,_createClass2["default"])(OperationContainer,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,actions=_this$props.actions,onAnimationEnd=_this$props.onAnimationEnd;var footer=actions.map(function(button){var orginPress=button.onPress||function(){};button.onPress=function(){var res=orginPress();if(res&&res.then){;res.then(function(){_this2.onClose();});}else{_this2.onClose();}};return button;});return _react["default"].createElement(_style.WithTheme,{themeStyles:_index["default"]},function(styles){return _react["default"].createElement(_Modal["default"],{operation:true,transparent:true,maskClosable:true,visible:_this2.state.visible,onClose:_this2.onClose,onAnimationEnd:onAnimationEnd,onRequestClose:_this2.onBackAndroid,style:styles.operationContainer,bodyStyle:styles.operationBody,footer:footer});});}}]);return OperationContainer;}(_react["default"].Component);exports["default"]=OperationContainer;