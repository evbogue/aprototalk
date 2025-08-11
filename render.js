import { bogbot } from 'https://esm.sh/gh/evbogue/bog5@5b22839/bogbot.js'

const BASEURL = 'https://wiredove.net/#'
const PUBURL = 'https://pub.wiredove.net/'

export const render = async (hash) => {
  const msg = await fetch(PUBURL + hash).then(r => r.json())
  console.log(msg)
  const yaml = await bogbot.parseYaml(msg[0].text)
  console.log(yaml)
  const string = JSON.stringify(msg)
  const image = await fetch(PUBURL + yaml.image).then(r => r.json())
  console.log(image)
  return `<div class="message">
    <div><img src="" class="avatar_small" /><a href="${BASEURL}${msg[0].author}">${yaml.name}</a></div>
    ${yaml.body}
  </div>`
}

