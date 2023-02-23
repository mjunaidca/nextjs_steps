import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h2>02 Box</h2>
     <div>
            <div className='mt-20 mb-10 bg-yellow-50'>
              <div>This is a first line</div>
              <button className='bg-yellow-500 p-4 m-4'>Button</button>
              <div>This is a last line</div>
            </div>
            <div>
              <div>
                Margins, Paddings, and Borders
              </div>
              <div className="mt-20 mb-10">
                <button className="p-10 border border-black">One</button>
                <button className="m-10 border border-black">Two</button>
                <button className="m-2 p-2 border-4 border-black">Three</button>
              </div>
              <div>
                <button className="m-4 p-4 border-2 border-black rounded-md">
                Four
                </button>
                <button className="m-4 p-4 border-2 border-black rounded-2xl">
                Five
                </button>
                <button className="m-4 p-4 border-2 border-black rounded-full">
                Six
                </button>
            </div>
          </div>
      </div>

      <h2>03 Flex</h2>
      <div className="flex">
      <div className="quote">
        <p>“The success combination in business is: Do what you do better... and: do more of what you do.”</p>
        <span>- David J. Schwartz</span>
      </div>
      <div className="quote">
        <p>“Give out what you most want to come back.”</p>
        <span>- Robin Sharma</span>
      </div>
      <div className="quote">
        <p>“You don't have to be great at something to start, but you have to start to be great at something.”</p>
        <span>- Zig Ziglar</span>
      </div>
    </div>

    <h2>04 Justif Content</h2>
    <div className="wrapper">
        <div className="menu flex justify-between">
          <a href="#" className="active">Profile</a>
          <a href="#">Notifications</a>
          <a href="#">Payments</a>
          <a href="#">Settings</a>
        </div>
    </div>

    </>
  )
}
