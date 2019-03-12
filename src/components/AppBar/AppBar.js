import React from "react"
import { StyledAppBar, RightToolbar, LeftToolbar, CenterToolbar } from "./style"
import Row from "../Row"
import Column from "../Column"

export default function AppBar ({ leftComponent,  centerComponent, rightComponent }) {
  return (
    <StyledAppBar color="secondary" position="fixed" elevation={1}>
      <Row justifyContent="space-evenly">
        <Column lg={4} md={4} xs={-1}>
          <LeftToolbar>
            {leftComponent}
          </LeftToolbar>
        </Column>
        <Column lg={4} md={4} xs={-1}>
          <CenterToolbar>
            {centerComponent}
          </CenterToolbar>
        </Column>
        <Column lg={4} md={4} xs={12}>
          <RightToolbar>
            {rightComponent}
          </RightToolbar>
        </Column>
      </Row>
    </StyledAppBar>
  )
}
