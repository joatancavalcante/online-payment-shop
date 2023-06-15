import { styled } from "@/src/styles";

export const Container = styled('header', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: '0 auto',
    maxWidth: 1240,
    padding: '2rem 1.875rem',

    button: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        border: 0,
        padding: '12px',
        gap: '0.75rem',                    
        width: '3rem',
        height: '3rem',
        background: '$gray800',
        borderRadius: '0.375rem',
        cursor: 'pointer',
        position: 'relative',
        
        '&:hover': {    
            opacity: 0.7,
        },

        span: {
            position: 'absolute',
            top: 0,
            right: 0,
      
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
      
            width: '1.5rem',
            height: '1.5rem',
            transform: 'translate(30%, -30%)',
      
            fontSize: '0.875rem',
            color: '$white',
            background: '$green300',
            outline: '3px solid $gray900',
            borderRadius: '999px',

            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: '160%'
        },
    }

})