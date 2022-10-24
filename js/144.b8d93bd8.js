"use strict";(self["webpackChunkjoinbrants_test_assignment"]=self["webpackChunkjoinbrants_test_assignment"]||[]).push([[144],{586:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(3396);function o(e,r,t,o,n,i){return(0,a.wg)(),(0,a.iD)("button",{class:"button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",onClick:r[0]||(r[0]=(...r)=>e.onClick&&e.onClick(...r))},[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var n=(0,a.aZ)({name:"UiButton",methods:{onClick(e){e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.$emit("click")}}}),i=t(89);const s=(0,i.Z)(n,[["render",o],["__scopeId","data-v-4a25d152"]]);var l=s},5343:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(3396),o=t(7139);const n=["for"],i={class:"header"},s={key:0,class:"required"},l=["id","value","type"];function u(e,r,t,u,d,m){return(0,a.wg)(),(0,a.iD)("div",{class:(0,o.C_)(["ui-input",{error:e.error}])},[(0,a._)("label",{for:e.guid},[(0,a._)("div",i,[(0,a.Uk)((0,o.zw)(e.label)+" ",1),e.required?((0,a.wg)(),(0,a.iD)("div",s," * ")):(0,a.kq)("",!0)]),(0,a._)("input",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",id:e.guid,value:e.modelValue,type:e.type,onPaste:r[0]||(r[0]=(...r)=>e.handleInput&&e.handleInput(...r)),onInput:r[1]||(r[1]=(...r)=>e.handleInput&&e.handleInput(...r))},null,40,l)],8,n)],2)}var d=t(4347),m=(0,a.aZ)({inject:["formId"],name:"UiInput",components:{},props:{label:String,type:{type:String,default:"text"},modelValue:[Number,String],required:Boolean,regex:String},emits:["update:modelValue"],data:()=>({error:!1,guid:(0,d.SF)()}),methods:{handleInput(e){null!==e.target&&(this.$emit("update:modelValue",e.target.value),this.error=!1)},onSave(){this.$formBus.emit(`${this.formId}input:save`,new Promise(((e,r)=>{this.error=!1,!this.required||void 0!==this.modelValue&&null!==this.modelValue||(this.error=!0,r(new Error(`${this.label} required`))),void 0!==this.modelValue&&this.regex&&this.regex.length&&!new RegExp(this.regex).test(this.modelValue.toString())&&(console.log(this.regex,!new RegExp(this.regex).test(this.modelValue.toString()),this.modelValue),this.error=!0,r(new Error(`error in ${this.label} field`))),e(!0)})))}},beforeUnmount(){this.$formBus.off(`${this.formId}save`,this.onSave.bind(this))},beforeMount(){this.$formBus.on(`${this.formId}save`,this.onSave.bind(this))},mounted(){console.log(this.formId)},setup(){const e=(0,a.f3)("formId");return{formId:e}}}),h=t(89);const p=(0,h.Z)(m,[["render",u],["__scopeId","data-v-fb4ef724"]]);var c=p},1144:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var a=t(3396),o=t(7139);const n={class:"sign-up-container"},i={class:"body"},s={key:0,class:"error-container"};function l(e,r,t,l,u,d){const m=(0,a.up)("UiInput"),h=(0,a.up)("UiButton"),p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",i,[(0,a.Wm)(m,{required:"",label:"user name",modelValue:e.userName,"onUpdate:modelValue":r[0]||(r[0]=r=>e.userName=r)},null,8,["modelValue"]),(0,a.Wm)(m,{required:"",label:"email",type:"email",regex:"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$",modelValue:e.email,"onUpdate:modelValue":r[1]||(r[1]=r=>e.email=r)},null,8,["modelValue"]),(0,a.Wm)(m,{required:"",label:"password",type:"password",regex:"(?=.*?[A-Z])(?=.*?[0-9])",modelValue:e.password,"onUpdate:modelValue":r[2]||(r[2]=r=>e.password=r)},null,8,["modelValue"]),e.showError?((0,a.wg)(),(0,a.iD)("div",s,(0,o.zw)(e.errorLabel),1)):(0,a.kq)("",!0),(0,a.Wm)(h,{onClick:e.sendForm},{default:(0,a.w5)((()=>[(0,a.Uk)(" SignUp ")])),_:1},8,["onClick"]),(0,a.Wm)(p,{class:"link-to-sign-in",to:"/sign-in"},{default:(0,a.w5)((()=>[(0,a.Uk)("SignIn")])),_:1})])])}t(7658);var u=t(5343),d=t(586),m=t(1597),h=t(4347),p=(0,a.aZ)({name:"SignUp",provide(){return{formId:this.formId}},components:{UiButton:d.Z,UiInput:u.Z},data:()=>({userName:"",email:"",password:"",validationArray:new Array,validating:!1,errorLabel:"",formId:(0,h.SF)()}),computed:{showError(){return!!this.errorLabel.length}},methods:{async wait(){return new Promise((e=>{setTimeout((()=>{e(!0)}),250)}))},async validate(){this.validating=!0,this.$formBus.on("input:save",this.handleSaveEvent.bind(this)),this.$formBus.emit("save"),this.wait(),this.$formBus.off("input:save",this.handleSaveEvent.bind(this));try{await Promise.all(this.validationArray)}catch(e){return console.error(e),!1}return!0},async sendForm(e){const r=await this.validate();if(r)try{await m.Z.signUp({email:this.email,password:this.password,userName:this.userName}),this.$router.push({name:"SignIn"})}catch(t){this.errorLabel=t.toString()}else console.log("error");return e},handleSaveEvent(e){this.validationArray.push(e)}}}),c=t(89);const g=(0,c.Z)(p,[["render",l],["__scopeId","data-v-0bca9ad3"]]);var f=g}}]);
//# sourceMappingURL=144.b8d93bd8.js.map