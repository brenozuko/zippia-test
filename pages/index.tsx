import Link from "next/link";

// STYLES
import * as S from "../styles/home";

export default function Home() {
  // This link takes to the jobs page where you will find the most of the logic.

  return (
    <S.Container>
      <Link href="/test/jobs">Go to Jobs List </Link>
    </S.Container>
  );
}
