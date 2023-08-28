import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import styles from "./styles.module.css";

export function Button({
  ...rest
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) {
  return <button className={styles.button} {...rest} />;
}
