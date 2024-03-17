import styled from "@emotion/styled"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const ContactCard: React.FC = () => {
  function handleCopyToClipboard(schoolEmail: string): void {
    navigator.clipboard.writeText(schoolEmail)
      .then(() => {
        alert("Email copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy email to clipboard:", error);
      });
  }

  return (
    <>
      <StyledTitle>
        <Emoji>💬</Emoji> Contact
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram className="icon" />
            <div className="name">instagram</div>
          </a>
        )}
        {CONFIG.profile.personalEmail && (
          <a
            // href={`mailto:${CONFIG.profile.personalEmail}`}
            rel="noreferrer"
            target="_blank"
            onClick={() => handleCopyToClipboard(CONFIG.profile.personalEmail)}
            css={{ overflow: "hidden" }}
          >
            <AiOutlineMail className="icon" />
            <div className="name">{CONFIG.profile.personalEmail}</div>
          </a>
        )}
        {CONFIG.profile.schoolEmail && (
          <a
            // href={`mailto:${CONFIG.profile.schoolEmail}`}
            rel="noreferrer"
            target="_blank"
            onClick={() => handleCopyToClipboard(CONFIG.profile.schoolEmail)}
            css={{ overflow: "hidden" }}
          >
            <AiOutlineMail className="icon" />
            <div className="name">{CONFIG.profile.schoolEmail}</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <AiFillLinkedin className="icon" />
            <div className="name">linkedin</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
