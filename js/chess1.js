var allItems = '.a10, .a20, .a30, .a40, .a50, .a60, .a70, .a80, .b10, .b20, .b30, .b40, .b50, .b60,  .b70, .b80, .c10, .c20, .c30, .c40, .c50, .c60, .c70, .c80, .d10, .d20, .d30, .d40, .d50, .d60, .d70, .d80, .e10, .e20, .e30, .e40, .e50, .e60, .e70, .e80, .f10, .f20, .f30, .f40, .f50, .f60, .f70, .f80, .g10,.g20, .g30, .g40, .g50, .g60, .g70, .g80, .h10, .h20, .h30, .h40, .h50, .h60, .h70, .h80';
// var mas=['.a10', '.a20', '.a30', '.a40', '.a50', '.a60', '.a70', '.a80', '.b10', '.b20', '.b30', '.b40', '.b50', '.b60',  '.b70', '.b80', '.c10', '.c20', '.c30', '.c40', '.c50', '.c60', '.c70', '.c80', '.d10', '.d20', '.d30', '.d40', '.d50', '.d60', '.d70', '.d80', '.e10', '.e20', '.e30', '.e40', '.e50', '.e60', '.e70', '.e80', '.f10', '.f20', '.f30', '.f40', '.f50', '.f60', '.f70', '.f80', '.g10','.g20','.g30','.g40','.g50','.g60','.g70','.g80','.h10','.h20','.h30','.h40','.h50', '.h60', '.h70', '.h80'];
// var masObjWhite=['rook1', 'rook2', 'bishop1', 'bishop2', 'pawn1', 'pawn2', 'pawn3', 'pawn4', 'pawn5', 'pawn6', 'pawn7', 'pawn8', 'king', 'queen', 'knight1', 'knight2'];
// var masObjBlack=['rook1', 'rook2', 'bishop1', 'bishop2', 'pawn1', 'pawn2', 'pawn3', 'pawn4', 'pawn5', 'pawn6', 'pawn7', 'pawn8', 'king', 'queen', 'knight1', 'knight2'];
var whiteFigures = {
	rook1: {
		x: 434,
		y: 525,
		state: '',
	
},
	rook2: {
		x: 875,
		y: 525,
		state: '',
	
},
	bishop1: {
		x: 560,
		y: 525,
		state: '',
	
},
	bishop2: {
		x: 749,
		y: 525,
		state: '',
	
},
// 	pawn1: {
// 		x: 434,
// 		y: 462,
// 		state: '',
	
// },
	
	pawn2: {
		x: 497,
		y: 462,
		state: '',
	
},
	pawn3: {
		x: 560,
		y: 462,
		state: '',
	
},
	pawn4: {
		x: 623,
		y: 462,
		state: '',
	
},
	pawn5: {
		x: 686,
		y: 462,
		state: '',
	
},
	pawn6: {
		x: 749,
		y: 462,
		state: '',
	
},
	pawn7: {
		x: 812,
		y: 462,
		state: '',
	
},
	pawn8: {
		x: 875,
		y: 462,
		state: '',
	
},
	queen: {
		x: 623,
		y: 525,
		state: '',

	},
	king: {
		x: 686,
		y: 525,
		state: '',

	},
	knight1:{
		x: 497,
		y: 525,
		state: '',
	},
	knight2:{
		x: 812,
		y: 525,
		state: '',
	},
	
};

var blackFigures = {

	rook1: {
		x: 434,
		y: 84,
		state: '',
	
},
	rook2: {
		x: 875,
		y: 84,
		state: '',
	
},
	bishop1: {
		x: 749,
		y: 84,
		state: '',
	
},
	bishop2: {
		x: 560,
		y: 84,
		state: '',
	
},
	pawn1: {
		x: 434,
		y: 84,
		state: '',
	
},
	
	pawn2: {
		x: 497,
		y: 84,
		state: '',
	
},
	pawn3: {
		x: 560,
		y: 84,
		state: '',
	
},
	pawn4: {
		x: 623,
		y: 84,
		state: '',
	
},
	pawn5: {
		x: 686,
		y: 84,
		state: '',
	
},
	pawn6: {
		x: 749,
		y: 84,
		state: '',
	
},
	pawn7: {
		x: 812,
		y: 84,
		state: '',
	
},
	pawn8: {
		x: 875,
		y: 84,
		state: '',
	
},
	queen: {
		x: 623,
		y: 83,
		state: '',

	},
	king: {
		x: 686,
		y: 84,
		state: '',

	},
	knight1:{
		x: 497,
		y: 84,
		state: '',
	},
	knight2:{
		x: 812,
		y: 84,
		state: '',
	
	},
	king: {
		x: 686,
		y: 84,
		state: '',
	
},

};

var queue='', quarter1;
var rookOrder=0;
$('.rook1, .rook2, .bishop1, .bishop2, .pawn1, .pawn2, .pawn3, .pawn4, .pawn5, .pawn6, .pawn7, .pawn8, .queen, .king, .knight1, .knight2, .blackrook1, .blackrook2, .blackbishop1, .blackbishop2, .blackpawn1, .blackpawn2, .blackpawn3, .blackpawn4, .blackpawn5, .blackpawn6, .blackpawn7, .blackpawn8, .blackqueen, .blackking, .blackknight1, .blackknight2').click(function(event) {
	//белые ладьи 
	if(queue===''){
	console.log('white')
	var coorX=coordinatesX(this); var coorY=coordinatesY(this);
	if(coorX===whiteFigures.rook1.x && coorY===whiteFigures.rook1.y){
	whiteFigures.rook1.state='active';
	rookOrder=1;
$(allItems).css({'z-index':'11'});

}
if(coorX===whiteFigures.rook2.x && coorY===whiteFigures.rook2.y){
	whiteFigures.rook2.state='active';
	rookOrder=2;
}
}


//Черные ладьи
if(queue==='black'){
	console.log('black')
	var coorX=coordinatesX(this); var coorY=coordinatesY(this);
	if(coorX===blackFigures.rook1.x && coorY===blackFigures.rook1.y){
	blackFigures.rook1.state='active';
	rookOrder=1;
$(allItems).css({'z-index':'11'});

}
if(coorX===blackFigures.rook2.x && coorY===blackFigures.rook2.y){
	blackFigures.rook2.state='active';
	rookOrder=2;
}
}
	$(allItems).click(function(event) {
		
		if(rookOrder===1 || rookOrder===2){
		console.log(2)
		var name='rook';
		
	
		if(gorizontalAndVertical(this, rookOrder, name)===true){
			$('.'+queue+'rook1').css({'left': coordinatesX(this)+7+'px', 'top':coordinatesY(this)+7+'px'});
			console.log(4)
			$(allItems).css({'z-index':'9'});
			if(queue==='')
			{
			queue='black';
			if(rookOrder===1){ whiteFigures.rook1.x=coordinatesX(this)+7; whiteFigures.rook1.y=coordinatesY(this)+7;}
			if(rookOrder===2){ whiteFigures.rook2.x=coordinatesX(this)+7; whiteFigures.rook2.y=coordinatesY(this)+7;}
			}
			else
			{
			queue='';
			if(rookOrder===1){ blackFigures.rook1.x=coordinatesX(this)+7; blackFigures.rook1.y=coordinatesY(this)+7;}
			if(rookOrder===2){ blackFigures.rook2.x=coordinatesX(this)+7; blackFigures.rook2.y=coordinatesY(this)+7;}
			} 
			rookOrder=0;
		}
		else{
			$(allItems).css({'z-index':'9'}); 
			rookOrder=0;
			
		}
		
	}

	});

});







function gorizontalAndVertical(coorItem, figureNumber, nameFigure){
	var iX = coordinatesX(coorItem), iY = coordinatesY(coorItem);

	var fX = coordinatesX('.'+nameFigure+figureNumber)-7, fY = coordinatesY('.'+nameFigure+figureNumber)-7;
	
	if((iX===fX || iY===fY)) {
		
		//столкновение с белыми фигурами
		
			for(var key in whiteFigures){
				if(coordinatesX('.'+key)-7===fX && coordinatesY('.'+key)-7<=iY && coordinatesY('.'+key)-7>fY) return false;
				}
		
		
		
			for(var key in whiteFigures){
				if(coordinatesX('.'+key)-7>=iX && coordinatesY('.'+key)-7===fY && fX>coordinatesX('.'+key)-7) return false;
				}
			
		
		
			for(var key in whiteFigures){
				if(coordinatesX('.'+key)-7===fX && coordinatesY('.'+key)-7>=iY && coordinatesY('.'+key)-7<fY) return false;
				}
			
		
		
			for(var key in whiteFigures){
				if(coordinatesX('.'+key)-7<=iX && coordinatesY('.'+key)-7===fY && fX<coordinatesX('.'+key)-7) return false;
				}

				//столкновение с черными фигурами

				// for(var key in blackFigures){
				// if(coordinatesX('.'+key)-7===fX && coordinatesY('.'+key)-7<=iY && coordinatesY('.'+key)-7>fY) return false;
				// }
		
		
		
			// for(var key in blackFigures){
			// 	if(coordinatesX('.'+key)-7>=iX && coordinatesY('.'+key)-7===fY && fX>coordinatesX('.'+key)-7) return false;
			// 	}
			
		
		
			// for(var key in blackFigures){
			// 	if(coordinatesX('.'+key)-7===fX && coordinatesY('.'+key)-7>=iY && coordinatesY('.'+key)-7<fY) return false;
			// 	}
			
		
		
			// for(var key in blackFigures){
			// 	if(coordinatesX('.'+key)-7<=iX && coordinatesY('.'+key)-7===fY && fX<coordinatesX('.'+key)-7) return false;
			// 	}
			 return true;
		
		
	}
}
function coordinatesX(a){
var p = $(a);
var position = p.position();
return position.left;
}

function coordinatesY(a){
var p = $(a);
var position = p.position();
return position.top;
}
