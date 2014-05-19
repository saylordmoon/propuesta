
var titulo = "";

$("#region-norte").click(function(){
	colorRegiones();
	console.log("Region Norte");
})

$("#region-centro").click(function(){
	colorRegiones();
	console.log("Region Centro Oriente");
})

$("#region-sur").click(function(){
	colorRegiones();
	console.log("Region Sur");
})
$("#region-lima").click(function(){
	colorRegiones();
	console.log("Region Lima");
})

function colorRegiones()
{
	initColors();
	if (!$("#region-norte").is(':checked'))
		regionNorte.attr(disableStyle);	
	if (!$("#region-centro").is(':checked'))
		regionCentroOriente.attr(disableStyle);
	if (!$("#region-sur").is(':checked'))
		regionSur.attr(disableStyle);
	if (!$("#region-lima").is(':checked'))
		regionLima.attr(disableStyle); 
	if ((!$("#region-lima").is(':checked')) && (!$("#region-sur").is(':checked')) && (!$("#region-centro").is(':checked')) && (!$("#region-norte").is(':checked')))
		initColors();
	paper.safari();
}

function showTitle(title)
{
	var all = paper.set()
	var box = paper.rect(3,1,220,50);
	var t = paper.text(113,25 , title);

	box.attr({"fill":"#000" , 'opacity':.7,"stroke": '#fff','stroke-width':2});
	t.attr({fill:'#FFF'});
	t.attr({ "font-size": 16, "font-family": "Arial, Helvetica, sans-serif" });

	all.push(t); all.push(box);
	all.transform("T" + (paper.canvas.offsetWidth-150)/2 + " " + 50 );
	paper.safari();

	return all;
}

function removeData()
{
	$("#ul-filiales").empty();
	$("#ul-estaciones-tv").empty();
	$("#ul-estaciones-radio").empty();
	$("#ul-recursos-humanos").empty();
}

function getTVs(fid)
{
	var tvs = getAllTVById(fid);
	$("#ul-estaciones-tv").empty();
	for ( ind in tvs )
	{
		$("#ul-estaciones-tv").append('<li><a data-id="' + tvs[ind].id + '" class="tv">' + tvs[ind].ubicacion + '</a></li>');
	}
}

function getRadios(fid)
{
	var radios = getAllRadioById(fid);
	$("#ul-estaciones-radio").empty();
	for ( ind in radios )
	{
		$("#ul-estaciones-radio").append('<li><a data-id="' + radios[ind].id + '" class="tv">' + radios[ind].nombre + '</a></li>');
	}
}

function getRHs(fid)
{
	var rhs = getAllRHById(fid);
	$("#ul-recursos-humanos").empty();
	for ( ind in rhs )
	{
		$("#ul-recursos-humanos").append('<li><a data-id="' + rhs[ind].id + '" class="tv">' + rhs[ind].nombre + '</a>' + ' (' + rhs[ind].condicion + ')</li>');
	}
}

function getFiliales(dep)
{
	var filiales = getFilialByDep(dep);
	$("#ul-filiales").empty();
	for ( ind in filiales )
	{
		$("#ul-filiales").append('<li><a style="cursor: pointer;" class="filial" data-id="' + filiales[ind].id + '">' + filiales[ind].nombre + '</a></li>');

		$(".filial").click(function()
		{
			var fid = $(this).attr("data-id");
			console.log(fid);
			getTVs(fid);
			getRadios(fid);
			getRHs(fid);
			return false;
		})
	}
}

departamentos.mouseover(function() 
{	
	this.attr({cursor:'pointer'});
	paper.safari();
});

departamentos.mouseout(function() 
{
	
});

departamentos.click(function()
{
	var bbx = this.getBBox();
	if (this.attr('fill') != disableStyle['fill'] ) 
 	{
	 	if  (!clicked)
		{
			this.toFront().animate({'transform':"...s2 2"}, 500,"backOut");
			disableAll(this);
			clicked = true;
			titulo = showTitle(this.node.id);
			getFiliales(this.node.id);
		}
		else
		{
			this.toFront().animate({'transform': getTransform()}, 1500,"elastic");
			colorRegiones();
			clicked = false;
			titulo.remove();
			removeData();
		}
	}
	paper.safari();
	console.log('departamentos',this.node.id,bbx.x,bbx.y)
});