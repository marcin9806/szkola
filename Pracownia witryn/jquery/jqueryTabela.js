jQuery(document).ready(function(){
    //$('tr:even').css('background','#b23333');
    //$('tr:odd').css('background','#33b233');
    $('#tabela1 tr:even').css('background','#b23333');
    $('#tabela1 tr:odd').css('background','#33b233');
    $('#tabela1 tr:first').css('background','#0000ff');
    $('#tabela1 tr:last').css('background','#000000');
    $('#tabela1 tr:eq(2)').css('background','#505050');
    $('#tabela1 tr:contains("Sól")').css('background','brown');
});