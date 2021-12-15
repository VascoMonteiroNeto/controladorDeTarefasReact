import { useState, useEffect } from "react"

const useFetch = (url) => {

  const [info, setInfo] = useState(null)
  const [pendente, setPendente] = useState(true)
  const [erro, setErro] = useState(null)

    useEffect(() => {

      setTimeout(() => {
        fetch(url)
          .then(res => {
            if (!res.ok){
              throw Error("Não foi possível carregar o quadro de tarefas")
            }
    
            return res.json()
          })
          .then(data => {
            setInfo(data)
            setPendente(false)
            setErro(null)
          })
          .catch(err => {
            setErro(err.message)
            setPendente(false)
          })
        }, 1000)
    
      }, [url])

      return {info, pendente, erro}
}

export default useFetch