var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}function noop(){}function defaultParser(input){return input.replace(/[^\w\.-]+/g,'');}var SPEED=200;var DELAY=600;var MAX_SAFE_INTEGER=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1;var InputNumber=function(_React$Component){(0,_inherits2["default"])(InputNumber,_React$Component);var _super=_createSuper(InputNumber);function InputNumber(props){var _this;(0,_classCallCheck2["default"])(this,InputNumber);_this=_super.call(this,props);_this.onChange=function(e){var _this$props=_this.props,parser=_this$props.parser,onChange=_this$props.onChange;var input=parser&&parser(_this.getValueFromEvent(e).trim());_this.setState({inputValue:input});onChange&&onChange(_this.toNumberWhenUserInput(input));};_this.onFocus=function(){_this.setState({focused:true});var onFocus=_this.props.onFocus;onFocus&&onFocus.apply(void 0,arguments);};_this.onBlur=function(e){for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}_this.setState({focused:false});var value=_this.getCurrentValidValue(_this.state.inputValue);e.persist();_this.setValue(value,function(){var onBlur=_this.props.onBlur;onBlur&&onBlur.apply(void 0,[e].concat(args));});};_this.getCurrentValidValue=function(value){var val=value;if(val===''){val='';}else if(!_this.isNotCompleteNumber(val)){val=_this.getValidValue(val);}else{val=_this.state.value;}return _this.toNumber(val);};_this.getValidValue=function(value){var val=parseFloat(value);if(isNaN(val)){return value;}if(val<_this.props.min){val=_this.props.min;}if(val>_this.props.max){val=_this.props.max;}return val;};_this.setValue=function(v,callback){var newValue=_this.isNotCompleteNumber(parseFloat(v))?undefined:parseFloat(v);var changed=newValue!==_this.state.value||"".concat(newValue)!=="".concat(_this.state.inputValue);if(!('value'in _this.props)){_this.setState({value:newValue,inputValue:_this.toPrecisionAsStep(v)},callback);}else{_this.setState({inputValue:_this.toPrecisionAsStep(_this.state.value)},callback);}if(changed){var onChange=_this.props.onChange;onChange&&onChange(newValue);}};_this.getPrecision=function(value){if('precision'in _this.props){return _this.props.precision;}var valueString=value.toString();if(valueString.indexOf('e-')>=0){return parseInt(valueString.slice(valueString.indexOf('e-')+2),10);}var precision=0;if(valueString.indexOf('.')>=0){precision=valueString.length-valueString.indexOf('.')-1;}return precision;};_this.getMaxPrecision=function(currentValue){var ratio=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;if('precision'in _this.props){return _this.props.precision;}var step=_this.props.step;var ratioPrecision=_this.getPrecision(ratio);var stepPrecision=_this.getPrecision(step);var currentValuePrecision=_this.getPrecision(currentValue);if(!currentValue){return ratioPrecision+stepPrecision;}return Math.max(currentValuePrecision,ratioPrecision+stepPrecision);};_this.getPrecisionFactor=function(currentValue){var ratio=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var precision=_this.getMaxPrecision(currentValue,ratio);return Math.pow(10,precision);};_this.toPrecisionAsStep=function(num){if(_this.isNotCompleteNumber(num)||num===''){return num;}var precision=Math.abs(_this.getMaxPrecision(num));if(!isNaN(precision)){return Number(num).toFixed(precision);}return num.toString();};_this.isNotCompleteNumber=function(num){return isNaN(num)||num===''||num===null||num&&num.toString().indexOf('.')===num.toString().length-1;};_this.toNumber=function(num){if(_this.isNotCompleteNumber(num)){return num;}if('precision'in _this.props){return Number(Number(num).toFixed(_this.props.precision));}return Number(num);};_this.toNumberWhenUserInput=function(num){if((/\.\d*0$/.test(num)||num.length>16)&&_this.state.focused){return num;}return _this.toNumber(num);};_this.stepCompute=function(type,val,rat){var _this$props2=_this.props,step=_this$props2.step,min=_this$props2.min;var precisionFactor=_this.getPrecisionFactor(val,rat);var precision=Math.abs(_this.getMaxPrecision(val,rat));var result;var direct=type==='up'?1:-1;if(typeof val==='number'){result=((precisionFactor*val+direct*precisionFactor*+step*rat)/precisionFactor).toFixed(precision);}else{result=min===-Infinity?direct*+step:min;}return _this.toNumber(result);};_this.step=function(type,e){var ratio=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;if(e){e.preventDefault();}var props=_this.props;if(props.disabled){return false;}var value=_this.getCurrentValidValue(_this.state.inputValue)||0;if(_this.isNotCompleteNumber(value)){return false;}var val=_this.stepCompute(type,value,ratio);var outOfRange=val>props.max||val<props.min;if(val>props.max){val=props.max;}else if(val<props.min){val=props.min;}_this.setValue(val);_this.setState({focused:true});return!outOfRange;};_this.stop=function(){if(_this.autoStepTimer){clearTimeout(_this.autoStepTimer);}};_this.action=function(type,e,ratio,recursive){if(e.persist){e.persist();}_this.stop();if(_this.step(type,e,ratio)){_this.autoStepTimer=setTimeout(function(){_this.action(type,e,ratio,true);},recursive?SPEED:DELAY);}};_this.down=function(e,ratio,recursive){_this.action('down',e,ratio,recursive);};_this.up=function(e,ratio,recursive){_this.action('up',e,ratio,recursive);};_this.onPressInDown=function(e){_this.onPressIn('_stepDown');_this.down(e,true);};_this.onPressOutDown=function(){_this.onPressOut('_stepDown');_this.stop();};_this.onPressInUp=function(e){_this.onPressIn('_stepUp');_this.up(e,true);};_this.onPressOutUp=function(){_this.onPressOut('_stepUp');_this.stop();};var value;if('value'in props){value=props.value;}else{value=props.defaultValue;}value=_this.toNumber(value);_this.state={inputValue:_this.toPrecisionAsStep(value),value:value,focused:props.autoFocus};return _this;}(0,_createClass2["default"])(InputNumber,[{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(nextProps){if('value'in nextProps){var value=this.state.focused?nextProps.value:this.getValidValue(nextProps.value);this.setState({value:value,inputValue:value});}}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.stop();}},{key:"onPressIn",value:function onPressIn(type){if(this.props.disabled){return;}var styles=this.props.styles;this[type].setNativeProps({style:[styles.stepWrap,styles.highlightStepBorderColor]});this["".concat(type,"Text")].setNativeProps({style:[styles.stepText,styles.highlightStepTextColor]});}},{key:"onPressOut",value:function onPressOut(type){if(this.props.disabled){return;}var styles=this.props.styles;this[type].setNativeProps({style:[styles.stepWrap]});this["".concat(type,"Text")].setNativeProps({style:[styles.stepText]});}},{key:"getValueFromEvent",value:function getValueFromEvent(e){return e.nativeEvent.text;}},{key:"render",value:function render(){var _this2=this;var props=this.props,state=this.state;var _this$props3=this.props,style=_this$props3.style,upStyle=_this$props3.upStyle,downStyle=_this$props3.downStyle,inputStyle=_this$props3.inputStyle,styles=_this$props3.styles;var editable=!this.props.readOnly&&!this.props.disabled;var upDisabledStyle=null;var downDisabledStyle=null;var upDisabledTextStyle=null;var downDisabledTextStyle=null;var value=+state.value;if(!isNaN(value)){var val=Number(value);if(val>=props.max){upDisabledStyle=styles.stepDisabled;upDisabledTextStyle=styles.disabledStepTextColor;}if(val<=props.min){downDisabledStyle=styles.stepDisabled;downDisabledTextStyle=styles.disabledStepTextColor;}}else{upDisabledStyle=styles.stepDisabled;downDisabledStyle=styles.stepDisabled;upDisabledTextStyle=styles.disabledStepTextColor;downDisabledTextStyle=styles.disabledStepTextColor;}var inputDisabledStyle=null;if(props.disabled){upDisabledStyle=styles.stepDisabled;downDisabledStyle=styles.stepDisabled;upDisabledTextStyle=styles.disabledStepTextColor;downDisabledTextStyle=styles.disabledStepTextColor;inputDisabledStyle=styles.disabledStepTextColor;}var inputDisplayValue;if(state.focused){inputDisplayValue="".concat(state.inputValue);}else{inputDisplayValue="".concat(state.value);}if(inputDisplayValue===undefined){inputDisplayValue='';}return _react["default"].createElement(_reactNative.View,{style:[styles.container,style]},_react["default"].createElement(_reactNative.TouchableWithoutFeedback,{onPressIn:editable&&!downDisabledStyle?this.onPressInDown:undefined,onPressOut:editable&&!downDisabledStyle?this.onPressOutDown:undefined,accessible:true,accessibilityLabel:"Decrease Value",accessibilityRole:"button",accessibilityState:{disabled:!editable||!!downDisabledStyle}},_react["default"].createElement(_reactNative.View,{ref:function ref(component){return _this2._stepDown=component;},style:[styles.stepWrap,downDisabledStyle,downStyle]},_react["default"].createElement(_reactNative.Text,{ref:function ref(component){return _this2._stepDownText=component;},style:[styles.stepText,downDisabledTextStyle]},"-"))),_react["default"].createElement(_reactNative.TextInput,{style:[styles.input,inputDisabledStyle,inputStyle],value:inputDisplayValue,autoFocus:props.autoFocus,editable:editable,onFocus:this.onFocus,onEndEditing:this.onBlur,onChange:this.onChange,underlineColorAndroid:"transparent",keyboardType:props.keyboardType}),_react["default"].createElement(_reactNative.TouchableWithoutFeedback,{onPressIn:editable&&!upDisabledStyle?this.onPressInUp:undefined,onPressOut:editable&&!upDisabledStyle?this.onPressOutUp:undefined,accessible:true,accessibilityLabel:"Increase Value",accessibilityRole:"button",accessibilityState:{disabled:!editable||!!downDisabledStyle}},_react["default"].createElement(_reactNative.View,{ref:function ref(component){return _this2._stepUp=component;},style:[styles.stepWrap,upDisabledStyle,upStyle]},_react["default"].createElement(_reactNative.Text,{ref:function ref(component){return _this2._stepUpText=component;},style:[styles.stepText,upDisabledTextStyle]},"+"))));}}]);return InputNumber;}(_react["default"].Component);exports["default"]=InputNumber;InputNumber.defaultProps={max:MAX_SAFE_INTEGER,min:-MAX_SAFE_INTEGER,step:1,style:{},onChange:noop,onFocus:noop,onBlur:noop,parser:defaultParser};