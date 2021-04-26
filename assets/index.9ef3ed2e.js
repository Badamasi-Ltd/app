import{C as e,o as t,c as a,a as l,q as s,r,t as i,b as n,F as o,d,e as h,f as u}from"./vendor.291280e3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const l=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,r)=>{const i=new URL(e,l);if(self[t].moduleMap[i])return a(self[t].moduleMap[i]);const n=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){r(new Error(`Failed to import: ${e}`)),s(o)},onload(){a(self[t].moduleMap[i]),s(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/upwork_visualization/assets/");const c={name:"EarningChart",props:{labels:{required:!0,type:Array},datasets:{required:!0,type:Array}},data(){return{ChartData:{type:"line",data:{labels:this.labels,datasets:[{label:"Earning",data:this.datasets.earning,backgroundColor:"#289c38",borderColor:"#39db4f",borderWidth:3},{label:"Withdraw",data:this.datasets.withdraw,backgroundColor:"#db3939",borderColor:"#fc6262s",borderWidth:1},{label:"Service Fee",data:this.datasets.serviceFee,backgroundColor:"#32b8c9",borderColor:"#53cbdb",borderWidth:1},{label:"Membership",data:this.datasets.membership,backgroundColor:"#9d34d1",borderColor:"#a556cc",borderWidth:1},{label:"Refund",data:this.datasets.refund,backgroundColor:"#e6dd37",borderColor:"#e3dd68",borderWidth:1},{label:"Withdraw Fee",data:this.datasets.withdrawFee,backgroundColor:"#f08d30",borderColor:"#f0a660",borderWidth:1}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!1,padding:10}}]}}}}},mounted(){const t=document.getElementById("chart");new e(t,this.ChartData)}},p=l("canvas",{id:"chart"},null,-1);c.render=function(e,l,s,r,i,n){return t(),a("div",null,[p])};const m={name:"Home",components:{Vue3ChartJs:s,EarningChart:c},data:()=>({error:null,labels:[],dataset:[],loading:!1,loaded:!1,data:{},earning:[],withdraw:[],serviceFee:[],membership:[],withdrawFee:[],refund:[],validType:["application/vnd.ms-excel","text/csv"]}),methods:{clear(){confirm("Are you sure, this action can not be undone")&&(this.data=[],this.loaded=!1,this.refund=[],this.withdrawFee=[],this.serviceFee=[],this.dataset=[],this.labels=[],this.withdraw=[],this.membership=[],this.earning=[])},sum(e){let t=0;for(let a in e)t+=Math.abs(e[a].Amount);return t},readfile(e){let t=new FileReader;t.onload=()=>{this.data=JSON.parse(function(e){let t=e.split("\n"),a=[],l=t[0].split(",");for(let s=1;s<t.length;s++){let e={},r=t[s].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<l.length;t++)e[l[t]]=r[t];a.push(e)}return JSON.stringify(a)}(t.result));let e=[],a=[],l=[],s=[],r=[],i=[],n=[],o={earning:[],withdraw:[],membership:[],withdrawFee:[],serviceFee:[],refund:[]},d=["Fixed Price","Hourly","Bonus","Miscellaneous","Adjustment"];for(let t in this.data)!0===d.includes(this.data[t].Type)&&(e.push(this.data[t]),n.push(this.data[t].Date.replace('"',"").replace('"',"")),o.earning.push(Math.abs(this.data[t].Amount))),"Withdrawal"===this.data[t].Type&&(l.push(this.data[t]),o.withdraw.push(Math.abs(this.data[t].Amount))),"Service Fee"===this.data[t].Type&&(a.push(this.data[t]),o.serviceFee.push(Math.abs(this.data[t].Amount))),"Refund"===this.data[t].Type&&(s.push(this.data[t]),o.refund.push(Math.abs(this.data[t].Amount))),"Membership Fee"===this.data[t].Type&&(r.push(this.data[t]),o.membership.push(Math.abs(this.data[t].Amount))),"Withdrawal Fee"===this.data[t].Type&&(i.push(this.data[t]),o.withdrawFee.push(Math.abs(this.data[t].Amount)));this.labels=n,this.dataset=o,this.earning=e,this.serviceFee=a,this.withdraw=l,this.refund=s,this.membership=r,this.withdrawFee=i,this.loaded=!0},this.error=null,this.validType.includes(e.target.files[0].type)?t.readAsBinaryString(e.target.files[0]):this.error="Please, select valid file type",e.target.value=""}},computed:{getFooterPosition(){return this.loaded?"noPrint":"fixed"},total(e){let t=this.sum(this.refund),a=0;for(let l in this.earning){let e=this.earning[l].Amount;if(0!==e)if(e>500){let t=e-500;a+=400,a+=t-.1*t}else a+=e-.2*e}return a-=t,{sum:parseFloat(a).toFixed(2),refund:parseFloat(t).toFixed(2),withdraw:parseFloat(this.sum(this.withdraw)).toFixed(2),fee:parseFloat(this.sum(this.serviceFee)).toFixed(2),membership:parseFloat(this.sum(this.membership)).toFixed(2),withdrawFee:parseFloat(this.sum(this.withdrawFee)).toFixed(2)}}}},b=l("nav",{class:"header noPrint"},[l("div",{class:"text ml-5"}," Upwork Visualization "),l("a",{class:"source",href:"https://github.com/lablnet/upwork_visualization"},"Source Code")],-1),f={class:"mt-5 justify-content-center"},w={class:"container"},g={key:0,class:""},y=l("h1",null,"Drop your file here.",-1),v={class:"form-group"},F=l("label",null,"File",-1),k={key:0,class:"text-danger"},C=l("h1",null,"How to get transaction history CSV?",-1),T=l("a",{target:"_blank",href:"https://support.upwork.com/hc/en-us/articles/211068188-Invoices-and-Transactions"}," Follow the follwing guide",-1),A={key:1,class:"col"},D=l("a",{style:{float:"right"},href:"javascript:window.print()",class:"noPrint"},"print this page",-1),M=l("br",null,null,-1),x=l("h1",null,"Here's is your report.",-1),S={key:2,class:"row mt-4"},U={class:"col-md-8"},j=l("h1",{class:"h2"},"Chart:",-1),R={style:{display:"flex","flex-direction":"column"}},W={class:"col-md-4"},_=l("h1",{class:"h2"},"Stats:",-1),P=l("b",null,"Total earning: ",-1),E=h(),H=h(),L=l("br",null,null,-1),I=l("b",null,"Total withdraw: ",-1),O=h(),$=h(),z=l("br",null,null,-1),B=l("b",null,"Total Withdraw Fee: ",-1),J=h(),q=h(),N=l("br",null,null,-1),V=l("b",null,"Total refund: ",-1),Z=h(),G=h(),K=l("br",null,null,-1),Q=l("b",null,"Total Upwork Fee: ",-1),X=h(),Y=h(),ee=l("br",null,null,-1),te=l("b",null,"Total Spend on Upwork: ",-1),ae=h(),le=h(),se=l("br",null,null,-1),re={key:3,class:"table-responsive"},ie=l("h1",{class:"mt-3 h2"},"Feeds:",-1),ne={class:"table table-primary"},oe=l("thead",null,[l("tr",null,[l("th",null,"ID"),l("th",null,"Date"),l("th",null,"Type"),l("th",null,"Team"),l("th",null,"Description"),l("th",null,"Amount")])],-1),de={key:0},he=l("p",{class:"note"},[l("b",null,"Note: This is an open source project built using Javascript, vuejs and chartjs, no server is involved here, your file is not uploaded to any server. For confirmation you can look to source code.")],-1),ue=l("p",{class:"copyright"},[h("Made with 💕 by "),l("a",{target:"_blank",href:"https://www.upwork.com/fl/lablnet"},"Muhammad Umer Farooq"),h(".")],-1),ce=l("a",{target:"_blank",href:"https://github.com/lablnet/upwork_visualization"},"Source Code",-1);m.render=function(e,s,h,u,c,p){const m=r("EarningChart");return t(),a(o,null,[b,l("main",f,[l("div",w,[c.loaded?n("",!0):(t(),a("div",g,[y,l("div",v,[F,l("input",{type:"file",onChange:s[1]||(s[1]=(...e)=>p.readfile&&p.readfile(...e)),class:"form-control-file"},null,32),c.error?(t(),a("span",k,i(c.error),1)):n("",!0)]),C,T])),c.loaded?(t(),a("div",A,[l("a",{style:{float:"left"},href:"javascript:void(0);",onClick:s[2]||(s[2]=(...e)=>p.clear&&p.clear(...e)),class:"noPrint"},"Clear"),D,M,x])):n("",!0),c.loaded?(t(),a("div",S,[l("div",U,[j,l("div",R,[l(m,{labels:c.labels,datasets:c.dataset},null,8,["labels","datasets"])])]),l("div",W,[_,P,E,l("i",null,i(p.total.sum)+" USD",1),H,L,I,O,l("i",null,i(p.total.withdraw)+" USD",1),$,z,B,J,l("i",null,i(p.total.withdrawFee)+" USD",1),q,N,V,Z,l("i",null,i(p.total.refund)+" USD",1),G,K,Q,X,l("i",null,i(p.total.fee)+" USD",1),Y,ee,te,ae,l("i",null,i(p.total.membership)+" USD",1),le,se])])):n("",!0),c.loaded?(t(),a("div",re,[ie,l("table",ne,[oe,(t(!0),a(o,null,d(c.earning,((e,s)=>(t(),a("tbody",{key:s},[e["Ref ID"]?(t(),a("tr",de,[l("td",null,i(e["Ref ID"]),1),l("td",null,i(e.Date.replace('"',"")),1),l("td",null,i(e.Type),1),l("td",null,i(e.Team),1),l("td",null,i(e.Description),1),l("td",null,i(e.Amount),1)])):n("",!0)])))),128))])])):n("",!0)])]),l("footer",{class:p.getFooterPosition},[he,ue,ce],2)],64)};const pe={name:"App",components:{Home:m}},me={class:""};pe.render=function(e,s,i,n,o,d){const h=r("Home");return t(),a("div",me,[l(h)])};u(pe).mount("#app");
