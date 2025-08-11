# 🦋 Bluesky's AT Protocol -- Decent(!)ralized(?)

By Everett Bogue

https://evbogue.com/

<iframe src="https://evbogue.com/"></iframe>

Web3 + JS since 1999. I work as a kayaking instructor on the Chicago River.

🎯 Which Platform Are You?

🦋 Bluesky!

I'm did:plc:i3gjwozl32eq3j3ejyw44hh4 or @evbogue.com on Bluesky.

Let's see it: https://bsky.app/profile/evbogue.com/post/3ltxq2bifys2p

How many users are there?  

<iframe src="https://bsky.jazco.dev/stats"></iframe>

Why did Jay wear that shirt at SXSW?

<img src="https://helios-i.mashable.com/imagery/articles/02DUzjMZsO2s3XoMJC7OcwV/hero-image.fill.size_1248x702.v1741635049.jpg" />

How does Bluesky work?

https://atproto.com/

How does Bluesky really work?

<iframe src="https://arxiv.org/html/2402.03239v2"></iframe>

Ok, let's make a client.

<iframe src="https://skies.deno.dev/"></iframe> 

https://github.com/evbogue/skies

A few other apps

Phil's https://constellation.microcosm.blue/

Juliet's https://pdsls.dev/

Dustin Moskovitz's https://shadowsky.io

Is Bluesky decent(ralized)?

# A decent(ralized?) origin story

...circa 2012

Dominic Tarr invents Scuttlebutt "A base-class for real-time replication."

https://github.com/dominictarr/scuttlebutt

...circa 2015

Dominic Tarr and Paul Frazee write Scuttlebot https://scuttlebot.io

> Scuttlebot forms a global cryptographic social network with its peers. Each user is identified by a public key, and publishes a log of signed messages, which other users follow socially. 

Let's try the ssb-server cli!

Scuttlebot is perfect so Paul Frazee retires to work on Beaker Browser 

Ev writes a client for SSB called Decent. Decent is better than SSB because it introduces message edits.

...circa 2018-2019-2020

Scuttlebot is too good for this world, so evil developers destroy the codebase. 

Dominic retires to work on his boats https://www.youtube.com/@dominictarrsailing

> "It is very difficult for me to write this update. I have decided that my time to build up SSB, Manyverse, and the new PPPPP protocol is over. " - https://www.manyver.se/blog - André Staltz, 2024

So various genius developers are forced to write their own protos, because SSB is borked.

Jay Graber's smor-serv https://github.com/arcalinea/smor-serve 

> "This is an experiment following the hypothesis that social media data should be mutable, and the way that decentralized social networks handle data generally focus too much on permanence."

Fiatjaf's Nostr https://fiatjaf.com/nostr.html

> "The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all."

Ev's Bogbook https://git.sr.ht/~ev/bogbook

> "Bogbook is a distributed news network made up of feeds signed by ed25519 keypairs, and then replicated between bogbook clients in the browser and bogbook pubs."

...circa 2022 social media is politics

+ Dorsey resigns as Twitter CEO
+ Elon buys Twitter changes name to X
+ Elon embraces 1930s political views

Dorsey spins Bluesky out of Twitter with Jay hiring Paul Frazee as CTO.

Dorsey discovers Nostr, deletes his Bluesky account "because he doesn't want to sit on another board."

circa Nov 2024 the US election is won by a Mastodon server operator. Bluesky growth explodes and finally everyone hears about it.

Does Bluesky contain Twitter's soul?

# Let's make aproto

All protos start as "rumors"

author, text, timestamp

Let's store a rumor in content addressable storage

Let's sign a message

Let's send a message











# Why (Decent)ralized social?

...circa 2012 social media was cool. The future was here.

**Google+** What Happened? Shadowbans! Google+ fails to gather momentum, project shuttered.
<img src="http://9to5google.com/wp-content/uploads/sites/4/2011/06/screen-shot-2011-06-28-at-6-31-33-pm.png" />

**Google Wave** What Happened? Too shiny for people to understand, project shuttered.
<img src="https://i.ytimg.com/vi/CB49LulHj8w/maxresdefault.jpg" />

**Twitter API** What Happened? Twitter doesn't want alt-clients. Total ecosystem collapse.

# The modern era

...circa 2022 social media becomes politics

+ Dorsey resigns as Twitter CEO
+ Elon buys Twitter changes name to X
+ Elon embraces 1930s political views

...persistant worries

Ev's https://skies.deno.dev/
Phil's https://constellation.microcosm.blue/
Juliet's https://pdsls.dev/
Dustin Moskovitz's https://shadowsky.io
Ev's https://skies.deno.dev/
Phil's https://constellation.microcosm.blue/
Juliet's https://pdsls.dev/
Dustin Moskovitz's https://shadowsky.io
+ Algorithms - who's deciding what reaches who?
+ Censorship - what if my profile gets banned or my content gets shadowbanned?
+ Ownership - who owns my content? What if a crazy billionaire buys my posts?
+ Portability - what if I want to switch platforms?

# History of Decent(ralized) social

"Those who do not know their Web3 history are doomed to repeat it." - ChatGPT hallucination

+ 2012 - Ev is shadowbanned from chatting with Zooko and Mike Hearn on Google+ about Web3 and also asked not to mention it on Mailchimp 🥹

+ 2012 - Dominic Tarr invents Scuttlebutt "A base-class for real-time replication."

https://github.com/dominictarr/scuttlebutt

<iframe src="https://www.youtube.com/embed/OBqZsTX4b_s?si=LJ6uirAXNWYXvycR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

+ 2016 - Paul Frazee and Dominic Tarr team up on Secure-Scuttlebot and Patchwork

<img src="https://web.archive.org/web/20160205234212im_/https://raw.githubusercontent.com/ssbc/patchwork/master/screenshot.png" />

https://web.archive.org/web/20160205234202/https://github.com/ssbc/patchwork/

https://scuttlebot.io/

+  2016 - Paul Frazee wanders away from SSB to do Beaker Browser an IPFS/Dat viewer in Electron

https://bsky.app/profile/did:plc:ragtjsm2j2vknwkz3zp4oxrd/post/3kmqivuz5xs2t

<iframe src="scuttlebot.io"></iframe>

+ 2018 - Everett gives a talk about "A Decent Client for SSB" at Chicago Node.js

+ 2019 - Dominic Tarr retires to sail fulltime on his boat

Dominic's Sailing Youtube: https://www.youtube.com/@dominictarrsailing <-- is cool.

+ 2019/2024 - Manlyverse team scuttles SSB

> "It is very difficult for me to write this update. I have decided that my time to build up SSB, Manyverse, and the new PPPPP protocol is over. " - https://www.manyver.se/blog - André Medeiros

**Why was SSB cool?**

+ git-ssb
+ local replication
+ offline-first
+ keypairs held

# An era of innovation

"Sometimes you have to burn your boats to make different boats." - ChatGPT hallucination

The scuttling of SSB leads to an era of experimentation.

+ Jay Graber's smor-serv https://github.com/arcalinea/smor-serve which turns into https://atproto.com/
+ Fiatjaf's nostr https://fiatjaf.com/nostr.html
+ Evbogue's bogbook https://git.sr.ht/~ev/bogbook

Jay: "This is an experiment following the hypothesis that social media data should be mutable, and the way that decentralized social networks handle data generally focus too much on permanence."

Fiat: "The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all."

Ev: "Bogbook is a distributed news network made up of feeds signed by ed25519 keypairs, and then replicated between bogbook clients in the browser and bogbook pubs."

# Proto comparisons

Ryan @snarfed's protocol comparison chart: https://fed.brid.gy/docs#compare

# What is a proto?

Let's make our own proto -- https://apro.to/!

(and let's make it simple, so I can retire to my kayaking lifestyle and not worry about protos anymore.)

+ Content Addressable Storage

Let's start with a "rumor" and save it to CAS.

+ Signed messages

Let's authenticate it into a "message".

+ Networks

How do we share our message? 

# Bluesky today

Jay Graber's Bluesky and IPLD talk: https://www.youtube.com/watch?v=jGbBZbl-V8Y
Jack Dorsey funds Nostr: https://www.coindesk.com/tech/2022/12/15/jack-dorsey-gives-decentralized-social-network-nostr-14-btc-in-funding
Jack Dorsey quits Bluesky: https://www.reddit.com/r/Mastodon/comments/1cn4uwe/jack_dorsey_leaves_bluesky_board_unfollows_almost/
November election: https://tech.yahoo.com/social-media/articles/bluesky-home-millions-disillusioned-twitter-182604150.html
SXSW Jay Graber's 'world without Caesars' keynote: https://mashable.com/article/bluesky-jay-graber-keynote-session-sxsw-2025

# ATProto apps

Ev's https://skies.deno.dev/
Phil's https://constellation.microcosm.blue/
Juliet's https://pdsls.dev/
Dustin Moskovitz's https://shadowsky.io 

# Ongoing discussion

+ Is Bluesky centralized?
+ Mastodon/Bluesky beef

# Surprise! 🎯 Which Platform Are You?

: 🦀 ? 🕊

Shoutouts!




gamma.app
napkin.ai


cancel button on bluesky
~
