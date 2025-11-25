import { ref } from 'vue'
export function useApiPost(url) {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)
    const send = async (bodyObj = {}) => {
        loading.value = true
        error.value = null
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyObj)
            })
            if (!res.ok) {
                throw new Error('Error en el POST')
            }
            data.value = await res.json()
        } catch (e) {
            console.error(e)
            error.value = e.message || 'Error desconocido'
            data.value = null
        } finally {
            loading.value = false
        }
    }
    return {
        data,
        loading,
        error,
        send
    }
}
