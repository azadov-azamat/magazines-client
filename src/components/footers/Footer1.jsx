import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import LanguageSelect from '../common/LanguageSelect';
import CurrencySelect from '../common/CurrencySelect';

import { aboutLinks, footerLinks, paymentImages } from '@/data/footerLinks';
export default function Footer1({ bgColor = '' }) {
  useEffect(() => {
    const headings = document.querySelectorAll('.footer-heading-moblie');

    const toggleOpen = (event) => {
      const parent = event.target.closest('.footer-col-block');

      parent.classList.toggle('open');
    };

    headings.forEach((heading) => {
      heading.addEventListener('click', toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener('click', toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount

  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        'https://express-brevomail.vercel.app/api/contacts',
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      console.error('Error:', error.response?.data || 'An error occurred');
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  return (
    <footer id="footer" className={`footer md-pb-70 ${bgColor}`}>
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <Link to={`/`}>
                      {/* <img
                        alt="image"
                        src="/images/logo/logo.svg"
                        width="136"
                        height="21"
                      /> */}
                      <h5 className="fs-2 fw-bold">Lochin Market</h5>
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <p>
                        Manzil: Ellikqal'a tumani, Qirqqiz OFY
                        <br />
                        A.Alimov ko'chasi, 4-uy
                      </p>
                    </li>
                    <li>
                      <p>
                        Email: <a href="#">info@marketlochin.uz</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Telefon: <a href="#">(998)-93-680-49-65</a>
                      </p>
                    </li>
                  </ul>
                  <ul className="tf-social-icon d-flex gap-10">
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-facebook social-line"
                      >
                        <i className="fab fa-facebook fs-14" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-telegram social-line"
                      >
                        <i className="fab fa-telegram-plane fs-14" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-instagram social-line"
                      >
                        <i className="fab fa-instagram fs-14" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-tiktok social-line"
                      >
                        <i className="fab fa-tiktok fs-14" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="box-icon w_34 round social-linkedin social-line"
                      >
                        <i className="fab fa-linkedin fs-14" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Yordam</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Yordam</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  {footerLinks.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12 footer-col-block">
                <div className="footer-heading footer-heading-desktop">
                  <h6>Biz haqimizda</h6>
                </div>
                <div className="footer-heading footer-heading-moblie">
                  <h6>Biz haqimizda</h6>
                </div>
                <ul className="footer-menu-list tf-collapse-content">
                  {aboutLinks.slice(0, 4).map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="footer-menu_item">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6>Email orqali ro'yxatdan o'ting</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6>Email orqali ro'yxatdan o'ting</h6>
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-menu_item">
                      Birinchilardan bo'lib ro'yxatdan o'ting, va chegirmalarga
                      ega bo'ling
                    </div>
                    <div
                      className={`tfSubscribeMsg ${
                        showMessage ? 'active' : ''
                      }`}
                    >
                      {success ? (
                        <p style={{ color: 'rgb(52, 168, 83)' }}>
                          Muvaffaqiyatli ro'yxatdan o'tdingiz.
                        </p>
                      ) : (
                        <p style={{ color: 'red' }}>Xatolik yuz berdi.</p>
                      )}
                    </div>
                    <form
                      ref={formRef}
                      onSubmit={sendEmail}
                      className="form-newsletter subscribe-form"
                      action="#"
                      method="post"
                      acceptCharset="utf-8"
                      data-mailchimp="true"
                    >
                      <div className="subscribe-content">
                        <fieldset className="email">
                          <input
                            required
                            type="email"
                            name="email"
                            className="subscribe-email"
                            placeholder="Emailingizni kiriting...."
                            tabIndex={0}
                            aria-required="true"
                            autoComplete="abc@xyz.com"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            className="subscribe-button tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
                            type="submit"
                          >
                            Ro'yxatdan o'tish
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                      <div className="subscribe-msg" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    © {new Date().getFullYear()} Lochin Market. Barcha huquqlar
                    himoyalangan
                  </div>
                  <div className="tf-payment">
                    <a
                      href="https://www.instagram.com/jamshidkalandarov/"
                      className="text-primary"
                    >
                      Jamshid Kalandarov
                    </a>{' '}
                    tomonidan yaratilgan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
