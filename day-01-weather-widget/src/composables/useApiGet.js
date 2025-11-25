import { ref } from 'vue'
export function useApiGet(url) {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)
    const fetchData = async () => {
        loading.value = true
        error.value = null
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error('Error al obtener los datos')
            }
            const json = await res.json()
            data.value = json
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
        fetchData
    }
}
