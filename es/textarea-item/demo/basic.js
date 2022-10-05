var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var BasicTextAreaItemExample=function(_React$Component){(0,_inherits2["default"])(BasicTextAreaItemExample,_React$Component);var _super=_createSuper(BasicTextAreaItemExample);function BasicTextAreaItemExample(props){var _this;(0,_classCallCheck2["default"])(this,BasicTextAreaItemExample);_this=_super.call(this,props);_this.onChange=function(val){_this.setState({val:val});};_this.state={val:'默认带value'};return _this;}(0,_createClass2["default"])(BasicTextAreaItemExample,[{key:"render",value:function render(){return _react["default"].createElement(_reactNative.ScrollView,{style:{flex:1},automaticallyAdjustContentInsets:false,showsHorizontalScrollIndicator:false,showsVerticalScrollIndicator:false},_react["default"].createElement(_.List,{renderHeader:'基本'},_react["default"].createElement(_.TextareaItem,{rows:4,placeholder:"\u56FA\u5B9A\u884C\u6570"}),_react["default"].createElement(_.TextareaItem,{rows:4,placeholder:"\u591A\u884C\u5E26\u8BA1\u6570",count:100}),_react["default"].createElement(_.TextareaItem,{rows:4,placeholder:"\u9AD8\u5EA6\u81EA\u9002\u5E94",autoHeight:true,style:{paddingVertical:5}}),_react["default"].createElement(_.TextareaItem,{value:this.state.val,onChange:this.onChange}),_react["default"].createElement(_.TextareaItem,{value:"\u4E0D\u53EF\u7F16\u8F91 editable = {false}",editable:false}),_react["default"].createElement(_.TextareaItem,{clear:false,placeholder:"\u4E0D\u663E\u793A\u6E05\u9664\u6309\u94AE"}),_react["default"].createElement(_.TextareaItem,{error:true,defaultValue:"\u62A5\u9519\u6837\u5F0F error={true}",onErrorClick:function onErrorClick(){return _.Toast.fail('Error message');}})));}}]);return BasicTextAreaItemExample;}(_react["default"].Component);exports["default"]=BasicTextAreaItemExample;