import $ from 'jquery';

const runHoveredTextAnimationScript = () => {
    $('.pre-hovered-text *').on('mouseover', (event) => {
        if ($(event.currentTarget).parent('.pre-hovered-text').is('.hovered-text-deactived')) {
            $(event.currentTarget).parent('.pre-hovered-text').removeClass('hovered-text-deactived');
        }
    
        $(event.currentTarget).parent().addClass('hovered-text-actived');
    });
    
    $('.pre-hovered-text *').on('mouseleave', (event) => {
        $(event.currentTarget).parent('.pre-hovered-text').removeClass('hovered-text-actived');
        $(event.currentTarget).parent('.pre-hovered-text').addClass('hovered-text-deactived');
    });
}

export default runHoveredTextAnimationScript;