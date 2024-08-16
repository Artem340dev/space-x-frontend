import $ from 'jquery';

const runHoverableObjectAnimationScript = () => {
    $('.hoverable-object').on('mouseenter', (event) => {
        if ($(event.currentTarget).is('.disabled')) return;

        if ($(event.currentTarget).is('.hintable-object')) {
            $(event.currentTarget).addClass('hintable-object-actived');
            $(event.currentTarget).removeClass('hintable-object-deactived');
        }

        $(event.currentTarget).addClass('hoverable-object-actived');
    })

    $('.hoverable-object').on('mouseleave', (event) => {
        if ($(event.currentTarget).is('.hoverable-object-actived')) $(event.currentTarget).removeClass('hoverable-object-actived');
    })

    $('.hintable-object').on('mouseenter', (event) => {
        if ($(event.currentTarget).is('.disabled')) return;

        if ($(event.currentTarget).is('.hintable-object')) {
            $(event.currentTarget).addClass('hintable-object-actived');
        }
    })

    $('.hintable-object').on('mouseleave', (event) => {
        if ($(event.currentTarget).is('.hintable-object-actived')) {
            $(event.currentTarget).removeClass('hintable-object-actived');
            $(event.currentTarget).addClass('hintable-object-deactived');
        }
    })
}

export default runHoverableObjectAnimationScript;