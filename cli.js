import { bogbot } from 'https://esm.sh/gh/evbogue/bog5@5b22839/bogbot.js'
import { parseArgs } from "jsr:@std/cli/parse-args"

const args = await parseArgs(Deno.args)

await bogbot.start()

if (args.make) {
  console.log(args.make)
  const hash = await bogbot.make(args.make)
  console.log(hash)
}

if (args.genkey) {
  console.log(await bogbot.generate())
}

if (args.pubkey) {
  console.log(await bogbot.pubkey())
}

Deno.exit()
