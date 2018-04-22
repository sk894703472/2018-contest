var piece = document.getElementsByClassName('piece');
var score = document.getElementById('score');
var content = [];
/*class的方法*/
var  getClassName = function(elements){
	return elements.getAttribute("class");
}
/*class的方法*/
var setClassName = function(elements,cls){
	return elements.setAttribute("class",cls);
}
/*添加class的方法*/
var addClassName = function(elements,cls){
	var startClass = getClassName(elements);
	if(startClass.indexOf(cls)===-1){
		setClassName(elements,startClass+" "+cls);
	}
}
/*删除class的方法*/
var delClassName = function(elements,cls){
	var startClass = getClassName(elements);
	if(startClass.indexOf(cls)!==-1){
		setClassName(elements,startClass.split(cls).join(" ").replace(/\s+/g," "));
	}
}
/*游戏初始化*/
function init(){
	for (var i = 0; i < piece.length; i++) {
		addClassName(piece[i],'piece-init');
	}
	addPiece();
	addPiece();
	drawcolor()
}
/*按键监听*/
document.onkeydown=function(e){
	if(e.keyCode==37){
		left();
	}else if(e.keyCode==38){
		up();
	}else if(e.keyCode==39){
		right();
	}else if(e.keyCode==40){
		down();
	}
}
/*向左*/
function left(){
	var arr=[];
	var oldarr=[];
	for(var i=0;i<4;i++){
		var itemArr=[];
		var olditemArr=[];
		for(var j=4*i;j<4*i+4;j++){
			olditemArr.push(piece[j].innerText);
			if(piece[j].innerText!=''){
				itemArr.push(piece[j].innerText);
			}
			piece[j].innerText='';
		}
		oldarr.push(itemArr);
		if (itemArr.length==0) {
			arr[i]=[];
		}else{
			var newArr=[];
			for(var x=itemArr.length-1;x>=0;x--){
				if (itemArr[x]==itemArr[x-1]) {
					newArr.unshift(2*itemArr[x]);
					var scores = score.innerText;
					score.innerText=Number(scores)+(2*itemArr[x]);
					console.log(scores)
					x-=1;
				}else{
					newArr.unshift(itemArr[x]);
				}
			}
			arr.push(newArr);
		}
	}
	console.log(oldarr)
	console.log(arr)
	for(var y=0;y<4;y++){
		var m=0;
		for(var z=4*y;z<4*y+4&&m<arr[y].length;z++){
			piece[z].innerText=arr[y][m];
			m++;
		}
	}
	addPiece();
	drawcolor();
	console.log(arr)
}
/*向上*/
function up(){
	var arr=[];
	for(var i=0;i<4;i++){
		var itemArr=[]
		for(var j=i;j<=4*3+i;j+=4){
			if(piece[j].innerText!=''){
				itemArr.push(piece[j].innerText);
				piece[j].innerText='';
			}
		}
		console.log(itemArr)
		if (itemArr.length==0) {
			arr[i]=[];
		}else{
			var newArr=[];
			for(var x=itemArr.length-1;x>=0;x--){
				if (itemArr[x]==itemArr[x-1]) {
					newArr.unshift(2*itemArr[x]);
					var scores = score.innerText;
					score.innerText=Number(scores)+(2*itemArr[x]);
					console.log(scores)
					x-=1;
				}else{
					newArr.unshift(itemArr[x]);
				}
			}
			arr.push(newArr);
		}
	}
	for(var y=0;y<4;y++){
		var m=0;
		for(var z=y;z<4*3+y&&m<arr[y].length;z+=4){
			piece[z].innerText=arr[y][m];
			m++;
		}
	}
	addPiece();
	drawcolor();
	console.log(arr)
}
/*向右*/
function right(){
	var arr=[];
	for(var i=0;i<4;i++){
		var itemArr=[]
		for(var j=4*i;j<4*i+4;j++){
			if(piece[j].innerText!=''){
				itemArr.push(piece[j].innerText);
				piece[j].innerText='';
			}
		}
		console.log(itemArr)
		if (itemArr.length==0) {
			arr[i]=[];
		}else{
			var newArr=[];
			for(var x=itemArr.length-1;x>=0;x--){
				if (itemArr[x]==itemArr[x-1]) {
					newArr.push(2*itemArr[x]);
					var scores = score.innerText;
					score.innerText=Number(scores)+(2*itemArr[x]);
					console.log(scores)
					x-=1;
				}else{
					newArr.push(itemArr[x]);
				}
			}
			arr.push(newArr);
		}
	}
	for(var y=0;y<4;y++){
		var m=0;
		for(var z=3+4*y;z>=y&&m<arr[y].length;z--){
			piece[z].innerText=arr[y][m];
			m++;
		}
	}
	addPiece();
	drawcolor();
	console.log(arr)
}
/*向下*/
function down(){
	var arr=[];
	for(var i=0;i<4;i++){
		var itemArr=[]
		for(var j=i;j<=4*3+i;j+=4){
			if(piece[j].innerText!=''){
				itemArr.push(piece[j].innerText);
				piece[j].innerText='';
			}
		}
		console.log(itemArr)
		if (itemArr.length==0) {
			arr[i]=[];
		}else{
			var newArr=[];
			for(var x=itemArr.length-1;x>=0;x--){
				if (itemArr[x]==itemArr[x-1]) {
					newArr.push(2*itemArr[x]);
					var scores = score.innerText;
					score.innerText=Number(scores)+(2*itemArr[x]);
					console.log(scores)
					x-=1;
				}else{
					newArr.push(itemArr[x]);
				}
			}
			arr.push(newArr);
		}
	}
	for(var y=0;y<4;y++){
		var m=0;
		for(var z=y+12;z>=y&&m<arr[y].length;z-=4){
			piece[z].innerText=arr[y][m];
			m++;
		}
	}
	addPiece();
	drawcolor();
	console.log(arr)
}
/*添加方块*/
function addPiece(){
	var count=0;
	for(var i=0;i<16;i++){
		if(piece[i].innerText!=''){
			count++;
		}
	}
	if(count==16){
		alert('你输了');
		init();
	}
	var fond = false;
	while(!fond){
		var j = Math.floor(Math.random()*16);
		if (piece[j].innerText == '') {
			piece[j].innerText = 2;
			fond = true;
		}
	}
	drawcolor()
}
/*按级添加方块背景颜色*/
function drawcolor(){
	for(var i=0;i<16;i++){
		var j=piece[i].innerText;
		switch (j){
			case '2':piece[i].style.backgroundColor='#EEE5DE';break;
			case '4':piece[i].style.backgroundColor='#EED8AE';break;
			case '8':piece[i].style.backgroundColor='#EED5D2';break;
			case '16':piece[i].style.backgroundColor='#EEA9B8';break;
			case '32':piece[i].style.backgroundColor='#EE9572';break;
			case '64':piece[i].style.backgroundColor='#EE6AA7';break;
			case '128':piece[i].style.backgroundColor='#EEAD0E';break;
			case '256':piece[i].style.backgroundColor='#EE7600';break;
			case '512':piece[i].style.backgroundColor='#EE4000';break;
			case '1024':piece[i].style.backgroundColor='#EE1289';break;
			case '2048':
				{
					piece[i].style.backgroundColor='#EEEE00';
					setTimeout(function(){
						alert("恭喜您，您已经通过！！")
					})
				};
				break;
			default:piece[i].style.backgroundColor='rgba(255,255,255,0.3)';break;
		}
	}
}
init()