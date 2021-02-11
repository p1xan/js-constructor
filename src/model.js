import image from './assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `
<div class="itsmylink">Мой профиль тут: <a href="https://www.linkedin.com/in/pavelmishkovich/" target="_blank">Павел Мишкович</a>. Присоединяйся!</div>
`

export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to top, #ff0099, #493240)',
            color: 'gold',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        'Это приложение написано на чистом JavaScript, без использования библиотек',
        'Это конструктор сайтов',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    }),
    new TextBlock(text, {
        styles: {
            background: 'linear-gradient(to top, #f2994a, #f2c94c)',
            padding: '20px',
            'font-weight': 'bold',
        }
    })
]