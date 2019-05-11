var allItems = '.a10, .a20, .a30, .a40, .a50, .a60, .a70, .a80, .b10, .b20, .b30, .b40, .b50, .b60,  .b70, .b80, .c10, .c20, .c30, .c40, .c50, .c60, .c70, .c80, .d10, .d20, .d30, .d40, .d50, .d60, .d70, .d80, .e10, .e20, .e30, .e40, .e50, .e60, .e70, .e80, .f10, .f20, .f30, .f40, .f50, .f60, .f70, .f80, .g10,.g20, .g30, .g40, .g50, .g60, .g70, .g80, .h10, .h20, .h30, .h40, .h50, .h60, .h70, .h80';
var mas=['.a10', '.a20', '.a30', '.a40', '.a50', '.a60', '.a70', '.a80', '.b10', '.b20', '.b30', '.b40', '.b50', '.b60',  '.b70', '.b80', '.c10', '.c20', '.c30', '.c40', '.c50', '.c60', '.c70', '.c80', '.d10', '.d20', '.d30', '.d40', '.d50', '.d60', '.d70', '.d80', '.e10', '.e20', '.e30', '.e40', '.e50', '.e60', '.e70', '.e80', '.f10', '.f20', '.f30', '.f40', '.f50', '.f60', '.f70', '.f80', '.g10','.g20','.g30','.g40','.g50','.g60','.g70','.g80','.h10','.h20','.h30','.h40','.h50', '.h60', '.h70', '.h80'];
var whiteFigures = [
{
	name: '.rook1',
	x: 434,
	y: 525
},
{
	name: '.rook2',
	x: 875,
	y: 525
},
{
	name: '.bishop1',
	x: 560,
	y: 525
},
{
	name: '.bishop2',
	x: 749,
	y: 525
},
{
	name: '.pawn1',
	x: 434,
	y: 462
},
{
	name: '.king',
	x: 686,
	y: 525
}
];
var blackFigures = [
{
	name: '.blackRook1',
	x: 434,
	y: 84
},
{
	name: '.blackRook2',
	x: 875,
	y: 84
},
{
	name: '.blackBishop1',
	x: 749,
	y: 84
},
{
	name: '.blackBishop2',
	x: 560,
	y: 84
},
{
	name: '.blackPawn1',
	x: 434,
	y: 147
},
{
	name: '.blackKing',
	x: 686,
	y: 84
}
];


	function searchItemX(a1){
		var positionItem = $(a1);
		var p = positionItem.position();
		var XItem = p.left;
		return XItem;
	}
	function searchItemY(a2){
		var positionItem = $(a2);
		var p = positionItem.position();
		var YItem = p.top;
		return YItem;
	}

var c=0, t=0, a=0, b=true;


$(allItems).click(function(event1){
	for(var i=0; i<6; i++){
	

		if(whiteFigures[i].x-7===searchItemX(this) && whiteFigures[i].y-7===searchItemY(this)){
			
			//ROOKS
			for(var u=0; u<64; u++){
				$(mas[u]).css({'background-color':''});
			}
			$(this).css({'background-color':'darkgreen', 'opacity':'0.6', 'z-index':'5'});
			if(whiteFigures[i].name==='.rook1' || whiteFigures[i].name==='.rook2'){
				var accessibleItems = []; 
				c=1;
				for(var j=0; j<mas.length; j++){
					if((searchItemX(mas[j])===whiteFigures[i].x-7 || searchItemY(mas[j])===whiteFigures[i].y-7) && !(searchItemX(mas[j])===whiteFigures[i].x-7 && searchItemY(mas[j])===whiteFigures[i].y-7)){
					$(mas[j]).css({'background-color':'green', 'opacity':'0.28'});
					accessibleItems[a]=mas[j];
					

						// Столкновение с белыми фигурами
						for(var e=0; e<6; e++){
							if((searchItemX(mas[j])<=whiteFigures[e].x-7 && whiteFigures[e].x-7<whiteFigures[i].x-7 && whiteFigures[e].y-7===whiteFigures[i].y-7) || (searchItemX(mas[j])>=whiteFigures[e].x-7 && whiteFigures[e].x-7>whiteFigures[i].x-7 && whiteFigures[e].y-7===whiteFigures[i].y-7)){
								$(mas[j]).css({'background-color':'', 'z-index':'8'});
								accessibleItems.pop();
									if(b===true){
							a--;
							b=false;
						}
							}
							if((searchItemY(mas[j])<=whiteFigures[e].y-7 && whiteFigures[e].y-7<whiteFigures[i].y-7 && whiteFigures[e].x-7===whiteFigures[i].x-7) || (searchItemY(mas[j])>=whiteFigures[e].y-7 && whiteFigures[e].y-7>whiteFigures[i].y-7 && whiteFigures[e].x-7===whiteFigures[i].x-7)){
								$(mas[j]).css({'background-color':'', 'z-index':'8'});
								accessibleItems.pop();
								if(b===true){
							a--;
							b=false;
						}
							}
						}
						// Столкновение с черными фигурами
						for(var e=0; e<6; e++){
							if((searchItemX(mas[j])<blackFigures[e].x-7 && blackFigures[e].x-7<=whiteFigures[i].x-7 && blackFigures[e].y-7===whiteFigures[i].y-7) || (searchItemX(mas[j])>blackFigures[e].x-7 && blackFigures[e].x-7>whiteFigures[i].x-7 && blackFigures[e].y-7===whiteFigures[i].y-7)){
								$(mas[j]).css({'background-color':'', 'z-index':'8'});
								accessibleItems.pop();
								if(b===true){
							a--;
							b=false;
						}							
					}
							if((searchItemY(mas[j])<blackFigures[e].y-7 && blackFigures[e].y-7<=whiteFigures[i].y-7 && blackFigures[e].x-7===whiteFigures[i].x-7) || (searchItemY(mas[j])>blackFigures[e].y-7 && blackFigures[e].y-7>whiteFigures[i].y-7 && blackFigures[e].x-7===whiteFigures[i].x-7)){
								$(mas[j]).css({'background-color':'', 'z-index':'8'});
							accessibleItems.pop();
							if(b===true){
							a--;
							b=false;
						}
							}
						}
						a++;
						b=true;
					}

					
				}
				
			
			}
			
			var i0 = i;
	$(allItems).click(function(event2) {
		// var accessLength = accessibleItems.join();
		//     строка         //массив
		c=1;
		if(c===1){
		for(var i1=0; i1<accessibleItems.length; i1++){

			if(searchItemX(this)===searchItemX(accessibleItems[i1]) && searchItemY(this)===searchItemY(accessibleItems[i1])){
				whiteFigures[i0].x=searchItemX(this)+7;
				whiteFigures[i0].y=searchItemY(this)+7;
				$(whiteFigures[i0].name).css({"left": searchItemX(this)+7 + 'px', 'top': searchItemY(this)+7 + 'px'});
				
				}
			
		c=0;
		}
		}
			});
		}
		
		


	}
	
});



