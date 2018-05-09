$(document).ready(function () {

    $("#filtroData").inputmask("mask", { "mask": "99/99/9999" });

    $('.excluir').on('click', function (id) {
        $.ajax({
            method: 'post',
            url: '/Home/Deletar?id',
            data: { id: $('#id').text() },
            success: function (res) {
                window.location = "Index";
            },
            error: function () {
                alert("Ocorreu um erro ao excluir!");
            }
        });
    });

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

    $.ajax({
        url: '/Home/BuscarDadosGrafico',
        method: 'get',     
        success: function (result) {
            debugger
            var ctx = document.getElementsByClassName("line-chart");

            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                    datasets: [{
                        label: '# of Votes',
                        data: [result],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            })   
        },
        error: function () {
            alert("Ocorreu um erro no grafico!");
        }
    });    
});