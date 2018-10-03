function ativaScrollSuave (elem) {

    $(elem).click(function (event) {

        event.preventDefault();
        // obtem o destino do link que é um elemento
        // da própria página
        let target = $(this).attr('href');
        
        // realiza o rolamento suavemente
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);

        // aplica foco ao 1° campo do formulário
        if (target.match(/form/))
            $(target).find(':input:first').focus();
    })
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-palestrantes]');
ativaScrollSuave('a[href*=panel-form]');