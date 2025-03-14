import React from "react";
import styles from "./Footer.module.css";
import HeaderLogo from "../header/HeaderLogo";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <footer className={styles.footer}>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#ffa228", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#ff6432", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.footer_container}>
        <div className={styles.footer_block}>
          <div className={styles.footer_blockItem}>
            <HeaderLogo />
          </div>
          <div className={styles.footer_blockItem}>
            <h3>Home</h3>
            <Link href="#">To Order</Link>
            <Link href="#">About us</Link>
            <Link href="#">Events</Link>
            <Link href="#">Menu</Link>
          </div>
          <div className={styles.footer_blockItem}>
            <h3>Events</h3>
            <Link href="#">3 Pizza 1 Free Coffee</Link>
            <Link href="#">2 Pizza for 1 Price</Link>
            <Link href="#">Kitchen Tour</Link>
          </div>
          <div className={styles.footer_blockItem}>
            <h3>Menu</h3>
            <Link href="#">Show All</Link>
            <Link href="#">Seaproducts</Link>
            <Link href="#">Vegan</Link>
            <Link href="#">Meat</Link>
          </div>
          <div className={styles.footer_blockItem}>
            <h3>About Us</h3>
            <Link href="#">Our History</Link>
            <Link href="#">Why We?</Link>
          </div>
        </div>

        <div className={styles.footer_contacts}>
          <div>
            <span className={styles.plus}>+</span>{" "}
            <span className={styles.footer_number}>7 (937) 333-55-33</span>
          </div>

          <div className={styles.footer_socialLinks}>
            <Link href="#">
              <FaInstagram className={styles.footer_socialLinks_icon} />
            </Link>
            <Link href="#">
              <TfiTwitterAlt className={styles.footer_socialLinks_icon} />
            </Link>
            <Link href="#">
              <FaFacebook className={styles.footer_socialLinks_icon} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
