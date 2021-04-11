import useFetch from 'react-fetch-hook'
import ContactCards from './ContactCards'

const App = () => {
  const url = 'https://randomuser.me/api/'
  const { isLoading, data, error } = useFetch(url+'?results=200')
  console.log(data)

  return (
    <div className={"bg-gray-100 pt-3"}>
      <section>
        <form>
          <input type={"text"} placeholder={"type keyword to search..."}/>
        </form>
      </section>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        <ContactCards data={data}/>
      </section>
    </div>
  )
}

export default App
