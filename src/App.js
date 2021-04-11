const App = () => {
  return (
    <figure className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gray-100 p-20">
      <div className="bg-white text-white h-80 rounded-lg shadow-md">
        <img alt="user" className="w-32 h-32 rounded-full mx-auto m-5" src="https://randomuser.me/api/portraits/women/40.jpg" />
        <figcaption className="text-center">
          <p className="text-gray-700 font-semibold text-xl mb-2">Sarah Cooper</p>
          <p className="text-gray-500">
            <span className="font-medium">email: </span>ida.gardner@example.com
          </p>
          <p className="text-gray-500">
            <span className="font-medium">phone: </span>(694)-420-2133
          </p>
          <p className="text-gray-500">
            <span className="font-medium">city: </span>Texas
          </p>
        </figcaption>
      </div>
      <div className="bg-white text-center text-white h-80 rounded-lg shadow-md">1</div>
      <div className="bg-white text-center text-white h-80 rounded-lg shadow-md">1</div>
      <div className="bg-white text-center text-white h-80 rounded-lg shadow-md">1</div>
      <div className="bg-white text-center text-white h-80 rounded-lg shadow-md">1</div>
      <div className="bg-white text-center text-white h-80 rounded-lg shadow-md">1</div>
      <div className="bg-white text-center text-white h-80 rounded-lg shadow-md">1</div>
      <div className="bg-white text-center text-white h-80 rounded-lg shadow-md">1</div>
    </figure>
  )
}

export default App
