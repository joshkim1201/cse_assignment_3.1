import Link from 'next/link'

export default function FirstPost() {
  return(
    <>
      <h1>My name is Yejoon Joshua Kim</h1>
      <h2>@HYU.INFOSYS</h2>
      <h3>Graduated from DanKookhighschool</h3>
      <h4>Hello Hello</h4>
      <h5>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h5>
    </>
  );
}
