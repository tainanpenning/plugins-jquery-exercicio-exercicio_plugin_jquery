$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 00000-0000')

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: { required: true },
            email: { required: true, email: true },
            telefone: { required: true },
            endereco: { required: true },
            cep: { required: true },
            cpf: { required: true },
        },

        messages: {
            nome: '<span style="color: red">Por favor, preencha este campo.</span>',
            email: '<span style="color: red">Por favor, preencha este campo.</span>',
            telefone: '<span style="color: red">Por favor, preencha este campo.</span>',
            endereco: '<span style="color: red">Por favor, preencha este campo.</span>',
            cep: '<span style="color: red">Por favor, preencha este campo.</span>', 
            cpf: '<span style="color: red">Por favor, preencha este campo.</span>',
        },

        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.submit();
        },

        invalidHandler: function (event) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})
