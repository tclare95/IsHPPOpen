import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'

export default function Header () {
    return (
        <Row className="justify-content-center">
            <Alert variant="danger">HPP will reopen 29/03/21. EA forecast data has an issue and is not lining up.</Alert>
        </Row>
    )
}