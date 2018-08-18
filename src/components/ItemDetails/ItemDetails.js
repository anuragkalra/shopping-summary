import React, { Component } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({open: !this.state.open})}
        >
        {this.state.open === false ? 'See' : 'Hide'} Item Details
        {this.state.open === false ? ' +' : ' -'}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Media>
                <Media.Left>
                  <img
                  width={100}
                  height={100}
                  alt="thumbnail"
                  src="https://images-na.ssl-images-amazon.com/images/I/91jHpMn16fL._UX695_.jpg"
                  />
                </Media.Left>
                <Media.Body>
                  <p>Crocs Unisex Classic Realtree Clog</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${this.props.price}`}</strong>
                    </Col>
                  </Row>
                </Media.Body>
              </Media>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
