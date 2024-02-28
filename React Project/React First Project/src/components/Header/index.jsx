import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://www.github.com/JeanFeitani.png" alt="User picture" />
        <div>
          <span>Bem-vindo</span>
          <strong>Jean Feitani</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
