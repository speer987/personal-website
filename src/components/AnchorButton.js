export default function AnchorButton({ href, id, text }) {
  return (
    <a className="custom-a" href={href}>
      <button id={id}>{text}</button>
    </a>
  );
}
