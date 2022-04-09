import React from 'react'

export const MyCard = ({ coin }) => {
  return (
    <div
      className="flex flex-col items-center rounded-2xl py-12 px-6"
      style={{
        backgroundColor: coin.selected ? '#2B076E' : '#ffffff',
      }}
    >
      {typeof coin.icon === 'function' && coin.icon()}

      <div className="mt-12 flex items-center">
        <h1
          className="font-rubik text-[32px] font-bold not-italic leading-normal"
          style={{
            color: coin.selected ? '#ffffff' : '#0D0D2B',
          }}
        >
          {coin.name}
        </h1>
        <h1
          className="ml-2 font-rubik text-lg font-medium not-italic leading-normal"
          style={{
            color: coin.selected ? '#ffffff' : '#828282',
          }}
        >
          {coin.code}
        </h1>
      </div>

      <div className="mt-4 px-6">
        <h1
          className="text-center font-rubik text-base font-normal not-italic leading-7 tracking-[.01em] text-brand-sloganDescription"
          style={{
            color: coin.selected ? '#ffffff' : '#828282',
          }}
        >
          {coin.description}
        </h1>
      </div>

      <div className="mt-6">
        {coin.selected ? (
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-brand-button px-6 py-[18px]"
          >
            Start mining
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
        ) : (
          <a href="#">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="31"
                stroke="#2B076E"
                strokeOpacity="0.2"
                strokeWidth="2"
              />
              <path
                d="M28.9999 42.0002C28.7367 42.0017 28.4758 41.9512 28.2321 41.8517C27.9885 41.7522 27.7668 41.6055 27.5799 41.4202C27.3925 41.2342 27.2437 41.013 27.1422 40.7693C27.0406 40.5256 26.9883 40.2642 26.9883 40.0002C26.9883 39.7362 27.0406 39.4747 27.1422 39.231C27.2437 38.9873 27.3925 38.7661 27.5799 38.5802L34.1999 32.0002L27.8399 25.3802C27.4674 25.0054 27.2584 24.4985 27.2584 23.9702C27.2584 23.4418 27.4674 22.9349 27.8399 22.5602C28.0259 22.3727 28.2471 22.2239 28.4908 22.1224C28.7345 22.0209 28.9959 21.9686 29.2599 21.9686C29.524 21.9686 29.7854 22.0209 30.0291 22.1224C30.2728 22.2239 30.494 22.3727 30.6799 22.5602L38.3999 30.5602C38.7664 30.934 38.9717 31.4367 38.9717 31.9602C38.9717 32.4837 38.7664 32.9863 38.3999 33.3602L30.3999 41.3602C30.2204 41.554 30.0043 41.7104 29.764 41.8203C29.5237 41.9301 29.264 41.9913 28.9999 42.0002Z"
                fill="#3671E9"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
