import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { ListGroup } from "react-bootstrap"
import { Context } from ".."

export const SideBar = observer(() => {
    const {pets} = useContext(Context)
    const selectType = (type) => {
        pets.setSelectedType(type)
    }
    const types = [{name:'Cat',id:1,value:'cat'},{name:'Dog',id:2,value:'dog'},{name:'All pets',id:3,value:undefined}]

    return (
        <ListGroup className='sidebar'>
            {types.map(type => {
                return <ListGroup.Item
                onClick={() => selectType(type.value)}
                key={type.id}
                id={type.id}
                style={{background:'transparent'}}>
                    {type.name}
                </ListGroup.Item>
            })}
        </ListGroup>
    )
})