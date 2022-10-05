var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=prompt;var _react=_interopRequireDefault(require("react"));var _portal=_interopRequireDefault(require("../portal"));var _PromptContainer=_interopRequireDefault(require("./PromptContainer"));function prompt(title,message,callbackOrActions){var type=arguments.length>3&&arguments[3]!==undefined?arguments[3]:'default';var defaultValue=arguments.length>4&&arguments[4]!==undefined?arguments[4]:'';var placeholders=arguments.length>5&&arguments[5]!==undefined?arguments[5]:['',''];var onBackHandler=arguments.length>6?arguments[6]:undefined;if(!callbackOrActions){console.error('Must specify callbackOrActions');return;}var key=_portal["default"].add(_react["default"].createElement(_PromptContainer["default"],{title:title,message:message,actions:callbackOrActions,type:type,defaultValue:defaultValue,onAnimationEnd:function onAnimationEnd(visible){if(!visible){_portal["default"].remove(key);}},placeholders:placeholders,onBackHandler:onBackHandler}));return key;}