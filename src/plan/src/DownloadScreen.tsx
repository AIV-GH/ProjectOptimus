import { FunctionComponent, useCallback } from "react";
import styles from "./css/DownloadScreen.module.css";

export const DownloadScreen: FunctionComponent = () => {
  const onCOMPETITORSTextClick = useCallback(() => {
    // Please sync "Competitors" to the project
  }, []);

  return (
    <div className={styles.downloadScreenDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.rectangleDiv3} />
        <div className={styles.rectangleDiv4} />
        <div className={styles.rectangleDiv5} />
        <div className={styles.rectangleDiv6} />
      </div>
      <div className={styles.homeBannerDiv}>
        <div className={styles.rectangleDiv7} />
        <img className={styles.ellipseIcon} alt="" src="ellipse-42.svg" />
        <img className={styles.groupIcon} alt="" src="group-163.svg" />
        <div className={styles.groupDiv1}>
          <div className={styles.image48Div} />
          <img className={styles.groupIcon1} alt="" src="group-251.svg" />
          <div className={styles.groupDiv2}>
            <img className={styles.iconlyLightNotification} alt="" />
            <div className={styles.jumpStartDiv}>{`Jump start `}</div>
            <div className={styles.yourPortfolioLooksGreatTod}>
              Your portfolio looks great today
            </div>
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv4}>
              <div className={styles.portfolioBalanceDiv}>
                Portfolio balance
              </div>
              <div className={styles.div}>$12,175.11</div>
              <div className={styles.groupDiv5}>
                <img className={styles.vectorIcon} alt="" src="vector-1.svg" />
                <div className={styles.div1}>$24.74 (3.79%)</div>
              </div>
              <div className={styles.todayMay222021}>Today (May 22,2021)</div>
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.availableBalanceDiv}>
                Available balance
              </div>
              <div className={styles.div2}>$173.21</div>
              <div className={styles.groupDiv7}>
                <img className={styles.vectorIcon1} alt="" />
                <div className={styles.portfolioBalanceDiv}>More details</div>
              </div>
            </div>
            <div className={styles.groupDiv8}>
              <div className={styles.rectangleDiv8} />
              <div className={styles.hDiv}>1h</div>
            </div>
            <div className={styles.groupDiv9}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.hDiv1}>24h</div>
            </div>
            <div className={styles.groupDiv10}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv11}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv12}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.yDiv}>1y</div>
            </div>
            <div className={styles.groupDiv13}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.wDiv}>All</div>
            </div>
            <div className={styles.rectangleDiv14} />
            <img className={styles.groupIcon2} alt="" src="group-18.svg" />
            <div className={styles.groupDiv14}>
              <div className={styles.rectangleDiv15} />
              <div className={styles.sendDiv}>Send</div>
            </div>
            <div className={styles.groupDiv15}>
              <div className={styles.rectangleDiv16} />
              <div className={styles.withdrawDiv}>Withdraw</div>
            </div>
            <img className={styles.groupIcon3} alt="" />
            <img className={styles.groupIcon4} alt="" src="group-271.svg" />
          </div>
        </div>
        <img className={styles.bluee011Icon} alt="" src="bluee01-1@2x.png" />
      </div>
      <img className={styles.ezgif1Icon} alt="" src="ezgif-1@2x.png" />
      <img className={styles.ezgif3Icon} alt="" src="ezgif-1@2x.png" />
      <img className={styles.ezgif4Icon} alt="" src="ezgif-4@2x.png" />
      <div className={styles.groupDiv16}>
        <img className={styles.ezgif6Icon} alt="" src="ezgif-4@2x.png" />
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv17} />
        <div className={styles.rectangleDiv18} />
        <div className={styles.logoDiv}>Logo</div>
        <div className={styles.transformingLivesOfPeopleA}>
          Transforming lives of people across all walks of life with
          out-of-the-box ideas peeking into the possibilities of today’s
          Artificial Intelligence and bringing those ideas alive in the form of
          valuable applications.
        </div>
        <div
          className={styles.needAnswersNeedHelpJust}
        >{`Need Answers? Need help ? Just email us `}</div>
        <div className={styles.copyright2022Div}>Copyright 2022</div>
        <div className={styles.companyDiv}>Company</div>
        <div className={styles.productDiv}>Product</div>
        <div className={styles.competitorsDiv}>Competitors</div>
        <div className={styles.pricingDiv}>Pricing</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.linksDiv}>Links</div>
        <div className={styles.followUsDiv}>{`Follow Us `}</div>
        <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
        <div className={styles.groupDiv17}>
          <div className={styles.fbcomaaaDiv}>fb.com/aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="featherfacebook1.svg"
          />
        </div>
        <div className={styles.groupDiv18}>
          <div className={styles.aaaDiv}>@aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="featherinstagram1.svg"
          />
        </div>
        <div className={styles.groupDiv19}>
          <div className={styles.fbcomaaaDiv}>@aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="feathertwitter1.svg"
          />
        </div>
        <div className={styles.xFormGroupDiv}>
          <div className={styles.labelDiv}>
            <div className={styles.helperTextDiv}>Default Label</div>
          </div>
          <div className={styles.inputeDiv}>
            <img className={styles.groupIcon5} alt="" src="group-2101.svg" />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathersearch1.svg"
            />
            <div className={styles.labelDiv1}>Your email</div>
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathercalendar1.svg"
            />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathereyeoff1.svg"
            />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathereye1.svg"
            />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="featherchevrondown1.svg"
            />
            <div className={styles.frameDiv}>
              <img
                className={styles.featherplusIcon}
                alt=""
                src="featherplus1.svg"
              />
              <img
                className={styles.featherplusIcon}
                alt=""
                src="featherminus2.svg"
              />
            </div>
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="featherminuscircle1.svg"
            />
            <img
              className={styles.feathersendIcon}
              alt=""
              src="feathersend1.svg"
            />
          </div>
          <div className={styles.helperTextDiv1}>
            <div className={styles.helperTextDiv2}>Helper text</div>
          </div>
        </div>
      </div>
      <div className={styles.categoryDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.helperTextDiv}>Free</div>
          <b className={styles.b}>$0</b>
        </div>
        <div className={styles.frameDiv2}>
          <div className={styles.pointsDiv}>
            <img className={styles.feathersendIcon} alt="" />
            <div className={styles.visitorsDiv}>Loreum</div>
          </div>
          <div className={styles.pointsDiv}>
            <img className={styles.feathersendIcon} alt="" />
            <div className={styles.visitorsDiv}>Ipsum</div>
          </div>
          <div className={styles.pointsDiv}>
            <img className={styles.feathersendIcon} alt="" />
            <div className={styles.visitorsDiv}>Dolor</div>
          </div>
        </div>
        <div className={styles.buttonDiv}>
          <div className={styles.downloadNowDiv}>Download Now</div>
        </div>
      </div>
      <b className={styles.trackAnyHashtags}>Choose your payment method</b>
      <div className={styles.groupDiv20}>
        <div className={styles.groupDiv21}>
          <b className={styles.paymentSucessDownloadAppN}>
            Payment Sucess! Download App now
          </b>
          <div className={styles.clickOnTheLinkBelowOrSca}>
            <p className={styles.clickOnThe}>
              Click on the link below or scan the code to download
            </p>
            <p className={styles.clickOnThe}></p>
          </div>
        </div>
      </div>
      <b className={styles.httpsiconscoutcomallAsseB}>
        https://iconscout.com/all-assets/robot?gclid=EAIaIQobChMIw4ao_s-b-
      </b>
      <img className={styles.download1Icon} alt="" src="download-1@2x.png" />
      <img
        className={styles.qRCodeForMobileEnglishWikIcon}
        alt=""
        src="qr-code-for-mobile-english-wikipedia-1@2x.png"
      />
      <div className={styles.groupDiv22}>
        <div className={styles.sIAssistantIsACuttingEdge}>
          SI Assistant is a cutting edge Virtual Assistant that monitors
          everything in your home or office. It's always on duty and never needs
          to take a break.
        </div>
        <b className={styles.eyesEverywhereB}>Eyes Everywhere</b>
      </div>
      <div className={styles.navBarDiv}>
        <div className={styles.cONTACTDiv}>CONTACT</div>
        <div className={styles.pRICINGDiv}>PRICING</div>
        <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
        <div className={styles.cOMPETITORSDiv} onClick={onCOMPETITORSTextClick}>
          COMPETITORS
        </div>
        <div className={styles.pRODUCTDiv}>PRODUCT</div>
        <div className={styles.cOMPANYDiv}>COMPANY</div>
        <b className={styles.lOGOB}>LOGO</b>
      </div>
    </div>
  );
};
