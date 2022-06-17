import { observer } from "mobx-react-lite"
import { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { updatePet } from "../http/petsApi"

const UpdatePet = observer(({show,onHide}) => {
    const [file,setFile] = useState(null)
    let {id} = useParams()
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    
    const savePhoto = () => {
        const formData = new FormData()
        formData.append('photo',file)
        updatePet(id,formData).then(data => console.log(data)).then(onHide)
    }

    return(
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Add pet photos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control type='file' onChange={selectFile} />
                    <Button variant='dark'className='mt-2' onClick={savePhoto}>Save</Button>
                    <Button variant='dark' className='mt-2 mx-2' onClick={onHide}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
})

export default UpdatePet