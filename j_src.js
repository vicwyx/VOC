// Copyright (C) 2014 bt4baidu@pdawiki forum
// http://pdawiki.com/forum
//
// This program is a free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, version 3 of the License.
//
// You can get a copy of GNU General Public License along this program
// But you can always get it from http://www.gnu.org/licenses/gpl.txt
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
x=null;
Z=null;
M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
D=[null,"F","A","N","B","S","M","T"];
function g(c,w){
R(c);
x.onload=function(){
if(x.readyState==4&&x.status==200&&x.responseText){
var h=r(x.responseText);
if(h){
with(c.parentNode.nextSibling){
	innerHTML=h;
	w[4].push(h);
}A(c,"n(this,Z"+w[0]+")");
if(w[4].length>1)A(c.previousSibling.previousSibling,"p(this,Z"+w[0]+")");
w[2]+=1;
w[1]+=5;
}
}
};
var d=w[3]?'&domain='+w[3]:'';
var u="http://corpus.vocabulary.com/api/1.0/examples.json?query="+w[5]+"&maxResults=5&startOffset="+w[1]+d;
if(x instanceof XMLHttpRequest)
x.open("GET",u,true);
else x.open("GET",u);
x.send();
}
function n(c,w){
with(c.parentNode.nextSibling){
if(w[2]<w[4].length){
w[2]+=1;
innerHTML=w[4][w[2]-1];
A(c.previousSibling.previousSibling,"p(this,Z"+w[0]+")");
}else{
g(c,w);
}
}
}
function p(c,w){
with(c.parentNode.nextSibling){
if(w[2]>1){
w[2]-=1;
innerHTML=w[4][w[2]-1];
A(c.nextSibling.nextSibling,"n(this,Z"+w[0]+")");
}
if(w[2]<=1){
R(c);
}
}
}
function c(c,v,d,w){
v=v?v:window.event;
v.cancelBubble=true;
w[1]=0;
w[2]=0;
w[3]=D[d];
w[4]=[];
with(c.parentNode){
R(nextSibling.childNodes[0]);
style.display="none";
with(previousSibling){
	style.visibility="visible";
	innerText=c.innerText;
}
g(nextSibling.childNodes[2],w);
}
}
function e(c,v){
v=v?v:window.event;
v.cancelBubble=true;
with(c){
with(nextSibling.style){
	display="block";
	width=style.width;
}
style.visibility="hidden";
}
}
function r(s){
var j=eval("("+s+")");
var h='';
var a=j.result.sentences;
for(var i=0;i<a.length;i++){
with(a[i]){
var f=offsets;
s=sentence;
s=s.substr(0,f[0])+'<b>'+s.substr(f[0],f[1]-f[0])+'</b>'+s.substr(f[1]);
with(volume){
var n=corpus.name;
with(dateAdded){
	var y=substr(0,4);
	var m=M[parseInt(substr(5,2))-1];
	var d=substr(8,2);
	d= m+' '+d+', '+y;
}
}
}
h+='<div class=n>'+s+'</div><div class="g r">'+n+'('+d+')</div>';
}
return h;
}
function R(c){
c.removeAttribute("onclick");
with(c.style){
	color="gray";
	cursor="default";
}
}
function A(c,f){
c.setAttribute("onclick",f);
with(c.style){
	color="";
	cursor="pointer";
}
}
function l(c,f){
c.style.border="1px dotted gray";
var u="http://s3.amazonaws.com/audio.vocabulary.com/1.0/us/"+f+".mp3";
try{
var a=document.createElement("audio");
a.setAttribute("src",u);
a.play();
}catch(e){
R(c);
}finally{
c.style.border="";
}
}
function k(){
if(x){
var l=document.getElementsByTagName('span');
var m=document.getElementsByTagName('div');
for(var i=0;i<l.length;i++){
if(l[i].id=='I9l')
l[i].style.visibility="visible";
}
for(var i=0;i<m.length;i++){
if(m[i].id=='mIq')
m[i].style.display="none";
}
}
}
function d(){
if(Z)
return;
Z=new Array();
if(window.XMLHttpRequest)
x=new XMLHttpRequest();
if(!x||!("withCredentials"in x)){
if(window.XDomainRequest)
x=new XDomainRequest();
else x=null;
}
if(x){
if(window.addEventListener)
document.addEventListener('click',k,false);
else document.attachEvent('onclick',k);
var s='<span id="I9l"style="display:inline-block;margin:0.3em 1em 0.2em 0;padding-left:0.3em;line-height:110%;border:1px solid gray;border-radius:6px;width:8.5em;background-color:#F2F2F2;letter-spacing:1px;font-family:Arial;font-size:85%;color:gray;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;cursor:pointer"onclick="e(this,event)">All Sources</span><div id="mIq"style="display:none;float:left;position:absolute;margin:-1.5em 0 0 -0.05em;padding-left:0.3em;border:1px solid gray;border-radius:6px;box-shadow:1.5px 1.5px 0 #D9D9D9;background-color:#F2F2F2;color:gray;letter-spacing:1px;line-height:140%;font-family:Arial;font-size:85%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;cursor:pointer"><span onclick="c(this,event,0,Z#)"style="display:block">All Sources</span><span onclick="c(this,event,1,Z#)"style="display:block">Fiction</span><span onclick="c(this,event,2,Z#)"style="display:block">Arts/Culture</span><span onclick="c(this,event,3,Z#)"style="display:block">News</span><span onclick="c(this,event,4,Z#)"style="display:block">Business</span><span onclick="c(this,event,5,Z#)"style="display:block">Sports</span><span onclick="c(this,event,6,Z#)"style="display:block">Science/Medicine</span><span onclick="c(this,event,7,Z#)"style="display:block">Technology</span></div><span style="display:inline-block;margin:0.3em 0 0.2em 0;line-height:110%;border:1px solid gray;border-radius:6px;width:8.8em;text-align:center;background-color:#F2F2F2;letter-spacing:1px;font-family:Arial;font-size:85%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap"><a href="javascript:void(0);"style="text-decoration:none;color:gray;cursor:default">&lt;Prev</a><span style="padding:0.8em;color:gray">|</span><a href="javascript:void(0);"onclick="n(this,Z#)"style="text-decoration:none">Next&gt;</a></span>';
var u=document.getElementsByTagName('div');
var c=0;
var t=[];
for(var i=0;i<u.length;i++){
var d=u[i].id;
if(d=='vUi'){
var w=new Array();
w.push('['+c+']');
c++;
w.push(0);
w.push(1);
w.push(null);
w.push([u[i].innerHTML]);
Z.push(w);
u[i].innerHTML=s.replace(/Z#/g,"Z"+w[0])+u[i].innerHTML;
}else if(d=='v5A')
t.push(encodeURI(u[i].childNodes[1].innerText));
}
for(var i=0;i<Z.length;i++)
Z[i].push(t[i]);
}else{
var m=document.getElementsByTagName('img');
for(var i=0;i<m.length;i++)
if(m[i].onclick)
m[i].style.display="none";
}
}
if(!Z){
if(window.addEventListener)
window.addEventListener('load',d,false);
else window.attachEvent('onload',d);
};