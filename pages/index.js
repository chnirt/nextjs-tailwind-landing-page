import Head from 'next/head'
import Image from 'next/image'
import { MyCard } from '../components/MyCard'
import styles from '../styles/Home.module.css'
import bitCoinPic from '../assets/bitcoin.png'
import crappoPic from '../assets/crappo.png'
import { MyNumber } from '../components/MyNumber'
import slide1Pic from '../assets/slide1.png'
import slide2Pic from '../assets/slide2.png'
import semiCirclePic from '../assets/semiCircle.png'
import semiCircle2Pic from '../assets/semiCircle2.png'
import ethPic from '../assets/eth.png'
import btcPic from '../assets/btc.png'
import slide3Pic from '../assets/slide3.png'
import slide4Pic from '../assets/slide4.png'
import btcChartPic from '../assets/btcChart.png'
import statisticPic from '../assets/statistic.png'
import tablePic from '../assets/table.png'
import semiCircle3Pic from '../assets/semiCircle3.png'
import semiCircle4Pic from '../assets/semiCircle4.png'

export default function Home() {
  const renderNavbar = () => {
    return (
      <nav className="container mt-[60px] flex justify-between">
        <div className="flex items-center justify-center space-x-4">
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.95431 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.95431 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z"
                fill="white"
                fillOpacity="0.1"
              />
              <path
                d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z"
                fill="white"
              />
              <path
                d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
                fill="white"
              />
              <path
                d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z"
                fill="white"
              />
              <path
                d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z"
                fill="white"
              />
              <path
                d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z"
                fill="white"
              />
              <path
                d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z"
                fill="white"
              />
              <path
                d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z"
                fill="white"
              />
            </svg>
          </div>

          <h1 className="my-auto px-2 text-center font-inter text-lg font-semibold uppercase not-italic tracking-wider">
            CRAPPO
          </h1>
        </div>

        <div className="flex justify-center space-x-3.5">
          <div className="my-auto flex justify-center space-x-8">
            <a
              href="#"
              className="px-2 font-rubik text-base font-normal not-italic leading-7 tracking-[.01em]"
            >
              Products
            </a>
            <a
              href="#"
              className="px-2 font-rubik text-base font-normal not-italic leading-7 tracking-[.01em]"
            >
              Features
            </a>
            <a
              href="#"
              className="px-2 font-rubik text-base font-normal not-italic leading-7 tracking-[.01em]"
            >
              About
            </a>
            <a
              href="#"
              className="px-2 font-rubik text-base font-normal not-italic leading-7 tracking-[.01em]"
            >
              Contact
            </a>
          </div>

          <div className="my-auto flex items-center justify-center space-x-6">
            <a
              href="#"
              className="px-2 text-center font-rubik text-base font-medium not-italic leading-6 tracking-[.01em]"
            >
              Login
            </a>

            <div className="h-4 w-0.5 bg-brand-divider opacity-30" />

            <a
              href="#"
              className="rounded-full bg-brand-button py-3.5 px-8 text-center font-rubik text-base font-medium not-italic leading-6 tracking-[.01em]"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    )
  }

  const renderSection1 = () => {
    return (
      <div className="container mt-[50px] mb-[100px] flex justify-between">
        <div className="flex flex-col justify-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-brand-white10 p-1">
              <div className="rounded-full bg-white px-4 py-1 font-rubik text-base font-medium uppercase not-italic leading-normal tracking-[.04em] text-brand">
                75% SAVE
              </div>
              <p className="ml-2 px-2 font-rubik text-base font-normal not-italic leading-7 tracking-[.01em]">
                For the Black Friday weekend
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="font-rubik text-[64px] font-bold not-italic">
              Fastest & secure platform to invest in crypto
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription">
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </h1>
          </div>

          <div className="mt-8">
            <div>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-brand-button px-6 py-[18px]"
              >
                Try for FREE
                <div className="ml-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="white" />
                    <path
                      d="M14.5 20.9999C14.3684 21.0007 14.2379 20.9755 14.1161 20.9257C13.9943 20.8759 13.8834 20.8026 13.79 20.7099C13.6963 20.617 13.6219 20.5064 13.5711 20.3845C13.5203 20.2626 13.4942 20.1319 13.4942 19.9999C13.4942 19.8679 13.5203 19.7372 13.5711 19.6154C13.6219 19.4935 13.6963 19.3829 13.79 19.2899L17.1 15.9999L13.92 12.6899C13.7337 12.5026 13.6292 12.2491 13.6292 11.9849C13.6292 11.7207 13.7337 11.4673 13.92 11.2799C14.013 11.1862 14.1236 11.1118 14.2454 11.061C14.3673 11.0103 14.498 10.9841 14.63 10.9841C14.762 10.9841 14.8927 11.0103 15.0146 11.061C15.1364 11.1118 15.247 11.1862 15.34 11.2799L19.2 15.2799C19.3832 15.4669 19.4859 15.7182 19.4859 15.9799C19.4859 16.2417 19.3832 16.493 19.2 16.6799L15.2 20.6799C15.1102 20.7769 15.0022 20.855 14.882 20.91C14.7619 20.9649 14.632 20.9955 14.5 20.9999Z"
                      fill="#3671E9"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div style={{ minWidth: 604, minHeight: 585 }}>
            <Image src={bitCoinPic} alt="bitcoin" width={604} height={585} />
            {/* image1 */}
          </div>

          <div
            className="absolute top-[269px] right-[261px]"
            style={{
              minWidth: 928,
              minHeight: 606,
            }}
          >
            <Image src={slide1Pic} alt="slide1" width={928} height={606} />
            {/* <svg
              width="928"
              height="606"
              viewBox="0 0 928 606"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="60"
                y="605.863"
                width="120"
                height="1002.26"
                transform="rotate(-120 60 605.863)"
                fill="url(#paint0_linear_1_1289)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1289"
                  x1="132.423"
                  y1="610.168"
                  x2="119.891"
                  y2="1608.12"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0" />
                  <stop
                    offset="0.387874"
                    stop-color="white"
                    stop-opacity="0.04"
                  />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg> */}
          </div>

          <div
            className="absolute top-[226px] -left-[6px]"
            style={{
              width: 730,
              height: 461,
            }}
          >
            <Image src={slide2Pic} alt="slide1" width={730} height={461} />
            {/* <svg
              width="730"
              height="461"
              viewBox="0 0 730 461"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="60"
                y="602.864"
                width="120"
                height="997.881"
                transform="rotate(-120 60 602.864)"
                fill="url(#paint0_linear_1_518)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_518"
                  x1="120"
                  y1="949.623"
                  x2="120"
                  y2="1600.74"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.04" />
                  <stop offset="1" stop-color="white" stop-opacity="0.01" />
                </linearGradient>
              </defs>
            </svg> */}
          </div>
        </div>
      </div>
    )
  }

  const renderSection2 = () => {
    return (
      <div className="container relative my-[100px]">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-white10">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 31H3C2.46957 31 1.96086 30.7893 1.58579 30.4142C1.21071 30.0391 1 29.5304 1 29V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1C2.26522 1 2.51957 1.10536 2.70711 1.29289C2.89464 1.48043 3 1.73478 3 2V29H30C30.2652 29 30.5196 29.1054 30.7071 29.2929C30.8946 29.4804 31 29.7348 31 30C31 30.2652 30.8946 30.5196 30.7071 30.7071C30.5196 30.8946 30.2652 31 30 31Z"
                  fill="#3671E9"
                />
                <path
                  d="M9.75 27H7.25C6.65326 27 6.08097 26.7629 5.65901 26.341C5.23705 25.919 5 25.3467 5 24.75V15.25C5 14.6533 5.23705 14.081 5.65901 13.659C6.08097 13.2371 6.65326 13 7.25 13H9.75C10.3467 13 10.919 13.2371 11.341 13.659C11.7629 14.081 12 14.6533 12 15.25V24.75C12 25.3467 11.7629 25.919 11.341 26.341C10.919 26.7629 10.3467 27 9.75 27Z"
                  fill="#3671E9"
                />
                <path
                  d="M18.75 27H16.25C15.6533 27 15.081 26.7629 14.659 26.341C14.2371 25.919 14 25.3467 14 24.75V12.25C14 11.6533 14.2371 11.081 14.659 10.659C15.081 10.2371 15.6533 10 16.25 10H18.75C19.3467 10 19.919 10.2371 20.341 10.659C20.7629 11.081 21 11.6533 21 12.25V24.75C21 25.3467 20.7629 25.919 20.341 26.341C19.919 26.7629 19.3467 27 18.75 27Z"
                  fill="#3671E9"
                />
                <path
                  d="M27.7274 27H25.2274C24.6307 27 24.0584 26.7629 23.6364 26.341C23.2145 25.919 22.9774 25.3467 22.9774 24.75V8.25C22.9774 7.65326 23.2145 7.08097 23.6364 6.65901C24.0584 6.23705 24.6307 6 25.2274 6H27.7274C28.3242 6 28.8965 6.23705 29.3184 6.65901C29.7404 7.08097 29.9774 7.65326 29.9774 8.25V24.75C29.9774 25.3467 29.7404 25.919 29.3184 26.341C28.8965 26.7629 28.3242 27 27.7274 27Z"
                  fill="#3671E9"
                />
              </svg>
            </div>
            <div className="ml-6">
              <h1 className="flex font-rubik text-[40px] font-bold not-italic leading-normal">
                {/* $30B */}
                $<MyNumber to={30} />B
              </h1>
              <p className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription">
                Digital Currency Exchanged
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-white10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9875 5.04531C24.4672 3.40391 22.3438 2.5 20 2.5C17.6438 2.5 15.5133 3.39844 14 5.02969C12.4703 6.67891 11.725 8.92031 11.9 11.3406C12.2469 16.1156 15.8805 20 20 20C24.1195 20 27.7469 16.1164 28.0992 11.3422C28.2766 8.94375 27.5266 6.70703 25.9875 5.04531Z"
                  fill="#3671E9"
                />
                <path
                  d="M33.7499 37.5H6.24989C5.88994 37.5047 5.53348 37.4291 5.20643 37.2786C4.87938 37.1282 4.58997 36.9068 4.35927 36.6305C3.85146 36.0234 3.64677 35.1945 3.79833 34.3562C4.45771 30.6984 6.51552 27.6258 9.74989 25.4687C12.6233 23.5539 16.2632 22.5 19.9999 22.5C23.7366 22.5 27.3765 23.5547 30.2499 25.4687C33.4843 27.625 35.5421 30.6977 36.2015 34.3555C36.353 35.1937 36.1483 36.0227 35.6405 36.6297C35.4099 36.9062 35.1205 37.1277 34.7935 37.2783C34.4664 37.4288 34.1099 37.5046 33.7499 37.5Z"
                  fill="#3671E9"
                />
              </svg>
            </div>
            <div className="ml-6">
              <h1 className="flex font-rubik text-[40px] font-bold not-italic leading-normal">
                {/* 10M+ */}
                <MyNumber to={10} />
                M+
              </h1>
              <p className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription">
                Trusted Wallets Investor
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-white10">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.3743 7.6364C30.7522 5.99825 28.8224 4.69674 26.6958 3.80665C24.5692 2.91656 22.2877 2.45543 19.9823 2.44976C17.6769 2.44409 15.3931 2.89398 13.2621 3.77359C11.1312 4.6532 9.19499 5.94519 7.56484 7.57534C5.93469 9.20549 4.6427 11.1417 3.76309 13.2727C2.88348 15.4036 2.43359 17.6874 2.43926 19.9928C2.44494 22.2982 2.90606 24.5797 3.79615 26.7063C4.68624 28.8329 5.98775 30.7627 7.6259 32.3848C9.24801 34.023 11.1778 35.3245 13.3044 36.2146C15.4311 37.1047 17.7126 37.5658 20.018 37.5715C22.3233 37.5772 24.6071 37.1273 26.7381 36.2477C28.8691 35.3681 30.8052 34.0761 32.4354 32.4459C34.0655 30.8158 35.3575 28.8796 36.2371 26.7486C37.1168 24.6176 37.5667 22.3338 37.561 20.0285C37.5553 17.7231 37.0942 15.4416 36.2041 13.3149C35.314 11.1883 34.0125 9.25851 32.3743 7.6364ZM5.00012 20.0106C4.99956 18.6831 5.17558 17.3613 5.52356 16.0802C6.097 17.3145 6.92981 18.3809 7.49621 19.6473C8.22824 21.2755 10.1939 20.8239 11.0618 22.2505C11.8322 23.5169 11.0095 25.1184 11.5861 26.4434C12.0048 27.4052 12.9923 27.6153 13.6736 28.3184C14.3697 29.0278 14.3548 29.9997 14.4611 30.9247C14.581 32.0115 14.7754 33.0888 15.0431 34.1489C15.0431 34.1567 15.0431 34.1653 15.0493 34.1731C9.20325 32.12 5.00012 26.5473 5.00012 20.0106ZM20.0001 35.0106C19.1624 35.0104 18.3262 34.9403 17.5001 34.8013C17.5087 34.5895 17.5126 34.3919 17.5337 34.2544C17.7236 33.0122 18.3454 31.7973 19.1845 30.8677C20.0134 29.9505 21.1493 29.3302 21.8493 28.2895C22.5353 27.2739 22.7407 25.9067 22.4579 24.72C22.0415 22.9669 19.6595 22.3817 18.3751 21.4309C17.6368 20.8841 16.9798 20.0387 16.0103 19.97C15.5634 19.9387 15.1892 20.0348 14.7462 19.9208C14.34 19.8153 14.0212 19.5966 13.5884 19.6536C12.7798 19.7598 12.2697 20.6239 11.4009 20.5067C10.5767 20.3966 9.72746 19.4317 9.53996 18.6466C9.29934 17.6372 10.0978 17.3098 10.9532 17.22C11.3103 17.1825 11.7111 17.1419 12.054 17.2731C12.5056 17.4403 12.7189 17.8825 13.1243 18.1059C13.8845 18.5231 14.0384 17.8567 13.922 17.1817C13.7478 16.1708 13.5447 15.7591 14.4462 15.063C15.0712 14.5833 15.6056 14.2364 15.5056 13.3747C15.4462 12.8684 15.1689 12.6395 15.4275 12.1356C15.6236 11.752 16.1618 11.4059 16.5126 11.177C17.4181 10.5864 20.3915 10.6302 19.1767 8.97703C18.8197 8.49187 18.1611 7.62468 17.5361 7.50593C16.7548 7.35828 16.4079 8.23015 15.8634 8.61453C15.3009 9.01218 14.2056 9.46375 13.6423 8.8489C12.8845 8.02156 14.1447 7.75046 14.4236 7.17234C14.5525 6.90281 14.4236 6.52859 14.2064 6.17625C14.4881 6.0575 14.7746 5.94734 15.0657 5.84578C15.2482 5.98054 15.4647 6.06171 15.6907 6.08015C16.2134 6.11453 16.7064 5.83171 17.1626 6.18796C17.6689 6.57859 18.0337 7.07234 18.7056 7.19421C19.3556 7.31218 20.0439 6.93328 20.2048 6.26765C20.3025 5.86296 20.2048 5.43562 20.1111 5.01765C23.0329 5.03446 25.8855 5.90951 28.3142 7.53406C28.1579 7.47468 27.9712 7.48171 27.7407 7.58875C27.2665 7.80906 26.5947 8.37 26.5392 8.92625C26.4759 9.5575 27.4071 9.64656 27.8493 9.64656C28.5134 9.64656 29.1861 9.34968 28.972 8.5825C28.879 8.24968 28.7525 7.90359 28.5486 7.69422C29.0387 8.03434 29.5083 8.40321 29.9548 8.7989C29.9478 8.80593 29.9407 8.81218 29.9337 8.82C29.4837 9.28875 28.9611 9.65984 28.6532 10.2302C28.4361 10.6317 28.1915 10.8223 27.7517 10.9262C27.5095 10.9833 27.2329 11.0044 27.0298 11.1669C26.4642 11.6122 26.7861 12.6825 27.322 13.0036C27.9993 13.4091 29.004 13.2184 29.515 12.6395C29.9142 12.1864 30.1493 11.3997 30.8673 11.4005C31.1834 11.3998 31.487 11.5236 31.7126 11.745C32.0095 12.0528 31.9509 12.3403 32.0142 12.7247C32.1259 13.4075 32.7282 13.0372 33.0946 12.6927C33.3617 13.168 33.6027 13.6575 33.8165 14.1591C33.4134 14.7395 33.0931 15.3723 32.1236 14.6958C31.5431 14.2903 31.1861 13.702 30.4571 13.5192C29.8204 13.363 29.1681 13.5255 28.5392 13.6341C27.8243 13.7583 26.9767 13.813 26.4345 14.3544C25.9103 14.8762 25.6329 15.5747 25.0751 16.0989C23.9962 17.1145 23.5407 18.2231 24.2392 19.6591C24.9111 21.0395 26.3165 21.7887 27.8329 21.6903C29.3228 21.5911 30.8704 20.727 30.8275 22.8919C30.8118 23.6583 30.972 24.1888 31.2071 24.9005C31.4251 25.5567 31.4103 26.1927 31.4603 26.87C31.5078 27.6632 31.6318 28.4499 31.8306 29.2192C30.4303 31.0222 28.6364 32.4812 26.586 33.485C24.5357 34.4887 22.283 35.0105 20.0001 35.0106Z"
                  fill="#3671E9"
                />
              </svg>
            </div>
            <div className="ml-6">
              <h1 className="font-rubik text-[40px] font-bold not-italic leading-normal">
                {/* 195 */}
                <MyNumber to={195} />
              </h1>
              <p className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription">
                Countries Supported
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute top-[53px] -right-[105px]"
          style={{
            minWidth: 185,
            minHeight: 196,
          }}
        >
          <Image src={semiCirclePic} alt="bitcoin" width={185} height={196} />
          {/* <svg
            width="185"
            height="196"
            viewBox="0 0 185 196"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M225.167 0.583308C242.406 30.4423 247.077 65.9264 238.154 99.2298C229.23 132.533 207.442 160.928 177.583 178.167C147.724 195.406 112.24 200.077 78.9368 191.154C45.6335 182.23 17.2391 160.442 7.6294e-06 130.583L112.583 65.5833L225.167 0.583308Z"
              fill="url(#paint0_linear_1_745)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_745"
                x1="20.2837"
                y1="147.05"
                x2="188.417"
                y2="147.05"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.08" />
                <stop offset="1" stop-color="#35068C" stop-opacity="0.01" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
      </div>
    )
  }

  const renderSection3 = () => {
    return (
      <div className="container relative mt-[100px]">
        <div className="flex items-center justify-between">
          <div style={{ minWidth: 650, minHeight: 473 }}>
            <Image src={crappoPic} alt="bitcoin" width={650} height={473} />
            {/* image2 */}
          </div>

          <div className="ml-[70px]">
            <div>
              <h1 className="font-rubik text-[40px] font-bold not-italic leading-normal">
                Why you should choose CRAPPO
              </h1>
            </div>

            <div className="mt-6">
              <h1 className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription">
                Experience the next generation cryptocurrency platform. No
                financial borders, extra fees, and fake reviews.
              </h1>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="rounded-full bg-brand-button py-3.5 px-8 text-center font-rubik text-base font-medium not-italic leading-6 tracking-[.01em]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[67px] -right-[86px]"
          style={{
            minWidth: 154,
            minHeight: 120,
          }}
        >
          <Image src={semiCircle2Pic} alt="bitcoin" width={154} height={120} />
          {/* <svg
            width="154"
            height="120"
            viewBox="0 0 154 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M240 0C240 31.826 227.357 62.3484 204.853 84.8528C182.348 107.357 151.826 120 120 120C88.174 120 57.6516 107.357 35.1472 84.8528C12.6428 62.3485 4.80559e-06 31.826 0 1.52588e-05L48 7.62939e-06C48 19.0956 55.5857 37.4091 69.0883 50.9117C82.5909 64.4143 100.904 72 120 72C139.096 72 157.409 64.4143 170.912 50.9117C184.414 37.4091 192 19.0956 192 0H240Z"
              fill="url(#paint0_linear_1_1288)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_1288"
                x1="8.61478"
                y1="22.5256"
                x2="143.022"
                y2="100.126"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0625" stop-color="white" stop-opacity="0.08" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
      </div>
    )
  }

  const renderSection4 = () => {
    return (
      <div className="container mt-[100px] flex flex-col items-center">
        <div
          className="flex flex-col"
          style={{
            maxWidth: 622,
          }}
        >
          <div className="items-center">
            <h1 className="text-center font-rubik text-[40px] font-bold not-italic leading-normal">
              Check how much you can earn
            </h1>
          </div>

          <div className="mt-6">
            <h1 className="text-center font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription">
              Let’s check your hash rate to see how much you will earn today,
              Exercitation veniam consequat sunt nostrud amet.
            </h1>
          </div>
        </div>

        <div
          className="mt-16 flex items-center space-x-12 rounded-t-2xl bg-white px-12"
          style={{
            width: 942,
            height: 155,
          }}
        >
          <div className="flex flex-1 items-center">
            <input
              type="text"
              className="w-full border-b-2 border-b-brand-borderBottom font-rubik text-xl font-normal not-italic leading-normal text-brand placeholder:font-rubik placeholder:text-xl placeholder:font-normal placeholder:not-italic placeholder:leading-normal placeholder:text-brand"
              placeholder="Enter your hash rate"
            />
          </div>

          <div className="flex flex-1 items-center">
            <select className="w-full border-b-2 border-b-brand-borderBottom text-brand">
              <option>TH/s</option>
            </select>
            <a
              href="#"
              className="ml-12 rounded-full bg-brand-button py-3.5 px-8 text-center font-rubik text-base font-medium not-italic leading-6 tracking-[.01em]"
            >
              Calculate
            </a>
          </div>
        </div>
      </div>
    )
  }

  const renderSection5 = () => {
    const coins = [
      {
        id: 1,
        selected: true,
        icon: () => (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_97)">
              <path
                d="M78.8035 49.6732C73.4591 71.1132 51.7369 84.1463 30.3276 78.8016C8.88695 73.4573 -4.14617 51.736 1.19852 30.327C6.54289 8.88696 28.2335 -4.14617 49.6741 1.19852C71.0835 6.51164 84.1482 28.2329 78.8035 49.6732Z"
                fill="url(#paint0_linear_1_97)"
              />
              <path
                d="M59.0449 35.0159C59.8261 29.7034 55.7949 26.8284 50.2324 24.9222L52.0449 17.7034L47.6699 16.6097L45.9199 23.6409C44.7636 23.3597 43.5761 23.0784 42.3886 22.8284L44.1386 15.7659L39.7636 14.6722L37.9824 21.8597C37.0136 21.6409 36.0761 21.4222 35.1699 21.2034V21.1722L29.1074 19.6722L27.9511 24.3597C27.9511 24.3597 31.2011 25.1097 31.1386 25.1409C32.9199 25.5784 33.2324 26.7659 33.1699 27.7034L31.1074 35.9222C31.2324 35.9534 31.3886 35.9847 31.5761 36.0784C31.4199 36.0472 31.2636 36.0159 31.1074 35.9534L28.2324 47.4534C28.0136 47.9847 27.4511 48.7972 26.2324 48.4847C26.2636 48.5472 23.0449 47.7034 23.0449 47.7034L20.8574 52.7347L26.5761 54.1722C27.6386 54.4534 28.6699 54.7034 29.7011 54.9847L27.8886 62.2659L32.2636 63.3597L34.0761 56.1409C35.2636 56.4534 36.4511 56.7659 37.5761 57.0472L35.7949 64.2347L40.1699 65.3284L41.9824 58.0472C49.4824 59.4534 55.1074 58.8909 57.4511 52.1097C59.3574 46.6722 57.3574 43.5159 53.4199 41.4534C56.3261 40.7972 58.4824 38.8909 59.0449 35.0159ZM49.0136 49.0784C47.6699 54.5159 38.4824 51.5784 35.5136 50.8284L37.9199 41.1722C40.8886 41.9222 50.4511 43.3909 49.0136 49.0784ZM50.3886 34.9222C49.1386 39.8909 41.5136 37.3597 39.0449 36.7347L41.2324 27.9847C43.7011 28.6097 51.6699 29.7659 50.3886 34.9222Z"
                fill="white"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_97"
                x1="39.9785"
                y1="-0.0190779"
                x2="39.9785"
                y2="79.992"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9AA4B" />
                <stop offset="1" stopColor="#F7931A" />
              </linearGradient>
              <clipPath id="clip0_1_97">
                <rect width="80" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        name: 'Bitcoin',
        code: 'BTC',
        description:
          'Digital currency in which a record of transactions is maintained.',
      },
      {
        id: 2,
        selected: false,
        icon: () => (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="#1181E8" />
            <g clipPath="url(#clip0_1_116)">
              <path
                d="M39.89 51.9385L25.1555 43.243L39.881 64.0015L54.623 43.243L39.881 51.9385H39.89ZM40.109 16L25.3805 40.4455L40.109 49.156L54.8435 40.4545L40.109 16Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_116">
                <rect
                  width="48"
                  height="48"
                  fill="white"
                  transform="translate(16 16)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
        name: 'Ethereum',
        code: 'ETH',
        description:
          'Blockchain technology to create and run decentralized digital applications.',
      },
      {
        id: 3,
        selected: false,
        icon: () => (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_106)">
              <circle cx="40" cy="40" r="40" fill="white" />
              <path
                d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6448 80 47.9112 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0V0ZM39.1267 12.26H47.74C47.9162 12.2602 48.09 12.3012 48.2477 12.3796C48.4055 12.4581 48.543 12.5719 48.6495 12.7123C48.756 12.8527 48.8286 13.0158 48.8616 13.1888C48.8947 13.3619 48.8873 13.5403 48.84 13.71L42.0734 36.77L48.4234 34.83L47.0634 39.4467L40.65 41.3133L36.49 55.36H58.7433C58.9197 55.361 59.0935 55.4027 59.251 55.482C59.4086 55.5613 59.5457 55.6759 59.6515 55.817C59.7574 55.958 59.8292 56.1217 59.8613 56.2951C59.8935 56.4685 59.885 56.647 59.8367 56.8167L57.8967 63.4833C57.8038 63.8005 57.6107 64.079 57.3463 64.2773C57.082 64.4756 56.7605 64.583 56.43 64.5833H22.4433L28.1867 45.1767L21.8334 47.11L23.2333 42.5733L29.6 40.64L37.6734 13.3733C37.7619 13.0545 37.952 12.7733 38.2149 12.5723C38.4778 12.3714 38.7991 12.2617 39.13 12.26H39.1267Z"
                fill="#59C19C"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_106">
                <rect width="80" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
        name: 'Litecoin',
        code: 'LTC',
        description:
          'Cryptocurrency that enables instant payments to anyone in the world.',
      },
    ]
    return (
      <div
        className="flex w-screen justify-center"
        style={{
          backgroundColor: '#F8F9FB',
        }}
      >
        <div className="container flex flex-col items-center pb-[100px]">
          <div
            className="rounded-b-2xl bg-white p-12 drop-shadow-[0px_80px_40px_#39177725]"
            style={{
              width: 942,
              height: 216,
            }}
          >
            <h1 className="font-rubik text-base font-medium uppercase not-italic leading-normal tracking-[.04em] text-brand-blue1">
              ESTIMATED 24 HOUR REVENUE:
            </h1>
            <h1 className="font-rubik text-[32px] font-bold not-italic leading-normal tracking-[.04em] text-brand">
              0.055 130 59 ETH <span className="text-brand-blue1">($1275)</span>
            </h1>
            <h1 className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-grey1">
              Revenue will change based on mining difficulty and Ethereum price.
            </h1>
          </div>

          <div
            className="mt-[50px]"
            style={{
              maxWidth: 741,
            }}
          >
            <h1 className="text-center font-rubik text-[40px] font-bold not-italic leading-normal text-brand">
              Trade securely and market the high growth cryptocurrencies.
            </h1>
          </div>

          <div className="my-auto mt-16 flex justify-between space-x-11">
            {coins.length > 0 &&
              coins.map((coin, ci) => (
                <MyCard key={`coin-${ci}`} coin={coin} />
              ))}
          </div>
        </div>
      </div>
    )
  }

  const renderSection6 = () => {
    const data = [
      {
        id: 1,
        title: 'Invest Smart',
        description:
          'Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. ',
        image: () => (
          <Image src={btcChartPic} alt="btcChart" width={580} height={427} />
        ),
        reverse: false,
      },
      {
        id: 2,
        title: 'Detailed Statistics',
        description:
          'View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.',
        image: () => (
          <Image
            src={statisticPic}
            alt="statisticPic"
            width={710}
            height={453}
          />
        ),
        reverse: true,
      },
      {
        id: 3,
        title: 'Grow your profit and track your investments',
        description:
          'Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.',
        image: () => (
          <Image src={tablePic} alt="tablePic" width={682} height={334} />
        ),
        reverse: false,
      },
    ]
    return (
      <div className="relative flex w-screen flex-col items-center bg-brand-primary py-[100px]">
        <div className="max-w-[758px]">
          <h1 className="text-center font-rubik text-[40px] font-bold not-italic leading-normal">
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h1>
        </div>

        {data.length &&
          data.map((item) => (
            <div
              className={`container mt-[100px] flex justify-between flex-row-${item.reverse ? 'reverse' : ''
                }`}
            >
              <div className="flex flex-1 flex-col">
                <div>
                  <h1 className="font-rubik text-[40px] font-bold not-italic leading-normal">
                    {item.title}
                  </h1>
                </div>

                <div className="mt-6">
                  <h1 className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription">
                    {item.description}
                  </h1>
                </div>

                <div className="mt-8">
                  <a
                    href="#"
                    className="rounded-full bg-brand-button py-3.5 px-8 text-center font-rubik text-base font-medium not-italic leading-6 tracking-[.01em]"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="flex flex-1">{item.image()}</div>
            </div>
          ))}

        <div
          className="absolute left-[151px] top-0"
          style={{
            width: 686,
            height: 292,
          }}
        >
          <Image
            src={semiCircle3Pic}
            alt="semiCircle3Pic"
            width={686}
            height={292}
          />
        </div>

        <div
          className="absolute right-0 bottom-0"
          style={{
            width: 320,
            height: 336,
          }}
        >
          <Image
            src={semiCircle4Pic}
            alt="semiCircle4Pic"
            width={320}
            height={336}
          />
        </div>
      </div>
    )
  }

  const renderSection7 = () => {
    return (
      <div className="relative flex min-h-[392px] w-screen justify-center bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] py-[88px] px-[120px]">
        <div className="container relative flex min-h-[216px] justify-between rounded-2xl bg-brand-blue1 p-12">
          <div className="flex flex-1 flex-col">
            <div>
              <h1 className="font-rubik text-[32px] font-bold not-italic leading-normal">
                Start mining now
              </h1>
            </div>

            <div className="mt-4">
              <h1 className="font-rubik text-base font-normal not-italic leading-7 tracking-[.01em]">
                Join now with CRAPPO to get the latest news and start mining now
              </h1>
            </div>
          </div>
          <div className="flex flex-1 items-center">
            <input
              type="text"
              className="w-full border-b-2 border-b-brand-borderBottom bg-transparent font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-white placeholder:font-rubik placeholder:text-base placeholder:font-normal placeholder:not-italic placeholder:leading-7 placeholder:tracking-[.01em] placeholder:text-white"
              placeholder="Enter your email"
            />
            <a
              href="#"
              className="ml-12 rounded-full bg-white py-3.5 px-8 text-center font-rubik text-lg font-medium not-italic leading-normal tracking-[.01em] text-brand"
            >
              Subscribe
            </a>
          </div>

          <div
            className="absolute left-[22px] top-0"
            style={{
              width: 160,
              height: 258 - 42,
            }}
          >
            <Image src={ethPic} alt="eth" width={160} height={258 - 42} />
          </div>

          <div
            className="absolute right-[15px] bottom-0"
            style={{
              width: 140,
              height: 185 - 50,
            }}
          >
            <Image src={btcPic} alt="btc" width={140} height={185 - 50} />
          </div>
        </div>

        <div
          className="absolute left-[35px] top-0"
          style={{
            width: 849,
            height: 392,
          }}
        >
          <Image src={slide3Pic} alt="slide3" width={849} height={392} />
        </div>

        <div
          className="absolute left-[395px] top-0"
          style={{
            width: 849,
            height: 392,
          }}
        >
          <Image src={slide4Pic} alt="slide4" width={849} height={392} />
        </div>
      </div>
    )
  }

  const renderFooter = () => {
    const payments = [
      {
        id: 1,
        icon: () => (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_493)">
              <path
                d="M34.8931 16.6551C33.7776 16.213 32.5985 15.9912 31.4112 16C27.5718 16 24.8602 18.1037 24.841 21.1236C24.817 23.3421 26.7679 24.5924 28.2437 25.3336C29.7579 26.0958 30.2642 26.576 30.2594 27.2573C30.2498 28.2935 29.05 28.7633 27.9341 28.7633C26.4008 28.7633 25.5633 28.531 24.2747 27.9489L23.7972 27.7062L23.2525 31.1828C24.1859 31.6056 25.8681 31.9684 27.6054 31.9998C31.6872 31.9998 34.3556 29.9091 34.3868 26.6961C34.4204 24.9238 33.3645 23.5849 31.1425 22.4782C29.7915 21.7604 28.954 21.2802 28.954 20.552C28.954 19.9073 29.6715 19.2182 31.1713 19.2182C32.1694 19.192 33.1614 19.3957 34.082 19.8159L34.442 19.9908L34.9867 16.6316L34.8931 16.6551ZM44.8564 16.2819H41.8569C40.9234 16.2819 40.2203 16.5612 39.8124 17.5687L34.0436 31.7831H38.1254L38.9413 29.4523L43.923 29.4575C44.0405 30.003 44.4005 31.7831 44.4005 31.7831H47.9999L44.8564 16.2819ZM19.3194 16.1514H23.2093L20.776 31.6604H16.891L19.3194 16.1462V16.1514ZM9.44492 24.6994L9.84806 26.8527L13.6491 16.2819H17.7693L11.6478 31.7622H7.53721L4.17771 18.6545C4.1233 18.4383 3.99552 18.2527 3.82017 18.135C2.60931 17.4547 1.32633 16.9384 -6.10352e-05 16.5977L0.0527309 16.2715H6.31339C7.16286 16.308 7.84676 16.5977 8.07473 17.5843L9.44252 24.7072V24.6994H9.44492ZM40.0571 26.2811L41.6073 21.9431C41.5881 21.9901 41.9265 21.0479 42.1232 20.4658L42.3896 21.8048L43.2894 26.2785H40.0547V26.2811H40.0571Z"
                fill="#E0E0E0"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_493">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        id: 2,
        icon: () => (
          <svg
            width="48"
            height="38"
            viewBox="0 0 48 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.4935 7.22754H30.4592V30.9539H17.4935V7.22754Z"
              fill="#BDBDBD"
            />
            <path
              d="M18.3167 19.091C18.3167 14.2703 20.5393 9.99445 23.9556 7.22771C21.4449 5.21562 18.2756 4 14.8181 4C6.62681 4 0 10.7489 0 19.091C0 27.4328 6.62681 34.1819 14.8179 34.1819C18.2754 34.1819 21.4447 32.9663 23.9556 30.954C20.5393 28.2293 18.3167 23.9116 18.3167 19.091Z"
              fill="#828282"
            />
            <path
              d="M47.9524 19.091C47.9524 27.4328 41.3256 34.1819 33.1345 34.1819C29.677 34.1819 26.5076 32.9663 23.9968 30.954C27.4543 28.1875 29.6359 23.9116 29.6359 19.091C29.6359 14.2703 27.4131 9.99445 23.9968 7.22771C26.5075 5.21562 29.677 4 33.1345 4C41.3256 4 47.9526 10.7909 47.9526 19.091H47.9524Z"
              fill="#E0E0E0"
            />
          </svg>
        ),
      },
      {
        id: 3,
        icon: () => (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_482)">
              <path
                d="M39.4018 24.8368C36.7296 35.5568 25.8685 42.0733 15.1638 39.401C4.44354 36.7288 -2.07302 25.8682 0.599319 15.1637C3.27151 4.44366 14.1168 -2.0729 24.8371 0.599443C35.5418 3.25601 42.0742 14.1166 39.4018 24.8368Z"
                fill="#E0E0E0"
              />
              <path
                d="M29.5231 17.5081C29.9138 14.8518 27.8981 13.4143 25.1169 12.4612L26.0231 8.85181L23.8356 8.30493L22.9606 11.8206C22.3825 11.6799 21.7888 11.5393 21.195 11.4143L22.07 7.88306L19.8825 7.33618L18.9919 10.9299C18.5075 10.8206 18.0388 10.7112 17.5856 10.6018V10.5862L14.5544 9.83618L13.9763 12.1799C13.9763 12.1799 15.6013 12.5549 15.57 12.5706C16.4606 12.7893 16.6169 13.3831 16.5856 13.8518L15.5544 17.9612C15.6169 17.9768 15.695 17.9924 15.7888 18.0393C15.7106 18.0237 15.6325 18.0081 15.5544 17.9768L14.1169 23.7268C14.0075 23.9924 13.7263 24.3987 13.1169 24.2424C13.1325 24.2737 11.5231 23.8518 11.5231 23.8518L10.4294 26.3674L13.2888 27.0862C13.82 27.2268 14.3356 27.3518 14.8513 27.4924L13.945 31.1331L16.1325 31.6799L17.0388 28.0706C17.6325 28.2268 18.2263 28.3831 18.7888 28.5237L17.8981 32.1174L20.0856 32.6643L20.9919 29.0237C24.7419 29.7268 27.5544 29.4456 28.7263 26.0549C29.6794 23.3362 28.6794 21.7581 26.7106 20.7268C28.1638 20.3987 29.2419 19.4456 29.5231 17.5081ZM24.5075 24.5393C23.8356 27.2581 19.2419 25.7893 17.7575 25.4143L18.9606 20.5862C20.445 20.9612 25.2263 21.6956 24.5075 24.5393ZM25.195 17.4612C24.57 19.9456 20.7575 18.6799 19.5231 18.3674L20.6169 13.9924C21.8513 14.3049 25.8356 14.8831 25.195 17.4612Z"
                fill="#0D0D2B"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_482">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
        ),
      },
    ]
    const quickLinks = [
      {
        id: 1,
        name: 'Home',
      },
      {
        id: 2,
        name: 'Products',
      },
      {
        id: 3,
        name: 'About',
      },
      {
        id: 4,
        name: 'Features',
      },
      {
        id: 5,
        name: 'Contact',
      },
    ]
    const resources = [
      {
        id: 1,
        name: 'Download Whitepapper',
      },
      {
        id: 2,
        name: 'Smart Token',
      },
      {
        id: 3,
        name: 'Blockchain Explorer',
      },
      {
        id: 4,
        name: 'Crypto API',
      },
      {
        id: 5,
        name: 'Interest',
      },
    ]
    return (
      <div className="flex w-screen justify-center bg-brand-black1 py-20">
        <div className="container">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9999 40C31.0456 40 39.9999 31.0457 39.9999 20C39.9999 8.95431 31.0456 0 19.9999 0C8.95424 0 -6.10352e-05 8.95431 -6.10352e-05 20C-6.10352e-05 31.0457 8.95424 40 19.9999 40Z"
                    fill="white"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M18.8424 28.0463C14.9124 27.4707 11.8964 24.0828 11.8964 19.9891C11.8964 15.8954 14.9124 12.5075 18.8424 11.9322V7.69238C12.5855 8.29084 7.69232 13.5677 7.69232 19.9891C7.69232 26.4104 12.5855 31.687 18.8424 32.2858V28.0463Z"
                    fill="white"
                  />
                  <path
                    d="M26.9983 12L26.8891 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 12L21.9999 20.2937L26.9984 23.2483V18.0217V12Z"
                    fill="white"
                  />
                  <path
                    d="M26.9986 24.8742L26.937 24.9492V28.7851L26.9986 28.9648L32 21.9211L26.9986 24.8742Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 28.9648V24.8742L21.9999 21.9211L26.9984 28.9648Z"
                    fill="white"
                  />
                  <path
                    d="M26.9984 23.2482L31.9968 20.2937L26.9984 18.0217V23.2482Z"
                    fill="white"
                  />
                  <path
                    d="M21.9999 20.2937L26.9983 23.2482V18.0217L21.9999 20.2937Z"
                    fill="white"
                  />
                </svg>
              </div>

              <h1 className="px-2 text-center font-inter text-lg font-semibold uppercase not-italic tracking-wider">
                CRAPPO
              </h1>
            </div>

            <div className="flex justify-between space-x-8">
              <div className="min-w-[200px]">
                <h1 className="font-rubik text-xl font-medium not-italic leading-normal">
                  Quick Link
                </h1>

                <div className="mt-6">
                  {quickLinks.length &&
                    quickLinks.map((link, li) => (
                      <h1
                        key={`link-${li}`}
                        className="font-rubik text-base not-italic leading-[38px]"
                      >
                        {link.name}
                      </h1>
                    ))}
                </div>
              </div>

              <div className="min-w-[200px]">
                <h1 className="font-rubik text-xl font-medium not-italic leading-normal">
                  Resources
                </h1>

                <div className="mt-6">
                  {resources.length &&
                    resources.map((resource, ri) => (
                      <h1
                        key={`resource-${ri}`}
                        className="font-rubik text-base not-italic leading-[38px]"
                      >
                        {resource.name}
                      </h1>
                    ))}
                </div>
              </div>
            </div>

            <div>
              <h1 className="font-rubik text-[32px] font-medium not-italic leading-normal">
                We accept following payment systems
              </h1>

              <div className="mt-10 flex space-x-6">
                {payments.length &&
                  payments.map((payment, pi) => (
                    <div
                      key={`payment-${pi}`}
                      className="flex h-16 w-24 items-center justify-center rounded-lg bg-brand-white10"
                    >
                      {payment.icon()}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-[120px] flex justify-between">
            <div>
              <h1 className="font-rubik text-base font-normal not-italic leading-[28px] tracking-[.01em]">
                ©2021 CRAPPO. All rights reserved
              </h1>
            </div>

            <div className="flex justify-between space-x-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.12 5.32003H17V2.14003C16.0897 2.04538 15.1751 1.99865 14.26 2.00003C11.54 2.00003 9.67999 3.66003 9.67999 6.70003V9.32003H6.60999V12.88H9.67999V22H13.36V12.88H16.42L16.88 9.32003H13.36V7.05003C13.36 6.00003 13.64 5.32003 15.12 5.32003Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23 9.70998C23.0495 8.27864 22.7365 6.858 22.09 5.57998C21.6514 5.05558 21.0427 4.70169 20.37 4.57998C17.5875 4.32751 14.7936 4.22403 12 4.26998C9.21667 4.22194 6.43274 4.32208 3.66003 4.56998C3.11185 4.6697 2.60454 4.92683 2.20003 5.30998C1.30003 6.13998 1.20003 7.55998 1.10003 8.75998C0.954939 10.9175 0.954939 13.0824 1.10003 15.24C1.12896 15.9154 1.22952 16.5858 1.40003 17.24C1.5206 17.745 1.76455 18.2123 2.11003 18.6C2.51729 19.0034 3.03641 19.2752 3.60003 19.38C5.75594 19.6461 7.92824 19.7564 10.1 19.71C13.6 19.76 16.67 19.71 20.3 19.43C20.8775 19.3316 21.4112 19.0595 21.83 18.65C22.11 18.3699 22.3191 18.0271 22.44 17.65C22.7977 16.5526 22.9733 15.4041 22.96 14.25C23 13.69 23 10.31 23 9.70998ZM9.74003 14.85V8.65998L15.66 11.77C14 12.69 11.81 13.73 9.74003 14.85Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5.79997C21.2483 6.12606 20.4534 6.34163 19.64 6.43997C20.4982 5.92729 21.1413 5.12075 21.45 4.16997C20.6436 4.65003 19.7608 4.98826 18.84 5.16997C18.2245 4.50254 17.405 4.05826 16.5098 3.90682C15.6147 3.75537 14.6945 3.90532 13.8938 4.33315C13.093 4.76099 12.4569 5.4425 12.0852 6.2708C11.7135 7.09911 11.6273 8.02736 11.84 8.90997C10.2094 8.82749 8.61444 8.40292 7.15865 7.66383C5.70287 6.92474 4.41885 5.88766 3.39 4.61997C3.02914 5.25013 2.83952 5.96379 2.84 6.68997C2.83872 7.36435 3.00422 8.02858 3.32176 8.62353C3.63929 9.21848 4.09902 9.72568 4.66 10.1C4.00798 10.0822 3.36989 9.90726 2.8 9.58997V9.63997C2.80489 10.5849 3.13599 11.4991 3.73731 12.2279C4.33864 12.9568 5.17326 13.4556 6.1 13.64C5.74326 13.7485 5.37287 13.8058 5 13.81C4.74189 13.807 4.48442 13.7835 4.23 13.74C4.49391 14.5528 5.00462 15.2631 5.69107 15.7721C6.37753 16.2811 7.20558 16.5635 8.06 16.58C6.6172 17.7152 4.83588 18.3348 3 18.34C2.66574 18.3411 2.33174 18.321 2 18.28C3.87443 19.4902 6.05881 20.1327 8.29 20.13C9.82969 20.146 11.3571 19.855 12.7831 19.274C14.2091 18.6931 15.505 17.8338 16.5952 16.7465C17.6854 15.6591 18.548 14.3654 19.1326 12.9409C19.7172 11.5164 20.012 9.98969 20 8.44997C20 8.27996 20 8.09997 20 7.91997C20.7847 7.33478 21.4615 6.61739 22 5.79997Z"
                  fill="white"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.47 1.9999H3.53C3.33958 1.99725 3.1505 2.03214 2.97356 2.10258C2.79663 2.17302 2.6353 2.27762 2.4988 2.41041C2.36229 2.5432 2.25328 2.70158 2.17799 2.87651C2.1027 3.05143 2.06261 3.23947 2.06 3.4299V20.5699C2.06261 20.7603 2.1027 20.9484 2.17799 21.1233C2.25328 21.2982 2.36229 21.4566 2.4988 21.5894C2.6353 21.7222 2.79663 21.8268 2.97356 21.8972C3.1505 21.9676 3.33958 22.0025 3.53 21.9999H20.47C20.6604 22.0025 20.8495 21.9676 21.0264 21.8972C21.2034 21.8268 21.3647 21.7222 21.5012 21.5894C21.6377 21.4566 21.7467 21.2982 21.822 21.1233C21.8973 20.9484 21.9374 20.7603 21.94 20.5699V3.4299C21.9374 3.23947 21.8973 3.05143 21.822 2.87651C21.7467 2.70158 21.6377 2.5432 21.5012 2.41041C21.3647 2.27762 21.2034 2.17302 21.0264 2.10258C20.8495 2.03214 20.6604 1.99725 20.47 1.9999ZM8.09 18.7399H5.09V9.7399H8.09V18.7399ZM6.59 8.4799C6.17626 8.4799 5.77947 8.31554 5.48691 8.02298C5.19435 7.73043 5.03 7.33363 5.03 6.9199C5.03 6.50616 5.19435 6.10937 5.48691 5.81681C5.77947 5.52425 6.17626 5.3599 6.59 5.3599C6.80969 5.33498 7.03217 5.35675 7.24287 5.42378C7.45357 5.49081 7.64774 5.60159 7.81265 5.74886C7.97757 5.89613 8.10952 6.07657 8.19987 6.27838C8.29021 6.48018 8.33692 6.69879 8.33692 6.9199C8.33692 7.141 8.29021 7.35961 8.19987 7.56141C8.10952 7.76322 7.97757 7.94366 7.81265 8.09093C7.64774 8.23821 7.45357 8.34898 7.24287 8.41601C7.03217 8.48304 6.80969 8.50481 6.59 8.4799ZM18.91 18.7399H15.91V13.9099C15.91 12.6999 15.48 11.9099 14.39 11.9099C14.0527 11.9124 13.7242 12.0182 13.4488 12.2131C13.1735 12.408 12.9645 12.6826 12.85 12.9999C12.7717 13.2349 12.7378 13.4825 12.75 13.7299V18.7299H9.75C9.75 18.7299 9.75 10.5499 9.75 9.7299H12.75V10.9999C13.0225 10.527 13.4189 10.1374 13.8964 9.8731C14.374 9.60878 14.9146 9.47975 15.46 9.4999C17.46 9.4999 18.91 10.7899 18.91 13.5599V18.7399Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main
      // className={styles.main}
      >
        <div className=" w-[100vw] overflow-x-hidden overflow-y-scroll bg-brand text-white">
          <div className="mx-auto flex h-[100vh] flex-col items-center">
            {renderNavbar()}
            {renderSection1()}
            {renderSection2()}
            {renderSection3()}
            {renderSection4()}
            {renderSection5()}
            {renderSection6()}
            {renderSection7()}
            {renderFooter()}
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
