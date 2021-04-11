import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards'
import {useEffect, useState} from 'react'

const App = () => {
  const url = 'https://randomuser.me/api/'
  const { isLoading, data, error } = useFetch(url+'?results=200')
  const [contactList, setContactList] = useState()
  const [filterQuery, setFilterQuery] = useState()

  useEffect(() => {
    if (!filterQuery) {
      setContactList(data?.results?.slice(0, 10))
    } else {
      const queryString = filterQuery.toLowerCase()
      const filteredData = data?.results?.filter(contact => {
        const fullName = `${contact.name.first} ${contact.name.last}`

        // if it's just one letter, return all names that start with it
        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase()
          return firstLetter === queryString
        }
        else {
          return fullName.toLowerCase().includes(queryString)
        }
      })
      setContactList(filteredData)
    }
  }, [data, filterQuery])

  return (
    <div className={"bg-gray-100 pt-3"}>
      <section>
        <form>
          <input
            type={"text"}
            placeholder={"type keyword to search..."}
            onChange={event => setFilterQuery(event.target.value)}
          />
        </form>
      </section>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        <ContactCards contactList={contactList}/>
      </section>
    </div>
  )
}

export default App
