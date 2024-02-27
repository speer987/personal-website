export default function AnchorButton({ href, id, text }) {
  return (
    <a href={href}>
      <button id={id}>{text}</button>
    </a>
  );
}
