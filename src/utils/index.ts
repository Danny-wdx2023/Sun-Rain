export const renderIcon = (icon: string) => {
  return () => h('i', { class: icon })
}

export const isMobile: boolean = window.innerWidth < 768
export const isPad: boolean = window.innerWidth < 768 && window.innerWidth > 375
export const isPhone: boolean = window.innerWidth <= 375

export function api(url: string, variable: Ref, fallback: unknown = undefined) {
  (async()=>{
    try {
      const res = await fetch(url)
      const json = await res.json()
      variable.value = json
    } catch (err) {
      console.error(`An error occurred when calling API from ${url}. \nDetails: ${err}`)
      variable.value = fallback
    }
  })()
}
