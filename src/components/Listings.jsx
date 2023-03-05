import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Listings = () => {
    return (
        <div style={{ margin: "auto"}}>
                <h2 style={{textAlign: "center"}}>Store Listing</h2>
            <Container style={{ marginTop: "50px", textAlign: "center" }}>
                <Row className="p-4" style={{ borderBottom: "1px solid #E8E9EB"}} >
                    <Col sm>
                        <Row>
                            <Col xs={2} >
                                <Image style={{ height: "50px", width: "50px"}} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                            </Col>
                            <Col xs={6} style={{ textAlign: "left"}} >
                                <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm>
                        <Row >
                            <Col xs={2}>
                                <Image style={{ height: "50px", width: "50px"}} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png" roundedCircle />
                            </Col>
                            <Col xs={6} style={{ textAlign: "left"}} >
                                <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                                <p>Delivery * Pickup</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm>
                        <Row >
                            <Col xs={2} >
                                <Image style={{ height: "50px", width: "50px"}} src="https://photos.prnewswire.com/prnfull/20150408/197347LOGO" roundedCircle />
                            </Col>
                            <Col xs={6} style={{ textAlign: "left"}} >
                                <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col >
                </Row>

                <Row className="p-4" style={{ borderBottom: "1px solid #E8E9EB"}} >
                    <Col sm>
                        <Row>
                            <Col xs={2} >
                                <Image style={{ height: "50px", width: "50px"}} src="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/45/d10d0f4b-1fca-4b84-bc19-bbf492c040da.png" roundedCircle />
                            </Col>
                            <Col xs={6} style={{ textAlign: "left"}} >
                                <h5 style={{ fontWeight: "bold" }}>H-E-B</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm>
                        <Row >
                            <Col xs={2}>
                                <Image style={{ height: "50px", width: "50px"}} src="https://pbs.twimg.com/profile_images/1459948503740948481/yZCJCYS9_400x400.jpg" roundedCircle />
                            </Col>
                            <Col xs={6} style={{ textAlign: "left"}} >
                                <h5 style={{ fontWeight: "bold" }}>Sam's club</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm>
                        <Row >
                            <Col xs={2} >
                                <Image style={{ height: "55px", width: "55px"}} src="https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle />
                            </Col>
                            <Col xs={6} style={{ textAlign: "left"}} >
                                <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                                <p>Delivery</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>        
        </div>
    )
}

export default Listings