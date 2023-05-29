//your JS code here. If required.
document.querySelector("input").onclick=function(){
	
	let selectEle=document.getElementById("colorSelect");
let color=selectEle.value;
let childrens=selectEle.children;
for(let i=0;i<childrens.length;i++)
	{
		if(childrens[i].textContent===color){
			selectEle.children[i].remove();
		}
	}

}
	