// src/stores/content.js
import { writable } from 'svelte/store'

// Get the value out of storage on load.
const stored = localStorage.pfp
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const pfp = writable(stored || 'https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg')

// Anytime the store changes, update the local storage value.
pfp.subscribe((value) => localStorage.pfp = value)
// or localStorage.setItem('content', value)