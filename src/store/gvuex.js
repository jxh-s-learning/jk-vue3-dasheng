import { inject, reactive, computed } from 'vue'

const STORE_KEY = '__store__'

function useStore() {
    return inject(STORE_KEY)
}

function createStore(options) {
    return new Store(options)
}

class Store {
    constructor(options) {
        this.$options = options
        this._state = reactive(options.state()) // 直接使用 options.state()
        this._mutations = options.mutations || {}
        this._actions = options.actions || {}
        this._getters = {}

        // 处理 getters
        if (options.getters) {
            for (const [key, fn] of Object.entries(options.getters)) {
                this._getters[key] = computed(() => fn(this._state)) // 用 computed 确保是响应式的
            }
        }
    }

    get state() {
        return this._state
    }

    get getters() {
        return this._getters
    }

    commit = (type, payload) => {
        const entry = this._mutations[type]
        if (!entry) {
            console.warn(`[Store] Mutation "${type}" not found`)
            return
        }
        entry(this._state, payload)
    }

    dispatch = async (type, payload) => {
        const action = this._actions[type]
        if (!action) {
            console.warn(`[Store] Action "${type}" not found`)
            return
        }
        return await action(this, payload)
    }

    install(app) {
        app.provide(STORE_KEY, this)
    }
}

export { createStore, useStore }
