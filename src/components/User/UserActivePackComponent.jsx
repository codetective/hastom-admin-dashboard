import {Form, Row, Col, Tabs, Tab} from 'react-bootstrap';
import React from "react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    WrapItem,
    Avatar,
    ModalOverlay,
    useDisclosure, Stack, Box
} from "@chakra-ui/react";
import UserReportComponent  from "./UserReportComponent";

const UserActivePackComponent  = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div classname="tab-component-wrapper">

            <div className="mini-card  mb-4 rounded-2 w-100">
                <div className="card-name">
                    Filter
                </div>
                <div className="card-form w-100">
                    <Form className="w-100 ">
                        <Row className="w-100">
                            <Col className="my-2 col-md-6 col-lg-3 col-12">
                                <input className="form-control form-control-sm" list="datalistOptions" id="exampleDataList"
                                       placeholder="Cycle..."/>
                                <datalist id="datalistOptions">
                                    <option value="Rainy Season 2021"/>
                                    <option value="Rainy Season 2022"/>

                                </datalist>
                            </Col>

                            <Col  className="my-2 col-md-6 col-lg-4 col-12">
                                <Form.Control placeholder="Filter Date" id="date2" size="sm" type="text" onFocus={(e) => {
                                    document.getElementById("date2").type='date';
                                }}/>
                            </Col>
                            <Col className="my-2">
                                <button className="btn btn-add-outline">Apply</button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>

            <div className="table-section w-100">
                <table className="table tabx table-responsive over-h">
                    <thead>
                    <tr>

                        <th>Pack ID</th>
                        <th>Date Ordered</th>
                        <th>Ordered by</th>
                        <th>Order Details</th>
                        <th>QTY / Price</th>
                        <th>Profit</th>
                        <th>Reports</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Pack ID</td>
                        <td><b>15/20/2021</b></td>

                        <td>Omolola Daniel <br/> <b>email@gmail.com</b><br/> 08149423902</td>
                        <td>
                            <b>Farm: </b>Cassava 2021 <br/>
                            <small><b>CYCLE- </b> Rainy Season 2021</small><br/>
                            <small><b>Type- </b> Cassava</small><br/>

                        </td>
                        <td>
                            <small className="text-white px-3 py-2 bg-dark"><b>QTY- </b>10</small>
                            <small className="text-white px-3 py-2 bg-success2"><b>Price- </b>540,000</small>
                        </td>

                        <td>
                            <span className="text-success"><b> # 0 : yeilding</b></span>
                        </td>
                        <td>
                            <b>300</b> <br/>
                            <span onClick={onOpen} className="text-decoration-underline pointer">View all</span>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>

            <Modal isOpen={isOpen} onClose={onClose} size={"full"} >
                <ModalOverlay />
                <ModalContent className="mt-0 rounded-0 p-md-5" backgroundColor="#fafafa">
                    <ModalCloseButton className="btn-cls" />
                    <ModalBody className="pb-4 pt-3" >
                        <div>
                            <UserReportComponent/>
                        </div>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )
}

export default UserActivePackComponent