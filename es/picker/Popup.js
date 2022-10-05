var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _ModalView=_interopRequireDefault(require("../modal/ModalView"));var _PopupMixin=_interopRequireDefault(require("./PopupMixin"));var getModal=function getModal(props,visible,_ref){var getContent=_ref.getContent,hide=_ref.hide,onDismiss=_ref.onDismiss,onOk=_ref.onOk;var styles=props.styles,title=props.title,okText=props.okText,dismissText=props.dismissText;var titleEl=typeof title==='string'?_react["default"].createElement(_reactNative.Text,{style:[styles.title]},title):title;var okEl=typeof okText==='string'?_react["default"].createElement(_reactNative.Text,{style:[styles.actionText,styles.okText]},okText):okText;var dismissEl=typeof dismissText==='string'?_react["default"].createElement(_reactNative.Text,{style:[styles.actionText,styles.dismissText]},dismissText):dismissText;return _react["default"].createElement(_ModalView["default"],{animationType:"slide-up",wrapStyle:styles.modal,style:styles.container,visible:visible,onClose:hide},_react["default"].createElement(_reactNative.View,{style:[styles.header]},_react["default"].createElement(_reactNative.TouchableHighlight,{onPress:onDismiss,style:[styles.headerItem],activeOpacity:props.actionTextActiveOpacity,underlayColor:props.actionTextUnderlayColor},dismissEl),_react["default"].createElement(_reactNative.View,{style:[styles.headerItem]},titleEl),_react["default"].createElement(_reactNative.TouchableHighlight,{onPress:onOk,style:[styles.headerItem],activeOpacity:props.actionTextActiveOpacity,underlayColor:props.actionTextUnderlayColor},okEl)),getContent());};var _default=(0,_PopupMixin["default"])(getModal,{actionTextUnderlayColor:'#ddd',actionTextActiveOpacity:1,triggerType:'onPress',styles:{},WrapComponent:_reactNative.View});exports["default"]=_default;