"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    // =========================
    // SECTION 1 ANIMATION
    // =========================

    const tl = gsap.timeline();

    tl.from("nav h1, nav h4, nav button", {
      y: -30,
      opacity: 0,
      delay: 0.7,
      duration: 0.6,
      stagger: 0.15,
    });

    tl.from(".center-part1 h1", {
      x: -300,
      opacity: 0,
      duration: 0.5,
    });

    tl.from(".center-part1 p", {
      x: -100,
      opacity: 0,
      duration: 0.4,
    });

    tl.from(".center-part1 button", {
      opacity: 0,
      duration: 0.4,
    });

    tl.from(
      ".center-part2 img",
      {
        x: 200,
        opacity: 0,
        duration: 0.5,
      },
      "-=0.5"
    );

    tl.from(".section1bottom img", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
    });

    // =========================
    // SECTION 2 ANIMATION
    // =========================

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        end: "bottom 50%",
        scrub: 2,
      },
    });

    tl2.from(".services", {
      y: 30,
      opacity: 0,
      duration: 0.5,
    });

    tl2.from(
      ".elem.line1.left",
      {
        x: -300,
        opacity: 0,
        duration: 1,
      },
      "trick1"
    );

    tl2.from(
      ".elem.line1.right",
      {
        x: 300,
        opacity: 0,
        duration: 1,
      },
      "trick1"
    );

    tl2.from(
      ".elem.line2.left",
      {
        x: -300,
        opacity: 0,
        duration: 1,
      },
      "trick2"
    );

    tl2.from(
      ".elem.line2.right",
      {
        x: 300,
        opacity: 0,
        duration: 1,
      },
      "trick2"
    );

    // =========================
    // SECTION 3 ANIMATION
    // =========================

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        scroller: "body",
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });

    tl3.from(".cnt", {
      stagger: 0.15,
      duration: 1,
      scale: 0.2,
    });

    // =========================
    // SECTION 4 ANIMATION
    // =========================

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        start: "top 80%",
        end: "bottom 50%",
        scrub: 1,
      },
    });

    tl4.from(
      ".section4 .sm .btn h1",
      {
        x: -300,
        duration: 1,
      },
      "same"
    );

    tl4.from(
      ".section4 .sm .para p",
      {
        x: 300,
        duration: 1,
      },
      "same"
    );

    tl4.from(".section4 .cntlast", {
      scale: 0.5,
      duration: 1,
      stagger: 0.15,
    });

    const cursor = document.querySelector(".cursor")
    if (cursor) {
      const moveCursor = (e: MouseEvent) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 1,
          ease: "back.out",
        });
      };

      window.addEventListener("mousemove", moveCursor);

      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    }
  });

  return (
    <>
      {/* =========================
          SECTION 1
      ========================= */}

      <section className="section1">
        <nav className="hidden md:flex">
          <div className="logo">
            <i className="ri-star-s-fill"></i>
            <h1>WizardZ</h1>
          </div>

          <div className="part2">
            <h4>About Us</h4>
            <h4>Services</h4>
            <h4>Use Cases</h4>
            <h4>Pricing</h4>
            <h4>Blog</h4>
            <button>Request a quote</button>
          </div>
        </nav>

        <div className="center">
          <div className="center-part1">
            <h1>
              Navigating the digital landscape for success
            </h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Possimus nam voluptatibus ea blanditiis, placeat quibusdam et
              repudiandae quisquam adipisci? Illum eos numquam aperiam
              tempora accusamus soluta, autem fuga deserunt doloremque.
            </p>

            <button>Book a consultation</button>
          </div>

          <div className="center-part2">
            <img
              src="/img.jpg"
              alt="Digital marketing illustration"
            />
          </div>
        </div>

        <div className="section1bottom">
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/136/319/non_2x/amazon-logo-amazon-icon-free-free-vector.jpg"
            alt="Company logo"
          />

          <img
            src="https://images.seeklogo.com/logo-png/37/1/zoom-logo-png_seeklogo-373147.png"
            alt="Zoom logo"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18_CuO5AosHleP-PiJLy0mDn3ui-3I6t766YSxU6MBA&s=10"
            alt="Netflix logo"
          />

          <img
            src="https://images.seeklogo.com/logo-png/27/1/dribbble-logo-png_seeklogo-273044.png"
            alt="Dribbble logo"
          />

          <img
            src="https://images.seeklogo.com/logo-png/42/1/notion-logo-png_seeklogo-425508.png"
            alt="Notion logo"
          />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_W8TtzDTlXoNZsjgPKyRaGK4kvrxXhRBhm9SKtssHg&s=10"
            alt="HubSpot logo"
          />
        </div>
      </section>

      {/* =========================
          SECTION 2
      ========================= */}

      <section className="section2">
        <div className="services">
          <h3>Services</h3>

          <p>
            Adipisicing elit. Quisquam at, praesentium deleniti officiis
            vel voluptate sint quos! Eligendi, a eveniet consectetur
            saepe vitae, debitis voluptatum blanditiis tempora
            sapiente, inventore esse?
          </p>
        </div>

        <div className="container">
          <div className="elem line1 left">
            <div className="elem-part1">
              <h2>Search engine optimization</h2>

              <h4>
                <i className="ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>

            <div className="elem-part2">
              <img
                src="https://infowan.net/Content/images/solution.svg"
                alt=""
              />
            </div>
          </div>

          <div className="elem black line1 right">
            <div className="elem-part1">
              <h2>Pay per click advertisement</h2>

              <h4>
                <i className="ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>

            <div className="elem-part2">
              <img
                src="https://wizardz-ak.netlify.app/img/PPC.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="elem black line2 left">
            <div className="elem-part1">
              <h2>Email marketing</h2>

              <h4>
                <i className="ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>

            <div className="elem-part2">
              <img
                src="https://freepngimg.com/save/64785-icons-envelope-computer-mail-message-email/600x600"
                alt=""
              />
            </div>
          </div>

          <div className="elem line2 right">
            <div className="elem-part1">
              <h2>Social media marketing</h2>

              <h4>
                <i className="ri-arrow-right-up-line"></i>
                Learn More
              </h4>
            </div>

            <div className="elem-part2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/648/648346.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 3
      ========================= */}

      <section className="section3">
        <div className="cnt">
          <div className="cnt1">
            <h1>Let's make thing happen</h1>

            <p>
              Contact us today to learn more about how our digital
              marketing services can help your business grow and succeed
              online.
            </p>

            <button>Get your free proposal</button>
          </div>

          <div className="cntbottom">
            <img
              src="https://www.digitallotusdev.com/images/illustrations/cosmic.svg"
              alt="Digital marketing illustration"
            />
          </div>
        </div>
      </section>

      {/* =========================
          SECTION 4
      ========================= */}

      <section className="section4">
        <div className="sm">
          <div className="btn">
            <h1>Case Study</h1>
          </div>

          <div className="para">
            <p>
              Explore Real-Life Example of Our Proven Digital Marketing
              Success through Our Case Studies.
            </p>
          </div>
        </div>

        <div className="cntlast">
          <div className="box1">
            <p>
              For a local restaurant, we implemented a targeted PPC
              campaign that resulted in a 50% increase in website
              traffic and a 25% increase in traffic.
            </p>

            <h4>
              Learn More <i className="ri-arrow-right-up-line"></i>
            </h4>
          </div>

          <div className="box2">
            <p>
              For a B2B software company, we developed an SEO strategy
              that resulted in a first page ranking for key keywords
              and a 200% increase in traffic.
            </p>

            <h4>
              Learn More <i className="ri-arrow-right-up-line"></i>
            </h4>
          </div>

          <div className="box3">
            <p>
              For a national rental chain, we created a social media
              marketing campaign that increased following by 25%
              and increased online sales.
            </p>

            <h4>
              Learn More <i className="ri-arrow-right-up-line"></i>
            </h4>
          </div>
        </div>

        <div className="end">
          <div className="end1">
            <h1>Created by @MuskanK</h1>
          </div>
        </div>
      </section>

      <div className="cursor"></div>
    </>
  );
}