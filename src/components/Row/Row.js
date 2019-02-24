import styled from "@emotion/styled"

export default styled("div")(props => {
	return {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		[props.margin ? "margin" : null]: `${props.margin}px 0px ${props.margin}px 0px`
	}
})
