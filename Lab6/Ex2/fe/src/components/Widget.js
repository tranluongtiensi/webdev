import styled from "styled-components"

const Widget = () => {
  return (
    <WidgetWrapper>
    <iframe
        src=""
        width="340"
        height="1500"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
        title="Facebook Widget"
    >
    </iframe>
    </WidgetWrapper>
  )
}

const WidgetWrapper = styled.div``

export default Widget