import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards'
import ContactModal from './ContactModal'

const App = () => {
  const url = 'https://randomuser.me/api/?results=10'
  const { data } = useFetch(url)
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <div className="bg-gray-100">
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20">
        <ContactCards
          contactList={data?.results}
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
