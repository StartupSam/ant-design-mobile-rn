"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=exports.portal=exports.PortalContext=void 0;var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _portalManager=_interopRequireDefault(require("./portal-manager"));function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var PortalContext=_react["default"].createContext(null);exports.PortalContext=PortalContext;var addType='ANT_DESIGN_MOBILE_RN_ADD_PORTAL';var removeType='ANT_DESIGN_MOBILE_RN_REMOVE_PORTAL';var TopViewEventEmitter=_reactNative.DeviceEventEmitter||new _reactNative.NativeEventEmitter();var PortalGuard=function PortalGuard(){var _this=this;(0,_classCallCheck2["default"])(this,PortalGuard);this.nextKey=10000;this.add=function(e){var key=_this.nextKey++;TopViewEventEmitter.emit(addType,e,key);return key;};this.remove=function(key){return TopViewEventEmitter.emit(removeType,key);};};var portal=new PortalGuard();exports.portal=portal;var PortalHost=function(_React$Component){(0,_inherits2["default"])(PortalHost,_React$Component);var _super=_createSuper(PortalHost);function PortalHost(){var _this2;(0,_classCallCheck2["default"])(this,PortalHost);_this2=_super.apply(this,arguments);_this2._nextKey=0;_this2._queue=[];_this2._setManager=function(manager){_this2._manager=manager;};_this2._mount=function(children,_key){var key=_key||_this2._nextKey++;if(_this2._manager){_this2._manager.mount(key,children);}else{_this2._queue.push({type:'mount',key:key,children:children});}return key;};_this2._update=function(key,children){if(_this2._manager){_this2._manager.update(key,children);}else{var op={type:'mount',key:key,children:children};var index=_this2._queue.findIndex(function(o){return o.type==='mount'||o.type==='update'&&o.key===key;});if(index>-1){_this2._queue[index]=op;}else{_this2._queue.push(op);}}};_this2._unmount=function(key){if(_this2._manager){_this2._manager.unmount(key);}else{_this2._queue.push({type:'unmount',key:key});}};return _this2;}(0,_createClass2["default"])(PortalHost,[{key:"componentDidMount",value:function componentDidMount(){var manager=this._manager;var queue=this._queue;TopViewEventEmitter.addListener(addType,this._mount);TopViewEventEmitter.addListener(removeType,this._unmount);while(queue.length&&manager){var action=queue.pop();if(!action){continue;}switch(action.type){case'mount':manager.mount(action.key,action.children);break;case'update':manager.update(action.key,action.children);break;case'unmount':manager.unmount(action.key);break;}}}},{key:"componentWillUnmount",value:function componentWillUnmount(){TopViewEventEmitter.removeListener(addType,this._mount);TopViewEventEmitter.removeListener(removeType,this._unmount);}},{key:"render",value:function render(){return _react["default"].createElement(PortalContext.Provider,{value:{mount:this._mount,update:this._update,unmount:this._unmount}},_react["default"].createElement(_reactNative.View,{style:styles.container,collapsable:false},this.props.children),_react["default"].createElement(_portalManager["default"],{ref:this._setManager}));}}]);return PortalHost;}(_react["default"].Component);exports["default"]=PortalHost;PortalHost.displayName='Portal.Host';var styles=_reactNative.StyleSheet.create({container:{flex:1}});