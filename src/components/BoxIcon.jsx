import styled from "styled-components";
import {
  FaInstagram,
  FaMastodon,
  FaTwitter,
  FaGithub,
  FaTumblr,
} from "react-icons/fa";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
`;

const Box = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #44475a;
  font-size: 1.5rem;
`;

export default function BoxIcon() {
  return (
    <Wrapper>
      <a href="https://github.com/coderapha" target="_blank" title="Github">
        <Box>
          <FaGithub />
        </Box>
      </a>

      <a
        href="https://bolha.us/web/@raphaelcardoso"
        target="_blank"
        title="Mastodon"
      >
        <Box>
          <FaMastodon />
        </Box>
      </a>

      <a href="https://coderapha.tumblr.com/" target="_blank" title="Tumblr">
        <Box>
          <FaTumblr />
        </Box>
      </a>

      <a
        href="https://instagram.com/coderapha"
        target="_blank"
        title="Instagram"
      >
        <Box>
          <FaInstagram />
        </Box>
      </a>

      <a href="https://twitter.com/coderapha" target="_blank" title="Twitter">
        <Box>
          <FaTwitter />
        </Box>
      </a>
    </Wrapper>
  );
}
