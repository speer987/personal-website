import ContactBlock from "./ContactBlock";

export default function Header({ role }) {
  return (
    <div className="flex two-p-padding one-p-bottom">
      <div id="header">
        <h1>Saarah Peer</h1>
        <p>Hi! I am a {role}.</p>
      </div>
      <ContactBlock />
    </div>
  );
}
