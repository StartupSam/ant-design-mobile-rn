var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _default=_interopRequireDefault(require("../style/themes/default"));var _CameraRollPicker=_interopRequireDefault(require("./CameraRollPicker"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var styles=_reactNative.StyleSheet.create({statusBarBg:{height:5*4},naviBar:{flexDirection:'row',justifyContent:'center',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#d9d9d9',height:11*4},barTitle:{flex:1,textAlign:'center',fontWeight:'500',marginLeft:7*4,fontSize:16},rightBtn:{width:14*4,color:_default["default"].brand_primary,fontSize:16}});var ImageRoll=function(_React$Component){(0,_inherits2["default"])(ImageRoll,_React$Component);var _super=_createSuper(ImageRoll);function ImageRoll(){var _this;(0,_classCallCheck2["default"])(this,ImageRoll);_this=_super.apply(this,arguments);_this.onSelected=function(images,_){_this.props.onSelected(images[0]);_this.props.onCancel();};return _this;}(0,_createClass2["default"])(ImageRoll,[{key:"render",value:function render(){var _this$props=this.props,title=_this$props.title,cancelText=_this$props.cancelText,cameraPickerProps=_this$props.cameraPickerProps;return _react["default"].createElement(_reactNative.Modal,{animationType:"slide",visible:true,onRequestClose:function onRequestClose(){},transparent:false},_react["default"].createElement(_reactNative.View,{style:{flex:1}},_react["default"].createElement(_reactNative.StatusBar,{barStyle:"light-content"}),_react["default"].createElement(_reactNative.View,{style:styles.statusBarBg}),_react["default"].createElement(_reactNative.View,{style:[styles.naviBar]},_react["default"].createElement(_reactNative.Text,{style:[styles.barTitle]},title),_react["default"].createElement(_reactNative.TouchableOpacity,{onPress:this.props.onCancel},_react["default"].createElement(_reactNative.Text,{style:styles.rightBtn},cancelText))),_react["default"].createElement(_CameraRollPicker["default"],(0,_extends2["default"])({selected:[],callback:this.onSelected,maximum:1},cameraPickerProps))));}}]);return ImageRoll;}(_react["default"].Component);exports["default"]=ImageRoll;ImageRoll.defaultProps={title:'图片',cancelText:'取消',cameraPickerProps:{}};