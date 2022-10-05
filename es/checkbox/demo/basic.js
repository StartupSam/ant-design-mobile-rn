var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _=require("../../");var _this3=this;function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,_getPrototypeOf2["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,_getPrototypeOf2["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return(0,_possibleConstructorReturn2["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var AgreeItem=_.Checkbox.AgreeItem;var CheckboxItem=_.Checkbox.CheckboxItem;var BasicCheckboxExample=function(_React$Component){(0,_inherits2["default"])(BasicCheckboxExample,_React$Component);var _super=_createSuper(BasicCheckboxExample);function BasicCheckboxExample(props,context){var _this;(0,_classCallCheck2["default"])(this,BasicCheckboxExample);_this=_super.call(this,props,context);_this.onChange=function(e){console.log("checked = ".concat(e.target.checked));};_this.toggleChecked=function(){_this.setState({checked:!_this.state.checked});};_this.toggleDisable=function(){_this.setState({disabled:!_this.state.disabled});};_this.onChange2=function(e){console.log('checked = ',e.target.checked);_this.setState({checked:e.target.checked});};_this.state={checked:true,disabled:false,checkBox1:true,agreeItem1:true,checkboxItem1:true};return _this;}(0,_createClass2["default"])(BasicCheckboxExample,[{key:"render",value:function render(){var _this2=this;var label="".concat(this.state.checked?'Checked':'Unchecked',"-").concat(this.state.disabled?'Disabled':'Enabled');return _react["default"].createElement(_reactNative.ScrollView,null,_react["default"].createElement(_.List,{renderHeader:"\u57FA\u672C\u7528\u6CD5"},_react["default"].createElement(_.List.Item,{thumb:_react["default"].createElement(_.Checkbox,{onChange:this.onChange},"Checkbox")})),_react["default"].createElement(_.List,{renderHeader:"\u4E0D\u53EF\u7528"},_react["default"].createElement(_.List.Item,{thumb:_react["default"].createElement(_.Checkbox,{defaultChecked:false,disabled:true})}),_react["default"].createElement(_.List.Item,{thumb:_react["default"].createElement(_.Checkbox,{defaultChecked:true,disabled:true})})),_react["default"].createElement(_.List,{renderHeader:"\u53D7\u63A7\u7684Checkbox",renderFooter:_react["default"].createElement(_.Flex,null,_react["default"].createElement(_.Flex.Item,{style:{margin:10}},_react["default"].createElement(_.Button,{type:"primary",size:"small",onPress:this.toggleChecked},!this.state.checked?'Check':'Uncheck')),_react["default"].createElement(_.Flex.Item,{style:{margin:10}},_react["default"].createElement(_.Button,{type:"primary",size:"small",onPress:this.toggleDisable},!this.state.disabled?'Disable':'Enable')))},_react["default"].createElement(_.List.Item,{thumb:_react["default"].createElement(_.Checkbox,{checked:this.state.checked,disabled:this.state.disabled,onChange:this.onChange2},label)})),_react["default"].createElement(_.List,{renderHeader:"AgreeItem"},_react["default"].createElement(AgreeItem,null,"Agree agreement agreement agreement agreement agreement agreement agreement")),_react["default"].createElement(_.List,{renderHeader:"CheckboxItem"},_react["default"].createElement(CheckboxItem,{checked:this.state.checkboxItem1,onChange:function onChange(event){_this2.setState({checkboxItem1:event.target.checked});}},"Option 1"),_react["default"].createElement(CheckboxItem,null,"Option 2"),_react["default"].createElement(CheckboxItem,{disabled:true},"Option 3"),_react["default"].createElement(CheckboxItem,{disabled:true,checked:true,right:true},"More...")),_react["default"].createElement(_.List,{renderHeader:'全选\n在实现全选效果时，你可能会用到 indeterminate 属性。'},_react["default"].createElement(CheckboxGroupExample,null)));}}]);return BasicCheckboxExample;}(_react["default"].Component);exports["default"]=BasicCheckboxExample;var plainOptions=['Apple','Pear','Orange'];var defaultCheckedList=['Apple','Orange'];var CheckboxGroupExample=function CheckboxGroupExample(){var _React$useState=_react["default"].useState(new Set(defaultCheckedList)),_React$useState2=(0,_slicedToArray2["default"])(_React$useState,2),checkedList=_React$useState2[0],setCheckedList=_React$useState2[1];var _React$useState3=_react["default"].useState(true),_React$useState4=(0,_slicedToArray2["default"])(_React$useState3,2),indeterminate=_React$useState4[0],setIndeterminate=_React$useState4[1];var _React$useState5=_react["default"].useState(false),_React$useState6=(0,_slicedToArray2["default"])(_React$useState5,2),checkAll=_React$useState6[0],setCheckAll=_React$useState6[1];var onChange=function onChange(value,e){if(e.target.checked){checkedList.add(value);}else{checkedList["delete"](value);}setCheckedList(new Set(checkedList));setIndeterminate(!!checkedList.size&&checkedList.size<plainOptions.length);setCheckAll(checkedList.size===plainOptions.length);};var onCheckAllChange=function onCheckAllChange(e){setCheckedList(e.target.checked?new Set(plainOptions):new Set());setIndeterminate(false);setCheckAll(e.target.checked);};return _react["default"].createElement(_react["default"].Fragment,null,_react["default"].createElement(CheckboxItem,{indeterminate:indeterminate,onChange:onCheckAllChange,checked:checkAll},"Check all"),_react["default"].createElement(_.WingBlank,null,plainOptions.map(function(a){return _react["default"].createElement(CheckboxItem,{key:a,onChange:onChange.bind(_this3,a),checked:checkedList.has(a)},a);})));};