import { observer } from "mobx-react-lite"
import { useContext, useState } from "react"
import { Container, Form, Card, Button } from "react-bootstrap"
import { Context } from ".."
import { createPet } from "../http/petsApi"

const CreatePet = observer(() => {
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [type,setType] = useState('')
    const [file,setFile] = useState(null)
    const {pets} = useContext(Context)
    const selectFile = (e) => {
        setFile(e.target.files[0])
    }
    const savePet = () => {
        const formData = new FormData()
        formData.append('name',name)
        formData.append('age',`${age}`)
        formData.append('type',{type})
        formData.append('cover',file)
        createPet(formData).then(data => console.log(data))
    }
    return(
        <Container className='d-flex flex-column justify-content-center align-items-center'
        style={{height: window.innerHeight - 160}}>
            <Card style={{width:600,textAlign:'left', background: 'transparent'}} className='p-5 m-auto'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter pet name'
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type='number' placeholder='Enter pet age'
                        value={age} onChange={(e) => setAge(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Check inline label='cat' name="pet-type" type='radio'
                        value='type' onClick={(e) => setType(e.target.value)}/>
                        <Form.Check inline label='dog' name="pet-type" type='radio'
                        value='type' onClick={(e) => setType(e.target.value)}/>
                    </Form.Group>
                    <Form.Control className='mt-2' type='file' onChange={selectFile}/>
                    <Button className='mt-3' type='submit' variant="dark"
                    onClick={savePet}>
                        Save
                    </Button>
                </Form>
            </Card>
        </Container>
    )
})

export default CreatePet