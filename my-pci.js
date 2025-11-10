define((function(){"use strict";const u=`<div class="my-pci">
    <input type="text" placeholder="Type your answer" />
</div>
`,c=`.my-pci {
    border: 1px solid #999;
    padding: 8px;
    border-radius: 4px;
    display: inline-block;
}
.my-pci input {
    font-size: 1rem;
    padding: 4px;
}
`;function s(){let t,e="";return{id:"my-pci",initialize(n,r){t=n,t.innerHTML=u;const i=t.querySelector("input");i.value=r?.value??"",e=i.value;const o=document.createElement("style");o.textContent=c,document.head.appendChild(o),i.addEventListener("input",()=>{e=i.value})},getState(){return{value:e}},reset(){const n=t.querySelector("input");n.value="",e=""},destroy(){t.innerHTML=""}}}return typeof window<"u"&&window.qtiCustomInteractionContext&&window.qtiCustomInteractionContext.register("my-pci",{getTypeIdentifier(){return"my-pci"},getInstance:function(t){const e=s();return e.initialize(t),{getResponse(){return{base:{string:e.getState().value}}},setResponse(n){const r=n?.base?.string??"";e.initialize(t,{value:r})},resetResponse(){e.reset()},destroy(){e.destroy()}}}}),s}));
