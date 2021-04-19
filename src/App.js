import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards'

const App = () => {
  const url = 'https://randomuser.me/api/'
  const { data } = useFetch(url+'?results=10')

  return (
    <div className={"bg-gray-100"}>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        <ContactCards contactList={data?.results}/>
      </section>
    </div>
  )
}

export default App
