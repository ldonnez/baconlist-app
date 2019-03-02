import React from "react"
import { StyledChip, TagsContainer } from "./style"

function TagChips ({ tags }) {
  return (
    <TagsContainer>
      { tags && tags.map(tag => {
        return (
		      <StyledChip key={tag.value} label={tag.value} />
        )
      }) }
    </TagsContainer>
  )
}

export default TagChips
