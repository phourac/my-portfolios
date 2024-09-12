import { socials } from "@/utils/data-util";
import styles from "./style.module.scss";
import Link from "next/link";

export default function index() {
  return (
    <div className={styles.footer}>
      {socials.map((item, i) => (
        <Link key={i} href={item.link} target="_blank">
          {item.name}
        </Link>
      ))}
    </div>
  );
}
