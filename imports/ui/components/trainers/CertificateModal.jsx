import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import domtoimage from "dom-to-image";
import jsPDF from "jspdf";
import { css } from 'styled-components'


class ModalExampleSize extends Component {
    state = { open: false }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })

    printDocument() {
        domtoimage.toPng(document.getElementById('content2'))
            .then(function (blob) {
                var pdf = new jsPDF('l', 'pt', [$('#content2').width(), $('#content2').height()]);

                pdf.addImage(blob, 'PNG', 0, 0, $('#content2').width(), $('#content2').height());
                pdf.save("certificate.pdf");
            });
    }

    render() {
        const { open, size } = this.state;
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        const date=  new Date();
        return (
            <div>
                <Button onClick={this.show('fullscreen')}>Open Certificate</Button>

                <Modal size={size} open={open} onClose={this.close} closeIcon>
                    <Modal.Header>Congratulations! </Modal.Header>
                    <Modal.Content>
                        <div id="content2" className="mt4" {...css({
                            backgroundColor: '#f5f5f5',
                            width: '210mm',
                            minHeight: '297mm',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        })}>
                            <Modal.Description>
                            <div style={{width: '800px', height: '600px', padding: '20px', textAlign: 'center', border: '10px solid #787878'}}>
                                <div style={{width: '750px', height: '550px', padding: '20px', textAlign: 'center', border: '5px solid #787878'}}>
                                    <span style={{fontSize: '50px', fontWeight: 'bold'}}>Certificate of Completion</span>
                                    <br /><br />
                                    <span style={{fontSize: '25px'}}><i>This is to certify that</i></span>
                                    <br /><br />
                                    <span style={{fontSize: '30px'}}><b>{this.props.targetTrainer.firstName + " " + this.props.targetTrainer.lastName}   🏆 </b></span><br /><br />
                                    <span style={{fontSize: '25px'}}><i>achieved</i></span> <br /><br />
                                    <span style={{fontSize: '30px'}}>trainer of the trainers</span> <br /><br />
                                    <span style={{fontSize: '20px'}}>with score of <b>{this.props.avgScore}</b></span>
                                    <br /><br />
                                    <span style={{fontSize: '25px'}}><i>dated</i></span><br />
                                    {new Date(date).getDate() + "-" + months[new Date(date).getMonth()] + "-" + new Date(date).getFullYear()}

                                    <span style={{fontSize: '30px'}}></span>
                                </div>
                            </div>
                            </Modal.Description>
                        </div>
                            <br/>
                        <div className="mb5">
                            <button onClick={this.printDocument}>Download PDF</button>
                        </div>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default ModalExampleSize
