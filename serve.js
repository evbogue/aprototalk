import {Hono} from "jsr:@hono/hono"
import { render } from './render.js'

const app = new Hono()

const head = async (title) => {
  return `
  <!doctype html>
  <html>
  <head>
    <title>A Protocol | ${title}</title>
    <link rel='stylesheet' href='https://wiredove.net/style.css' type='text/css' />
    <meta name='viewport' content='width=device-width initial-scale=1' />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">

  </head>
  <body>
  <div id='navbar'>
    <img src='https://wiredove.net/doveorange_sm.png' class='avatar_small' style='vertical-align: middle;'></strong>
    <strong><span style="color: #fe7a00;">A</span>Proto</strong>

  </div>  
`
}

const foot = async (year) => {
  return `
    </body>
    </html>
  `
}

app.get('/', async (c) => c.html(`
${await head('Home')}
<div id='scroller'>
<div class="message">Hello Everyone</div>
${await render('hjvCjXYgsM6FURz1ouzp/qvK+elP9jgvbD/gTBvxZ50=')}
</div>${await foot('2025')}`))

export default app
