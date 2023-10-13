var O=(o={})=>{for(const a in o)Object.prototype.hasOwnProperty.call(o,a)&&o[a]===!0&&(o[a]=d[a]);const{Path:n,Cache:s,Logger:u,Map:m,Exclude:w,Action:S,CSS:g,HTML:h,Image:I,JavaScript:j,SVG:A}=p(d,o),c=new Set;if(typeof n<"u"&&(n instanceof Array||n instanceof Set))for(const a of n)c.add(a);return{name:"astro-compress",hooks:{"astro:build:done":async({dir:a})=>{if(typeof m=="object"){c.size||c.add(a),typeof s=="object"&&s.Search===x&&(s.Search=a);for(const[i,e]of Object.entries({CSS:g,HTML:h,Image:I,JavaScript:j,SVG:A})){if(!(e&&m[i]))return;f=p(S,p(S,{Wrote:async({Buffer:t,Input:r})=>{switch(i){case"CSS":return(await import("csso")).minify(t.toString(),e).css;case"HTML":return await(await import("html-minifier-terser")).minify(t.toString(),e);case"JavaScript":try{return(await(await import("terser")).minify(t.toString(),e)).code??t}catch(l){return console.log(r),console.log(l),t}case"Image":return(await import("../Function/Image.js")).default(e,{Buffer:t,Input:r});case"SVG":{const{data:l}=(await import("svgo")).optimize(t.toString(),e);return l??t}default:return t}},Fulfilled:async t=>t.Files>0?`Successfully compressed a total of ${t.Files} ${i} ${t.Files===1?"file":"files"} for ${await(await import("files-pipe/Target/Function/Bytes.js")).default(t.Info.Total)}.`:!1})),i==="Image"&&(f=p(f,{Read:async({Input:t})=>{const{format:r}=await y(t).metadata();return y(t,{failOn:"none",sequentialRead:!0,unlimited:!0,animated:r==="webp"||r==="gif"})}}));for(const t of c)await(await(await(await new M(s,u).In(t)).By(m[i]??"**/*")).Not(w)).Pipe(f)}}}}}};const{default:d}=await import("../Variable/Option.js"),{default:{Cache:{Search:x}}}=await import("files-pipe/Target/Variable/Option.js"),{default:p}=await import("typescript-esbuild/Target/Function/Merge.js"),{default:y}=await import("sharp");let f;const{default:M}=await import("files-pipe");export{d as Default,M as Files,p as Merge,x as Search,f as _Action,O as default,y as sharp};
