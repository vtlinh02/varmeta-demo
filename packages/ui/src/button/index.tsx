// @ts-nocheck
"use client";
import { Star01Icon, Star02Icon, Star03Icon, Star04Icon, Star05Icon, Star06Icon } from "@var-meta/icons";
import { ButtonProps, Button as VARButton } from "@var-meta/ui";
import styles from "./button.module.css";
import clsx from "clsx";
type Props = ButtonProps & {
  starColor?: string;
}

export const Button = ({ children, className, starColor = "yellow", ...props }: Props) => {
  return (
    <VARButton {...props} className={clsx(styles.button, className)}>
      {children}
      <div className={styles.star_1}>
        <Star01Icon color={starColor} />
      </div>
      <div className={styles.star_2}>
        <Star02Icon color={starColor} />
      </div>
      <div className={styles.star_3}>
        <Star03Icon color={starColor} />
      </div>
      <div className={styles.star_4}>
        <Star04Icon color={starColor} />
      </div>
      <div className={styles.star_5}>
        <Star05Icon color={starColor} />
      </div>
      <div className={styles.star_6}>
        <Star06Icon color={starColor} />
      </div>
    </VARButton>
  );
};
