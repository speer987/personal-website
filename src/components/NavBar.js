import AnchorButton from "./AnchorButton";
export default function NavBar() {
  return (
    <div>
      <AnchorButton href={"#title-one"} id={"button-one"} text={"Experience"} />
      <AnchorButton href={"#title-two"} id={"button-two"} text={"Projects"} />
      <AnchorButton href={"#title-three"} id={"button-three"} text={"Skills"} />
      <AnchorButton
        href={"#title-four"}
        id={"button-four"}
        text={"Education"}
      />
    </div>
  );
}
