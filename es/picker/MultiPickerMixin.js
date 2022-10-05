var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=_default;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function _default(ComposedComponent){var _a;return _a=function(_React$Component){(0,_inherits2["default"])(_a,_React$Component);var _super=_createSuper(_a);function _a(){var _this;(0,_classCallCheck2["default"])(this,_a);_this=_super.apply(this,arguments);_this.getValue=function(){var _this$props=_this.props,children=_this$props.children,selectedValue=_this$props.selectedValue;if(selectedValue&&selectedValue.length){return selectedValue;}else{if(!children){return[];}return _react["default"].Children.map(children,function(c){var cc=_react["default"].Children.toArray(c.children||c.props.children);return cc&&cc[0]&&cc[0].props.value;});}};_this.onChange=function(i,v,cb){var value=_this.getValue().concat();value[i]=v;if(cb){cb(value,i);}};_this.onValueChange=function(i,v){_this.onChange(i,v,_this.props.onValueChange);};_this.onScrollChange=function(i,v){_this.onChange(i,v,_this.props.onScrollChange);};return _this;}(0,_createClass2["default"])(_a,[{key:"render",value:function render(){return _react["default"].createElement(ComposedComponent,(0,_extends2["default"])({},this.props,{getValue:this.getValue,onValueChange:this.onValueChange,onScrollChange:this.props.onScrollChange&&this.onScrollChange}));}}]);return _a;}(_react["default"].Component),_a.defaultProps={prefixCls:'rmc-multi-picker',onValueChange:function onValueChange(){}},_a;}