import {StateType } from '../types/types'

const INITIAL_STATE: StateType = {
    mode: "light",
    query: 'furry+monster',
    data: [],
}

const CATEGORIES = ['Giant', 'Pink', 'Cute', 'Art', 'Little', 'Friendly', 'Mythical']

export { INITIAL_STATE, CATEGORIES }