import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards'
import ContactModal from './ContactModal'

const App = () => {
  const url = 'https://randomuser.me/api/?results=200'
  const { data } = useFetch(url)
  const [selectedContact, setSelectedContact] = useState(null)
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
    <div className="bg-gray-100">
      <section>
        <form>
          <input
            type={"text"}
            placeholder={"type here to filter..."}
            onChange={event => setFilterQuery(event.target.value)}
            className={"ml-20 mt-6 rounded-md p-2"}
          />
        </form>
      </section>
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20">
        {contactList?.length < 1 && (
          <h1>No data matches your search</h1>
        )}
        <ContactCards
          contactList={contactList}
          setSelectedContact={setSelectedContact}
        />
      </section>
      <AnimatePresence>
        {selectedContact &&
          <ContactModal
            contact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        }
      </AnimatePresence>
    </div>
  )
}

export default App
