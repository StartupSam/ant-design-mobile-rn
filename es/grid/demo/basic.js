var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var data=Array.from(new Array(9)).map(function(_val,i){return{icon:'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',text:"Name".concat(i)};});var BasicGridExample=function(_React$Component){(0,_inherits2["default"])(BasicGridExample,_React$Component);var _super=_createSuper(BasicGridExample);function BasicGridExample(){(0,_classCallCheck2["default"])(this,BasicGridExample);return _super.apply(this,arguments);}(0,_createClass2["default"])(BasicGridExample,[{key:"render",value:function render(){return _react["default"].createElement(_reactNative.ScrollView,null,_react["default"].createElement(_reactNative.View,{style:[{margin:10}]},_react["default"].createElement(_reactNative.Text,null,"Simple")),_react["default"].createElement(_reactNative.View,{style:[{padding:10}]},_react["default"].createElement(_.Grid,{data:data,hasLine:false})),_react["default"].createElement(_reactNative.View,{style:[{margin:10}]},_react["default"].createElement(_reactNative.Text,null,"Carousel")),_react["default"].createElement(_.Grid,{data:data,columnNum:3,isCarousel:true,carouselProps:{style:{width:'100%',height:320}},onPress:function onPress(_el,index){return alert(index);}}),_react["default"].createElement(_reactNative.View,{style:[{margin:10}]},_react["default"].createElement(_reactNative.Text,null,"Custom GridCell Style")),_react["default"].createElement(_.Grid,{data:data,columnNum:3,itemStyle:{height:150,backgroundColor:'#ffff00'}}));}}]);return BasicGridExample;}(_react["default"].Component);exports["default"]=BasicGridExample;