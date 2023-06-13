"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=o(n),c=a,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(k,s(s({ref:t},m),{},{components:n})):r.createElement(k,s({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},s="API definition helpers",p={unversionedId:"api/helpers",id:"api/helpers",title:"API definition helpers",description:"Usually, you'll want to define your API definition in a separate file and import it in your server and client code.",source:"@site/docs/api/helpers.md",sourceDirName:"api",slug:"/api/helpers",permalink:"/docs/api/helpers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API definition",permalink:"/docs/api/api-definition"},next:{title:"OpenAPI",permalink:"/docs/api/openapi"}},l={},o=[{value:"makeApi",id:"makeapi",level:2},{value:"makeEndpoint",id:"makeendpoint",level:2},{value:"makeParameters",id:"makeparameters",level:2},{value:"makeErrors",id:"makeerrors",level:2},{value:"parametersBuilder",id:"parametersbuilder",level:2},{value:"ParametersBuilder methods",id:"parametersbuilder-methods",level:3},{value:"apiBuilder",id:"apibuilder",level:2},{value:"ApiBuilder methods",id:"apibuilder-methods",level:3},{value:"mergeApis",id:"mergeapis",level:2}],m={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-definition-helpers"},"API definition helpers"),(0,a.kt)("p",null,"Usually, you'll want to define your API definition in a separate file and import it in your server and client code.\nFor this use case, Zodios provides some helpers to make your life easier and still keep your API definition correctly inferred without needing to use Typescript ",(0,a.kt)("inlineCode",{parentName:"p"},"as const"),".  "),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"These helpers, are mandatory to be used when declaring your definitions outside of ",(0,a.kt)("inlineCode",{parentName:"p"},"Zodios")," constructor to allow your API definitions to be correctly inferred in both pure Javascript and Typescript.")),(0,a.kt)("h2",{id:"makeapi"},"makeApi"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"makeApi")," is a helper to narrow your api definitions and make some runtime checks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function makeApi(api: ZodiosEndpointDescriptions): ZodiosEndpointDescriptions;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeApi } from "@zodios/core";\n\nconst api = makeApi([\n  {\n    method: "get",\n    path: "/users/:id",\n    response: user,\n    alias: "getUser",\n    description: "Get user",\n  },\n  {\n    method: "get",\n    path: "/users",\n    response: z.array(user),\n    alias: "getUsers",\n    description: "Get users",\n  },\n]);\n')),(0,a.kt)("h2",{id:"makeendpoint"},"makeEndpoint"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"makeEndpoint")," is a helper to narrow a single endpoint definition and make some runtime checks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function makeEndpoint(endpoint: ZodiosEndpointDescription): ZodiosEndpointDescription;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeEndpoint } from "@zodios/core";\n\nconst getUser = makeEndpoint({\n  method: "get",\n  path: "/users/:id",\n  response: user,\n  alias: "getUser",\n  description: "Get user",\n});\n')),(0,a.kt)("p",null,"It can then be combined with ",(0,a.kt)("inlineCode",{parentName:"p"},"makeApi")," to compose a full api description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeApi } from "@zodios/core";\nimport { getUser,getUsers } from "./endpoints";\n\nconst api = makeApi([getUser, getUsers]);\n')),(0,a.kt)("h2",{id:"makeparameters"},"makeParameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"makeParameters")," is a helper to narrow your parameter definitions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function makeParameters(params: ZodiosEndpointParameters): ZodiosEndpointParameters;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeParameters } from "@zodios/core";\n\nconst params = makeParameters([\n  {\n    name: "limit",\n    description: "Limit",\n    type: "Query",\n    schema: z.number().positive(),\n  },\n  {\n    name: "offset",\n    description: "Offset",\n    type: "Query",\n    schema: z.number().positive(),\n  },\n]);\n')),(0,a.kt)("p",null,"It can then be combined with ",(0,a.kt)("inlineCode",{parentName:"p"},"makeApi")," to compose a full api description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const api = makeApi([\n  {\n    method: "get",\n    path: "/users",\n    response: z.array(user),\n    alias: "getUsers",\n    description: "Get users",\n    parameters: params,\n  },\n]);\n')),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeApi } from "@zodios/core";\n\nconst api = makeApi([\n  {\n    method: "get",\n    path: "/users",\n    response: z.array(user),\n    alias: "getUsers",\n    description: "Get users",\n    parameters: [\n      {\n        name: "limit",\n        description: "Limit",\n        type: "Query",\n        schema: z.number().positive(),\n      },\n      {\n        name: "offset",\n        description: "Offset",\n        type: "Query",\n        schema: z.number().positive(),\n      },\n    ],\n  },\n]);\n')),(0,a.kt)("h2",{id:"makeerrors"},"makeErrors"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"makeErrors")," is a helper to narrow your error definitions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function makeErrors(errors: ZodiosEndpointErrors): ZodiosEndpointErrors;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeErrors } from "@zodios/core";\n\nconst errors = makeErrors([\n  {\n    status: 404,\n    description: "User not found",\n    schema: z.object({\n      error: z.object({\n        userId: z.number(),\n        code: z.string(),\n        message: z.string(),\n      }),\n    }),\n  },\n  {\n    status: "default",\n    description: "Default error",\n    schema: z.object({\n      error: z.object({\n        code: z.string(),\n        message: z.string(),\n      }),\n    }),\n  },\n]);\n')),(0,a.kt)("p",null,"It can then be combined with ",(0,a.kt)("inlineCode",{parentName:"p"},"makeApi")," to compose a full api description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const api = makeApi([\n  {\n    method: "get",\n    path: "/users/:id",\n    response: user,\n    alias: "getUser",\n    description: "Get user",\n    errors,\n  },\n]);\n')),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeApi } from "@zodios/core";\n\nconst api = makeApi([\n  {\n    method: "get",\n    path: "/users/:id",\n    response: user,\n    alias: "getUser",\n    description: "Get user",\n    errors: [\n      {\n        status: 404,\n        description: "User not found",\n        schema: z.object({\n          error: z.object({\n            userId: z.number(),\n            code: z.string(),\n            message: z.string(),\n          }),\n        }),\n      },\n      {\n        status: "default",\n        description: "Default error",\n        schema: z.object({\n          error: z.object({\n            code: z.string(),\n            message: z.string(),\n          }),\n        }),\n      },\n    ],\n  },\n]);\n')),(0,a.kt)("h2",{id:"parametersbuilder"},"parametersBuilder"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"parametersBuilder")," is a helper to build parameter definitions with better type autocompletion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function parametersBuilder(): ParametersBuilder;\n")),(0,a.kt)("h3",{id:"parametersbuilder-methods"},"ParametersBuilder methods"),(0,a.kt)("p",null,"ParametersBuilder is a helper to build parameter definitions with better type autocompletion."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"methods"),(0,a.kt)("th",{parentName:"tr",align:null},"parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"return"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addParameter"),(0,a.kt)("td",{parentName:"tr",align:null},"name: Name, type: Type, schema: Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add a parameter to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addParameters"),(0,a.kt)("td",{parentName:"tr",align:null},"type: Type, schemas: Record<string, Schema>"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add multiple parameters to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addBody"),(0,a.kt)("td",{parentName:"tr",align:null},"schema: Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add a body to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addHeader"),(0,a.kt)("td",{parentName:"tr",align:null},"name: Name, schema: Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add a header to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addHeaders"),(0,a.kt)("td",{parentName:"tr",align:null},"schemas: Record<string, Schema>"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add multiple headers to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addQuery"),(0,a.kt)("td",{parentName:"tr",align:null},"name: Name, schema: Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add a query to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addQueries"),(0,a.kt)("td",{parentName:"tr",align:null},"schemas: Record<string, Schema>"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add multiple queries to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addPath"),(0,a.kt)("td",{parentName:"tr",align:null},"name: Name, schema: Schema"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add a path to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addPaths"),(0,a.kt)("td",{parentName:"tr",align:null},"schemas: Record<string, Schema>"),(0,a.kt)("td",{parentName:"tr",align:null},"ParametersBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add multiple paths to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"build"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"ZodiosEndpointParameters"),(0,a.kt)("td",{parentName:"tr",align:null},"Build the parameters")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { parametersBuilder } from "@zodios/core";\n\nconst params = parametersBuilder()\n  .addParameters("Query", {\n    limit: z.number().positive(),\n    offset: z.number().positive(),\n  })\n  .build();\n')),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { parametersBuilder } from "@zodios/core";\n\nconst params = parametersBuilder()\n  .addQuery("limit", z.number().positive())\n  .addQuery("offset", z.number().positive())\n  .build();\n')),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { parametersBuilder } from "@zodios/core";\n\nconst params = parametersBuilder()\n  .addQueries({\n    limit: z.number().positive(),\n    offset: z.number().positive(),\n  })\n  .build();\n')),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { parametersBuilder } from "@zodios/core";\n\nconst params = parametersBuilder()\n  .addParameter("limit", "Query", z.number().positive())\n  .addParameter("offset", "Query", z.number().positive())\n  .build();\n')),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeParameters } from "@zodios/core";\n\nconst params = makeParameters([\n  {\n    name: "limit",\n    type: "Query",\n    schema: z.number().positive(),\n  },\n  {\n    name: "offset",\n    type: "Query",\n    schema: z.number().positive(),\n  },\n]);\n')),(0,a.kt)("p",null,"It can then be combined with ",(0,a.kt)("inlineCode",{parentName:"p"},"makeApi")," to compose a full api description."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const api = makeApi([\n  {\n    method: "get",\n    path: "/users",\n    response: z.array(user),\n    alias: "getUsers",\n    description: "Get users",\n    parameters: params,\n  },\n]);\n')),(0,a.kt)("p",null,"is equivalent to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { makeApi } from "@zodios/core";\n\nconst api = makeApi([\n  {\n    method: "get",\n    path: "/users",\n    response: z.array(user),\n    alias: "getUsers",\n    description: "Get users",\n    parameters: [\n      {\n        name: "limit",\n        type: "Query",\n        schema: z.number().positive(),\n      },\n      {\n        name: "offset",\n        type: "Query",\n        schema: z.number().positive(),\n      },\n    ],\n  },\n]);\n')),(0,a.kt)("h2",{id:"apibuilder"},"apiBuilder"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"apiBuilder")," is a helper to build API definitions with better type autocompletion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function apiBuilder(endpoint: ZodiosEndpointDescription): ApiBuilder;\n")),(0,a.kt)("h3",{id:"apibuilder-methods"},"ApiBuilder methods"),(0,a.kt)("p",null,"ApiBuilder is a helper to build API definitions with better type autocompletion."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"methods"),(0,a.kt)("th",{parentName:"tr",align:null},"parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"return"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"addEndpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"ZodiosEndpointDescription"),(0,a.kt)("td",{parentName:"tr",align:null},"ApiBuilder"),(0,a.kt)("td",{parentName:"tr",align:null},"Add an endpoint to the API")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"build"),(0,a.kt)("td",{parentName:"tr",align:null},"none"),(0,a.kt)("td",{parentName:"tr",align:null},"ZodiosEndpointDescriptions"),(0,a.kt)("td",{parentName:"tr",align:null},"Build the API")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { apiBuilder } from "@zodios/core";\n\nconst api = apiBuilder({\n  method: "get",\n  path: "/users",\n  response: z.array(user),\n  alias: "getUsers",\n  description: "Get users",\n})\n  .addEndpoint({\n    method: "get",\n    path: "/users/:id",\n    response: user,\n    alias: "getUser",\n    description: "Get user",\n  })\n  .build();\n')),(0,a.kt)("h2",{id:"mergeapis"},"mergeApis"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"mergeApis")," is a helper to merge multiple API definitions in a router friendly way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function mergeApis(apis: Record<string,ZodiosEndpointDescriptions>): ZodiosEndpointDescriptions;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { mergeApis } from "@zodios/core";\nimport { usersApi } from "./users";\nimport { postsApi } from "./posts";\n\nconst api = mergeApis({\n  \'/users\': usersApi,\n  \'/posts\': postsApi,\n});\n')))}d.isMDXComponent=!0}}]);