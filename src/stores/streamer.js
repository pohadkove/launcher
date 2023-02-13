// src/stores/content.js
import { writable } from 'svelte/store'

// Get the value out of storage on load.
const stored = localStorage.streamer
// or localStorage.getItem('content')

// Set the stored value or a sane default.
export const streamer = writable(stored || 'pohadkove')

// Anytime the store changes, update the local storage value.
streamer.subscribe((value) => localStorage.streamer = value)
// or localStorage.setItem('content', value)