import { motion } from 'framer-motion'

const ContactCards = ({ contactList, setSelectedContact }) => {
return (
    <>
      {contactList?.map((contact, index) => (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ duration: index/5 }}
          drag={true}
          dragElastic={1}
          dragConstraints={{ top: 1, bottom: 1, right: 1, left: 1 }}
          className="bg-white text-white h-80 rounded-lg shadow-md"
          key={index}
          onClick={() => setSelectedContact(contact)}
        >
          <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.picture.large} />
          <figcaption className="text-center mt-5">
            <p className="text-gray-700 font-semibold text-xl mb-2">
              {contact.name.first} {contact.name.last}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">email: </span>{contact.email}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">phone: </span>{contact.cell}
            </p>
            <p className="text-gray-500">
              <span className="font-medium">city: </span>{contact.location.city}
            </p>
          </figcaption>
        </motion.button>
      ))}
    </>
  )
}

export default ContactCards
