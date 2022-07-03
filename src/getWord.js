import { words } from './words'

export function getWord() {
    const possibleWords = words()
    const word = possibleWords[Math.floor(Math.random() * possibleWords.length)]
    return word
}