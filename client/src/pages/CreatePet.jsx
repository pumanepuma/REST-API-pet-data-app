import { observer } from "mobx-react-lite"
import { useContext, useState } from "react"
import { Container, Form, Card, Button } from "react-bootstrap"
import { Context } from ".."

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
        pets.setPets({name,age,type})
    }
    return(
        <Container className='d-flex flex-column justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}>
            <Card style={{width:600}} className='p-5 m-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Enter pet name'
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
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
                    <Button variant="primary" type="submit"
                    onClick={savePet}>
                        Save
                    </Button>
                </Form>
            </Card>
        </Container>
    )
})

export default CreatePet