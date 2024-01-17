"use client";
import Link from "next/link";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

import png from "@public/img/1.png";
import jpg from "@public/img/1.jpg";
import svgIcon from "@public/img/1.svg";

import { Icon } from "./Icon";
import styles from "./styles.module.css";
import stylesScss from "./styles.module.scss";

export default function ClientPage() {
  // console.log("env клиентский компонент", process.env.NEXT_PUBLIC_BASE_PATH);

  const [value, setValue] = useState("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h1 className={styles.title}>Клиентский компонент</h1>
      <div>
        <input type="text" value={value} onChange={onChange} />
      </div>
      <div className={styles.imageBlock}>
        <Image
          className={styles.image}
          src={png}
          alt="png image"
          width={100}
          height={100}
        />
        <Image
          className={styles.image}
          src={jpg}
          alt="jpg image"
          width={100}
          height={100}
        />
        <Image
          className={styles.image}
          src={svgIcon}
          alt="svg icon"
          width={100}
          height={100}
        />
        <Icon />
      </div>
      <div className={stylesScss.linksBlock}>
        <Link className={stylesScss.link} href="/">
          Серверный компонент
        </Link>
      </div>
    </>
  );
}
