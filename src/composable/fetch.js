import { ref } from 'vue'

export function useFetch(url,type) {
  const data = ref(null)
if (type === 'category') {
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json['trivia_categories']))
    .catch((error) => console.log(error.message))
} else {
  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((error) => console.log(error.message))
}
  return data
}