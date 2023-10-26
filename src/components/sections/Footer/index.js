import React from "react";
import styles from "./Footer.module.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
// import SearchIcon from '@mui/icons-material/Search';

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      {/* <div className={styles.footerheading}>
        <div className={styles.logo}>logo</div>
        <div className={styles.mainheader}>
          <p className={styles.header}>SIGNUP FOR NEW SELLERS</p>
          <p className={styles.paragraph}>
            Want To Latest Updates ! Sign Up For Free
          </p>
        </div>
        <div className={styles.searchbar}>
          <input style={{ height: "32px" }} placeholder="Enter Your Email" />
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "6x 6px",
              height: "32px",
            }}
          >
            SUSCRIBE
          </button>
        </div>
      </div> */}

      <div className={styles.footerdetails}>
        <div style={{ marginRight: "30px", marginLeft: "40px" }}>
          <ul>
            <h1>QUICK LINKS</h1>
            <li>About Us</li>
            <li>Our Process</li>
            <li>CSR Activities</li>
            <li>Recipes</li>
            <li>Offices</li>
            <li>Retail Store & Restaurants</li>
          </ul>
        </div>
        <div style={{ marginRight: "80px" }}>
          <ul>
            <h1>OUR SERVICES</h1>
            <li>Bulk Order</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>

          <ul>
            <h1>VIDEOS</h1>
            <li>Brand Videos</li>
            <li>Recipe Vedios</li>
          </ul>
        </div>
        <div style={{ marginRight: "80px" }}>
          <ul>
            <h1>OUR POLICES</h1>
            <li>Cancellation &Refund</li>
            <li>Shipping</li>
            <li>Payments</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div style={{ marginRight: "80px" }}>
          <ul>
            <h1>REACH US</h1>
            <h2>
              EMAIL:
              <span> tripathy@gmail.com</span>
            </h2>
            <h2>
              CALL:
              <span> +91 712-2779451</span>
            </h2>
            <h2>
              Customer Care Timming:
              <span> 10:00AM To 6:00PM </span>
            </h2>
          </ul>
        </div>
        <div style={{}}>
          <ul>
            <h1>FOLLOW US</h1>
            <div style={{ display: "flex" }}>
             <FacebookIcon style={{color:'blue'}}/>
              <span>FACEBOOK</span>
            </div>

            <div style={{ display: "flex" }}>
              <TwitterIcon style={{color:'blue'}}/>
              <span>TWITTER</span>
            </div>
            <div style={{ display: "red" }}>
              <InstagramIcon style={{color:'red'}}/>
              <span>INSTAGRAM</span>
            </div>
            <div style={{ display: "flex" }}>
              <YouTubeIcon style={{color:'red'}}/>
              <span>YOUTUBE</span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
