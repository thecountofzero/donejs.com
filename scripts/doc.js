load('steal/rhino/rhino.js');

steal("documentjs", function(DocumentJS){
	DocumentJS('scripts/doc.html',{
		markdown : [ 'readme.md', 'jquery', 'can', 'site' ],
		out : 'docs'
	});
});
