import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListContact, postNewContact, deleteContact, updateContact } from '../store/Actions/contact.action'
import { toast } from 'react-toastify'

const ContactList = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [typeSubmit, setTypeSubmit] = useState('add')
  const [editId, setEditId] = useState('')
  const [payloadContact, setPayloadContact] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
  })
  
  const { getListContactResult, getListContactLoading, getListContactError } = useSelector(
    (state) => state.ContactReducer,
  )
  const { postNewContactLoading, postNewContactError  } = useSelector(
    (state) => state.ContactReducer,
  )
  const { deleteContactError, deleteContactLoading  } = useSelector(
    (state) => state.ContactReducer,
  )
  const { updateContactError, updateContactLoading  } = useSelector(
    (state) => state.ContactReducer,
  )
  
  const dispatch = useDispatch()


  const handleInputChange = (event) => {
    const {name, value} = event.target;
    
    setPayloadContact((prev) => ({
      ...prev,
      [name]: value.replace(/\s/g, "")
    }))
  }
  const showNotification = (message) => {
    toast(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    })
  }

  const clearPayload = () => {
    setPayloadContact({
      firstName: '',
      lastName: '',
      age: '',
      photo: ''
    })
  }
  
  const handleShowAddModal = () => {
    setTypeSubmit('add')
    clearPayload()
    setShowModal(true)
  }
  const handleShowEditModal = (id, data) => {
    setTypeSubmit('edit')
    setEditId(id)
    payloadContact.firstName = data.firstName
    payloadContact.lastName = data.lastName
    payloadContact.age = data.age
    payloadContact.photo = data.photo
    setShowModal(true)
  }

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
    if(!deleteContactLoading) {
      if(!deleteContactError){
        showNotification('Success delete contact')
        dispatch(getListContact())
      }else{
        showNotification('Failed delete contact')
      }
    }
  }
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if(typeSubmit === 'add') {
      dispatch(postNewContact(payloadContact))
      if(!postNewContactLoading) {
        if(!postNewContactError){
          showNotification('Succes add new contact')
          clearPayload()
          setShowModal(false)
          dispatch(getListContact())
        }else{
          showNotification('Failed add new contact')
        }
      }
    } else if (typeSubmit === 'edit') {
      dispatch(updateContact(editId, payloadContact))
      if(!updateContactLoading) {
        if(!updateContactError) {
          showNotification('Succes updating contact')
          clearPayload()
          setShowModal(false)
          dispatch(getListContact())
        }else{
          showNotification('Failed updating contact')
        }
      }
    }
  }, [updateContactLoading, updateContactError, postNewContactLoading, postNewContactError,dispatch, editId, payloadContact, typeSubmit])
  
  useEffect(() => {
    dispatch(getListContact())
  }, [ dispatch])

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add New Contact</h3>
                </div>
                <form onSubmit={(event) => handleSubmit(event)}>
                <div className="relative p-6 flex-auto w-full sm:w-106">
                  <div className="grid items-center">
                    <label className="text-lg">
                      First Name :
                    </label>
                    <input
                      type="text"
                      value={payloadContact.firstName}
                      id="firstName"
                      required
                      name='firstName'
                      onChange={handleInputChange}
                      className="border rounded-lg text-xl px-4 py-2"
                      placeholder="Contact First Name"
                    />
                  </div>
                  <div className="grid items-center">
                    <label  className="text-lg">
                      Last Name :
                    </label>
                    <input
                      type="text"
                      value={payloadContact.lastName}
                      id="lastName"
                      required
                      name='lastName'
                      onChange={handleInputChange}
                      className="border rounded-lg text-xl px-4 py-2"
                      placeholder="Contact Last Name"
                    />
                  </div>
                  <div className="grid items-center">
                    <label  className="text-lg">
                      Age :
                    </label>
                    <input
                      type="number"
                      value={payloadContact.age}
                      onChange={handleInputChange}
                      id="age"
                      name='age'
                      required
                      className="border rounded-lg text-xl px-4 py-2"
                      placeholder="Contact Age"
                    />
                  </div>
                  <div className="grid items-center">
                    <label  className="text-lg">
                      Photo URL :
                    </label>
                    <input
                      type="text"
                      id="photo"
                      name='photo'
                      onChange={handleInputChange}
                      value={payloadContact.photo}
                      className="border rounded-lg text-xl px-4 py-2"
                      placeholder="Contact Photo Url"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="p-4 sm:p-6 grid gap-4 sm:gap-6 min-h-0">
        <div className="w-full flex justify-between items-center">
          <p className="text-heading2 font-semibold">Contact</p>
          <div>
            <div
              className="text-lg bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={() => handleShowAddModal()}
            >
              Add new contact
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {getListContactResult ? (
            getListContactResult.map((contact) => {
              return (
                <div key={contact.id}>
                  <div className="flex m-2 bg-white rounded-lg p-4" >
                    <div className="align-items-center">
                      {contact.photo && (contact.photo.includes('jpg') || contact.photo.includes('jpeg') || contact.photo.includes('png')) ? (
                        <div
                          className="mr-2"
                          style={{
                            backgroundImage: `url('${contact.photo}')`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            height: '64px',
                            width: '64px',
                            borderRadius: '50px',
                          }}
                        ></div>
                      ) : (
                        <div
                          className="mr-2 bg-midnight rounded-full flex flex-col justify-center items-center cursor-default select-none"
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '50px',
                          }}
                        >
                          <p className="text-white text-subheading font-medium">
                            {contact.firstName[0]}
                          </p>
                        </div>
                      )}
                    </div>
                    <div>
                      <p>#{contact.id}</p>
                      <div className="my-2 flex gap-2 items-center justify-between">
                        <div>
                          <span>Full Name</span>
                          <p className="text-2xl">
                            {contact.firstName} {contact.lastName}
                          </p>
                        </div>
                        <div>
                          <span>Age</span>
                          <p className="text-xl">{contact.age}</p>
                        </div>
                      </div>
                      <div className=" my-4 flex gap-2 justify-end">
                        <div>
                          <div className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick = {() => handleShowEditModal(contact.id, contact)}> 
                            Edit
                          </div>
                        </div>
                        <div>
                          <div className="text-xs bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={() => handleDelete(contact.id)}>
                            Delete
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          ) : getListContactLoading ? (
            <p>Loading...</p>
          ) : (
            <p>{getListContactError}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default ContactList
