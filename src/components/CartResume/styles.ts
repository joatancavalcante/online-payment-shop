import { styled } from "@stitches/react";
import * as Dialog from '@radix-ui/react-dialog'

export const Container = styled(Dialog.Content, {
    maxWidth: '30rem',
    width: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    padding: '4.5rem 3rem 3rem',
  
    display: 'flex',
    flexDirection: 'column',
  
    background: '$gray800',
    boxShadow: '-4px 0 30px rgba(0,0,0,0.8)',
})

export const Title = styled(Dialog.Title, {
    color: '$gray100',

    position: 'absolute',
    width: '10.75rem',
    height: '2rem',
    left: '3rem',
    top: '4.5rem',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '$lg',
    lineHeight: '160%',
    
    display: 'flex',
    alignItems: 'center'
})

export const Close = styled(Dialog.Close, {
    position: 'absolute',
    top: '1.5rem',
    right: '1.5rem',
  
    color: '$gray400',
    background: 'transparent',
  
    lineHeight: 0,
    border: 0,
    cursor: 'pointer',
})

export const ProductList = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '1.5rem',
    margin : '4rem 0 1rem',
    overflowY: 'auto',
})

export const ItemProductList = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    height: '5.8125rem',
})

export const ImageContainer = styled('div', {
    width: 101,
    height: 93,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
    borderRadius: '8px',

    img: {
        objectFit: 'cover',
    },
})

export const InfoItemContainer = styled('div', {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,

    span: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 18,
        lineHeight: '160%',
        display: 'flex',
        alignItems: 'center',
        color: '$gray300'
    },

    strong: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 18,
        lineHeight: '160%',
        display: 'flex',
        alignItems: 'center',
        color: '$gray100',
    },

    button: {
        width: 65,
        height: 26,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 16,
        lineHeight: '160%',
        color: '$green500',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        marginTop: 8,

        '&:hover': {    
            opacity: 0.85,
        }
    }
})

export const FooterContainer = styled('footer', {
    display: 'flex',
    flexDirection: 'column',  
}) 

export const TotalContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',  
    gap: 7,
    
    div: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        span: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '160%',
            display: 'flex',
            alignItems: 'center',
            color: '$gray100'
        },
        strong: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 18,
            lineHeight: '160%',
            display: 'flex',
            alignItems: 'center',
            color: '$gray100'
        }
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 32px',
        width: 384,
        height: 69,
        left: 'calc(50% - 24rem/2)',
        background: '$green500',
        borderRadius: 8,
        border: 'none',
        marginTop: 51,
        cursor: 'pointer',

        '&:hover': {    
            opacity: 0.85,
        },

        span: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 18,
            lineHeight: '160%',
            color: '$white',
        }
    }

})
