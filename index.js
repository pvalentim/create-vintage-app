#!/usr/bin/env node

const lolcatjs = require('lolcatjs')
const cowsay = require('cowsay')
const text = `
Thanks for installing create-vitange-app.
The true connoisseur doesn't use NPM.
`

lolcatjs.options.seed = Math.round(Math.random() * 1000)
lolcatjs.options.colors = true

lolcatjs.println(cowsay.say({
  text,
  e: '==',
  T: '||'
}))
