(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"./node_modules/@graphiql/react/dist/javascript.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"j",(function(){return javascript$1}));var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),__defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function _mergeNamespaces(n,m){return m.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(k){if("default"!==k&&!(k in n)){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function(){return e[k]}})}}))})),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}__name(_mergeNamespaces,"_mergeNamespaces");var CodeMirror,javascript$2={exports:{}};(CodeMirror=_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.a.exports).defineMode("javascript",(function(config,parserConfig){var type,content,indentUnit=config.indentUnit,statementIndent=parserConfig.statementIndent,jsonldMode=parserConfig.jsonld,jsonMode=parserConfig.json||jsonldMode,trackScope=!1!==parserConfig.trackScope,isTS=parserConfig.typescript,wordRE=parserConfig.wordCharacters||/[\w$\xa1-\uffff]/,keywords=function(){function kw(type2){return{type:type2,style:"keyword"}}__name(kw,"kw");var A=kw("keyword a"),B=kw("keyword b"),C=kw("keyword c"),D=kw("keyword d"),operator=kw("operator"),atom={type:"atom",style:"atom"};return{if:kw("if"),while:A,with:A,else:B,do:B,try:B,finally:B,return:D,break:D,continue:D,new:kw("new"),delete:C,void:C,throw:C,debugger:kw("debugger"),var:kw("var"),const:kw("var"),let:kw("var"),function:kw("function"),catch:kw("catch"),for:kw("for"),switch:kw("switch"),case:kw("case"),default:kw("default"),in:operator,typeof:operator,instanceof:operator,true:atom,false:atom,null:atom,undefined:atom,NaN:atom,Infinity:atom,this:kw("this"),class:kw("class"),super:kw("atom"),yield:C,export:kw("export"),import:kw("import"),extends:C,await:C}}(),isOperatorChar=/[+\-*&%=<>!?|~^@]/,isJsonldKeyword=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function readRegexp(stream){for(var next,escaped=!1,inSet=!1;null!=(next=stream.next());){if(!escaped){if("/"==next&&!inSet)return;"["==next?inSet=!0:inSet&&"]"==next&&(inSet=!1)}escaped=!escaped&&"\\"==next}}function ret(tp,style,cont2){return type=tp,content=cont2,style}function tokenBase(stream,state){var ch=stream.next();if('"'==ch||"'"==ch)return state.tokenize=tokenString(ch),state.tokenize(stream,state);if("."==ch&&stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return ret("number","number");if("."==ch&&stream.match(".."))return ret("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(ch))return ret(ch);if("="==ch&&stream.eat(">"))return ret("=>","operator");if("0"==ch&&stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return ret("number","number");if(/\d/.test(ch))return stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),ret("number","number");if("/"==ch)return stream.eat("*")?(state.tokenize=tokenComment,tokenComment(stream,state)):stream.eat("/")?(stream.skipToEnd(),ret("comment","comment")):expressionAllowed(stream,state,1)?(readRegexp(stream),stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),ret("regexp","string-2")):(stream.eat("="),ret("operator","operator",stream.current()));if("`"==ch)return state.tokenize=tokenQuasi,tokenQuasi(stream,state);if("#"==ch&&"!"==stream.peek())return stream.skipToEnd(),ret("meta","meta");if("#"==ch&&stream.eatWhile(wordRE))return ret("variable","property");if("<"==ch&&stream.match("!--")||"-"==ch&&stream.match("->")&&!/\S/.test(stream.string.slice(0,stream.start)))return stream.skipToEnd(),ret("comment","comment");if(isOperatorChar.test(ch))return">"==ch&&state.lexical&&">"==state.lexical.type||(stream.eat("=")?"!"!=ch&&"="!=ch||stream.eat("="):/[<>*+\-|&?]/.test(ch)&&(stream.eat(ch),">"==ch&&stream.eat(ch))),"?"==ch&&stream.eat(".")?ret("."):ret("operator","operator",stream.current());if(wordRE.test(ch)){stream.eatWhile(wordRE);var word=stream.current();if("."!=state.lastType){if(keywords.propertyIsEnumerable(word)){var kw=keywords[word];return ret(kw.type,kw.style,word)}if("async"==word&&stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return ret("async","keyword",word)}return ret("variable","variable",word)}}function tokenString(quote){return function(stream,state){var next,escaped=!1;if(jsonldMode&&"@"==stream.peek()&&stream.match(isJsonldKeyword))return state.tokenize=tokenBase,ret("jsonld-keyword","meta");for(;null!=(next=stream.next())&&(next!=quote||escaped);)escaped=!escaped&&"\\"==next;return escaped||(state.tokenize=tokenBase),ret("string","string")}}function tokenComment(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if("/"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="*"==ch}return ret("comment","comment")}function tokenQuasi(stream,state){for(var next,escaped=!1;null!=(next=stream.next());){if(!escaped&&("`"==next||"$"==next&&stream.eat("{"))){state.tokenize=tokenBase;break}escaped=!escaped&&"\\"==next}return ret("quasi","string-2",stream.current())}__name(readRegexp,"readRegexp"),__name(ret,"ret"),__name(tokenBase,"tokenBase"),__name(tokenString,"tokenString"),__name(tokenComment,"tokenComment"),__name(tokenQuasi,"tokenQuasi");var brackets="([{}])";function findFatArrow(stream,state){state.fatArrowAt&&(state.fatArrowAt=null);var arrow=stream.string.indexOf("=>",stream.start);if(!(arrow<0)){if(isTS){var m=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start,arrow));m&&(arrow=m.index)}for(var depth=0,sawSomething=!1,pos=arrow-1;pos>=0;--pos){var ch=stream.string.charAt(pos),bracket=brackets.indexOf(ch);if(bracket>=0&&bracket<3){if(!depth){++pos;break}if(0==--depth){"("==ch&&(sawSomething=!0);break}}else if(bracket>=3&&bracket<6)++depth;else if(wordRE.test(ch))sawSomething=!0;else if(/["'\/`]/.test(ch))for(;;--pos){if(0==pos)return;if(stream.string.charAt(pos-1)==ch&&"\\"!=stream.string.charAt(pos-2)){pos--;break}}else if(sawSomething&&!depth){++pos;break}}sawSomething&&!depth&&(state.fatArrowAt=pos)}}__name(findFatArrow,"findFatArrow");var atomicTypes={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function JSLexical(indented,column,type2,align,prev,info){this.indented=indented,this.column=column,this.type=type2,this.prev=prev,this.info=info,null!=align&&(this.align=align)}function inScope(state,varname){if(!trackScope)return!1;for(var v=state.localVars;v;v=v.next)if(v.name==varname)return!0;for(var cx2=state.context;cx2;cx2=cx2.prev)for(v=cx2.vars;v;v=v.next)if(v.name==varname)return!0}function parseJS(state,style,type2,content2,stream){var cc=state.cc;for(cx.state=state,cx.stream=stream,cx.marked=null,cx.cc=cc,cx.style=style,state.lexical.hasOwnProperty("align")||(state.lexical.align=!0);;)if((cc.length?cc.pop():jsonMode?expression:statement)(type2,content2)){for(;cc.length&&cc[cc.length-1].lex;)cc.pop()();return cx.marked?cx.marked:"variable"==type2&&inScope(state,content2)?"variable-2":style}}__name(JSLexical,"JSLexical"),__name(inScope,"inScope"),__name(parseJS,"parseJS");var cx={state:null,column:null,marked:null,cc:null};function pass(){for(var i=arguments.length-1;i>=0;i--)cx.cc.push(arguments[i])}function cont(){return pass.apply(null,arguments),!0}function inList(name,list){for(var v=list;v;v=v.next)if(v.name==name)return!0;return!1}function register(varname){var state=cx.state;if(cx.marked="def",trackScope){if(state.context)if("var"==state.lexical.info&&state.context&&state.context.block){var newContext=registerVarScoped(varname,state.context);if(null!=newContext)return void(state.context=newContext)}else if(!inList(varname,state.localVars))return void(state.localVars=new Var(varname,state.localVars));parserConfig.globalVars&&!inList(varname,state.globalVars)&&(state.globalVars=new Var(varname,state.globalVars))}}function registerVarScoped(varname,context){if(context){if(context.block){var inner=registerVarScoped(varname,context.prev);return inner?inner==context.prev?context:new Context(inner,context.vars,!0):null}return inList(varname,context.vars)?context:new Context(context.prev,new Var(varname,context.vars),!1)}return null}function isModifier(name){return"public"==name||"private"==name||"protected"==name||"abstract"==name||"readonly"==name}function Context(prev,vars,block2){this.prev=prev,this.vars=vars,this.block=block2}function Var(name,next){this.name=name,this.next=next}__name(pass,"pass"),__name(cont,"cont"),__name(inList,"inList"),__name(register,"register"),__name(registerVarScoped,"registerVarScoped"),__name(isModifier,"isModifier"),__name(Context,"Context"),__name(Var,"Var");var defaultVars=new Var("this",new Var("arguments",null));function pushcontext(){cx.state.context=new Context(cx.state.context,cx.state.localVars,!1),cx.state.localVars=defaultVars}function pushblockcontext(){cx.state.context=new Context(cx.state.context,cx.state.localVars,!0),cx.state.localVars=null}function popcontext(){cx.state.localVars=cx.state.context.vars,cx.state.context=cx.state.context.prev}function pushlex(type2,info){var result=__name((function(){var state=cx.state,indent=state.indented;if("stat"==state.lexical.type)indent=state.lexical.indented;else for(var outer=state.lexical;outer&&")"==outer.type&&outer.align;outer=outer.prev)indent=outer.indented;state.lexical=new JSLexical(indent,cx.stream.column(),type2,null,state.lexical,info)}),"result");return result.lex=!0,result}function poplex(){var state=cx.state;state.lexical.prev&&(")"==state.lexical.type&&(state.indented=state.lexical.indented),state.lexical=state.lexical.prev)}function expect(wanted){function exp(type2){return type2==wanted?cont():";"==wanted||"}"==type2||")"==type2||"]"==type2?pass():cont(exp)}return __name(exp,"exp"),exp}function statement(type2,value){return"var"==type2?cont(pushlex("vardef",value),vardef,expect(";"),poplex):"keyword a"==type2?cont(pushlex("form"),parenExpr,statement,poplex):"keyword b"==type2?cont(pushlex("form"),statement,poplex):"keyword d"==type2?cx.stream.match(/^\s*$/,!1)?cont():cont(pushlex("stat"),maybeexpression,expect(";"),poplex):"debugger"==type2?cont(expect(";")):"{"==type2?cont(pushlex("}"),pushblockcontext,block,poplex,popcontext):";"==type2?cont():"if"==type2?("else"==cx.state.lexical.info&&cx.state.cc[cx.state.cc.length-1]==poplex&&cx.state.cc.pop()(),cont(pushlex("form"),parenExpr,statement,poplex,maybeelse)):"function"==type2?cont(functiondef):"for"==type2?cont(pushlex("form"),pushblockcontext,forspec,statement,popcontext,poplex):"class"==type2||isTS&&"interface"==value?(cx.marked="keyword",cont(pushlex("form","class"==type2?type2:value),className,poplex)):"variable"==type2?isTS&&"declare"==value?(cx.marked="keyword",cont(statement)):isTS&&("module"==value||"enum"==value||"type"==value)&&cx.stream.match(/^\s*\w/,!1)?(cx.marked="keyword","enum"==value?cont(enumdef):"type"==value?cont(typename,expect("operator"),typeexpr,expect(";")):cont(pushlex("form"),pattern,expect("{"),pushlex("}"),block,poplex,poplex)):isTS&&"namespace"==value?(cx.marked="keyword",cont(pushlex("form"),expression,statement,poplex)):isTS&&"abstract"==value?(cx.marked="keyword",cont(statement)):cont(pushlex("stat"),maybelabel):"switch"==type2?cont(pushlex("form"),parenExpr,expect("{"),pushlex("}","switch"),pushblockcontext,block,poplex,poplex,popcontext):"case"==type2?cont(expression,expect(":")):"default"==type2?cont(expect(":")):"catch"==type2?cont(pushlex("form"),pushcontext,maybeCatchBinding,statement,poplex,popcontext):"export"==type2?cont(pushlex("stat"),afterExport,poplex):"import"==type2?cont(pushlex("stat"),afterImport,poplex):"async"==type2?cont(statement):"@"==value?cont(expression,statement):pass(pushlex("stat"),expression,expect(";"),poplex)}function maybeCatchBinding(type2){if("("==type2)return cont(funarg,expect(")"))}function expression(type2,value){return expressionInner(type2,value,!1)}function expressionNoComma(type2,value){return expressionInner(type2,value,!0)}function parenExpr(type2){return"("!=type2?pass():cont(pushlex(")"),maybeexpression,expect(")"),poplex)}function expressionInner(type2,value,noComma){if(cx.state.fatArrowAt==cx.stream.start){var body=noComma?arrowBodyNoComma:arrowBody;if("("==type2)return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,expect("=>"),body,popcontext);if("variable"==type2)return pass(pushcontext,pattern,expect("=>"),body,popcontext)}var maybeop=noComma?maybeoperatorNoComma:maybeoperatorComma;return atomicTypes.hasOwnProperty(type2)?cont(maybeop):"function"==type2?cont(functiondef,maybeop):"class"==type2||isTS&&"interface"==value?(cx.marked="keyword",cont(pushlex("form"),classExpression,poplex)):"keyword c"==type2||"async"==type2?cont(noComma?expressionNoComma:expression):"("==type2?cont(pushlex(")"),maybeexpression,expect(")"),poplex,maybeop):"operator"==type2||"spread"==type2?cont(noComma?expressionNoComma:expression):"["==type2?cont(pushlex("]"),arrayLiteral,poplex,maybeop):"{"==type2?contCommasep(objprop,"}",null,maybeop):"quasi"==type2?pass(quasi,maybeop):"new"==type2?cont(maybeTarget(noComma)):cont()}function maybeexpression(type2){return type2.match(/[;\}\)\],]/)?pass():pass(expression)}function maybeoperatorComma(type2,value){return","==type2?cont(maybeexpression):maybeoperatorNoComma(type2,value,!1)}function maybeoperatorNoComma(type2,value,noComma){var me=0==noComma?maybeoperatorComma:maybeoperatorNoComma,expr=0==noComma?expression:expressionNoComma;return"=>"==type2?cont(pushcontext,noComma?arrowBodyNoComma:arrowBody,popcontext):"operator"==type2?/\+\+|--/.test(value)||isTS&&"!"==value?cont(me):isTS&&"<"==value&&cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?cont(pushlex(">"),commasep(typeexpr,">"),poplex,me):"?"==value?cont(expression,expect(":"),expr):cont(expr):"quasi"==type2?pass(quasi,me):";"!=type2?"("==type2?contCommasep(expressionNoComma,")","call",me):"."==type2?cont(property,me):"["==type2?cont(pushlex("]"),maybeexpression,expect("]"),poplex,me):isTS&&"as"==value?(cx.marked="keyword",cont(typeexpr,me)):"regexp"==type2?(cx.state.lastType=cx.marked="operator",cx.stream.backUp(cx.stream.pos-cx.stream.start-1),cont(expr)):void 0:void 0}function quasi(type2,value){return"quasi"!=type2?pass():"${"!=value.slice(value.length-2)?cont(quasi):cont(maybeexpression,continueQuasi)}function continueQuasi(type2){if("}"==type2)return cx.marked="string-2",cx.state.tokenize=tokenQuasi,cont(quasi)}function arrowBody(type2){return findFatArrow(cx.stream,cx.state),pass("{"==type2?statement:expression)}function arrowBodyNoComma(type2){return findFatArrow(cx.stream,cx.state),pass("{"==type2?statement:expressionNoComma)}function maybeTarget(noComma){return function(type2){return"."==type2?cont(noComma?targetNoComma:target):"variable"==type2&&isTS?cont(maybeTypeArgs,noComma?maybeoperatorNoComma:maybeoperatorComma):pass(noComma?expressionNoComma:expression)}}function target(_,value){if("target"==value)return cx.marked="keyword",cont(maybeoperatorComma)}function targetNoComma(_,value){if("target"==value)return cx.marked="keyword",cont(maybeoperatorNoComma)}function maybelabel(type2){return":"==type2?cont(poplex,statement):pass(maybeoperatorComma,expect(";"),poplex)}function property(type2){if("variable"==type2)return cx.marked="property",cont()}function objprop(type2,value){return"async"==type2?(cx.marked="property",cont(objprop)):"variable"==type2||"keyword"==cx.style?(cx.marked="property","get"==value||"set"==value?cont(getterSetter):(isTS&&cx.state.fatArrowAt==cx.stream.start&&(m=cx.stream.match(/^\s*:\s*/,!1))&&(cx.state.fatArrowAt=cx.stream.pos+m[0].length),cont(afterprop))):"number"==type2||"string"==type2?(cx.marked=jsonldMode?"property":cx.style+" property",cont(afterprop)):"jsonld-keyword"==type2?cont(afterprop):isTS&&isModifier(value)?(cx.marked="keyword",cont(objprop)):"["==type2?cont(expression,maybetype,expect("]"),afterprop):"spread"==type2?cont(expressionNoComma,afterprop):"*"==value?(cx.marked="keyword",cont(objprop)):":"==type2?pass(afterprop):void 0;var m}function getterSetter(type2){return"variable"!=type2?pass(afterprop):(cx.marked="property",cont(functiondef))}function afterprop(type2){return":"==type2?cont(expressionNoComma):"("==type2?pass(functiondef):void 0}function commasep(what,end,sep){function proceed(type2,value){if(sep?sep.indexOf(type2)>-1:","==type2){var lex=cx.state.lexical;return"call"==lex.info&&(lex.pos=(lex.pos||0)+1),cont((function(type3,value2){return type3==end||value2==end?pass():pass(what)}),proceed)}return type2==end||value==end?cont():sep&&sep.indexOf(";")>-1?pass(what):cont(expect(end))}return __name(proceed,"proceed"),function(type2,value){return type2==end||value==end?cont():pass(what,proceed)}}function contCommasep(what,end,info){for(var i=3;i<arguments.length;i++)cx.cc.push(arguments[i]);return cont(pushlex(end,info),commasep(what,end),poplex)}function block(type2){return"}"==type2?cont():pass(statement,block)}function maybetype(type2,value){if(isTS){if(":"==type2)return cont(typeexpr);if("?"==value)return cont(maybetype)}}function maybetypeOrIn(type2,value){if(isTS&&(":"==type2||"in"==value))return cont(typeexpr)}function mayberettype(type2){if(isTS&&":"==type2)return cx.stream.match(/^\s*\w+\s+is\b/,!1)?cont(expression,isKW,typeexpr):cont(typeexpr)}function isKW(_,value){if("is"==value)return cx.marked="keyword",cont()}function typeexpr(type2,value){return"keyof"==value||"typeof"==value||"infer"==value||"readonly"==value?(cx.marked="keyword",cont("typeof"==value?expressionNoComma:typeexpr)):"variable"==type2||"void"==value?(cx.marked="type",cont(afterType)):"|"==value||"&"==value?cont(typeexpr):"string"==type2||"number"==type2||"atom"==type2?cont(afterType):"["==type2?cont(pushlex("]"),commasep(typeexpr,"]",","),poplex,afterType):"{"==type2?cont(pushlex("}"),typeprops,poplex,afterType):"("==type2?cont(commasep(typearg,")"),maybeReturnType,afterType):"<"==type2?cont(commasep(typeexpr,">"),typeexpr):"quasi"==type2?pass(quasiType,afterType):void 0}function maybeReturnType(type2){if("=>"==type2)return cont(typeexpr)}function typeprops(type2){return type2.match(/[\}\)\]]/)?cont():","==type2||";"==type2?cont(typeprops):pass(typeprop,typeprops)}function typeprop(type2,value){return"variable"==type2||"keyword"==cx.style?(cx.marked="property",cont(typeprop)):"?"==value||"number"==type2||"string"==type2?cont(typeprop):":"==type2?cont(typeexpr):"["==type2?cont(expect("variable"),maybetypeOrIn,expect("]"),typeprop):"("==type2?pass(functiondecl,typeprop):type2.match(/[;\}\)\],]/)?void 0:cont()}function quasiType(type2,value){return"quasi"!=type2?pass():"${"!=value.slice(value.length-2)?cont(quasiType):cont(typeexpr,continueQuasiType)}function continueQuasiType(type2){if("}"==type2)return cx.marked="string-2",cx.state.tokenize=tokenQuasi,cont(quasiType)}function typearg(type2,value){return"variable"==type2&&cx.stream.match(/^\s*[?:]/,!1)||"?"==value?cont(typearg):":"==type2?cont(typeexpr):"spread"==type2?cont(typearg):pass(typeexpr)}function afterType(type2,value){return"<"==value?cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType):"|"==value||"."==type2||"&"==value?cont(typeexpr):"["==type2?cont(typeexpr,expect("]"),afterType):"extends"==value||"implements"==value?(cx.marked="keyword",cont(typeexpr)):"?"==value?cont(typeexpr,expect(":"),typeexpr):void 0}function maybeTypeArgs(_,value){if("<"==value)return cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType)}function typeparam(){return pass(typeexpr,maybeTypeDefault)}function maybeTypeDefault(_,value){if("="==value)return cont(typeexpr)}function vardef(_,value){return"enum"==value?(cx.marked="keyword",cont(enumdef)):pass(pattern,maybetype,maybeAssign,vardefCont)}function pattern(type2,value){return isTS&&isModifier(value)?(cx.marked="keyword",cont(pattern)):"variable"==type2?(register(value),cont()):"spread"==type2?cont(pattern):"["==type2?contCommasep(eltpattern,"]"):"{"==type2?contCommasep(proppattern,"}"):void 0}function proppattern(type2,value){return"variable"!=type2||cx.stream.match(/^\s*:/,!1)?("variable"==type2&&(cx.marked="property"),"spread"==type2?cont(pattern):"}"==type2?pass():"["==type2?cont(expression,expect("]"),expect(":"),proppattern):cont(expect(":"),pattern,maybeAssign)):(register(value),cont(maybeAssign))}function eltpattern(){return pass(pattern,maybeAssign)}function maybeAssign(_type,value){if("="==value)return cont(expressionNoComma)}function vardefCont(type2){if(","==type2)return cont(vardef)}function maybeelse(type2,value){if("keyword b"==type2&&"else"==value)return cont(pushlex("form","else"),statement,poplex)}function forspec(type2,value){return"await"==value?cont(forspec):"("==type2?cont(pushlex(")"),forspec1,poplex):void 0}function forspec1(type2){return"var"==type2?cont(vardef,forspec2):"variable"==type2?cont(forspec2):pass(forspec2)}function forspec2(type2,value){return")"==type2?cont():";"==type2?cont(forspec2):"in"==value||"of"==value?(cx.marked="keyword",cont(expression,forspec2)):pass(expression,forspec2)}function functiondef(type2,value){return"*"==value?(cx.marked="keyword",cont(functiondef)):"variable"==type2?(register(value),cont(functiondef)):"("==type2?cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,statement,popcontext):isTS&&"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondef):void 0}function functiondecl(type2,value){return"*"==value?(cx.marked="keyword",cont(functiondecl)):"variable"==type2?(register(value),cont(functiondecl)):"("==type2?cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,popcontext):isTS&&"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondecl):void 0}function typename(type2,value){return"keyword"==type2||"variable"==type2?(cx.marked="type",cont(typename)):"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex):void 0}function funarg(type2,value){return"@"==value&&cont(expression,funarg),"spread"==type2?cont(funarg):isTS&&isModifier(value)?(cx.marked="keyword",cont(funarg)):isTS&&"this"==type2?cont(maybetype,maybeAssign):pass(pattern,maybetype,maybeAssign)}function classExpression(type2,value){return"variable"==type2?className(type2,value):classNameAfter(type2,value)}function className(type2,value){if("variable"==type2)return register(value),cont(classNameAfter)}function classNameAfter(type2,value){return"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex,classNameAfter):"extends"==value||"implements"==value||isTS&&","==type2?("implements"==value&&(cx.marked="keyword"),cont(isTS?typeexpr:expression,classNameAfter)):"{"==type2?cont(pushlex("}"),classBody,poplex):void 0}function classBody(type2,value){return"async"==type2||"variable"==type2&&("static"==value||"get"==value||"set"==value||isTS&&isModifier(value))&&cx.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(cx.marked="keyword",cont(classBody)):"variable"==type2||"keyword"==cx.style?(cx.marked="property",cont(classfield,classBody)):"number"==type2||"string"==type2?cont(classfield,classBody):"["==type2?cont(expression,maybetype,expect("]"),classfield,classBody):"*"==value?(cx.marked="keyword",cont(classBody)):isTS&&"("==type2?pass(functiondecl,classBody):";"==type2||","==type2?cont(classBody):"}"==type2?cont():"@"==value?cont(expression,classBody):void 0}function classfield(type2,value){if("!"==value)return cont(classfield);if("?"==value)return cont(classfield);if(":"==type2)return cont(typeexpr,maybeAssign);if("="==value)return cont(expressionNoComma);var context=cx.state.lexical.prev;return pass(context&&"interface"==context.info?functiondecl:functiondef)}function afterExport(type2,value){return"*"==value?(cx.marked="keyword",cont(maybeFrom,expect(";"))):"default"==value?(cx.marked="keyword",cont(expression,expect(";"))):"{"==type2?cont(commasep(exportField,"}"),maybeFrom,expect(";")):pass(statement)}function exportField(type2,value){return"as"==value?(cx.marked="keyword",cont(expect("variable"))):"variable"==type2?pass(expressionNoComma,exportField):void 0}function afterImport(type2){return"string"==type2?cont():"("==type2?pass(expression):"."==type2?pass(maybeoperatorComma):pass(importSpec,maybeMoreImports,maybeFrom)}function importSpec(type2,value){return"{"==type2?contCommasep(importSpec,"}"):("variable"==type2&&register(value),"*"==value&&(cx.marked="keyword"),cont(maybeAs))}function maybeMoreImports(type2){if(","==type2)return cont(importSpec,maybeMoreImports)}function maybeAs(_type,value){if("as"==value)return cx.marked="keyword",cont(importSpec)}function maybeFrom(_type,value){if("from"==value)return cx.marked="keyword",cont(expression)}function arrayLiteral(type2){return"]"==type2?cont():pass(commasep(expressionNoComma,"]"))}function enumdef(){return pass(pushlex("form"),pattern,expect("{"),pushlex("}"),commasep(enummember,"}"),poplex,poplex)}function enummember(){return pass(pattern,maybeAssign)}function isContinuedStatement(state,textAfter){return"operator"==state.lastType||","==state.lastType||isOperatorChar.test(textAfter.charAt(0))||/[,.]/.test(textAfter.charAt(0))}function expressionAllowed(stream,state,backUp){return state.tokenize==tokenBase&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType)||"quasi"==state.lastType&&/\{\s*$/.test(stream.string.slice(0,stream.pos-(backUp||0)))}return __name(pushcontext,"pushcontext"),__name(pushblockcontext,"pushblockcontext"),pushcontext.lex=pushblockcontext.lex=!0,__name(popcontext,"popcontext"),popcontext.lex=!0,__name(pushlex,"pushlex"),__name(poplex,"poplex"),poplex.lex=!0,__name(expect,"expect"),__name(statement,"statement"),__name(maybeCatchBinding,"maybeCatchBinding"),__name(expression,"expression"),__name(expressionNoComma,"expressionNoComma"),__name(parenExpr,"parenExpr"),__name(expressionInner,"expressionInner"),__name(maybeexpression,"maybeexpression"),__name(maybeoperatorComma,"maybeoperatorComma"),__name(maybeoperatorNoComma,"maybeoperatorNoComma"),__name(quasi,"quasi"),__name(continueQuasi,"continueQuasi"),__name(arrowBody,"arrowBody"),__name(arrowBodyNoComma,"arrowBodyNoComma"),__name(maybeTarget,"maybeTarget"),__name(target,"target"),__name(targetNoComma,"targetNoComma"),__name(maybelabel,"maybelabel"),__name(property,"property"),__name(objprop,"objprop"),__name(getterSetter,"getterSetter"),__name(afterprop,"afterprop"),__name(commasep,"commasep"),__name(contCommasep,"contCommasep"),__name(block,"block"),__name(maybetype,"maybetype"),__name(maybetypeOrIn,"maybetypeOrIn"),__name(mayberettype,"mayberettype"),__name(isKW,"isKW"),__name(typeexpr,"typeexpr"),__name(maybeReturnType,"maybeReturnType"),__name(typeprops,"typeprops"),__name(typeprop,"typeprop"),__name(quasiType,"quasiType"),__name(continueQuasiType,"continueQuasiType"),__name(typearg,"typearg"),__name(afterType,"afterType"),__name(maybeTypeArgs,"maybeTypeArgs"),__name(typeparam,"typeparam"),__name(maybeTypeDefault,"maybeTypeDefault"),__name(vardef,"vardef"),__name(pattern,"pattern"),__name(proppattern,"proppattern"),__name(eltpattern,"eltpattern"),__name(maybeAssign,"maybeAssign"),__name(vardefCont,"vardefCont"),__name(maybeelse,"maybeelse"),__name(forspec,"forspec"),__name(forspec1,"forspec1"),__name(forspec2,"forspec2"),__name(functiondef,"functiondef"),__name(functiondecl,"functiondecl"),__name(typename,"typename"),__name(funarg,"funarg"),__name(classExpression,"classExpression"),__name(className,"className"),__name(classNameAfter,"classNameAfter"),__name(classBody,"classBody"),__name(classfield,"classfield"),__name(afterExport,"afterExport"),__name(exportField,"exportField"),__name(afterImport,"afterImport"),__name(importSpec,"importSpec"),__name(maybeMoreImports,"maybeMoreImports"),__name(maybeAs,"maybeAs"),__name(maybeFrom,"maybeFrom"),__name(arrayLiteral,"arrayLiteral"),__name(enumdef,"enumdef"),__name(enummember,"enummember"),__name(isContinuedStatement,"isContinuedStatement"),__name(expressionAllowed,"expressionAllowed"),{startState:function(basecolumn){var state={tokenize:tokenBase,lastType:"sof",cc:[],lexical:new JSLexical((basecolumn||0)-indentUnit,0,"block",!1),localVars:parserConfig.localVars,context:parserConfig.localVars&&new Context(null,null,!1),indented:basecolumn||0};return parserConfig.globalVars&&"object"==typeof parserConfig.globalVars&&(state.globalVars=parserConfig.globalVars),state},token:function(stream,state){if(stream.sol()&&(state.lexical.hasOwnProperty("align")||(state.lexical.align=!1),state.indented=stream.indentation(),findFatArrow(stream,state)),state.tokenize!=tokenComment&&stream.eatSpace())return null;var style=state.tokenize(stream,state);return"comment"==type?style:(state.lastType="operator"!=type||"++"!=content&&"--"!=content?type:"incdec",parseJS(state,style,type,content,stream))},indent:function(state,textAfter){if(state.tokenize==tokenComment||state.tokenize==tokenQuasi)return CodeMirror.Pass;if(state.tokenize!=tokenBase)return 0;var top,firstChar=textAfter&&textAfter.charAt(0),lexical=state.lexical;if(!/^\s*else\b/.test(textAfter))for(var i=state.cc.length-1;i>=0;--i){var c=state.cc[i];if(c==poplex)lexical=lexical.prev;else if(c!=maybeelse&&c!=popcontext)break}for(;("stat"==lexical.type||"form"==lexical.type)&&("}"==firstChar||(top=state.cc[state.cc.length-1])&&(top==maybeoperatorComma||top==maybeoperatorNoComma)&&!/^[,\.=+\-*:?[\(]/.test(textAfter));)lexical=lexical.prev;statementIndent&&")"==lexical.type&&"stat"==lexical.prev.type&&(lexical=lexical.prev);var type2=lexical.type,closing=firstChar==type2;return"vardef"==type2?lexical.indented+("operator"==state.lastType||","==state.lastType?lexical.info.length+1:0):"form"==type2&&"{"==firstChar?lexical.indented:"form"==type2?lexical.indented+indentUnit:"stat"==type2?lexical.indented+(isContinuedStatement(state,textAfter)?statementIndent||indentUnit:0):"switch"!=lexical.info||closing||0==parserConfig.doubleIndentSwitch?lexical.align?lexical.column+(closing?0:1):lexical.indented+(closing?0:indentUnit):lexical.indented+(/^(?:case|default)\b/.test(textAfter)?indentUnit:2*indentUnit)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:jsonMode?null:"/*",blockCommentEnd:jsonMode?null:"*/",blockCommentContinue:jsonMode?null:" * ",lineComment:jsonMode?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:jsonMode?"json":"javascript",jsonldMode:jsonldMode,jsonMode:jsonMode,expressionAllowed:expressionAllowed,skipExpression:function(state){parseJS(state,"atom","atom","true",new CodeMirror.StringStream("",2,null))}}})),CodeMirror.registerHelper("wordChars","javascript",/[\w$]/),CodeMirror.defineMIME("text/javascript","javascript"),CodeMirror.defineMIME("text/ecmascript","javascript"),CodeMirror.defineMIME("application/javascript","javascript"),CodeMirror.defineMIME("application/x-javascript","javascript"),CodeMirror.defineMIME("application/ecmascript","javascript"),CodeMirror.defineMIME("application/json",{name:"javascript",json:!0}),CodeMirror.defineMIME("application/x-json",{name:"javascript",json:!0}),CodeMirror.defineMIME("application/manifest+json",{name:"javascript",json:!0}),CodeMirror.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),CodeMirror.defineMIME("text/typescript",{name:"javascript",typescript:!0}),CodeMirror.defineMIME("application/typescript",{name:"javascript",typescript:!0});var javascript$1=_mergeNamespaces({__proto__:null,default:javascript$2.exports},[javascript$2.exports])}}]);