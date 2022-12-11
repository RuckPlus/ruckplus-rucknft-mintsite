import { atom } from 'jotai'
import { loadable } from 'jotai/utils'

import { checkAutoConnectable } from '@/asyncs/metamask'

export const autoConnectStatusAtom = atom<'loading' | 'success' | 'failure'>('loading')
autoConnectStatusAtom.debugLabel = 'autoConnectStatus'

export const checkAutoConnectableAtom = loadable(atom(checkAutoConnectable))
checkAutoConnectableAtom.debugLabel = 'checkAutoConnectable'

export const accountAddressAtom = atom<null | string>(null)
accountAddressAtom.debugLabel = 'accountAddress'

export const networkStatusAtom = atom<'notInstalled' | 'loading' | 'valid' | 'invalid'>('loading')
