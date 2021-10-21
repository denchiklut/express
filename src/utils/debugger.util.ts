import debugLib from 'debug'

const debug = JSON.parse(`${process.env.DEBUG}`)
if (debug) debugLib.enable('APP:*')
else debugLib.disable()

export const getDebugger = (debugLabel: string) => debugLib(`APP:${debugLabel}`)
