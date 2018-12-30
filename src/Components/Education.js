import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Row,
  Col
} from 'reactstrap'

class Education extends Component {
  render() {
    return(
      <Row className={this.props.data.id}>
        <Col xs={12} className="text-center heading-wrapper mb-3 py-2">
          <h2 className="heading m-0" dangerouslySetInnerHTML={{ __html: this.props.data.title }}></h2>
        </Col>
        <Col xs={12}>
        {this.props.data.paragraphs.map((section, key) => {
          return(
            <Row key={key}>
              <Col xs={12} sm={3} className="title-wrapper"><h5 className="title text-center text-sm-right" dangerouslySetInnerHTML={{ __html: section.date }}></h5></Col>
              <Col xs={12} sm={9}>
                <p>{section.text}</p>
              </Col>
            </Row>
          )
        })}
        </Col>
      </Row>
    )
  }
}

Education.propTypes = {
  data: PropTypes.object,
}

export default Education