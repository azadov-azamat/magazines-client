import React from 'react';

export default function About() {
  return (
    <>
      <section className="flat-spacing-23 flat-image-text-section">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="tf-image-wrap">
              <img
                className="lazyload w-100"
                data-src="/images/collections/collection-69.jpg"
                alt="collection-img"
                src="/images/collections/collection-69.jpg"
                width={600}
                height={499}
              />
            </div>
            <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
              <div>
                <div className="heading">Asos solingan - 2023</div>
                <div className="text">
                  Lochin Market 2023-yilda zamonaviy va ishonchli maishiy
                  texnika do‘koni sifatida tashkil topgan.
                  <br className="d-xl-block d-none" />
                  Bizning asosiy maqsadimiz — har bir xonadon uchun hayotni
                  yengillashtiruvchi,
                  <br className="d-xl-block d-none" />
                  energiya tejamkor va sifatli texnika vositalarini taqdim
                  etishdir.
                  <br className="d-xl-block d-none" />
                  Dastlab kichik ko‘lamda ish boshlagan bo‘lsak-da, qisqa vaqt
                  ichida mijozlar ishonchini qozondik.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flat-spacing-15">
        <div className="container">
          <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
            <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
              <div>
                <div className="heading">Bizning maqsadimiz</div>
                <div className="text">
                  Bizning maqsadimiz — har bir mijozga ishonchli, uzoq xizmat
                  qiladigan va qulay maishiy texnikani yetkazib berish.
                  <br className="d-xl-block d-none" />
                  Har bir uyda qulaylik yaratish uchun, biz doimo sifatli
                  mahsulotlar va mijozlarga qulay xizmat ko‘rsatishga intilamiz.
                  <br className="d-xl-block d-none" />
                  Biz uchun mijozning ishonchi eng muhim qadriyatdir.
                </div>
              </div>
            </div>
            <div className="grid-img-group">
              <div className="tf-image-wrap box-img item-1">
                <div className="img-style">
                  <img
                    className="lazyload"
                    src="/images/collections/collection-71.jpg"
                    data-=""
                    alt="img-slider"
                    width={337}
                    height={388}
                  />
                </div>
              </div>
              <div className="tf-image-wrap box-img item-2">
                <div className="img-style">
                  <img
                    className="lazyload"
                    src="/images/collections/collection-70.jpg"
                    data-=""
                    alt="img-slider"
                    width={400}
                    height={438}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
