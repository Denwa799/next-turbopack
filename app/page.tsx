import Link from "next/link";

export default function Page() {
  // console.log("env серверный компонент", process.env.NEXT_PUBLIC_BASE_PATH);
  return (
    <>
      <h1>Серверный компонент</h1>
      <Link href="/client">Клиентский компонент</Link>
    </>
  );
}
