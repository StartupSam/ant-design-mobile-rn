var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var SearchBarDemo=function(_React$Component){(0,_inherits2["default"])(SearchBarDemo,_React$Component);var _super=_createSuper(SearchBarDemo);function SearchBarDemo(){var _this;(0,_classCallCheck2["default"])(this,SearchBarDemo);_this=_super.apply(this,arguments);_this.state={value:'美食'};_this.onChange=function(value){_this.setState({value:value});};_this.clear=function(){_this.setState({value:''});};return _this;}(0,_createClass2["default"])(SearchBarDemo,[{key:"render",value:function render(){return _react["default"].createElement(_reactNative.View,{style:{marginTop:30}},_react["default"].createElement(_.SearchBar,{defaultValue:"\u521D\u59CB\u503C",placeholder:"\u641C\u7D22"}),_react["default"].createElement(_.SearchBar,{value:this.state.value,placeholder:"\u641C\u7D22",onSubmit:function onSubmit(value){return _reactNative.Alert.alert(value);},onCancel:this.clear,onChange:this.onChange,showCancelButton:true}));}}]);return SearchBarDemo;}(_react["default"].Component);exports["default"]=SearchBarDemo;