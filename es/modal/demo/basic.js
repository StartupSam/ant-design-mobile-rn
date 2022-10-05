var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _2=require("../../");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var BasicModalExample=function(_React$Component){(0,_inherits2["default"])(BasicModalExample,_React$Component);var _super=_createSuper(BasicModalExample);function BasicModalExample(props){var _this;(0,_classCallCheck2["default"])(this,BasicModalExample);_this=_super.call(this,props);_this.onClose=function(){_this.setState({visible:false});};_this.onClose1=function(){_this.setState({visible1:false});};_this.onClose2=function(){_this.setState({visible2:false});};_this.onButtonClick=function(){_2.Modal.alert('Title','alert content',[{text:'Cancel',onPress:function onPress(){return console.log('cancel');},style:'cancel'},{text:'OK',onPress:function onPress(){return console.log('ok');}}]);};_this.onButtonClickPromise=function(){_2.Modal.alert('Title','promise button',[{text:'Cancel',onPress:function onPress(){_2.Toast.info('onPress promise resolve',1);return new Promise(function(resolve){setTimeout(resolve,1000);});},style:'cancel'},{text:'Hold on',onPress:function onPress(){_2.Toast.info('onPress promise reject',1);return new Promise(function(_,reject){setTimeout(reject,1000);});}}]);};_this.onButtonClick2=function(){_2.Modal.operation([{text:'标为未读',onPress:function onPress(){return console.log('标为未读被点击了');}},{text:'置顶聊天',onPress:function onPress(){return console.log('置顶聊天被点击了');}}]);};_this.onButtonClick3=function(){_2.Modal.prompt('Login','Pleas input login information',function(login,password){return console.log("login: ".concat(login,", password: ").concat(password));},'login-password','',['Please input name','Please input password']);};_this.onButtonClick4=function(){_2.Modal.prompt('Input password','password message',function(password){return console.log("password: ".concat(password));},'secure-text','defaultValue');};_this.onButtonClick5=function(){_2.Modal.prompt('Name','name message',function(password){return console.log("password: ".concat(password));},'default','',['please input name']);};_this.onButtonClick6=function(){_2.Modal.operation([{text:'标为未读',onPress:function onPress(){return console.log('标为未读被点击了');}},{text:'置顶聊天',onPress:function onPress(){return console.log('置顶聊天被点击了');}}],function(){console.log('返回键点击');return false;});};_this.state={visible:false,visible1:false,visible2:false};return _this;}(0,_createClass2["default"])(BasicModalExample,[{key:"render",value:function render(){var _this2=this;var footerButtons=[{text:'Cancel',onPress:function onPress(){return console.log('cancel');}},{text:'Ok',onPress:function onPress(){return console.log('ok');}}];return _react["default"].createElement(_reactNative.ScrollView,{style:{marginTop:20}},_react["default"].createElement(_2.WingBlank,null,_react["default"].createElement(_2.Button,{onPress:function onPress(){return _this2.setState({visible:true});}},"showModal"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:function onPress(){return _this2.setState({visible1:true});}},"transparent:false"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:function onPress(){return _this2.setState({visible2:true});}},"popup"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:this.onButtonClick},"Modal.alert"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:this.onButtonClickPromise},"Modal.alert (promise)"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:this.onButtonClick2},"Modal.opertation"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:this.onButtonClick6},"Modal.opertation (onBackHandler)"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:this.onButtonClick5},"Modal.prompt (default)"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:this.onButtonClick3},"Modal.prompt (login-password)"),_react["default"].createElement(_2.WhiteSpace,null),_react["default"].createElement(_2.Button,{onPress:this.onButtonClick4},"Modal.prompt (secure-text)")),_react["default"].createElement(_2.Modal,{title:"Title",transparent:true,onClose:this.onClose,maskClosable:true,visible:this.state.visible,closable:true,footer:footerButtons},_react["default"].createElement(_reactNative.View,{style:{paddingVertical:20}},_react["default"].createElement(_reactNative.Text,{style:{textAlign:'center'}},"Content..."),_react["default"].createElement(_reactNative.Text,{style:{textAlign:'center'}},"Content...")),_react["default"].createElement(_2.Button,{type:"primary",onPress:this.onClose},"close modal")),_react["default"].createElement(_2.Modal,{transparent:false,visible:this.state.visible1,animationType:"slide-up",onClose:this.onClose1},_react["default"].createElement(_reactNative.View,{style:{paddingVertical:220}},_react["default"].createElement(_reactNative.Text,{style:{textAlign:'center'}},"Content..."),_react["default"].createElement(_reactNative.Text,{style:{textAlign:'center'}},"Content...")),_react["default"].createElement(_2.Button,{type:"primary",onPress:function onPress(){return _2.Toast.info('Hello Toast in Modal now works');}},"Hello Toast in Modal now works"),_react["default"].createElement(_2.Button,{type:"primary",onPress:this.onClose1},"close modal")),_react["default"].createElement(_2.Modal,{popup:true,visible:this.state.visible2,animationType:"slide-up",onClose:this.onClose2},_react["default"].createElement(_reactNative.View,{style:{paddingVertical:20,paddingHorizontal:20}},_react["default"].createElement(_reactNative.Text,{style:{textAlign:'center'}},"Content..."),_react["default"].createElement(_reactNative.Text,{style:{textAlign:'center'}},"Content...")),_react["default"].createElement(_2.Button,{type:"primary",onPress:this.onClose2},"close modal")));}}]);return BasicModalExample;}(_react["default"].Component);exports["default"]=BasicModalExample;