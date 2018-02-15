$(document).ready(function () {

    //metodo para nao permitir caracteres especiais no campo de valor do pagamento
    $("#txtValor").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    $("#txtNome").focus();

    $("#txtData").inputmask("mask", { "mask": "99/99/9999" });

    $('#txtValor').inputmask('decimal', {
        radixPoint: ",",
        groupSeparator: ".",
        autoGroup: true,
        digits: 2,
        digitsOptional: false,
        placeholder: '0',
        rightAlign: false,
        onBeforeMask: function (value, opts) {
            return value;
        },
        removeMaskOnSubmit: true,
    });

    $("#formCadastro").validate({
        rules: {
            Valor: "required",
            Data: "required",
            Nome: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            Valor: "Valor é obrigatório",
            Data: "Data é obrigatório",
            Nome: {
                required: "Nome é obrigatório",
                minlength: "Minimo de 3 caracteres"
            }
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
            error.addClass("help-block");
            element.parents(".col-sm-5").addClass("has-feedback");
            error.insertAfter(element);

            if (!element.next("span")[0]) {
                $("<span class='glyphicon glyphicon-remove form-control-feedback'></span>").insertAfter(element);
            }
        },
        success: function (label, element) {
            if (!$(element).next("span")[0]) {
                $("<span class='glyphicon glyphicon-ok form-control-feedback></span>").insertAfter($(element));
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-error").removeClass("has-success");
            $(element).next("span").addClass("glyphicon-remove").removeClass("glyphicon-ok");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-5").addClass("has-success").removeClass("has-error");
            $(element).next("span").addClass("glyphicon-ok").removeClass("glyphicon-remove");
        }
    });

    $("#formCadastro").submit(function (e) {
        e.preventDefault();
        if ($("#formCadastro").valid()) {
            $.ajax({
                method: 'post',
                url: '/Home/NovoPagamento',
                data: $("#formCadastro").serializeArray(),
                success: function (res) {
                    console.log(res);
                    if (res.erro) {
                        bootbox.alert({
                            title: "Erro - Contate o administrador",
                            message: res.erro,
                            buttons: {
                                ok: {
                                    label: '<i class="glyphicon glyphicon-exclamation-sign"></i>',
                                    className: 'btn-danger'
                                }
                            },
                            callback: function () {
                                location.href = 'Home';
                            }
                        });
                    } else {
                        bootbox.alert({
                            title: "Confirmação",
                            message: "Registro salvo com sucesso!",
                            buttons: {
                                ok: {
                                    label: 'OK <i class="glyphicon glyphicon-ok-circle"></i>',
                                    className: 'btn-success'
                                }
                            },
                            callback: function () {
                                location.href = 'Home/Listar';
                            }
                        });
                    }
                }
            });
        }
    });

});