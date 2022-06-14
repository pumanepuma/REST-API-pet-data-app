import { observer } from "mobx-react-lite"
import { ListGroup } from "react-bootstrap"

export const SideBar = observer(() => {
    return (
        <ListGroup className='sidebar'>
            <ListGroup.Item style={{background:'transparent'}}>Cats</ListGroup.Item>
            <ListGroup.Item style={{background:'transparent'}}>Dogs</ListGroup.Item>
            <ListGroup.Item style={{background:'transparent'}}>All pets</ListGroup.Item>
        </ListGroup>
    )
})