"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32],{"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-watch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>m});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_use_event_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/hooks/use-event.js");function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.z)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}}),[r,...t])}},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/internal/hidden.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>s,_:()=>h});var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/render.js");var e,s=((e=s||{})[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e);let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.yV)((function(t,o){let{features:e=1,...r}=t,d={ref:o,"aria-hidden":2==(2&e)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...4==(4&e)&&2!=(2&e)&&{display:"none"}}};return(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.sY)({ourProps:d,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}))},"../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/utils/platform.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function n(){return t()||function i(){return/Android/gi.test(window.navigator.userAgent)}()}__webpack_require__.d(__webpack_exports__,{gn:()=>t,tq:()=>n})},"./stories/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sample:()=>Sample,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Sample$parameters,_Sample$parameters2,_Sample$parameters2$d,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_hyezo_ui__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/utils/src/ui/Modal.tsx"),_hyezo_ui__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/utils/src/ui/Button.tsx"),_excluded=["center","width"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Modal",component:_hyezo_ui__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{width:{description:"The modal width.",table:{defaultValue:{summary:"regular"}}},center:{description:"If this is `true`, the modal will be centered.",table:{defaultValue:{summary:!1}}}}};var Sample=function Template(_ref){var center=_ref.center,width=_ref.width,_useState=((0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1)),open=_useState[0],setOpen=_useState[1];return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx("div",{className:"fixed inset-0 flex items-center justify-center"},__jsx(_hyezo_ui__WEBPACK_IMPORTED_MODULE_4__.Z,{onClick:function onClick(){return setOpen(!0)},color:"black"},"Open Modal")),__jsx(_hyezo_ui__WEBPACK_IMPORTED_MODULE_2__.Z,{isOpen:open,setIsOpen:setOpen,width,center,title:"It just Test"},__jsx(_hyezo_ui__WEBPACK_IMPORTED_MODULE_2__.h,null,"I don'k know what you want to do. But if I find you need it, I can help."),__jsx("div",{className:"mt-5 flex space-x-4"},__jsx(_hyezo_ui__WEBPACK_IMPORTED_MODULE_4__.Z,{onClick:function onClick(){return setOpen(!1)},color:"twitter",fullWidth:center},"Okay, I understand."))))}.bind({});Sample.args={center:!1,width:"wide"},Sample.parameters={backgrounds:{default:"default",values:[{name:"default",value:"linear-gradient(90deg, #8BC6EC 0%, #9599E2 100%)"}]}},Sample.parameters=_objectSpread(_objectSpread({},Sample.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Sample$parameters=Sample.parameters)||void 0===_Sample$parameters?void 0:_Sample$parameters.docs),{},{source:_objectSpread({originalSource:'({\n  center,\n  width,\n  ...args\n}) => {\n  const [open, setOpen] = useState(false);\n  return <>\n      <div className="fixed inset-0 flex items-center justify-center">\n        <Button onClick={() => setOpen(true)} color="black">\n          Open Modal\n        </Button>\n      </div>\n      <Modal isOpen={open} setIsOpen={setOpen} width={width} center={center} title="It just Test">\n        <ModalContent>\n          I don\'k know what you want to do. But if I find you need it, I can help.\n        </ModalContent>\n        <div className="mt-5 flex space-x-4">\n          <Button onClick={() => setOpen(false)} color="twitter" fullWidth={center}>\n            Okay, I understand.\n          </Button>\n        </div>\n      </Modal>\n    </>;\n}'},null===(_Sample$parameters2=Sample.parameters)||void 0===_Sample$parameters2||null===(_Sample$parameters2$d=_Sample$parameters2.docs)||void 0===_Sample$parameters2$d?void 0:_Sample$parameters2$d.source)})})},"../../packages/utils/src/ui/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button});var _Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),cva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_ButtonOrLink__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/utils/src/ui/ButtonOrLink.tsx"),_excluded=["color","fullWidth","outline","size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonStyles=(0,cva__WEBPACK_IMPORTED_MODULE_1__.j)("flex itmes-center justify-center px-4 outline-none text-white py-2 rounded-lg font-medium border border-transparent focus:bg-transparent focus:ring-1 hover:bg-transparent dark:hover:bg-transparent disabled:cursor-not-allowed disabled:hover:animate-wiggle duration-300",{variants:{color:{blue:"bg-blue-500 focus:text-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:text-blue-500",red:"bg-red-500 focus:text-red-500 focus:ring-red-500 hover:border-red-500 hover:text-red-500",orange:"bg-orange-500 focus:text-orange-500 focus:ring-orange-500 hover:border-orange-500 hover:text-orange-500",emerald:"bg-emerald-500 focus:text-emerald-500 focus:ring-emerald-500 hover:border-emerald-500 hover:text-emerald-500",twitter:"bg-twitter-500 focus:text-twitter-500 focus:ring-twitter-500 hover:border-twitter-500 hover:text-twitter-500",black:"bg-black/30 hover:bg-black/50 focus:text-black/50 focus:ring-black/50"},size:{xs:"text-xs",sm:"text-sm",md:"text-md",lg:"text-lg"},outline:{true:"bg-transparent dark:bg-transparent hover:text-white"},fullWidth:{true:"w-full"}},compoundVariants:[{color:"blue",outline:!0,className:"border-blue-500 text-blue-500 hover:bg-blue-500"},{color:"red",outline:!0,className:"border-red-500 text-red-500 hover:bg-red-500"},{color:"orange",outline:!0,className:"border-orange-500 text-orange-500 hover:bg-orange-500"},{color:"emerald",outline:!0,className:"border-emerald-500 text-emerald-500 hover:bg-emerald-500"},{color:"twitter",outline:!0,className:"border-twitter-500 text-twitter-500 hover:bg-twitter-500"},{color:"black",outline:!0,className:"border-black/30 text-black/30 hover:bg-black/50"}],defaultVariants:{color:"twitter",size:"xs",fullWidth:!1}});function Button(_ref){var color=_ref.color,fullWidth=_ref.fullWidth,outline=_ref.outline,size=_ref.size,props=(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(_ButtonOrLink__WEBPACK_IMPORTED_MODULE_3__.Z,(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},props,{className:"".concat(buttonStyles({color,outline,fullWidth,size}))}))}Button.displayName="Button",Button.__docgenInfo={description:"Button component that can be used as a link or button. If `href` is provided, it will be rendered as a children of Next.js `<Link>` component. Otherwise, it will be rendered as a button.\n@params {string} color - The color of the button.\n@params {string} size - The size of the button. It is a combinations of `xs`, `sm`, `md`, `lg`.\n@params {boolean} outline - Whether the button should have an outline & transparent.\n@params {boolean} fullWidth - Whether the button should have a full width.",methods:[],displayName:"Button",composes:["ButtonOrLinkProps","VariantProps"]};try{Button.displayName="Button",Button.__docgenInfo={description:"Button component that can be used as a link or button. If `href` is provided, it will be rendered as a children of Next.js `<Link>` component. Otherwise, it will be rendered as a button.",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:'"twitter" | "orange" | "emerald" | "blue" | "red" | "black" | null'}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"xs" | "sm" | "md" | "lg" | null'}},outline:{defaultValue:null,description:"",name:"outline",required:!1,type:{name:"boolean | null"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/utils/src/ui/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"../../packages/utils/src/ui/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/utils/src/ui/ButtonOrLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ButtonOrLink});var _Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),next_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@13.1.6_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js"),next_link__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__),_excluded=["href"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ButtonOrLink(_ref){var href=_ref.href,props=(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded),isLink=void 0!==href,Button=__jsx("button",props);return isLink?__jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default(),{href,target:"_blank",rel:"noopener noreferrer"},Button):Button}ButtonOrLink.__docgenInfo={description:"This is a base component that will render either a button or a link,\ndepending on the props that are passed to it. The link rendered will\nalso correctly get wrapped in a next/link component to ensure ideal\npage-to-page transitions.",methods:[],displayName:"ButtonOrLink",composes:["Omit"]};try{ButtonOrLink.displayName="ButtonOrLink",ButtonOrLink.__docgenInfo={description:"This is a base component that will render either a button or a link,\ndepending on the props that are passed to it. The link rendered will\nalso correctly get wrapped in a next/link component to ensure ideal\npage-to-page transitions.",displayName:"ButtonOrLink",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/utils/src/ui/ButtonOrLink.tsx#ButtonOrLink"]={docgenInfo:ButtonOrLink.__docgenInfo,name:"ButtonOrLink",path:"../../packages/utils/src/ui/ButtonOrLink.tsx#ButtonOrLink"})}catch(__react_docgen_typescript_loader_error){}},"../../packages/utils/src/ui/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modal,h:()=>ModalContent});var _Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.20.13/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/transitions/transition.js"),_headlessui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@headlessui+react@1.7.11_biqbaboplfbrettd7655fr4n2y/node_modules/@headlessui/react/dist/components/dialog/dialog.js"),cva__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/class-variance-authority@0.4.0_typescript@4.9.5/node_modules/class-variance-authority/dist/index.esm.js"),_excluded=["isOpen","setIsOpen","title","center","width","children"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,modalStyles=(0,cva__WEBPACK_IMPORTED_MODULE_1__.j)("w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl transition-all",{variants:{width:{narrower:"max-w-xs",narrow:"max-w-sm",regular:"max-w-md",wide:"max-w-lg",wider:"max-w-2xl"},center:{true:"flex flex-col"}},defaultVariants:{width:"regular"}});function Modal(_ref){var isOpen=_ref.isOpen,setIsOpen=_ref.setIsOpen,title=_ref.title,center=_ref.center,width=_ref.width,children=_ref.children,props=(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.Z)(_ref,_excluded);return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u,{appear:!0,show:isOpen,as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment},__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.V,{as:"div",className:"relative z-10",onClose:function closeModal(){setIsOpen(!1)}},__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},__jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25","aria-hidden":"true"})),__jsx("div",{className:"fixed inset-0 flex items-center justify-center overflow-y-auto"},__jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center"},__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.u.Child,{as:react__WEBPACK_IMPORTED_MODULE_0__.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95"},__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.V.Panel,(0,_Users_hoonyboom_Desktop_hyezoRepo_node_modules_pnpm_babel_runtime_7_20_13_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},props,{className:"".concat(props.className," ").concat(modalStyles({width,center}))}),__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 ".concat(center&&"place-self-center")},title),children)))))))}function ModalContent(_ref2){var children=_ref2.children;return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.V.Description,{as:"p",className:"mt-5 text-sm text-gray-500"},children))}Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},setIsOpen:{required:!0,tsType:{name:"Dispatch",elements:[{name:"SetStateAction",elements:[{name:"boolean"}],raw:"SetStateAction<boolean>"}],raw:"Dispatch<SetStateAction<boolean>>"},description:""},center:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ModalStyleProps","ComponentProps"]},ModalContent.__docgenInfo={description:"",methods:[],displayName:"ModalContent",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}},center:{defaultValue:null,description:"",name:"center",required:!1,type:{name:"boolean"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:'"narrower" | "narrow" | "regular" | "wide" | "wider" | null'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/utils/src/ui/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"../../packages/utils/src/ui/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}try{ModalContent.displayName="ModalContent",ModalContent.__docgenInfo={description:"",displayName:"ModalContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../packages/utils/src/ui/Modal.tsx#ModalContent"]={docgenInfo:ModalContent.__docgenInfo,name:"ModalContent",path:"../../packages/utils/src/ui/Modal.tsx#ModalContent"})}catch(__react_docgen_typescript_loader_error){}}}]);