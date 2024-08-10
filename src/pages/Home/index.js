import MUIButton from "../../components/mui-button";
import styles from "./Home.module.scss";

const HomePage = () => {

  const whoBenefitList = ["Writers", "Content Creators", "Directors", "OTT's", "Production Houses"];

  return (
    <div id={styles.Home_wrapper}>

      <nav className={styles.navbar_logo_wrapper}>
        <div className={styles.logo_container}>
          <img src="./icons/writo-logo.svg" />
        </div>

        <div className={styles.navbar_container}>
          <MUIButton className={styles.btn_color} title="Upload a Script" variant="contained" />
          <MUIButton className={styles.btn_color} title="Explore a Script" variant="contained" />
          <MUIButton className={styles.btn_color} title="Choose your Role" variant="contained" />
          <MUIButton className={styles.btn_color} title="Get Started" variant="contained" />
        </div>
      </nav>

      <header className={styles.header_wrapper}>
        <div className={styles.logo_tagLine_container}>
          <img src="./icons/writo-icon.svg" />
          <span className={styles.tagLine_span}>Brings your ideas into Existence ...!</span>
          <MUIButton className={styles.btn_color} title="Lets Explore Us..." variant="contained" />
        </div>

        <img src="./images/homepage.png" />
      </header>

      <section className={styles.section_whoWeAre_wrapper}>
        <div className={styles.whoWeAre_img_container}>
          <img src="./images/event-news-home.png" />
        </div>

        <div className={styles.whoWeAre_text_container}>
          <h2>Who We Are ?</h2>
          <p>Writer Incorporation is a comprehensive platform designed to empower writers, creators, and freelancers. Our mission is to transform your creative ideas, thoughts, and concepts into sellable and marketable scripts. We provide the tools, resources, and community support needed to succeed in today's competitive market.</p>
          <img src="./icons/arrow-1.svg" />
        </div>
      </section>

      <section className={styles.section_whoBenefit_wrapper}>
        <div className={styles.whoBenefit_list_container}>
          <h2>Who will get benefit <br /> from our product?</h2>
          <ul>
            {whoBenefitList.map((ele, index) => (
              <li key={index}>
                <img src="./icons/right-tick.svg" />
                <span>{ele}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.whoBenefit_img_container}>
          <img src="./images/home-ott.png" />
        </div>
      </section>

      <footer className={styles.footer_wrapper}>
        <MUIButton className={styles.btn_color} title="Get Started" variant="contained" />
        <h2>Our Trusted Partners</h2>

        <div className={styles.ott_partners_wrapper}>
          <img src="./icons/sony.svg" />
          <img src="./icons/spotify.svg" />
          <img src="./icons/disneyplus.svg" />
          <img src="./icons/netflix.svg" />
          <img src="./icons/jiocinema.svg" />
          <img src="./icons/amazonprime.svg" />
        </div>

        <img className={styles.hr_line} src="./icons/hr-line.svg" />

        <div className={styles.copyright_wrapper}>
          <span>Copyright 2024</span>
          <span>Terms and Conditions | Privacy Policy.</span>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;