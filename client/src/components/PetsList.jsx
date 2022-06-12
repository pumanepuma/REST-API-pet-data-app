import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import { Pet } from "../../../server/models/models";

export const PetsList = observer(() => {
    const {pets} = useContext(Context)
    
    return (
        <Row>
            {pets._pets.map(pet => <Pet key={pet.id} pet={pet}/>)}
        </Row>
    )
})