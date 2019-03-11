import React from "react"
import Typography from "@material-ui/core/Typography"

import Row from "components/Row"
import Column from "components/Column"

function From ({ createdBy }) {

  return (
    <Row>
      <Column lg={12} md={12} xs={12}>
        <Typography variant="caption">
          From: {createdBy.first_name} {createdBy.last_name}
        </Typography>
      </Column>
    </Row>
  )
}

export default From
