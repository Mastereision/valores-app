import { Card } from "react-bootstrap";

export default function InfoCard() {
    return (
        <Card>
            <Card.Body>
                <h2 className="text-center">Informació</h2>
                <hr></hr>
                Aquest treball ha sigut creat pels alumnes del centre José Ballester
                Gozalbo (3er E.S.O C). Aquest treball es una recopilació de notícies
                que tenen a veure amb els drets humans, La Unió Europea,
                entre altres conceptes vists a classe.
                <hr/>
                <h4>Alumnes:</h4>
                <b>Sara Lopez:</b>{' '}<span>Cordinadora</span><br/>
                <b>Carles Ortega:</b>{' '}<span>Maquetación</span><br/>
                <b>Mar Sánchez:</b>{' '}<span>Maquetación</span><br/>
                <b>Milene Chariguaman:</b>{' '}<span>Redactora</span><br/>
                <b>Dario Lopez:</b>{' '}<span>Traductor</span><br/>
                <b>judit Evangelio:</b>{' '}<span>Maquetación</span><br/>
                <b>Josep Malonda:</b>{' '}<span>Programador Pagina web</span>
            </Card.Body>
        </Card>
    )
}