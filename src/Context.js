import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([])
  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setAllPhotos(data)
    }
    fetchPhotos()
  }, [])

  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) =>
      photo.id === id ? { ...photo, isFavorited: !photo.isFavorited } : photo
    )
    setAllPhotos(updatedArr)
  }

  return (
    <Context.Provider
      value={{ allPhotos: allPhotos, isFavorited: toggleFavorite }}
    >
      {children}
    </Context.Provider>
  )
}
