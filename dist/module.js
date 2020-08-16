define(["react","lodash","@grafana/data","@grafana/ui","@grafana/runtime"],(function(e,t,r,a,n){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=5)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=n},function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(2),l=r(4),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var s=function(){return(s=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function u(e,t,r,a){return new(r||(r=Promise))((function(n,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function i(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}s((a=a.apply(e,t||[])).next())}))}function c(e,t){var r,a,n,l,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,a&&(n=2&l[0]?a.return:l[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,l[1])).done)return n;switch(a=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,a=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(n=o.trys,(n=n.length>0&&n[n.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){o.label=l[1];break}if(6===l[0]&&o.label<n[1]){o.label=n[1],n=l;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(l);break}n[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],a=0}finally{r=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}}function p(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var a,n,l=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)o.push(a.value)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return o}function f(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(p(arguments[t]));return e}var m=r(1),d=function(){function e(e,t){this.key=e,this.value=t.toString()}return e.prototype.getValue=function(){return[this.key,this.value].join("=")},e}(),v=function(){function e(e,t,r,a){void 0===a&&(a="^"),this.condition=a,this.field=e,this.operator=t,this.value=r}return e.prototype.toString=function(){return(""+this.field+this.operator+this.value).trim()},e}(),h=function(){function e(e,t,r,a,n,l,o){void 0===l&&(l=""),void 0===o&&(o="desc"),this.tableName="",this.queryParams=[],this.api=e,this.tableName=t;var i=[this.getNormalizedSysParmQuery(r)+"^"].filter((function(e){return"^"!==e}));a.forEach((function(e,t){var r=t===a.length-1?"":e.condition||"^";i.push(encodeURIComponent((""+e.field+e.operator+e.value+r).trim()))})),l&&i.push(("asc"===o?"^ORDERBY":"^ORDERBYDESC")+l.trim()),this.queryParams.push(new d("sysparm_query",i.join("").replace(/\^\^/g,"^"))),this.queryParams.push(new d("sysparm_display_value",n))}return e.prototype.getNormalizedSysParmQuery=function(e){return(e+"").trim().replace(/\^OR\n/g,"^OR").replace(/\^\n/g,"^").replace(/\n/g,"^")},e.prototype.getUrl=function(){switch(this.api){case"doc":return"/api/now/doc/"+this.tableName;case"table":return"/api/now/table/"+this.tableName+"?"+this.queryParams.map((function(e){return e.getValue()})).join("&");case"stats":return"/api/now/stats/"+this.tableName+"?"+this.queryParams.map((function(e){return e.getValue()})).join("&")}},e}(),y=function(e){function t(t,r,a,n,l,o,i){void 0===n&&(n=10);var s=e.call(this,"table",t,a,l,"all",o,i)||this;return r.length>0&&r[0]&&"*"!==r[0]&&s.queryParams.push(new d("sysparm_fields",r.join(","))),s.queryParams.push(new d("sysparm_limit",n.toString())),s}return i(t,e),t}(h),b=function(e){function t(t,r,a,n,l){void 0===n&&(n="true");var o=e.call(this,"stats",t,a,l,"all","","asc")||this;return o.queryParams.push(new d("sysparm_group_by",r.join(","))),o.queryParams.push(new d("sysparm_count",n)),o}return i(t,e),t}(h),g=new(function(){function e(e){this.table="incident",this.type="table",this.orderByDirection="asc",this.table=e.table||"incident",this.type=e.type||"table",this.fields=e.fields||[],this.query=e.query||"",this.filters=e.filters||[],this.orderByDirection=e.orderByDirection||"asc",this.orderBy=e.orderBy||"",this.groupBy=e.groupBy||[],this.limit=e.limit||25}return e.prototype.getUrl=function(){if("table"===this.type){var e=(this.fields&&"*"!==this.fields[0]?this.fields||"opened_at,number,short_description,sys_created_by,severity,category,state,priority".split(","):[]).filter(Boolean).map((function(e){return e.trim()}));return new y(this.table,e,this.query,this.limit,this.filters,this.orderBy,this.orderByDirection).getUrl()}if("stats"===this.type){var t=(this.groupBy?this.groupBy:[]).filter(Boolean).map((function(e){return e.trim()}));return new b(this.table,t,this.query,"true",this.filters).getUrl()}return""},e}())({table:"incident",type:"table",fields:"opened_at,number,short_description,sys_created_by,severity,category,state,priority".split(","),query:"",groupBy:[],orderBy:"opened_at",orderByDirection:"desc",limit:10});function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=function(){function e(e){var t=this;this.output={columns:[],rows:[],type:"table"},e.filter((function(e){return e&&e.result&&e.result.data&&e.result.data.result})).forEach((function(e){t.query=e.query,e&&e.query&&e.query.servicenow&&"stats"===e.query.servicenow.type?e.result.data.result.stats?t.parseResultsAsSingleStat(e):t.parseResultsAsMultiStat(e):t.parseResultsAsTable(e)}))}return e.prototype.parseResultsAsSingleStat=function(e){this.output.columns.push({text:"count",type:"number"}),this.output.rows.push([Object(m.toInteger)(e.result.data.result.stats.count)])},e.prototype.parseResultsAsMultiStat=function(e){var t=this;e.result.data.result.forEach((function(r,a){if(0===a&&e&&e.query&&e.query.servicenow&&e.query.servicenow.groupBy&&(e.query.servicenow.groupBy.filter(Boolean).forEach((function(e){t.output.columns.push({text:e,type:"string"})})),t.output.columns.push({text:"count",type:"number"})),r&&r.stats){var n=Object(m.toInteger)(r.stats.count),l=[];e.query.servicenow.groupBy.filter(Boolean).forEach((function(e){var t=r.groupby_fields.find((function(t){return t.field===e}));t&&l.push(t.display_value||t.value||"-")})),l.push(n),t.output.rows.push(l)}}))},e.prototype.parseResultsAsTable=function(e){var t=this;this.output.columns=[];var r=[];r=e&&e.query&&e.query.servicenow&&e.query.servicenow.fields?e.query.servicenow.fields:r,r=e&&e.query&&e.query&&e.query.fields?e.query.fields:r;var a=Object(m.uniq)(r.filter(Boolean).map((function(e){return e.trim()})).filter(Boolean));r&&"*"!==r[0]&&""!==r[0]?e.result.data.result.forEach((function(e,r){0===r&&Object(m.forEach)(a,(function(e){t.output.columns.push({text:e,type:"string"})}));var n=[];t.output.columns.forEach((function(t){var r=e[t.text];"object"===w(r)&&r&&(r.display_value||""===r.value)?n.push(r.display_value||r.value):"object"===w(r)?n.push(JSON.stringify(r)):n.push(r)})),t.output.rows.push(n)})):e.result.data.result.forEach((function(e,r){0===r&&Object(m.forEach)(e,(function(e,r){"object"===w(e)&&e&&(e.display_value||""===e.value)?t.output.columns.push({text:r,type:"string"}):t.output.columns.push({text:r,type:"object"===w(e)?"string":w(e)})}));var a=[];Object(m.forEach)(e,(function(e){"object"===w(e)&&e&&(e.display_value||""===e.value)?a.push(e.display_value||e.value):"object"===w(e)?a.push(JSON.stringify(e)):a.push(e)})),t.output.rows.push(a)}))},e.prototype.getResultsAsAnnotations=function(){var e=this,t=[];return Object(m.forEach)(this.output.rows,(function(r){var a=function(e,t,r){var a={text:"",title:"",tags:[],time:(new Date).getTime()},n="";return Object(m.forEach)(t,(function(t,l){t.text===r.startTimeField?e[l]&&(a.time=new Date(e[l]).getTime(),n+=t.text+" : "+e[l]+"\n"):t.text===r.endTimeField?e[l]&&(a.timeEnd=new Date(e[l]).getTime(),n+=t.text+" : "+e[l]+"\n"):t.text===r.titleField?e[l]&&(a.title=e[l]):t.text===r.descriptionField?e[l]&&(a.text=e[l]):e[l]&&a.tags.push(t.text+" : "+e[l])})),a.text+="\n    "+n+"\n  ",a}(r,e.output.columns,e.query);t.push(a)})),t},e}(),N=function(e,t,r){var a="javascript:gs.dateGenerate('"+t.format("YYYY-MM-DD")+"','"+t.format("HH:mm:ss")+"')",n="javascript:gs.dateGenerate('"+r.format("YYYY-MM-DD")+"','"+r.format("HH:mm:ss")+"')";return e=(e=(e=e.replace("$__timeFrom()",a)).replace("$__timeTo()",n)).replace("$__timeFilter()",a+"@"+n)},_=function(){function e(e,t){this.instanceSettings=e,this.templateSrv=t,this.url=this.instanceSettings.url}return e.prototype.getServiceNowResults=function(e,t){var r=this;void 0===t&&(t=1);var a=this.url+e.getUrl();return Object(l.getBackendSrv)().datasourceRequest({method:"GET",url:a}).catch((function(a){if(console.log(a),t>0)return r.getServiceNowResults(e,t-1);throw a}))},e.prototype.doQueries=function(e,t){var r=this;return e.map((function(e){var a=e.servicenow;a&&a.query&&(a.query=N(a.query,t.range.from,t.range.to),a.query=r.templateSrv.replace(a.query,{},"glob")),a&&a.filters&&(a.filters=a.filters.map((function(e){return e.value=N(e.value,t.range.from,t.range.to),e.value=r.templateSrv.replace(e.value,{},"glob"),e})));var n=new b("",[],"","true",[]);if(e.servicenow&&"table"===e.servicenow.type){var l=e.servicenow;n=new y(l.table,l.fields.map((function(e){return e.trim()})).filter(Boolean),l.query,l.limit,l.filters,l.orderBy,l.orderByDirection)}else if(e.servicenow&&"stats"===e.servicenow.type){l=e.servicenow;n=new b(l.table,l.groupBy.map((function(e){return e.trim()})).filter(Boolean),l.query,"true",l.filters)}return r.getServiceNowResults(n).then((function(r){return{result:r,query:e,options:t}})).catch((function(t){throw{error:t,query:e}}))}))},e.prototype.doAnnotationQueries=function(e,t){var r=this;return e.map((function(e){e.query=N(e.query,t.range.from,t.range.to);var a=new y(e.table,e.fields,e.query,e.limit,[],e.startTimeField,"asc");return r.getServiceNowResults(a).then((function(t){return{result:t,query:e,options:{}}})).catch((function(t){throw{error:t,query:e}}))}))},e.prototype.query=function(e){var t=[];e.targets&&(t=e.targets.filter((function(e){return!0!==e.hide})));var r=this.doQueries(t,e);return Promise.all(r).then((function(e){return new E(e).output}))},e.prototype.annotationsQuery=function(e){var t=[];if(e.targets)t=e.targets.filter((function(e){return!0!==e.hide}));else if(e.annotation){var r={limit:e.annotation.limit||30,startTimeField:e.annotation.startTimeField,endTimeField:e.annotation.endTimeField,titleField:e.annotation.titleField,descriptionField:e.annotation.descriptionField,fields:f(e.annotation.fields.split(","),[e.annotation.titleField,e.annotation.descriptionField,e.annotation.startTimeField,e.annotation.endTimeField]),query:e.annotation.query||"",table:e.annotation.table};t.push(r)}var a=this.doAnnotationQueries(t,e);return Promise.all(a).then((function(e){return new E(e).getResultsAsAnnotations()}))},e}(),q=function(e){function t(t,r){var a=e.call(this,t)||this;return a.instanceSettings=t,a.templateSrv=r,a.serviceNowInstance=new _(a.instanceSettings,a.templateSrv),a}return t.$inject=["instanceSettings","templateSrv"],i(t,e),t.prototype.query=function(e){var t=[],r=Object(m.cloneDeep)(e);if(r.targets.length>0){var a=this.serviceNowInstance.query(r);a&&t.push(a)}return Promise.all(t).then((function(e){return{data:Object(m.flatten)(e)}}))},t.prototype.annotationQuery=function(e){e.annotation.query=this.templateSrv.replace(e.annotation.query,{},"glob");var t={range:e.range,rangeRaw:e.rangeRaw,annotation:e.annotation};return this.serviceNowInstance.annotationsQuery(t).then((function(e){return e})).catch((function(e){return console.error(e),[]}))},t.prototype.metricFindQuery=function(e){return Promise.resolve([])},t.prototype.testDatasource=function(){var e=this;return new Promise((function(t,r){return u(e,void 0,void 0,(function(){var e;return c(this,(function(a){return e=new h("doc","table/schema","",[],"all","","asc"),this.serviceNowInstance.getServiceNowResults(e,0).then((function(e){e&&200===e.status&&e.data&&e.data.result?t({message:"Successfully Connected ServiceNow."+e.data.result.length+" tables found.",status:"success"}):(console.error(e),r({message:"Failed to Connect ServiceNow",status:"error"}))})).catch((function(e){console.error(e),r({message:"Failed to Connect ServiceNow",status:"error"})})),[2]}))}))}))},t}(n.DataSourceApi),S=r(0),C=r.n(S),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onURLChange=function(e){var r=t.props,a=r.onOptionsChange,n=r.options;a(s(s({},n),{url:e.target.value}))},t.onUserNameChange=function(e){var r=t.props,a=r.onOptionsChange,n=r.options;a(s(s({},n),{basicAuthUser:e.target.value}))},t.onPasswordChange=function(e){var r=t.props,a=r.onOptionsChange,n=r.options;a(s(s({},n),{secureJsonData:{basicAuthPassword:e.target.value}}))},t.onResetPassword=function(){var e=t.props,r=e.onOptionsChange,a=e.options;r(s(s({},a),{secureJsonFields:s(s({},a.secureJsonFields),{basicAuthPassword:!1}),secureJsonData:s(s({},a.secureJsonData),{basicAuthPassword:""})}))},t}return i(t,e),t.prototype.render=function(){var e=this.props.options;e.basicAuth=!0;var t=e.secureJsonFields,r=e.secureJsonData||{};return C.a.createElement(C.a.Fragment,null,C.a.createElement("h3",{className:"page-heading"},"Service Now Settings"),C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label width-11",title:"Service Now URL"},"Service Now URL"),C.a.createElement("input",{className:"gf-form-input width-20",type:"text",onChange:this.onURLChange,value:e.url||"",placeholder:"https://YOUR_INSTANCE_NAME.service-now.com"}))),C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label width-11",title:"User Name"},"User name"),C.a.createElement("input",{className:"gf-form-input width-20",type:"text",onChange:this.onUserNameChange,value:e.basicAuthUser||"",placeholder:"username"}))),C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label width-11",title:"Password"},"Password"),t&&t.basicAuthPassword?C.a.createElement(C.a.Fragment,null,C.a.createElement("label",{className:"gf-form-label width-20"},"Configured"),C.a.createElement("span",{className:"gf-form-button btn btn-secondary width-6",onClick:this.onResetPassword},"Reset")):C.a.createElement("input",{type:"password",value:r.basicAuthPassword||"",className:"gf-form-input width-20",onChange:this.onPasswordChange}))))},t}(S.PureComponent),F=function(e,t,r,a){void 0===a&&(a="string");var n=r.query,l=r.onChange,o=n.servicenow;Object(m.set)(o,t,"number"===a?Object(m.toInteger)(e.value):e.value),l(s(s({},n),{servicenow:o}))},O=function(e,t,r,a){void 0===a&&(a=!1);var n=r.query,l=r.onChange,o=n.servicenow,i=a?e.target.value.split(","):e.target.value;Object(m.set)(o,t,i),l(s(s({},n),{servicenow:o}))},R=[{label:"Incidents (INC)",value:"incident",short_code:"INC"},{label:"Change Request (CHG)",value:"change_request",short_code:"CHG"},{label:"Problem (PRB)",value:"problem",short_code:"PRB"},{label:"System User Group",value:"sys_user_group",short_code:""}],A=[{label:"Table",value:"table"},{label:"Stats",value:"stats"}],B=[{value:"active",label:"Active",tables:["incident","change_request","problem"]},{value:"assigned_to",label:"Assigned To",tables:["incident","change_request","problem"]},{value:"assignment_group.name",label:"Assignment Group",tables:["incident","change_request","problem"]},{value:"assignment_group",label:"Assignment Group ID",tables:["incident","change_request","problem"]},{value:"description",label:"Description",tables:["incident","change_request","problem","sys_user_group"]},{value:"end_date",label:"End Date",tables:["change_request"],FieldType:n.FieldType.time},{value:"incident_state",label:"Incident State",tables:["incident"]},{value:"number",label:"Number",tables:["incident","change_request","problem"]},{value:"opened_at",label:"Opened At",tables:["incident","change_request","problem"],FieldType:n.FieldType.time},{value:"priority",label:"Priority",tables:["incident","change_request","problem"]},{value:"short_description",label:"Short Description",tables:["incident","change_request","problem"]},{value:"start_date",label:"Start Date",tables:["change_request"],FieldType:n.FieldType.time},{value:"state",label:"State",tables:["incident","change_request","problem"]},{value:"sys_created_by",label:"Created By",tables:["incident","change_request","problem"]},{value:"sys_created_on",label:"Created On",tables:["incident","change_request","problem"],FieldType:n.FieldType.time},{value:"urgency",label:"Urgency",tables:["problem"]},{value:"category",label:"Category",tables:["problem"]},{value:"subcategory",label:"Subcategory",tables:["problem"]},{value:"name",label:"Name",tables:["sys_user_group"]},{value:"manager",label:"Manager",tables:["sys_user_group"]},{value:"email",label:"Email",tables:["sys_user_group"]}],P=B.filter((function(e){return e.FieldType===n.FieldType.time})),x=[{value:"^",label:"AND"},{value:"^OR",label:"OR"}],j=[{value:"=",label:"Equals"},{value:"!=",label:"Not Equals"},{value:"<",label:"Less than"},{value:"<=",label:"Less than or Equals"},{value:">",label:"Greater than"},{value:">=",label:"Greater than or Equals"},{value:"STARTSWITH",label:"Starts With"},{value:"ENDSWITH",label:"Ends With"},{value:"LIKE",label:"Like"},{value:"NOT LIKE",label:"Not Like"},{value:"ISEMPTY",label:"Is Empty"},{value:"ISNOTEMPTY",label:"Is Not Empty"},{value:"IN",label:"In"},{value:"NOT IN",label:"Not In"},{value:"ANYTHING",label:"Anything"},{value:"BETWEEN",label:"Between"},{value:"SAMEAS",label:"Is Same"},{value:"NSAMEAS",label:"Is Different"},{value:"ONToday",label:"On Today"},{value:"NOTONToday",label:"Not On Today"},{value:"DATEPART",label:"Date Part"},{value:"RELATIVEGE",label:"Relative (on or after)"},{value:"RELATIVELE",label:"Relative (on or before)"},{value:"RELATIVEGT",label:"Relative (after)"},{value:"RELATIVELT",label:"Relative (before)"},{value:"RELATIVEEE",label:"Relative (on)"},{value:"MORETHAN",label:"Is More than"},{value:"LESSTHAN",label:"Is Less than"},{value:"GT_FIELD",label:"Greater than field"},{value:"LT_FIELD",label:"Less than field"},{value:"GT_OR_EQUALS_FIELD",label:"Greater than or is field"},{value:"LT_OR_EQUALS_FIELD",label:"Less than or is field"}],D={active:[{label:"True",value:"true"},{label:"False",value:"false"}],grafanaTimestamps:[{label:"Grafana Start Time",value:"$__timeFrom()"},{label:"Grafana End Time",value:"$__timeTo()"},{label:"Grafana Time Range",value:"$__timeFilter()"}]},I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={showHelpModal:!1},t.showHelpModal=function(e){return function(){t.setState({showHelpModal:e})}},t}return i(t,e),t.prototype.render=function(){var e=this.state.showHelpModal;return C.a.createElement(C.a.Fragment,null,"  ",C.a.createElement("button",{onClick:this.showHelpModal(!0),title:"Help",className:"btn btn-secondary btn-small"},"service now query help"),C.a.createElement(a.Modal,{title:C.a.createElement("div",{className:"modal-header-title"},C.a.createElement("span",{className:"p-l-1"},"Service Now Query Help")),isOpen:e,onDismiss:this.showHelpModal(!1)},C.a.createElement("div",null,C.a.createElement("div",null,C.a.createElement("h4",null,"Time Filter"),C.a.createElement("br",null),C.a.createElement("pre",{style:{display:"inline"}},"$__timeFrom()")," Returns the From datetime from the Grafana picker. Can be used with"," ",C.a.createElement("b",null,"Before / After")," filter.",C.a.createElement("br",null),C.a.createElement("br",null),C.a.createElement("pre",{style:{display:"inline"}},"$__timeTo()")," Returns the To datetime from the Grafana picker. Can be used with"," ",C.a.createElement("b",null,"Before / After")," filter.",C.a.createElement("br",null),C.a.createElement("br",null),C.a.createElement("pre",{style:{display:"inline"}},"$__timeFilter()")," Return start and end time form Grafana picker. Can be used with ",C.a.createElement("b",null,"Between")," ","filter.",C.a.createElement("br",null),C.a.createElement("br",null),C.a.createElement("h4",null,"Relative Time"),C.a.createElement("br",null),C.a.createElement("pre",{style:{display:"inline"}},"@hour@ago@24")," Returns the timestamp of 24 hours ago. Can be used with ",C.a.createElement("b",null,"Relative")," filter.",C.a.createElement("br",null),C.a.createElement("br",null),C.a.createElement("pre",{style:{display:"inline"}},"@hour@ago@-24")," Returns the timestamp of 24 hours from now. Can be used with ",C.a.createElement("b",null,"Relative")," ","filter.",C.a.createElement("br",null),C.a.createElement("br",null),C.a.createElement("p",null,"More help can be found at"," ",C.a.createElement("a",{href:"https://docs.servicenow.com/bundle/orlando-platform-user-interface/page/use/common-ui-elements/reference/r_OpAvailableFiltersQueries.html",target:"_blank",rel:"noopener"},"service-now website."))))))},t}(S.PureComponent),L=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return C.a.createElement("div",null,C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label query-keyword width-8"},"Table"),C.a.createElement(a.Select,{className:"width-12",value:R.find((function(e){return e.value===t.servicenow.table}))||{label:t.servicenow.table,value:t.servicenow.table},options:R,defaultValue:t.servicenow.table,onChange:function(t){return F(t,"table",e.props)},allowCustomValue:!0})),C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label query-keyword width-6"},"Type"),C.a.createElement(a.Select,{className:"width-12",value:A.find((function(e){return e.value===t.servicenow.type})),options:A,defaultValue:t.servicenow.type,onChange:function(t){return F(t,"type",e.props)}}),C.a.createElement(I,null))))},t}(S.PureComponent),V=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return C.a.createElement("div",null,C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label width-8",title:"Fields ( Comma separated )"},"Fields"),C.a.createElement("input",{className:"gf-form-input width-30",type:"text",onChange:function(t){return O(t,"fields",e.props,!0)},value:t.servicenow.fields.join(","),placeholder:"Fields ( Comma Separated)",title:"Fields ( Comma Separated )"}))))},t}(S.PureComponent),G=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return C.a.createElement("div",null,C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label width-8",title:"Query"},"Query"),C.a.createElement("textarea",{value:t.servicenow.query||"",onChange:function(t){return O(t,"query",e.props)},className:"gf-form-input min-width-30 width-30",rows:3}))))},t}(S.PureComponent),M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return C.a.createElement("div",null,C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label width-8",title:"Group By Field"},"Group By"),C.a.createElement("input",{className:"gf-form-input width-30",type:"text",onChange:function(t){return O(t,"groupBy",e.props,!0)},value:t.servicenow.groupBy.join(","),placeholder:"",title:"Group By"}))))},t}(S.PureComponent),U=[{label:"Ascending",value:"asc"},{label:"Descending",value:"desc"}],k=[10,25,50,100,250,500,1e3].map((function(e){return{label:e.toString(),value:e.toString()}})),H=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query,r="table"===t.servicenow.type?C.a.createElement(C.a.Fragment,null,"  ",C.a.createElement("label",{className:"gf-form-label width-8",title:"Order By"},"Order By"),C.a.createElement(a.Select,{className:"width-12",value:B.find((function(e){return e.value===t.servicenow.orderBy}))||{value:t.servicenow.orderBy,label:t.servicenow.orderBy},options:B.filter((function(e){return e.tables.indexOf(t.servicenow.table)>-1})),defaultValue:t.servicenow.orderBy,onChange:function(t){return F(t,"orderBy",e.props)},allowCustomValue:!0}),C.a.createElement(a.Select,{className:"width-8",value:U.find((function(e){return e.value===t.servicenow.orderByDirection})),options:U,defaultValue:t.servicenow.orderByDirection,onChange:function(t){return F(t,"orderByDirection",e.props)}})):null;return C.a.createElement("div",null,C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("label",{className:"gf-form-label width-8",title:"Limit"},"Limit"),C.a.createElement(a.Select,{className:"width-12",value:k.find((function(e){return e.value===t.servicenow.limit}))||{value:t.servicenow.limit,label:t.servicenow.limit},options:k,defaultValue:t.servicenow.limit,onChange:function(t){return F(t,"limit",e.props,"number")},allowCustomValue:!0}),r)))},t}(S.PureComponent),Q=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onFilterAdd=function(e){void 0===e&&(e="^");var r=t.props,a=r.query,n=r.onChange,l=a.servicenow,o=new v("number","LIKE","INC",e);l.filters=l.filters||[o],l.filters.push(o),n(s(s({},a),{servicenow:l}))},t.onFilterRemove=function(e){var r=t.props,a=r.query,n=r.onChange,l=a.servicenow,o=new v("active","=","true","^");l.filters=l.filters||[o],l.filters.splice(e,1),n(s(s({},a),{servicenow:l}))},t}return i(t,e),t.prototype.render=function(){var e=this,t=this.props.query;return C.a.createElement("div",null,0===t.servicenow.filters.length?C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("div",{className:"gf-form gf-form--grow"},C.a.createElement("label",{className:"gf-form-label width-8",title:"Filter"},"Filter"))),C.a.createElement("div",{className:"gf-form"},C.a.createElement("div",{className:"gf-form gf-form--grow"},C.a.createElement("span",{className:"btn btn-success btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterAdd("^")}},"Add Filter")))):null,t.servicenow.filters.map((function(r,n){var l;return l=C.a.createElement("input",{type:"text",className:"gf-form-input width-12",title:"Value",placeholder:"Value",value:r.value,onChange:function(t){return O(t,"filters["+n+"].value",e.props)}}),"active"!==r.field||"="!==r.operator&&"!="!==r.operator||(l=C.a.createElement(a.Select,{className:"width-12",value:D.active.find((function(e){return e.value===r.value}))||{value:r.value,label:r.value},options:D.active,defaultValue:"true",onChange:function(t){return F(t,"filters["+n+"].value",e.props)}})),P.map((function(e){return e.value})).indexOf(r.field)>-1&&([">",">=","<","<="].indexOf(r.operator)>-1?l=C.a.createElement(a.Select,{className:"width-12",value:D.grafanaTimestamps.find((function(e){return e.value===r.value}))||{value:r.value,label:r.value},options:D.grafanaTimestamps,defaultValue:"$__timeFrom()",onChange:function(t){return F(t,"filters["+n+"].value",e.props)},allowCustomValue:!0}):["BETWEEN"].indexOf(r.operator)>-1&&(l=C.a.createElement(a.Select,{className:"width-12",value:D.grafanaTimestamps.find((function(e){return e.value===r.value}))||{value:r.value,label:r.value},options:D.grafanaTimestamps,defaultValue:"$__timeFilter()",onChange:function(t){return F(t,"filters["+n+"].value",e.props)},allowCustomValue:!0}))),C.a.createElement("div",{className:"gf-form-inline"},C.a.createElement("div",{className:"gf-form"},C.a.createElement("div",{className:"gf-form gf-form--grow"},C.a.createElement("label",{className:"gf-form-label width-8",title:"Filter"},"Filter ",n+1))),C.a.createElement("div",{className:"gf-form"},C.a.createElement("div",{className:"gf-form gf-form--grow"},C.a.createElement(a.Select,{className:"width-12",value:B.find((function(e){return e.value===r.field}))||{value:r.field,label:r.field},options:B.filter((function(e){return e.tables.indexOf(t.servicenow.table)>-1})),defaultValue:r.field,onChange:function(t){F(t,"filters["+n+"].field",e.props),"active"===t.value?(F({value:"="},"filters["+n+"].operator",e.props),F({value:"true"},"filters["+n+"].value",e.props)):P.map((function(e){return e.value})).indexOf(t.value)>-1?(F({value:">="},"filters["+n+"].operator",e.props),F({value:"$__timeFrom()"},"filters["+n+"].value",e.props)):(F({value:"="},"filters["+n+"].operator",e.props),F({value:""},"filters["+n+"].value",e.props))},allowCustomValue:!0}),C.a.createElement(a.Select,{className:"width-12",value:j.find((function(e){return e.value===r.operator}))||{value:r.operator,label:r.operator},options:j,defaultValue:r.operator,onChange:function(t){return F(t,"filters["+n+"].operator",e.props)},allowCustomValue:!0}),l)),C.a.createElement("span",null,C.a.createElement("div",{className:"gf-form"},C.a.createElement("div",{className:"gf-form gf-form--grow"},n===t.servicenow.filters.length-1?C.a.createElement("span",{className:"btn btn-success btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterAdd("^")}},"+"):C.a.createElement(a.Select,{className:"width-5",value:x.find((function(e){return e.value===(r.condition||"^")})),options:x,defaultValue:r.condition,onChange:function(t){return F(t,"filters["+n+"].condition",e.props)},allowCustomValue:!0}),C.a.createElement("span",{className:"btn btn-danger btn-small",style:{margin:"5px"},onClick:function(){return e.onFilterRemove(n)}},"x")))))})))},t}(S.PureComponent),Y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e,t=Object(m.defaults)(this.props.query,{servicenow:Object(m.defaults)(this.props.query.servicenow,g)});if(t&&t.servicenow&&t.servicenow.type)switch(t.servicenow.type){case"table":e=C.a.createElement(V,{onChange:this.props.onChange,query:t,datasource:this.props.datasource});break;case"stats":e=C.a.createElement(M,{onChange:this.props.onChange,query:t,datasource:this.props.datasource})}return C.a.createElement("div",null,C.a.createElement(L,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}),e,C.a.createElement(G,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}),C.a.createElement(Q,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}),C.a.createElement(H,{onChange:this.props.onChange,query:t,datasource:this.props.datasource}))},t}(S.PureComponent),$=function(){function e(){this.supportedTables=R.map((function(e){return{text:e.label,value:e.value}}))}return e.templateUrl="editors/annotations/annotations.editor.html",e}();r.d(t,"plugin",(function(){return J}));var J=new n.DataSourcePlugin(q).setConfigEditor(T).setQueryEditor(Y).setAnnotationQueryCtrl($)}])}));