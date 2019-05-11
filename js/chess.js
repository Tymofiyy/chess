var mas=['.a1', '.a2', '.a3', '.a4', '.a5', '.a6', '.a7', '.a8', '.b1', '.b2', '.b3', '.b4', '.b5', '.b6',  '.b7', '.b8', '.c1', '.c2', '.c3', '.c4', '.c5', '.c6', '.c7', '.c8', '.d1', '.d2', '.d3', '.d4', '.d5', '.d6', '.d7', '.d8', '.e1', '.e2', '.e3', '.e4', '.e5', '.e6', '.e7', '.e8', '.f1', '.f2', '.f3', '.f4', '.f5', '.f6', '.f7', '.f8', '.g1','.g2','.g3','.g4','.g5','.g6','.g7','.g8','.h1','.h2','.h3','.h4','.h5', '.h6', '.h7', '.h8'];
// var mas0=['.a10', '.a20', '.a30', '.a40', '.a50', '.a60', '.a70', '.a80', '.b10', '.b20', '.b30', '.b40', '.b50', '.b60',  '.b70', '.b80', '.c10', '.c20', '.c30', '.c40', '.c50', '.c60', '.c70', '.c80', '.d10', '.d20', '.d30', '.d40', '.d50', '.d60', '.d70', '.d80', '.e10', '.e20', '.e30', '.e40', '.e50', '.e60', '.e70', '.e80', '.f10', '.f20', '.f30', '.f40', '.f50', '.f60', '.f70', '.f80', '.g10','.g20','.g30','.g40','.g50','.g60','.g70','.g80','.h10','.h20','.h30','.h40','.h50', '.h60', '.h70', '.h80'];
 var allItems = '.a1, .a2, .a3, .a4, .a5, .a6, .a7, .a8, .b1, .b2, .b3, .b4, .b5, .b6,  .b7, .b8, .c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .d1, .d2, .d3, .d4, .d5, .d6, .d7, .d8, .e1, .e2, .e3, .e4, .e5, .e6, .e7, .e8, .f1, .f2, .f3, .f4, .f5, .f6, .f7, .f8, .g1,.g2,.g3,.g4,.g5,.g6,.g7,.g8,.h1,.h2,.h3,.h4, .h5, .h6, .h7, .h8';
// var allItems = '.a10, .a20, .a30, .a40, .a50, .a60, .a70, .a80, .b10, .b20, .b30, .b40, .b50, .b60,  .b70, .b80, .c10, .c20, .c30, .c40, .c50, .c60, .c70, .c80, .d10, .d20, .d30, .d40, .d50, .d60, .d70, .d80, .e10, .e20, .e30, .e40, .e50, .e60, .e70, .e80, .f10, .f20, .f30, .f40, .f50, .f60, .f70, .f80, .g10,.g20,.g30,.g40,.g50,.g60,.g70,.g80,.h10,.h20,.h30,.h40, .h50, .h60, .h70, .h80';
var whiteFigures =[
{//whireRook1
name: '.rook1',
x: 434,
y: 525
},
{//whiteRook2
name: '.rook2',
x: 875,
y: 525
},
{//pawn
x: 434,
y: 462
}
];

var blackFigures =[
{//blackRook1
name: '.blackRook1',
x: 84,
y: 434 
},
{//blackRook2
name: '.blackRook2',
x: 875,
y: 84
},
{
x: 0,
y: 0
}
];

// var cloneItems = $('.allItems').clone().css({'z-index':'2'});
// 			$('.h1').append(cloneItems);
		// var cloneItems = $(allItems).clone().css({'z-index':'10', 'background-color':'red', 'opacity':'0.0'});
		// $('body').append(cloneItems);
	//First white rook
	
$('.rook1').click(function(event) {
			var c=0;
			
			
			var lightRook = $('.rook1');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
			for(var i=0; i<mas.length; i++)
			{
			$(mas[i]).css({'background-color':''});
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':'lightgreen', 'filter' : 'alpha(opacity=40)'});
			}
			

	    $(allItems).click(function(event2) {
	if(c===0)
	{	
		var lightRook = $('.rook1');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
		for(var i=0; i<mas.length; i++)
		{
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':''});
	}	
		
	var p1 = $(this);
	var position = p1.position();
	var x1 = position.left;
	var y1 = position.top;

	var p2 = $('.rook1');
	var positionRook = p2.position();
	var xRook = positionRook.left;
	var yRook = positionRook.top; 
   	var z1 = x1-xRook+7;
  	var z2 = y1-yRook+7;
 	if(x1===xRook-7 || y1===yRook-7){
   	xRook+=z1;
   	yRook+=z2;
   	whiteFigures[0].x=xRook;
   	whiteFigures[0].y=yRook;
   	
   }
   var g=0;
   for(var i=0; i<3; i++)
   {
   		if(whiteFigures[0].x===blackFigures[i].x && whiteFigures[0].y===blackFigures[i].y)
   		{
   			$(blackFigures[i].name).remove();
   			$('.rook1').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
   			$('.rook1').css({'border':'0px solid black'});
   		g=1;
   		}
   		
   }
   if(g===0)
   	{
   		$('.rook1').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
  		$('.rook1').css({'border':'0px solid black'});
	}
   c=1;
	}


	else{}
   });
	});


			//Second white rook
		$('.rook2').click(function(event) {
			var c=0;
			
			
			var lightRook = $('.rook2');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
			for(var i=0; i<mas.length; i++)
			{
			$(mas[i]).css({'background-color':''});
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':'lightgreen', 'filter' : 'alpha(opacity=40)'});
			}

					
			
		
	    $(allItems).click(function(event2) {
	if(c===0)
	{	
		var lightRook = $('.rook2');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
		for(var i=0; i<mas.length; i++)
		{
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':''});
	}	
	var p1 = $(this);
	var position = p1.position();
	var x1 = position.left;
	var y1 = position.top;

	var p2 = $('.rook2');
	var positionRook = p2.position();
	var xRook = positionRook.left;
	var yRook = positionRook.top;
  
   	var z1 = x1-xRook+7;
   	var z2 = y1-yRook+7;
  	if(x1===xRook-7 || y1===yRook-7){
   	xRook+=z1;
  	yRook+=z2;

   	whiteFigures[1].x=xRook;
   	whiteFigures[1].y=yRook;
   
   }
   var g=0;
   for(var i=0; i<3; i++)
   {
   		if(whiteFigures[1].x===blackFigures[i].x && whiteFigures[1].y===blackFigures[i].y)
   		{
   			$(blackFigures[i].name).remove();
   			$('.rook2').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
   			$('.rook2').css({'border':'0px solid black'});
   		g=1;
   	}
   		
   }
   if(g===0)
   	{
   		$('.rook2').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
  		$('.rook2').css({'border':'0px solid black'});
	}
   c=1;
	}


	else{}
   });
	});

//First black rook
		$('.blackRook1').click(function(event) {
			var c=0;
			
			
			var lightRook = $('.blackRook1');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
			for(var i=0; i<mas.length; i++)
			{
			$(mas[i]).css({'background-color':''});
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':'lightgreen', 'filter' : 'alpha(opacity=40)'});
			}

					
			
		
	    $(allItems).click(function(event2) {
	if(c===0)
	{	
		var lightRook = $('.blackRook1');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
		for(var i=0; i<mas.length; i++)
		{
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':''});
	}	
	var p1 = $(this);
	var position = p1.position();
	var x1 = position.left;
	var y1 = position.top;

	var p2 = $('.blackRook1');
	var positionRook = p2.position();
	var xRook = positionRook.left;
	var yRook = positionRook.top;
  
   	var z1 = x1-xRook+7;
   	var z2 = y1-yRook+7;
  	if(x1===xRook-7 || y1===yRook-7){
   	xRook+=z1;
  	yRook+=z2;

   	blackFigures[0].x=xRook;
   	blackFigures[0].y=yRook;
   }
   var g=0;
   for(var i=0; i<3; i++)
   {
   		if(blackFigures[0].x===whiteFigures[i].x && blackFigures[0].y===whiteFigures[i].y)
   		{
   			$(whiteFigures[i].name).remove();
   			$('.blackRook1').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
   			$('.blackRook1').css({'border':'0px solid black'});
   		g=1;
   	}
   		
   }
   if(g===0)
   	{
   		$('.blackRook1').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
  		$('.blackRook1').css({'border':'0px solid black'});
	}
   c=1;
	}


	else{}
   });
	});
		//Second black rook
		$('.blackRook2').click(function(event) {
			var c=0;
			
			
			var lightRook = $('.blackRook2');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
			for(var i=0; i<mas.length; i++)
			{
			$(mas[i]).css({'background-color':''});
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':'lightgreen', 'filter' : 'alpha(opacity=40)'});
			}

					
			
		
	    $(allItems).click(function(event2) {
	if(c===0)
	{	
		var lightRook = $('.blackRook2');
			var light = lightRook.position();
			var Xlight = light.left;
			var Ylight = light.top;
		for(var i=0; i<mas.length; i++)
		{
			var lightItem = $(mas[i]);
			var lightI = lightItem.position();
			var XlightI = lightI.left;
			var YlightI = lightI.top;
			if(XlightI===Xlight-7 || YlightI===Ylight-7)
			$(mas[i]).css({'background-color':''});
	}	
	var p1 = $(this);
	var position = p1.position();
	var x1 = position.left;
	var y1 = position.top;

	var p2 = $('.blackRook2');
	var positionRook = p2.position();
	var xRook = positionRook.left;
	var yRook = positionRook.top;
  
   	var z1 = x1-xRook+7;
   	var z2 = y1-yRook+7;
  	if(x1===xRook-7 || y1===yRook-7){
   	xRook+=z1;
  	yRook+=z2;

   	blackFigures[1].x=xRook;
   	blackFigures[1].y=yRook;

   }
   var g=0;
   for(var i=0; i<3; i++)
   {
   		if(blackFigures[1].x===whiteFigures[i].x && blackFigures[1].y===whiteFigures[i].y)
   		{
   			$(whiteFigures[i].name).remove();
   			$('.blackRook2').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
   			$('.blackRook2').css({'border':'0px solid black'});
   		g=1;
   	}
   		
   }
   if(g===0)
   	{
   		$('.blackRook2').css({'position':'absolute','left' : xRook + 'px','top' : yRook + 'px'});
  		$('.blackRook2').css({'border':'0px solid black'});
	}
   c=1;
	}


	else{}
   });
	});
