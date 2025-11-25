import { useApiGet } from './useApiGet'
import { useApiPost } from './useApiPost'
export function useApi(url) {
    const get = useApiGet(url)
    const post = useApiPost(url)
    return {
        get,
        post
    }
}