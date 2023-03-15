"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[87],{87:(Fe,z,l)=>{l.r(z),l.d(z,{VideosPageModule:()=>Ee});var y=l(6895),at=l(433),d=l(2723),Y=l(1407),n=l(8256),G=l(2468),s=l(655),B=l(7579);const U={now:()=>(U.delegate||Date).now(),delegate:void 0};class ct extends B.x{constructor(i=1/0,t=1/0,o=U){super(),this._bufferSize=i,this._windowTime=t,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,t)}next(i){const{isStopped:t,_buffer:o,_infiniteTimeWindow:r,_timestampProvider:a,_windowTime:c}=this;t||(o.push(i),!r&&o.push(a.now()+c)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(i),{_infiniteTimeWindow:o,_buffer:r}=this,a=r.slice();for(let c=0;c<a.length&&!i.closed;c+=o?1:2)i.next(a[c]);return this._checkFinalizedStatuses(i),t}_trimBuffer(){const{_bufferSize:i,_timestampProvider:t,_buffer:o,_infiniteTimeWindow:r}=this,a=(r?1:2)*i;if(i<1/0&&a<o.length&&o.splice(0,o.length-a),!r){const c=t.now();let u=0;for(let R=1;R<o.length&&o[R]<=c;R+=2)u=R;u&&o.splice(0,u+1)}}}var lt=l(9300),dt=l(4482),ht=l(5403),ut=l(8421),ft=l(5032),pt="object"==typeof global&&global&&global.Object===Object&&global,vt="object"==typeof self&&self&&self.Object===Object&&self,yt=(pt||vt||Function("return this")()).Symbol,J=Object.prototype,wt=J.hasOwnProperty,bt=J.toString,w=yt?yt.toStringTag:void 0;var Ct=Object.prototype.toString;var K=yt?yt.toStringTag:void 0;const b=function It(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":K&&K in Object(e)?function Mt(e){var i=wt.call(e,w),t=e[w];try{e[w]=void 0;var o=!0}catch(a){}var r=bt.call(e);return o&&(i?e[w]=t:delete e[w]),r}(e):function Ot(e){return Ct.call(e)}(e)},X=function Nt(e){return null==e},q=Array.isArray,P=function Lt(e){return null!=e&&"object"==typeof e};var tt=yt?yt.prototype:void 0,et=tt?tt.toString:void 0;const Bt=function it(e){if("string"==typeof e)return e;if(q(e))return function Rt(e,i){for(var t=-1,o=null==e?0:e.length,r=Array(o);++t<o;)r[t]=i(e[t],t,e);return r}(e,it)+"";if(function Wt(e){return"symbol"==typeof e||P(e)&&"[object Symbol]"==b(e)}(e))return et?et.call(e):"";var i=e+"";return"0"==i&&1/e==-1/0?"-0":i};var Kt=0;const qt=function Xt(e){var i=++Kt;return function Ut(e){return null==e?"":Bt(e)}(e)+i};let nt=(()=>{class e{constructor(){this.destroyed$$=new ct(1),this.destroyed$=this.destroyed$$.asObservable()}ngOnDestroy(){this.destroyed$$&&!this.destroyed$$.closed&&(this.destroyed$$.next(),this.destroyed$$.complete())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=n.lG2({type:e,selectors:[["","inViewportDestroyable",""]],standalone:!0}),e})();var V,S;const $=new WeakMap;class de{get value(){return(0,s.Q_)(this,V,"f")}get id(){return(0,s.Q_)(this,S,"f")}constructor(i){var t;V.set(this,void 0),S.set(this,void 0),(0,s.YH)(this,V,function Et(e){if(!function jt(e){var i=typeof e;return null!=e&&("object"==i||"function"==i)}(e))return!1;var i=b(e);return"[object Function]"==i||"[object GeneratorFunction]"==i||"[object AsyncFunction]"==i||"[object Proxy]"==i}(i)?i:void 0,"f");let o=null!==(t=$.get(i))&&void 0!==t?t:"in-viewport-empty-check-fn";!X(i)&&!$.has(i)&&$.set(i,o=qt("in-viewport-check-fn-")),(0,s.YH)(this,S,o,"f")}}V=new WeakMap,S=new WeakMap;var I,M,m,j,x,T,v,k,p=(()=>{return(e=p||(p={})).BOTH="both",e.VERTICAL="vertical",e.HORIZONTAL="horizontal",p;var e})();class he extends TypeError{constructor(){super(`The provided value for the direction is incorrect. The value must be any of \`${Object.values(p).join("|")}\`.`)}}class ue extends TypeError{constructor(){super("The provided value for the rootMargin is incorrect. The value must be specified in pixels or percent.")}}class fe extends TypeError{constructor(){super("The provided value for the root is incorrect. The value must be of type '(Document or Element)'.")}}class ge extends TypeError{constructor(){super("The provided values for the threshold are incorrect. The values must be numbers between 0 and 1.")}}class pe{get value(){return(0,s.Q_)(this,I,"f")}constructor(i=p.VERTICAL){if(I.set(this,void 0),!Object.values(p).includes(i))throw new he;(0,s.YH)(this,I,i,"f")}}I=new WeakMap;class ve{constructor(i,t){M.set(this,new Set),m.set(this,void 0),j.set(this,void 0),(0,s.YH)(this,m,new IntersectionObserver((...o)=>{t.next(...o)},{root:i.root,rootMargin:i.rootMargin,threshold:[...i.threshold]}),"f"),(0,s.YH)(this,j,()=>{(0,s.Q_)(this,m,"f").disconnect(),t.complete()},"f")}addNode(i){(0,s.Q_)(this,M,"f").add(i),(0,s.Q_)(this,m,"f").observe(i)}deleteNode(i){(0,s.Q_)(this,M,"f").delete(i),(0,s.Q_)(this,M,"f").size?(0,s.Q_)(this,m,"f").unobserve(i):(0,s.Q_)(this,j,"f").call(this)}}M=new WeakMap,m=new WeakMap,j=new WeakMap;class f{constructor(i){v.set(this,new WeakMap),k.set(this,void 0),(0,s.YH)(this,k,i,"f")}addNode(i,t){var o,r;const a=null!==(o=(0,s.Q_)(this,v,"f").get(null!==(r=t.root)&&void 0!==r?r:(0,s.Q_)(f,x,"f",T)))&&void 0!==o?o:this.create(t),c=t[F];a.has(c)||this.insert(a,t),a.get(c).addNode(i)}deleteNode(i,t){var o;const r=(0,s.Q_)(this,v,"f").get(null!==(o=t.root)&&void 0!==o?o:(0,s.Q_)(f,x,"f",T)),a=t[F];var c;r&&r.has(a)&&r.get(a).deleteNode(i),r&&0===r.size&&(0,s.Q_)(this,v,"f").delete(null!==(c=t.root)&&void 0!==c?c:(0,s.Q_)(f,x,"f",T))}create(i){var t;const o=new Map;return(0,s.Q_)(this,v,"f").set(null!==(t=i.root)&&void 0!==t?t:(0,s.Q_)(f,x,"f",T),o),this.insert(o,i),o}insert(i,t){const o=t[F],r=new ve(t,{next:(...a)=>{(0,s.Q_)(this,k,"f").call(this,...a)},complete:()=>{i.delete(o)}});i.set(o,r)}}x=f,v=new WeakMap,k=new WeakMap,T={value:Object.create(null)};const L=e=>Array.isArray(e)?`[${e.map(L).join(",")}]`:(e=>"[object Object]"===Object.prototype.toString.call(e))(e)?Object.entries(e).sort(([i],[t])=>String(i).localeCompare(String(t))).map(([i,t])=>`${i}:${L(t)}`).join("|"):String(e);var D,A,Q,Z,h,E;class ye{get value(){return(0,s.Q_)(this,D,"f")}constructor(i){D.set(this,void 0),(0,s.YH)(this,D,!function ee(e){return!0===e||!1===e||P(e)&&"[object Boolean]"==b(e)}(i)||i,"f")}}D=new WeakMap;class H{get value(){return(0,s.Q_)(this,A,"f")}constructor(i){A.set(this,void 0),(0,s.YH)(this,A,H.parse(i),"f")}static parse(i){const o=(function oe(e){return"string"==typeof e||!q(e)&&P(e)&&"[object String]"==b(e)}(i)?i.trim():"0px").split(/\s+/);if(o.length<=4&&o.every(r=>/^-?\d*\.?\d+(px|%)$/.test(r))){const[r,a=r,c=r,u=a]=o;return`${r} ${a} ${c} ${u}`}throw new ue}}A=new WeakMap;class W{get value(){return(0,s.Q_)(this,Q,"f")}constructor(i){Q.set(this,void 0),(0,s.YH)(this,Q,W.validate(i),"f")}static validate(i){if(X(i))return null;if(i instanceof Element&&i.nodeType===Node.ELEMENT_NODE)return i;throw new fe}}Q=new WeakMap;class C{get value(){return(0,s.Q_)(this,Z,"f")}constructor(i){Z.set(this,void 0),(0,s.YH)(this,Z,C.validate(null!=i?i:[0,1]),"f")}static validate(i){if(C.isValid(i))return[i];if(Array.isArray(i)&&i.every(t=>C.isValid(t)))return i.sort();throw new ge}static isValid(i){return function ae(e){return"number"==typeof e||P(e)&&"[object Number]"==b(e)}(i)&&i>=0&&i<=1}}Z=new WeakMap;const ot=Symbol("InViewportCheckFnId"),F=Symbol("InViewportConfigHash");class rt{get root(){return(0,s.Q_)(this,h,"f").root.value}get rootMargin(){return(0,s.Q_)(this,h,"f").rootMargin.value}get threshold(){return(0,s.Q_)(this,h,"f").threshold.value}get partial(){return(0,s.Q_)(this,h,"f").partial.value}get direction(){return(0,s.Q_)(this,h,"f").direction.value}get checkFn(){return(0,s.Q_)(this,h,"f").checkFn.value}get[(h=new WeakMap,E=new WeakMap,ot)](){return(0,s.Q_)(this,h,"f").checkFn.id}get[F](){return(0,s.Q_)(this,E,"f")}constructor(i){var t;h.set(this,void 0),E.set(this,void 0),null!==(t=i)&&void 0!==t||(i={}),(0,s.YH)(this,h,Object.freeze({root:new W(i.root),rootMargin:new H(i.rootMargin),threshold:new C(i.threshold),partial:new ye(i.partial),direction:new pe(i.direction),checkFn:new de(i.checkFn)}),"f"),(0,s.YH)(this,E,(e=>{try{const i=globalThis.encodeURI(e);return globalThis.btoa(i)}catch(i){return e}})(L({rootMargin:this.rootMargin,threshold:this.threshold,partial:this.partial,direction:this.direction,checkFn:this[ot]})),"f")}}var N,O;class _{constructor(i){this.zone=i,N.set(this,new B.x),O.set(this,void 0),this.trigger$=(0,s.Q_)(this,N,"f").asObservable(),this.zone.runOutsideAngular(()=>{(0,s.YH)(this,O,new f(t=>{Array.isArray(t)&&t.length&&t.forEach(o=>(0,s.Q_)(this,N,"f").next(o))}),"f")})}register(i,t){this.zone.runOutsideAngular(()=>{(0,s.Q_)(this,O,"f").addNode(i,t)})}unregister(i,t){this.zone.runOutsideAngular(()=>{(0,s.Q_)(this,O,"f").deleteNode(i,t)})}}N=new WeakMap,O=new WeakMap,_.\u0275fac=function(i){return new(i||_)(n.LFG(n.R0b))},_.\u0275prov=n.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"});const st=Symbol("InViewportMetadata");let we=(()=>{class e{set options(t){this.config=new rt(t)}get nativeElement(){return this.elementRef.nativeElement}constructor(t,o,r,a,c){this.platformId=t,this.changeDetectorRef=o,this.elementRef=r,this.inViewportService=a,this.destroyable=c,this.inViewportAction=new n.vpe,this.inViewportCustomCheck=new n.vpe,this.config=new rt({})}ngAfterViewInit(){(0,y.NF)(this.platformId)?(this.inViewportService.trigger$.pipe((0,lt.h)(t=>t.target===this.nativeElement),function gt(e){return(0,dt.e)((i,t)=>{(0,ut.Xf)(e).subscribe((0,ht.x)(t,()=>t.complete(),ft.Z)),!t.closed&&i.subscribe(t)})}(this.destroyable.destroyed$)).subscribe(t=>{this.emit(t,!1),this.changeDetectorRef.markForCheck()}),this.inViewportService.register(this.nativeElement,this.config)):this.emit(void 0,!0)}ngOnDestroy(){(0,y.NF)(this.platformId)&&this.inViewportService.unregister(this.nativeElement,this.config)}isVisible(t){return this.config.partial?t.isIntersecting||t.intersectionRatio>0:t.intersectionRatio>=1}emit(t,o){this.inViewportAction.emit({[st]:{entry:t},target:this.nativeElement,visible:o||!t||this.isVisible(t)}),this.config.checkFn&&this.inViewportCustomCheck.emit(this.config.checkFn(t,{force:o,config:this.config}))}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(n.Lbi),n.Y36(n.sBO),n.Y36(n.SBq),n.Y36(_),n.Y36(nt))},e.\u0275dir=n.lG2({type:e,selectors:[["","inViewport",""]],inputs:{options:["inViewportOptions","options"]},outputs:{inViewportAction:"inViewportAction",inViewportCustomCheck:"inViewportCustomCheck"},standalone:!0,features:[n.zW0([nt])]}),e})();var be=l(529),Me=l(1101);const xe=["player"];function Te(e,i){1&e&&(n.TgZ(0,"div",4)(1,"div"),n._UZ(2,"ion-spinner",5),n.TgZ(3,"ion-text"),n._uU(4,"Please wait..."),n.qZA()()())}function Ce(e,i){1&e&&(n.TgZ(0,"div"),n._UZ(1,"ion-icon",18),n.qZA())}function Oe(e,i){1&e&&(n.TgZ(0,"div"),n._UZ(1,"ion-icon",19),n.qZA())}function Pe(e,i){1&e&&(n.TgZ(0,"div"),n._UZ(1,"ion-icon",20),n.qZA())}const Ve=function(){return[0,.65]},Se=function(e){return{threshold:e}};function Ie(e,i){if(1&e){const t=n.EpF();n.TgZ(0,"div")(1,"div",7),n.NdJ("click",function(r){const c=n.CHM(t).$implicit,u=n.oxw(2);return n.KtG(u.changeVideoAudio(r,c.reels_id))}),n.TgZ(2,"div",8),n.YNc(3,Ce,2,0,"div",3),n.YNc(4,Oe,2,0,"div",3),n.YNc(5,Pe,2,0,"div",3),n.qZA(),n.TgZ(6,"div",9)(7,"div",10),n.NdJ("click",function(r){n.CHM(t);const a=n.oxw(2);return n.KtG(a.doLike(r))}),n._UZ(8,"ion-icon",11),n.TgZ(9,"ion-text"),n._uU(10,"129k"),n.qZA()(),n.TgZ(11,"div",12),n._UZ(12,"ion-icon",13),n.TgZ(13,"ion-text"),n._uU(14,"12k"),n.qZA()(),n.TgZ(15,"div",10),n.NdJ("click",function(r){const c=n.CHM(t).$implicit,u=n.oxw(2);return n.KtG(u.share(r,c.link))}),n._UZ(16,"ion-icon",14)(17,"ion-text"),n.qZA()(),n._UZ(18,"div",15),n.TgZ(19,"video",16),n.NdJ("inViewportAction",function(r){n.CHM(t);const a=n.oxw(2);return n.KtG(a.onIntersection(r))}),n._UZ(20,"source",17),n.qZA()()()}if(2&e){const t=i.$implicit,o=n.oxw(2);n.xp6(3),n.Q6J("ngIf",!0===o.showAmimation),n.xp6(1),n.Q6J("ngIf",!0===o.volumeAnimation&&!o.mute),n.xp6(1),n.Q6J("ngIf",!0===o.volumeAnimation&&o.mute),n.xp6(14),n.Q6J("inViewportOptions",n.VKq(8,Se,n.DdM(7,Ve)))("muted","true")("id","media-"+t.reels_id),n.xp6(1),n.Q6J("src","https://www.agnitotoday.com/"+t.source,n.LSH)}}function je(e,i){if(1&e&&(n.TgZ(0,"ion-list"),n.YNc(1,Ie,21,10,"div",6),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",t.dataService.videos)}}let ke=(()=>{class e{constructor(t,o,r,a){this.dataService=t,this.http=o,this.socialSharing=r,this.router=a,this.mute=!0,this.showAmimation=!1,this.volumeAnimation=!1,this.obj1={threshold:[0,.65],partial:!0}}ngOnInit(){return(0,s.mG)(this,void 0,void 0,function*(){})}didScroll(t){console.log(t)}onIntersection(t){const{[st]:{entry:o},target:r}=t,c=r;o.intersectionRatio>=.65?this.loadandPlay(c):c.pause()}loadandPlay(t){t.load(),t.play()}unloadand(t){t.unload()}changeVideoAudio(t,o){let r=document.getElementById("media-"+o);r.muted=!r.muted,this.mute=r.muted,this.volumeAnimation=!0,setTimeout(()=>{this.volumeAnimation=!1},1200)}handleRefresh(t){setTimeout(()=>{this.dataService.getAllVideos(),console.log(this.dataService.BaseUrl),t.target.complete()},2e3)}loadData(t){setTimeout(()=>{this.dataService.getMoreVideos(),t.target.complete(),1e3==this.dataService.postData.length&&(t.target.disabled=!0)},500)}toggleInfiniteScroll(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}gotoDetailsPage(t){console.log(t.categories),this.dataService.getRelatedArticle(t.categories[0]),this.dataService.selectedPost=t,this.router.navigate(["tabs/tab1/post-details"])}selectPost(t){this.dataService.selectedPost=[]}removeTag(t){var o=t=t.replace(/(<([^>]+)>)/gi," "),r=document.createElement("div");return r.innerHTML=o,r.textContent||r.innerText||" "}share(t,o){t.stopPropagation(),console.log(o),this.socialSharing.share(o)}doLike(t){t.stopPropagation(),this.showAmimation=!0,setTimeout(()=>{this.showAmimation=!1},1200)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(G.D),n.Y36(be.eN),n.Y36(Me.e),n.Y36(Y.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-video-list"]],viewQuery:function(t,o){if(1&t&&(n.Gf(d.ju,5),n.Gf(d.aJ,5),n.Gf(xe,5)),2&t){let r;n.iGM(r=n.CRH())&&(o.infiniteScroll=r.first),n.iGM(r=n.CRH())&&(o.virtualScroll=r.first),n.iGM(r=n.CRH())&&(o.videoPlayer=r)}},decls:5,vars:2,consts:[[2,"overflow","scroll","scroll-behavior","smooth"],["class","noDataDive",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],[1,"noDataDive"],["name","crescent"],[4,"ngFor","ngForOf"],[1,"itemDiv",3,"click"],[1,"mid"],[1,"btnRow"],[1,"share-btn",3,"click"],["name","heart-outline"],[1,"share-btn"],["name","eye-outline"],["name","share-social-sharp"],[1,"overlay"],["width","100%","height","100%","inViewport","","playsinline","","loop","","poster","../../../assets/Logo-name.png",1,"video-media",3,"inViewportOptions","muted","id","inViewportAction"],["type","video/mp4",3,"src"],["name","heart",1,"like","likeEffect"],["name","volume-high-outline",1,"volume","likeEffect"],["name","volume-mute-outline",1,"novolume","likeEffect"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0),n.YNc(1,Te,5,0,"div",1),n.TgZ(2,"ion-refresher",2),n.NdJ("ionRefresh",function(a){return o.handleRefresh(a)}),n._UZ(3,"ion-refresher-content"),n.qZA(),n.YNc(4,je,2,1,"ion-list",3),n.qZA()),2&t&&(n.xp6(1),n.Q6J("ngIf",o.dataService.isLoading),n.xp6(3),n.Q6J("ngIf",o.dataService.postData))},dependencies:[y.sg,y.O5,d.gu,d.q_,d.nJ,d.Wo,d.PQ,d.yW,we],styles:["ion-avatar[_ngcontent-%COMP%]{--border-radius: 4px}ion-list[_ngcontent-%COMP%]{padding-top:0;overflow:auto!important;scroll-snap-type:y mandatory!important}ion-list[_ngcontent-%COMP%], .itemDiv[_ngcontent-%COMP%]{max-width:100%!important;height:100vh!important}.itemDiv[_ngcontent-%COMP%]{height:100vh!important;width:100vw!important;scroll-snap-align:start}img[_ngcontent-%COMP%]{border-radius:5px;height:85px;width:130px}.post[_ngcontent-%COMP%]{text-overflow:ellipsis;line-height:5px}ion-text[_ngcontent-%COMP%]{position:relative;font-size:15px;color:#000;width:250px;font-weight:600}.text-concat[_ngcontent-%COMP%]{position:relative;display:inline;overflow:hidden;max-height:49.6px;line-height:16px}.text.ellipsis[_ngcontent-%COMP%]{height:48px;overflow:hidden}.cardDetailsDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding-left:10px;padding-right:0;width:80%}.btnRow[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:0;font-size:20px;bottom:64px;right:15px;z-index:9999;flex-direction:column;position:absolute;height:140px;align-items:center;text-align:center}.share-btn[_ngcontent-%COMP%]{text-align:end;color:#fff}.share-btn[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{display:block;color:#fff;font-size:10px}.shareBtns[_ngcontent-%COMP%]{display:flex;justify-content:space-between;width:50px}.mid[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-top:0;font-size:20px;z-index:9999;flex-direction:column;position:absolute;justify-content:center;align-self:center;height:100%;font-size:50px;color:#fff}.mid[_ngcontent-%COMP%]   .likeEffect[_ngcontent-%COMP%]{animation:2s _ngcontent-%COMP%_like-heart-animation ease-in-out forwards}@keyframes _ngcontent-%COMP%_like-heart-animation{0%,to{opacity:0;transform:scale(0)}15%{opacity:.9;transform:scale(1.2)}30%{transform:scale(.95)}45%,80%{opacity:.9;transform:scale(1)}}.noDataDive[_ngcontent-%COMP%]{height:77vh;width:100vw;justify-content:center;align-items:center;text-align:center;display:flex}.noDataDive[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:-6px}.itemDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column;border-bottom:1px solid #D3D3D3;position:relative}.itemDiv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover!important}.overlay[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;background:linear-gradient(271deg,rgba(31,19,19,.2509803922),transparent)}[_ngcontent-%COMP%]::-webkit-scrollbar{display:none!important}ion-content[_ngcontent-%COMP%]::webkit-scrollbar{display:none!important}*[_ngcontent-%COMP%]::-webkit-scrollbar{display:none!important}ion-refresher[_ngcontent-%COMP%]{margin-top:110px}.hindiText[_ngcontent-%COMP%]{height:44px!important}.infiniteScroll[_ngcontent-%COMP%]{height:10px!important}.infinite-loading[_ngcontent-%COMP%]   infinite-loading-spinner[_ngcontent-%COMP%]{display:none!important}.infinite-loading[_ngcontent-%COMP%]{display:none!important}"]}),e})();const De=["player"],Ae=[{path:"",component:(()=>{class e{constructor(t){this.dataService=t,this.currentPlaying=null}ngOnInit(){console.log("running")}didScroll(t){console.log(t),(!this.currentPlaying||!this.isEventInViewport(this.currentPlaying))&&(this.currentPlaying&&!this.isEventInViewport(this.currentPlaying)&&(this.currentPlaying.pause(),this.currentPlaying=null),this.videoPlayer.forEach(o=>{if(console.log("player: ",o),this.currentPlaying)return;const r=o.nativeElement;this.isEventInViewport(r)&&(this.currentPlaying=r,this.currentPlaying.muted=!0,this.currentPlaying.play())}))}isEventInViewport(t){const o=t.getBoundingClientRect();return o.top>=0&&o.left>=0&&o.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&o.bottom<=(window.innerWidth||document.documentElement.clientWidth)}changeVideoAudio(t,o){let r=document.getElementById("media-"+o);r.muted=!r.muted,setTimeout(()=>{},1200)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(G.D))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-videos"]],viewQuery:function(t,o){if(1&t&&n.Gf(De,5),2&t){let r;n.iGM(r=n.CRH())&&(o.videoPlayer=r)}},decls:2,vars:0,template:function(t,o){1&t&&(n.TgZ(0,"ion-content"),n._UZ(1,"app-video-list"),n.qZA())},dependencies:[d.W2,ke],styles:[".noDataDive[_ngcontent-%COMP%]{height:77vh;width:100vw;justify-content:center;align-items:center;text-align:center;display:flex}.noDataDive[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{margin-right:10px;margin-bottom:-6px}"]}),e})()}];let Qe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[Y.Bz.forChild(Ae),Y.Bz]}),e})();var Ze=l(6472);let Ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[y.ez,at.u5,d.Pc,Qe,Ze.K]}),e})()}}]);