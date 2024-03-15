import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <strong>{CONFIG.blog.title} 🧑‍💻</strong>
    </StyledWrapper>
  )
}

export default Logo
const StyledWrapper = styled(Link)``