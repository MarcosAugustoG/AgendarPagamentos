$(document).ready(function () {
    $("#filtroData").inputmask("mask", { "mask": "99/99/9999" });


    $('#btnPesquisarPorData').on('click', function () {
        if ($("#filtroData").val() == "") {
            $('#lblValor').text(" 0,00");
        } else {
            $.ajax({
                method: 'post',
                url: '/Home/BuscarValorPor',
                data: { filtroData: $('#filtroData').val() },
                success: function (res) {
                    $('#lblValor').text(res);
                },
                error: function () {
                    alert("Ocorreu um erro ao listar os pagamentos!");
                }
            });
        }    
    });
});